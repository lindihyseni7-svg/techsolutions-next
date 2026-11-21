"use client";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  Clock3,
  Globe2,
  LockKeyhole,
  Mail,
  Menu,
  PanelsTopLeft,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  X
} from "lucide-react";
import { animate, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = ["Solutions", "Workflow", "Pricing", "Contact"];

const stats = [
  { value: 557, suffix: "", label: "people tracked" },
  { value: 92, suffix: "%", label: "payroll readiness" },
  { value: 24, suffix: "/7", label: "operations visibility" },
  { value: 3, suffix: "x", label: "cleaner workflow" }
];

const services = [
  "HR automation",
  "Employee records",
  "Payroll readiness",
  "Attendance intelligence",
  "Department control",
  "Workflow dashboards",
  "Secure admin access",
  "Operations reporting"
];

const solutions = [
  {
    icon: UsersRound,
    title: "People OS",
    text: "Employee records, departments, onboarding states and sensitive HR context organized in one calm workspace.",
    image: "/media/card1.jpg"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Registration logs, daily actions and approvals move through guided flows instead of scattered spreadsheets.",
    image: "/media/system1.jpg"
  },
  {
    icon: BarChart3,
    title: "Payroll Readiness",
    text: "Attendance, roles and operational data become cleaner inputs for payroll decisions and review.",
    image: "/media/card2.jpg"
  },
  {
    icon: ShieldCheck,
    title: "Secure Admin Control",
    text: "Protected access, clear admin surfaces and role-aware actions designed for real internal operations.",
    image: "/media/contact.jpg"
  }
];

const servicePanels = [
  {
    title: "Employee records that stay clean.",
    label: "01 / People",
    text: "Centralized staff profiles, roles, departments and contact details without spreadsheet drift.",
    image: "/media/card1.jpg"
  },
  {
    title: "Attendance and daily logs in one rhythm.",
    label: "02 / Attendance",
    text: "Capture daily activity, registrations and team movement so operations can be reviewed faster.",
    image: "/media/step5.jpg"
  },
  {
    title: "Payroll readiness before the deadline.",
    label: "03 / Payroll",
    text: "Turn attendance and employee data into a clearer payroll preparation workflow.",
    image: "/media/card2.jpg"
  },
  {
    title: "Dashboards for decisions, not decoration.",
    label: "04 / Insight",
    text: "Keep the important signals visible for managers: people, departments, workload and status.",
    image: "/media/system1.jpg"
  },
  {
    title: "Secure admin control for growing teams.",
    label: "05 / Control",
    text: "Role-aware access and structured admin surfaces keep operations organized as the company scales.",
    image: "/media/contact.jpg"
  }
];

const workflow = [
  ["01", "Map the team", "Import employees, departments and operating roles into one shared model."],
  ["02", "Connect the day", "Capture attendance, registration logs and daily events with less manual follow-up."],
  ["03", "Review the signal", "Dashboards highlight what needs attention before payroll and operations meetings."],
  ["04", "Scale the system", "Add departments, workflows and reporting layers as the business grows."]
];

const pricing = [
  ["Core HR", "$199", "Employee records, departments, contact flows and clean admin views."],
  ["Operations Suite", "$299", "HR, registrations, workflow intelligence and priority implementation."],
  ["Scale Command", "$399", "Payroll readiness, reporting layer, advanced governance and team training."]
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }
  };
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.7, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [count, inView, value]);

  return <motion.strong ref={ref}>{rounded}</motion.strong>;
}

function SplitHeadline({ children }: { children: string }) {
  return (
    <>
      {children.split(" ").map((word, index) => (
        <motion.span
          className="word-reveal"
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

function ServicePanel({ panel, index }: { panel: (typeof servicePanels)[number]; index: number }) {
  return (
    <motion.article
      className="scroll-service-panel"
      initial={{ opacity: 0, y: 70, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.58, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="scroll-service-copy">
        <span>{panel.label}</span>
        <h3>{panel.title}</h3>
        <p>{panel.text}</p>
        <small>{String(index + 1).padStart(2, "0")} / {String(servicePanels.length).padStart(2, "0")}</small>
      </div>
      <div className="scroll-service-image">
        <Image src={panel.image} alt="" width={860} height={620} />
      </div>
    </motion.article>
  );
}

function ServiceScrollSection() {
  return (
    <section className="service-scroll-section">
      <div className="service-scroll-intro">
        <div className="service-scroll-heading">
          <span className="eyebrow dark">Service system</span>
          <h2>Five focused layers, one scroll story.</h2>
          <p>Scroll through the operational services as one controlled section. After the fifth layer, the page continues normally.</p>
        </div>
      </div>
      <div className="service-scroll-stage">
        {servicePanels.map((panel, index) => (
          <ServicePanel key={panel.title} panel={panel} index={index} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.24 });
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, 58]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.54]);
  const heroScale = useTransform(scrollYProgress, [0, 0.32], [1.01, 1.07]);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Tech Solutions home">
          <span><Rocket size={20} /></span>
          <strong>Tech Solutions</strong>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">Request demo</a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <motion.video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          <source src="/media/video.mp4" type="video/mp4" />
        </motion.video>
        <div className="hero-wash" />

        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <span className="eyebrow"><Sparkles size={16} /> Workforce management platform</span>
            <h1><SplitHeadline>Calm systems for serious teams.</SplitHeadline></h1>
            <p>
              Tech Solutions organizes employee records, attendance, payroll readiness and daily operations into a focused digital workspace for growing teams.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#solutions">Explore services <ArrowRight size={18} /></a>
              <a className="button ghost" href="#workflow">View workflow</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="service-ticker" aria-label="Tech Solutions services">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" aria-hidden={group === 1} key={group}>
              {services.map((item) => (
                <span key={`${group}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="stats-band">
        {stats.map((stat, index) => (
          <motion.article key={stat.label} {...fadeUp(index * 0.08)}>
            <CountUp value={stat.value} suffix={stat.suffix} />
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </section>

      <section className="section intro-split" id="solutions">
        <motion.div className="section-copy" {...fadeUp()}>
          <span className="eyebrow dark">Built like a product</span>
          <h2><SplitHeadline>Operational clarity without visual noise.</SplitHeadline></h2>
          <p>
            A focused landing page for a technology service business: clean sections, measured motion, strong content hierarchy and a practical product story.
          </p>
        </motion.div>
        <motion.div className="stacked-preview" {...fadeUp(0.14)}>
          <div><Image src="/media/parallax1.jpg" alt="Operations dashboard preview" width={720} height={430} /></div>
          <div><Image src="/media/system.jpg" alt="System workspace preview" width={720} height={430} /></div>
          <div><Image src="/media/app.jpg" alt="Application preview" width={720} height={430} /></div>
        </motion.div>
      </section>

      <ServiceScrollSection />

      <section className="section workflow-section" id="workflow">
        <motion.div className="section-copy narrow" {...fadeUp()}>
          <span className="eyebrow dark"><Workflow size={16} /> Workflow</span>
          <h2><SplitHeadline>A slower, clearer path from raw data to better decisions.</SplitHeadline></h2>
        </motion.div>
        <div className="timeline-grid">
          {workflow.map(([step, title, text], index) => (
            <motion.article key={step} {...fadeUp(index * 0.1)}>
              <span>{step}</span>
              <i><Clock3 size={18} /> Phase {index + 1}</i>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section image-story">
        <motion.div className="story-media" {...fadeUp()}>
          <Image src="/media/parallax.jpg" alt="Team technology workspace" width={900} height={760} />
        </motion.div>
        <motion.div className="story-card" {...fadeUp(0.12)}>
          <span className="eyebrow dark"><PanelsTopLeft size={16} /> Dashboard mentality</span>
          <h2><SplitHeadline>Designed for managers who need signal, not clutter.</SplitHeadline></h2>
          <p>
            Clear cards, fast status, structured actions and content that feels grounded. The interface presents the value of the system without unnecessary effects.
          </p>
          <a className="inline-link" href="#pricing">See packages <ChevronRight size={18} /></a>
        </motion.div>
      </section>

      <section className="section pricing" id="pricing">
        <motion.div className="section-copy center" {...fadeUp()}>
          <span className="eyebrow dark"><BadgeCheck size={16} /> Packages</span>
          <h2><SplitHeadline>Simple plans for serious operations.</SplitHeadline></h2>
        </motion.div>
        <div className="pricing-grid">
          {pricing.map(([title, price, text], index) => (
            <motion.article className={index === 1 ? "price-card featured" : "price-card"} key={title} {...fadeUp(index * 0.08)}>
              <small>{title}</small>
              <strong>{price}<span>/mo</span></strong>
              <p>{text}</p>
              <a href="#contact">Request plan <ArrowRight size={17} /></a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact-zone" id="contact">
        <motion.div className="contact-panel" {...fadeUp()}>
          <span className="eyebrow dark"><Globe2 size={16} /> Start the conversation</span>
          <h2><SplitHeadline>Tell us what your team needs next.</SplitHeadline></h2>
          <p>
            This static portfolio version can later connect to email, CRM, Supabase or any backend API. For now, it presents the flow clearly for Vercel deployment.
          </p>
          <div className="contact-links">
            <a href="mailto:lindihyseni7@gmail.com"><Mail /> lindihyseni7@gmail.com</a>
            <a href="tel:+38344111222"><Phone /> +383 44 111 222</a>
          </div>
        </motion.div>
        <motion.form className="contact-form" {...fadeUp(0.12)} onSubmit={(event) => event.preventDefault()}>
          <label>Name<input placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@company.com" /></label>
          <label>Project type<input placeholder="HR, payroll, operations..." /></label>
          <label>Message<textarea placeholder="What should the system solve?" /></label>
          <button type="submit">Preview request <LockKeyhole size={17} /></button>
        </motion.form>
      </section>

      <footer className="footer">
        <div>
          <a className="brand" href="#home"><span><Rocket size={20} /></span><strong>Tech Solutions</strong></a>
          <p>Static technology landing page built with Next.js, TypeScript, React and measured motion.</p>
        </div>
        <div>
          <a href="#solutions">Solutions</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <p>Developed by Arlind Hyseni with AI-assisted design and development.</p>
      </footer>
    </main>
  );
}
