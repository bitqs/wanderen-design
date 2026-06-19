/* Wanderen — Reader / content platform UI kit.
   Interactive: browse the index, filter by tab, open an article, save it, go back.
   Loaded via <script type="text/babel" src="app.jsx"> in index.html. */
(function () {
  const NS = window.WanderenDesignSystem_eab830 || {};
  const { Button, IconButton, Badge, Tag, Card, Avatar, Input, Tabs } = NS;
  const Icon = ({ name, size = 24, color }) =>
    React.createElement("iconify-icon", { icon: "pixelarticons:" + name, width: size, height: size, style: color ? { color } : undefined });

  const HUE = { games: "magenta", ai: "cyan", philosophy: "violet", play: "amber" };
  const hueVar = (h) => ({ magenta: "--accent", cyan: "--primary", violet: "--tertiary", amber: "--warning" }[h] || "--primary");

  const POSTS = [
    {
      id: "roguelike", cat: "Field note", catHue: "magenta", icon: "gamepad",
      title: "What roguelikes know about being alive", read: "7 min", date: "2026.06.14",
      author: "Mira Okafor", tags: ["games", "philosophy"],
      excerpt: "Permadeath isn't punishment. It's the only honest way a game can talk about time.",
      body: [
        "Every roguelike begins with the same quiet promise: you will lose this run, and that loss will be permanent. No reloading, no take-backs. The dungeon resets, the map redraws itself, and whatever you learned is the only thing you keep.",
        "It sounds cruel. In practice it's the closest most games get to honesty about being alive — you get one timeline, it doesn't rewind, and the only thing that carries forward is what you understood.",
        { quote: "A roguelike doesn't ask you to be perfect. It asks you to pay attention.", who: "— a thought from run #214" },
        "What you carry between runs isn't gear. It's a model of the world: which rooms are traps, which trades are worth it, when to run. The game becomes a way of thinking, not a thing to beat.",
        "Maybe that's the trick worth stealing. Treat the next hard thing like a run. Lose it well. Keep the model.",
      ],
    },
    {
      id: "ai-level", cat: "Experiment", catHue: "cyan", icon: "zap",
      title: "I let an AI design a level and then played it", read: "5 min", date: "2026.06.09",
      author: "Kai Lin", tags: ["ai", "games", "play"],
      excerpt: "It built something I'd never design — and it was almost good. Almost is the interesting part.",
      body: [
        "I gave a model a tile-set, a few rules about reachability, and one instruction: make it feel like a place, not a puzzle. Then I played whatever came out, blind.",
        "The first three levels were unplayable in the funniest ways — a key locked behind the door it opened, a boss arena with no floor. The fourth was eerie and almost great.",
        "The interesting failures all rhymed: the model understood structure but not stakes. It knew what a level looks like, not what it feels like to be afraid of running out of arrows.",
      ],
    },
    {
      id: "play-won", cat: "Philosophy", catHue: "violet", icon: "comment",
      title: "If a game can be won, was it ever play?", read: "9 min", date: "2026.05.30",
      author: "S. Vega", tags: ["philosophy", "play"],
      excerpt: "Caillois split games from play. Maybe winning is where one quietly becomes the other.",
      body: [
        "The philosopher Roger Caillois drew a line between paidia — wild, improvised play — and ludus, the structured game with rules and a win state. Most of childhood lives on the paidia side. Most of adulthood drifts toward ludus.",
        "Winning is a strange goal. The moment you achieve it, the activity ends. Play, by contrast, has no terminal state; it just continues until you stop wanting to.",
        "So when does a game stop being play? Perhaps exactly when winning starts to matter more than the next move.",
      ],
    },
    {
      id: "npc", cat: "Field note", catHue: "magenta", icon: "users",
      title: "The quiet genius of a good NPC", read: "6 min", date: "2026.05.22",
      author: "Mira Okafor", tags: ["games", "ai"],
      excerpt: "The best non-player characters don't act smart. They act like they have somewhere else to be.",
      body: [
        "A great NPC is mostly an illusion of indifference. They glance at you, then go back to sweeping the floor. That glance is the whole trick.",
        "Intelligence in characters is less about reasoning and more about the suggestion of an inner life that doesn't revolve around you.",
      ],
    },
  ];

  const TABS = [
    { value: "all", label: "All", count: POSTS.length },
    { value: "Field note", label: "Field notes", icon: "note", count: POSTS.filter((p) => p.cat === "Field note").length },
    { value: "Experiment", label: "Experiments", icon: "zap", count: POSTS.filter((p) => p.cat === "Experiment").length },
    { value: "Philosophy", label: "Philosophy", icon: "comment", count: POSTS.filter((p) => p.cat === "Philosophy").length },
  ];
  const ALL_TAGS = ["games", "ai", "philosophy", "play"];

  function Sidebar({ route, onNav }) {
    const items = [
      { id: "home", icon: "home", label: "Home" },
      { id: "notes", icon: "note", label: "Field notes" },
      { id: "exp", icon: "zap", label: "Experiments" },
      { id: "phil", icon: "comment", label: "Philosophy" },
      { id: "saved", icon: "bookmark", label: "Inventory" },
    ];
    return (
      <aside style={S.sidebar}>
        <a href="#" style={S.sideLogo} onClick={(e) => { e.preventDefault(); onNav("home"); }}>
          <img src="../../assets/logo/wanderen-mark.svg" width="28" height="28" style={{ imageRendering: "pixelated" }} alt="" />
          <span style={S.sideWord}>wanderen</span>
        </a>
        <nav style={S.sideNav}>
          {items.map((it) => (
            <a key={it.id} href="#" onClick={(e) => { e.preventDefault(); onNav(it.id); }}
              style={{ ...S.sideLink, ...(route === it.id ? S.sideLinkActive : {}) }}>
              <Icon name={it.icon} size={20} /> {it.label}
            </a>
          ))}
        </nav>
        <div style={S.sideUser}>
          <Avatar name="You Wanderer" size="sm" ring />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-hi)", fontWeight: 600 }}>You</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>wanderer_42</div>
          </div>
        </div>
      </aside>
    );
  }

  function Topbar() {
    return (
      <div style={S.topbar}>
        <div style={{ width: 320, maxWidth: "40vw" }}>
          <Input icon="search" placeholder="Search the archive…" aria-label="Search" />
        </div>
        <div style={S.topRight}>
          <IconButton icon="sun-alt" label="Theme" variant="ghost" />
          <IconButton icon="bell" label="Notifications" variant="ghost" />
          <Button variant="primary" size="sm" icon="zap">Join</Button>
        </div>
      </div>
    );
  }

  function ArticleRow({ post, saved, onOpen, onSave }) {
    return (
      <Card variant="default" padding="none" interactive style={{ overflow: "hidden" }} onClick={() => onOpen(post)}>
        <div style={S.row}>
          <div style={{ ...S.rowThumb, color: `var(${hueVar(post.catHue)})` }}><Icon name={post.icon} size={34} /></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-2)" }}>
              <Badge color={post.catHue} variant="outline">{post.cat}</Badge>
              <span style={S.metaMono}>{post.date} · {post.read}</span>
            </div>
            <h3 style={S.rowTitle}>{post.title}</h3>
            <p style={S.rowExcerpt}>{post.excerpt}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginTop: "var(--space-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Avatar name={post.author} size="xs" />
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>{post.author}</span>
              </div>
            </div>
          </div>
          <div onClick={(e) => { e.stopPropagation(); onSave(post.id); }}>
            <IconButton icon={saved ? "bookmark" : "bookmark"} label={saved ? "Saved" : "Save"} variant={saved ? "solid" : "default"} />
          </div>
        </div>
      </Card>
    );
  }

  function IndexView({ state, set, onOpen, onSave }) {
    const filtered = POSTS.filter((p) => {
      const tabOk = state.tab === "all" || p.cat === state.tab;
      const tagOk = !state.tags.length || state.tags.every((t) => p.tags.includes(t));
      return tabOk && tagOk;
    });
    const toggleTag = (t) => set((s) => ({ ...s, tags: s.tags.includes(t) ? s.tags.filter((x) => x !== t) : [...s.tags, t] }));
    return (
      <div style={S.content}>
        <div style={{ marginBottom: "var(--space-6)" }}>
          <div style={S.kicker}>Dispatch log</div>
          <h1 style={S.pageTitle}>Field notes from the edge of play &amp; AI</h1>
        </div>
        <Tabs items={TABS} value={state.tab} onChange={(v) => set((s) => ({ ...s, tab: v }))} />
        <div style={S.tagRow}>
          <span style={S.filterLabel}>Filter</span>
          {ALL_TAGS.map((t) => (
            <Tag key={t} hash active={state.tags.includes(t)} onClick={() => toggleTag(t)}>{t}</Tag>
          ))}
        </div>
        <div style={S.list}>
          {filtered.map((p) => (
            <ArticleRow key={p.id} post={p} saved={state.saved.includes(p.id)} onOpen={onOpen} onSave={onSave} />
          ))}
          {!filtered.length && (
            <div style={S.empty}>
              <Icon name="map" size={32} color="var(--text-faint)" />
              <p style={{ margin: "var(--space-3) 0 0", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>Nothing here yet. Every map starts blank — try fewer filters.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  function ReadingView({ post, saved, onBack, onSave }) {
    return (
      <div style={S.reader}>
        <div style={S.readerBar}>
          <Button variant="ghost" size="sm" icon="arrow-left" onClick={onBack}>Back to notes</Button>
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <IconButton icon="bookmark" label={saved ? "Saved" : "Save"} variant={saved ? "solid" : "default"} onClick={() => onSave(post.id)} />
            <IconButton icon="share" label="Share" variant="default" />
          </div>
        </div>
        <article style={S.article}>
          <Badge color={post.catHue} variant="outline">{post.cat}</Badge>
          <h1 style={S.articleTitle}>{post.title}</h1>
          <div style={S.articleMeta}>
            <Avatar name={post.author} size="sm" />
            <span style={{ color: "var(--text-hi)", fontWeight: 600 }}>{post.author}</span>
            <span style={{ color: "var(--text-faint)" }}>·</span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}>{post.date} · {post.read} read</span>
          </div>
          <div style={{ ...S.heroBlock, color: `var(${hueVar(post.catHue)})` }}><Icon name={post.icon} size={56} /></div>
          {post.body.map((b, i) =>
            typeof b === "string"
              ? <p key={i} style={S.prose}>{b}</p>
              : <blockquote key={i} style={S.quote}><span style={S.quoteText}>{b.quote}</span><span style={S.quoteWho}>{b.who}</span></blockquote>
          )}
          <div style={S.articleTags}>
            {post.tags.map((t) => <Tag key={t} hash>{t}</Tag>)}
          </div>
          <Card variant="raised" padding="lg" style={{ marginTop: "var(--space-10)" }}>
            <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
              <Avatar name={post.author} size="lg" ring />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-hi)" }}>{post.author}</div>
                <p style={{ margin: "var(--space-2) 0 var(--space-3)", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>Wanderer-in-residence. Writes about games, minds, and the space between.</p>
                <Button variant="secondary" size="sm" icon="plus">Follow</Button>
              </div>
            </div>
          </Card>
        </article>
      </div>
    );
  }

  function App() {
    const [state, setState] = React.useState({ route: "home", tab: "all", tags: [], saved: ["roguelike"], open: null });
    const onSave = (id) => setState((s) => ({ ...s, saved: s.saved.includes(id) ? s.saved.filter((x) => x !== id) : [...s.saved, id] }));
    return (
      <div style={S.shell}>
        <Sidebar route={state.route} onNav={(r) => setState((s) => ({ ...s, route: r, open: null }))} />
        <main style={S.main}>
          <Topbar />
          {state.open
            ? <ReadingView post={state.open} saved={state.saved.includes(state.open.id)} onBack={() => setState((s) => ({ ...s, open: null }))} onSave={onSave} />
            : <IndexView state={state} set={setState} onOpen={(p) => { setState((s) => ({ ...s, open: p })); window.scrollTo(0, 0); }} onSave={onSave} />}
        </main>
      </div>
    );
  }

  const S = {
    shell: { display: "flex", minHeight: "100vh", background: "var(--bg)" },
    sidebar: { width: 240, flex: "none", borderRight: "var(--bw) solid var(--border)", background: "var(--surface)", padding: "var(--space-6) var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-8)", position: "sticky", top: 0, height: "100vh" },
    sideLogo: { display: "flex", alignItems: "center", gap: "var(--space-3)", textDecoration: "none", padding: "0 var(--space-2)" },
    sideWord: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--text-hi)" },
    sideNav: { display: "flex", flexDirection: "column", gap: "var(--space-1)" },
    sideLink: { display: "flex", alignItems: "center", gap: "var(--space-3)", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", padding: "var(--space-3)", borderRadius: "var(--radius-px)", border: "var(--bw) solid transparent" },
    sideLinkActive: { color: "var(--primary)", background: "var(--cyan-wash)", borderColor: "var(--border)" },
    sideUser: { marginTop: "auto", display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3)", borderTop: "var(--bw) solid var(--border)" },

    main: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column" },
    topbar: { position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", padding: "var(--space-4) var(--space-8)", background: "rgba(10,13,26,0.82)", backdropFilter: "blur(10px)", borderBottom: "var(--bw) solid var(--border)" },
    topRight: { display: "flex", alignItems: "center", gap: "var(--space-2)" },

    content: { maxWidth: 880, width: "100%", margin: "0 auto", padding: "var(--space-10) var(--space-8) var(--space-20)" },
    kicker: { fontFamily: "var(--font-pixel)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "var(--space-3)" },
    pageTitle: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, lineHeight: 1.05, color: "var(--text-hi)", margin: 0, letterSpacing: "-0.01em" },
    tagRow: { display: "flex", alignItems: "center", gap: "var(--space-2)", flexWrap: "wrap", margin: "var(--space-6) 0 var(--space-6)" },
    filterLabel: { fontFamily: "var(--font-pixel)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginRight: "var(--space-2)" },
    list: { display: "flex", flexDirection: "column", gap: "var(--space-4)" },
    row: { display: "flex", gap: "var(--space-5)", padding: "var(--space-5)", alignItems: "flex-start" },
    rowThumb: { width: 84, height: 84, flex: "none", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface-inset)", backgroundImage: "var(--grid)", border: "var(--bw) solid var(--border)", borderRadius: "var(--radius-px)" },
    rowTitle: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, lineHeight: 1.15, color: "var(--text-hi)", margin: "0 0 var(--space-2)" },
    rowExcerpt: { fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 },
    metaMono: { fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" },
    empty: { textAlign: "center", padding: "var(--space-20) 0" },

    reader: { maxWidth: 760, width: "100%", margin: "0 auto", padding: "var(--space-6) var(--space-8) var(--space-24)" },
    readerBar: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-8)" },
    article: {},
    articleTitle: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--text-hi)", margin: "var(--space-4) 0 var(--space-5)" },
    articleMeta: { display: "flex", alignItems: "center", gap: "var(--space-2)", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", marginBottom: "var(--space-8)" },
    heroBlock: { height: 220, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface-inset)", backgroundImage: "var(--grid)", border: "var(--bw) solid var(--border)", borderRadius: "var(--radius-md)", marginBottom: "var(--space-10)", boxShadow: "var(--shadow-pixel)" },
    prose: { fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.8, color: "var(--text)", margin: "0 0 var(--space-6)" },
    quote: { display: "flex", flexDirection: "column", gap: "var(--space-3)", borderLeft: "var(--bw-thick) solid var(--primary)", padding: "var(--space-2) var(--space-6)", margin: "var(--space-8) 0" },
    quoteText: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, lineHeight: 1.25, color: "var(--text-hi)" },
    quoteWho: { fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" },
    articleTags: { display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-8)", paddingTop: "var(--space-8)", borderTop: "var(--bw) solid var(--border)" },
  };

  window.WanderenReader = App;
  if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
  }
})();
