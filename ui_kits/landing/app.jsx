/* Wanderen — Arcade index / landing. English default, 中文 toggle.
   gold/red/cyan, hard pixel cards, the "juice" layer (click → damage numbers),
   CRT overlay, crosshair. Loaded via <script type="text/babel" src="app.jsx">. */
(function () {
  const NS = window.WanderenDesignSystem_eab830 || {};
  const { Card } = NS;

  // name & hook carry both languages; CTAs stay English (arcade).
  const GAMES = [
    { emoji: "⚔️", tag: "NEW", name: { en: "Three Kingdoms Survivors", cn: "三国幸存者" },
      hook: { en: "Mow down the warring states, one rider worth a thousand. A Vampire-Survivors-style horde game in the Three Kingdoms: eight generals, ultimate skills, armies cleared in a thought. Runs in-browser.", cn: "乱世割草，一骑当千。三国题材的《吸血鬼幸存者》式割草游戏：八名将、无双绝技、千军万马一念清场。浏览器直开。" },
      cta: "▶ PRESS TO PLAY", href: "https://sanguo.wanderen.ai" },
    { emoji: "👊", tag: "NEW", name: { en: "Juice Lab", cn: "打击感实验室" },
      hook: { en: "From “dead fish” to “addictive”: 19 stackable game-feel techniques (flash / hitstop / screenshake / particles…), A/B them, feel by hand how juice is layered.", cn: "从“死鱼”到“上头”：19 步逐层开关打击感技术（闪白/顿帧/震屏/粒子…），A/B 对比，亲手感受手感怎么叠出来。" },
      cta: "▶ PRESS TO PLAY", href: "https://juice.wanderen.ai" },
    { emoji: "🗡️", tag: "NEW", name: { en: "mini-dmc", cn: "迷你鬼泣" },
      hook: { en: "Devil May Cry’s core combat loop, rebuilt: ground combos, launchers, air combos, dodge i-frames, D→SSS style ranking. Pure Canvas, zero deps.", cn: "复刻《鬼泣》核心战斗循环：地面四连、挑空、空中连、翻滚无敌帧，D→SSS 风格评分。纯 Canvas 零依赖。" },
      cta: "▶ PRESS TO PLAY", href: "https://dmc.wanderen.ai" },
    { emoji: "⚡", tag: "NEW", name: { en: "Yishan · Single-key Parry", cn: "一闪 · 单键弹反" },
      hook: { en: "A one-button rhythm parry: read the light, strike on that one frame. Minimum input, maximum feel — timing itself becomes the game.", cn: "一颗按键的节奏弹反：看准光，在那一帧反击。最小输入，最大手感 —— 把“时机”本身做成玩法。" },
      cta: "▶ PRESS TO PLAY", href: "https://yishan.wanderen.ai" },
    { emoji: "🏞️", tag: "NEW", name: { en: "Misty Valley Walk", cn: "幻谷漫步" },
      hook: { en: "Walk first-person into a splat-rendered fantasy valley: Spark rendering + Rapier physics, roaming a world grown from point clouds.", cn: "第一人称走进一片泼溅（splat）出来的幻想山谷：Spark 渲染 + Rapier 物理，沉浸式漫游一个由点云长成的世界。" },
      cta: "▶ PRESS TO PLAY", href: "https://valley.wanderen.ai" },
    { emoji: "🎭", tag: null, name: { en: "The Game Theory", cn: "游戏论" },
      hook: { en: "Play and dissect your own meta-game: an overly honest designer confesses, to your face, every mechanic that gets you hooked.", cn: "边玩边拆穿自己的元游戏：一个过分诚实的设计师，当面坦白每一个让你上瘾的机制。" },
      cta: "▶ PRESS TO PLAY", href: "https://gametheory.wanderen.ai" },
  ];
  const TOOLS = [
    { emoji: "🟢", tag: null, name: { en: "Slime · Claude Code RPG plugin", cn: "Slime · Claude Code RPG 插件" },
      hook: { en: "Turn a real Claude Code session into a turn-based RPG: the goal is the Boss, todos are mobs, tokens are resources. “Already addicted? Might as well lean in.”", cn: "把真实的 Claude Code 会话变成回合制 RPG：目标是 Boss，todo 是小怪，token 是资源。「既然已经上瘾了，何不更上瘾一点。」" },
      cta: "▶ GITHUB", href: "https://github.com/bitqs/Slime" },
    { emoji: "🧬", tag: "DEV", dev: true, name: { en: "vs-anatomy", cn: "vs-anatomy 幸存者解剖" },
      hook: { en: "Decompile Vampire Survivors → 157 reusable design atoms (architecture / feel / numbers / economy), each cited to source.", cn: "反编译《吸血鬼幸存者》→ 157 条可复用设计原子（架构/手感/数值/经济，条条带出处）。" },
      cta: null, href: null },
    { emoji: "🏭", tag: "DEV", dev: true, name: { en: "Gamage · AI gamedev framework", cn: "Gamage · AI 协作游戏开发框架" },
      hook: { en: "A 6-agent, 5-gate game-dev pipeline template — AI does the work, humans own the feel. Three Kingdoms Survivors was its first run.", cn: "六 Agent + 五道门禁的游戏开发流水线模板 —— AI 干活，人类只管手感。三国幸存者就是它的首跑作品。" },
      cta: null, href: null },
    { emoji: "📈", tag: "DEV", dev: true, name: { en: "AlphaForge · A-share quant", cn: "AlphaForge · A股量化工具" },
      hook: { en: "A factor forge for A-shares: a data layer + factor pipeline that turns stock-picking into backtestable, iterable engineering. WIP.", cn: "给 A 股打造的因子锻造台：数据层 + 因子流水线打底，把“挑票”这件事做成可回测、可迭代的工程。建设中。" },
      cta: "▶ OPEN", href: "https://alphaforge.wanderen.ai" },
  ];

  const COPY = {
    tagline: { en: ["The one who plays · Games", "AI · build, play, dissect"], cn: ["玩的人 · 游戏", "AI · 边做边玩边拆解"] },
    sub: {
      en: ["Obsessed with ", "how the smallest logic grows into game-feel", " — and with using AI to do it fast and satisfying.", "Try clicking anywhere on this page."],
      cn: ["痴迷『", "最小的逻辑，如何长出游戏感", "』—— 也痴迷用 AI 把这件事做快、做爽。", "试着在这页上随便点几下。"],
    },
    games: { en: "", cn: "游戏" },
    tools: { en: "", cn: "AI × 游戏开发" },
  };

  function Item({ it, lang }) {
    const clickable = !!it.href;
    const other = lang === "en" ? "cn" : "en";
    return (
      <Card variant="raised" padding="none" interactive={clickable}
        as={clickable ? "a" : "div"} href={it.href || undefined}
        target={clickable ? "_blank" : undefined} rel={clickable ? "noreferrer" : undefined}
        style={{ ...L.card, opacity: it.dev ? 0.78 : 1 }}>
        {it.tag && <span style={{ ...L.tag, background: it.dev ? "var(--border)" : "var(--accent)", color: it.dev ? "var(--text-muted)" : "#fff" }}>{it.tag}</span>}
        <span style={L.icon}>{it.emoji}</span>
        <h3 style={L.h3}>{it.name[lang]}{it.name[other] !== it.name[lang] && <span style={L.alt}>{it.name[other]}</span>}</h3>
        <p style={L.p}>{it.hook[lang]}</p>
        {it.cta && <span style={L.play}>{it.cta}</span>}
      </Card>
    );
  }

  function Sec({ kicker, label }) {
    return (
      <h2 style={L.sec}>
        <span>{kicker}</span>{label ? <span style={L.secZh}>{label}</span> : null}
        <span style={L.secLine} />
      </h2>
    );
  }

  function LangToggle({ lang, setLang }) {
    const seg = (v, t) => (
      <button onClick={() => setLang(v)} style={{ ...L.segBtn, ...(lang === v ? L.segOn : {}) }}>{t}</button>
    );
    return <div style={L.toggle}>{seg("en", "EN")}{seg("cn", "中")}</div>;
  }

  function App() {
    const [lang, setLangState] = React.useState(() => {
      try { return localStorage.getItem("wd_lang") || "en"; } catch (e) { return "en"; }
    });
    const setLang = (v) => { setLangState(v); try { localStorage.setItem("wd_lang", v); } catch (e) {} };
    // Click-anywhere damage-number juice now lives in the shared juice.js
    // (loaded by index.html) so every page gets it.

    const tag = COPY.tagline[lang], sub = COPY.sub[lang];
    return (
      <div className="wd-crt" style={L.page}>
        <LangToggle lang={lang} setLang={setLang} />
        <div style={L.wrap}>
          <header style={L.header}>
            <h1 style={L.logo}>
              <img src="../../assets/logo/wanderen-mark.svg" style={L.logoMark} alt="" />
              <span style={L.logoWord}>wanderen<span style={L.logoTld}>.ai</span></span>
              <span style={L.cursor} />
            </h1>
            <p style={L.tagline}>{tag[0]}<span style={L.vs}>×</span>{tag[1]}</p>
            <p style={L.sub}>{sub[0]}<em style={L.em}>{sub[1]}</em>{sub[2]}<br />{sub[3]}</p>
          </header>

          <Sec kicker="GAMES" label={COPY.games[lang]} />
          <div style={L.grid}>{GAMES.map((it, i) => <Item key={i} it={it} lang={lang} />)}</div>

          <Sec kicker="TOOLS" label={COPY.tools[lang]} />
          <div style={L.grid}>{TOOLS.map((it, i) => <Item key={i} it={it} lang={lang} />)}</div>

          <footer style={L.footer}>
            <a href="https://github.com/bitqs" target="_blank" rel="noreferrer" style={L.footLink}>GitHub</a>
            <span style={L.stack}>🧰 Phaser · TypeScript · Remotion · Cloudflare · Claude Code</span>
            <span style={L.press}>PRESS START</span>
          </footer>
        </div>
      </div>
    );
  }

  const L = {
    page: { background: "var(--bg)", minHeight: "100vh" },
    wrap: { maxWidth: 960, margin: "0 auto", padding: "0 24px" },

    toggle: { position: "fixed", top: 18, right: 18, zIndex: 9100, display: "flex", border: "2px solid var(--border)", background: "rgba(11,11,20,.7)", backdropFilter: "blur(6px)" },
    segBtn: { fontFamily: "var(--font-pixel)", fontSize: "9px", letterSpacing: ".06em", padding: "8px 11px", background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer" },
    segOn: { background: "var(--primary)", color: "var(--text-on-neon)" },

    header: { padding: "88px 0 56px" },
    logo: { display: "flex", alignItems: "center", gap: "clamp(10px,2vw,18px)", margin: 0, lineHeight: 1, fontSize: "clamp(40px,7vw,72px)" },
    logoMark: { height: "0.9em", width: "auto", imageRendering: "pixelated", filter: "drop-shadow(0 0 12px rgba(255,200,61,.4))", flex: "none" },
    logoWord: { fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--primary)", letterSpacing: "-0.01em", textShadow: "3px 3px 0 var(--accent), 6px 6px 0 rgba(255,71,87,.22), 0 0 26px rgba(255,200,61,.30)" },
    logoTld: { color: "var(--tertiary)" },
    cursor: { display: "inline-block", width: "0.5em", height: "0.82em", background: "var(--tertiary)", boxShadow: "0 0 10px var(--glow-cyan)", animation: "wd-blink 1s steps(1) infinite", flex: "none", alignSelf: "center" },
    tagline: { marginTop: 28, marginBottom: 0, fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", fontFamily: "var(--font-body)" },
    vs: { color: "var(--accent)", fontFamily: "var(--font-pixel)", fontSize: ".8em", padding: "0 .35em" },
    sub: { marginTop: 10, marginBottom: 0, color: "var(--text-muted)", maxWidth: 600, fontFamily: "var(--font-body)", lineHeight: 1.7 },
    em: { color: "var(--tertiary)", fontStyle: "normal" },

    sec: { fontFamily: "var(--font-pixel)", fontSize: ".8rem", color: "var(--tertiary)", margin: "64px 0 24px", display: "flex", alignItems: "center", gap: 14 },
    secZh: { fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.25rem", color: "var(--text-hi)" },
    secLine: { flex: 1, height: 2, background: "linear-gradient(90deg, var(--border), transparent)" },

    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 },
    card: { border: "3px solid var(--border)", borderRadius: 0, padding: "22px 20px 20px", display: "flex", flexDirection: "column", gap: 10, textDecoration: "none", color: "var(--text)", position: "relative" },
    tag: { position: "absolute", top: -3, right: 12, fontSize: ".68rem", fontWeight: 700, padding: "2px 9px", fontFamily: "var(--font-body)" },
    icon: { fontSize: "1.9rem", lineHeight: 1 },
    h3: { fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 900, color: "var(--text-hi)", margin: 0, lineHeight: 1.3 },
    alt: { color: "var(--text-muted)", fontWeight: 400, fontSize: ".8rem", marginLeft: 6, fontFamily: "var(--font-body)" },
    p: { color: "var(--text-muted)", fontSize: ".9rem", margin: 0, flex: 1, fontFamily: "var(--font-body)", lineHeight: 1.7 },
    play: { fontFamily: "var(--font-pixel)", fontSize: ".65rem", color: "var(--primary)", marginTop: 6 },

    footer: { marginTop: 88, padding: "36px 0 64px", borderTop: "2px solid var(--border)", display: "flex", flexWrap: "wrap", gap: "10px 28px", alignItems: "center", color: "var(--text-muted)", fontSize: ".9rem", fontFamily: "var(--font-body)" },
    footLink: { color: "var(--tertiary)", textDecoration: "none", fontWeight: 700 },
    stack: { color: "var(--text-muted)" },
    press: { fontFamily: "var(--font-pixel)", fontSize: ".6rem", color: "var(--text-muted)", marginLeft: "auto", animation: "wd-blink 1.4s steps(1) infinite" },
  };

  window.WanderenLanding = App;
  if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
  }
})();
