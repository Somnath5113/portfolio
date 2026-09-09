import { useState, useEffect, useRef, useCallback } from 'react'
import { skillsData, skillConnections } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/* ── SVG domain icons ── */
const DomainIcon = ({ type, size = 32 }) => {
  const icons = {
    code: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" opacity="0.5" />
      </svg>
    ),
    brain: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.5 2.5-1.5 3.5L12 14l-3.5-3.5C7.5 9.5 7 8.5 7 7a5 5 0 0 1 5-5z" />
        <path d="M12 14v8" />
        <path d="M8 18h8" />
        <circle cx="9" cy="7" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="15" cy="7" r="1" fill="currentColor" opacity="0.5" />
        <path d="M5 10c-2 1-3 3-3 5s2 4 4 4" opacity="0.5" />
        <path d="M19 10c2 1 3 3 3 5s-2 4-4 4" opacity="0.5" />
      </svg>
    ),
    eye: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    robot: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <circle cx="9" cy="14" r="2" />
        <circle cx="15" cy="14" r="2" />
        <path d="M12 2v4" />
        <circle cx="12" cy="2" r="1" fill="currentColor" />
        <path d="M9 18v2" opacity="0.5" />
        <path d="M15 18v2" opacity="0.5" />
      </svg>
    ),
    database: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    cloud: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        <path d="M13 14l-2 2 2 2" opacity="0.5" />
        <path d="M15 14l2 2-2 2" opacity="0.5" />
      </svg>
    ),
  }
  return icons[type] || icons.code
}

/* ── Animated circular progress ring ── */
function SkillRing({ name, level, context, delay = 0 }) {
  const ringRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const strokeOffset = circumference - (animatedLevel / 100) * circumference

  useEffect(() => {
    const el = ringRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
            // Animate the number counting up
            const start = performance.now()
            const duration = 1500
            const tick = (now) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setAnimatedLevel(Math.round(eased * level))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div className={`skill-ring-card ${isVisible ? 'is-visible' : ''}`} ref={ringRef}>
      <div className="skill-ring-visual">
        <svg className="skill-ring-svg" viewBox="0 0 80 80">
          {/* Background track */}
          <circle
            cx="40" cy="40" r={radius}
            fill="none"
            stroke="var(--surface-border)"
            strokeWidth="4"
            opacity="0.4"
          />
          {/* Animated fill */}
          <circle
            cx="40" cy="40" r={radius}
            fill="none"
            className="skill-ring-progress"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? strokeOffset : circumference}
            transform="rotate(-90 40 40)"
          />
          {/* Glow circle at the end */}
          {isVisible && animatedLevel > 10 && (
            <circle
              cx="40"
              cy="4"
              r="3"
              className="skill-ring-dot"
              transform={`rotate(${(animatedLevel / 100) * 360 - 90} 40 40)`}
            />
          )}
        </svg>
        <span className="skill-ring-percent">{animatedLevel}%</span>
      </div>
      <div className="skill-ring-info">
        <span className="skill-ring-name">{name}</span>
        <span className="skill-ring-context">{context}</span>
      </div>
    </div>
  )
}

/* ── Floating particle constellation background ── */
function ParticleField() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: -1000, y: -1000 })

  const initParticles = useCallback((width, height) => {
    const count = Math.min(Math.floor((width * height) / 8000), 80)
    return Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? 264 : 199, // purple or blue
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width, height

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      particlesRef.current = initParticles(width, height)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.addEventListener('mousemove', handleMouse)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // Boundary bounce
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          const force = (120 - dist) / 120
          p.x += (dx / dist) * force * 2
          p.y += (dy / dist) * force * 2
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const d = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (d < 140) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `hsla(${(p.hue + p2.hue) / 2}, 70%, 60%, ${0.12 * (1 - d / 140)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouse)
    }
  }, [initParticles])

  return <canvas ref={canvasRef} className="skill-particle-canvas" aria-hidden="true" />
}

/* ── Domain card (expandable) ── */
function DomainCard({ domain, index, isActive, onToggle }) {
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [isActive])

  return (
    <Reveal
      as="div"
      className={`domain-card ${isActive ? 'is-active' : ''}`}
      variant="fade-up"
      delay={index * 100}
    >
      <button className="domain-card-header" onClick={onToggle} aria-expanded={isActive}>
        <div className="domain-icon-wrap">
          <DomainIcon type={domain.icon} size={28} />
          <div className="domain-icon-glow" aria-hidden="true" />
        </div>
        <div className="domain-card-text">
          <h3 className="domain-title">{domain.title}</h3>
          <p className="domain-tagline">{domain.tagline}</p>
        </div>
        <div className="domain-skill-count">
          <span>{domain.skills.length}</span>
          <small>skills</small>
        </div>
        <svg className="domain-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 8l4 4 4-4" />
        </svg>
      </button>

      <div
        className="domain-card-body"
        style={{ maxHeight: isActive ? contentHeight + 24 : 0 }}
      >
        <div ref={contentRef} className="domain-skills-inner">
          {domain.skills.map((skill, i) => (
            <SkillRing
              key={skill.name}
              name={skill.name}
              level={skill.level}
              context={skill.context}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </Reveal>
  )
}

/* ── Skill pipeline flow (connection map) ── */
function PipelineFlow() {
  const [activeIdx, setActiveIdx] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % skillConnections.length)
    }, 4000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <Reveal as="div" className="pipeline-section" variant="fade-up" delay={200}>
      <h3 className="pipeline-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
        How These Skills Chain Together
      </h3>
      <p className="pipeline-subtitle">Real production pipelines I built — each node is a skill I own end-to-end</p>

      <div className="pipeline-tabs">
        {skillConnections.map((conn, i) => (
          <button
            key={conn.label}
            className={`pipeline-tab ${i === activeIdx ? 'is-active' : ''}`}
            onClick={() => {
              setActiveIdx(i)
              clearInterval(intervalRef.current)
            }}
            style={{ '--tab-color': conn.color }}
          >
            {conn.label}
          </button>
        ))}
      </div>

      <div className="pipeline-flow">
        {skillConnections[activeIdx].path.map((skill, i, arr) => (
          <div key={`${skillConnections[activeIdx].label}-${skill}`} className="pipeline-node-group">
            <div
              className="pipeline-node"
              style={{
                '--node-color': skillConnections[activeIdx].color,
                animationDelay: `${i * 200}ms`,
              }}
            >
              <span className="pipeline-node-label">{skill}</span>
              <span className="pipeline-node-pulse" />
            </div>
            {i < arr.length - 1 && (
              <div
                className="pipeline-connector"
                style={{
                  '--conn-color': skillConnections[activeIdx].color,
                  animationDelay: `${i * 200 + 100}ms`,
                }}
              >
                <svg width="40" height="16" viewBox="0 0 40 16">
                  <path
                    d="M0 8h32m-6-4l6 4-6 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pipeline-arrow-path"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Reveal>
  )
}

/* ── Aggregate stats bar ── */
function SkillStats() {
  const allSkills = skillsData.flatMap((d) => d.skills)
  const avgLevel = Math.round(allSkills.reduce((s, sk) => s + sk.level, 0) / allSkills.length)
  const topSkills = allSkills.filter((s) => s.level >= 85).length

  const stats = [
    { value: skillsData.length, label: 'Domains', icon: '◈' },
    { value: allSkills.length, label: 'Technologies', icon: '⬡' },
    { value: topSkills, label: 'Expert-level (85%+)', icon: '◆' },
    { value: `${avgLevel}%`, label: 'Avg. Proficiency', icon: '◉' },
  ]

  return (
    <Reveal as="div" className="skill-stats-bar" variant="fade-up" delay={100}>
      {stats.map((s) => (
        <div className="skill-stat-item" key={s.label}>
          <span className="skill-stat-icon">{s.icon}</span>
          <span className="skill-stat-value">{s.value}</span>
          <span className="skill-stat-label">{s.label}</span>
        </div>
      ))}
    </Reveal>
  )
}

/* ── Main showcase export ── */
export default function SkillsShowcase() {
  const [activeDomain, setActiveDomain] = useState(null)

  const handleToggle = (id) => {
    setActiveDomain((prev) => (prev === id ? null : id))
  }

  return (
    <section id="skills" className="section skills-showcase">
      <ParticleField />

      <div className="container skills-container">
        <SectionHeading
          eyebrow="Engineering Depth"
          title="What I bring to the table"
          lede="Not just tools I've touched — every skill here links back to something I shipped in production. Click any domain to see how deep it goes."
        />

        <SkillStats />

        <div className="domain-grid">
          {skillsData.map((domain, i) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              index={i}
              isActive={activeDomain === domain.id}
              onToggle={() => handleToggle(domain.id)}
            />
          ))}
        </div>

        <PipelineFlow />
      </div>
    </section>
  )
}
