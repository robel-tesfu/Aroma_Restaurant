import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Leaf, Award, ChefHat } from 'lucide-react';

const HERO_IMAGE = '/images/hero_food.png';
const HERO_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=90&fit=crop';

const iconMap = { Leaf, Award, ChefHat };

const features = [
  { icon: 'Leaf',    title: 'Fresh ingredients', subtitle: 'Sourced with care' },
  { icon: 'Award',   title: 'Made to order',     subtitle: 'Always fresh, never frozen' },
  { icon: 'ChefHat', title: 'Delivered with care', subtitle: 'Good food, great days' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: 'easeOut' },
  }),
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.35, duration: 0.8, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: '#F5F1E9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '72px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(circle at 70% 50%, rgba(30,77,51,0.05) 0%, transparent 60%)`,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 40px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
      }} className="hero-grid">

        {/* ── LEFT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Eyebrow label — "GOOD FOOD BRIGHTER DAYS" style */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <span style={{ display: 'block', width: '28px', height: '1px', background: '#7A7666' }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#7A7666',
            }}>
              Exceptional Cuisine
            </span>
          </motion.div>

          {/* Main Heading — large, serif, dark */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#1A1A14',
            }}>
              Taste Crafted<br />
              to{' '}
              <span style={{ color: '#1E4D33', fontStyle: 'italic' }}>
                Perfection
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: '#7A7666',
              maxWidth: '380px',
            }}
          >
            Wholesome dishes, made fresh and crafted to create unforgettable dining experiences.
          </motion.p>

          {/* Buttons — pill shaped, like reference */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <button
              className="btn-primary"
              onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore the Menu <ArrowRight size={14} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar size={14} />
              Reserve a Table
            </button>
          </motion.div>

          {/* Feature indicators — like reference's horizontal tags */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{
              display: 'flex',
              alignItems: 'stretch',
              gap: '0',
              marginTop: '8px',
              flexWrap: 'wrap',
            }}
          >
            {features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <div key={f.id || i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0 24px 0 0',
                  }}>
                    {/* Icon badge — sage green circle like reference */}
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#EBF0EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={14} color="#1E4D33" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#1A1A14',
                        lineHeight: 1.3,
                      }}>
                        {f.title}
                      </div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.65rem',
                        color: '#7A7666',
                        marginTop: '1px',
                      }}>
                        {f.subtitle}
                      </div>
                    </div>
                  </div>
                  {i < features.length - 1 && (
                    <div style={{
                      width: '1px',
                      height: '36px',
                      background: '#E2DDD4',
                      marginRight: '24px',
                      flexShrink: 0,
                    }} />
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN – Food Image (clean round bowl, like reference) ── */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          animate="visible"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Sage green glow behind image */}
          <div style={{
            position: 'absolute',
            width: '85%',
            height: '85%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(30,77,51,0.09) 0%, transparent 70%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }} />

          {/* Main image — clean circle */}
          <div style={{
            position: 'relative',
            width: 'clamp(320px, 44vw, 520px)',
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '6px solid #FFFFFF',
            boxShadow: '0 0 0 1px rgba(30,77,51,0.1), 0 24px 64px rgba(26,26,20,0.14)',
            background: '#EBF0EB',
          }}>
            <img
              src={HERO_IMAGE}
              alt="AROMA Signature Dish"
              onError={e => { e.target.src = HERO_IMAGE_FALLBACK; }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* "Fresh daily" badge — top right like reference */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '8%',
              right: '2%',
              background: '#FFFFFF',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(26,26,20,0.1)',
              border: '1px solid #E2DDD4',
            }}
          >
            <div style={{
              width: '24px',
              height: '24px',
              background: '#EBF0EB',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '4px',
            }}>
              <Leaf size={11} color="#1E4D33" strokeWidth={2} />
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.5rem',
              fontWeight: 700,
              color: '#1A1A14',
              letterSpacing: '0.05em',
              textAlign: 'center',
              lineHeight: 1.2,
            }}>
              Fresh<br />daily
            </div>
          </motion.div>

          {/* Rotating outer ring — subtle */}
          <div style={{
            position: 'absolute',
            width: 'calc(clamp(320px, 44vw, 520px) + 24px)',
            aspectRatio: '1/1',
            borderRadius: '50%',
            border: '1px dashed rgba(30,77,51,0.14)',
            pointerEvents: 'none',
          }} />

          {/* Floating accent dots */}
          {[
            { top: '12%', left: '4%', size: 5 },
            { bottom: '22%', left: '2%', size: 4 },
            { top: '55%', right: '1%', size: 6 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -7, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut', delay: i * 0.6 }}
              style={{
                position: 'absolute',
                width: dot.size,
                height: dot.size,
                borderRadius: '50%',
                background: '#1E4D33',
                opacity: 0.6,
                ...dot,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 40px 24px 60px !important;
          }
          .hero-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
