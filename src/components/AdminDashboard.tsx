import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Unlock,
  X,
  Search,
  Filter,
  Download,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle,
  Clock,
  User,
  Car,
  Tag,
  FileText,
  AlertCircle,
  RefreshCw,
  Trash2
} from 'lucide-react';
import { Lead, LeadStatus } from '../types';
import {
  getStoredLeads,
  updateLeadStatus,
  deleteLead,
  exportLeadsToCSV
} from '../services/leadService';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_PIN = 'DG2026';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('d_glossy_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');

  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [serviceFilter, setServiceFilter] = useState<string>('All');

  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [staffNoteInput, setStaffNoteInput] = useState<string>('');
  const [followUpDateInput, setFollowUpDateInput] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setLeads(getStoredLeads());
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem('d_glossy_admin_auth', 'true');
      setPinError('');
      setLeads(getStoredLeads());
    } else {
      setPinError('Incorrect Studio PIN. Try: DG2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('d_glossy_admin_auth');
    setPinInput('');
  };

  const handleStatusChange = (id: string, newStatus: LeadStatus) => {
    const updated = updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this lead record permanently?')) {
      const updated = deleteLead(id);
      setLeads(updated);
    }
  };

  const handleSaveNotes = () => {
    if (!editingLead) return;
    const updated = updateLeadStatus(
      editingLead.id,
      editingLead.status,
      staffNoteInput,
      followUpDateInput
    );
    setLeads(updated);
    setEditingLead(null);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.phone || '').includes(searchTerm) ||
      (lead.vehicleModel || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.vadodaraArea || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchesService = serviceFilter === 'All' || lead.service.toLowerCase().includes(serviceFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesService;
  });

  const stats = {
    total: leads.length,
    newCount: leads.filter((l) => l.status === 'New').length,
    bookedCount: leads.filter((l) => l.status === 'Booked').length,
    completedCount: leads.filter((l) => l.status === 'Completed').length
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#0E1015] border border-[#C5A059]/40 overflow-hidden flex flex-col shadow-2xl">
        {/* Top Header */}
        <div className="bg-[#141720] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#1A1D27] border border-[#C5A059]/50 flex items-center justify-center text-[#DEC07E]">
              {isAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h2 className="font-cinzel text-base sm:text-lg font-bold text-white leading-none">
                D Glossy Den — Lead Management Portal
              </h2>
              <p className="text-[10px] text-[#A0A0A9] mt-1">
                Vadodara Customer Inquiries & Service Pipeline
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-2.5 py-1 text-[11px] text-[#A0A0A9] hover:text-white border border-white/10 hover:border-white/30 rounded cursor-pointer"
              >
                Sign Out
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#9E9EA7] hover:text-white transition-colors cursor-pointer"
              aria-label="Close portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Authentication Form */
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-md bg-[#12141A] border border-[#C5A059]/30 p-8 rounded-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#1A1D27] border border-[#C5A059] flex items-center justify-center mx-auto mb-4 text-[#DEC07E]">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                Studio Staff Authorization
              </h3>
              <p className="text-xs text-[#9E9EA7] mb-6">
                Enter your authorized 6-digit access PIN to view customer lead data and studio inquiries.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder="Enter Studio PIN (Default: DG2026)"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    className="w-full bg-[#08090B] border border-white/20 px-4 py-3 text-sm text-center tracking-widest text-white focus:border-[#C5A059] focus:outline-none"
                    autoFocus
                  />
                  {pinError && (
                    <p className="text-xs text-red-400 mt-2 flex items-center justify-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {pinError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-luxury-primary w-full text-xs cursor-pointer"
                >
                  Unlock Lead Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* KPI Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-[#12141A] border border-white/5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#A0A0A9] block">
                  Total Inquiries
                </span>
                <span className="font-cinzel text-2xl font-bold text-white mt-1 block">
                  {stats.total}
                </span>
              </div>
              <div className="p-4 bg-[#12141A] border border-[#C5A059]/30">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#DEC07E] block">
                  New Uncontacted
                </span>
                <span className="font-cinzel text-2xl font-bold text-[#DEC07E] mt-1 block">
                  {stats.newCount}
                </span>
              </div>
              <div className="p-4 bg-[#12141A] border border-emerald-500/30">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                  Booked Appointments
                </span>
                <span className="font-cinzel text-2xl font-bold text-emerald-400 mt-1 block">
                  {stats.bookedCount}
                </span>
              </div>
              <div className="p-4 bg-[#12141A] border border-white/5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8E919C] block">
                  Completed Services
                </span>
                <span className="font-cinzel text-2xl font-bold text-[#8E919C] mt-1 block">
                  {stats.completedCount}
                </span>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#12141A] p-3 border border-white/5">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 text-[#7A7A85] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by customer name, phone, vehicle, or area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#08090B] border border-white/10 pl-9 pr-3 py-2 text-xs text-white placeholder-[#64646D] focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#08090B] border border-white/10 px-3 py-2 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Booked">Booked</option>
                  <option value="Completed">Completed</option>
                  <option value="Lost">Lost</option>
                </select>

                <select
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                  className="bg-[#08090B] border border-white/10 px-3 py-2 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                >
                  <option value="All">All Services</option>
                  <option value="PPF">PPF</option>
                  <option value="Ceramic">Ceramic</option>
                  <option value="Correction">Paint Correction</option>
                  <option value="Interior">Interior</option>
                </select>

                <button
                  onClick={() => exportLeadsToCSV(filteredLeads)}
                  className="px-3 py-2 bg-[#181B24] hover:bg-[#222632] border border-[#C5A059]/40 text-[#DEC07E] text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  title="Export to CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export CSV</span>
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="border border-white/10 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#141720] border-b border-white/10 text-[#8E919C] uppercase font-semibold text-[10px] tracking-wider">
                    <th className="py-3 px-4">Date / Source</th>
                    <th className="py-3 px-4">Customer Details</th>
                    <th className="py-3 px-4">Vehicle & Area</th>
                    <th className="py-3 px-4">Requested Service</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-[#7A7A85]">
                        No matching customer leads found.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => {
                      const cleanPhone = lead.phone.replace(/[\s\-()]/g, '');
                      const waUrl = `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone.replace(/^\+/, '')}?text=Hello%20${encodeURIComponent(lead.name)}%2C%20this%20is%20D%20Glossy%20Den%20Vadodara%20following%20up%20on%20your%20inquiry%20for%20${encodeURIComponent(lead.vehicleModel)}.`;

                      return (
                        <tr key={lead.id} className="hover:bg-[#12151E] transition-colors">
                          {/* Date & Source */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <span className="text-white font-medium block">
                              {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                            <span className="text-[10px] text-[#C5A059] block mt-0.5">
                              {lead.leadSource}
                            </span>
                          </td>

                          {/* Customer */}
                          <td className="py-3.5 px-4">
                            <span className="text-white font-semibold block">{lead.name}</span>
                            <span className="text-[#8E919C] text-[11px] block">{lead.phone}</span>
                            {lead.email && <span className="text-[#64646D] text-[10px]">{lead.email}</span>}
                          </td>

                          {/* Vehicle & Area */}
                          <td className="py-3.5 px-4">
                            <span className="text-[#DEC07E] font-medium block">{lead.vehicleModel}</span>
                            <span className="text-[10px] text-[#8E919C] block">
                              📍 {lead.vadodaraArea || 'Vadodara'}
                            </span>
                          </td>

                          {/* Service & Notes */}
                          <td className="py-3.5 px-4 max-w-[200px]">
                            <span className="text-white block truncate">{lead.service}</span>
                            {lead.preferredDate && (
                              <span className="text-[10px] text-[#8E919C] block">
                                Pref: {lead.preferredDate}
                              </span>
                            )}
                            {lead.notes && (
                              <span className="text-[10px] text-[#7A7A85] block truncate mt-0.5" title={lead.notes}>
                                "{lead.notes}"
                              </span>
                            )}
                          </td>

                          {/* Status */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <select
                              value={lead.status}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                              className={`text-[11px] font-bold px-2.5 py-1 border rounded-xs bg-[#0A0C10] cursor-pointer ${
                                lead.status === 'New'
                                  ? 'text-yellow-400 border-yellow-400/50'
                                  : lead.status === 'Contacted'
                                  ? 'text-blue-400 border-blue-400/50'
                                  : lead.status === 'Qualified'
                                  ? 'text-purple-400 border-purple-400/50'
                                  : lead.status === 'Booked'
                                  ? 'text-emerald-400 border-emerald-400/50'
                                  : lead.status === 'Completed'
                                  ? 'text-green-400 border-green-400/50'
                                  : 'text-red-400 border-red-400/50'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Qualified">Qualified</option>
                              <option value="Booked">Booked</option>
                              <option value="Completed">Completed</option>
                              <option value="Lost">Lost</option>
                            </select>
                          </td>

                          {/* Actions */}
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              <a
                                href={`tel:${cleanPhone}`}
                                className="p-1.5 bg-[#181B24] hover:bg-[#252A38] text-white border border-white/10 rounded"
                                title="Call Customer"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                              </a>
                              <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 bg-[#181B24] hover:bg-[#252A38] text-white border border-white/10 rounded"
                                title="WhatsApp Customer"
                              >
                                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                              </a>
                              <button
                                onClick={() => {
                                  setEditingLead(lead);
                                  setStaffNoteInput(lead.staffNotes || '');
                                  setFollowUpDateInput(lead.followUpDate || '');
                                }}
                                className="p-1.5 bg-[#181B24] hover:bg-[#252A38] text-[#DEC07E] border border-white/10 rounded cursor-pointer"
                                title="Add Staff Notes"
                              >
                                <FileText className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDelete(lead.id)}
                                className="p-1.5 bg-[#181B24] hover:bg-red-950/60 text-red-400 border border-white/10 rounded cursor-pointer"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Note Editor Modal Sub-dialog */}
            {editingLead && (
              <div className="p-4 bg-[#141720] border border-[#C5A059]/40 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel text-xs font-bold text-white">
                    Technician / Follow-up Notes for: {editingLead.name} ({editingLead.vehicleModel})
                  </h4>
                  <button
                    onClick={() => setEditingLead(null)}
                    className="text-xs text-[#A0A0A9] hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <textarea
                      rows={2}
                      placeholder="e.g. Quoted ₹24,000 for Ceramic Shield. Customer requested Friday slot."
                      value={staffNoteInput}
                      onChange={(e) => setStaffNoteInput(e.target.value)}
                      className="w-full bg-[#08090B] border border-white/10 p-2 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#8E919C] block mb-1">Follow-up Date:</label>
                    <input
                      type="date"
                      value={followUpDateInput}
                      onChange={(e) => setFollowUpDateInput(e.target.value)}
                      className="w-full bg-[#08090B] border border-white/10 p-2 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                    />
                    <button
                      onClick={handleSaveNotes}
                      className="mt-2 w-full py-1.5 bg-[#C5A059] text-black font-bold text-xs uppercase cursor-pointer"
                    >
                      Save Notes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
