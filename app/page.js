"use client";
import Button from "../components/Button";
import { DrawLineText } from "../components/gsap/draw-line-text";
import LogoLoop from "../components/LogoLoop";

export default function HomePage() {
  const techLogos = [
    { node: <span className="text-2xl font-bold text-gold">React</span>, title: "React" },
    { node: <span className="text-2xl font-bold text-gold">Next.js</span>, title: "Next.js" },
    { node: <span className="text-2xl font-bold text-gold">TypeScript</span>, title: "TypeScript" },
    { node: <span className="text-2xl font-bold text-gold">AWS</span>, title: "AWS" },
    { node: <span className="text-2xl font-bold text-gold">Azure</span>, title: "Azure" },
    { node: <span className="text-2xl font-bold text-gold">Docker</span>, title: "Docker" },
    { node: <span className="text-2xl font-bold text-gold">Kubernetes</span>, title: "Kubernetes" },
    { node: <span className="text-2xl font-bold text-gold">Python</span>, title: "Python" },
    { node: <span className="text-2xl font-bold text-gold">Node.js</span>, title: "Node.js" },
    { node: <span className="text-2xl font-bold text-gold">MongoDB</span>, title: "MongoDB" }
  ];

  return (
    <>
      <section className="container-px mx-auto pt-10 sm:pt-16 pb-12 sm:pb-16 min-h-[70vh] flex items-center">
        <div className="mx-auto w-full max-w-4xl text-center">
          <span className="inline-block rounded-full border border-gold/40 px-3 py-1 text-xs font-medium text-gold">
            Enterprise-grade IT Services
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Build, scale and secure your digital business with
          </h1>
          <div className="mt-2 max-w-full">
            <DrawLineText className="mx-auto" fontSize={96} strokeWidth={2} text="CoreMentors" color="hsl(var(--gold))" />
          </div>
          <p className="mt-4 mx-auto max-w-2xl text-gray-600">
            From strategy to delivery: product engineering, cloud & DevOps, data & AI,
            cybersecurity, and managed support—tailored to your goals.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button as="a" href="/auth" variant="primary" className="h-11 px-6">
              Signup/Signin
            </Button>
            <Button as="a" href="/join-team" variant="outline" className="h-11 px-6">
              JOIN TEAM
            </Button>
          </div>
          <p className="mt-3 text-xs text-gray-500">No sales fluff. Outcomes, on-time, on-budget.</p>
        </div>
      </section>

      <section className="container-px mx-auto py-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">Technologies We Work With</h2>
          <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </section>

      <section className="container-px mx-auto py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Consulting", desc: "Discovery, roadmaps, and solution architecture." },
            { title: "Custom Development", desc: "Full-stack engineering with quality at speed." },
            { title: "Cloud & DevOps", desc: "IaC, CI/CD, observability, cost optimization." },
            { title: "AI Enablement", desc: "Copilots, RAG, MLOps, intelligent automation." },
            { title: "Cybersecurity", desc: "Threat modeling, hardening, vulnerability management." },
            { title: "Managed Services", desc: "SLA-driven support and ongoing improvements." }
          ].map((card) => (
            <article key={card.title} className="rounded-xl border border-[hsl(var(--border))] bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{card.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto py-12 sm:py-16">
        <div className="rounded-xl border border-[hsl(var(--border))] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Modular Services Architecture</h2>
          <p className="mt-2 max-w-prose text-gray-600">
            Start with what you need and scale as you grow. Our services are delivered as independent, composable modules that
            integrate cleanly—minimizing risk and maximizing value.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Strategy Module", desc: "Discovery, ROI models, roadmaps, architecture baselines." },
              { title: "Build Module", desc: "Cross-functional squads deliver features iteratively." },
              { title: "Operate Module", desc: "SRE, observability, hardening, cost and reliability." }
            ].map((m) => (
              <div key={m.title} className="rounded-lg border border-[hsl(var(--border))] p-4">
                <h3 className="text-sm font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto pb-16">
        <div className="rounded-xl border border-[hsl(var(--border))] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Agile Delivery Model</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-4">
            {[
              { step: "1. Plan", desc: "Outcome mapping, backlog, Definition of Ready." },
              { step: "2. Build", desc: "Short sprints, trunk-based development, CI/CD." },
              { step: "3. Validate", desc: "Automated tests, demos, UAT, security checks." },
              { step: "4. Learn", desc: "Metrics, retros, iterate on what matters." }
            ].map((s) => (
              <div key={s.step} className="rounded-lg border border-[hsl(var(--border))] p-4">
                <h3 className="text-sm font-semibold">{s.step}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button as="a" href="/join-team" variant="primary" className="h-11 px-6">
              Work the Agile way — JOIN TEAM
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}


