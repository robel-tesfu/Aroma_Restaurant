import { useRef, useState, useMemo } from 'react';
import { motion, useInView, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { menuItems, menuFilters } from '../data/siteData';

/* ─── Badge color map ─────────────────────────────────────────────────────── */
const BADGE_COLORS = {
  "Chef's Pick": { bg: '#1E4D33', text: '#fff' },
  'Popular':     { bg: '#B08858', text: '#fff' },
  'New':         { bg: '#2A6645', text: '#fff' },
  'Vegan':       { bg: '#5C8A5C', text: '#fff' },
  'Fresh Daily': { bg: '#1E4D33', text: '#fff' },
  'Summer Pick': { bg: '#E07D3A', text: '#fff' },
  'Signature':   { bg: '#1A3828', text: '#fff' },
  'Virgin':      { bg: '#7A9E7E', text: '#fff' },
  'Reserve':     { bg: '#5C3D1E', text: '#fff' },
  'Seasonal':    { bg: '#8B7355', text: '#fff' },
  'High Protein':{ bg: '#2A6645', text: '#fff' },
};

/* ─── Category accent colors ─────────────────────────────────────────────── */
const CAT_ACCENT = {
  Food:    '#1E4D33',
  Juice:   '#E07D3A',
  Smoothie:'#7A3DB0',
  Mojito:  '#1E8C6A',
  Alcohol: '#8B4513',
};

/* ─── Card component ─────────────────────────────────────────────────────── */
function MenuCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const accent = CAT_ACCENT[item.category] || '#1E4D33';
  const badge  = BADGE_COLORS[item.badge]  || { bg: '#1E4D33', text: '#fff' };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
      transition={{ delay: index * 0.05, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #E2DDD4',
        boxShadow: hovered
          ? '0 16px 48px rgba(26,26,20,0.14)'
          : '0 2px 12px rgba(26,26,20,0.06)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        borderColor: hovered ? `${accent}40` : '#E2DDD4',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Category accent bar at top ── */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '3px',
          background: accent,
          transformOrigin: 'left',
          zIndex: 10,
          borderRadius: '20px 20px 0 0',
        }}
      />

      {/* ── Image wrapper ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4/3',
        overflow: 'hidden',
        background: '#F0EDE5',
        flexShrink: 0,
      }}>
        <motion.img
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          src={item.image}
          alt={item.name}
          onError={e => { e.target.src = item.fallback; }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {/* Dark gradient for badge readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(0,0,0,0.18) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        {item.badge && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: badge.bg,
            color: badge.text,
            fontSize: '0.55rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '5px 11px',
            borderRadius: '50px',
            fontFamily: "'Inter', sans-serif",
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          }}>
            {item.badge}
          </div>
        )}

        {/* Veg indicator */}
        {item.veg && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '22px',
            height: '22px',
            background: '#EBF0EB',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}>
            <Leaf size={10} color="#1E4D33" strokeWidth={2.5} />
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
        {/* Category + tag row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: accent,
          }}>
            {item.category}
          </span>
          <span style={{ color: '#E2DDD4', fontSize: '0.6rem' }}>·</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.58rem',
            color: '#A8A498',
            letterSpacing: '0.05em',
          }}>
            {item.tag}
          </span>
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1rem',
          fontWeight: 600,
          color: '#1A1A14',
          lineHeight: 1.3,
          margin: 0,
        }}>
          {item.name}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.74rem',
          color: '#7A7666',
          lineHeight: 1.65,
          margin: 0,
          flex: 1,
        }}>
          {item.description}
        </p>

        {/* Bottom row — animated on hover */}
        <motion.div
          animate={{ y: hovered ? 0 : 4, opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.25 }}
          style={{
            marginTop: '10px',
            paddingTop: '12px',
            borderTop: '1px solid #F0EDE5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.68rem',
            color: accent,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: accent, display: 'inline-block',
            }} />
            Order Item
          </span>
          <motion.div
            animate={{
              x: hovered ? 0 : -4,
              background: hovered ? accent : '#F0EDE5',
            }}
            transition={{ duration: 0.25 }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: hovered ? '#fff' : accent,
              fontSize: '1rem',
              fontWeight: 300,
            }}
          >
            +
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Filter pill ─────────────────────────────────────────────────────────── */
function FilterPill({ filter, active, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(filter.id)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '9px 20px',
        borderRadius: '50px',
        border: active ? 'none' : '1.5px solid #E2DDD4',
        background: active ? '#1E4D33' : '#FFFFFF',
        color: active ? '#FFFFFF' : '#7A7666',
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.78rem',
        fontWeight: active ? 600 : 400,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        boxShadow: active
          ? '0 4px 16px rgba(30,77,51,0.28)'
          : '0 1px 4px rgba(26,26,20,0.06)',
        position: 'relative',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>{filter.emoji}</span>
      {filter.label}
      {active && (
        <motion.span
          layoutId="pill-active"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50px',
            background: '#1E4D33',
            zIndex: -1,
          }}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

/* ─── Empty state ─────────────────────────────────────────────────────────── */
function EmptyState({ category }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      style={{
        gridColumn: '1 / -1',
        textAlign: 'center',
        padding: '72px 24px',
        color: '#A8A498',
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '16px', opacity: 0.4 }}>🍽️</div>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#7A7666' }}>
        No items in this category yet.
      </p>
    </motion.div>
  );
}

/* ─── Count badge ─────────────────────────────────────────────────────────── */
function CountBadge({ count }) {
  return (
    <motion.span
      key={count}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '22px',
        height: '22px',
        borderRadius: '50px',
        background: 'rgba(30,77,51,0.12)',
        color: '#1E4D33',
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.65rem',
        fontWeight: 700,
        padding: '0 7px',
        marginLeft: '6px',
      }}
    >
      {count}
    </motion.span>
  );
}

/* ─── How many cards to show initially ───────────────────────────────────── */
const INITIAL_VISIBLE = 8;

/* ─── Main section ────────────────────────────────────────────────────────── */
export default function SignatureCollection() {
  const ref     = useRef(null);
  const gridRef = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-60px' });

  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded,     setExpanded]     = useState(false);

  /* Reset expanded when the filter tab changes */
  const handleFilter = (id) => {
    setActiveFilter(id);
    setExpanded(false);
  };

  const filtered = useMemo(() =>
    activeFilter === 'All'
      ? menuItems
      : menuItems.filter(item => item.category === activeFilter),
    [activeFilter]
  );

  const visible       = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hiddenCount   = filtered.length - INITIAL_VISIBLE;
  const hasMore       = !expanded && hiddenCount > 0;
  const canCollapse   = expanded && filtered.length > INITIAL_VISIBLE;

  /* Scroll back up to grid when collapsing */
  const handleCollapse = () => {
    setExpanded(false);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="menu" ref={ref} style={{
      padding: '96px 40px 80px',
      background: '#F5F1E9',
      position: 'relative',
    }}>

      {/* Subtle top border */}
      <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: '1px', background: '#E2DDD4' }} />

      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '44px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ display: 'block', width: '28px', height: '1px', background: '#7A7666' }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#7A7666',
            }}>
              Our Full Menu
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: '#1A1A14',
              lineHeight: 1.15,
              margin: 0,
            }}>
              Your next favorite bite.
              <CountBadge count={filtered.length} />
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '20px', height: '20px', borderRadius: '50%',
                background: '#EBF0EB', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Leaf size={10} color="#1E4D33" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: '#7A7666' }}>
                Plant-based
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '40px',
            padding: '16px 20px',
            background: '#FFFFFF',
            borderRadius: '60px',
            border: '1px solid #E2DDD4',
            boxShadow: '0 2px 12px rgba(26,26,20,0.06)',
            width: 'fit-content',
          }}
        >
          <LayoutGroup>
            {menuFilters.map(filter => (
              <FilterPill
                key={filter.id}
                filter={filter}
                active={activeFilter === filter.id}
                onClick={handleFilter}
              />
            ))}
          </LayoutGroup>
        </motion.div>

        {/* ── Grid wrapper with optional fade mask ── */}
        <div ref={gridRef} style={{ position: 'relative' }}>
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '22px',
            }}
            className="menu-grid"
          >
            <AnimatePresence mode="popLayout">
              {visible.length > 0
                ? visible.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} />
                  ))
                : <EmptyState key="empty" category={activeFilter} />
              }
            </AnimatePresence>
          </motion.div>

          {/* ── Gradient fade mask when items are hidden ── */}
          <AnimatePresence>
            {hasMore && (
              <motion.div
                key="fade-mask"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '200px',
                  background: 'linear-gradient(to bottom, transparent 0%, #F5F1E9 80%)',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* ── Explore More / Show Less button ── */}
        <AnimatePresence mode="wait">
          {(hasMore || canCollapse) && (
            <motion.div
              key={expanded ? 'collapse' : 'expand'}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                marginTop: hasMore ? '-40px' : '36px',
                position: 'relative',
                zIndex: 10,
              }}
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={expanded ? handleCollapse : () => setExpanded(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 36px',
                  borderRadius: '50px',
                  background: expanded ? 'transparent' : '#1E4D33',
                  color: expanded ? '#1E4D33' : '#FFFFFF',
                  border: expanded ? '1.5px solid #1E4D33' : 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: expanded
                    ? 'none'
                    : '0 6px 24px rgba(30,77,51,0.28)',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.02em',
                }}
              >
                {expanded ? (
                  <>
                    <motion.span
                      animate={{ rotate: 180 }}
                      style={{ display: 'inline-block', fontSize: '1rem' }}
                    >
                      ↑
                    </motion.span>
                    Show Less
                  </>
                ) : (
                  <>
                    Explore More
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                    }}>
                      +{hiddenCount}
                    </span>
                  </>
                )}
              </motion.button>

              {/* Helper text */}
              {!expanded && (
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  color: '#A8A498',
                }}>
                  {hiddenCount} more item{hiddenCount !== 1 ? 's' : ''} in this category
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        @media (max-width: 680px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 420px) {
          .menu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
