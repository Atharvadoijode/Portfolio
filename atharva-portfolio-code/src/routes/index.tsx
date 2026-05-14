import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Mail, Phone, MapPin, Linkedin, Download, Github, Menu, X, Sun, Moon,
  GraduationCap, Sparkles, Users, Megaphone, BarChart3, Bot, Crown,
  Handshake, MessageCircle, Brain, Zap, Heart, Target, Rocket,
} from "lucide-react";
import profileImg from "@/assets/atharva.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Atharva Doijode — BBA Student | Marketing & AI" },
      { name: "description", content: "Personal portfolio of Atharva Doijode — BBA student, marketing enthusiast, and AI learner from Solapur, India." },
    ],
  }),
});

const TYPING = ["BBA Student", "Marketing Enthusiast", "AI Learner"];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = TYPING[i % TYPING.length];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1200);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Education", "#education"], ["Skills", "#skills"],
    ["Projects", "#projects"], ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-3 sm:mt-5">
        <div className="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg sm:text-xl">
            <span className="text-gradient">Atharva</span>
            <span className="text-foreground/80">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-muted-foreground hover:text-foreground transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme" className="btn-ghost rounded-full p-2">
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a href="#contact" className="hidden sm:inline-flex btn-primary rounded-full px-4 py-2 text-sm font-medium">Hire Me</a>
            <button onClick={() => setOpen(!open)} className="md:hidden btn-ghost rounded-full p-2" aria-label="Menu">
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-3 animate-fade-in">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-sm py-2 border-b border-border/50">{l}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const typed = useTyping();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="blob bg-primary/40 size-[420px] -top-20 -left-20" />
      <div className="blob bg-accent/40 size-[420px] -bottom-20 -right-20" style={{ animationDelay: "-6s" }} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center relative">
        <div className="reveal order-2 md:order-1">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
            <span className="size-2 rounded-full bg-primary animate-pulse" /> Available for opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <br />
            <span className="text-gradient">Atharva Doijode</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            Building My Own Identity Through <span className="text-foreground font-medium">Confidence, Learning &amp; Leadership.</span>
          </p>
          <div className="mt-5 text-lg sm:text-xl font-medium">
            <span className="text-gradient caret">{typed || "\u00A0"}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              <Mail className="size-4" /> Contact Me
            </a>
            <a href="https://www.linkedin.com/in/atharva-doijode-a38711398" target="_blank" rel="noreferrer" className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              <Linkedin className="size-4" /> LinkedIn Profile
            </a>
            <a href="#" className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
              <Download className="size-4" /> Resume
            </a>
          </div>
          <div className="mt-10 flex gap-8 text-sm">
            <div><div className="text-2xl font-bold text-gradient">1st</div><div className="text-muted-foreground">Year BBA</div></div>
            <div><div className="text-2xl font-bold text-gradient">7+</div><div className="text-muted-foreground">Core Skills</div></div>
            <div><div className="text-2xl font-bold text-gradient">∞</div><div className="text-muted-foreground">Curiosity</div></div>
          </div>
        </div>
        <div className="reveal order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="profile-ring p-[3px] rounded-[2rem] shadow-[0_30px_80px_-20px_oklch(0.62_0.24_295/0.5)]">
              <div className="rounded-[1.85rem] overflow-hidden bg-background">
                <img src={profileImg} alt="Atharva Doijode" width={520} height={620} className="w-[260px] sm:w-[340px] md:w-[380px] lg:w-[420px] aspect-[4/5] object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-fade-in">
              <div className="size-9 rounded-xl bg-primary/20 flex items-center justify-center"><Sparkles className="size-4 text-primary" /></div>
              <div><div className="text-xs text-muted-foreground">Currently</div><div className="text-sm font-semibold">Learning AI</div></div>
            </div>
            <div className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="size-9 rounded-xl bg-accent/20 flex items-center justify-center"><GraduationCap className="size-4 text-accent" /></div>
              <div><div className="text-xs text-muted-foreground">Studying</div><div className="text-sm font-semibold">BBA</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="reveal text-center mb-12">
      <div className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">{kicker}</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold"><span className="text-gradient">{title}</span></h2>
      {sub && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle kicker="About Me" title="A little about who I am" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "I am a dedicated and sincere person who believes in giving my best in every task and opportunity. I am confident in my abilities and always ready to learn, grow, and improve myself through new experiences.",
            "My goal is to build my own identity and become successful through confidence, consistency, and hard work. I come from a joint family background, which has taught me responsibility, teamwork, adaptability, and communication.",
            "Although I can be introverted at times, I enjoy socializing, interacting with people, and building meaningful connections. I believe confidence and communication are important qualities for personal and professional success.",
          ].map((t, i) => (
            <div key={i} className="reveal glass rounded-2xl p-6 hover:-translate-y-1 transition" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                {[<Heart key="h" className="size-5 text-primary" />, <Target key="t" className="size-5 text-primary" />, <Users key="u" className="size-5 text-primary" />][i]}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle kicker="Education" title="My academic journey" />
        <div className="reveal glass-strong rounded-3xl p-6 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="size-20 rounded-2xl btn-primary flex items-center justify-center mx-auto sm:mx-0">
            <GraduationCap className="size-10" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-xs text-primary font-semibold uppercase tracking-wider">2026 — Present</div>
            <h3 className="text-2xl sm:text-3xl font-bold mt-1">1st Year BBA Student</h3>
            <p className="text-muted-foreground mt-1">School of Business · MIT Vishwaprayag University</p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5 justify-center sm:justify-start">
              <MapPin className="size-3.5" /> Solapur, Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS = [
  { icon: MessageCircle, name: "Socializing & Communication", desc: "Connecting with people authentically" },
  { icon: Megaphone, name: "Marketing", desc: "Brand thinking & campaign ideas" },
  { icon: BarChart3, name: "Power BI", desc: "Data dashboards & insights" },
  { icon: Bot, name: "AI Tools", desc: "Modern AI workflows & prompting" },
  { icon: Crown, name: "Leadership", desc: "Leading with clarity & empathy" },
  { icon: Handshake, name: "Team Collaboration", desc: "Working seamlessly with others" },
  { icon: Users, name: "Public Interaction", desc: "Confident in front of people" },
];

function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle kicker="Skills" title="What I bring to the table" sub="A blend of soft skills and modern tools." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map(({ icon: Icon, name, desc }, i) => (
            <div key={name} className="reveal skill-card glass rounded-2xl p-6" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                <Icon className="size-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle kicker="Projects" title="What I'm building" />
        <div className="reveal glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="blob bg-primary/30 size-72 -top-20 -right-10" />
          <div className="relative grid sm:grid-cols-[auto_1fr] gap-6 items-start">
            <div className="size-16 rounded-2xl btn-primary flex items-center justify-center">
              <Bot className="size-8" />
            </div>
            <div>
              <div className="text-xs text-primary font-semibold uppercase tracking-wider">Academic · In Progress</div>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1">AI for All</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Currently working on an academic project focused on AI concepts, AI tools, and modern problem-solving approaches —
                exploring how artificial intelligence can be made approachable and useful for everyone.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["AI Tools", "Research", "Problem Solving", "Modern Tech"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full glass">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PERSONALITY = [
  { icon: Sparkles, label: "Confident" },
  { icon: Zap, label: "Adaptable" },
  { icon: Brain, label: "Creative Thinker" },
  { icon: Handshake, label: "Team Player" },
  { icon: Rocket, label: "Quick Learner" },
];

function Personality() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle kicker="Personality" title="What people say I am" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {PERSONALITY.map(({ icon: Icon, label }, i) => (
            <div key={label} className="reveal skill-card glass rounded-2xl p-6 text-center" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="size-12 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-3">
                <Icon className="size-6 text-primary" />
              </div>
              <div className="font-semibold text-sm sm:text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: "8010622604", href: "tel:8010622604" },
    { icon: Mail, label: "Email", value: "doijodeatharva7@gmail.com", href: "mailto:doijodeatharva7@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "Atharva Doijode", href: "https://www.linkedin.com/in/atharva-doijode-a38711398" },
    { icon: MapPin, label: "Location", value: "Tilak Chowk, Solapur, Maharashtra, India", href: "#" },
  ];
  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle kicker="Contact" title="Let's connect" sub="Open to collaborations, learning opportunities & meaningful conversations." />
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map(({ icon: Icon, label, value, href }, i) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
               className="reveal glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <Icon className="size-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-semibold truncate">{value}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="reveal mt-10 text-center">
          <a href="#" className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
            <Download className="size-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Atharva Doijode</span>. Built with passion.
        </div>
        <div className="flex gap-3">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/atharva-doijode-a38711398" },
            { icon: Mail, href: "mailto:doijodeatharva7@gmail.com" },
            { icon: Phone, href: "tel:8010622604" },
            { icon: Github, href: "https://github.com/" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="glass size-10 rounded-full flex items-center justify-center hover:text-primary hover:-translate-y-1 transition">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  const [dark, setDark] = useState(true);
  useReveal();
  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    document.documentElement.style.scrollBehavior = "smooth";
  }, [dark]);
  return (
    <div className="bg-aurora min-h-screen relative overflow-x-hidden">
      <Nav dark={dark} toggle={() => setDark(!dark)} />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Personality />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </div>
  );
}
