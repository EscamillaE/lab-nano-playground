import {
  Calendar,
  ShoppingCart,
  Users,
  Package,
  Globe,
  Store,
  BarChart3,
  Building2,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "Manage staff rosters and bookings with SMS and email appointment notifications.",
  },
  {
    icon: ShoppingCart,
    title: "Point Of Sale",
    description:
      "Product and service sales with day end cash up balance and turnover reports.",
  },
  {
    icon: Users,
    title: "Client Records",
    description:
      "Keep accurate records of client contact information for sales and bookings.",
  },
  {
    icon: Package,
    title: "Stock Control",
    description:
      "Maintain optimum stock levels with supplier orders, receiving, counts, and exception reports.",
  },
  {
    icon: Globe,
    title: "Online Bookings",
    description:
      "Clients book at any time on any device with optional deposit payments.",
  },
  {
    icon: Store,
    title: "Online Store",
    description:
      "Sell retail items online with collect in store, delivery management, and integrated stock control.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "A three-year overview of your business with drill-down into client visit and spending trends.",
  },
  {
    icon: Building2,
    title: "Multi-Branch",
    description:
      "Centralised management of branches and groups for staff and price lists.",
  },
  {
    icon: Shield,
    title: "Security Roles",
    description:
      "Manage staff access to all features by assigning curated and custom roles with permissions.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to run your business
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            ESP Nano includes all of the inherent knowledge and reliability from
            the most trusted name in the industry with the ease and simplicity of
            cloud-based software.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
