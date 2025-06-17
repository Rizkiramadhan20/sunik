import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Pattern Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#grid)" />
      </svg>
      <div className="w-[90%] max-w-md p-12 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          <div className="space-y-3 text-center">
            <h1 className="text-2xl font-medium text-foreground">
              Website Resmi Telah Berpindah
            </h1>
            <p className="text-muted-foreground">
              Maaf, untuk sekarang website resmi telah berpindah ke:
            </p>
          </div>

          <Button
            variant="ghost"
            className="group relative px-6 py-2 text-base font-normal hover:bg-primary/10"
            asChild
          >
            <a
              href="https://sunikyohan.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary"
            >
              <span>https://sunikyohan.my.id</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
