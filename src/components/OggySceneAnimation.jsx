import React, { useState, useEffect } from 'react'
import OggyGhibli from './OggyGhibli'
import CockroachesGhibli from './CockroachesGhibli'
import TomGhibli from './TomGhibli'
import JerryGhibli from './JerryGhibli'

/**
 * OggySceneAnimation - Studio Ghibli Full Cartoon Overlay
 * Features Tom, Jerry, Oggy, Joey, Dee Dee & Marky in an animated Ghibli world
 */
export default function OggySceneAnimation() {
  const [chaseActive, setChaseActive] = useState(false)
  const [sparkles, setSparkles] = useState([])
  const [activeSpeech, setActiveSpeech] = useState(null)

  // Trigger magic sparkles & speech bubbles on character click
  const handleCharacterClick = (e, charName, quote) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    const newSparkle = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }
    setSparkles((prev) => [...prev.slice(-20), newSparkle])
    setActiveSpeech({ name: charName, text: quote })

    setTimeout(() => {
      setActiveSpeech((current) => (current?.name === charName ? null : current))
    }, 4500)
  }

  // Auto-clean sparkles
  useEffect(() => {
    if (sparkles.length === 0) return undefined
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1))
    }, 1200)
    return () => clearTimeout(timer)
  }, [sparkles])

  return (
    <div className="oggy-scene-layer" aria-hidden="false">
      {/* ── 1. Tom Flying in Hot Air Striped Balloon (High Sky) ── */}
      <div className={`tom-sky-flyer ${chaseActive ? 'is-chasing' : ''}`}>
        <TomGhibli
          variant="flying"
          size={125}
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Tom Balloon',
              'Meow! Jerry’s golden cheese smells divine in this Ghibli breeze! 🧀🎈'
            )
          }
        />
        {activeSpeech?.name === 'Tom Balloon' && (
          <div className="ghibli-speech-bubble tom-speech">
            {activeSpeech.text}
          </div>
        )}
      </div>

      {/* ── 2. Jerry Riding Leaf Glider (Mid Sky) ── */}
      <div className={`jerry-sky-glider ${chaseActive ? 'is-chasing' : ''}`}>
        <JerryGhibli
          variant="flying"
          size={95}
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Jerry Glider',
              'Squeak squeak! You can’t catch me, Tom! 🍃🧀'
            )
          }
        />
        {activeSpeech?.name === 'Jerry Glider' && (
          <div className="ghibli-speech-bubble jerry-speech">
            {activeSpeech.text}
          </div>
        )}
      </div>

      {/* ── 3. Oggy Flying on Dandelion Parachute ── */}
      <div className={`oggy-sky-flyer ${chaseActive ? 'is-chasing' : ''}`}>
        <OggyGhibli
          variant="flying"
          size={130}
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Oggy',
              'Meow~ Welcome to our Studio Ghibli animated world! 🍃✨'
            )
          }
        />
        {activeSpeech?.name === 'Oggy' && (
          <div className="ghibli-speech-bubble oggy-speech">
            {activeSpeech.text}
          </div>
        )}
      </div>

      {/* ── 4. Oggy & Tom Floating in Soap Bubbles ── */}
      <div className="oggy-bubble-floater">
        <OggyGhibli
          variant="bubble"
          size={90}
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Oggy Bubble',
              'Floating peacefully through watercolor sky! 🫧'
            )
          }
        />
      </div>

      <div className="tom-bubble-floater">
        <TomGhibli
          variant="bubble"
          size={85}
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Tom Bubble',
              'Snoozing in a Ghibli bubble... Zzz! 🫧😴'
            )
          }
        />
      </div>

      <div className="jerry-bubble-floater">
        <JerryGhibli
          variant="bubble"
          size={75}
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Jerry Bubble',
              'Floating with my golden cheese! 🧀🫧'
            )
          }
        />
      </div>

      {/* ── 5. Cockroaches (Joey, Dee Dee, Marky) Sky Drifters ── */}
      <div className="roach-sky-group">
        {/* Joey */}
        <div
          className="roach-floater roach-floater--joey"
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Joey',
              'Hehehe! Joey commands the sky! Tom & Oggy won’t stop us! 😈'
            )
          }
        >
          <CockroachesGhibli character="joey" size={65} />
          {activeSpeech?.name === 'Joey' && (
            <div className="ghibli-speech-bubble roach-speech">{activeSpeech.text}</div>
          )}
        </div>

        {/* Dee Dee */}
        <div
          className="roach-floater roach-floater--deedee"
          onClick={(e) =>
            handleCharacterClick(
              e,
              'Dee Dee',
              'Nom nom! Ghibli riceballs and Jerry’s cheese are delicious! 🍙🧀'
            )
          }
        >
          <CockroachesGhibli character="deedee" size={70} />
          {activeSpeech?.name === 'Dee Dee' && (
            <div className="ghibli-speech-bubble roach-speech">{activeSpeech.text}</div>
          )}
        </div>

        {/* Marky */}
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

      {/* ── 6. Full Interactive Ghibli Cartoon Chase Parade (Meadow Bottom) ── */}
      <div className={`ghibli-chase-parade ${chaseActive ? 'is-active' : ''}`}>
        {/* Jerry leads the escape with Cheese */}
        <div className="chase-runner jerry-runner">
          <JerryGhibli variant="running" size={65} />
        </div>
        {/* Tom chases Jerry with Broom */}
        <div className="chase-runner tom-runner">
          <TomGhibli variant="running" size={85} />
        </div>
        {/* Cockroaches join the mayhem */}
        <div className="chase-runner roach-runner-marky">
          <CockroachesGhibli character="marky" size={55} />
        </div>
        <div className="chase-runner roach-runner-deedee">
          <CockroachesGhibli character="deedee" size={55} />
        </div>
        <div className="chase-runner roach-runner-joey">
          <CockroachesGhibli character="joey" size={55} />
        </div>
        {/* Oggy brings up the rear */}
        <div className="chase-runner oggy-runner">
          <OggyGhibli variant="flying" size={90} />
        </div>
      </div>

      {/* ── 7. Floating Ghibli Dandelion Fluff & Leaves ── */}
      <div className="ghibli-dandelions">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="dandelion-fluff"
            style={{
              left: `${(i * 9.5 + 4) % 100}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${12 + (i % 4) * 4}s`,
              transform: `scale(${0.6 + (i % 3) * 0.3})`,
            }}
          />
        ))}
      </div>

      {/* ── 8. Sparkle Burst Effects on Click ── */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="ghibli-sparkle-burst"
          style={{ left: `${sp.x}px`, top: `${sp.y}px` }}
        >
          <span>✨</span>
          <span>🧀</span>
          <span>🍃</span>
          <span>⭐</span>
          <span>🫧</span>
          <span>🌸</span>
        </div>
      ))}

      {/* ── 9. Interactive Ghibli Control Badge ── */}
      <div className="ghibli-control-badge">
        <button
          type="button"
          className="ghibli-chase-btn"
          onClick={() => setChaseActive(!chaseActive)}
          title="Toggle Full Studio Ghibli Cartoon Chase Mode (Tom, Jerry, Oggy & Cockroaches)!"
        >
          <span className="btn-icon">{chaseActive ? '🐾' : '🐱🐭'}</span>
          <span>{chaseActive ? 'Pause Cartoon Chase' : 'Tom, Jerry & Oggy Chase!'}</span>
        </button>
      </div>
    </div>
  )
}
