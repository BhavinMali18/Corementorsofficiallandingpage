"use client";
import Button from "../../components/Button";

export default function AuthPage() {
  return (
    <section className="container-px mx-auto py-16">
      <div className="mx-auto max-w-md rounded-xl border border-[hsl(var(--border))] bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="mt-1 text-sm text-gray-600">Create an account or sign in to continue.</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input type="email" required className="w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gold" placeholder="you@company.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input type="password" required className="w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gold" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a className="text-gray-600 hover:text-gold" href="#">Forgot password?</a>
            </div>
          </div>
          <Button type="submit" className="h-10 w-full">Continue</Button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">
          By continuing, you agree to our <a href="/terms" className="underline hover:text-gold">Terms</a> and <a href="/privacy" className="underline hover:text-gold">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}


