import { CheckCircle2 } from "lucide-react";

const reasons = [
  "9 out of 10 consultants recommend ESP Salon & Spa Solutions",
  "More staff are trained on ESP than all other systems combined",
  "30+ years dedicated to the wellness industry",
  "Cloud-native: access from any device, anywhere",
  "Trusted across Africa, the Middle East, and internationally",
  "Dedicated support and comprehensive training academy",
];

export function About() {
  return (
    <section id="about" className="border-t border-border/50 bg-card/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
          <div className="flex-1">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Why ESP Cloud
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The system your staff love
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Recognised industry wide, ESP has been the trusted name in wellness
              point of service for over three decades. With ESP Cloud, your team
              gets direct access to their schedule from their phone, and you get
              complete visibility over your entire business.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Enable your tech-savvy clients to make online bookings 24 hours a
              day, 365 days a year. Issue and redeem loyalty rewards to keep them
              coming back. Track retail and professional stock to ensure nothing
              falls through the cracks.
            </p>
          </div>
          <div className="w-full flex-1">
            <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Why businesses choose ESP
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
