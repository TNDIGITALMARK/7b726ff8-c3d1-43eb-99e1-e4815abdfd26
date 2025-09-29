'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const featuredDishes = [
    {
      id: 1,
      name: 'Classic Spaghetti',
      image: '/api/placeholder/300/200',
      description: 'Our signature dish with homemade marinara sauce'
    },
    {
      id: 2,
      name: 'Fettuccine Alfredo',
      image: '/api/placeholder/300/200',
      description: 'Creamy Alfredo sauce with fresh herbs'
    },
    {
      id: 3,
      name: 'Lasagna',
      image: '/api/placeholder/300/200',
      description: 'Layers of pasta, meat, and cheese baked to perfection'
    },
    {
      id: 4,
      name: 'Penne Arrabbiata',
      image: '/api/placeholder/300/200',
      description: 'Spicy tomato sauce with garlic and red peppers'
    }
  ];

  return (
    <div className="min-h-screen mom-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center hero-overlay"
          style={{
            backgroundImage: 'url(/api/placeholder/1200/600)',
          }}
        />
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-script font-bold mb-4 drop-shadow-lg">
            Taste the Love
          </h1>
          <h2 className="text-2xl md:text-3xl font-script mb-6 drop-shadow-lg">
            in Every Bite
          </h2>
          <Button
            asChild
            size="lg"
            className="mom-burgundy hover:bg-red-800 text-white font-semibold px-8 py-3 text-lg"
          >
            <Link href="/menu">View Our Menu</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Our Story Section */}
          <Card className="p-6 bg-white shadow-lg">
            <CardContent className="text-center">
              <img
                src="/api/placeholder/300/200"
                alt="Family cooking"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-script text-burgundy mb-4">Our Story</h3>
              <p className="text-warm-brown leading-relaxed">
                A third-generation family restaurant serving authentic Italian recipes
                passed down through our family. Every dish is prepared with love and the
                finest ingredients, just like Nonna used to make.
              </p>
            </CardContent>
          </Card>

          {/* Featured Dishes Section */}
          <Card className="p-6 bg-white shadow-lg">
            <CardContent className="text-center">
              <h3 className="text-2xl font-script text-burgundy mb-6">Featured Dishes</h3>
              <div className="grid grid-cols-2 gap-4">
                {featuredDishes.map((dish) => (
                  <div key={dish.id} className="text-center">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-20 object-cover rounded mb-2"
                    />
                    <h4 className="text-sm font-semibold text-warm-brown">{dish.name}</h4>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="mt-6 mom-burgundy hover:bg-red-800"
              >
                <Link href="/menu">Full Menu</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Visit Us Section */}
          <Card className="p-6 bg-white shadow-lg">
            <CardContent className="text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <MapPin className="text-gray-400" size={48} />
              </div>
              <h3 className="text-2xl font-script text-burgundy mb-4">Visit Us</h3>
              <div className="text-warm-brown space-y-2 mb-6">
                <p>123 Pasta Lane</p>
                <p>Little Italy, NY 10001</p>
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={16} />
                  <span>Open Daily 11 AM - 10 PM</span>
                </div>
              </div>
              <Button
                className="mom-green hover:bg-green-800"
              >
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Customer Testimonials */}
        <section className="mt-16">
          <h3 className="text-3xl font-script text-burgundy text-center mb-8">
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
                <p className="text-warm-brown italic mb-4">
                  "Best Italian food in the city! The spaghetti tastes just like my grandmother's recipe."
                </p>
                <p className="text-burgundy font-semibold">- Maria R.</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white">
              <CardContent>
                <p className="text-warm-brown italic mb-4">
                  "Family-owned warmth with incredible authentic flavors. A true gem!"
                </p>
                <p className="text-burgundy font-semibold">- Tony S.</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white">
              <CardContent>
                <p className="text-warm-brown italic mb-4">
                  "The lasagna is phenomenal - layers of heaven! We come here every week."
                </p>
                <p className="text-burgundy font-semibold">- Lisa M.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}