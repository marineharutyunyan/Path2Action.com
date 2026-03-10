import ddiLogo from "@/assets/ddi-logo.png";
import civicusLogo from "@/assets/civicus-logo.png";
import metamorphosisLogo from "@/assets/metamorphosis-logo.png";
import cliLogo from "@/assets/cli-logo.png";
import apyLogo from "@/assets/apy-logo.svg";

export const PartnersSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* DDI Main Logo */}
        <div className="flex flex-col items-center mb-14">
          <div className="px-8 py-6 rounded-2xl bg-card shadow-soft border border-border/50">
            <img
              src={ddiLogo}
              alt="Digital Democracy Initiative"
              className="h-14 md:h-18 object-contain"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-16 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Partners
          </span>
          <div className="h-px w-16 bg-border" />
        </div>

        {/* Partner Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {[
            { src: civicusLogo, alt: "CIVICUS", height: "h-16 md:h-20" },
            { src: metamorphosisLogo, alt: "Metamorphosis Foundation", height: "h-12 md:h-14" },
            { src: cliLogo, alt: "Civic Literacy Initiative", height: "h-12 md:h-14" },
            { src: apyLogo, alt: "APY", height: "h-8 md:h-10" },
          ].map((partner) => (
            <div
              key={partner.alt}
              className="group px-6 py-4 rounded-xl bg-card/60 border border-border/40 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className={`${partner.height} object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-14 max-w-2xl mx-auto">
          <p className="text-center text-sm text-muted-foreground leading-relaxed">
            Path2Action is a project developed under the{" "}
            <span className="font-medium text-foreground">Digital Democracy Initiative (DDI)</span>,
            implemented by{" "}
            <span className="font-medium text-foreground">CIVICUS</span>,{" "}
            <span className="font-medium text-foreground">Metamorphosis Foundation</span>, and the{" "}
            <span className="font-medium text-foreground">Civic Literacy Initiative (CLI)</span>,
            with the support of{" "}
            <span className="font-medium text-foreground">APY</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
