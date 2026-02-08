import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { VenueCard } from "@/components/VenueCard";
import { VenueMap } from "@/components/VenueMap";
import { venues } from "@/data/venues";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Venues = () => {
  const [hoveredVenueId, setHoveredVenueId] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language].venues;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 min-h-[600px]">
          {/* Venue Cards - Left Side */}
          <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t.partnerLocations}
            </h2>
            {venues.map((venue) => (
              <VenueCard
                key={venue.id}
                venue={venue}
                isHovered={hoveredVenueId === venue.id}
                onHover={setHoveredVenueId}
                language={language}
              />
            ))}
          </div>

          {/* Map - Right Side */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="sticky top-24 h-[500px] lg:h-[600px]">
              <VenueMap
                hoveredVenueId={hoveredVenueId}
                onMarkerHover={setHoveredVenueId}
                language={language}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Venues;
