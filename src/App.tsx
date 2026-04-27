import { motion } from 'motion/react';
import { ShoppingBag, Globe, ShieldCheck, MapPin, Phone, ArrowRight, Menu, X, MessageCircle, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Logo = ({ className = "" }: { className?: string }) => (
  <img 
    src="https://scontent.fdac169-1.fna.fbcdn.net/v/t39.30808-6/684242338_122253612092160643_372300809007534878_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=F6vVUaYDy7IQ7kNvwEXKAIX&_nc_oc=AdqpG_zFMBsC3wQwEfIjfWFT6WCysIdpqPkTFmcFxHzOhqFUspyMKuC0Ps4KOmbwLcI&_nc_zt=23&_nc_ht=scontent.fdac169-1.fna&_nc_gid=GwY-UApBQAb_GyHMkiNorw&_nc_ss=7b2a8&oh=00_Af2PZyYxANo4d76njMV5H6lXVF1zqwWLiSDhtobDDH4Ikw&oe=69F537B5" 
    alt="Inayaan Mart Logo" 
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-light/90 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
            <span className="text-brand-light font-serif text-xl font-bold italic">IM</span>
          </div>
          <span className="text-xl font-bold tracking-tight uppercase text-brand-dark">Inayaan Mart <span className="font-light text-brand-green hidden sm:inline">LLC</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium tracking-widest uppercase text-brand-dark/70 hover:text-brand-green transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-6 py-2.5 bg-brand-green text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-brand-green-dark transition-colors border border-transparent">
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-light border-b border-gray-200/50 shadow-lg py-6 px-6 flex flex-col gap-6 md:hidden"
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif italic tracking-wide text-brand-dark"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-6 py-3 bg-brand-green text-white text-sm font-medium tracking-wider uppercase rounded-full"
          >
            Contact Us
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 px-6">
        <div className="absolute inset-x-4 md:inset-x-8 top-24 bottom-4 bg-brand-sand rounded-[2.5rem] -z-10 overflow-hidden">
          {/* Abstract background blobs for premium feel */}
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" className="text-brand-green" d="M40,-67.5C53.3,-60.2,66.6,-50.1,75.4,-36.8C84.3,-23.5,88.6,-7,86.7,8.9C84.8,24.8,76.6,40.1,65.3,51.8C54,63.4,39.6,71.5,24.5,75.8C9.5,80.1,-6.3,80.6,-21.8,76.5C-37.3,72.4,-52.5,63.7,-64.3,51.7C-76.1,39.6,-84.6,24.2,-87.3,7.9C-90,-8.4,-86.9,-25.6,-77.8,-39.1C-68.7,-52.7,-53.5,-62.7,-38.6,-69.1C-23.7,-75.5,-9.1,-78.3,4.4,-85.9C17.9,-93.5,35.8,-106,40,-67.5Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-20 w-full"
          >
            {/* The Logo as the focal point */}
            <Logo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <a href="#services" className="px-8 py-3 bg-brand-dark text-white text-sm font-semibold tracking-wide rounded-full hover:bg-brand-green transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center">
              Explore Store
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border border-brand-dark text-brand-dark text-sm font-semibold tracking-wide rounded-full hover:bg-brand-dark hover:text-white transition-colors w-full sm:w-auto justify-center flex items-center">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-brand-light px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] md:aspect-square bg-brand-sand rounded-3xl overflow-hidden border border-brand-accent"
            >
              {/* Image Placeholder representing Faisal/Business */}
              <div className="absolute inset-0 bg-brand-green/5 flex items-center justify-center">
                <div className="w-full h-full relative">
                   <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-sand/80 to-transparent"></div>
                   <div className="absolute bottom-8 left-8 right-8 text-brand-dark">
                      <p className="font-serif italic text-2xl mb-2">Faisal Chowdhury</p>
                      <p className="text-xs uppercase tracking-widest font-semibold opacity-70">Owner & Founder</p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-brand-dark">Rooted in Quality,<br/>Growing Across Borders.</h2>
              <div className="w-12 h-[2px] bg-brand-green mb-8"></div>
              <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                Under the leadership of <strong>Faisal Chowdhury</strong>, Inayaan Mart LLC has blossomed into a trusted name in the e-commerce space. As a fully licensed company based in the United States, we are committed to upholding the highest standards of reliability and customer satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                We proudly operate online storefronts that serve communities in both the <strong>USA</strong> and <strong>Bangladesh</strong>. Our dual-border presence allows us to bring curated quality directly to your doorstep, no matter the distance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white border border-brand-accent rounded-3xl p-6 flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Owner & Vision</span>
                  <span className="text-sm leading-relaxed text-brand-dark/70">Faisal Chowdhury founded Inayaan Mart with a vision of blending international standards with localized care.</span>
                </div>
                <div className="bg-white border border-brand-accent rounded-3xl p-6 flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Business Reach</span>
                  <span className="text-sm leading-relaxed text-brand-dark/70">USA & BGD. Delivering a unified shopping experience across borders.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 bg-brand-green text-brand-light px-6 md:px-12 mx-4 md:mx-8 my-8 rounded-[2.5rem] relative overflow-hidden shadow-sm">
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-80 text-brand-sand">Our Core Values</h3>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light">The Inayaan Experience</h2>
            <p className="text-white/70 font-light text-lg">
              A premium e-commerce platform dedicated to bringing you the best in global goods. We handle the complexity of international retail so you can simply enjoy the products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <ShoppingBag className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Curated E-Commerce",
                desc: "Explore a thoughtfully selected range of products designed for modern lifestyles."
              },
              {
                icon: <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "International Reach",
                desc: "Seamlessly bridging the gap between our operations in Wyoming, USA, and Bangladesh."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />,
                title: "Trusted Reliability",
                desc: "Secure transactions, transparent policies, and a commitment to customer satisfaction."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row md:flex-col gap-4 bg-brand-green-dark/40 p-8 rounded-3xl border border-white/10"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mb-2 sm:mb-0 md:mb-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed font-light text-sm">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 bg-brand-light px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="flex-1">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-brand-dark">Let's Connect</h2>
            <p className="text-gray-600 font-light text-lg mb-12 max-w-md">
              Whether you have a question about our operations or need assistance with your order, we are here to help.
            </p>
            
            <div className="space-y-8">
              <motion.a 
                whileHover={{ x: 10 }}
                href="https://wa.me/13072045641" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors duration-300">
                  <MessageCircle className="text-brand-green group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-1">WhatsApp & Phone</h4>
                  <p className="font-serif text-2xl text-brand-dark group-hover:text-[#25D366] transition-colors">+1 307 204 5641</p>
                </div>
              </motion.a>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-green" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-1">HQ Location</h4>
                  <p className="font-serif text-2xl text-brand-dark">Sheridan, WY, USA</p>
                  <p className="text-gray-500 font-light mt-1">Operating globally via USA & Bangladesh.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-brand-accent relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Logo className="scale-50 origin-top-right mix-blend-multiply" />
            </div>
            <div className="mb-8">
               <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-1">Get in Touch</h3>
               <p className="text-2xl font-serif italic text-brand-dark">Send a Message</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-brand-dark/70 mb-2">Name</label>
                <input type="text" className="w-full bg-brand-sand border border-brand-accent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-brand-dark/70 mb-2">Email</label>
                <input type="email" className="w-full bg-brand-sand border border-brand-accent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-brand-dark/70 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-sand border border-brand-accent rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-brand-dark text-white rounded-xl font-bold tracking-widest uppercase hover:bg-brand-green transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-light text-brand-dark pt-10 pb-8 px-6 border-t border-brand-accent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/70 font-semibold">
            &copy; {new Date().getFullYear()} Inayaan Mart LLC. All Rights Reserved.
          </div>
          <div className="font-serif italic text-xl text-brand-green font-medium">
            Bloom At Your Own Pace
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/70 font-semibold">
            USA &bull; Bangladesh &bull; Worldwide
          </div>
        </div>
      </footer>
    </div>
  );
}
