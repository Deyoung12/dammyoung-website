export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p>Last updated: July 2026</p>
        <p>
          DAMMYOUNG (“we”, “our”, or “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
        </p>
        <h2 className="text-2xl font-semibold mt-10">Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, company name, and any messages you send through our contact or newsletter forms.</p>
        <h2 className="text-2xl font-semibold mt-10">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your inquiries</li>
          <li>To send newsletters (only if you subscribed)</li>
          <li>To improve our website and services</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please email us at <a href="mailto:contact@dammyoung.com" className="text-blue-600">contact@dammyoung.com</a>.</p>
      </div>
    </div>
  );
}