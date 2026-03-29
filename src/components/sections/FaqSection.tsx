import { useState } from 'react';
import { motion } from 'framer-motion';
import AccordionItem from '../ui/AccordionItem';

const faqs = [
  {
    id: '1',
    question: 'GlucoMan bir tıbbi hizmet midir?',
    answer:
      'Hayır. GlucoMan eğitim ve destek amaçlı bir dijital platformdur. İçerikler bilgilendirme niteliği taşır, tıbbi teşhis veya tedavi yerine geçmez. Sağlık kararları için mutlaka doktorunuza danışın.',
  },
  {
    id: '2',
    question: 'Platforma kimler katılabilir?',
    answer:
      'Diyabet hastaları, hasta yakınları ve gönüllü sağlık uzmanları (doktor, diyetisyen, psikolog) platforma katılabilir.',
  },
  {
    id: '3',
    question: 'Kişisel sağlık verilerim güvende mi?',
    answer:
      'Evet. Platform GDPR/KVKK uyumlu tasarlanmıştır. Kişisel sağlık verisi saklanmaz; tüm iletişimler HTTPS ile şifrelenir.',
  },
  {
    id: '4',
    question: 'Chatbot acil durumlarda ne yapar?',
    answer:
      'Risk içeren sorular algılandığında (insülin dozu değişikliği, ciddi belirti) chatbot otomatik olarak "Lütfen hemen sağlık kuruluşuna başvurun" mesajı gösterir ve tıbbi öneri vermez.',
  },
  {
    id: '5',
    question: 'Proje ne zaman kullanıma açılacak?',
    answer:
      'TÜSEB destekli 12 aylık araştırma projesi kapsamında pilot uygulama gerçekleştirilecek; yaygınlaştırma sonrasında kamuya açık platforma erişim planlanmaktadır.',
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>('1');

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary">
            Sık Sorulan Sorular
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === faq.id}
              onToggle={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;