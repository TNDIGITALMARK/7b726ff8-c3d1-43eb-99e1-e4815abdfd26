'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface ArrangementItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  seasonal?: boolean;
  premium?: boolean;
}

interface CartItem extends ArrangementItem {
  quantity: number;
}

export default function MenuPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const arrangementItems: ArrangementItem[] = [
    // Bridal & Wedding
    {
      id: 1,
      name: 'Classic Bridal Bouquet',
      description: 'Elegant white roses with eucalyptus and baby\'s breath, perfect for your special day',
      price: 85.00,
      category: 'Bridal & Wedding',
      image: '/images/rose-bouquet.png',
      premium: true
    },
    {
      id: 2,
      name: 'Wedding Centerpiece',
      description: 'Low elegant arrangement with white lilies and greenery for reception tables',
      price: 45.00,
      category: 'Bridal & Wedding',
      image: '/images/lily-arrangement.png',
      premium: true
    },
    {
      id: 3,
      name: 'Bridesmaids Bouquet',
      description: 'Smaller complementary bouquet with soft pastel flowers',
      price: 35.00,
      category: 'Bridal & Wedding',
      image: '/images/spring-garden.png'
    },

    // Seasonal Arrangements
    {
      id: 4,
      name: 'Spring Garden Mix',
      description: 'Fresh seasonal blooms including tulips, daffodils, and hyacinths',
      price: 42.00,
      category: 'Seasonal Arrangements',
      image: '/images/spring-garden.png',
      seasonal: true
    },
    {
      id: 5,
      name: 'Summer Wildflower',
      description: 'Natural wildflowers with sunflowers, lavender, and daisies',
      price: 38.00,
      category: 'Seasonal Arrangements',
      image: '/images/wildflower-medley.png',
      seasonal: true
    },
    {
      id: 6,
      name: 'Autumn Harvest',
      description: 'Rich oranges and deep reds with seasonal foliage and berries',
      price: 48.00,
      category: 'Seasonal Arrangements',
      image: '/images/rose-bouquet.png',
      seasonal: true
    },

    // Classic Bouquets
    {
      id: 7,
      name: 'Romantic Rose Bouquet',
      description: 'Dozen red roses with eucalyptus and baby\'s breath in elegant wrapping',
      price: 65.00,
      category: 'Classic Bouquets',
      image: '/images/rose-bouquet.png'
    },
    {
      id: 8,
      name: 'Elegant Lily Arrangement',
      description: 'Sophisticated white lilies with lush greenery in a tall vase',
      price: 55.00,
      category: 'Classic Bouquets',
      image: '/images/lily-arrangement.png'
    },
    {
      id: 9,
      name: 'Mixed Spring Bouquet',
      description: 'Cheerful mix of seasonal flowers in soft pastel colors',
      price: 40.00,
      category: 'Classic Bouquets',
      image: '/images/spring-garden.png'
    },

    // Corporate & Events
    {
      id: 10,
      name: 'Corporate Lobby Display',
      description: 'Large statement arrangement for office spaces and corporate events',
      price: 125.00,
      category: 'Corporate & Events',
      image: '/images/lily-arrangement.png',
      premium: true
    },
    {
      id: 11,
      name: 'Event Centerpiece',
      description: 'Medium-sized elegant arrangement perfect for dining tables',
      price: 55.00,
      category: 'Corporate & Events',
      image: '/images/spring-garden.png'
    },
    {
      id: 12,
      name: 'Reception Arrangement',
      description: 'Welcoming floral display for entrance areas and reception desks',
      price: 75.00,
      category: 'Corporate & Events',
      image: '/images/wildflower-medley.png'
    }
  ];

  const categories = ['All', 'Classic Bouquets', 'Bridal & Wedding', 'Seasonal Arrangements', 'Corporate & Events'];

  const filteredItems = selectedCategory === 'All'
    ? arrangementItems
    : arrangementItems.filter(item => item.category === selectedCategory);

  const addToCart = (item: ArrangementItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => {
      return prevCart.reduce((acc, cartItem) => {
        if (cartItem.id === itemId) {
          if (cartItem.quantity > 1) {
            acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, [] as CartItem[]);
    });
  };

  const getItemQuantity = (itemId: number) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flora-cream">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-script text-forest mb-4">
            Our Arrangements
          </h1>
          <p className="text-xl text-sage max-w-2xl mx-auto">
            Handcrafted floral arrangements created with the finest blooms
            and attention to every beautiful detail.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category
                ? "flora-green hover:bg-green-800"
                : "border-forest text-forest hover:flora-green hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Shopping Cart Summary */}
        {cartItemsCount > 0 && (
          <Card className="mb-8 bg-white border-forest">
            <CardHeader>
              <CardTitle className="flex items-center text-forest">
                <ShoppingCart className="mr-2" size={24} />
                Your Order ({cartItemsCount} items)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="text-sage">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-forest font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-forest">Total:</span>
                    <span className="text-forest">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 flora-rose hover:bg-pink-600">
                  Place Order
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <Card key={item.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-forest">{item.name}</h3>
                    <div className="flex gap-1">
                      {item.seasonal && (
                        <Badge variant="secondary" className="flora-sage text-forest">Seasonal</Badge>
                      )}
                      {item.premium && (
                        <Badge className="flora-rose text-white">Premium</Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sage mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-forest">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-3">
                      {quantity > 0 && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                            className="border-forest text-forest hover:flora-green hover:text-white"
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="text-lg font-semibold text-forest min-w-[20px] text-center">
                            {quantity}
                          </span>
                        </>
                      )}
                      <Button
                        size="sm"
                        onClick={() => addToCart(item)}
                        className="flora-green hover:bg-green-800"
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}