'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+90 543 247 00 21',
    description: '7/24 hizmetinizdeyiz'
  },
  {
    icon: Mail,
    title: 'E-posta',
    value: 'info@aslanspor.com',
    description: 'Hızlı yanıt garantisi'
  },
  {
    icon: MapPin,
    title: 'Adres',
    value: 'Çay Çiçeği Sk., Bahçelievler, İstanbul',
    description: 'Merkezi Konum'
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    value: '06:00 - 23:00',
    description: 'Her gün açık'
  }
];

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      
      const templateParams = {
        from_name: formData.get('name') as string,
        from_phone: formData.get('phone') as string,
        from_email: formData.get('email') as string,
        program: formData.get('program') as string,
        message: formData.get('message') as string,
        to_email: 'info@aslanspor.com',
      };

      // EmailJS ile mail gönder
      await emailjs.send(
        'service_vbefb9k', // Sizin Service ID'niz
        'template_ipy6nij', // Template ID'niz
        templateParams,
        'i72XHp4Jmx_BP7Vf2' // Public Key'iniz
      );

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Mail gönderimi başarısız:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              İletişim <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Kurun</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              BESYO ve PMYO hazırlık hakkında bilgi almak için bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground font-display mb-8">
                Mesaj Gönderin
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+90 543 247 00 21"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    İlgilendiğiniz Program
                  </label>
                  <select name="program" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Program seçiniz</option>
                    <option value="BESYO Hazırlık">BESYO Hazırlık</option>
                    <option value="PMYO Hazırlık">PMYO Hazırlık</option>
                    <option value="MSÜ Hazırlık">MSÜ Hazırlık</option>
                    <option value="Spor Akademisi">Spor Akademisi</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}</span>
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  >
                    ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                  >
                    ❌ Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground font-display mb-8">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-lg font-medium text-primary mb-1">{info.value}</p>
                        <p className="text-sm text-muted">{info.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold text-foreground font-display mb-4">
                  Hızlı İletişim
                </h3>
                
                <Button 
                  variant="secondary" 
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={() => window.open('https://wa.me/905432470021', '_blank')}
                >
                  <span>WhatsApp ile Hemen İletişim</span>
                </Button>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground font-display mb-4">
              Konumumuz
            </h2>
            <p className="text-lg text-muted">Merkezi konumumuzda kolayca ulaşabilirsiniz</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <a 
              href="https://www.google.com/maps/dir//ASLAN+BESYO+PMYO+PARKUR+HAZIRLIK+KURSU,+Bah%C3%A7elievler,+%C3%87ay+%C3%87i%C3%A7e%C4%9Fi+Sk.,+34180+Bah%C3%A7elievler%2F%C4%B0stanbul/@40.9968669,28.8661861,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cabb9d2058852f:0x3ce024d943f56509!2m2!1d28.8661861!2d40.9968669?hl=tr&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hover:from-gray-300 hover:to-gray-400 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-lg text-muted group-hover:text-gray-800 transition-colors">Haritayı Görüntüle</p>
                <p className="text-sm text-muted mt-2 group-hover:text-gray-700 transition-colors">Çay Çiçeği Sk., Bahçelievler, İstanbul</p>
                <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Tıklayarak Google Maps&apos;te aç</p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground font-display mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-lg text-muted">En çok merak edilen konular</p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: 'BESYO hazırlık programı ne kadar sürer?',
                answer: 'Program kişinin mevcut seviyesine göre 6-12 ay arasında değişmektedir. İlk hafta ücretsiz değerlendirme yapılarak size özel program hazırlanır.'
              },
              {
                question: 'PMYO sınavına hazırlık için hangi programı seçmeliyim?',
                answer: 'PMYO hazırlık programımız özel olarak tasarlanmıştır. Zamanlı parkur antrenmanları ve sınav simülasyonları ile hedeflerinize ulaşmanızı sağlıyoruz.'
              },
              {
                question: 'Ücretsiz deneme dersi alabilir miyim?',
                answer: 'Evet, tüm programlarımızda ücretsiz deneme dersi sunuyoruz. Randevu alarak tesisimizi ziyaret edebilir ve programlarımızı deneyebilirsiniz.'
              },
              {
                question: 'Hangi yaş grupları kabul ediliyor?',
                answer: '16-35 yaş arası tüm adaylar programlarımıza katılabilir. Yaş gruplarına göre özel antrenman programları hazırlanmaktadır.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
