import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hakkinda', label: 'Proje Hakkında' },
  { href: '#ozellikler', label: 'Özellikler' },
  { href: '#is-paketleri', label: 'İş Paketleri' },
  { href: '#iletisim', label: 'İletişim' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 w-full z-50 backdrop-blur-md bg-bg/90 border-b border-primary/10 transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-primary/8' : ''}`}
    >
      <nav aria-label="Ana navigasyon" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#hakkinda" className="flex items-center gap-2 flex-shrink-0" aria-label="GlucoMan Ana Sayfa">
            <img src="/assets/gman-logo.png" alt="GlucoMan" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#6B8A92] hover:text-primary font-display font-medium text-sm transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-200 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#ozellikler"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-display font-semibold text-sm hover:bg-primary-light transition-all duration-200 shadow-md shadow-primary/20"
            >
              Platforma Katıl
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/8 transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-primary/10 py-4 pb-6 space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2.5 text-[#1A2E35] font-display font-medium text-sm rounded-lg hover:bg-primary/6 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 px-4">
              <a
                href="#ozellikler"
                onClick={handleLinkClick}
                className="block w-full text-center py-3 rounded-full bg-primary text-white font-display font-semibold text-sm hover:bg-primary-light transition-colors"
              >
                Platforma Katıl
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;