import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../data/siteData';

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#1E4D33" color="#1E4D33" />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E2DDD4',
        borderRadius: '16px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        position: 'relative',
        overflow: 'hidden',
        flex: 1,
        minWidth: 0,
        boxShadow: '0 2px 12px rgba(26,26,20,0.06)',
        transition: 'box-shadow 0.25s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,26,20,0.1)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(26,26,20,0.06)'; }}
    >
      {/* Top accent line — green */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: '#1E4D33',
        borderRadius: '16px 16px 0 0',
      }} />

      {/* Avatar + stars */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #EBF0EB',
            flexShrink: 0,
          }}>
            <img
              src={item.avatar}
              alt={item.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.parentNode.style.background = '#EBF0EB';
              }}
            />
          </div>
          <StarRating count={item.rating} />
        </div>
        <Quote size={22} color="#EBF0EB" />
      </div>

      {/* Review */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.85rem',
        color: '#7A7666',
        lineHeight: 1.75,
        marginBottom: '20px',
        flex: 1,
      }}>
        "{item.review}"
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: '#E2DDD4', marginBottom: '14px' }} />

      {/* Name + role */}
      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.92rem',
          fontWeight: 600,
          color: '#1A1A14',
          marginBottom: '2px',
        }}>
          {item.name}
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem',
          color: '#1E4D33',
          fontWeight: 500,
          letterSpacing: '0.03em',
        }}>
          {item.role}
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [page, setPage] = useState(0);
  const total = testimonials.length;
  const prev = () => setPage((p) => (p - 1 + total) % total);
  const next = () => setPage((p) => (p + 1) % total);

  return (
    <section id="testimonials" ref={ref} style={{
      padding: '96px 40px',
      background: '#F5F1E9',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: '1px', background: '#E2DDD4' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            {/* Label */}
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
                What Our Guests Say
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: '#1A1A14',
              lineHeight: 1.15,
            }}>
              Unforgettable{' '}
              <span style={{ color: '#1E4D33', fontStyle: 'italic' }}>Experiences</span>
            </h2>
          </div>

          {/* Rating badge — white card like reference */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '16px 22px',
            background: '#FFFFFF',
            border: '1px solid #E2DDD4',
            borderRadius: '14px',
            boxShadow: '0 2px 10px rgba(26,26,20,0.06)',
          }}>
            <div>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '4px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="#1E4D33" color="#1E4D33" />
                ))}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem',
                color: '#7A7666',
              }}>
                From 2,500+ happy diners
              </div>
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              fontWeight: 800,
              color: '#1E4D33',
            }}>
              4.9
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '20px', marginBottom: '36px' }}
          className="testimonial-cards"
        >
          {testimonials.map((item, i) => (
            <div key={item.id} className={`tcard tcard-${i}`} style={{ flex: 1, display: 'flex' }}>
              <TestimonialCard item={item} />
            </div>
          ))}
        </motion.div>

        {/* Navigation dots + arrows */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <button
            onClick={prev}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #E2DDD4',
              color: '#1E4D33',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 2px 8px rgba(26,26,20,0.06)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#1E4D33';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#1E4D33';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#1E4D33';
              e.currentTarget.style.borderColor = '#E2DDD4';
            }}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: page === i ? '22px' : '7px',
                  height: '7px',
                  borderRadius: '4px',
                  background: page === i ? '#1E4D33' : '#C8D4C8',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #E2DDD4',
              color: '#1E4D33',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 2px 8px rgba(26,26,20,0.06)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#1E4D33';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#1E4D33';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#1E4D33';
              e.currentTarget.style.borderColor = '#E2DDD4';
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-cards { flex-direction: row !important; }
          .tcard-2 { display: none !important; }
        }
        @media (max-width: 600px) {
          .testimonial-cards { flex-direction: column !important; }
          .tcard-1, .tcard-2 { display: none !important; }
        }
      `}</style>
    </section>
  );
}
