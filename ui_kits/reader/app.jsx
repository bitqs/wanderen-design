/* Wanderen — Reader / content platform UI kit.
   Interactive: browse the index, filter by tab, open an article, save it, go back.
   Loaded via <script type="text/babel" src="app.jsx"> in index.html. */
(function () {
  const NS = window.WanderenDesignSystem_eab830 || {};
  const { Button, IconButton, Badge, Tag, Card, Avatar, Input, Tabs } = NS;
  const Icon = ({ name, size = 24, color }) =>
    React.createElement("iconify-icon", { icon: "pixelarticons:" + name, width: size, height: size, style: color ? { color } : undefined });
  // 渲染段落里的 **加粗**(书稿用它标承重句)。
  const renderRich = (text) =>
    String(text).split(/(\*\*[^*]+\*\*)/g).map((seg, i) =>
      seg.startsWith("**") && seg.endsWith("**")
        ? React.createElement("strong", { key: i }, seg.slice(2, -2))
        : seg);

  // 视口宽度 → 是否手机。看书页据此切到全宽布局 + 精简标题栏。
  const useIsMobile = (bp = 720) => {
    const [m, setM] = React.useState(() => window.innerWidth <= bp);
    React.useEffect(() => {
      const on = () => setM(window.innerWidth <= bp);
      window.addEventListener("resize", on);
      return () => window.removeEventListener("resize", on);
    }, [bp]);
    return m;
  };

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

  // 《玩的人》— 全文优先用 book-data.js(由 homo-ludens/book/ 生成);
  // 下面的内联开篇代表段仅作 fallback,让本 kit 脱离数据文件也能跑。
  const BOOK = window.WANDEREN_BOOK || {
    title: "玩的人",
    sub: "泛化的「玩」——电子游戏 · 抖音 · 游戏化的工作与人生",
    chapters: [
      { id: "ch1", no: "01", title: "第一章 剩下的时间",
        epi: { q: "只有当人在充分意义上是人的时候，他才游戏；也只有当人游戏的时候，他才是完整的人。", cite: "——席勒《审美教育书简》" },
        paras: [
          "玩过《文明》这款游戏的人，多半都领教过一种很特别的悔恨。它甚至有专门的学名，叫「再来一回合」——你发誓打完这一回合就睡，可等你终于舍得抬头，窗外天已经亮了。",
          "有一件事，我们这代人是头一回大规模碰上的：不必再为了活命，把一整天填满。那么多出来的时间，都流到哪儿去了？几乎整个儿，都交给了玩。",
        ] },
      { id: "ch2", no: "02", title: "第二章 谁在另一头",
        epi: { q: "可叹啊，人竟成了他们自己工具的工具。", cite: "——梭罗《瓦尔登湖》" },
        paras: [
          "拉斯维加斯的老虎机房里，你找不到一扇窗，也找不到一只钟——它不愿意让你知道，外头是天黑还是天亮，你已经在这儿坐了多久。",
          "并不是你在玩它，而是它在玩你。那个「它」最赤裸的一副面孔，就是这一间赌场；而它如今最厉害的化身，已经被搬进了你的口袋。",
        ] },
      { id: "ch3", no: "03", title: "第三章 活着的玩",
        epi: { q: "人皆知有用之用，而莫知无用之用也。", cite: "——《庄子·人间世》" },
        paras: [
          "物理学家费曼倦了研究的那阵子，在食堂看见一个学生把餐盘抛向空中，盘子边上的校徽一边转、一边晃。他纯粹出于好玩去算那个晃，算着算着，竟算到了后来拿诺奖的那套工作上。",
          "正因为那件事毫无用处、纯粹是为自己好玩，它反倒真正来了劲。活着的玩，到底长什么样——这一章就想说这个。",
        ] },
      { id: "ch4", no: "04", title: "第四章 守住玩儿心",
        epi: { q: "胜人者有力，自胜者强。", cite: "——《老子》" },
        paras: [
          "奥德修斯要经过塞壬的海域，那歌声美得致命。他趁自己还清醒，先把水手的耳朵用蜡封死、把自己绑在桅杆上，并严令途中无论他怎么哀求都不许松绑——于是他活着听完了那本来谁也不该活着听完的歌。",
          "守住自己的玩儿心，是最难的一关，难就难在：你要提防的那个人，常常就是你自己。",
        ] },
      { id: "ch5", no: "05", title: "第五章 反过来玩它",
        epi: { q: "单凭这一番努力，我就成了一个比原来更好、也更快活的人。", cite: "——富兰克林《自传》" },
        paras: [
          "富兰克林二十几岁时给自己列了十三样德性，做了个小本子：每晚挨条对，凡是没守住的，就在那格里点一个黑点。这是一台他亲手给自己造的机器。",
          "它跟那台借走你快感的机器，用的是同一批零件，却隔着一整本书的距离。这一章要讲的就是：那批本来用来抓你的零件，你到底能不能反过来，为自己所用。",
        ] },
      { id: "ch6", no: "06", title: "第六章 造一座花园",
        epi: { q: "上帝最先栽下的，是一座园子。", cite: "——培根《论造园》" },
        paras: [
          "二〇一二年，陈星汉做了一款叫《风之旅人》的游戏：你和一个陌生人在沙漠里相遇，没有名字、没有文字、没有排行榜，唯一能做的，是发出一声短短的鸣叫。很多人玩到结尾会鼻子一酸。",
          "这一章掉了个头，站到那个一笔一笔设计它的人那一头——怎么造出一座花园，而不是一台拉斯维加斯那样的机器。",
        ] },
      { id: "ch7", no: "07", title: "第七章 设计师与玩家",
        epi: { q: "第一条原则是，你绝不能欺骗你自己——而你正是最好骗的那一个人。", cite: "——费曼《草包族科学》" },
        paras: [
          "人类学家舒尔泡在拉斯维加斯十几年。她访谈的莫莉说：「人们永远搞不懂的是，我根本不是为了赢。」她要的是钻进那台机器里，钻进一种连她自己都消失了的状态。",
          "知道一台机器是怎么抓住你的，丝毫不能让你免于被它抓住。当你既是设局的人、又是入局的人，这道坎最深。",
        ] },
      { id: "ch8", no: "08", title: "第八章 玩与活着",
        epi: { q: "时间是一个玩耍的孩子，在棋盘上挪动着棋子；王权，属于这个孩子。", cite: "——赫拉克利特，残篇" },
        paras: [
          "数学家康威逢人就说一句让同行直皱眉的话：他这辈子，从来没有工作过哪怕一天。他玩棋、玩绳子翻花、玩骰子，玩到兴头上，顺手玩出了一门数学。",
          "求生和玩，到头来是同一股劲的两张脸。一个人在玩的时候，是他最像活着的时候。",
        ] },
      { id: "ch9", no: "09", title: "终章 写这本书的人也在玩",
        epi: { q: "唯有能变的，才能延续——无限的玩家，正是照着这条道理活着的。", cite: "——卡斯《有限与无限的游戏》" },
        paras: [
          "写到这一章之前，作者被自己拦了下来。这本书是在一个他自己搭的小系统里写的；写着写着，系统跳出来逼他答：停下来那一刻，是满足，还是空里带着「再来一轮」？他老实填了一个字：空。",
          "一本讲「玩与被玩」的书，是被一个一边写、一边清楚知道自己正在玩、同时又正在被玩的人写出来的。它要把那把一直在量别人的尺，掉过头来，量握尺的这只手。",
        ] },
    ],
  };

  function Sidebar({ route, onNav }) {
    const items = [
      { id: "home", icon: "home", label: "Home" },
      { id: "book", icon: "book", label: "玩的人 · The Book" },
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

  function BookView({ mobile }) {
    const [prog, setProg] = React.useState(0);
    const [cur, setCur] = React.useState(0);
    const [toc, setToc] = React.useState(false);
    React.useEffect(() => {
      function onScroll() {
        const doc = document.documentElement;
        const h = doc.scrollHeight - doc.clientHeight;
        const sc = doc.scrollTop || document.body.scrollTop || 0;
        setProg(h > 0 ? Math.min(100, (sc / h) * 100) : 0);
        let active = 0;
        BOOK.chapters.forEach((c, i) => {
          const el = document.getElementById("bk-" + c.id);
          if (el && el.getBoundingClientRect().top <= 96) active = i;
        });
        setCur(active);
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      window.scrollTo(0, 0);
      onScroll();
      return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
    }, []);
    const jump = (id) => { setToc(false); const el = document.getElementById("bk-" + id); if (el) el.scrollIntoView({ behavior: "smooth" }); };
    const ch = BOOK.chapters[cur] || BOOK.chapters[0];
    return (
      <div>
        <header style={S.bookBar}>
          <div style={{ ...S.bookProg, width: prog + "%" }} />
          <div style={{ ...S.bookBarRow, ...(mobile ? S.bookBarRowM : {}) }}>
            {!mobile && <span style={S.bookBrand}>玩的人</span>}
            {!mobile && <span style={S.bookDiv} />}
            <span style={S.bookNow} title={ch.title}>{ch.title}</span>
            <span style={S.bookCount}><b>{cur + 1}</b> / {BOOK.chapters.length}</span>
            {!mobile && <span style={S.bookPct}>{Math.round(prog)}%</span>}
            <IconButton icon="menu" label="目录" variant={toc ? "solid" : "default"} onClick={() => setToc((v) => !v)} />
          </div>
          {toc && (
            <div style={S.bookToc} onClick={(e) => { if (e.target.tagName !== "A") setToc(false); }}>
              {BOOK.chapters.map((c, i) => (
                <a key={c.id} href="#" onClick={(e) => { e.preventDefault(); jump(c.id); }}
                  style={{ ...S.bookTocItem, ...(i === cur ? S.bookTocActive : {}) }}>
                  <span style={S.bookTocNum}>{c.no}</span>
                  <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.title}</span>
                  {i === cur && <Icon name="chevron-right" size={16} />}
                </a>
              ))}
            </div>
          )}
        </header>
        <article style={{ ...S.book, ...(mobile ? S.bookM : {}) }}>
          <div style={S.bookHead}>
            <div style={S.kicker}>The Book</div>
            <h1 style={S.bookBigTitle}>玩的人</h1>
            <p style={S.bookSub}>{BOOK.sub}</p>
          </div>
          {BOOK.chapters.map((c) => (
            <section key={c.id} id={"bk-" + c.id} style={S.bookChapter}>
              <div style={S.bookChNum}>{c.no}</div>
              <h2 style={S.bookChTitle}>{c.title}</h2>
              <blockquote style={S.bookEpi}>
                <span style={S.bookEpiText}>{c.epi.q}</span>
                <span style={S.bookEpiCite}>{c.epi.cite}</span>
              </blockquote>
              {c.paras.map((p, i) => <p key={i} style={S.bookProse}>{renderRich(p)}</p>)}
            </section>
          ))}
          <footer style={S.bookEnd}>—— 全书完 ——</footer>
        </article>
      </div>
    );
  }

  function App() {
    const isMobile = useIsMobile();
    const [state, setState] = React.useState({ route: "home", tab: "all", tags: [], saved: ["roguelike"], open: null });
    const onSave = (id) => setState((s) => ({ ...s, saved: s.saved.includes(id) ? s.saved.filter((x) => x !== id) : [...s.saved, id] }));
    // 看书页在手机端让正文占满全宽,侧栏让位(章节导航走标题栏的 ☰)。
    const hideSide = state.route === "book" && isMobile;
    return (
      <div style={S.shell}>
        {!hideSide && <Sidebar route={state.route} onNav={(r) => setState((s) => ({ ...s, route: r, open: null }))} />}
        <main style={S.main}>
          {state.route === "book"
            ? <BookView mobile={isMobile} />
            : <React.Fragment>
                <Topbar />
                {state.open
                  ? <ReadingView post={state.open} saved={state.saved.includes(state.open.id)} onBack={() => setState((s) => ({ ...s, open: null }))} onSave={onSave} />
                  : <IndexView state={state} set={setState} onOpen={(p) => { setState((s) => ({ ...s, open: p })); window.scrollTo(0, 0); }} onSave={onSave} />}
              </React.Fragment>}
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

    // —— 玩的人 / The Book ——
    bookBar: { position: "sticky", top: 0, zIndex: 100, background: "rgba(11,11,20,0.9)", backdropFilter: "blur(10px)", borderBottom: "var(--bw) solid var(--border)" },
    bookProg: { position: "absolute", top: 0, left: 0, height: 3, background: "var(--primary)", boxShadow: "0 0 8px var(--primary)", transition: "width .1s linear" },
    bookBarRow: { display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3) var(--space-6)" },
    bookBarRowM: { gap: "var(--space-2)", padding: "var(--space-3) var(--space-4)" },
    bookBrand: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--text-hi)", letterSpacing: "0.02em", whiteSpace: "nowrap" },
    bookDiv: { width: "var(--bw)", height: 16, background: "var(--border)", flex: "none" },
    bookNow: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" },
    bookCount: { fontFamily: "var(--font-pixel)", fontSize: 10, color: "var(--text-faint)", letterSpacing: "0.05em", whiteSpace: "nowrap" },
    bookPct: { fontFamily: "var(--font-pixel)", fontSize: 10, color: "var(--text-faint)", whiteSpace: "nowrap" },

    bookToc: { position: "absolute", top: "100%", right: "var(--space-4)", width: "min(88vw, 330px)", background: "var(--surface-raised)", border: "var(--bw) solid var(--border)", boxShadow: "var(--shadow-pixel-lg)", maxHeight: "72vh", overflowY: "auto", zIndex: 110 },
    bookTocItem: { display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3) var(--space-4)", color: "var(--text-muted)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 14, borderBottom: "var(--bw) solid var(--border)" },
    bookTocActive: { color: "var(--primary)", background: "var(--surface-hover)", fontWeight: 600 },
    bookTocNum: { fontFamily: "var(--font-pixel)", fontSize: 9, color: "var(--text-faint)", flex: "none", width: 20 },

    book: { maxWidth: 760, width: "100%", margin: "0 auto", padding: "var(--space-12) var(--space-8) var(--space-24)" },
    bookM: { padding: "var(--space-8) var(--space-5) var(--space-20)" },
    bookHead: { textAlign: "center", marginBottom: "var(--space-16)", paddingBottom: "var(--space-10)", borderBottom: "var(--bw) solid var(--border)" },
    bookBigTitle: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 52, color: "var(--text-hi)", margin: "var(--space-3) 0", letterSpacing: "0.04em" },
    bookSub: { fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", margin: 0 },
    bookChapter: { position: "relative", scrollMarginTop: 60, padding: "var(--space-12) 0 var(--space-6)" },
    bookChNum: { fontFamily: "var(--font-pixel)", fontSize: 13, color: "var(--primary)", letterSpacing: "0.12em", marginBottom: "var(--space-3)" },
    bookChTitle: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, lineHeight: 1.3, color: "var(--text-hi)", margin: "0 0 var(--space-5)" },
    bookEpi: { display: "flex", flexDirection: "column", gap: "var(--space-2)", borderLeft: "var(--bw-thick) solid var(--tertiary)", padding: "var(--space-1) var(--space-5)", margin: "0 0 var(--space-8)" },
    bookEpiText: { fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--text-muted)" },
    bookEpiCite: { fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" },
    bookProse: { fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.85, color: "var(--text)", margin: "0 0 var(--space-6)", textAlign: "justify" },
    bookEnd: { textAlign: "center", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-faint)", letterSpacing: "0.3em", padding: "var(--space-16) 0 0" },
  };

  window.WanderenReader = App;
  if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
  }
})();
