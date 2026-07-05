import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { EMAILJS_CONFIG, PERSONAL_INFO } from '../utils/constants';
import { isNotEmpty, isValidEmail } from '../utils/helpers';
import SectionTitle from './SectionTitle';
import SocialIcons from './SocialIcons';

const initialFormState = { name: '', email: '', subject: '', message: '' };

const contactDetails = [
  { icon: Mail, label: 'Email', value: PERSONAL_INFO.email },
  { icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone },
  { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location },
];

/**
 * Contact section with a validated form wired up to EmailJS, and
 * toast notifications for success/error feedback.
 */
const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!isNotEmpty(formData.name)) newErrors.name = 'Please enter your name.';
    if (!isNotEmpty(formData.email)) {
      newErrors.email = 'Please enter your email.';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!isNotEmpty(formData.subject)) newErrors.subject = 'Please enter a subject.';
    if (!isNotEmpty(formData.message)) newErrors.message = 'Please write a message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the highlighted fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_CONFIG.publicKey
      );
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData(initialFormState);
    } catch (error) {
      console.error("EmailJS Error:", error);

  toast.error(
    error?.text || error?.message || "Something went wrong."
  );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
    { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Let\u2019s work together' },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-6 md:p-8 flex flex-col gap-6">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted">{label}</p>
                    <p className="text-sm md:text-base text-white font-medium break-words">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
              <p className="text-sm text-muted mb-4">Find me on social media</p>
              <SocialIcons />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {fields.slice(0, 2).map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label htmlFor={field.name} className="text-sm text-white/80">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors duration-300 ${
                      errors[field.name] ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors[field.name] && (
                    <span className="text-xs text-red-400">{errors[field.name]}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm text-white/80">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Let&apos;s work together"
                value={formData.subject}
                onChange={handleChange}
                className={`bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors duration-300 ${
                  errors.subject ? 'border-red-500' : 'border-white/10'
                }`}
              />
              {errors.subject && <span className="text-xs text-red-400">{errors.subject}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-white/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className={`bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors duration-300 resize-none ${
                  errors.message ? 'border-red-500' : 'border-white/10'
                }`}
              />
              {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-accent transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
