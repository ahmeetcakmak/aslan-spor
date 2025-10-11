'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Clock, Users, CheckCircle, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'BESYO Hazırlık Programı',
    description: 'BESYO sınavlarına özel tasarlanmış kapsamlı hazırlık programı',
    duration: '8-12 ay',
    students: '150+',
    features: [
      'Parkur Teknikleri Eğitimi',
      'Koordinasyon Gelişimi',
      'Dayanıklılık Antrenmanı',
      'Hız ve Çeviklik',
      'Esneklik ve Mobilite',
      'Beslenme Danışmanlığı',
      'Performans Testleri',
      'Kişisel Antrenör Desteği'
    ],
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
    badge: 'BESYO'
  },
  {
    id: 2,
    title: 'PMYO Hazırlık Programı',
    description: 'PMYO sınavları için özel olarak hazırlanmış yoğun program',
    duration: '8-12 ay',
    students: '120+',
    features: [
      'Zamanlı Parkur Antrenmanı',
      'Hız ve Reaksiyon',
      'Güç ve Dayanıklılık',
      'Koordinasyon Parkuru',
      'Stres Yönetimi',
      'Sınav Simülasyonu',
      'Mülakat Eğitimi',
      'Haftalık Değerlendirme',
      '7/24 Destek'
    ],
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
    badge: 'PMYO'
  },
  {
    id: 3,
    title: 'MSÜ Hazırlık Programı',
    description: 'MSÜ sınavlarına yönelik özel hazırlık programı',
    duration: '8-12 ay',
    students: '80+',
    features: [
      'Güç Antrenmanı',
      'Dayanıklılık Gelişimi',
      'Esneklik Çalışmaları',
      'Koordinasyon',
      'Hız Antrenmanı',
      'Sınav Teknikleri',
      'Mülakat Eğitimi',
      'Motivasyon Koçluğu',
      'Aile Danışmanlığı'
    ],
    bgColor: 'bg-gradient-to-br from-red-500 to-red-700',
    badge: 'MSÜ'
  },
  {
    id: 4,
    title: 'Spor Akademisi Programı',
    description: 'Uzun dönemli spor gelişimi ve akademik hazırlık',
    duration: '8-12 ay',
    students: '60+',
    features: [
      'Temel Motorik Gelişim',
      'Spor Teknikleri',
      'Taktik Eğitimi',
      'Fiziksel Gelişim',
      'Mental Hazırlık',
      'Akademik Destek',
      'Sporcu Beslenmesi',
      'Yarışma Deneyimi'
    ],
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700',
    badge: 'Akademi'
  },
  {
    id: 5,
    title: 'JAMYO Hazırlık Programı',
    description: 'Jandarma ve Sahil Güvenlik Akademisi sınavlarına özel hazırlık',
    duration: '8-12 ay',
    students: '90+',
    features: [
      'JAMYO Sınav Teknikleri',
      'Fiziksel Yeterlilik Testleri',
      'Koordinasyon Gelişimi',
      'Dayanıklılık Antrenmanı',
      'Sınav Simülasyonu',
      'Mülakat Eğitimi',
      'Stres Yönetimi',
      'Haftalık Değerlendirme',
      'Kişisel Antrenör Desteği'
    ],
    bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    badge: 'JAMYO'
  },
  {
    id: 6,
    title: 'Spor Lisesi Hazırlık Programı',
    description: 'Spor liselerine giriş sınavlarına yönelik özel hazırlık',
    duration: '6-10 ay',
    students: '70+',
    features: [
      'Spor Lisesi Sınav Teknikleri',
      'Temel Motorik Beceriler',
      'Spor Branşları Tanıtımı',
      'Fiziksel Gelişim',
      'Koordinasyon Çalışmaları',
      'Esneklik ve Mobilite',
      'Beslenme Eğitimi',
      'Akademik Destek',
      'Aile Danışmanlığı'
    ],
    bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700',
    badge: 'Spor Lisesi'
  }
];

const testimonials = [
  {
    name: 'Mehmet K.',
    course: 'BESYO Hazırlık',
    rating: 5,
    comment: 'Harika bir program! 6 ayda hedefime ulaştım. Hocalar çok ilgili ve program çok etkili.'
  },
  {
    name: 'Ayşe D.',
    course: 'PMYO Hazırlık',
    rating: 5,
    comment: 'PMYO sınavını başarıyla geçtim. Özellikle zamanlı parkur antrenmanları çok faydalıydı.'
  },
  {
    name: 'Ali R.',
    course: 'MSÜ Hazırlık',
    rating: 5,
    comment: '3 ayda MSÜ sınavını kazandım. Program çok sistematik ve sonuç odaklı.'
  }
];

export default function CoursesPage() {
  const router = useRouter();

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-8 text-white border-white hover:bg-white hover:text-slate-900"
              onClick={() => router.push('/')}
            >
              <ArrowLeft size={16} className="mr-2" />
              Ana Sayfaya Dön
            </Button>
            
            <h1 className="text-4xl lg:text-6xl font-bold font-display mb-6">
              Eğitim <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Programları</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              BESYO, PMYO, MSÜ, JAMYO ve Spor Lisesi sınavlarına özel tasarlanmış, bilimsel temelli eğitim programlarımız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-48 ${course.bgColor} flex items-center justify-center`}>
                  <div className="text-white text-6xl font-bold opacity-20">
                    {course.badge}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 font-display mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm text-gray-600">{course.students} öğrenci</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">Program İçeriği:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => router.push('/contact')}
                  >
                    Bu Programı Seç
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-display mb-4">
              Öğrencilerimiz Ne Diyor?
            </h2>
            <p className="text-lg text-gray-600">Başarı hikayeleri ve deneyimler</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.course}</div>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-display mb-6">
              Size Uygun Programı Seçin
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Ücretsiz danışmanlık alarak size en uygun programı belirleyelim.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => router.push('/contact')}
              >
                Ücretsiz Danışmanlık
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://wa.me/905432470021', '_blank')}
              >
                WhatsApp ile Bilgi Al
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
