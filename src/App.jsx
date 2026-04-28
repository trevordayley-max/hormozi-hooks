import { useMemo, useState } from 'react'
import { CATEGORIES, HOOKS, fillHook } from './hooks.js'

function shuffle(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function App() {
  const [topic, setTopic] = useState('')
  const [audience, setAudience] = useState('')
  const [result, setResult] = useState('')
  const [timeframe, setTimeframe] = useState('')
  const [amount, setAmount] = useState('')

  const allCatIds = CATEGORIES.map(c => c.id)
  const [activeCats, setActiveCats] = useState(allCatIds)
  const [seed, setSeed] = useState(0)
  const [count, setCount] = useState(12)
  const [submitted, setSubmitted] = useState(false)
  const [copiedIdx, setCopiedIdx] = useState(null)

  const toggleCat = (id) => {
    setActiveCats(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  const generated = useMemo(() => {
    if (!submitted) return []
    const vars = { topic, audience, result, timeframe, amount }
    const pool = HOOKS.filter(h => activeCats.includes(h.c))
    const shuffled = shuffle(pool)
    return shuffled.slice(0, count).map((h, i) => ({
      idx: i,
      cat: h.c,
      catLabel: CATEGORIES.find(c => c.id === h.c)?.label ?? h.c,
      text: fillHook(h.t, vars),
    }))
    // seed dependency forces re-shuffle on regenerate
    // eslint-disable-next-line
  }, [submitted, seed, activeCats, count, topic, audience, result, timeframe, amount])

  const handleGenerate = (e) => {
    e?.preventDefault()
    if (!topic.trim()) return
    setSubmitted(true)
    setSeed(s => s + 1)
    setCopiedIdx(null)
  }

  const copy = async (idx, text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 1400)
    } catch {
      // noop
    }
  }

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-brand">
          <img src="/assets/logos/magmod-primary.svg" alt="MagMod" />
          <span className="divider" />
          <span className="product-name">Hook Forge</span>
        </div>
        <span className="nav-tag">Fast. Easy. Awesome.</span>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow on-dark">Hooks for Photographers</span>
          <h1>Stop the scroll. <em>Book the shoot.</em></h1>
          <p className="lede">
            Drop in what you shoot, who you shoot it for, and the result they want.
            Walk out with a stack of hooks built on Hormozi's frameworks, written
            for photographers who want to fill their calendar.
          </p>
        </div>
      </header>

      <main className="workbench">
        <div className="workbench-inner">
          <form className="panel" onSubmit={handleGenerate}>
            <h2 className="section-title">Inputs</h2>

            <div className="field">
              <label htmlFor="topic">Topic <span style={{color:'var(--mm-error)'}}>*</span></label>
              <p className="desc">The thing you teach, shoot, or sell. The only required field. Drop in a skill, a niche, or a service.</p>
              <input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., off-camera flash, wedding marketing, posing couples"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="audience">Audience</label>
              <p className="desc">Who you're talking to. Naming the exact reader makes hooks hit harder.</p>
              <input
                id="audience"
                type="text"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="e.g., wedding photographers, portrait shooters, creators"
              />
            </div>

            <div className="field">
              <label htmlFor="result">Result</label>
              <p className="desc">The outcome they actually want. The dream after they apply your advice.</p>
              <input
                id="result"
                type="text"
                value={result}
                onChange={(e) => setResult(e.target.value)}
                placeholder="e.g., a fully booked season, $5k weddings, sold-out workshop"
              />
            </div>

            <div className="field">
              <label htmlFor="timeframe">Timeframe</label>
              <p className="desc">How fast they can get there. Specificity creates urgency.</p>
              <input
                id="timeframe"
                type="text"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                placeholder="e.g., one wedding season, 30 days, your next shoot"
              />
            </div>

            <div className="field">
              <label htmlFor="amount">Amount / Stake</label>
              <p className="desc">A dollar figure or thing at risk. The number that makes the reader flinch.</p>
              <input
                id="amount"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g., $5k clients, your first $10k month, gear you'll regret"
              />
            </div>

            <div className="field">
              <label>Categories</label>
              <div className="chips" role="group" aria-label="Hook categories">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    className="chip"
                    data-active={activeCats.includes(cat.id)}
                    onClick={() => toggleCat(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="hint">Click to toggle. At least one must be on.</div>
            </div>

            <div className="field">
              <label htmlFor="count">How many hooks?</label>
              <select
                id="count"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={20}>20</option>
                <option value={40}>40</option>
              </select>
            </div>

            <div className="btn-row">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={!topic.trim() || activeCats.length === 0}
              >
                {submitted ? 'Regenerate' : 'Forge Hooks'}
              </button>
            </div>
          </form>

          <section>
            <div className="results-header">
              <div>
                <span className="eyebrow">Output</span>
                <h2 className="section-title" style={{marginTop: 'var(--sp-3)'}}>
                  {submitted ? 'Your Hooks' : 'Awaiting input'}
                </h2>
              </div>
              <span className="results-meta">
                {submitted ? `${generated.length} of ${HOOKS.length}` : `${HOOKS.length} templates loaded`}
              </span>
            </div>

            {!submitted && (
              <div className="empty">
                <p style={{margin: 0, fontSize: 'var(--fs-3)'}}>
                  Enter a topic on the left and hit <strong>Forge Hooks</strong>.
                </p>
              </div>
            )}

            {submitted && (
              <div className="hook-list">
                {generated.map((h) => (
                  <article key={`${seed}-${h.idx}`} className="hook">
                    <div>
                      <div className="hook-text">{h.text}</div>
                      <div className="hook-meta">
                        <span className="hook-cat">{h.catLabel}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="copy-btn"
                      data-copied={copiedIdx === h.idx}
                      onClick={() => copy(h.idx, h.text)}
                    >
                      {copiedIdx === h.idx ? 'Copied' : 'Copy'}
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="footer">
        <strong>Hook Forge</strong> &middot; Built for photographers &middot; Skinned with the MagMod Design System
      </footer>
    </div>
  )
}
