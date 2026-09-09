import React, { useState, useEffect } from 'react'
import OggyGhibli from './OggyGhibli'
import CockroachesGhibli from './CockroachesGhibli'

/**
 * OggySceneAnimation - Studio Ghibli animated sky & hills overlay featuring Oggy and the Cockroaches
 */
export default function OggySceneAnimation() {
  const [chaseActive, setChaseActive] = useState(false)
  const [sparkles, setSparkles] = useState([])
  const [activeSpeech, setActiveSpeech] = useState(null)

  // Trigger magic sparkles on click anywhere on Oggy or Cockroaches
  const handleCharacterClick = (e, charName, quote) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    const newSparkle = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }
    setSparkles((prev) => [...prev.slice(-15), newSparkle])
    setActiveSpeech({ name: charName, text: quote })

    setTimeout(() => {
      setActiveSpeech((current) => (current?.name === charName ? null : current))
    }, 4000)
  }

  // Remove sparkles after animation finishes
  useEffect(() => {
    if (sparkles.length === 0) return undefined
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1))
    }, 1200)
    return () => clearTimeout(timer)
  }, [sparkles])

  return (
    <div className="oggy-scene-layer" aria-hidden="false">
      {/* ── 1. Oggy Flying in Sky on Dandelion Parachute ── */}
      <div className={`oggy-sky-flyer ${chaseActive ? 'is-chasing' : ''}`}>
        <OggyGhibli
          variant="flying"
          size={130}
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Oggy',
              'Meow~ Welcome to my Studio Ghibli world! 🍃✨'
            )
          }
        />
        {activeSpeech?.name === 'Oggy' && (
          <div className="ghibli-speech-bubble oggy-speech">
            {activeSpeech.text}
          </div>
        )}
      </div>

      {/* ── 2. Oggy Floating in a Soap Bubble (Mid Sky) ── */}
      <div className="oggy-bubble-floater">
        <OggyGhibli
          variant="bubble"
          size={95}
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Oggy Bubble',
              'Floating peacefully through watercolor sky! 🫧'
            )
          }
        />
      </div>

      {/* ── 3. Cockroaches (Joey, Dee Dee, Marky) Sky Drifters ── */}
      <div className="roach-sky-group">
        {/* Joey on Bubble */}
        <div
          className="roach-floater roach-floater--joey"
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Joey',
              'Hehehe! Joey the leader commands this Ghibli breeze! 😈'
            )
          }
        >
          <CockroachesGhibli character="joey" size={65} />
          {activeSpeech?.name === 'Joey' && (
            <div className="ghibli-speech-bubble roach-speech">{activeSpeech.text}</div>
          )}
        </div>

        {/* Dee Dee with Riceball */}
        <div
          className="roach-floater roach-floater--deedee"
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Dee Dee',
              'Nom nom! Ghibli riceballs are scrumptious! 🍙'
            )
          }
        >
          <CockroachesGhibli character="deedee" size={70} />
          {activeSpeech?.name === 'Dee Dee' && (
            <div className="ghibli-speech-bubble roach-speech">{activeSpeech.text}</div>
          )}
        </div>

        {/* Marky with Flower */}
        <div
          className="roach-floater roach-floater--marky"
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Marky',
              'La la la~ Loving these watercolor meadows! 🌸'
            )
          }
        >
          <CockroachesGhibli character="marky" size={68} />
          {activeSpeech?.name === 'Marky' && (
            <div className="ghibli-speech-bubble roach-speech">{activeSpeech.text}</div>
          )}
        </div>
      </div>

      {/* ── 4. Interactive Chase Parade (Bottom Meadow Hill) ── */}
      <div className={`ghibli-chase-parade ${chaseActive ? 'is-active' : ''}`}>
        <div className="chase-runner roach-runner-marky">
          <CockroachesGhibli character="marky" size={55} />
        </div>
        <div className="chase-runner roach-runner-deedee">
          <CockroachesGhibli character="deedee" size={55} />
        </div>
        <div className="chase-runner roach-runner-joey">
          <CockroachesGhibli character="joey" size={55} />
        </div>
        <div className="chase-runner oggy-runner">
          <OggyGhibli variant="flying" size={90} />
        </div>
      </div>

      {/* ── 5. Floating Ghibli Dandelion Fluff & Leaves ── */}
      <div className="ghibli-dandelions">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="dandelion-fluff"
            style={{
              left: `${(i * 11 + 6) % 100}%`,
              animationDelay: `${i * 2.3}s`,
              animationDuration: `${14 + (i % 4) * 5}s`,
              transform: `scale(${0.6 + (i % 3) * 0.3})`,
            }}
          />
        ))}
      </div>

      {/* ── 6. Sparkle Burst Effects on Click ── */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="ghibli-sparkle-burst"
          style={{ left: `${sp.x}px`, top: `${sp.y}px` }}
        >
          <span>✨</span>
          <span>🌸</span>
          <span>🍃</span>
          <span>⭐</span>
          <span>🫧</span>
        </div>
      ))}

      {/* ── 7. Interactive Ghibli Toggle Button in Corner ── */}
      <div className="ghibli-control-badge">
        <button
          type="button"
          className="ghibli-chase-btn"
          onClick={() => setChaseActive(!chaseActive)}
          title="Toggle Oggy & Cockroaches Studio Ghibli Chase Mode!"
        >
          <span className="btn-icon">{chaseActive ? '🐾' : '🌿'}</span>
          <span>{chaseActive ? 'Pause Ghibli Chase' : 'Oggy & Cockroaches Chase!'}</span>
        </button>
      </div>
    </div>
  )
}
