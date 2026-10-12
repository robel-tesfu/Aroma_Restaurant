import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { stats } from '../data/siteData';

/* ── Image paths ── */
const IMG_INTERIOR = '/images/restaurant_interior_main.png';
const IMG_CHEF     = '/images/restaurant_chef_cooking.png';
const IMG_TABLE    = '/images/restaurant_ambiance_table.png';
const IMG_DISH     = '/images/menu_salmon.png';

/* ── Fallbacks ── */
const FB_INTERIOR = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=85&fit=crop';
const FB_CHEF     = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=85&fit=crop';
const FB_TABLE    = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=85&fit=crop';
const FB_DISH     = 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=85&fit=crop';

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: 'easeOut' } },
});

export default function StorySection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="story" ref={ref} style={{ background: '#F5F1E9', position: 'relative' }}>

      {/* Thin top border */}
      <div style={{ height: '1px', background: '#E2DDD4' }} />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 40px',
          display: 'grid',
          gridTemplateColumns: '42% 1fr',
          gap: '56px',
          alignItems: 'center',
        }}
        className="story-outer"
      >

        {/* ═══════════════════════════════════════
            LEFT — Text panel (description + stats)
            ═══════════════════════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* Label */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}
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
              Our Story
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              color: '#1A1A14',
              marginBottom: '22px',
            }}
          >
            Good food.<br />
            <span style={{ color: '#1E4D33', fontStyle: 'italic' }}>Better mood.</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp(0.16)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              color: '#7A7666',
              lineHeight: 1.82,
              marginBottom: '32px',
              maxWidth: '360px',
            }}
          >
            At AROMA, we believe that exceptional food brings people together.
            Every dish is thoughtfully crafted using fresh ingredients, bold
            flavors, and a passion for creating unforgettable dining experiences.
          </motion.p>

          {/* CTA button */}
          <motion.div
            variants={fadeUp(0.22)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ marginBottom: '40px' }}
          >
            <button className="btn-primary" style={{ width: 'fit-content' }}>
              Our Story <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Divider */}
          <div style={{ height: '1px', background: '#E2DDD4', marginBottom: '30px' }} />

          {/* Stats row — identical to reference */}
          <motion.div
            variants={fadeUp(0.28)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {stats.map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'stretch' }}>
                <div style={{ paddingRight: '28px' }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2.1rem',
                    fontWeight: 800,
                    color: '#1A1A14',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.72rem',
                    color: '#7A7666',
                    lineHeight: 1.4,
                  }}>
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div style={{
                    width: '1px',
                    background: '#E2DDD4',
                    marginRight: '28px',
                    alignSelf: 'stretch',
                    minHeight: '38px',
                  }} />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════
            RIGHT — 4-image photo grid
            Layout (matching reference exactly):
              ┌──────────┬──────────┐
              │          │  Chef    │
              │ Interior ├────┬─────┤
              │  (tall)  │Dsh │ Tbl │
              └──────────┴────┴─────┘
            ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.72, ease: 'easeOut', delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '220px 180px',
            gap: '8px',
          }}
          className="story-photo-grid"
        >
          {/* ── 1. Large interior — spans both rows, left column ── */}
          <div style={{
            gridRow: '1 / 3',
            borderRadius: '14px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
              src={IMG_INTERIOR}
              alt="Restaurant interior"
              onError={e => { e.target.src = FB_INTERIOR; }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Frosted label */}
            <div style={{
              position: 'absolute',
              bottom: '14px',
              left: '14px',
              background: 'rgba(26,56,40,0.72)',
              backdropFilter: 'blur(8px)',
              borderRadius: '50px',
              padding: '5px 14px',
            }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.56rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.92)',
              }}>
                Our Space
              </span>
            </div>
          </div>

          {/* ── 2. Chef — top-right ── */}
          <div style={{
            borderRadius: '14px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
              src={IMG_CHEF}
              alt="Chef crafting a dish"
              onError={e => { e.target.src = FB_CHEF; }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* "Made fresh" floating pill */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#FFFFFF',
                borderRadius: '50px',
                padding: '4px 11px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 4px 14px rgba(26,26,20,0.18)',
              }}
            >
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#1E4D33', display: 'inline-block',
              }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.56rem',
                fontWeight: 700,
                color: '#1A1A14',
                letterSpacing: '0.04em',
              }}>
                Made fresh
              </span>
            </motion.div>
          </div>

          {/* ── Bottom row: 2 images in a 2-col sub-grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
          }}>

            {/* ── 3. Dish — bottom-left ── */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative' }}>
              <motion.img
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.5 }}
                src={IMG_DISH}
                alt="Signature dish"
                onError={e => { e.target.src = FB_DISH; }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* ── 4. Table setting — bottom-right ── */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative' }}>
              <motion.img
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.5 }}
                src={IMG_TABLE}
                alt="Elegant table setting"
                onError={e => { e.target.src = FB_TABLE; }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* EST badge */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: '#1E4D33',
                borderRadius: '50px',
                padding: '4px 11px',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.54rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.1em',
                }}>
                  EST. 2024
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-outer {
            grid-template-columns: 1fr !important;
            padding: 56px 24px !important;
            gap: 40px !important;
          }
          .story-photo-grid {
            grid-template-rows: 200px 160px !important;
          }
        }
        @media (max-width: 540px) {
          .story-photo-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: 200px 180px 130px !important;
          }
          .story-photo-grid > div:first-child {
            grid-row: 1 / 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
