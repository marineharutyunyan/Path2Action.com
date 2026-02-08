import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-creative bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            {/* Table of Contents */}
            <section className="bg-muted/30 rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-foreground">What's in These Terms of Service?</h2>
              <p className="text-muted-foreground mb-4">These Terms of Service are divided into the following sections:</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><a href="#introduction" className="hover:text-primary transition-colors">Introduction</a></li>
                <li><a href="#when-apply" className="hover:text-primary transition-colors">When Do These Terms Apply?</a></li>
                <li><a href="#where-apply" className="hover:text-primary transition-colors">Where Do These Terms Apply?</a></li>
                <li><a href="#change-services" className="hover:text-primary transition-colors">Will Path2Action Change the Services?</a></li>
                <li><a href="#change-terms" className="hover:text-primary transition-colors">Will Path2Action Change These Terms?</a></li>
                <li><a href="#charges" className="hover:text-primary transition-colors">Does Path2Action Charge for the Services?</a></li>
                <li><a href="#ownership" className="hover:text-primary transition-colors">Who Owns the Services?</a></li>
                <li><a href="#permitted-uses" className="hover:text-primary transition-colors">What Are Permitted Uses of the Services?</a></li>
                <li><a href="#ai-features" className="hover:text-primary transition-colors">Do Any Terms Apply Specifically to Using AI Features?</a></li>
                <li><a href="#effect-termination" className="hover:text-primary transition-colors">When Do These Terms Take Effect? When Do They Terminate?</a></li>
                <li><a href="#linked-services" className="hover:text-primary transition-colors">Who Is Responsible for Linked Services and Venues?</a></li>
                <li><a href="#liability" className="hover:text-primary transition-colors">How Is Path2Action's Liability Limited Under These Terms?</a></li>
                <li><a href="#communication" className="hover:text-primary transition-colors">How Will Path2Action Communicate with Users?</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">How Do I Contact Path2Action?</a></li>
                <li><a href="#miscellaneous" className="hover:text-primary transition-colors">Miscellaneous</a></li>
                <li><a href="#dispute-resolution" className="hover:text-primary transition-colors">Dispute Resolution</a></li>
                <li><a href="#jurisdiction" className="hover:text-primary transition-colors">Jurisdiction-Specific Terms</a></li>
              </ol>
            </section>

            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Path2Action ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the Path2Action platform, including our website, tools, features, interactive map, and any related services (collectively, the "Services").
              </p>
              <p className="text-muted-foreground mb-4">
                Path2Action is a civic-tech planning tool designed to help users structure, plan, and organize civic initiatives and events through guided steps, planning tools, and informational resources.
              </p>
              <p className="text-muted-foreground">
                By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, please do not use the Services.
              </p>
            </section>

            {/* 2. When Do These Terms Apply? */}
            <section id="when-apply" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. When Do These Terms Apply?</h2>
              <p className="text-muted-foreground mb-4">These Terms apply whenever you:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Visit the Path2Action website</li>
                <li>Use planning tools or interactive features</li>
                <li>Browse venues or event locations</li>
                <li>Access AI-assisted planning materials</li>
              </ul>
              <p className="text-muted-foreground">They apply whether or not you create an account in the future.</p>
            </section>

            {/* 3. Where Do These Terms Apply? */}
            <section id="where-apply" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Where Do These Terms Apply?</h2>
              <p className="text-muted-foreground mb-4">These Terms apply to all digital services operated by Path2Action, including:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Our website and web-based tools</li>
                <li>Interactive maps and filters</li>
                <li>Any future mobile or desktop applications that link to these Terms</li>
              </ul>
            </section>

            {/* 4. Will Path2Action Change the Services? */}
            <section id="change-services" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Will Path2Action Change the Services?</h2>
              <p className="text-muted-foreground mb-4">Yes. We may modify, update, add, or remove features of the Services at any time.</p>
              <p className="text-muted-foreground mb-4">This may include:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Changes to planning steps or workflows</li>
                <li>Updates to map data or filters</li>
                <li>Introduction of AI-generated materials or templates</li>
              </ul>
              <p className="text-muted-foreground">We do not guarantee that any specific feature will always be available.</p>
            </section>

            {/* 5. Will Path2Action Change These Terms? */}
            <section id="change-terms" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Will Path2Action Change These Terms?</h2>
              <p className="text-muted-foreground mb-4">Yes. We may update these Terms from time to time.</p>
              <p className="text-muted-foreground mb-4">When changes are made:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>The "Effective Date" will be updated</li>
                <li>Continued use of the Services means you accept the revised Terms</li>
              </ul>
              <p className="text-muted-foreground">If required by law, we will provide additional notice of material changes.</p>
            </section>

            {/* 6. Does Path2Action Charge for the Services? */}
            <section id="charges" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Does Path2Action Charge for the Services?</h2>
              <p className="text-muted-foreground mb-4">At this stage, the Services are offered free of charge.</p>
              <p className="text-muted-foreground mb-4">We may introduce paid features or partnerships in the future. If so:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Pricing will be clearly disclosed</li>
                <li>Additional terms may apply</li>
              </ul>
            </section>

            {/* 7. Who Owns the Services? */}
            <section id="ownership" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Who Owns the Services?</h2>
              <p className="text-muted-foreground mb-4">
                All content and functionality of the Services, excluding user-submitted content, are owned by or licensed to Path2Action, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Platform design and structure</li>
                <li>Software and code</li>
                <li>Maps, filters, and planning logic</li>
                <li>AI-generated templates and materials</li>
              </ul>
              <p className="text-muted-foreground">
                You may not copy, modify, distribute, or reuse any part of the Services without prior written permission.
              </p>
            </section>

            {/* 8. What Are Permitted Uses of the Services? */}
            <section id="permitted-uses" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. What Are Permitted Uses of the Services?</h2>
              <p className="text-muted-foreground mb-4">You may use the Services only for lawful, non-harmful purposes.</p>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use the Services for illegal or misleading activities</li>
                <li>Upload false or deceptive event information</li>
                <li>Scrape, extract, or resell platform data</li>
                <li>Interfere with the platform's security or performance</li>
              </ul>
            </section>

            {/* 9. Do Any Terms Apply Specifically to Using AI Features? */}
            <section id="ai-features" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Do Any Terms Apply Specifically to Using AI Features?</h2>
              <p className="text-muted-foreground mb-4">Yes. Path2Action may provide AI-generated suggestions, templates, or planning materials.</p>
              <p className="text-muted-foreground mb-4">You acknowledge that:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>AI outputs are informational and assistive only</li>
                <li>You are responsible for reviewing and adapting AI-generated content</li>
                <li>Path2Action does not guarantee accuracy, legality, or suitability of AI outputs</li>
              </ul>
              <p className="text-muted-foreground">AI features do not replace professional, legal, or organizational advice.</p>
            </section>

            {/* 10. When Do These Terms Take Effect? When Do They Terminate? */}
            <section id="effect-termination" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. When Do These Terms Take Effect? When Do They Terminate?</h2>
              <p className="text-muted-foreground mb-4">These Terms take effect when you first access the Services.</p>
              <p className="text-muted-foreground mb-4">They remain in effect until:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>You stop using the Services, or</li>
                <li>We suspend or terminate access due to violations</li>
              </ul>
              <p className="text-muted-foreground">Certain sections, including ownership, liability, and dispute resolution, survive termination.</p>
            </section>

            {/* 11. Who Is Responsible for Linked Services and Venues? */}
            <section id="linked-services" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Who Is Responsible for Linked Services and Venues?</h2>
              <p className="text-muted-foreground mb-4">Path2Action may display third-party venues, locations, or external links.</p>
              <p className="text-muted-foreground mb-4">We are not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Venue availability, pricing accuracy, or conditions</li>
                <li>Event cancellations or changes</li>
                <li>Actions or omissions of third-party venue owners</li>
              </ul>
              <p className="text-muted-foreground">All interactions with third parties are at your own risk.</p>
            </section>

            {/* 12. How Is Path2Action's Liability Limited Under These Terms? */}
            <section id="liability" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. How Is Path2Action's Liability Limited Under These Terms?</h2>
              <p className="text-muted-foreground mb-4">To the maximum extent permitted by law:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>The Services are provided "as is" and "as available"</li>
                <li>We do not guarantee outcomes, event success, or accuracy of information</li>
                <li>Path2Action is not liable for indirect, incidental, or consequential damages</li>
              </ul>
              <p className="text-muted-foreground">Participation in civic events or initiatives planned through the platform is at your own risk.</p>
            </section>

            {/* 13. How Will Path2Action Communicate with Users? */}
            <section id="communication" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">13. How Will Path2Action Communicate with Users?</h2>
              <p className="text-muted-foreground mb-4">We may communicate with users through:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Website notices</li>
                <li>Email (if provided)</li>
                <li>In-platform messages</li>
              </ul>
              <p className="text-muted-foreground">These communications may include service updates or important information related to the Services.</p>
            </section>

            {/* 14. How Do I Contact Path2Action? */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">14. How Do I Contact Path2Action?</h2>
              <p className="text-muted-foreground mb-4">For questions or concerns about these Terms, contact us at:</p>
              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong> contact@path2action.org<br />
                  <strong className="text-foreground">Project:</strong> Path2Action
                </p>
              </div>
            </section>

            {/* 15. Miscellaneous */}
            <section id="miscellaneous" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Miscellaneous</h2>
              <p className="text-muted-foreground mb-4">
                If any part of these Terms is found unenforceable, the remaining provisions will remain in full force.
              </p>
              <p className="text-muted-foreground">
                Failure to enforce any right does not constitute a waiver of that right.
              </p>
            </section>

            {/* 16. Dispute Resolution */}
            <section id="dispute-resolution" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">16. Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes arising out of or related to these Terms or the Services will be governed by applicable laws and resolved in the appropriate courts, unless otherwise required by law.
              </p>
            </section>

            {/* 17. Jurisdiction-Specific Terms */}
            <section id="jurisdiction" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">17. Jurisdiction-Specific Terms</h2>
              <p className="text-muted-foreground mb-4">
                Additional terms may apply depending on the user's location.
              </p>
              <p className="text-muted-foreground">
                Where local laws require different terms, those laws will prevail.
              </p>
            </section>

            {/* Effective Date */}
            <section className="bg-muted/30 rounded-xl p-6 border border-border mt-12">
              <p className="text-muted-foreground text-center">
                <strong className="text-foreground">Effective Date:</strong> January 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
