'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { SimpleButton as Button } from '@/components/ui/SimpleButton';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'BESYO Sınavına Hazırlık: Başarılı Olmanın 10 Altın Kuralı',
    excerpt: 'BESYO sınavlarında başarılı olmak için uygulamanız gereken temel kurallar ve stratejiler...',
    date: '15 Mart 2025',
    readTime: '8 dk',
    category: 'BESYO Hazırlık',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    id: 2,
    title: 'PMYO Parkur Teknikleri: Zamanla Yarışmayı Öğrenin',
    excerpt: 'PMYO sınavlarında zamanlı parkur geçişinde dikkat edilmesi gereken kritik noktalar...',
    date: '12 Mart 2025',
    readTime: '6 dk',
    category: 'PMYO Hazırlık',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700'
  },
  {
    id: 3,
    title: 'Antrenman Öncesi Isınmanın Önemi ve Doğru Isınma Teknikleri',
    excerpt: 'Performansınızı artırmak ve sakatlanmaları önlemek için etkili ısınma rutinleri...',
    date: '10 Mart 2025',
    readTime: '5 dk',
    category: 'Antrenman',
    bgColor: 'bg-gradient-to-br from-red-500 to-red-700'
  },
  {
    id: 4,
    title: 'Sporcu Beslenmesi: BESYO Hazırlık Döneminde Nasıl Beslenmelisiniz?',
    excerpt: 'BESYO hazırlık sürecinde performansınızı artıracak beslenme stratejileri...',
    date: '8 Mart 2025',
    readTime: '7 dk',
    category: 'Beslenme',
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700'
  },
  {
    id: 5,
    title: 'Motivasyon ve Mental Hazırlık: Sınav Öncesi Psikolojik Hazırlık',
    excerpt: 'Sınav öncesi stres yönetimi ve mental hazırlık teknikleri...',
    date: '5 Mart 2025',
    readTime: '9 dk',
    category: 'Psikoloji',
    bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-700'
  },
  {
    id: 6,
    title: 'Koordinasyon Gelişimi: BESYO Sınavlarında Başarı İçin Kritik Faktör',
    excerpt: 'Koordinasyon becerilerinizi geliştirmek için uygulayabileceğiniz egzersizler...',
    date: '3 Mart 2025',
    readTime: '6 dk',
    category: 'Koordinasyon',
    bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700'
  }
];

// SEO için ek blog yazıları (görünmez, sadece SEO için)
const seoBlogPosts = [
  {
    id: 'seo-1',
    title: 'BESYO Nedir? BESYO Nasıl Kazanılır? BESYO Sınavına Hazırlık Rehberi',
    excerpt: 'BESYO (Beden Eğitimi ve Spor Yüksekokulu) nedir, BESYO nasıl kazanılır, BESYO sınavlarına nasıl hazırlanılır? Detaylı rehber...',
    date: '20 Mart 2025',
    readTime: '10 dk',
    category: 'BESYO Rehberi',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    id: 'seo-2',
    title: 'PMYO Nedir? PMYO Nasıl Kazanılır? PMYO Sınavına Hazırlık Rehberi',
    excerpt: 'PMYO (Polis Meslek Yüksekokulu) nedir, PMYO nasıl kazanılır, PMYO sınavlarına nasıl hazırlanılır? Detaylı rehber...',
    date: '18 Mart 2025',
    readTime: '9 dk',
    category: 'PMYO Rehberi',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700'
  },
  {
    id: 'seo-3',
    title: 'MSÜ Nedir? MSÜ Nasıl Kazanılır? MSÜ Sınavına Hazırlık Rehberi',
    excerpt: 'MSÜ (Milli Savunma Üniversitesi) nedir, MSÜ nasıl kazanılır, MSÜ sınavlarına nasıl hazırlanılır? Detaylı rehber...',
    date: '16 Mart 2025',
    readTime: '8 dk',
    category: 'MSÜ Rehberi',
    bgColor: 'bg-gradient-to-br from-red-500 to-red-700'
  },
  {
    id: 'seo-4',
    title: 'Jandarma Nedir? Jandarma Nasıl Olunur? Jandarma Sınavına Hazırlık',
    excerpt: 'Jandarma nedir, jandarma nasıl olunur, jandarma sınavlarına nasıl hazırlanılır? Jandarma Meslek Yüksekokulu rehberi...',
    date: '14 Mart 2025',
    readTime: '8 dk',
    category: 'Jandarma Rehberi',
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700'
  },
  {
    id: 'seo-5',
    title: 'Polis Nedir? Polis Nasıl Olunur? Polis Sınavına Hazırlık Rehberi',
    excerpt: 'Polis nedir, polis nasıl olunur, polis sınavlarına nasıl hazırlanılır? Polis Meslek Yüksekokulu rehberi...',
    date: '12 Mart 2025',
    readTime: '8 dk',
    category: 'Polis Rehberi',
    bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-700'
  },
  {
    id: 'seo-6',
    title: 'Spor Lisesi Nedir? Spor Lisesi Nasıl Kazanılır? Spor Lisesi Sınavı',
    excerpt: 'Spor lisesi nedir, spor lisesi nasıl kazanılır, spor lisesi sınavlarına nasıl hazırlanılır? Detaylı rehber...',
    date: '10 Mart 2025',
    readTime: '7 dk',
    category: 'Spor Lisesi Rehberi',
    bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700'
  },
  {
    id: 'seo-7',
    title: 'BESYO Üniversiteleri Listesi: BESYO Olan Üniversiteler 2025',
    excerpt: 'BESYO olan üniversiteler listesi, BESYO üniversiteleri, BESYO bölümleri, BESYO taban puanları 2025...',
    date: '8 Mart 2025',
    readTime: '6 dk',
    category: 'BESYO Üniversiteleri',
    bgColor: 'bg-gradient-to-br from-indigo-500 to-indigo-700'
  },
  {
    id: 'seo-8',
    title: 'PMYO Üniversiteleri Listesi: PMYO Olan Üniversiteler 2025',
    excerpt: 'PMYO olan üniversiteler listesi, PMYO üniversiteleri, PMYO bölümleri, PMYO taban puanları 2025...',
    date: '6 Mart 2025',
    readTime: '6 dk',
    category: 'PMYO Üniversiteleri',
    bgColor: 'bg-gradient-to-br from-teal-500 to-teal-700'
  },
  {
    id: 'seo-9',
    title: 'MSÜ Üniversiteleri Listesi: MSÜ Olan Üniversiteler 2025',
    excerpt: 'MSÜ olan üniversiteler listesi, MSÜ üniversiteleri, MSÜ bölümleri, MSÜ taban puanları 2025...',
    date: '4 Mart 2025',
    readTime: '6 dk',
    category: 'MSÜ Üniversiteleri',
    bgColor: 'bg-gradient-to-br from-pink-500 to-pink-700'
  },
  {
    id: 'seo-10',
    title: 'BESYO Taban Puanları 2025: BESYO Puanları ve Sıralamaları',
    excerpt: 'BESYO taban puanları 2025, BESYO puanları, BESYO sıralamaları, BESYO başarı sıralaması...',
    date: '2 Mart 2025',
    readTime: '7 dk',
    category: 'BESYO Puanları',
    bgColor: 'bg-gradient-to-br from-yellow-500 to-yellow-700'
  },
  {
    id: 'seo-11',
    title: 'PMYO Taban Puanları 2025: PMYO Puanları ve Sıralamaları',
    excerpt: 'PMYO taban puanları 2025, PMYO puanları, PMYO sıralamaları, PMYO başarı sıralaması...',
    date: '28 Şubat 2025',
    readTime: '7 dk',
    category: 'PMYO Puanları',
    bgColor: 'bg-gradient-to-br from-emerald-500 to-emerald-700'
  },
  {
    id: 'seo-12',
    title: 'MSÜ Taban Puanları 2025: MSÜ Puanları ve Sıralamaları',
    excerpt: 'MSÜ taban puanları 2025, MSÜ puanları, MSÜ sıralamaları, MSÜ başarı sıralaması...',
    date: '26 Şubat 2025',
    readTime: '7 dk',
    category: 'MSÜ Puanları',
    bgColor: 'bg-gradient-to-br from-rose-500 to-rose-700'
  }
];


export default function BlogPage() {
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
              BESYO, PMYO, MSÜ, Jandarma ve Polis <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Hazırlık Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Aslan Spor Akademisi'de BESYO, PMYO, MSÜ, Jandarma, Polis hazırlık ve spor lisesi sınavları hakkında uzman yazılarımız. Parkur antrenmanları, sınav teknikleri ve başarı hikayeleri.
            </p>
          </motion.div>
        </div>
      </section>


      {/* SEO Blog Posts (Hidden) */}
      <div style={{ display: 'none' }}>
        {seoBlogPosts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <span>{post.category}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => router.push(`/blog/${post.id}`)}
              >
                <div className={`h-48 ${post.bgColor} flex items-center justify-center`}>
                  <div className="text-white text-4xl font-bold opacity-20">
                    {post.title.charAt(0)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground font-display mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} okuma</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/blog/${post.id}`);
                      }}
                    >
                      Devamını Oku
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-display mb-6">
              BESYO, PMYO, MSÜ, Jandarma ve Polis Hazırlık Yazılarından Haberdar Olun
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Aslan Spor Akademisi'de BESYO, PMYO, MSÜ, Jandarma, Polis ve spor lisesi hazırlık hakkında en güncel bilgileri e-posta ile alın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                variant="secondary"
                onClick={() => router.push('/contact')}
              >
                Abone Ol
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
