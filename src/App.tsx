import { MessageCircle, Phone, MapPin, Clock, ShieldCheck, Wrench, Car, Droplets, Snowflake, Zap, Star, Menu, X, ChevronDown, Instagram, Facebook, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './components/ImageWithFallback';

const WHATSAPP_LINK = "https://wa.me/60103756016";

// Image Paths - Using EdgeOne direct links
const IMG_LOGO = "https://quick-peach-3qmttuq1nx.edgeone.app/LOGO%20LONG@2x.png?imageMogr2/thumbnail/261x/interlace/1/quality/80/format/webp";
const IMG_HERO = "https://quick-peach-3qmttuq1nx.edgeone.app/HERO.png?imageMogr2/thumbnail/800x/interlace/1/quality/80/format/webp";
const IMG_WHY_US = "https://extended-salmon-oeoczyyb3g.edgeone.app/B.jpeg?imageMogr2/thumbnail/700x/interlace/1/quality/80/format/webp";
const IMG_TESTIMONIAL = "https://cuddly-silver-cnknukouvw.edgeone.app/WhatsApp%20Image%202026-02-28%20at%2011.16.13%20AM%20(2).jpeg?imageMogr2/thumbnail/400x/interlace/1/quality/80/format/webp";
const IMG_LOCATION = "https://cuddly-silver-cnknukouvw.edgeone.app/gemini-3-pro-image-preview-2k_a_swap_the_product_on_.png?imageMogr2/thumbnail/800x/interlace/1/quality/80/format/webp";

const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/serviskeretairidium/?hl=en" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/IridiumHQ/" },
  { name: "TikTok", icon: null, href: "https://www.tiktok.com/@iridiumhq" }, // Custom SVG for TikTok
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@ServisKeretaIridiumHQ/videos" },
];

const SPECIALISTS_DATA = [
  {
    role: "Pakar Penasihat",
    image: "https://quick-peach-3qmttuq1nx.edgeone.app/1.png?imageMogr2/thumbnail/340x/interlace/1/quality/80/format/webp",
    link: "https://wa.link/6bjcko",
    desc: "Khidmat nasihat jujur & telus. Kami takkan suggest tukar barang yang tak perlu."
  },
  {
    role: "Pakar Tayar & Handling",
    image: "https://quick-peach-3qmttuq1nx.edgeone.app/A.png?imageMogr2/thumbnail/340x/interlace/1/quality/80/format/webp",
    link: "https://wa.link/83bsd3",
    desc: "Pastikan perjalanan anda selamat & selesa. Tayar, alignment & balancing padu."
  },
  {
    role: "Pakar Aircond & Elektrik",
    image: "https://quick-peach-3qmttuq1nx.edgeone.app/3.png?imageMogr2/thumbnail/340x/interlace/1/quality/80/format/webp",
    link: "https://wa.link/mo08el",
    desc: "Diagnostik tepat untuk masalah aircond tak sejuk atau wiring problem."
  }
];

const BrandLogo = () => (
  <div className="flex items-center gap-2">
    <ImageWithFallback src={IMG_LOGO} alt="Iridium Logo" className="h-8 w-auto object-contain" loading="lazy" width="261" height="56" />
  </div>
);

const WhatsAppButton = ({ className = "", text = "WhatsApp Kami", size = "default", message = "" }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-full hover:brightness-110 active:scale-95 shadow-lg focus-visible:ring-2 focus-visible:ring-iridium-gold focus-visible:outline-none";
  const variants = {
    default: "bg-gradient-gold-animated text-iridium-black px-6 py-3 text-sm md:text-base",
    large: "bg-gradient-gold-animated text-iridium-black px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-lg shadow-[0_0_20px_rgba(182,153,81,0.4)]",
    outline: "border-2 border-iridium-gold text-iridium-gold hover:bg-iridium-gold hover:text-iridium-black px-6 py-2.5 text-sm"
  };

  const finalLink = message ? `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}` : WHATSAPP_LINK;

  return (
    <a 
      href={finalLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[size]} ${className}`}
    >
      <MessageCircle className={size === 'large' ? "w-5 h-5 sm:w-6 sm:h-6" : "w-5 h-5"} fill="currentColor" />
      {text}
    </a>
  );
};

// Static Data
const NAV_LINKS = [
  { name: "Servis", href: "#services" },
  { name: "Kenapa Kami", href: "#why-us" },
  { name: "Testimoni", href: "#reviews" },
  { name: "Lokasi", href: "#location" },
];

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Diiktiraf ISO", sub: "Jaminan Kualiti" },
  { icon: Clock, label: "10+ Tahun", sub: "Pengalaman" },
  { icon: Car, label: "15,000+", sub: "Kereta Diservis" },
  { icon: Wrench, label: "45-Mata", sub: "Pemeriksaan Keselamatan" },
];

const SERVICES_LIST = [
  { 
    icon: Droplets, 
    title: "Servis Minyak Hitam", 
    desc: "Pakej minyak sintetik premium dengan penapis minyak tulen. Pantas & bersih." 
  },
  { 
    icon: Snowflake, 
    title: "Servis Aircond", 
    desc: "Flushing sistem penuh, isi gas, dan cuci cooling coil. Kekal sejuk." 
  },
  { 
    icon: Car, 
    title: "Tayar & Alignment", 
    desc: "Pelbagai jenama tayar. Alignment 3D dan balancing yang tepat." 
  },
  { 
    icon: Wrench, 
    title: "Baiki Umum", 
    desc: "Baiki enjin, gearbox, suspension, dan sistem brek oleh pakar." 
  },
  { 
    icon: Zap, 
    title: "Bateri & Elektrik", 
    desc: "Pemeriksaan kesihatan bateri, penukaran, dan diagnostik canggih." 
  },
];

const WHY_US_POINTS = [
  "Harga Telus - Tiada caj tersembunyi, kami sebut harga sebelum mula.",
  "Pemeriksaan 45-Mata - Setiap servis datang dengan laporan kesihatan.",
  "Ruang Menunggu Selesa - WiFi, AC, dan kopi sementara anda menunggu.",
  "Mekanik Berpengalaman - Mahir mengendalikan kereta Jepun, Kontinental & Tempatan.",
  "Alat Ganti Tulen - Kami tidak berkompromi dengan keselamatan anda."
];

const REVIEWS_DATA = [
  {
    name: "Ahmad F.",
    role: "Pemilik Honda City",
    text: "Bengkel terbaik di Klang! Hantar City saya untuk servis major. Harga berpatutan dan mereka jelaskan semuanya dengan jelas. Tiada harga ketuk.",
    stars: 5,
    date: "2 hari lepas"
  },
  {
    name: "Sarah L.",
    role: "Pemilik BMW 3 Series",
    text: "Suasana sangat profesional. Ruang menunggu bersih dan selesa. Mekanik tahu apa yang mereka buat dengan kereta conti.",
    stars: 5,
    date: "1 minggu lepas"
  },
  {
    name: "Raj K.",
    role: "Pemilik Myvi",
    text: "Servis pantas untuk tukar minyak hitam. Siap dalam 45 minit. Staf mesra dan sopan. Pasti akan datang lagi.",
    stars: 5,
    date: "2 minggu lepas"
  },
  {
    name: "Mei Ling",
    role: "Pemilik Toyota Vios",
    text: "Sangat rekemen! Aircond kereta dah sejuk beku balik lepas servis sini. Harga pun sangat reasonable.",
    stars: 5,
    date: "3 minggu lepas"
  },
  {
    name: "Kamal H.",
    role: "Pemilik Proton X70",
    text: "Jujur dan amanah. Dorang tunjuk part lama yang dah tukar. Rasa selamat hantar kereta kat sini.",
    stars: 5,
    date: "1 bulan lepas"
  },
  {
    name: "Jessica T.",
    role: "Pemilik Mazda CX-5",
    text: "Best service in town! The waiting area is like a cafe. Free coffee and wifi while waiting.",
    stars: 5,
    date: "1 bulan lepas"
  }
];

const FAQS_DATA = [
  {
    question: "Adakah saya perlu membuat temujanji sebelum datang?",
    answer: "Kami menggalakkan temujanji untuk mengelakkan masa menunggu yang lama, tetapi kami juga menerima pelanggan 'walk-in' bergantung kepada kekosongan slot."
  },
  {
    question: "Berapa lama masa yang diambil untuk servis biasa?",
    answer: "Servis penyelenggaraan biasa (tukar minyak hitam & filter) biasanya mengambil masa sekitar 45 minit hingga 1 jam."
  },
  {
    question: "Adakah anda menggunakan alat ganti tulen?",
    answer: "Ya, kami hanya menggunakan alat ganti tulen atau OEM berkualiti tinggi yang dijamin ketahanannya untuk setiap pembaikan."
  },
  {
    question: "Apakah kaedah pembayaran yang diterima?",
    answer: "Kami menerima tunai, kad kredit/debit, pemindahan bank dalam talian (online transfer), dan juga e-wallet utama."
  },
  {
    question: "Adakah terdapat jaminan untuk pembaikan?",
    answer: "Ya, kami menawarkan jaminan (warranty) untuk kebanyakan servis dan alat ganti. Sila tanya penasihat servis kami untuk butiran lanjut mengenai servis tertentu."
  }
];

const ReviewCard: FC<{ review: typeof REVIEWS_DATA[0] }> = ({ review }) => (
  <div className="w-[85vw] sm:w-[350px] shrink-0 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-iridium-gold/30 transition-all mx-2 sm:mx-4 relative group">
    <div className="absolute top-6 right-6">
      <ImageWithFallback src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" loading="lazy" width="20" height="20" />
    </div>
    <div className="flex gap-1 text-iridium-gold mb-3">
      {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
    </div>
    <p className="text-gray-300 italic mb-4 text-sm leading-relaxed line-clamp-3">"{review.text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-xs border border-white/10">
        {review.name[0]}
      </div>
      <div>
        <h3 className="font-bold text-white text-sm">{review.name}</h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">{review.role} • {review.date}</p>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-iridium-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <BrandLogo />
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-iridium-gold transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <WhatsAppButton size="outline" text="Hubungi Kami" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 focus-visible:ring-2 focus-visible:ring-iridium-gold focus-visible:outline-none rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-iridium-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-300 hover:text-iridium-gold py-2 block border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <WhatsAppButton className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-0 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src={IMG_HERO} 
          alt="Servis Kereta Premium" 
          className="w-full h-full object-cover"
          width="784"
          height="1050"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-iridium-black via-iridium-black/80 to-iridium-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
        >
          <motion.div 
            className="inline-block px-4 py-1.5 border border-iridium-gold/50 rounded-full bg-iridium-gold/10 mb-6 relative overflow-hidden"
            animate={{ boxShadow: ["0 0 0px rgba(182,153,81,0)", "0 0 15px rgba(182,153,81,0.3)", "0 0 0px rgba(182,153,81,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            />
            <span className="text-iridium-gold text-xs font-bold tracking-[0.2em] uppercase relative z-10">Pakar Servis Kereta Klang</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 italic">
            PENJAGAAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-iridium-gold to-iridium-champagne">
              PREMIUM
            </span>
            <br />UNTUK ANDA
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Dari servis biasa hingga kerosakan besar, kami uruskan dengan telus, selesa, dan pantas.
            <motion.span 
              className="block mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-iridium-gold via-white to-iridium-gold bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Dipercayai oleh 5,000+ pemilik kereta di Klang.
            </motion.span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <WhatsAppButton 
              size="large" 
              text={<><span className="sm:hidden">Dapatkan Free Inspection</span><span className="hidden sm:inline">Dapatkan Free Inspection Hari Ini</span></>} 
              className="w-full sm:w-auto" 
            />
            <div className="flex items-center justify-center sm:justify-start gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-iridium-black overflow-hidden">
                     <ImageWithFallback src={`https://picsum.photos/seed/face${i}/100/100`} alt="User" loading="lazy" width="32" height="32" />
                  </div>
                ))}
              </div>
              <div className="text-xs">
                <div className="flex text-iridium-gold">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="text-gray-400">4.9/5 di Google Reviews</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <section className="bg-iridium-dark-gray border-y border-white/5 py-12 relative z-20">
      <h2 className="sr-only">Kenapa Percaya Kami</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TRUST_ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group p-4 bg-white/5 rounded-xl md:bg-transparent md:p-0">
              <div className="w-12 h-12 rounded-full bg-iridium-gold/10 flex items-center justify-center mb-4 group-hover:bg-iridium-gold transition-colors duration-300">
                <item.icon className="text-iridium-gold group-hover:text-iridium-black transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.label}</h3>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-iridium-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white italic mb-4">SERVIS KAMI</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-iridium-gold to-iridium-champagne mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Penjagaan automotif menyeluruh di bawah satu bumbung. Kami hanya menggunakan alat ganti tulen dan peralatan moden.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-iridium-gold/30 transition-all duration-300 group flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-iridium-black border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-iridium-gold transition-colors shrink-0">
                <service.icon className="text-iridium-gold" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row justify-center gap-4">
          <WhatsAppButton text="Tanya Harga Servis" size="default" message="Hi Iridium, saya nak tanya harga servis untuk kereta saya." />
          <a 
            href="https://drive.google.com/file/d/1JMjruXgzRtcBZbwvn8H42KUZ6HlOsEBO/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-full hover:brightness-110 active:scale-95 px-6 py-3 text-sm md:text-base border-2 border-iridium-gold text-iridium-gold hover:bg-iridium-gold hover:text-iridium-black focus-visible:ring-2 focus-visible:ring-iridium-gold focus-visible:outline-none"
          >
            Butiran Lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-iridium-dark-gray relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-iridium-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-iridium-gold/20 rounded-2xl transform rotate-3"></div>
              <ImageWithFallback 
                src={IMG_WHY_US} 
                alt="Mekanik bekerja" 
                className="relative rounded-xl shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[300px] md:h-[400px]"
                loading="lazy"
                width="700"
                height="525"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-white italic mb-6">
              KENAPA PILIH <span className="text-transparent bg-clip-text bg-gradient-to-r from-iridium-gold to-iridium-champagne">IRIDIUM?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Kami jaga kereta anda macam kereta sendiri. Tak ada hidden charge, tak ada ketuk harga. Jujur & Telus.
            </p>

            <ul className="space-y-4">
              {WHY_US_POINTS.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 min-w-[20px]">
                    <ShieldCheck className="text-iridium-gold w-5 h-5" />
                  </div>
                  <span className="text-gray-200">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <WhatsAppButton text="Tempah Slot Anda Sekarang" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Specialists = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -340 : 340;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-iridium-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white italic mb-4">PAKAR IRIDIUM</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-iridium-gold to-iridium-champagne mx-auto mb-6"></div>
        <p className="text-gray-400">Pasukan pakar kami sedia membantu anda.</p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-iridium-black/80 text-iridium-gold border border-iridium-gold/30 backdrop-blur-sm shadow-lg lg:hidden active:scale-95 transition-all hover:bg-iridium-gold hover:text-iridium-black focus-visible:ring-2 focus-visible:ring-iridium-gold focus-visible:outline-none"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div ref={scrollRef} className="flex overflow-x-auto pb-12 gap-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory justify-start lg:justify-center no-scrollbar scroll-smooth">
          {SPECIALISTS_DATA.map((specialist, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[340px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-iridium-gold/50 transition-all duration-500 relative shadow-lg hover:shadow-iridium-gold/10"
            >
              <div className="h-[420px] overflow-hidden relative">
                <ImageWithFallback 
                  src={specialist.image} 
                  alt={specialist.role} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="340"
                  height="420"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iridium-black via-iridium-black/20 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 italic">{specialist.role}</h3>
                  <p className="text-gray-300 text-sm mb-6 font-medium">{specialist.desc}</p>
                  
                  <a 
                    href={specialist.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 text-sm hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:brightness-110 active:scale-95 w-full"
                  >
                    <MessageCircle size={18} fill="white" />
                    WhatsApp Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-iridium-black/80 text-iridium-gold border border-iridium-gold/30 backdrop-blur-sm shadow-lg lg:hidden active:scale-95 transition-all hover:bg-iridium-gold hover:text-iridium-black focus-visible:ring-2 focus-visible:ring-iridium-gold focus-visible:outline-none"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-iridium-black overflow-hidden relative">
      {/* SVG Definition for Animated Gold Gradient */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B69951" />
          <stop offset="50%" stopColor="#F7E7CE" />
          <stop offset="100%" stopColor="#B69951" />
          <animate attributeName="x1" values="0%;100%;0%" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="100%;200%;100%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white italic mb-4">APA KATA MEREKA?</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-4xl font-bold text-white">4.9</span>
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Star 
                key={i} 
                size={24} 
                fill="url(#gold-gradient)" 
                stroke="none"
              />
            ))}
          </div>
        </div>
        <p className="text-gray-400">Berdasarkan 500+ ulasan di Google Reviews</p>
      </div>

      {/* Marquee Row 1 (Left) */}
      <div className="relative w-full mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-iridium-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-iridium-black to-transparent z-10"></div>
        
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...REVIEWS_DATA, ...REVIEWS_DATA].map((review, idx) => (
            <ReviewCard key={`row1-${idx}`} review={review} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Right) */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-iridium-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-iridium-black to-transparent z-10"></div>
        
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...REVIEWS_DATA, ...REVIEWS_DATA].map((review, idx) => (
            <ReviewCard key={`row2-${idx}`} review={review} />
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center relative z-20">
        <a 
          href="https://g.page/r/CTRNamZ5GW_MEAE/review" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-iridium-gold hover:text-white transition-colors border-b border-iridium-gold/30 hover:border-white pb-1"
        >
          Lihat Semua Review
        </a>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-iridium-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white italic mb-4">SOALAN LAZIM</h2>
          <p className="text-gray-400">Jawapan kepada soalan yang sering ditanya oleh pelanggan kami.</p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-colors hover:border-iridium-gold/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className={`font-bold text-lg ${openIndex === index ? 'text-iridium-gold' : 'text-white'}`}>
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-iridium-gold' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationContact = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-iridium-dark-gray border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <div className="flex flex-col h-full justify-center text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white italic mb-4">LAWATI KAMI</h2>
            <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Kami terletak di tengah-tengah Klang. Singgah untuk pemeriksaan percuma.
            </p>
            
            <div className="space-y-6 md:space-y-8 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 text-left flex-grow">
              {/* Address */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-iridium-black flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="text-iridium-gold w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <h3 className="text-iridium-gold text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">Alamat</h3>
                  <p className="text-white text-lg md:text-xl font-medium leading-snug">
                    Lot 1078, Jln Yadi,<br />
                    41250 Klang, Selangor.
                  </p>
                  <a 
                    href="https://share.google/OoH9seGrVU9l4zikw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-500 mt-2 hover:text-white transition-colors group"
                  >
                    Lihat di Google Maps 
                    <span className="group-hover:translate-x-1 transition-transform text-iridium-gold">&rarr;</span>
                  </a>
                </div>
              </div>
              
              {/* Operating Hours */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-iridium-black flex items-center justify-center shrink-0 border border-white/10">
                  <Clock className="text-iridium-gold w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <h3 className="text-iridium-gold text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">Waktu Operasi</h3>
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="text-gray-400 text-sm md:text-base w-28">Ahad - Isnin</span>
                      <span className="text-white text-lg md:text-xl font-medium">9:00 PG - 5:00 PTG</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="text-gray-400 text-sm md:text-base w-28">Selasa - Sabtu</span>
                      <span className="text-white text-lg md:text-xl font-medium">9:00 PG - 6:00 PTG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
              <motion.a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl text-white font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:outline-none"
              >
                <MessageCircle className="w-6 h-6" fill="white" />
                WhatsApp Sekarang
              </motion.a>
            </div>
          </div>

          <div className="h-full min-h-[500px] bg-gray-800 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl flex flex-col">
            {/* Map pointing to Klang */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.0127572504608!2d101.41367257795625!3d3.0398777369780667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc54b5b21928c5%3A0xcc6f1979666a4d34!2sServis%20Kereta%20IRIDIUM%20-%20HQ!5e0!3m2!1sen!2smy!4v1772253500956!5m2!1sen!2smy" 
              width="100%" 
              height="100%" 
              style={{ border: 0, flexGrow: 1 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Servis Kereta Iridium"
            ></iframe>
            <div className="absolute bottom-6 left-6 bg-iridium-black/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border border-white/10 hidden sm:block">
              <p className="text-sm text-iridium-gold font-bold uppercase tracking-wider mb-1">Lokasi Kami</p>
              <p className="text-white font-bold text-lg">Servis Kereta Iridium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <BrandLogo />
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((social, idx) => (
            <a 
              key={idx} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-iridium-gold transition-colors"
              aria-label={social.name}
            >
              {social.icon ? (
                <social.icon size={20} />
              ) : (
                // Custom SVG for TikTok
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              )}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm">
          © 2026 Servis Kereta Iridium. Hak Cipta Terpelihara.
        </p>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        aria-label="WhatsApp Kami"
      >
        <MessageCircle className="text-white w-8 h-8" fill="white" />
      </a>
    </motion.div>
  );
};

export default function App() {
  // Fix favicon aspect ratio
  useEffect(() => {
    const updateFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
      link.type = 'image/png';
      link.rel = 'icon';
      document.head.appendChild(link);

      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = "https://elderly-silver-zvyjww779w.edgeone.app/Asset%202@2x.png";

      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate dimensions to fit (contain) while preserving aspect ratio
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;
        
        ctx.drawImage(img, x, y, w, h);
        
        link.href = canvas.toDataURL("image/png");
      };
    };

    updateFavicon();
  }, []);

  return (
    <div className="font-sans bg-iridium-black min-h-screen text-white selection:bg-iridium-gold selection:text-iridium-black">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Specialists />
      <Testimonials />
      <FAQ />
      <LocationContact />
      <Footer />
      <StickyCTA />
    </div>
  );
}
