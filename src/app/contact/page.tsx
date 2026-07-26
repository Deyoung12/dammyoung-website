"use client";

import { useState } from "react";
import { Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwvgwnok", {  // ← Put your real Formspree ID here
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-orange-500 font-medium mb-4">Contact</p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Let’s build something<br />extraordinary
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your project. We’ll respond within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in touch</h3>
                  <div className="space-y-4 text-gray-600">
                    <a
                      href="mailto:contact@dammyoung.com"
                      className="flex items-center gap-3 hover:text-orange-500 transition"
                    >
                      <Mail size={18} className="text-orange-500" />
                      contact@dammyoung.com
                    </a>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-orange-500" />
                      Nigeria • Montreal, Canada
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Working hours</h3>
                  <p className="text-gray-600">
                    Monday – Friday<br />
                    9:00 AM – 6:00 PM (WAT)
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1} className="lg:col-span-3">
              {status === "success" ? (
                <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-sm">
                  <CheckCircle size={56} className="text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message sent!</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for reaching out. We’ll get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm"
                >
                  <input type="hidden" name="_subject" value="New message from DAMMYOUNG website" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Company</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Service of interest</label>
                    <select
                      name="service"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                    >
                      <option value="">Select a package</option>
                      <option value="Brand Launch">Brand Launch Package</option>
                      <option value="Digital Marketing">Digital Marketing Package</option>
                      <option value="E-commerce Growth">E-commerce Growth Package</option>
                      <option value="Corporate">Corporate Digital Presence</option>
                      <option value="Startup Growth">Startup Growth Package</option>
                      <option value="Enterprise">Enterprise Digital Transformation</option>
                      <option value="Custom">Custom / Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}