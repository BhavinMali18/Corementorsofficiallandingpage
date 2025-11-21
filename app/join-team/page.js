"use client";
import Button from "../../components/Button";

export default function JoinTeamPage() {
  return (
    <section className="container-px mx-auto py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight">Join the CoreMentors Team</h1>
        <p className="mt-2 text-gray-600">
          We’re hiring engineers, architects, PMs, designers, and security specialists.
        </p>

        <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium">Full name</label>
            <input type="text" required className="w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gold" placeholder="Jane Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input type="email" required className="w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gold" placeholder="jane@domain.com" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium">Role</label>
            <select className="w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gold">
              <option>Software Engineer</option>
              <option>DevOps / SRE</option>
              <option>Data / ML Engineer</option>
              <option>Security Engineer</option>
              <option>Product Manager</option>
              <option>Designer</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium">Experience</label>
            <select className="w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gold">
              <option>0-1 years</option>
              <option>2-4 years</option>
              <option>5-8 years</option>
              <option>9+ years</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium">LinkedIn / Portfolio</label>
            <input type="url" className="w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gold" placeholder="https://linkedin.com/in/..." />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium">About you</label>
            <textarea rows="5" className="w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gold" placeholder="Tell us about your impact, tools, and interests"></textarea>
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" className="h-11 w-full sm:w-auto px-6">Submit Application</Button>
          </div>
        </form>
      </div>
    </section>
  );
}


