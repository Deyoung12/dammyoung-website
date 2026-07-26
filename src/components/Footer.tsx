"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaPinterestP,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaApplePay,
} from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import { Loader2, CheckCircle } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mwvgwnok", { // ← Put your Formspree ID here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand + Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="DAMMYOUNG" width={40} height={40} />
              <span className="text-xl font-bold text-gray-900">
                DAMMY<span className="text-orange-500">YOUNG</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              EDGE – Engineering Growth, Designing Experience.
            </p>

            <a
              href="mailto:contact@dammyoung.com"
              className="text-sm font-medium text-blue-600 hover:text-orange-500 transition block mb-6"
            >
              contact@dammyoung.com
            </a>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-3">Newsletter</p>

              {status === "success" ? (
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle size={16} />
                  <span>Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white text-sm font-medium rounded-lg hover:opacity-90 disabled:opacity-60 flex items-center gap-1"
                  >
                    {status === "loading" ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      "Join"
                    )}
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="text-xs text-red-500 mt-2">Something went wrong. Try again.</p>
              )}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-orange-500 transition">About</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition">Services</Link></li>
              <li><Link href="/work" className="hover:text-orange-500 transition">Work</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
              <li><Link href="/testimonials" className="hover:text-orange-500 transition">Testimonials</Link></li>
            </ul>
          </div>

          {/* Legal + Offices */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li><Link href="/privacy" className="hover:text-orange-500 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500 transition">Terms & Conditions</Link></li>
            </ul>

            <h4 className="font-semibold text-gray-900 mb-3">Offices</h4>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Head Office</strong><br />Nigeria
            </p>
            <p className="text-sm text-gray-600">
              <strong>Sub Office</strong><br />
              3905 Plamondon Ave<br />
              Montreal, QC H3S 1L8, Canada
            </p>
          </div>

          {/* Social + Payments */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5">Follow us</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="https://web.facebook.com/profile.php?id=61556083697876" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1877F2] hover:bg-blue-50 transition">
                <FaFacebookF size={16} />
              </a>
              <a href="https://instagram.com/dammyoungg" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#E4405F] hover:bg-pink-50 transition">
                <FaInstagram size={16} />
              </a>
              <a href="https://linkedin.com/company/dammyoung" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0A66C2] hover:bg-blue-50 transition">
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://x.com/dammyoungg" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-gray-100 transition">
                <FaXTwitter size={16} />
              </a>
              <a href="https://youtube.com/@dammyoung" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#FF0000] hover:bg-red-50 transition">
                <FaYoutube size={16} />
              </a>
              <a href="https://tiktok.com/@dammyoungg" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-gray-100 transition">
                <FaTiktok size={16} />
              </a>
              <a href="https://pinterest.com/dammyoungpro" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#E60023] hover:bg-red-50 transition">
                <FaPinterestP size={16} />
              </a>
            </div>

            <h4 className="font-semibold text-gray-900 mb-4">We accept</h4>
            <div className="flex flex-wrap gap-3 items-center">
              <FaCcVisa size={32} className="text-[#1A1F71]" />
              <FaCcMastercard size={32} className="text-[#EB001B]" />
              <FaPaypal size={28} className="text-[#003087]" />
              <FaApplePay size={36} className="text-black" />
              <SiCashapp size={26} className="text-[#00C244]" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DAMMYOUNG. All rights reserved.</p>
          <p>The Young Shall Grow.</p>
        </div>
      </div>
    </footer>
  );
}