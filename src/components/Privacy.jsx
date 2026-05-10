import React from 'react';

const Privacy = () => {
  return (
    <div className="p-6 pt-24 min-h-screen bg-[#020817] text-gray-300 leading-relaxed">
      <h1 className="text-2xl font-bold text-green-400 mb-6">Privacy Policy</h1>
      <p className="mb-4">We value your privacy and are committed to safeguarding any information you provide while using our app. Our policy is simple: we do not collect any personal information from our users.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">1. Information We Do Not Collect</h2>
      <p className="mb-2">We do not collect or store any personal data, including but not limited to:</p>
      <ul className="list-disc ml-5 space-y-1 mb-4">
        <li>Your name, email address, or phone number.</li>
        <li>Payment information such as credit card or bank details.</li>
        <li>Location data or device information.</li>
      </ul>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">2. Cookies and Tracking</h2>
      <p className="mb-4">We may use cookies to improve user experience and monitor app performance. These cookies do not collect any personally identifiable information. They may be used to store user preferences, session information, or for analytics purposes.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">3. Security</h2>
      <p className="mb-4">Although we do not collect personal data, we take the security of your interaction with our app seriously. We implement industry-standard measures to protect the integrity and confidentiality of any data that might be transmitted during use, including secure connections (SSL) for your safety.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">4. Third-Party Links</h2>
      <p className="mb-6">Our app may contain links to third-party websites. We are not responsible for the content or privacy practices of these third-party websites. Please review their privacy policies before providing any personal data on those sites.</p>

      <h1 className="text-2xl font-bold text-green-400 mt-10 mb-6">Terms of Service</h1>
      <p className="mb-4">By accessing or using our app, you agree to the following terms. Please read them carefully.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">1. Eligibility</h2>
      <p className="mb-4">You must be at least 18 years old to use our app. If you are under 18, you must have the consent of a parent or guardian to use the app.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">2. Account Registration</h2>
      <p className="mb-4">We do not require you to register an account or provide any personal details to use the app. You may use the app anonymously, and no personal information is stored in the system.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">3. Prohibited Activities</h2>
      <p className="mb-2">By using the app, you agree not to engage in the following activities:</p>
      <ul className="list-disc ml-5 space-y-1 mb-4">
        <li>Engaging in illegal or unethical activities.</li>
        <li>Attempting to gain unauthorized access to our app or its systems.</li>
        <li>Distributing malicious software, including viruses or malware.</li>
        <li>Using the app to harass or spam other users.</li>
      </ul>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">We are not liable for any damages, losses, or interruptions that may arise from the use of the app. You use the app at your own risk, and we are not responsible for any issues that may arise during your use.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">5. Modifications</h2>
      <p className="mb-4">We reserve the right to modify or discontinue the app at any time, with or without notice. We may also update these Terms of Service periodically, and we encourage you to review them regularly.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">6. Termination</h2>
      <p className="mb-6">We may suspend or terminate access to the app if you violate these Terms of Service. You can also discontinue using the app at any time.</p>

      <h2 className="text-lg font-bold text-white mt-6 mb-2">Age Restrictions</h2>
      <p className="mb-4">Our app is intended for users who are at least 18 years old. By using this app, you confirm that you are of legal age to engage in any activities provided by the app. If you are under the age of 18, you are not permitted to use the app.</p>
    </div>
  );
};

export default Privacy;
