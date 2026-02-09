import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  // 1. STATE LOGIC
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. HANDLER LOGIC
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Thanks ${formData.name}! Message sent.`);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-teal-400 mb-4">Get In Touch</h2>
          <p className="text-gray-400">Have a project in mind or just want to say hi?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-800 rounded-lg text-teal-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">ayushdby902@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-800 rounded-lg text-teal-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">Noida, India</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 text-white transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 text-white transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 text-white transition-colors"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-500 hover:bg-teal-600 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;