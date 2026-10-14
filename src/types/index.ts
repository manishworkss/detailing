export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Booked' | 'Completed' | 'Lost';

export interface Lead {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email?: string;
  vehicleModel: string;
  service: string;
  preferredDate?: string;
  vadodaraArea?: string;
  notes?: string;
  status: LeadStatus;
  leadSource: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  staffNotes?: string;
  followUpDate?: string;
}

export interface AnalyticsEvent {
  eventName: 'cta_click' | 'phone_click' | 'whatsapp_click' | 'form_start' | 'form_submit' | 'service_select';
  label: string;
  value?: string;
  timestamp: string;
  path: string;
}

export interface DetailingPackage {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  duration: string;
  startingPrice: string;
  priceNote: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Ceramic Coating' | 'PPF' | 'Paint Correction' | 'Maintenance & Booking';
}
