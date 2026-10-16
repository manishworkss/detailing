import { Lead, LeadStatus, AnalyticsEvent } from '../types';

const STORAGE_KEY = 'd_glossy_den_leads_v1';
const EVENTS_KEY = 'd_glossy_den_events_v1';

// Initial realistic baseline leads for D Glossy Den (Vadodara)
const DEFAULT_LEADS: Lead[] = [
  {
    id: 'lead-17101',
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    name: 'Hardik Patel',
    phone: '+91 98250 14820',
    email: 'hardik.patel@gmail.com',
    vehicleModel: '2024 Toyota Fortuner Legender',
    service: 'Paint Protection Film (PPF)',
    preferredDate: '2026-10-18',
    vadodaraArea: 'Alkapuri',
    notes: 'Needs full front bumper + bonnet PPF before highway drive to Ahmedabad.',
    status: 'New',
    leadSource: 'Website Quote Form',
    utmSource: 'google_local',
    utmMedium: 'organic',
    utmCampaign: 'vadodara_detailing'
  },
  {
    id: 'lead-17102',
    createdAt: new Date(Date.now() - 14 * 3600 * 1000).toISOString(),
    name: 'Dr. Mihir Desai',
    phone: '+91 98791 22419',
    email: 'm.desai@apollohospitals.com',
    vehicleModel: '2023 Mercedes-Benz E-Class E220d',
    service: '9H Multi-Layer Ceramic Coating',
    preferredDate: '2026-10-19',
    vadodaraArea: 'Vasna-Bhayli Road',
    notes: 'Swirl marks on black paint from daily apartment dry wiping. Wants gloss restoration.',
    status: 'Contacted',
    leadSource: 'WhatsApp Click',
    utmSource: 'instagram',
    utmMedium: 'social',
    utmCampaign: 'before_after_reel',
    staffNotes: 'Spoke with customer. Sent video walkthrough of 2-stage paint correction.'
  },
  {
    id: 'lead-17103',
    createdAt: new Date(Date.now() - 36 * 3600 * 1000).toISOString(),
    name: 'Parthiv Shah',
    phone: '+91 99099 53218',
    vehicleModel: '2022 Hyundai Creta SX(O)',
    service: 'Concours Multi-Stage Paint Correction',
    preferredDate: '2026-10-15',
    vadodaraArea: 'Gotri',
    notes: 'Deep scratches on passenger side door.',
    status: 'Booked',
    leadSource: 'Website Booking CTA',
    utmSource: 'google_ads',
    utmMedium: 'cpc',
    utmCampaign: 'paint_correction_vadodara',
    staffNotes: 'Booked slot for Thursday 10:00 AM. Estimate ₹16,500 after physical inspection.',
    followUpDate: '2026-10-15'
  }
];

export const validatePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
  return phoneRegex.test(cleanPhone);
};

export const getStoredLeads = (): Lead[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_LEADS));
      return DEFAULT_LEADS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading leads from storage:', err);
    return DEFAULT_LEADS;
  }
};

export const saveLead = async (leadInput: Omit<Lead, 'id' | 'createdAt' | 'status' | 'leadSource'>): Promise<{ success: boolean; lead?: Lead; error?: string }> => {
  try {
    // 1. Validation
    if (!leadInput.name || leadInput.name.trim().length < 2) {
      return { success: false, error: 'Please enter a valid full name (at least 2 characters).' };
    }

    const cleanPhone = leadInput.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return { success: false, error: 'Please enter a valid 10-digit Indian mobile number.' };
    }

    if (!leadInput.vehicleModel || leadInput.vehicleModel.trim().length < 2) {
      return { success: false, error: 'Please provide vehicle make and model (e.g., Hyundai Creta, BMW 3 Series).' };
    }

    // 2. Parse UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || undefined;
    const utmMedium = urlParams.get('utm_medium') || undefined;
    const utmCampaign = urlParams.get('utm_campaign') || undefined;

    const newLead: Lead = {
      ...leadInput,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'New',
      leadSource: utmSource ? `Campaign (${utmSource})` : 'Website Direct',
      utmSource,
      utmMedium,
      utmCampaign
    };

    // 3. Persist locally
    const current = getStoredLeads();
    const updated = [newLead, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // 4. Optional Webhook dispatch (Formspree, Zapier, Make, n8n, custom server)
    const webhookUrl = (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL;
    if (webhookUrl && typeof webhookUrl === 'string' && webhookUrl.startsWith('http')) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            business: 'D Glossy Den - Vadodara',
            ...newLead
          })
        });
      } catch (webhookErr) {
        console.warn('Webhook dispatch failed, but lead saved locally:', webhookErr);
      }
    }

    // 5. Track analytics event
    trackEvent('form_submit', `Enquiry: ${newLead.service}`, newLead.vehicleModel);

    return { success: true, lead: newLead };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Submission failed. Please call or WhatsApp us directly.' };
  }
};

export const updateLeadStatus = (id: string, status: LeadStatus, staffNotes?: string, followUpDate?: string): Lead[] => {
  const current = getStoredLeads();
  const updated = current.map((lead) => {
    if (lead.id === id) {
      return {
        ...lead,
        status,
        ...(staffNotes !== undefined ? { staffNotes } : {}),
        ...(followUpDate !== undefined ? { followUpDate } : {})
      };
    }
    return lead;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteLead = (id: string): Lead[] => {
  const current = getStoredLeads();
  const updated = current.filter((lead) => lead.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

// Analytics & Conversion Event Bus
export const trackEvent = (
  eventName: AnalyticsEvent['eventName'],
  label: string,
  value?: string
) => {
  const eventData: AnalyticsEvent = {
    eventName,
    label,
    value,
    timestamp: new Date().toISOString(),
    path: window.location.pathname + window.location.hash
  };

  // 1. Google Analytics 4 (gtag) dispatch if window.gtag exists
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, {
      event_category: 'D Glossy Den Lead Gen',
      event_label: label,
      value: value
    });
  }

  // 2. Meta Pixel dispatch if window.fbq exists
  if (typeof (window as any).fbq === 'function') {
    if (eventName === 'form_submit') {
      (window as any).fbq('track', 'Lead', { content_name: label });
    } else if (eventName === 'whatsapp_click' || eventName === 'phone_click') {
      (window as any).fbq('track', 'Contact', { content_name: label });
    }
  }

  // 3. Local logging for studio audit
  try {
    const rawEvents = localStorage.getItem(EVENTS_KEY);
    const events: AnalyticsEvent[] = rawEvents ? JSON.parse(rawEvents) : [];
    events.unshift(eventData);
    // Keep last 150 events
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events.slice(0, 150)));
  } catch (e) {
    // ignore
  }

  console.log(`[D Glossy Den Analytics] ${eventName}:`, label, value || '');
};

// CSV Export for studio management
export const exportLeadsToCSV = (leads: Lead[]) => {
  const headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'Vehicle', 'Service', 'Area in Vadodara', 'Preferred Date', 'Status', 'Lead Source', 'Customer Notes', 'Staff Notes', 'Follow-up Date'];
  const rows = leads.map((l) => [
    l.id,
    new Date(l.createdAt).toLocaleString('en-IN'),
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${l.phone}"`,
    `"${l.email || ''}"`,
    `"${(l.vehicleModel || '').replace(/"/g, '""')}"`,
    `"${(l.service || '').replace(/"/g, '""')}"`,
    `"${(l.vadodaraArea || '').replace(/"/g, '""')}"`,
    `"${l.preferredDate || ''}"`,
    l.status,
    `"${l.leadSource || ''}"`,
    `"${(l.notes || '').replace(/"/g, '""')}"`,
    `"${(l.staffNotes || '').replace(/"/g, '""')}"`,
    `"${l.followUpDate || ''}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `d_glossy_den_leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
