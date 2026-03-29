const navLinks = [
  { href: '#hakkinda', label: 'Proje Hakkında' },
  { href: '#ozellikler', label: 'Özellikler' },
  { href: '#is-paketleri', label: 'İş Paketleri' },
  { href: '#iletisim', label: 'İletişim' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark border-t border-white/8" style={{ backgroundColor: '#1D333A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8">
          {/* Brand column */}
          <div className="max-w-xs">
            <a href="#hakkinda" aria-label="GlucoMan Ana Sayfa" className="inline-block mb-4">
              <img src="/assets/gman-logo.png" alt="GlucoMan" className="h-12 w-auto" />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Diyabet yönetiminde bilimsel destek.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/20 text-accent text-xs font-display font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent block"></span>
              TÜSEB Destekli Proje
            </span>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white/40 text-[10px] font-display font-semibold uppercase tracking-widest mb-4">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm font-body transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2025 GlucoMan. Tüm hakları saklıdır.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right max-w-sm">
            GlucoMan tıbbi tavsiye vermez. İçerikler yalnızca eğitim amaçlıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;