import React from 'react';
import { MapPin, Phone, Mail, Clock, Twitter, Linkedin, Github } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Visit us',
    content: '123 Construction Ave, Suite 100\nSan Francisco, CA 94105',
  },
  {
    icon: Phone,
    label: 'Call us',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: Mail,
    label: 'Email us',
    content: 'support@effibid.com',
    link: 'mailto:support@effibid.com',
  },
  {
    icon: Clock,
    label: 'Business hours',
    content: 'Monday - Friday\n9:00 AM - 6:00 PM PST',
  },
];

const socialLinks = [
  {
    icon: Twitter,
    href: 'https://twitter.com/effibid',
    label: 'Twitter',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/effibid',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/effibid',
    label: 'GitHub',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <div className="grid gap-8">
          {contactDetails.map((item) => (
            <div key={item.label} className="flex gap-4 group">
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 text-indigo-600 group-hover:text-indigo-500 transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.label}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-indigo-600 transition-colors whitespace-pre-line"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow us</h3>
        <div className="flex gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
              aria-label={item.label}
            >
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="card p-6 bg-indigo-50">
        <h3 className="font-semibold text-indigo-900 mb-2">Need immediate assistance?</h3>
        <p className="text-indigo-700 mb-4">
          Our support team is available during business hours for urgent inquiries.
        </p>
        <a
          href="tel:+15551234567"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          <Phone className="h-4 w-4 mr-2" />
          Call Support
        </a>
      </div>
    </div>
  );
}