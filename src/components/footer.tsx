import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mom-burgundy py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="font-script text-2xl font-bold text-white">
              Mom's Spaghetti
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-white text-sm">Follow Us</span>
            <div className="flex space-x-4">
              <Facebook className="text-white hover:text-amber-200 cursor-pointer transition-colors" size={20} />
              <Instagram className="text-white hover:text-amber-200 cursor-pointer transition-colors" size={20} />
              <Twitter className="text-white hover:text-amber-200 cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-white text-sm">
              Contact: hello@momsspaghetti.com | (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;