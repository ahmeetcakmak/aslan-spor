'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Star, Award, Users, Target } from 'lucide-react';

const instructors = [
  {
    id: 1,
    name: 'Ali Cem Aslan',
    role: 'Atletizm Uzmanı',
    experience: '15+ yıl',
    specialization: 'Parkur Teknikleri',
    achievements: ['BESYO Mezunu', 'Hazırlık Uzmanı', '500+ Eğitim Verdiği Öğrenci'],
    description: 'BESYO ve PMYO hazırlıkta uzmanlaşmış, 500+ öğrenciye eğitim vermiş deneyimli antrenör.',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    id: 2,
    name: 'Büşra Eftekin',
    role: 'Kuvvet Antrenmanı',
    experience: '12+ yıl',
    specialization: 'Güç Gelişimi',
    achievements: ['Fiziksel Test Uzmanı', 'Kuvvet Antrenmanı', 'Performans Analizi'],
    description: 'Bilimsel temelli kuvvet antrenmanı programları ile sporcuların performansını maksimize eder.',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700'
  },
  {
    id: 3,
    name: 'Mustafa Yiğiter',
    role: 'Dayanıklılık Uzmanı',
    experience: '10+ yıl',
    specialization: 'Kardiyovasküler',
    achievements: ['Dayanıklılık Uzmanı', 'Kardiyo Testleri', 'Beslenme Danışmanı'],
    description: 'Dayanıklılık ve kardiyovasküler fitness konusunda uzman, sürdürülebilir gelişim odaklı.',
    bgColor: 'bg-gradient-to-br from-red-500 to-red-700'
  },
  {
    id: 4,
    name: 'Samed Durmuş',
    role: 'Koordinasyon Uzmanı',
    experience: '8+ yıl',
    specialization: 'Motorik Gelişim',
    achievements: ['Koordinasyon Uzmanı', 'Esneklik Antrenmanı', 'Motorik Gelişim'],
    description: 'Koordinasyon ve esneklik gelişiminde uzman, bütünsel yaklaşım ile çalışır.',
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700'
  }
];

export default function InstructorsPage() {
  const router = useRouter();

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
              Uzman <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Hocalarımız</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              BESYO ve PMYO hazırlıkta uzmanlaşmış, deneyimli antrenörlerimizle hedeflerinize ulaşın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-48 ${instructor.bgColor} flex items-center justify-center`}>
                  <div className="text-white text-6xl font-bold opacity-20">
                    {instructor.name.charAt(0)}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 font-display">
                      {instructor.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-lg font-semibold text-primary">{instructor.role}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-600">{instructor.experience} deneyim</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-600">{instructor.specialization}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {instructor.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Hakkında:</h4>
                    <ul className="space-y-1">
                      {instructor.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-display mb-6">
              Uzman Hocalarımızla Tanışın
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Deneyimli antrenörlerimizle kişiye özel programlar hazırlayarak hedeflerinize ulaşın.
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => router.push('/contact')}
            >
              Hemen Kayıt Ol
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
