export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-8">
      <div className="container-px mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} CoreMentors. All rights reserved.
          </p>
          <div className="text-sm text-gray-600">
            <a href="/privacy" className="hover:text-gold">Privacy</a>
            <span className="mx-2">•</span>
            <a href="/terms" className="hover:text-gold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


