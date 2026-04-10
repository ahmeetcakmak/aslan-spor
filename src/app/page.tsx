'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { SimpleButton as Button } from '@/components/ui/SimpleButton';
import { ArrowRight, Star, Users, Target, CheckCircle, Quote } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'BESYO Hazırlık',
    description: 'Parkur, koordinasyon ve dayanıklılık odaklı yoğun program.',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
    badge: 'BESYO',
    features: ['Parkur Teknikleri', 'Koordinasyon', 'Dayanıklılık']
  },
  {
    id: 2,
    title: 'PMYO Hazırlık',
    description: 'Zamanla yarışan parkurlar için hız ve çeviklik antrenmanları.',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
    badge: 'PMYO',
    features: ['Hız Antrenmanı', 'Çeviklik', 'Parkur Simülasyonu']
  },
  {
    id: 3,
    title: 'Polislik Hazırlık',
    description: 'Güç, dayanıklılık ve esneklik bileşenlerinin dengeli geliştirilmesi.',
    bgColor: 'bg-gradient-to-br from-red-500 to-red-700',
    badge: 'Polislik',
    features: ['Güç Antrenmanı', 'Dayanıklılık', 'Esneklik']
  },
  {
    id: 4,
    title: 'Spor Akademisi',
    description: 'Temel motorik özelliklerin gelişimine yönelik uzun dönemli program.',
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700',
    badge: 'Akademi',
    features: ['Motorik Gelişim', 'Teknik', 'Taktik']
  },
];

const instructorQuotes = [
  {
    quote: 'Başarı, düzenli ve ölçülebilir çalışmanın sonucudur.',
    author: 'Ali Cem Aslan',
    role: 'Atletizm Uzmanı'
  },
  {
    quote: 'Tekniğini mükemmelleştir, süre kendiliğinden düşer.',
    author: 'Büşra Eftekin',
    role: 'Kuvvet Antrenmanı'
  },
  {
    quote: 'Süreklilik, dayanıklılığın anahtarıdır.',
    author: 'Mustafa Yiğiter',
    role: 'Dayanıklılık Uzmanı'
  },
];

const stats = [
  { number: '500+', label: 'Eğitim Alan Öğrenci', icon: Users },
  { number: '10+', label: 'Yıl Tecrübe', icon: Star },
  { number: '24/7', label: 'Destek', icon: Target },
];


export default function HomePage() {
  const router = useRouter();
  
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white block mb-2">
                BESYO ve PMYO
              </span>
              <span className="text-white block">
                Hazırlıkta <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Doğru Adres</span>
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Modern tesisler, uzman hocalar ve ölçülebilir gelişim odaklı programlar.
              <br className="hidden md:block" />
              Hedeflerinize giden yolda yanındayız.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 justify-center items-center w-full max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full flex items-center justify-center space-x-2"
                onClick={() => router.push('/contact')}
              >
                <span>Bilgi Al / Kayıt Ol</span>
                <ArrowRight size={20} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full text-white border-white hover:border-opacity-80 hover:text-gray-200"
                onClick={() => router.push('/courses')}
              >
                Kurslarımızı İncele
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-accent" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Tanıtım ve Duyuru */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-display mb-6">
                Aslan Spor Akademisi - Hedefine Giden Yolda Yanındayız
              </h2>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  Performansınızı kapsamlı testlerle ölçüyor, kişiye özel antrenmanlarla hız, 
                  kuvvet ve dayanıklılık gelişimini takip ediyoruz. Uzman kadromuzla 
                  BESYO ve PMYO sınavlarına hazırlanmanız için gereken tüm desteği sağlıyoruz.
                </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Kişiye özel antrenman programları',
                  'Performans ölçümü',
                  'Uzman antrenör kadrosu',
                  'Profesyonel ekipmanlar'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse" />
                  Duyurular
                </h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <p className="text-muted text-sm">
                      🎯 Yeni dönem kayıtları başladı. Erken kayıt fırsatları için iletişime geçin.
                    </p>
                  </div>
                  <div>
                    <p className="text-muted text-sm">
                      📊 Ücretsiz performans testi için randevu alabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Kurslar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-display mb-4">
              Öne Çıkan Kurslar
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Hedefine uygun programı seç, uzman kadromuzla başarıya ulaş
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <div className={`w-full h-48 ${course.bgColor} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                    <div className="text-white text-6xl font-bold opacity-20">
                      {course.badge}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => router.push('/courses')}
                  >
                    Detayları İncele
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hocalarımızdan Alıntılar */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-display mb-4">
              Hocalarımızdan
            </h2>
            <p className="text-lg text-muted">Uzmanlarımızın deneyim ve bilgilerinden</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructorQuotes.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <blockquote className="text-muted text-lg leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{item.author}</div>
                  <div className="text-sm text-primary">{item.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-display mb-6">
              Hedeflerine Ulaşmaya Hazır mısın?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Aslan Spor Akademisi'nin uzman kadrosu ve bilimsel programlarıyla BESYO ve PMYO sınavlarında başarıya ulaş.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => router.push('/contact')}
              >
                Hemen Kayıt Ol
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://wa.me/905432470021', '_blank')}
              >
                WhatsApp ile İletişim
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}