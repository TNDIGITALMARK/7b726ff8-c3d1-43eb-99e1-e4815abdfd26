'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  vegetarian?: boolean;
  spicy?: boolean;
}

interface CartItem extends MenuItem {
  quantity: number;
}

export default function MenuPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems: MenuItem[] = [
    // Pasta Classics
    {
      id: 1,
      name: 'Classic Spaghetti Marinara',
      description: 'Traditional spaghetti with our signature marinara sauce, fresh basil, and parmesan cheese',
      price: 16.95,
      category: 'Pasta Classics',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Fettuccine Alfredo',
      description: 'Creamy alfredo sauce with fresh herbs over tender fettuccine pasta',
      price: 18.95,
      category: 'Pasta Classics',
      image: '/api/placeholder/300/200',
      vegetarian: true
    },
    {
      id: 3,
      name: 'Penne Arrabbiata',
      description: 'Spicy tomato sauce with garlic, red peppers, and fresh herbs',
      price: 17.95,
      category: 'Pasta Classics',
      image: '/api/placeholder/300/200',
      spicy: true,
      vegetarian: true
    },
    {
      id: 4,
      name: 'Lasagna Della Casa',
      description: 'Layers of pasta, meat sauce, ricotta, mozzarella, and parmesan cheese',
      price: 21.95,
      category: 'Pasta Classics',
      image: '/api/placeholder/300/200'
    },

    // Specialty Dishes
    {
      id: 5,
      name: 'Chicken Parmigiana',
      description: 'Breaded chicken breast with marinara sauce and melted mozzarella, served with spaghetti',
      price: 23.95,
      category: 'Specialty Dishes',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'Shrimp Scampi',
      description: 'Sautéed shrimp in white wine, garlic, and butter sauce over linguine',
      price: 26.95,
      category: 'Specialty Dishes',
      image: '/api/placeholder/300/200'
    },
    {
      id: 7,
      name: 'Eggplant Parmigiana',
      description: 'Layers of breaded eggplant with marinara sauce and melted cheese',
      price: 19.95,
      category: 'Specialty Dishes',
      image: '/api/placeholder/300/200',
      vegetarian: true
    },

    // Appetizers
    {
      id: 8,
      name: 'Bruschetta',
      description: 'Toasted bread with fresh tomatoes, garlic, basil, and olive oil',
      price: 9.95,
      category: 'Appetizers',
      image: '/api/placeholder/300/200',
      vegetarian: true
    },
    {
      id: 9,
      name: 'Antipasto Platter',
      description: 'Selection of Italian meats, cheeses, olives, and roasted peppers',
      price: 16.95,
      category: 'Appetizers',
      image: '/api/placeholder/300/200'
    },
    {
      id: 10,
      name: 'Mozzarella Sticks',
      description: 'Golden fried mozzarella served with marinara sauce',
      price: 11.95,
      category: 'Appetizers',
      image: '/api/placeholder/300/200',
      vegetarian: true
    },

    // Desserts
    {
      id: 11,
      name: 'Tiramisu',
      description: 'Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone',
      price: 7.95,
      category: 'Desserts',
      image: '/api/placeholder/300/200',
      vegetarian: true
    },
    {
      id: 12,
      name: 'Cannoli',
      description: 'Crispy shells filled with sweet ricotta and chocolate chips',
      price: 6.95,
      category: 'Desserts',
      image: '/api/placeholder/300/200',
      vegetarian: true
    }
  ];

  const categories = ['All', 'Appetizers', 'Pasta Classics', 'Specialty Dishes', 'Desserts'];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item: MenuItem) => {
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
    <div className="min-h-screen mom-cream">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-script text-burgundy mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-warm-brown max-w-2xl mx-auto">
            Authentic Italian dishes prepared with love and the finest ingredients,
            just like Nonna used to make.
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
                ? "mom-burgundy hover:bg-red-800"
                : "border-burgundy text-burgundy hover:mom-burgundy hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Shopping Cart Summary */}
        {cartItemsCount > 0 && (
          <Card className="mb-8 bg-white border-burgundy">
            <CardHeader>
              <CardTitle className="flex items-center text-burgundy">
                <ShoppingCart className="mr-2" size={24} />
                Your Order ({cartItemsCount} items)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="text-warm-brown">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-burgundy font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-burgundy">Total:</span>
                    <span className="text-burgundy">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 mom-green hover:bg-green-800">
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
                    <h3 className="text-xl font-semibold text-burgundy">{item.name}</h3>
                    <div className="flex gap-1">
                      {item.vegetarian && (
                        <Badge variant="secondary" className="mom-green text-white">V</Badge>
                      )}
                      {item.spicy && (
                        <Badge variant="destructive">🌶️</Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-warm-brown mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-burgundy">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-3">
                      {quantity > 0 && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                            className="border-burgundy text-burgundy hover:mom-burgundy hover:text-white"
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="text-lg font-semibold text-burgundy min-w-[20px] text-center">
                            {quantity}
                          </span>
                        </>
                      )}
                      <Button
                        size="sm"
                        onClick={() => addToCart(item)}
                        className="mom-burgundy hover:bg-red-800"
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