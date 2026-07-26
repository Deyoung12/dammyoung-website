"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve your experience. By continuing you agree to our{" "}
          <a href="/privacy" className="underline hover:text-orange-400">Privacy Policy</a>.
        </p>
        <button
          onClick={accept}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full text-sm font-semibold whitespace-nowrap"
        >
          Accept
        </button>
      </div>
    </div>
  );
}