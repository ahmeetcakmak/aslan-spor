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
              Spor <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              BESYO, PMYO hazırlık ve spor gelişimi hakkında uzman yazılarımız.
            </p>
          </motion.div>
        </div>
      </section>


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
              Yeni Yazılardan Haberdar Olun
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              BESYO ve PMYO hazırlık hakkında en güncel bilgileri e-posta ile alın.
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
