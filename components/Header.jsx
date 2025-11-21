import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md">
      <div className="container-px mx-auto">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <span className="inline-block h-3 w-3 rounded-sm bg-gold" />
            <span className="text-lg font-bold tracking-tight">CoreMentors</span>
          </a>
          <nav className="flex items-center gap-3">
            <Button as="a" href="/auth" variant="outline" className="h-9 px-4 bg-transparent border-white/20 text-white hover:bg-white/10">
              Signup/Signin
            </Button>
            <Button as="a" href="/join-team" variant="primary" className="h-9 px-4 bg-gold text-white hover:bg-gold/90">
              JOIN TEAM
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}


