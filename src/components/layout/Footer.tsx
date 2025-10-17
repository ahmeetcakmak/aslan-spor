'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hocalarımız', href: '/instructors' },
  { name: 'Kurslar', href: '/courses' },
  { name: 'İletişim', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/aslansporakademisi/', icon: Instagram },
  { name: 'Facebook', href: 'https://www.instagram.com/aslansporakademisi/', icon: Facebook },
  { name: 'YouTube', href: 'https://www.instagram.com/aslansporakademisi/', icon: Youtube },
];

export default function Footer() {
  const router = useRouter();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/aslan-logo.png"
                  alt="Aslan Spor Akademisi Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold font-display">Aslan Spor Akademisi</div>
                <div className="text-gray-400">BESYO ve PMYO Hazırlık</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md mb-6">
              BESYO ve PMYO hazırlıkta disiplinli, bilimsel ve sonuç odaklı programlar. 
              Uzman kadromuzla hedeflerinize ulaşın.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-primary" />
                <a href="tel:+905337491843" className="hover:text-white transition-colors">
                  +90 533 749 18 43
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@aslanspor.com" className="hover:text-white transition-colors">
                  info@aslanspor.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-primary" />
                <span>Çay Çiçeği Sk., Bahçelievler, İstanbul</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Hızlı Erişim</h3>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Takip Et</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-200"
                    aria-label={item.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-white">Haber Bülteni</h4>
              <div className="flex">
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary text-sm"
                  autoComplete="email"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-light transition-colors font-medium text-sm">
                  Abone Ol
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm"
        >
          <div className="mb-4 md:mb-0">
            © 2025 Aslan Spor Akademisi. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => router.push('/privacy')} 
              className="hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </button>
            <button 
              onClick={() => router.push('/terms')} 
              className="hover:text-white transition-colors"
            >
              Kullanım Şartları
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
