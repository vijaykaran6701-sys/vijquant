import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { supabase } from '@/lib/supabase';
import { Send, CheckCircle, User, Mail, MessageSquare, Briefcase } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
          status: 'new'
        }]);

      if (submitError) {
        throw submitError;
      }
      
      setIsSubmitted(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const inputClasses = (fieldName: string) => `
    w-full px-5 py-4 pl-12 rounded-xl
    bg-white/5 border border-white/10
    text-white placeholder-gray-500
    focus:outline-none focus:border-blue-500/50 focus:bg-white/10
    transition-all duration-300
    ${focusedField === fieldName ? 'border-blue-500/50 bg-white/10 shadow-lg shadow-blue-500/10' : ''}
  `;

  const iconClasses = (fieldName: string) => `
    absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300
    ${focusedField === fieldName ? 'text-blue-400' : 'text-gray-500'}
  `;

  if (isSubmitted) {
    return (
      <GlassCard glowColor="mixed" className="p-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
          <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard glowColor="mixed" className="p-8 md:p-10" hover3D={false}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <User className={iconClasses('name')} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses('name')}
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail className={iconClasses('email')} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses('email')}
          />
        </div>

        {/* Company Field */}
        <div className="relative">
          <Briefcase className={iconClasses('company')} />
          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            value={formData.company}
            onChange={handleChange}
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses('company')}
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <MessageSquare className={`absolute left-4 top-5 w-5 h-5 transition-colors duration-300 ${focusedField === 'message' ? 'text-blue-400' : 'text-gray-500'}`} />
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required
            rows={5}
            className={`${inputClasses('message')} resize-none`}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-blue-600 to-violet-600
            hover:from-blue-500 hover:to-violet-500
            transition-all duration-300
            shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40
            flex items-center justify-center gap-3
            disabled:opacity-70 disabled:cursor-not-allowed
            transform hover:scale-[1.02] active:scale-[0.98]
          `}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </GlassCard>
  );
};

export default ContactForm;
