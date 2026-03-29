import { motion } from 'framer-motion';
import TimelineStep from '../ui/TimelineStep';

const WorkPackages: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'İhtiyaç Analizi & Planlama',
      period: 'Ay 1–3',
      description:
        'Literatür taraması, diyabet hastaları ve sağlık uzmanlarıyla anket & görüşmeler, UX gereksinimleri belirleme, 12 aylık uygulama takviminin oluşturulması.',
    },
    {
      step: 2,
      title: 'Platform Geliştirme',
      period: 'Ay 3–7',
      description:
        'Web tabanlı platformun backend ve frontend geliştirmesi. Soru-cevap modülü, tartışma forumları, bildirim altyapısı, veri güvenliği protokolleri ve CMS entegrasyonu.',
    },
    {
      step: 3,
      title: 'Pilot Uygulama',
      period: 'Ay 7–10',
      description:
        'Seçilen pilot grupla canlı test. Uzman eğitimleri, kullanıcı etkileşim izleme, KPI takibi ve sürekli iyileştirme döngüleri.',
    },
    {
      step: 4,
      title: 'Değerlendirme & Yaygınlaştırma',
      period: 'Ay 10–12',
      description:
        'Nicel-nitel veri analizi, sonuç raporu, akademik yayınlar, kongre bildirisi ve sürdürülebilirlik için paydaş iş birlikleri.',
    },
  ];

  return (
    <section id="is-paketleri" className="py-20 md:py-28" style={{ backgroundColor: '#EDE7D9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary">
            Proje Yol Haritası
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          <p className="mt-4 text-[#6B8A92] font-display font-medium text-sm tracking-wide uppercase">
            12 Aylık TÜSEB Destekli Araştırma Projesi
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {steps.map((s, i) => (
            <TimelineStep key={s.step} {...s} isLast={i === steps.length - 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPackages;