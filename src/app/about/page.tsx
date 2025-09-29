'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { MapPin, Phone, Mail, Clock, Heart, Users, Flower } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Isabella Flora',
      role: 'Master Florist & Founder',
      description: 'With over 25 years of experience, Isabella creates breathtaking arrangements that capture the essence of nature.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Emma Rosewood',
      role: 'Senior Floral Designer',
      description: 'Specializing in wedding and event florals, Emma brings creativity and elegance to every arrangement.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Oliver Garden',
      role: 'Boutique Manager',
      description: 'Ensuring every customer receives personalized service and finds the perfect flowers for their special moments.',
      image: '/api/placeholder/200/200'
    }
  ];

  const values = [
    {
      icon: <Heart className="text-rose" size={32} />,
      title: 'Crafted with Care',
      description: 'Every arrangement is handcrafted with attention to detail and love for the art of floriculture.'
    },
    {
      icon: <Users className="text-forest" size={32} />,
      title: 'Personal Touch',
      description: 'We work closely with each customer to create arrangements that perfectly capture their vision and emotions.'
    },
    {
      icon: <Flower className="text-sage" size={32} />,
      title: 'Fresh & Seasonal',
      description: 'We source the finest, freshest flowers from local growers and seasonal suppliers for optimal beauty and longevity.'
    }
  ];

  return (
    <div className="min-h-screen flora-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-script text-forest mb-4">
            About Elegant Flora Boutique
          </h1>
          <p className="text-xl text-sage max-w-3xl mx-auto leading-relaxed">
            A premier flower boutique creating stunning floral arrangements
            for life's most precious moments since 1998.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-script text-forest mb-6">Our Story</h2>
              <div className="space-y-4 text-sage leading-relaxed">
                <p>
                  Founded in 1998 by master florist Isabella Flora, Elegant Flora Boutique began as a
                  small flower shop with a passion for creating beautiful arrangements that tell stories.
                  Isabella's love for flowers started in her grandmother's garden, where she learned that
                  each bloom has its own language and meaning.
                </p>
                <p>
                  Over the years, we've grown into a premier boutique specializing in weddings, corporate
                  events, and everyday moments that deserve something special. Our team of skilled florists
                  combines traditional techniques with contemporary design to create arrangements that are
                  both timeless and uniquely personal.
                </p>
                <p>
                  Today, Elegant Flora Boutique is more than just a flower shop – we're curators of beauty,
                  storytellers through petals, and partners in life's most meaningful celebrations. Every
                  arrangement we create carries our commitment to excellence and our love for the natural
                  artistry of flowers.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/boutique-interior.png"
                alt="Elegant Flora Boutique interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-script text-forest text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white p-6 text-center shadow-lg">
                <CardContent>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-forest mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sage leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-script text-forest text-center mb-12">
            Meet Our Team
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
                  <h3 className="text-xl font-semibold text-forest mb-2">
                    {member.name}
                  </h3>
                  <p className="text-rose font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sage text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact & Location */}
        <section>
          <h2 className="text-3xl font-script text-forest text-center mb-12">
            Visit Us Today
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-script text-forest mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-forest" size={24} />
                    <div>
                      <p className="text-sage font-semibold">Address</p>
                      <p className="text-sage">456 Garden Boulevard<br />Flower District, NY 10012</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-forest" size={24} />
                    <div>
                      <p className="text-sage font-semibold">Phone</p>
                      <p className="text-sage">(555) 234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-forest" size={24} />
                    <div>
                      <p className="text-sage font-semibold">Email</p>
                      <p className="text-sage">hello@elegantfloraboutique.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-forest" size={24} />
                    <div>
                      <p className="text-sage font-semibold">Hours</p>
                      <div className="text-sage">
                        <p>Monday - Friday: 9 AM - 7 PM</p>
                        <p>Saturday: 9 AM - 8 PM</p>
                        <p>Sunday: 10 AM - 6 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <Button className="w-full flora-rose hover:bg-pink-600">
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full border-forest text-forest hover:flora-green hover:text-white">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-script text-forest mb-6">Find Us</h3>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">456 Garden Boulevard, Flower District, NY</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Parking:</strong> Free parking available behind the boutique.
                    Additional street parking and nearby Garden Center Garage.
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