import { useState } from "react";

const HERO_IMAGE = "https://images.pexels.com/photos/15443903/pexels-photo-15443903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const PORTFOLIO_IMAGES = [
  "https://images.pexels.com/photos/33938628/pexels-photo-33938628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/9656153/pexels-photo-9656153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/18069160/pexels-photo-18069160.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/9999717/pexels-photo-9999717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/13312401/pexels-photo-13312401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/18069828/pexels-photo-18069828.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const PORTFOLIO_ITEMS = [
  { id: 1, img: PORTFOLIO_IMAGES[0], category: "Illustration", title: "Abstract Forms" },
  { id: 2, img: PORTFOLIO_IMAGES[1], category: "Digital Art", title: "Pastel Dreams" },
  { id: 3, img: PORTFOLIO_IMAGES[2], category: "Digital Art", title: "AI Visions" },
  { id: 4, img: PORTFOLIO_IMAGES[3], category: "Graphic Design", title: "Twisted Space" },
  { id: 5, img: PORTFOLIO_IMAGES[4], category: "Illustration", title: "Collage Study" },
  { id: 6, img: PORTFOLIO_IMAGES[5], category: "Web", title: "Digital Threads" },
];

const FILTER_TABS = ["All", "Illustration", "Digital Art", "Graphic Design", "Web"];

const TESTIMONIALS = [
  {
    quote: "Working with this team was an absolute pleasure. They transformed our vision into a digital experience that exceeded every expectation we had.",
    author: "— Eleanor B., Creative Director",
  },
  {
    quote: "Exceptional attention to detail and a refined aesthetic sensibility that elevated our brand to an entirely new level of sophistication.",
    author: "— Marcus V., Founder",
  },
  {
    quote: "A rare combination of creative brilliance and technical mastery. Our project was delivered flawlessly, on time and on budget.",
    author: "— Sophia L., Head of Product",
  },
];

// SVG Icons
const IdeaIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="16" r="8" />
    <path d="M16 24 Q16 28 17 30 L23 30 Q24 28 24 24" />
    <line x1="17" y1="30" x2="23" y2="30" />
    <line x1="17.5" y1="33" x2="22.5" y2="33" />
    <line x1="20" y1="4" x2="20" y2="2" />
    <line x1="28" y1="8" x2="30" y2="6" />
    <line x1="32" y1="16" x2="34" y2="16" />
    <line x1="12" y1="8" x2="10" y2="6" />
    <line x1="8" y1="16" x2="6" y2="16" />
  </svg>
);

const DesignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="10" y1="30" x2="28" y2="12" />
    <line x1="14" y1="26" x2="30" y2="8" />
    <polygon points="8,32 10,30 12,32 10,34" />
    <polygon points="28,10 30,8 32,10 30,12" />
    <circle cx="8" cy="32" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="32" cy="8" r="1.5" fill="currentColor" stroke="none" />
    <path d="M19 21 Q20 19 21 21 Q22 23 23 21" />
  </svg>
);

const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 32 L20 28" />
    <path d="M14 28 Q8 26 8 20 Q8 15 12 13 Q12 8 17 8 Q19 6 21 8 Q26 6 28 10 Q33 11 33 17 Q36 19 34 24 Q32 28 26 28 L14 28 Z" />
    <path d="M14 16 Q16 18 14 20" />
    <path d="M20 14 Q22 16 20 18" />
    <path d="M26 16 Q28 18 26 20" />
  </svg>
);

const ChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="32" x2="32" y2="32" />
    <line x1="8" y1="32" x2="8" y2="8" />
    <rect x="12" y="20" width="5" height="12" />
    <rect x="20" y="14" width="5" height="18" />
    <rect x="28" y="8" width="5" height="24" />
    <polyline points="14.5,18 22.5,12 30.5,6" />
    <circle cx="30.5" cy="6" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

// Vintage Badge SVG components
const Badge = ({ children, rotate = 0 }: { children: React.ReactNode; rotate?: number }) => (
  <div
    className="flex items-center justify-center w-full h-full"
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </div>
);

const CircleBadge = ({ text, sub, year }: { text: string; sub: string; year?: string }) => (
  <svg width="90" height="90" viewBox="0 0 90 90">
    <circle cx="45" cy="45" r="42" fill="none" stroke="#e8e4d8" strokeWidth="1.5" />
    <circle cx="45" cy="45" r="36" fill="none" stroke="#e8e4d8" strokeWidth="0.8" />
    <circle cx="45" cy="45" r="30" fill="none" stroke="#e8e4d8" strokeWidth="0.5" strokeDasharray="2 3" />
    <path id="topArc" d="M 15,45 A 30,30 0 0,1 75,45" fill="none" />
    <path id="botArc" d="M 15,45 A 30,30 0 0,0 75,45" fill="none" />
    <text fill="#c8c0a8" fontSize="7" fontFamily="Montserrat, sans-serif" letterSpacing="3" textAnchor="middle">
      <textPath href="#topArc" startOffset="50%">{text}</textPath>
    </text>
    <text x="45" y="48" textAnchor="middle" fill="#ddd5c0" fontSize="10" fontFamily="Playfair Display, serif" fontStyle="italic">{sub}</text>
    {year && <text fill="#a09880" fontSize="5.5" fontFamily="Montserrat, sans-serif" letterSpacing="2" textAnchor="middle">
      <textPath href="#botArc" startOffset="50%">{year}</textPath>
    </text>}
  </svg>
);

const DiamondBadge = ({ text, sub }: { text: string; sub: string }) => (
  <svg width="90" height="90" viewBox="0 0 90 90">
    <polygon points="45,4 86,45 45,86 4,45" fill="none" stroke="#e8e4d8" strokeWidth="1.2" />
    <polygon points="45,14 76,45 45,76 14,45" fill="none" stroke="#e8e4d8" strokeWidth="0.6" strokeDasharray="2 2" />
    <text x="45" y="40" textAnchor="middle" fill="#ddd5c0" fontSize="7" fontFamily="Montserrat, sans-serif" letterSpacing="3" fontWeight="300">{text}</text>
    <text x="45" y="53" textAnchor="middle" fill="#c8c0a8" fontSize="9" fontFamily="Playfair Display, serif" fontStyle="italic">{sub}</text>
  </svg>
);

const OvalBadge = ({ text, sub }: { text: string; sub: string }) => (
  <svg width="90" height="90" viewBox="0 0 90 90">
    <ellipse cx="45" cy="45" rx="40" ry="28" fill="none" stroke="#e8e4d8" strokeWidth="1.2" />
    <ellipse cx="45" cy="45" rx="35" ry="23" fill="none" stroke="#e8e4d8" strokeWidth="0.5" strokeDasharray="2 3" />
    <line x1="10" y1="45" x2="80" y2="45" stroke="#e8e4d8" strokeWidth="0.5" />
    <text x="45" y="41" textAnchor="middle" fill="#ddd5c0" fontSize="6.5" fontFamily="Montserrat, sans-serif" letterSpacing="3" fontWeight="300">{text}</text>
    <text x="45" y="53" textAnchor="middle" fill="#c8c0a8" fontSize="8.5" fontFamily="Playfair Display, serif" fontStyle="italic">{sub}</text>
  </svg>
);

const ShieldBadge = ({ text, sub }: { text: string; sub: string }) => (
  <svg width="90" height="90" viewBox="0 0 90 90">
    <path d="M 45,8 L 78,22 L 78,52 Q 78,75 45,84 Q 12,75 12,52 L 12,22 Z" fill="none" stroke="#e8e4d8" strokeWidth="1.2" />
    <path d="M 45,16 L 70,27 L 70,52 Q 70,68 45,76 Q 20,68 20,52 L 20,27 Z" fill="none" stroke="#e8e4d8" strokeWidth="0.5" strokeDasharray="2 2" />
    <text x="45" y="42" textAnchor="middle" fill="#ddd5c0" fontSize="6.5" fontFamily="Montserrat, sans-serif" letterSpacing="3" fontWeight="300">{text}</text>
    <text x="45" y="54" textAnchor="middle" fill="#c8c0a8" fontSize="8.5" fontFamily="Playfair Display, serif" fontStyle="italic">{sub}</text>
  </svg>
);

const HexBadge = ({ text, sub }: { text: string; sub: string }) => (
  <svg width="90" height="90" viewBox="0 0 90 90">
    <polygon points="45,6 78,24 78,66 45,84 12,66 12,24" fill="none" stroke="#e8e4d8" strokeWidth="1.2" />
    <polygon points="45,14 70,28 70,62 45,76 20,62 20,28" fill="none" stroke="#e8e4d8" strokeWidth="0.5" strokeDasharray="2 2" />
    <text x="45" y="42" textAnchor="middle" fill="#ddd5c0" fontSize="6.5" fontFamily="Montserrat, sans-serif" letterSpacing="3" fontWeight="300">{text}</text>
    <text x="45" y="54" textAnchor="middle" fill="#c8c0a8" fontSize="8.5" fontFamily="Playfair Display, serif" fontStyle="italic">{sub}</text>
  </svg>
);

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const filtered =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* ── HERO SECTION ── */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
          filter: "none",
        }}
      >
        {/* Grayscale + dark overlay */}
        <div className="absolute inset-0" style={{ backdropFilter: "grayscale(100%)", WebkitBackdropFilter: "grayscale(100%)" }} />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
            filter: "grayscale(1)",
          }}
        />
        {/* Grayscale filter via CSS on the bg image */}
        <style>{`
          .hero-bg { filter: grayscale(100%) brightness(0.4) contrast(1.1); }
        `}</style>
        <div
          className="hero-bg absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 select-none">
          {/* We are + stars */}
          <div className="flex items-center gap-3 mb-3">
            <StarIcon size={10} />
            <span
              className="text-white/70 tracking-[0.35em] uppercase text-xs"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
            >
              we are
            </span>
            <StarIcon size={10} />
          </div>

          {/* Main Headline */}
          <h1
            className="text-white leading-none mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 900,
              fontSize: "clamp(5rem, 18vw, 14rem)",
              letterSpacing: "-0.01em",
              textShadow: "0 0 80px rgba(255,255,255,0.08)",
            }}
          >
            MINIMAL
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-white/30" />
            <p
              className="text-white/80 tracking-[0.28em] text-xs uppercase"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
            >
              Design&nbsp;&nbsp;|&nbsp;&nbsp;Development&nbsp;&nbsp;|&nbsp;&nbsp;Success
            </p>
            <div className="h-px w-8 bg-white/30" />
          </div>

          {/* Badges */}
          <div className="flex items-center gap-4 mb-10">
            <span
              className="border border-white/30 text-white/70 tracking-[0.22em] uppercase text-[10px] px-4 py-1.5"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
            >
              codenpixel
            </span>
            <StarIcon size={8} />
            <span
              className="border border-white/30 text-white/70 tracking-[0.22em] uppercase text-[10px] px-4 py-1.5"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
            >
              retrograde
            </span>
          </div>

          {/* Year tag */}
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-white/25" />
            <span
              className="text-white/40 tracking-[0.35em] text-[11px]"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 200 }}
            >
              ⸻&nbsp; 2014 &nbsp;⸻
            </span>
            <div className="h-px w-12 bg-white/25" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/40" />
          <span className="text-white/30 tracking-[0.3em] text-[9px] uppercase" style={{ fontFamily: "Montserrat" }}>scroll</span>
        </div>
      </section>

      {/* ── NAV BAR ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-7">
            {["Home", "Services", "Portfolio"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-gray-900 tracking-[0.18em] text-[10px] uppercase transition-colors duration-200"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center Monogram */}
          <div className="flex items-center justify-center mx-4">
            <div className="border border-gray-800 w-10 h-10 flex items-center justify-center">
              <span
                className="text-gray-900 text-lg"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
              >
                T
              </span>
            </div>
          </div>

          {/* Right links */}
          <div className="hidden md:flex items-center gap-7">
            {["About Us", "Journal", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-gray-900 tracking-[0.18em] text-[10px] uppercase transition-colors duration-200"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-gray-600 ml-auto">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── SERVICES SECTION ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2
            className="text-gray-900 mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            We design digital products.
          </h2>

          {/* Squiggle divider */}
          <div className="flex justify-center mb-6">
            <svg width="80" height="16" viewBox="0 0 80 16" fill="none">
              <path
                d="M 0,8 Q 10,2 20,8 Q 30,14 40,8 Q 50,2 60,8 Q 70,14 80,8"
                stroke="#c8b89a"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Body text */}
          <p
            className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-20"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, fontSize: "0.875rem", letterSpacing: "0.03em" }}
          >
            We craft thoughtful, beautiful, and purposeful digital experiences — from brand identity
            to full-scale web applications — with an obsessive attention to detail and craft.
          </p>

          {/* 4-column icon row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100">
            {[
              { Icon: IdeaIcon, label: "IDEA" },
              { Icon: DesignIcon, label: "DESIGN" },
              { Icon: BrainIcon, label: "DEVELOPMENT" },
              { Icon: ChartIcon, label: "SUCCESS" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center py-12 px-6 gap-5 border-r border-gray-100 last:border-r-0 hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div className="text-gray-300 group-hover:text-gray-600 transition-colors duration-300">
                  <Icon />
                </div>
                <div className="w-8 h-px bg-gray-200 group-hover:bg-gray-400 transition-colors duration-300" />
                <span
                  className="text-gray-400 tracking-[0.22em] text-[9px] uppercase group-hover:text-gray-700 transition-colors duration-300"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK BAND SECTION ── */}
      <section className="bg-gray-950 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p
              className="text-gray-500 tracking-[0.28em] text-[10px] uppercase mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
            >
              ⸻&nbsp;&nbsp; our mission
            </p>
            <h2
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              }}
            >
              We design delightful<br />digital experiences
            </h2>
            <div className="h-px w-12 bg-gray-700 mb-6" />
            <p
              className="text-gray-500 leading-relaxed mb-10 text-sm"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300, letterSpacing: "0.02em" }}
            >
              From initial concept to final pixel, we partner with ambitious brands to create
              digital experiences that resonate deeply — balancing aesthetics with performance
              and user-centered thinking with business goals. Every detail matters.
            </p>
            <button
              className="border border-white/20 text-white/80 tracking-[0.25em] text-[10px] uppercase px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
            >
              Contact Us
            </button>
          </div>

          {/* Right: 3x3 badge grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge><CircleBadge text="ARTISAN STUDIO" sub="Est." year="MMXIV" /></Badge>
            </div>
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge rotate={0}><DiamondBadge text="CRAFT" sub="Design Co." /></Badge>
            </div>
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge><CircleBadge text="RETROGRADE CO" sub="Brand" year="SINCE 2014" /></Badge>
            </div>
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge><OvalBadge text="HERITAGE" sub="& Co." /></Badge>
            </div>
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge><HexBadge text="MINIMAL" sub="Studio" /></Badge>
            </div>
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge><OvalBadge text="FOUNDERS" sub="Guild" /></Badge>
            </div>
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge><ShieldBadge text="TRUSTED" sub="Agency" /></Badge>
            </div>
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge><CircleBadge text="CODENPIXEL INC" sub="Digital" year="SINCE 2014" /></Badge>
            </div>
            <div className="flex items-center justify-center p-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Badge><DiamondBadge text="PREMIUM" sub="Works" /></Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <StarIcon size={12} />

          <blockquote
            className="mt-8 mb-6 text-gray-700 leading-relaxed"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
            }}
          >
            "{TESTIMONIALS[activeTestimonial].quote}"
          </blockquote>

          <div className="h-px w-10 bg-gray-200 mx-auto mb-5" />

          <p
            className="text-gray-400 tracking-[0.18em] text-[11px] uppercase"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
          >
            {TESTIMONIALS[activeTestimonial].author}
          </p>

          {/* Dot pagination */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`rounded-full transition-all duration-300 ${
                   idx === activeTestimonial
                    ? "w-5 h-1.5 bg-gray-800"
                    : "w-1.5 h-1.5 bg-gray-200 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO SECTION ── */}
      <section className="bg-slate-100 py-24 px-6" style={{ backgroundColor: "#f0eff6" }}>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              className="text-gray-900 mb-3"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              }}
            >
              Recent work
            </h2>
            <div className="flex justify-center mb-6">
              <svg width="60" height="14" viewBox="0 0 60 14" fill="none">
                <path
                  d="M 0,7 Q 7.5,1 15,7 Q 22.5,13 30,7 Q 37.5,1 45,7 Q 52.5,13 60,7"
                  stroke="#c8b89a"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-200 ${
                    activeFilter === tab
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {filtered.map((item) => (
              <div key={item.id} className="group relative aspect-square overflow-hidden bg-gray-200 cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-5">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p
                      className="text-white/60 tracking-[0.2em] text-[9px] uppercase mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.category}
                    </p>
                    <p
                      className="text-white text-sm"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-12">
            <button
              className="border border-gray-400 text-gray-600 tracking-[0.22em] text-[10px] uppercase px-10 py-3 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
            >
              View All Work
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="border border-gray-700 w-10 h-10 flex items-center justify-center">
                <span
                  className="text-white text-lg"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                >
                  T
                </span>
              </div>
              <div>
                <p
                  className="text-white tracking-[0.3em] text-xs uppercase"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
                >
                  Minimal
                </p>
                <p
                  className="text-gray-600 tracking-[0.15em] text-[9px] uppercase"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
                >
                  Design & Development
                </p>
              </div>
            </div>

            {/* Center nav */}
            <div className="flex flex-wrap justify-center gap-6">
              {["Home", "Services", "Portfolio", "About", "Journal", "Contact"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-gray-600 hover:text-white tracking-[0.18em] text-[10px] uppercase transition-colors duration-200"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {["tw", "ig", "be", "dr"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-gray-800 flex items-center justify-center text-gray-600 hover:border-gray-500 hover:text-white transition-all duration-200"
                >
                  <span className="text-[8px] uppercase tracking-wide" style={{ fontFamily: "Montserrat" }}>{s}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-gray-900 mt-12 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-gray-700 text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
            >
              © 2014 – {new Date().getFullYear()} MINIMAL Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <StarIcon size={7} color="#4b5563" />
              <p
                className="text-gray-700 text-[10px] tracking-[0.15em]"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
              >
                Crafted with intention.
              </p>
              <StarIcon size={7} color="#4b5563" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Star icon component
function StarIcon({ size = 12, color = "rgba(255,255,255,0.6)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill={color}>
      <path d="M6 0 L6.8 4.5 L11.4 3.5 L7.8 6 L11.4 8.5 L6.8 7.5 L6 12 L5.2 7.5 L0.6 8.5 L4.2 6 L0.6 3.5 L5.2 4.5 Z" />
    </svg>
  );
}
