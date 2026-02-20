import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            Trusted for over 30 years across Africa
          </span>
        </div>

        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          The complete platform to{" "}
          <span className="text-primary">manage your business</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Appointment scheduling, point of sale, online bookings, stock control,
          and business intelligence. Manage your salon, spa, or wellness centre
          anywhere, anytime, on any device.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Get started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#features"
            className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Explore features
          </Link>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mt-16 w-full max-w-5xl lg:mt-20">
          <div className="rounded-xl border border-border/60 bg-card/50 p-1.5 shadow-2xl shadow-primary/5">
            <div className="rounded-lg border border-border/40 bg-card">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border/40 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                </div>
                <div className="mx-auto rounded-md bg-secondary/70 px-16 py-1">
                  <span className="text-[10px] text-muted-foreground">
                    play.espcloud.co
                  </span>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6 md:p-8">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top row stats */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "Today's Revenue", value: "R 12,450", change: "+12%" },
          { label: "Appointments", value: "38", change: "+5%" },
          { label: "Walk-ins", value: "12", change: "+8%" },
          { label: "Products Sold", value: "67", change: "+15%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border/40 bg-secondary/30 p-3 md:p-4"
          >
            <p className="text-[10px] font-medium text-muted-foreground md:text-xs">
              {stat.label}
            </p>
            <p className="mt-1 text-lg font-bold text-foreground md:text-xl">
              {stat.value}
            </p>
            <span className="text-[10px] font-medium text-primary md:text-xs">
              {stat.change}
            </span>
          </div>
        ))}
      </div>
      {/* Chart area */}
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex-1 rounded-lg border border-border/40 bg-secondary/20 p-4">
          <p className="text-xs font-medium text-muted-foreground">
            Weekly Revenue
          </p>
          <div className="mt-4 flex items-end gap-1.5">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-primary/60"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <span
                key={d}
                className="flex-1 text-center text-[9px] text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full rounded-lg border border-border/40 bg-secondary/20 p-4 md:w-64">
          <p className="text-xs font-medium text-muted-foreground">
            Upcoming Appointments
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {[
              { time: "09:00", name: "Sarah M.", service: "Cut & Colour" },
              { time: "10:30", name: "James K.", service: "Beard Trim" },
              { time: "11:00", name: "Lisa W.", service: "Full Treatment" },
              { time: "13:00", name: "Peter R.", service: "Highlights" },
            ].map((apt) => (
              <div
                key={apt.time}
                className="flex items-center gap-3 rounded-md bg-secondary/40 px-3 py-2"
              >
                <span className="text-[10px] font-mono font-medium text-primary">
                  {apt.time}
                </span>
                <div className="flex-1">
                  <p className="text-[11px] font-medium text-foreground">
                    {apt.name}
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    {apt.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
