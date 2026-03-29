import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import ChatMockup from '../ui/ChatMockup';

const features = [
  'Günlük kan şekeri yönetimi soruları',
  'HbA1c, açlık glukozu ve CGM metrikleri hakkında eğitici bilgiler',
  'Güvenlik koruyucuları: acil durumlarda otomatik tıbbi yönlendirme',
  'Güvenilir kaynak alıntısı (kılavuz, hasta broşürü)',
  'Gizlilik öncelikli: kişisel sağlık verisi saklanmaz, HTTPS zorunlu',
];

const ChatbotSection: React.FC = () => {
  return (
    <section id="chatbot" className="py-20 md:py-28 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: feature list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-display font-semibold mb-5">
              7/24 Erişim
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-4">
              GlucoMan Chatbot: 7/24 Yanınızda
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
            <p className="text-[#6B8A92] leading-relaxed mb-8">
              Yapay zeka destekli asistanımız, güvenilir bilgi tabanına dayalı olarak diyabet yönetiminize ilişkin sorularınızı yanıtlar.
            </p>

            <ul className="space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-[#1A2E35] text-sm leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl border border-accent/20 bg-accent/5">
              <p className="text-xs text-[#6B8A92] leading-relaxed">
                <strong className="text-primary">Önemli Not:</strong> GlucoMan Chatbot tıbbi tavsiye vermez. İçerikler yalnızca eğitim ve bilgilendirme amaçlıdır. Sağlık kararları için doktorunuza başvurun.
              </p>
            </div>
          </motion.div>

          {/* Right: chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <ChatMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;