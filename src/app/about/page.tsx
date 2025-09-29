'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { MapPin, Phone, Mail, Clock, Heart, Users, ChefHat } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Nonna Maria',
      role: 'Head Chef & Founder',
      description: 'The heart of our kitchen, bringing 60+ years of authentic Italian cooking.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Tony Rossi',
      role: 'Executive Chef',
      description: 'Third generation chef carrying on the family tradition with passion.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Sofia Rossi',
      role: 'Restaurant Manager',
      description: 'Ensuring every guest feels like family with warm, welcoming service.',
      image: '/api/placeholder/200/200'
    }
  ];

  const values = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: 'Made with Love',
      description: 'Every dish is prepared with the same love and care as we would for our own family.'
    },
    {
      icon: <Users className="text-burgundy" size={32} />,
      title: 'Family Tradition',
      description: 'Three generations of authentic Italian recipes passed down through our family.'
    },
    {
      icon: <ChefHat className="text-green-600" size={32} />,
      title: 'Fresh Ingredients',
      description: 'We source only the finest, freshest ingredients to ensure authentic flavors.'
    }
  ];

  return (
    <div className="min-h-screen mom-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-script text-burgundy mb-4">
            About Mom's Spaghetti
          </h1>
          <p className="text-xl text-warm-brown max-w-3xl mx-auto leading-relaxed">
            A third-generation family restaurant serving authentic Italian cuisine
            in the heart of Little Italy since 1952.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-script text-burgundy mb-6">Our Story</h2>
              <div className="space-y-4 text-warm-brown leading-relaxed">
                <p>
                  It all started in 1952 when Nonna Maria and Nonno Giuseppe immigrated from
                  Sicily with nothing but their family recipes and a dream. They opened a
                  small trattoria in Little Italy, serving authentic dishes that reminded
                  fellow immigrants of home.
                </p>
                <p>
                  Three generations later, we continue to honor their legacy. Every sauce is
                  made from scratch, every pasta is cooked to perfection, and every guest is
                  treated like family. Our recipes haven't changed – we still use Nonna's
                  handwritten notes, stained with decades of love.
                </p>
                <p>
                  Today, Mom's Spaghetti is more than a restaurant – it's a piece of Little Italy
                  history, where tradition meets warmth, and every meal tells a story of family,
                  heritage, and the American dream.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/api/placeholder/500/400"
                alt="Family restaurant history"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-script text-burgundy text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white p-6 text-center shadow-lg">
                <CardContent>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-burgundy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-warm-brown leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-script text-burgundy text-center mb-12">
            Meet Our Family
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white text-center shadow-lg">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-burgundy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-warm-brown text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact & Location */}
        <section>
          <h2 className="text-3xl font-script text-burgundy text-center mb-12">
            Visit Us Today
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-script text-burgundy mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-burgundy" size={24} />
                    <div>
                      <p className="text-warm-brown font-semibold">Address</p>
                      <p className="text-warm-brown">123 Pasta Lane<br />Little Italy, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-burgundy" size={24} />
                    <div>
                      <p className="text-warm-brown font-semibold">Phone</p>
                      <p className="text-warm-brown">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-burgundy" size={24} />
                    <div>
                      <p className="text-warm-brown font-semibold">Email</p>
                      <p className="text-warm-brown">hello@momsspaghetti.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-burgundy" size={24} />
                    <div>
                      <p className="text-warm-brown font-semibold">Hours</p>
                      <div className="text-warm-brown">
                        <p>Monday - Thursday: 11 AM - 9 PM</p>
                        <p>Friday - Saturday: 11 AM - 10 PM</p>
                        <p>Sunday: 12 PM - 9 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <Button className="w-full mom-green hover:bg-green-800">
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full border-burgundy text-burgundy hover:mom-burgundy hover:text-white">
                    Make a Reservation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-script text-burgundy mb-6">Find Us</h3>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Pasta Lane, Little Italy, NY</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Parking:</strong> Street parking available. Validated parking at
                    Little Italy Garage (2 blocks away) for dinner guests.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}