// Hormozi-style hook templates.
// Slots: {topic} required. {audience} {result} {timeframe} {amount} {pain} optional.
// Slot fallbacks fire when the user leaves a field blank.

export const CATEGORIES = [
  { id: 'curiosity',   label: 'Curiosity' },
  { id: 'contrarian',  label: 'Contrarian' },
  { id: 'callout',     label: 'Callout' },
  { id: 'big-promise', label: 'Big Promise' },
  { id: 'fear',        label: 'Fear of Loss' },
  { id: 'number',      label: 'Specificity' },
  { id: 'authority',   label: 'Authority' },
  { id: 'story',       label: 'Story Open' },
]

export const HOOKS = [
  // CURIOSITY — open the loop, don't close it
  { c: 'curiosity',   t: "The {topic} secret nobody talks about." },
  { c: 'curiosity',   t: "I cracked {topic} and it was nothing like I expected." },
  { c: 'curiosity',   t: "Most people get {topic} backwards. Here's what actually works." },
  { c: 'curiosity',   t: "If you only learn one thing about {topic}, learn this." },
  { c: 'curiosity',   t: "{topic} only works if you do this one thing first." },
  { c: 'curiosity',   t: "Watch this before you spend another dollar on {topic}." },
  { c: 'curiosity',   t: "Three things about {topic} that took me a decade to figure out." },
  { c: 'curiosity',   t: "I wish someone told me this about {topic} ten years ago." },

  // CONTRARIAN — pick a fight with conventional wisdom
  { c: 'contrarian',  t: "Everything you've been told about {topic} is wrong." },
  { c: 'contrarian',  t: "Stop trying to fix {topic}. Do this instead." },
  { c: 'contrarian',  t: "{topic} isn't your problem. Here's what is." },
  { c: 'contrarian',  t: "The advice you keep getting on {topic} is the reason you're stuck." },
  { c: 'contrarian',  t: "Most experts are wrong about {topic} and I'll prove it." },
  { c: 'contrarian',  t: "If {topic} feels hard, you're doing the wrong version of it." },
  { c: 'contrarian',  t: "Hot take: {topic} is overrated. Do this instead." },
  { c: 'contrarian',  t: "The people winning at {topic} aren't the ones you think." },

  // CALLOUT — tag the exact reader
  { c: 'callout',     t: "If you're {audience}, you need to hear this about {topic}." },
  { c: 'callout',     t: "{audience}: stop doing {topic} the hard way." },
  { c: 'callout',     t: "This is for the {audience} who keeps failing at {topic}." },
  { c: 'callout',     t: "Read this if {topic} is keeping you up at night." },
  { c: 'callout',     t: "Anyone serious about {topic} needs to see this." },
  { c: 'callout',     t: "If you've tried {topic} more than twice and it didn't work, this is for you." },
  { c: 'callout',     t: "Calling out every {audience} who thinks {topic} is the problem." },

  // BIG PROMISE — the before-after
  { c: 'big-promise', t: "How to go from zero to {result} with {topic} in {timeframe}." },
  { c: 'big-promise', t: "I'll teach you {topic} so well you'll get {result} or your time back." },
  { c: 'big-promise', t: "The exact playbook I used to {result} using {topic}." },
  { c: 'big-promise', t: "Master {topic} in {timeframe} or shorter. I did it. You can too." },
  { c: 'big-promise', t: "If you want {result}, here's the only thing about {topic} that matters." },
  { c: 'big-promise', t: "{topic} is how I went from broke to {result}. Steal it." },
  { c: 'big-promise', t: "Do this with {topic} and you'll never look back." },

  // FEAR OF LOSS — what happens if you don't act
  { c: 'fear',        t: "If you don't fix your {topic} now, you'll regret it in {timeframe}." },
  { c: 'fear',        t: "Every day you ignore {topic}, you lose {amount}." },
  { c: 'fear',        t: "The biggest mistake people make with {topic} costs them {amount}." },
  { c: 'fear',        t: "You're not bad at {topic}. You've been lied to. And it's costing you {amount}." },
  { c: 'fear',        t: "Skip this video and you'll keep struggling with {topic}. Don't say I didn't warn you." },
  { c: 'fear',        t: "{pain} is what happens when you keep ignoring {topic}." },
  { c: 'fear',        t: "Three signs your {topic} is about to fall apart." },

  // NUMBERS / SPECIFICITY — earn trust with details
  { c: 'number',      t: "I tried {topic} 100 times. Here are the 3 things that actually moved the needle." },
  { c: 'number',      t: "The 5 rules of {topic} I'd tattoo on my arm if I could." },
  { c: 'number',      t: "After {amount} spent on {topic}, this is what I'd do differently." },
  { c: 'number',      t: "Seven words about {topic} that changed everything for me." },
  { c: 'number',      t: "I read 50 books on {topic}. Here's the only chapter that mattered." },
  { c: 'number',      t: "The 1% rule for {topic} that 99% of people skip." },
  { c: 'number',      t: "Two minutes on {topic} that will save you {timeframe} of pain." },

  // AUTHORITY — show receipts
  { c: 'authority',   t: "I built a {amount} business on {topic}. Here's the framework." },
  { c: 'authority',   t: "I've helped {audience} with {topic} for years. Most of you are missing this." },
  { c: 'authority',   t: "I get paid to fix {topic}. Here's what I'd tell my own kid." },
  { c: 'authority',   t: "After running {topic} at scale, this is the only thing that consistently works." },
  { c: 'authority',   t: "The {topic} playbook from someone who actually did it." },

  // STORY — drop them into a scene
  { c: 'story',       t: "When I first tried {topic}, I lost {amount}. Here's what I learned." },
  { c: 'story',       t: "A {audience} once told me something about {topic} that changed everything." },
  { c: 'story',       t: "True story: {topic} almost broke me. Then I figured out this." },
  { c: 'story',       t: "The day I quit {topic} was the day I finally got {result}." },
  { c: 'story',       t: "I had {amount} on the line. {topic} was the only thing standing in the way." },
  { c: 'story',       t: "Six months ago I didn't know the first thing about {topic}. Now I {result}." },
  { c: 'story',       t: "There's a moment in every {audience}'s life where {topic} either makes them or breaks them." },

  // ── PHOTOGRAPHY-SPECIFIC ──────────────────────
  { c: 'curiosity',   t: "The lighting trick that made my photos look 10x more expensive: {topic}." },
  { c: 'curiosity',   t: "I shot the same scene two ways. {topic} won every time." },
  { c: 'contrarian',  t: "Buying more gear won't fix {topic}. Here's what will." },
  { c: 'contrarian',  t: "Natural light isn't always king. {topic} proves it." },
  { c: 'contrarian',  t: "Stop chasing the golden hour. {topic} works at any hour." },
  { c: 'callout',     t: "Photographers: if your photos look flat, it's not your camera. It's {topic}." },
  { c: 'callout',     t: "If you charge less than $1k per shoot, this {topic} hook is for you." },
  { c: 'big-promise', t: "How {topic} turned my Instagram into a booking funnel in {timeframe}." },
  { c: 'big-promise', t: "Master {topic} and your clients stop asking about price." },
  { c: 'fear',        t: "Your competitors are already using {topic}. Every shoot you don't, you fall further behind." },
  { c: 'fear',        t: "If your portfolio still looks like everyone else's, {topic} is the reason." },
  { c: 'number',      t: "Three lighting setups using {topic} that beat every preset I've ever bought." },
  { c: 'number',      t: "I shot {amount} weddings before {topic} finally clicked. Don't make my mistake." },
  { c: 'authority',   t: "I've shot over 200 weddings. {topic} is the one thing I'd never skip." },
  { c: 'authority',   t: "Pro photographers don't talk about {topic}, but every single one uses it." },
  { c: 'story',       t: "I shot a wedding without {topic} once. Never again. Here's why." },
  { c: 'story',       t: "A bride once told me my photos looked different. The reason? {topic}." },
]

const FALLBACKS = {
  audience:  'photographers',
  result:    'images that book clients',
  timeframe: '30 days',
  amount:    'thousands',
  pain:      'flat, lifeless light',
}

export function fillHook(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_match, key, offset, str) => {
    const raw = vars[key]
    let v = (raw && raw.trim()) ? raw.trim() : (FALLBACKS[key] ?? `{${key}}`)
    if (!v) return v

    // Mid-sentence? Lowercase the leading letter unless it's an acronym
    // (all caps like "SEO") or the value already starts lowercase.
    const before = str.slice(0, offset)
    const atStart = offset === 0 || /[.!?]\s*$/.test(before)
    if (atStart) {
      // Capitalize first letter so it reads as a proper sentence opener
      if (v[0] && v[0] !== v[0].toUpperCase()) {
        v = v[0].toUpperCase() + v.slice(1)
      }
    } else {
      // Lowercase each word's leading letter unless the word is an acronym
      // (2+ consecutive uppercase letters like "SEO", "B2B", "LED").
      v = v.replace(/(^|[\s\-/])([A-Za-z])(\w*)/g, (_, sep, first, rest) => {
        const isAcronym = rest.length >= 1 && rest[0] === rest[0].toUpperCase() && /[A-Z]/.test(rest[0])
        return sep + (isAcronym ? first : first.toLowerCase()) + rest
      })
    }
    return v
  })
}
