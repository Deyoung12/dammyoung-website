export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p>Last updated: July 2026</p>
        <p>
          By accessing or using the DAMMYOUNG website and services, you agree to be bound by these Terms & Conditions.
        </p>
        <h2 className="text-2xl font-semibold mt-10">Services</h2>
        <p>DAMMYOUNG provides digital agency services including branding, website development, digital marketing, e-commerce solutions, and related consulting.</p>
        <h2 className="text-2xl font-semibold mt-10">Intellectual Property</h2>
        <p>All content, designs, and materials on this website are the property of DAMMYOUNG unless otherwise stated.</p>
        <h2 className="text-2xl font-semibold mt-10">Limitation of Liability</h2>
        <p>DAMMYOUNG shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
        <h2 className="text-2xl font-semibold mt-10">Contact</h2>
        <p>For any questions regarding these Terms, contact us at <a href="mailto:contact@dammyoung.com" className="text-blue-600">contact@dammyoung.com</a>.</p>
      </div>
    </div>
  );
}