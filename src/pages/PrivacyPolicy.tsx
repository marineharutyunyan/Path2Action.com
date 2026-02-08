import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-12 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-creative bg-clip-text text-transparent">
            Path2Action Privacy Policy
          </h1>

          <p className="text-muted-foreground mb-6">
            Path2Action ("Path2Action", "we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect personal information when you use our website, applications, and services (collectively, the "Services").
          </p>

          <p className="text-muted-foreground mb-8">
            Our privacy practices are guided by the following principles:
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Transparency</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Respect</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Trust</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Fairness</span>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. When Does This Privacy Policy Apply?
            </h2>
            <p className="text-muted-foreground">
              This Privacy Policy applies from the effective date listed above and governs personal information collected through Path2Action Services from that date forward.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Where Does This Privacy Policy Apply?
            </h2>
            <p className="text-muted-foreground mb-4">
              This Privacy Policy applies to personal information collected from users of our Services worldwide, including through:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Our website and web-based tools</li>
              <li>Email, messaging, and support communications</li>
              <li>Online and offline events organized by Path2Action</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. What Personal Information Does Path2Action Collect and Why?
            </h2>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
              a. Information You Provide to Us
            </h3>
            <p className="text-muted-foreground mb-3">
              We collect personal information you voluntarily provide, such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
              <li>Name, email address, phone number</li>
              <li>Account credentials</li>
              <li>Profile information</li>
              <li>Feedback, messages, and survey responses</li>
              <li>Applications for programs, events, or partnerships</li>
            </ul>
            <p className="text-muted-foreground">
              We use this information to operate the Services, communicate with you, and provide support.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
              b. Information Automatically Collected
            </h3>
            <p className="text-muted-foreground mb-3">
              When you use our Services, we automatically collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and actions taken</li>
              <li>Date/time of access</li>
              <li>Cookies and similar technologies</li>
            </ul>
            <p className="text-muted-foreground">
              This helps us improve functionality, security, and user experience.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
              c. Information from Third Parties
            </h3>
            <p className="text-muted-foreground mb-3">
              We may receive information from:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
              <li>Partners, collaborators, or event co-hosts</li>
              <li>Analytics and service providers</li>
              <li>Social platforms if you connect through them</li>
            </ul>
            <p className="text-muted-foreground">
              We use this data to improve and personalize our Services.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
              d. Information Collected With Consent
            </h3>
            <p className="text-muted-foreground">
              When required by law, we collect certain data only with your explicit consent (e.g., marketing communications, optional features, or beta testing).
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. How Does Path2Action Use Personal Information?
            </h2>
            <p className="text-muted-foreground mb-3">
              We use personal information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide and improve our Services</li>
              <li>Manage user accounts and participation</li>
              <li>Communicate updates, opportunities, and announcements</li>
              <li>Analyze usage and improve platform performance</li>
              <li>Ensure safety, prevent fraud, and comply with legal obligations</li>
              <li>Promote Path2Action initiatives (with consent where required)</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-muted-foreground mb-3">
              Path2Action uses cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
              <li>Remember preferences</li>
              <li>Understand how users interact with the platform</li>
              <li>Improve performance and content</li>
            </ul>
            <p className="text-muted-foreground">
              You can manage cookies through your browser settings. Disabling cookies may limit some features.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. How We Share Personal Information
            </h2>
            <p className="text-muted-foreground mb-3">
              We may share personal information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
              <li>Service providers who support platform operations</li>
              <li>Partners involved in programs or events you join</li>
              <li>Legal or regulatory authorities when required by law</li>
              <li>Other users, only when you choose to share information publicly</li>
            </ul>
            <p className="text-muted-foreground font-medium">
              We do not sell personal information.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. How We Protect Personal Information
            </h2>
            <p className="text-muted-foreground">
              We use administrative, technical, and organizational safeguards to protect personal information from unauthorized access, loss, or misuse. However, no system is 100% secure.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. How Long We Retain Personal Information
            </h2>
            <p className="text-muted-foreground mb-3">
              We retain personal information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
              <li>As long as your account is active</li>
              <li>As needed to provide Services</li>
              <li>To meet legal, accounting, or regulatory requirements</li>
            </ul>
            <p className="text-muted-foreground">
              When no longer needed, data is deleted or anonymized.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Your Privacy Rights and Choices
            </h2>
            <p className="text-muted-foreground mb-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
              <li>Request data portability</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Children's Privacy
            </h2>
            <p className="text-muted-foreground">
              Path2Action does not knowingly collect personal information from children under 13 (or the age required by local law). If we become aware of such data, we will delete it promptly.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. International Data Transfers
            </h2>
            <p className="text-muted-foreground">
              We may process and store personal information in countries different from where you live. We use appropriate safeguards to protect your information in compliance with applicable laws (including contractual protections).
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. The updated version will be posted on our Services with a new effective date.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Effective Date:</strong> January 24, 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
