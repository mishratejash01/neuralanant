export const metadata = {
  title: "Privacy Policy | Neural AI",
  description: "Privacy policy and data handling practices for Neural AI and Anant 1.0.",
};

export default function PrivacyPage() {
  return (
    <div 
      className="min-h-screen bg-[#f6fbfb] font-['Inter',sans-serif] selection:bg-teal-200 selection:text-teal-900"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <main className="mx-auto max-w-3xl px-6 pb-32 pt-32 sm:pt-40">
        <header className="mb-14">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-[15px] font-normal text-zinc-500">
            Effective Date: February 27, 2026
          </p>
        </header>

        <div className="space-y-12 text-[16px] font-normal leading-relaxed text-zinc-700">
          
          <section>
            <p>
              At Neural AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, APIs, applications, and our memory-native Large Language Model, Anant 1.0 (collectively, the &quot;Services&quot;).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-black">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, as well as data generated automatically when you use our Services.</p>
            <ul className="ml-6 list-outside list-disc space-y-2">
              <li><strong className="font-medium text-black">Account Information:</strong> When you sign up for early access or create an account, we collect your name, email address, and institutional or company affiliation.</li>
              <li><strong className="font-medium text-black">User Content and Interactions:</strong> We collect the text, prompts, documents, and feedback you provide to our AI models.</li>
              <li><strong className="font-medium text-black">Technical Data:</strong> We automatically log your IP address, browser type, operating system, and interaction metrics to ensure the security and stability of our platform.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-black">2. How We Handle Persistent Memory (Anant 1.0)</h2>
            <p>
              Anant 1.0 is designed as an AI with persistent memory, meaning it retains context from past conversations to provide a highly personalized and continuous experience. 
            </p>
            <p>
              We securely encrypt this memory matrix. Your persistent conversational history is siloed to your account and is <strong>never</strong> shared with other users. You retain full control over this data and may request to wipe, edit, or reset the AI&apos;s memory of your interactions at any time through your account settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-black">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="ml-6 list-outside list-disc space-y-2">
              <li>To provide, operate, and maintain our Services.</li>
              <li>To improve our language models, including refining our persistent memory architecture (users may opt-out of having their data used for model training).</li>
              <li>To communicate with you regarding updates, security alerts, and support messages.</li>
              <li>To detect, prevent, and address technical issues or fraudulent activity.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-black">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share your information only in the following limited circumstances:
            </p>
            <ul className="ml-6 list-outside list-disc space-y-2">
              <li><strong className="font-medium text-black">Service Providers:</strong> With trusted vendors who perform services on our behalf (e.g., cloud hosting infrastructure).</li>
              <li><strong className="font-medium text-black">Legal Compliance:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong className="font-medium text-black">Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-black">5. Data Security</h2>
            <p>
              We implement industry-standard security measures, including end-to-end encryption at rest and in transit, to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-black">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information. You also have the right to request a complete export of your interaction history and AI memory graph.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-black">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="space-y-4 border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-semibold tracking-tight text-black">8. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <address className="not-italic text-black">
              <strong>Neural AI</strong><br />
              Sudha &amp; Shankar Innovation Hub<br />
              Indian Institute of Technology Madras<br />
              Chennai - 600036, India<br />
              Email: <a href="mailto:office@neuralai.in" className="text-teal-700 hover:underline">office@neuralai.in</a>
            </address>
          </section>

        </div>
      </main>
    </div>
  );
}
