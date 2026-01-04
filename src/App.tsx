import React from 'react';
import {
    Home,
    Info,
    Mail,
    Menu,
    Twitter,
    Instagram,
    Linkedin,
    Send,
    Phone,
    MapPin
} from 'lucide-react';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* HEADER ALANI */}
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* LOGO ALANI */}
                        <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg group-hover:rotate-6 transition-transform">
                                G
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-800">
                Glucoman<span className="text-blue-600">App</span>
              </span>
                        </div>

                        {/* MENÜ ALANI (Masaüstü) */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors group">
                                <Home size={18} className="group-hover:scale-110 transition-transform" />
                                Anasayfa
                            </a>
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors group">
                                <Info size={18} className="group-hover:scale-110 transition-transform" />
                                Hakkımızda
                            </a>
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors group">
                                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                                İletişim
                            </a>
                        </nav>

                        {/* AKSİYON BUTONU */}
                        <div className="hidden md:block">
                            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
                                Giriş Yap
                            </button>
                        </div>

                        {/* MOBİL MENÜ BUTONU */}
                        <div className="md:hidden">
                            <button className="p-2 text-gray-600">
                                <Menu size={24} />
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* ANA İÇERİK ALANI */}
            <main className="pt-32 flex-grow">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase">
                        Geleceğin Sağlık Teknolojisi
                    </div>
                    <h2 className="text-5xl font-black text-gray-900 leading-tight">
                        GlucomanApp ile <br /> Hayatını <span className="text-blue-600">Dengele</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Diyabet yönetiminizi kolaylaştıran, verilerinizi anlamlandıran akıllı asistanınız.
                    </p>
                </div>
            </main>

            {/* FOOTER ALANI */}
            <footer className="bg-white border-t border-gray-100 mt-20">
                {/* 1. KATMAN: Ana Bilgi Sütunları */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Sütun 1: Logo ve Sosyal Medya */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
                                G
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-800">
                Glucoman<span className="text-blue-600">App</span>
              </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Yapay zeka destekli diyabet yönetim sistemi ile sağlığınızı veriye dönüştürüyoruz.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sütun 2: Linkler */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase text-[11px] tracking-[0.2em]">Hızlı Erişim</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            {['Anasayfa', 'Hakkımızda', 'Teknik Özellikler', 'Gizlilik Politikası'].map((item) => (
                                <li key={item}><a href="#" className="hover:text-blue-600 transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Sütun 3: İletişim */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase text-[11px] tracking-[0.2em]">İletişim</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-600 shrink-0" />
                                <span>Teknopark Ankara, <br />İvedik OSB, Türkiye</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-600 shrink-0" />
                                <span>+90 (555) 000 00 00</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-600 shrink-0" />
                                <span>iletisim@glucomanapp.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sütun 4: Bülten */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase text-[11px] tracking-[0.2em]">Bültene Abone Ol</h4>
                        <p className="text-sm text-gray-500 mb-4">Gelişmelerden haberdar olun.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="E-posta"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                            <button className="absolute right-1.5 top-1.5 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. & 3. KATMAN: Tek Satır Alt Bar */}
                <div className="border-t border-gray-100 py-6">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-x-3 gap-y-2">
                        <p className="text-gray-500 text-sm text-center">
                            © 2026 <span className="font-semibold text-gray-800">Glucoman App</span>. Tüm Hakları Saklıdır.
                        </p>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Yerli Teknoloji Girişimi</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;