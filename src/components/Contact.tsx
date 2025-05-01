import React, { useRef, useState } from 'react';
import { Mail, Send, MapPin, Phone, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thanks for your message! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, label: 'Instagram', url: '#' },
    { icon: <Twitter size={20} />, label: 'Twitter', url: '#' },
    { icon: <Facebook size={20} />, label: 'Facebook', url: '#' },
    { icon: <Youtube size={20} />, label: 'YouTube', url: '#' }
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Get In</span> Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Mail size={20} className="text-pink-500 mr-2" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="Booking">Booking Inquiry</option>
                    <option value="Media">Media Request</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-pink-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Management Office</p>
                    <p className="text-gray-400">123 Music Street, Suite 456</p>
                    <p className="text-gray-400">Los Angeles, CA 90001</p>
                  </div>
                </li>
                
                <li className="flex items-center">
                  <Mail size={20} className="text-pink-500 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:booking@mcshmal.com" className="text-gray-400 hover:text-pink-500 transition-colors">booking@mcshmal.com</a>
                  </div>
                </li>
                
                <li className="flex items-center">
                  <Phone size={20} className="text-pink-500 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-pink-500 transition-colors">+1 (234) 567-890</a>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Follow MC Shmal</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="flex items-center py-3 px-4 bg-gray-700/50 rounded-lg hover:bg-pink-500/20 hover:border-pink-500 border border-gray-700 transition-all duration-300"
                  >
                    <span className="mr-3 text-pink-500">{social.icon}</span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gray-700/30 rounded-lg text-center">
                <p className="text-gray-300 text-sm">
                  For press inquiries, please contact our PR team at 
                  <a href="mailto:press@mcshmal.com" className="text-pink-500 hover:underline ml-1">press@mcshmal.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;