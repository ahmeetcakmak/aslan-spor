'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen, X, Copy, MessageCircle, Instagram } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'BESYO Sınavına Hazırlık: 10 Altın Kural',
    excerpt: 'BESYO sınavlarına hazırlanmak için uygulamanız gereken temel kurallar ve stratejiler...',
    date: '15 Mart 2025',
    readTime: '8 dk',
    category: 'BESYO Hazırlık',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
    content: `
      <div class="space-y-6">
        <p class="text-lg text-gray-600 leading-relaxed">BESYO sınavlarına hazırlanmak için uygulamanız gereken temel kurallar ve stratejiler hakkında kapsamlı bir rehber hazırladık. Bu kuralları uygulayarak sınavlara daha iyi hazırlanabilirsiniz.</p>
        
        <div class="space-y-8">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-blue-900 mb-3">1. Düzenli Antrenman Programı</h3>
            <p class="text-gray-700">Haftada en az 4-5 gün antrenman yaparak fiziksel gelişiminizi sürdürün. Antrenman programınızı kuvvet, dayanıklılık, koordinasyon ve esneklik çalışmalarını içerecek şekilde planlayın.</p>
          </div>
          
          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-green-900 mb-3">2. Beslenme ve Hidrasyon</h3>
            <p class="text-gray-700">Protein, karbonhidrat ve sağlıklı yağları dengeli bir şekilde tüketin. Antrenman öncesi ve sonrası beslenme zamanlamasına dikkat edin. Günlük su tüketiminizi artırın.</p>
          </div>
          
          <div class="bg-purple-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-purple-900 mb-3">3. Yeterli Dinlenme</h3>
            <p class="text-gray-700">Geceleri 7-8 saat kaliteli uyku alın. Antrenmanlar arasında yeterli dinlenme süresi bırakın. Aşırı antrenman sendromundan kaçının.</p>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-orange-900 mb-3">4. Mental Hazırlık</h3>
            <p class="text-gray-700">Sınav öncesi stres yönetimi tekniklerini öğrenin. Pozitif düşünce ve motivasyonu koruyun. Sınav simülasyonları yaparak kendinizi hazırlayın.</p>
          </div>
          
          <div class="bg-red-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-red-900 mb-3">5. Teknik Gelişim</h3>
            <p class="text-gray-700">BESYO sınavlarında yer alan parkur elemanlarını tek tek çalışın. Her eleman için doğru tekniği öğrenin ve pratik yapın. Koordinasyon ve denge çalışmalarına önem verin.</p>
          </div>
        </div>
        
        <p class="text-gray-700 font-medium text-center">Bu kuralları uygulayarak BESYO sınavlarına daha iyi hazırlanabilirsiniz. Unutmayın, hazırlık sabır ve düzenli çalışmanın sonucudur.</p>
      </div>
    `
  },
  {
    id: 2,
    title: 'PMYO Parkur Teknikleri: Zamanla Yarışmayı Öğrenin',
    excerpt: 'PMYO sınavlarında zamanlı parkur geçişinde dikkat edilmesi gereken kritik noktalar...',
    date: '12 Mart 2025',
    readTime: '6 dk',
    category: 'PMYO Hazırlık',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
    content: `
      <div class="space-y-6">
        <p class="text-lg text-gray-600 leading-relaxed">PMYO sınavlarında parkur geçişi en kritik bölümlerden biridir. Zaman sınırı içinde parkuru tamamlamak için doğru teknikleri öğrenmek ve pratik yapmak şarttır.</p>
        
        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-green-900 mb-4">PMYO Parkur Elemanları</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-gray-700">Engel atlama</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-gray-700">Koordinasyon parkuru</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-gray-700">Hız testi</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-gray-700">Dayanıklılık koşusu</span>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-blue-900 mb-4">Zaman Yönetimi Stratejileri</h3>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <p class="text-gray-700">Her eleman için hedef süre belirleyin</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <p class="text-gray-700">Geçişlerde zaman kaybetmeyin</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <p class="text-gray-700">Gereksiz hareketlerden kaçının</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <p class="text-gray-700">Ritim ve tempo koruyun</p>
            </div>
          </div>
        </div>
        
        <p class="text-gray-700 font-medium text-center">Her parkur elemanı için özel teknikler vardır. Bu teknikleri öğrenmek ve pratik yapmak performansınızı artıracaktır.</p>
      </div>
    `
  },
  {
    id: 3,
    title: 'Antrenman Öncesi Isınmanın Önemi ve Doğru Isınma Teknikleri',
    excerpt: 'Performansınızı artırmak ve sakatlanmaları önlemek için etkili ısınma rutinleri...',
    date: '10 Mart 2025',
    readTime: '5 dk',
    category: 'Antrenman',
    bgColor: 'bg-gradient-to-br from-red-500 to-red-700',
    content: `
      <div class="space-y-6">
        <p class="text-lg text-gray-600 leading-relaxed">Isınma, antrenmanın en önemli bölümlerinden biridir. Doğru ısınma performansınızı artırır ve sakatlanma riskini azaltır.</p>
        
        <div class="bg-red-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-red-900 mb-4">Isınmanın Faydaları</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <span class="text-gray-700">Kas sıcaklığını artırır</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <span class="text-gray-700">Eklem hareket açıklığını geliştirir</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <span class="text-gray-700">Kan dolaşımını hızlandırır</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-red-500 rounded-full"></div>
              <span class="text-gray-700">Mental hazırlık sağlar</span>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-blue-900 mb-4">Dinamik Isınma Rutini</h3>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <p class="text-gray-700">Hafif kardiyovasküler aktivite (5-10 dk)</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <p class="text-gray-700">Dinamik germe egzersizleri</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <p class="text-gray-700">Spesifik hareket hazırlığı</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <p class="text-gray-700">Koordinasyon çalışmaları</p>
            </div>
          </div>
        </div>
        
        <p class="text-gray-700 font-medium text-center">Isınma süresi antrenman yoğunluğuna göre değişir. Genellikle 10-15 dakika yeterlidir.</p>
      </div>
    `
  },
  {
    id: 4,
    title: 'Sporcu Beslenmesi: BESYO Hazırlık Döneminde Nasıl Beslenmelisiniz?',
    excerpt: 'BESYO hazırlık sürecinde performansınızı artıracak beslenme stratejileri...',
    date: '8 Mart 2025',
    readTime: '7 dk',
    category: 'Beslenme',
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700',
    content: `
      <div class="space-y-6">
        <p class="text-lg text-gray-600 leading-relaxed">BESYO hazırlık döneminde doğru beslenme, performansınızı doğrudan etkiler. Bu dönemde beslenme stratejilerinizi optimize etmeniz gerekir.</p>
        
        <div class="bg-purple-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-purple-900 mb-4">Makro Besinler</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <div class="font-semibold text-purple-900 mb-2">Protein</div>
              <p class="text-gray-700">Kas gelişimi ve onarımı için günde 1.6-2.2g/kg</p>
            </div>
            <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <div class="font-semibold text-blue-900 mb-2">Karbonhidrat</div>
              <p class="text-gray-700">Enerji için günde 6-10g/kg</p>
            </div>
            <div class="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div class="font-semibold text-green-900 mb-2">Yağ</div>
              <p class="text-gray-700">Hormon üretimi için günde 0.8-1.2g/kg</p>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-blue-900 mb-3">Antrenman Öncesi</h3>
            <p class="text-gray-700">2-3 saat önce karbonhidrat ağırlıklı öğün. 30-60 dakika önce hafif atıştırmalık.</p>
          </div>
          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-green-900 mb-3">Antrenman Sonrası</h3>
            <p class="text-gray-700">İlk 30 dakika içinde protein ve karbonhidrat içeren öğün tüketin.</p>
          </div>
        </div>
        
        <p class="text-gray-700 font-medium text-center">Günlük su tüketiminizi artırın. Antrenman sırasında düzenli olarak su için.</p>
      </div>
    `
  },
  {
    id: 5,
    title: 'Motivasyon ve Mental Hazırlık: Sınav Öncesi Psikolojik Hazırlık',
    excerpt: 'Sınav öncesi stres yönetimi ve mental hazırlık teknikleri...',
    date: '5 Mart 2025',
    readTime: '9 dk',
    category: 'Psikoloji',
    bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    content: `
      <div class="space-y-6">
        <p class="text-lg text-gray-600 leading-relaxed">BESYO ve PMYO sınavlarına hazırlanmak için sadece fiziksel hazırlık yeterli değildir. Mental hazırlık da en az o kadar önemlidir.</p>
        
        <div class="bg-cyan-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-cyan-900 mb-4">Stres Yönetimi</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span class="text-gray-700">Derin nefes alma teknikleri</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span class="text-gray-700">Meditasyon ve mindfulness</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span class="text-gray-700">Pozitif görselleştirme</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span class="text-gray-700">Rutin oluşturma</span>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Motivasyon Teknikleri</h3>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <p class="text-gray-700">Hedeflerinizi netleştirin</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <p class="text-gray-700">Küçük başarıları kutlayın</p>
              </div>
            </div>
          </div>
          
          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-green-900 mb-4">Konsantrasyon</h3>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <p class="text-gray-700">Dikkat dağıtıcıları minimize edin</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <p class="text-gray-700">Tek bir göreve odaklanın</p>
              </div>
            </div>
          </div>
        </div>
        
        <p class="text-gray-700 font-medium text-center">Zihinsel hazırlık yapın ve kendinize güvenin. Destek sistemi oluşturun ve ilerlemenizi takip edin.</p>
      </div>
    `
  },
  {
    id: 6,
    title: 'Koordinasyon Gelişimi: BESYO Sınavlarında Başarı İçin Kritik Faktör',
    excerpt: 'Koordinasyon becerilerinizi geliştirmek için uygulayabileceğiniz egzersizler...',
    date: '3 Mart 2025',
    readTime: '6 dk',
    category: 'Koordinasyon',
    bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700',
    content: `
      <div class="space-y-6">
        <p class="text-lg text-gray-600 leading-relaxed">Koordinasyon, BESYO sınavlarına hazırlanmak için kritik öneme sahip bir beceridir. Bu beceriyi geliştirmek için düzenli çalışma gerekir.</p>
        
        <div class="bg-orange-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-orange-900 mb-4">Koordinasyon Nedir?</h3>
          <p class="text-gray-700">Koordinasyon, farklı kas gruplarının uyumlu bir şekilde çalışmasıdır. Bu beceri, parkur geçişlerinde ve teknik hareketlerde önemlidir.</p>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-blue-900 mb-4">Koordinasyon Geliştirme Egzersizleri</h3>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <div class="font-semibold text-blue-900 mb-2">Denge Çalışmaları</div>
              <p class="text-gray-700">Tek ayak üzerinde durma, denge tahtası</p>
            </div>
            <div class="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div class="font-semibold text-green-900 mb-2">Koordinasyon Drilleri</div>
              <p class="text-gray-700">Çapraz hareketler, ritim çalışmaları</p>
            </div>
            <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <div class="font-semibold text-purple-900 mb-2">Reaksiyon Egzersizleri</div>
              <p class="text-gray-700">Hızlı yön değiştirme, refleks çalışmaları</p>
            </div>
            <div class="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <div class="font-semibold text-red-900 mb-2">Spesifik Teknikler</div>
              <p class="text-gray-700">Parkur elemanlarına özel çalışmalar</p>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-green-900 mb-3">Antrenman Programı</h3>
            <p class="text-gray-700">Koordinasyon çalışmalarını haftada 2-3 kez yapın. Her antrenmanda 15-20 dakika ayırın.</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-purple-900 mb-3">İlerleme Takibi</h3>
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-gray-700 text-sm">Videolar çekin</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span class="text-gray-700 text-sm">Zaman ölçümleri yapın</span>
              </div>
            </div>
          </div>
        </div>
        
        <p class="text-gray-700 font-medium text-center">Teknik değerlendirme yapın ve düzenli testler uygulayın. Koordinasyon gelişiminizi sürekli takip edin.</p>
      </div>
    `
  }
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const post = blogPosts.find(p => p.id === parseInt(params.id));

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`, '_blank');
        break;
      case 'instagram':
        // Instagram için story paylaşımı
        window.open('https://www.instagram.com/aslansporakademisi/', '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
        break;
    }
    setShowShareModal(false);
  };

  if (!post) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <Button onClick={() => router.push('/blog')}>
            Blog&apos;a Dön
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              onClick={() => router.push('/blog')}
            >
              <ArrowLeft size={16} className="mr-2" />
              Blog&apos;a Dön
            </Button>
            
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Tag className="w-5 h-5" />
              <span className="text-primary font-medium">{post.category}</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold font-display mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} okuma</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          >
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
          
          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">Paylaş:</span>
                <button 
                  onClick={() => setShowShareModal(true)}
                  className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Share2 size={20} />
                </button>
              </div>
              
              <Button 
                variant="outline"
                onClick={() => router.push('/blog')}
                className="flex items-center space-x-2"
              >
                <BookOpen size={16} />
                <span>Diğer Yazılar</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Paylaş</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="w-full flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-sm text-gray-600">WhatsApp ile paylaş</div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleShare('instagram')}
                  className="w-full flex items-center space-x-4 p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Instagram</div>
                    <div className="text-sm text-gray-600">Instagram&apos;da paylaş</div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full flex items-center space-x-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center">
                    <Copy className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {copySuccess ? 'Kopyalandı!' : 'Linki Kopyala'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {copySuccess ? 'Link panoya kopyalandı' : 'Linki panoya kopyala'}
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
