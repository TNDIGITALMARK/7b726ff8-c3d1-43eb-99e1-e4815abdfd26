'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const featuredArrangements = [
    {
      id: 1,
      name: 'Romantic Rose Bouquet',
      image: '/images/rose-bouquet.png',
      description: 'Elegant red roses with eucalyptus and baby\'s breath'
    },
    {
      id: 2,
      name: 'Spring Garden Mix',
      image: '/images/spring-garden.png',
      description: 'Fresh seasonal blooms in soft pastel colors'
    },
    {
      id: 3,
      name: 'Elegant Lily Arrangement',
      image: '/images/lily-arrangement.png',
      description: 'Sophisticated white lilies with greenery'
    },
    {
      id: 4,
      name: 'Wildflower Medley',
      image: '/images/wildflower-medley.png',
      description: 'Natural wildflowers in a rustic bouquet style'
    }
  ];

  return (
    <div className="min-h-screen flora-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center hero-overlay"
          style={{
            backgroundImage: 'url(/images/hero-floral.png)',
          }}
        />
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-script font-bold mb-4 drop-shadow-lg">
            Elegant Flora
          </h1>
          <h2 className="text-2xl md:text-3xl font-script mb-6 drop-shadow-lg">
            Boutique Blooms
          </h2>
          <Button
            asChild
            size="lg"
            className="flora-green hover:bg-green-800 text-white font-semibold px-8 py-3 text-lg"
          >
            <Link href="/menu">Browse Arrangements</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Our Story Section */}
          <Card className="p-6 bg-white shadow-lg">
            <CardContent className="text-center">
              <img
                src="/images/boutique-interior.png"
                alt="Elegant flower boutique interior"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-script text-forest mb-4">Our Story</h3>
              <p className="text-sage leading-relaxed">
                Founded with a passion for beautiful blooms, Elegant Flora Boutique
                creates stunning floral arrangements for life's most precious moments.
                Each arrangement is handcrafted with the finest seasonal flowers.
              </p>
            </CardContent>
          </Card>

          {/* Featured Arrangements Section */}
          <Card className="p-6 bg-white shadow-lg">
            <CardContent className="text-center">
              <h3 className="text-2xl font-script text-forest mb-6">Featured Arrangements</h3>
              <div className="grid grid-cols-2 gap-4">
                {featuredArrangements.map((arrangement) => (
                  <div key={arrangement.id} className="text-center">
                    <img
                      src={arrangement.image}
                      alt={arrangement.name}
                      className="w-full h-20 object-cover rounded mb-2"
                    />
                    <h4 className="text-sm font-semibold text-sage">{arrangement.name}</h4>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="mt-6 flora-green hover:bg-green-800"
              >
                <Link href="/menu">View All Arrangements</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Visit Us Section */}
          <Card className="p-6 bg-white shadow-lg">
            <CardContent className="text-center">
              <img
                src="/images/boutique-storefront.png"
                alt="Elegant Flora Boutique storefront"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-script text-forest mb-4">Visit Us</h3>
              <div className="text-sage space-y-2 mb-6">
                <p>456 Garden Boulevard</p>
                <p>Flower District, NY 10012</p>
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={16} />
                  <span>Open Daily 9 AM - 7 PM</span>
                </div>
              </div>
              <Button
                className="flora-rose hover:bg-pink-600"
              >
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Customer Testimonials */}
        <section className="mt-16">
          <h3 className="text-3xl font-script text-forest text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="flex justify-center space-x-2 mb-8">
            {[1,2,3,4,5].map((star) => (
              <span key={star} className="text-2xl text-yellow-500">★</span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white">
              <CardContent>
                <p className="text-sage italic mb-4">
                  "The most beautiful wedding bouquet! Every detail was perfect and the flowers lasted for days."
                </p>
                <p className="text-forest font-semibold">- Sarah M.</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white">
              <CardContent>
                <p className="text-sage italic mb-4">
                  "Elegant Flora creates magic with flowers. Their arrangements brighten any occasion!"
                </p>
                <p className="text-forest font-semibold">- Michael K.</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white">
              <CardContent>
                <p className="text-sage italic mb-4">
                  "Professional service and the freshest flowers in town. I'm a customer for life!"
                </p>
                <p className="text-forest font-semibold">- Jennifer L.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}