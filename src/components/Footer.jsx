import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Share2, Music, Music2, ArrowRight } from 'lucide-react';

const socialLinks = [
  { Icon: Globe,  label: 'Facebook',  href: '#' },
  { Icon: Share2, label: 'Instagram', href: '#' },
  { Icon: Music,  label: 'Twitter / X', href: '#' },
  { Icon: Music2, label: 'TikTok',    href: '#' },
];

const quickLinks = ['Home', 'Menu', 'Specials', 'About Us', 'Contact'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── DARK GREEN CTA BANNER — like reference "Your lunch break deserves better" ── */}
      <div style={{
        background: '#1A3828',
        padding: '64px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circle glow */}
        <div style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
          <div style={{ maxWidth: '500px' }}>
            {/* Small label */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
            }}>
              <span style={{ display: 'block', width: '24px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
              }}>
                A Brighter Dining Awaits
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#FAFAF5',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}>
              Your next dining<br />experience awaits.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
            }}>
              Fresh dishes. Real ingredients. A happier you.
            </p>
          </div>

          {/* CTA button — white outlined pill */}
          <button
            className="btn-banner"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Order Now <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* ── FOOTER BODY ── */}
      <div style={{ background: '#EDE8DC', position: 'relative' }}>
        {/* Top border */}
        <div style={{ height: '1px', background: '#E2DDD4' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 40px 40px' }}>

          {/* Four columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1.3fr 1.5fr',
            gap: '48px',
            marginBottom: '48px',
          }} className="footer-columns">

            {/* Column 1 – Brand */}
            <div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#1A1A14',
                  lineHeight: 1,
                }}>
                  A<span style={{ color: '#1E4D33' }}>R</span>OMA
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.46rem',
                  letterSpacing: '0.25em',
                  color: '#1E4D33',
                  fontWeight: 500,
                  marginTop: '2px',
                }}>
                  RESTAURANT
                </div>
              </div>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                color: '#7A7666',
                lineHeight: 1.75,
                marginBottom: '22px',
                maxWidth: '240px',
              }}>
                Elevating taste, crafting memories. Experience the art of fine dining like never before.
              </p>

              {/* Social icons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {socialLinks.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(30,77,51,0.06)',
                      border: '1px solid #E2DDD4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#7A7666',
                      transition: 'all 0.25s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#1E4D33';
                      e.currentTarget.style.background = 'rgba(30,77,51,0.1)';
                      e.currentTarget.style.color = '#1E4D33';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#E2DDD4';
                      e.currentTarget.style.background = 'rgba(30,77,51,0.06)';
                      e.currentTarget.style.color = '#7A7666';
                    }}
                  >
                    <Icon size={13} strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 – Quick Links */}
            <div>
              <h4 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#1A1A14',
                marginBottom: '20px',
              }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.82rem',
                        color: '#7A7666',
                        textDecoration: 'none',
                        transition: 'color 0.25s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                      onMouseEnter={e => e.target.style.color = '#1E4D33'}
                      onMouseLeave={e => e.target.style.color = '#7A7666'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 – Contact */}
            <div>
              <h4 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#1A1A14',
                marginBottom: '20px',
              }}>
                Contact Us
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { Icon: MapPin, text: 'Bole, Addis Ababa\nEthiopia' },
                  { Icon: Phone, text: '+251 911 000 000' },
                  { Icon: Mail,  text: 'hello@aromarestaurant.com' },
                  { Icon: Clock, text: 'Mon – Sun: 11:00 AM – 11:00 PM' },
                ].map(({ Icon, text }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '6px',
                      background: '#EBF0EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}>
                      <Icon size={12} color="#1E4D33" strokeWidth={1.8} />
                    </div>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      color: '#7A7666',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                    }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4 – Newsletter */}
            <div>
              <h4 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#1A1A14',
                marginBottom: '12px',
              }}>
                Newsletter
              </h4>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: '#7A7666',
                lineHeight: 1.7,
                marginBottom: '18px',
              }}>
                Stay updated with our latest offers and special events.
              </p>

              <form onSubmit={handleSubscribe}>
                <div style={{
                  display: 'flex',
                  border: '1px solid #E2DDD4',
                  borderRadius: '50px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(26,26,20,0.06)',
                }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      padding: '11px 16px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      color: '#1A1A14',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: '#1E4D33',
                      border: 'none',
                      padding: '10px 18px',
                      color: '#FFFFFF',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      cursor: 'pointer',
                      transition: 'background 0.25s ease',
                      borderRadius: '50px',
                      whiteSpace: 'nowrap',
                      margin: '3px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#2A6645'}
                    onMouseLeave={e => e.currentTarget.style.background = '#1E4D33'}
                  >
                    {subscribed ? '✓ Done!' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom divider */}
          <div style={{ height: '1px', background: '#E2DDD4', marginBottom: '22px' }} />

          {/* Bottom bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: '#A8A498',
            }}>
              © 2026 AROMA. All Rights Reserved.
            </span>
            <div style={{ display: 'flex', gap: '24px' }}>
              {['Privacy Policy', 'Terms of Services'].map((text) => (
                <a
                  key={text}
                  href="#"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    color: '#A8A498',
                    textDecoration: 'none',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = '#1E4D33'}
                  onMouseLeave={e => e.target.style.color = '#A8A498'}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-columns { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .footer-columns { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
