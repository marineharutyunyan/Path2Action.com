import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import ddiLogo from "@/assets/ddi-logo.png";
import civicusLogo from "@/assets/civicus-logo.png";
import metamorphosisLogo from "@/assets/metamorphosis-logo.png";
import cliLogo from "@/assets/cli-logo.png";
import apyLogo from "@/assets/apy-logo.svg";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const partners = [
    { src: civicusLogo, alt: "CIVICUS", height: "h-14 md:h-16" },
    { src: metamorphosisLogo, alt: "Metamorphosis Foundation", height: "h-18 md:h-20" },
    { src: cliLogo, alt: "Civic Literacy Initiative", height: "h-18 md:h-20" },
    { src: apyLogo, alt: "APY", height: "h-14 md:h-16" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Partners Banner */}
<div className="border-b border-border py-10" style={{ backgroundColor: "#fefefe" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center mb-8">
            <img
              src={ddiLogo}
              alt="Digital Democracy Initiative"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <img
                key={partner.alt}
                src={partner.src}
                alt={partner.alt}
                className={`${partner.height} object-contain opacity-70 hover:opacity-100 transition-opacity duration-300`}
              />
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Path2Action is a project developed under the{" "} Digital Democracy Initiative (DDI)<br />Implemented by  CIVICUS,{" "} Metamorphosis Foundation, and the{" "} Civic Literacy Initiative (CLI), with the support of  APY.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <NavLink
              to="/"
              className="flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={ddiLogo} alt="Digital Democracy Initiative" className="h-8 object-contain" />
            </NavLink>
            <p className="text-sm text-muted-foreground">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#how-it-works"
                  onClick={(e) => handleSectionClick(e, "how-it-works")}
                  className="text-muted-foreground hover:text-primary transition-base cursor-pointer"
                >
                  {nav.howItWorks}
                </a>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-base"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  {nav.about}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t.support}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-base"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  {t.contactUs}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className="text-muted-foreground hover:text-primary transition-base"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  {t.faq}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-base"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  {t.privacyPolicy}
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="text-muted-foreground hover:text-primary transition-base">
                  {t.termsOfService}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
