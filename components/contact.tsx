import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border/50 bg-card/20 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Start a live chat for information and assistance, or reach out
            directly through any of the channels below.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <ContactCard
            icon={Mail}
            title="Email"
            detail="info@espcloud.co"
            href="mailto:info@espcloud.co"
          />
          <ContactCard
            icon={Phone}
            title="South Africa"
            detail="086 099 4163"
            href="tel:0860994163"
            extra={
              <>
                <span className="mt-1 block text-xs text-muted-foreground">
                  Middle East: +965 69691312
                </span>
                <span className="block text-xs text-muted-foreground">
                  International: +27 21 200 5994
                </span>
              </>
            }
          />
          <ContactCard
            icon={MapPin}
            title="Office"
            detail="Strand Street, Cape Town"
            href="https://maps.google.com?q=Strand+Street+Cape+Town+South+Africa"
            extra={
              <span className="mt-1 block text-xs text-muted-foreground">
                South Africa, Africa
              </span>
            }
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Monday to Friday, 8am to 5pm SAST
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  detail,
  href,
  extra,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail: string;
  href: string;
  extra?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-6 text-center transition-all hover:border-primary/30 hover:bg-card"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
      {extra}
    </a>
  );
}
