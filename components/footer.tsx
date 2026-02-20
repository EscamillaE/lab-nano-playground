import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold tracking-tight text-primary-foreground">
                ES
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-foreground">
                ESP Cloud
              </span>
              <span className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground">
                Nano
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="https://espcloud.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Website
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© "}{new Date().getFullYear()}{" ESP Cloud. All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground">
            {"Africa's most widely used Point Of Service system"}
          </p>
        </div>
      </div>
    </footer>
  );
}
