'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    occasion: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      occasion: 'general'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen mom-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-script text-burgundy mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-warm-brown max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our menu,
            want to make a reservation, or plan a special event.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-script text-burgundy mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-warm-brown font-semibold">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-burgundy focus:ring-burgundy"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-warm-brown font-semibold">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-burgundy focus:ring-burgundy"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-warm-brown font-semibold">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-burgundy focus:ring-burgundy"
                  />
                </div>

                <div>
                  <Label htmlFor="occasion" className="text-warm-brown font-semibold">What can we help you with?</Label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:border-burgundy focus:ring-burgundy focus:ring-1"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Table Reservation</option>
                    <option value="private">Private Event/Catering</option>
                    <option value="feedback">Feedback/Complaint</option>
                    <option value="employment">Employment Opportunity</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-warm-brown font-semibold">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    className="mt-1 border-gray-300 focus:border-burgundy focus:ring-burgundy"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full mom-burgundy hover:bg-red-800 text-white"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-warm-brown text-sm">
                  <strong>Quick Response:</strong> We typically respond to all inquiries within 24 hours.
                  For urgent matters or same-day reservations, please call us directly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information & Hours */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-script text-burgundy mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 mom-burgundy rounded-full">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-warm-brown font-semibold">Phone</p>
                      <p className="text-burgundy text-lg">(555) 123-4567</p>
                      <p className="text-warm-brown text-sm">Call for reservations & takeout</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 mom-burgundy rounded-full">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-warm-brown font-semibold">Email</p>
                      <p className="text-burgundy">hello@momsspaghetti.com</p>
                      <p className="text-warm-brown text-sm">We'll reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 mom-burgundy rounded-full">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-warm-brown font-semibold">Address</p>
                      <p className="text-burgundy">123 Pasta Lane</p>
                      <p className="text-burgundy">Little Italy, NY 10001</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-script text-burgundy mb-6">Hours of Operation</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-warm-brown font-semibold">Monday - Thursday</span>
                    <span className="text-burgundy">11 AM - 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-brown font-semibold">Friday - Saturday</span>
                    <span className="text-burgundy">11 AM - 10 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-brown font-semibold">Sunday</span>
                    <span className="text-burgundy">12 PM - 9 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <Clock className="inline mr-2" size={16} />
                    <strong>Last Order:</strong> 30 minutes before closing time
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Special Events */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-script text-burgundy mb-4">Private Events & Catering</h2>
                <p className="text-warm-brown mb-4">
                  Planning a special celebration? We offer private dining and catering services
                  for birthdays, anniversaries, corporate events, and more.
                </p>
                <ul className="text-warm-brown text-sm space-y-2">
                  <li>• Private dining room for up to 40 guests</li>
                  <li>• Off-site catering available</li>
                  <li>• Custom menu planning</li>
                  <li>• Wine and beverage packages</li>
                </ul>
                <Button className="w-full mt-4 mom-green hover:bg-green-800">
                  Learn About Private Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}