import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans selection:bg-brand-purple/20">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-20"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-purple-light/20 rounded-full blur-[120px] opacity-70 -z-10 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-[800px] h-[800px] bg-brand-blue/15 rounded-full blur-[140px] opacity-60 -z-10"></div>

            <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                            <span className="h-2 w-2 rounded-full bg-brand-purple animate-pulse"></span>
                            <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Legal Documentation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-slate-500 font-medium">
                            Last Updated: February 15, 2026 | Effective Date: February 15, 2026 | Version: 2.1
                        </p>
                    </div>
                </ScrollReveal>

                <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/50 border border-white/50 p-8 md:p-12 overflow-hidden">
                    <div className="prose prose-lg prose-slate max-w-none text-justify
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-brand-purple prose-a:font-semibold hover:prose-a:text-brand-purple-dark prose-a:transition-colors
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-li:text-slate-600 prose-li:mb-2
              prose-ul:my-6
              prose-h2:text-2xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-100 prose-h2:font-extrabold prose-h2:text-black
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-slate-900 prose-h3:font-bold">

                        <h2 id="introduction">1. Introduction</h2>
                        <p>
                            This Privacy Policy governs the MediMan Patient Application and the MediMan Doctor Application (together, the “Services”), available on Web, Google Play Store and IOS App Store. We operate with privacy-by-design and security-by-default principles to deliver compliant, reliable telehealth services at scale.
                        </p>

                        <h2 id="platform-role">2. Our Platform Role (Intermediary)</h2>
                        <p>
                            MediMan is an intermediary technology platform that connects patients with independent doctors through our app. We do not practice medicine or make clinical decisions. Doctors provide care directly and may manage clinic bookings within the MediMan Doctor Application. Clinical responsibilities and decisions rest with the doctor and patient. MediMan is not an emergency service. In an emergency, please contact your nearest hospital, clinic, or doctor.
                        </p>

                        <h2 id="data-controller">3. Data Controller, Representative & Contacts</h2>
                        <ul>
                            <li><strong>Controller:</strong> Mediman Life (PVT) Ltd., #95 KKS Road, Jaffna, Sri Lanka. (Company Registration PV 00319083)</li>
                            <li><strong>Data Protection Officer (DPO) & EU/UK Representative:</strong> <a href="mailto:itsupport@mediman.life">itsupport@mediman.life</a> - +94 70 167 7488</li>
                            <li><strong>Support & Data Requests:</strong> <a href="mailto:itsupport@mediman.life">itsupport@mediman.life</a></li>
                        </ul>

                        <h2 id="scope">4. Scope & Audience</h2>
                        <p>
                            This Policy covers how we handle data across our Services, including identity and account management, appointment scheduling, secure video consultations, notifications, file uploads, analytics, payments, and general platform operations on both apps. It applies to patients using the MediMan Patient Application and to authorized doctors and licensed healthcare professionals using the MediMan Doctor Application.
                        </p>

                        <h2 id="information-collection">5. Information We Collect</h2>
                        <p>We collect various types of information to provide and improve our Services, including:</p>
                        <ul>
                            <li><strong>Patient Identity:</strong> Personal details such as name, date of birth, gender, nationality, email, phone number, and profile photo.</li>
                            <li><strong>Health Data:</strong> Medical history and conditions, diagnoses, treatment plans, prescriptions, allergies, lab results, imaging, vaccination records, consultation notes, and clinical observations. (Any mental health data is processed only with explicit consent and with heightened safeguards.)</li>
                            <li><strong>Doctor Profile:</strong> Professional information for doctors, including name, title, specialties, license numbers and verification documents, education and certifications, professional affiliations, tax identifiers (if required), payout/banking details, clinic schedules, and consultation fees.</li>
                            <li><strong>Operational & Device Data:</strong> Technical information such as device model, operating system, app version, IP address, approximate location, push notification tokens, session and authentication metadata, as well as crash reports and performance diagnostics, and general interaction logs.</li>
                            <li><strong>Financial & Billing:</strong> Payment method tokens and transaction details, insurance information (if applicable), and records of payouts to providers. We do not store raw payment card numbers (sensitive payment data is handled by secure, compliant payment processors).</li>
                        </ul>

                        <h2 id="roles">6. Controller / Processor Roles</h2>
                        <p>Our role under data protection law can vary depending on the data and context:</p>
                        <ul>
                            <li><strong>MediMan as a Data Processor:</strong> When you engage in a consultation, the clinical data generated (medical records, consultation notes, prescriptions, etc.) is processed by MediMan on behalf of the treating doctor. The doctor is responsible for that clinical data, and we act only as a processor handling it per the doctor’s instructions (aside from necessary security and compliance logging).</li>
                            <li><strong>MediMan as a Data Controller:</strong> MediMan is the controller for other types of data necessary for operating the platform - for example, account information, appointment details (metadata like dates and doctor IDs), payment facilitation records, security and fraud logs, and analytics related to service usage. We determine how this information is used in order to run and improve the Services.</li>
                            <li><strong>Doctors as Independent Controllers:</strong> Each doctor using our platform remains an independent controller for the clinical information they generate or use within the app. This means doctors retain responsibility for maintaining their own clinical records, notes, and prescriptions, and for complying with any regulatory requirements related to their practice.</li>
                        </ul>

                        <h2 id="android-permissions">7. Android Permissions</h2>
                        <p>
                            We request only the minimum necessary permissions in our Android app. You can manage these permissions in your device settings at any time (though revoking certain permissions may affect app functionality). Below is a summary of the permissions and why we need them:
                        </p>
                        <ul>
                            <li><strong>Core connectivity & stability:</strong> INTERNET, ACCESS_NETWORK_STATE, ACCESS_WIFI_STATE, WAKE_LOCK, FOREGROUND_SERVICE, USE_FULL_SCREEN_INTENT - Needed to connect to the internet, check network status, keep the app running during a consultation, and deliver notifications reliably.</li>
                            <li><strong>Telehealth media:</strong> CAMERA, RECORD_AUDIO, MODIFY_AUDIO_SETTINGS - Needed for video consultations (camera and microphone access) and to adjust audio settings during calls.</li>
                            <li><strong>Engagement & alerts:</strong> POST_NOTIFICATIONS, VIBRATE - Needed to send you appointment reminders, alerts, and other notifications; vibration is used for notification alerts.</li>
                            <li><strong>Location experiences (optional):</strong> ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION - Optional permissions to enable location-based features such as finding nearby providers or aiding emergency services. These are only used for in-app features like maps or location tagging if you choose to enable them.</li>
                            <li><strong>Medical file handling (optional):</strong> READ_MEDIA_IMAGES, READ_MEDIA_VIDEOS, READ_MEDIA_AUDIO - Optional permissions that allow you to select medical images, videos, or audio files from your device (for example, uploading a photo of a lab report or sharing an X-ray image during a consultation).</li>
                            <li><strong>Device context (optional):</strong> READ_PHONE_STATE - Optional permission to detect incoming phone calls or interruptions so we can pause a video consultation if you receive a call.</li>
                        </ul>
                        <p>
                            <em>Note:</em> We do not access background location data, external storage (beyond the new media permissions listed), or use Bluetooth features, and we do not request to ignore battery optimizations. If any of these were to be introduced in the future, we would notify you and update this Policy accordingly.
                        </p>

                        <h2 id="ios-privacy">8. iOS Privacy</h2>
                        <p>
                            Our iOS apps request only essential permissions through system prompts, and we explain the reason for each. The main iOS permissions we use are:
                        </p>
                        <ul>
                            <li><strong>Camera Access (NSCameraUsageDescription):</strong> Allows you to participate in video consultations and to capture images (for example, uploading a photo of a document or injury).</li>
                            <li><strong>Microphone Access (NSMicrophoneUsageDescription):</strong> Allows audio communication during video consultations.</li>
                            <li><strong>Photo Library Access (NSPhotoLibraryUsageDescription and NSPhotoLibraryAddUsageDescription):</strong> Lets you upload medical images or save documents (e.g. downloading a prescription or saving a consultation summary).</li>
                            <li><strong>Location Access (NSLocationWhenInUseUsageDescription, optional):</strong> Enables location-based features like map functionality for finding providers or aiding in emergency context, but only when the app is in use and only if you choose to allow it.</li>
                        </ul>
                        <p>
                            We may also utilize notification permissions (to send appointment reminders and alerts) and performance monitoring frameworks (to improve app stability), which will be requested via the standard iOS prompts when needed. All permission requests on iOS are accompanied by a brief explanation in your local language. We do not reduce any privacy protections with custom wording - the text is clear about why the access is needed, and you remain in control of granting or denying each permission.
                        </p>

                        <h2 id="lawful-bases">9. Lawful Bases for Processing</h2>
                        <p>Depending on the situation, we rely on different legal grounds to process personal data in compliance with global data protection laws (such as GDPR and related regulations):</p>
                        <ul>
                            <li><strong>Consent:</strong> We will ask for your consent in certain cases - for example, processing your health data for telehealth services (in many jurisdictions health data requires explicit consent), enabling app analytics or crash reporting (where not strictly necessary for service), sending marketing communications (which are opt-in), or sharing information with third parties for care coordination beyond our platform. You have the right to withdraw your consent at any time.</li>
                            <li><strong>Contract:</strong> Much of our data processing is necessary to fulfill our contract with you. This includes enabling you to consult with doctors, managing your account, scheduling appointments, processing payments, and facilitating secure communications between you and your healthcare provider. We cannot provide the core Services without this data.</li>
                            <li><strong>Legal Obligation:</strong> We may need to process data to comply with our legal obligations. For example, healthcare regulations might require us (or your doctor) to maintain medical records for a certain period; financial laws require us to keep payment transaction records and receipts; and we must comply with lawful requests from authorities when they are valid and binding.</li>
                            <li><strong>Vital Interests:</strong> In rare cases, we might process personal data to protect someone’s life or well-being. For instance, if a user is in a medical emergency and unable to provide consent, we might share relevant information with emergency responders to the extent allowed by law (this is to protect the vital interests of the user or another person).</li>
                            <li><strong>Legitimate Interests:</strong> We process data to further our legitimate interests in maintaining and improving our Services, in a way that does not override your rights and freedoms. This can include things like ensuring platform security, preventing fraud and abuse, anonymizing and aggregating data for service improvement and research, and sending important product updates. When we rely on this basis, we carefully consider and balance our interests against your privacy rights.</li>
                        </ul>

                        <h2 id="data-usage">10. How We Use Data</h2>
                        <p>We use the collected information to provide, maintain, and enhance our Services, as well as to ensure safety and compliance. Key uses include:</p>
                        <ul>
                            <li><strong>Care Delivery:</strong> We use personal and health information to facilitate healthcare services. This includes scheduling appointments and sending reminders, enabling doctors and patients to connect via secure video consultations, maintaining an electronic health record of consultations (notes, prescriptions, treatment plans), issuing e-prescriptions, providing referral letters or medical certificates when needed, and generally supporting the doctor-patient interaction through our platform.</li>
                            <li><strong>Operations:</strong> We process data necessary for the day-to-day operation of the platform. This includes verifying your identity and credentials (for doctors), managing user accounts and login sessions, preventing unauthorized access (security/fraud monitoring), processing payments for consultations, providing customer support, and sending you essential notifications about your use of the service (for example, booking confirmations, password changes, or policy updates).</li>
                            <li><strong>Quality & R&D:</strong> We continuously work to improve our user experience and develop new features. Usage data and feedback may be used to troubleshoot issues, optimize app performance, and guide UI/UX improvements. On an aggregated or anonymized basis, data may be used for research and development of new services or for analyzing health outcomes (for example, understanding how effective telehealth is for certain follow-ups, without using identifiable personal information). We also occasionally review interactions (with appropriate authorization) for training and quality assurance to ensure doctors and support staff provide high-quality service.</li>
                            <li><strong>Communications:</strong> We use contact information (email, phone number) to communicate with you. This includes sending appointment confirmations and reminders via SMS, email, or push notification, notifying you of important health alerts or service updates, sending newsletters or promotional content if you have opted in to marketing, and informing you of changes to our terms or Privacy Policy. We strive to keep communications relevant and will not spam you; you can opt out of non-essential communications at any time.</li>
                        </ul>

                        <h2 id="data-sharing">11. Data Sharing & Processors (Named Only)</h2>
                        <p>
                            We value your privacy and thus limit data sharing to only what is necessary to deliver our Services. We engage only the third parties listed below to process data on our behalf, under strict agreements that bind them to confidentiality, security standards, and specific purposes. We do not sell or share your personal data with anyone else for their own use. If we ever need to add a new data processor or significantly change data sharing, we will update this Policy and, if required, seek your consent before using them. Our current third-party service providers include:
                        </p>
                        <ul>
                            <li><strong>Hosting & Storage:</strong> We securely store and process data. In particular, user files and attachments are stored with encryption at rest to protect their confidentiality.</li>
                            <li><strong>Email Delivery:</strong> We send out transactional emails (like verification codes, appointment confirmations) and support communications. These emails do not include sensitive health content in plain text.</li>
                            <li><strong>Telehealth Video:</strong> For real-time video consultations, we integrate a platform that provides secure video and audio streaming. This service allows us to connect patients and doctors with low latency and high quality. All video calls are encrypted.</li>
                            <li><strong>Messaging:</strong> We use trusted providers to send messages for sending SMS messages and one-time passcodes (OTP) to users’ phones (for things like phone number verification or appointment notifications).</li>
                            <li><strong>Push Notifications & Analytics:</strong> We send push notifications within the mobile apps, ensuring you get real-time alerts and updates. We also use performance monitoring and crash analytics, which helps improve app stability.</li>
                            <li><strong>Location Services:</strong> We use Maps to support any mapping or location-based features in the app, such as helping patients find the location of a clinic or aiding in verifying addresses. When used, this may involve sending basic location queries to servers (e.g., for geocoding an address or showing a map preview).</li>
                            <li><strong>Experience Analytics:</strong> We use monitoring tools to gather analytics about how users interact with our app (e.g., which screens are most used, where users might encounter issues). Importantly, these are configured not to record or transmit any sensitive personal or health information. We use it strictly to analyze user experience and improve the app’s usability.</li>
                            <li><strong>Payments:</strong> For handling payments, we rely on IPG (Internet Payment Gateway) by Trusted Legal Bank. These are secure payment processing services that are PCI-DSS compliant, meaning they meet industry standards for protecting payment information. When you pay for a consultation through our app, these payment processors handle the transaction. We do not store your raw credit or debit card numbers on our servers; any saved payment details are tokenized (stored by the payment gateway and referenced by us via secure tokens).</li>
                        </ul>
                        <p>
                            Each of these partners is bound by data protection agreements, meaning they can only use your data for the specific services they provide to us and must protect it according to applicable privacy laws.
                        </p>

                        <h2 id="international-transfers">12. International Data Transfers</h2>
                        <p>
                            MediMan is based in Sri Lanka, but we serve patients and doctors globally. This means your data might be accessed or processed in different countries. Whenever personal data is transferred across national borders, we take steps to ensure it remains protected:
                        </p>
                        <ul>
                            <li>If your data is transferred out of your country (for example, to data centers or service providers in another region), we will implement recognized legal mechanisms to cover the transfer. These might include Standard Contractual Clauses (SCCs) as approved by the European Commission, or similar contractual frameworks approved in other jurisdictions.</li>
                            <li>We perform transfer impact assessments to evaluate any risks to your data when it’s moved internationally and apply additional technical and organizational measures as needed (like encryption and access controls) to safeguard it.</li>
                            <li>Regardless of where your data is processed, we will handle it in accordance with this Privacy Policy and applicable law. Our primary storage (AWS servers) may be in a region outside your own, but AWS maintains high standards of security and compliance internationally.</li>
                        </ul>
                        <p>
                            By using our Services, you understand that your information may be transferred to and stored on servers in countries other than your own. We will always ensure such transfers comply with privacy laws so that your personal data remains secure.
                        </p>

                        <h2 id="security">13. Security Posture</h2>
                        <p>
                            We are committed to protecting your personal data through strong security practices and measures. Some key aspects of our security program include:
                        </p>
                        <ul>
                            <li><strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using HTTPS/TLS protocols. This means that any information (including video consultations, messages, etc.) is protected in transit from eavesdropping. For data stored on our servers, we use encryption at rest (for example, files and database records stored in AWS are encrypted on disk). We also enforce strong encryption and hashing for passwords, authentication tokens, and other sensitive elements.</li>
                            <li><strong>Access Controls:</strong> We limit access to personal data strictly on a need-to-know basis. Our team members and service providers only access the minimum data necessary to perform their duties. We employ role-based access control (RBAC) to ensure each user or staff role has appropriate permissions. Administrative access to systems requires strong authentication (including multi-factor authentication where possible), and all access is logged and audited.</li>
                            <li><strong>Secure SDLC (Software Development Life Cycle):</strong> We follow secure coding standards throughout our product development. Our code is reviewed for security and privacy considerations. We keep our software dependencies updated to patch vulnerabilities, and we manage secrets (like API keys and passwords) securely. We also run regular vulnerability scans and, when possible, penetration tests to identify and fix potential weaknesses in our applications and infrastructure.</li>
                            <li><strong>Monitoring & Response:</strong> We maintain centralized logging of key activities in our systems (while respecting user privacy in logs). Our security systems monitor for unusual patterns or potential intrusions (for example, repeated failed logins or suspicious network traffic). We have an incident response plan in place. This means if a security incident or data breach is suspected or detected, we have a defined process to investigate, mitigate, notify affected parties and regulators as required, and improve our systems to prevent future incidents.</li>
                            <li><strong>Resilience:</strong> We regularly back up critical data using secure backup processes, and those backups are encrypted. We have disaster recovery and business continuity plans so that in the event of an outage or disaster, we can restore services and data with minimal disruption. These plans are tested periodically to ensure they work when needed.</li>
                            <li><strong>Organizational Measures:</strong> All Mediman staff are trained on privacy and security best practices. Employees and contractors with access to personal data sign confidentiality agreements (NDAs) and undergo background checks as permitted by law. We restrict third-party subcontractors unless they are approved and under similar obligations. Additionally, we conduct periodic audits and may bring in independent experts to assess our security posture.</li>
                        </ul>
                        <p>
                            While we do our best to protect your data, it’s also important for users to play a part in security. Keep your account credentials confidential and notify us immediately if you suspect any unauthorized access to your account.
                        </p>

                        <h2 id="data-retention">14. Data Retention</h2>
                        <p>
                            We retain personal data only for as long as it is needed for the purposes described in this Policy, or as required by law. Retention periods can vary based on the type of data and applicable regulations:
                        </p>
                        <ul>
                            <li><strong>Medical records:</strong> We generally retain electronic medical records (consultation notes, prescriptions, etc.) for 7 to 10 years, depending on local healthcare regulations. This is to ensure continuity of care and to comply with legal obligations in many jurisdictions that require medical data retention for a minimum period.</li>
                            <li><strong>Booking records:</strong> Information about appointments (such as appointment dates and times, the doctor you saw, the type of visit, and payment references) is retained permanently. This permanent retention is to satisfy medical audit requirements and healthcare regulatory compliance (for example, to have a log of all consultations provided through the platform).</li>
                            <li><strong>Account profile data:</strong> Your account information (like your name, contact details, and other profile info) is kept for the lifetime of your account. If you delete your account, we will remove or anonymize your personal profile data, but we may keep limited information after deletion for a defined period (generally up to 3 years) to comply with legal requirements or to protect our legal rights (for instance, keeping records in case of a dispute or to demonstrate compliance with law).</li>
                            <li><strong>Communications logs:</strong> Records of communications (such as support tickets, chat logs with customer support, or technical logs of notifications sent) are typically kept for up to 2 years. We keep these to monitor service quality, train support staff, and have a history of support interactions in case issues reoccur.</li>
                            <li><strong>Payments and payout records:</strong> Financial records, including transaction logs, receipts, and payout records to doctors, are retained for about 7 years. This retention aligns with accounting and tax laws, which often require businesses to keep financial records for a number of years.</li>
                            <li><strong>Analytics data:</strong> Data collected for analytics or performance monitoring is usually retained for a shorter period (for example, up to 13 months) since we mainly look at recent trends to improve the service. Analytics data may include things like usage statistics or crash reports, and when possible, we aggregate or anonymize this data over time.</li>
                            <li><strong>Marketing data:</strong> If you have consented to receive marketing communications, we will keep the information necessary for that (like your email address or preferences) until you withdraw your consent or opt out of marketing. Once you unsubscribe, we will stop sending you marketing messages, though we may keep a record of the withdrawal to ensure we respect your preference in the future.</li>
                        </ul>
                        <p>
                            When data is no longer needed, we ensure it is deleted or anonymized in a secure manner. Please note that in some cases we may retain certain information for longer if required by law (e.g., if a legal hold or court order is in place, or an investigation is ongoing).
                        </p>

                        <h2 id="account-deletion">15. Account Deletion & Data Rights</h2>
                        <p>
                            You have the right to delete your account and personal data, as well as other rights regarding how your data is used. This section explains how you can exercise those rights:
                        </p>
                        <h3 id="deletion-process">Account Deletion</h3>
                        <p>
                            If you wish to delete your MediMan account, you can initiate the process by visiting our account deletion page: <a href="https://mediman.life/delete-account/">https://mediman.life/delete-account/</a>. We will guide you through a verification process to confirm your identity (for your protection, we need to be sure the request is authentic). You will also be asked to acknowledge the consequences of deletion (for example, losing access to your data and history). Once confirmed, we will schedule your data for deletion from our active systems. Backup data will be phased out over our backup retention cycle, except for any information we are required to keep by law (as noted below).
                        </p>
                        <p>
                            <strong>Deletion Acknowledgment (shown during account deletion):</strong> “Important: In accordance with healthcare regulations and legal requirements, we will retain your booking records (appointment dates, doctor information, visit types, and payment references) for medical audit and legal compliance purposes. All other personal profile data and system data will be permanently deleted or anonymized. I understand the data retention policy stated above and confirm my request to permanently delete my MediMan account. I acknowledge that this action cannot be undone and that booking records will be retained as described for legal compliance.”
                        </p>
                        <h3 id="protection-rights">Your Data Protection Rights</h3>
                        <p>Depending on the laws that apply to you (for example, GDPR if you are in the EU, or CCPA if you are in California), you may have some or all of the following rights regarding your personal data:</p>
                        <ul>
                            <li><strong>Right of Access:</strong> You can request a copy of the personal data we hold about you, and information about how we process it.</li>
                            <li><strong>Right of Rectification:</strong> If any of your information is incorrect or incomplete, you have the right to ask us to correct it.</li>
                            <li><strong>Right to Erasure:</strong> You can request that we delete your personal data. If you request deletion, we will remove the data we are not legally required to keep. (This is also known as the “right to be forgotten,” though there are some exceptions where we may have to retain data.)</li>
                            <li><strong>Right to Data Portability:</strong> You have the right to request your personal data in a structured, commonly used, and machine-readable format, and you have the right to have that data transmitted to another service provider where technically feasible.</li>
                            <li><strong>Right to Restrict Processing:</strong> You can ask us to limit the processing of your data in certain circumstances (for instance, if you contest the accuracy of the data or object to us processing it, we will consider requests to restrict usage while we review the issue).</li>
                            <li><strong>Right to Object:</strong> You have the right to object to certain types of processing. For example, you can object to the use of your data for direct marketing at any time, and we will honor that. You can also object if you believe we have no legitimate grounds to process your data or if you dispute that our legitimate interests override your rights.</li>
                            <li><strong>Right to Withdraw Consent:</strong> If we are processing your personal data based on your consent, you have the right to withdraw that consent at any time. For example, you can opt out of marketing emails by withdrawing consent, or disable certain app analytics if they were consent-based. Withdrawing consent will not affect the lawfulness of any processing we did before your withdrawal.</li>
                        </ul>

                        <h3 id="ccpa-rights">California Residents (CCPA/CPRA)</h3>
                        <p>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), including:</p>
                        <ul>
                            <li>The right to know what personal information is collected, used, disclosed, or sold, and to access that information.</li>
                            <li>The right to delete personal information held by us (and by extension, direct service providers), with certain exceptions (such as if the information is needed to complete a transaction or for legal compliance).</li>
                            <li>The right to correct inaccurate personal information.</li>
                            <li>The right to opt out of the sale or sharing of personal information. (Note: MediMan does not sell personal information to third parties for profit. We also do not share personal information for cross-context behavioral advertising.)</li>
                            <li>The right to not receive discriminatory treatment for exercising any of these rights. We will not deny you services, charge you different prices, or provide a different level of service because you exercised your privacy rights.</li>
                        </ul>
                        <p>
                            To exercise any of your rights or make a privacy-related request, please contact us at <a href="mailto:itsupport@mediman.life">itsupport@mediman.life</a>. For security, we may need to verify your identity (and authority, if you are making a request on behalf of someone else) before fulfilling your request. We aim to respond to all valid requests within the timeframe required by law (generally within 30 days, though this can be extended if necessary with notice to you). There is no fee for making a request, but if a request is unfounded or excessive, we may charge a reasonable fee or refuse to act on it.
                        </p>

                        <h2 id="childrens-privacy">16. Children’s Privacy</h2>
                        <p>
                            Protecting children’s privacy is extremely important to us. The MediMan Patient Application is not intended for children under the age of 18 (or the minimum age of digital consent in your region) unless a parent or legal guardian has provided verifiable consent and is supervising the child’s use of the service. We do not knowingly allow children under 18 to create accounts or use the Patient app without the required consent.
                        </p>
                        <p>
                            The MediMan Doctor Application is only for licensed medical professionals aged 24 or older; we do not allow minors to register as doctors on our platform.
                        </p>
                        <p>
                            For any pediatric medical services facilitated through MediMan (i.e., where a parent/guardian is arranging a consultation for a minor), we treat the child’s health data with heightened safeguards and only collect what is necessary for the service. Any personal data about a child is only provided to us by the parent or guardian or by a healthcare professional with proper consent.
                        </p>
                        <p>
                            We do not market our Services to minors, nor do we knowingly use any personal data of minors for marketing purposes. If we become aware that we have collected personal data from a child under the relevant age without proper consent, we will take steps to delete that information. Parents or guardians who believe we might have information about a child under 13 (in an unauthorized way) can contact us to request deletion.
                        </p>

                        <h2 id="cookies-tracking">17. Cookies, SDKs & Tracking</h2>
                        <p>Our Services utilize a minimal amount of tracking technology, primarily for the operation of the app and to improve your experience:</p>
                        <ul>
                            <li><strong>In the Mobile Apps:</strong> We do not use traditional “cookies” in mobile applications, but we use similar mechanisms:
                                <ul>
                                    <li>We maintain session tokens after you log in, so you remain authenticated during your session.</li>
                                    <li>We use analytics and performance SDKs (Software Development Kits) like Firebase and Microsoft Clarity to understand app performance and usage. These help us identify crashes or UI issues. These tools are configured not to capture sensitive personal data (for example, Clarity will blur or ignore any potential health information on screen).</li>
                                    <li>We use crash reporting tools to automatically report app errors to our developers, so we can fix them quickly. Crash reports include technical info like device model and error logs, not your personal content.</li>
                                    <li>We store certain preferences on the device (for example, if you disable a tutorial or set a language preference, that might be stored locally or in-app memory).</li>
                                </ul>
                            </li>
                            <li><strong>In Web Interfaces (if applicable):</strong> If you use a web portal or our website, we may use cookies:
                                <ul>
                                    <li>Essential cookies: to maintain your login session, security, or preferences (like language). These cookies are required for the site to function and cannot be disabled in our system.</li>
                                    <li>Analytics cookies (with consent): if we use any web analytics, we would do so with notice and consent where required. These help us understand website traffic and improve the site.</li>
                                    <li>Third-party integration cookies: if we embed content or integrate with a third party (for example, a payment gateway on the web might set its own cookies), those would be governed by the third party’s policies, but we would endeavor to notify you when such cookies are in use.</li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            We do not use any tracking for advertising purposes, and we do not allow third-party advertisers to track you through our platform.
                        </p>
                        <p>
                            For more details on our use of cookies and similar technologies, you may refer to our Cookie Policy (if available) or reach out to us with questions. You can control cookies through your browser settings (for web) and control analytics/telemetry in the app settings or by contacting support.
                        </p>

                        <h2 id="platform-compliance">18. Platform & App Store Compliance</h2>
                        <p>We adhere to app store policies and privacy requirements set by platform providers:</p>
                        <ul>
                            <li><strong>Google Play (Android):</strong> We maintain accurate Data Safety information on our Google Play Store listing, disclosing what data is collected and how it’s used, in line with Google’s requirements. Our app also complies with Google Play’s Developer Policies, including those on user data, permissions, and (if ever applicable) the Families Policy for apps that might be used by children (though our app is generally not for young children, we still ensure compliance where relevant). We provide in-app privacy notices and prompts in clear language.</li>
                            <li><strong>Apple App Store (iOS):</strong> On our Apple App Store listing, we include an App Privacy section that details what data is collected and for what purposes, as required by Apple. We honor Apple’s App Tracking Transparency (ATT) framework – currently, we do not perform any ad tracking across apps, but if that changes, we will use the ATT prompt to seek permission. We do not integrate with HealthKit or CareKit at this time; if we ever introduce HealthKit functionality (for instance, to import health data from your device), we will only do so with your explicit consent and in strict accordance with Apple’s guidelines (HealthKit data cannot be used for marketing or stored in iCloud without permission, etc.).</li>
                        </ul>
                        <p>In summary, we make sure that our apps meet the privacy expectations of the platforms they run on, and we keep those disclosures up to date as our app evolves.</p>

                        <h2 id="third-party-links">19. Third-Party Links</h2>
                        <p>
                            The MediMan platform and communications may occasionally contain links to external websites or services that we do not operate. For example, a doctor might share a link to an external resource, or our website might link to a medical article or a regulatory authority’s site for informational purposes. Please be aware that once you leave our platform or are redirected to a third-party site/app, this Privacy Policy no longer applies.
                        </p>
                        <p>
                            Any information you provide to those third-party sites is governed by their own privacy policies. We strongly encourage you to read the privacy policies of any external sites or services before providing your personal data to them. MediMan is not responsible for the content, privacy practices, or handling of information by any third parties that are not under our control.
                        </p>

                        <h2 id="accessibility">20. Accessibility</h2>
                        <p>We are committed to ensuring our Privacy Policy is accessible and understandable to all users:</p>
                        <ul>
                            <li>We can provide this Privacy Policy in different languages to serve our global user base. If the app is offered in a certain language, we aim to have the Privacy Policy available in that language as well.</li>
                            <li>If you have a disability or require the Privacy Policy in an alternative format (such as large print, audio, or braille), please contact us at <a href="mailto:itsupport@mediman.life">itsupport@mediman.life</a>, and we will do our best to accommodate you.</li>
                            <li>We strive to write our policies in plain language. We may also offer plain-language summaries or FAQ documents that explain key points of the Privacy Policy in simpler terms, especially when we roll out significant updates.</li>
                        </ul>
                        <p>
                            Your understanding of your privacy rights and our practices is important. If anything in this Policy is unclear, feel free to reach out to us with questions.
                        </p>

                        <h2 id="changes">21. Changes to This Policy</h2>
                        <p>
                            We may update or modify this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will change the “Last Updated” date at the top of this Policy.
                        </p>
                        <p>
                            If there are material changes (significantly new practices or rights we want to introduce, or changes that affect how your data is handled), we will provide you with prominent notice. This may include notifications through the MediMan apps, sending you an email, posting a notice on our website, or highlighting the update in app store release notes. In certain cases, especially if required by law, we may ask for your consent to changes.
                        </p>
                        <p>
                            We encourage you to review this Privacy Policy periodically. Continuing to use the MediMan services after a Policy update means you acknowledge and agree to the revised terms (unless further action is required, such as explicit consent). If you do not agree with the changes to the Policy, you should stop using the Services and may delete your account as described above.
                        </p>

                        <h2 id="dispute-resolution">22. Dispute Resolution & Regulatory Recourse</h2>
                        <p>If you have questions, concerns, or complaints about how we handle your privacy or personal data, we’re here to help:</p>
                        <ul>
                            <li><strong>Contact Us First:</strong> We encourage you to contact us so we can address your concern directly. You can reach out to our Data Protection Officer or our support team at <a href="mailto:itsupport@mediman.life">itsupport@mediman.life</a>. We will acknowledge your complaint and work with you to find a solution. We aim to respond within 30 days or sooner, in line with applicable laws.</li>
                            <li><strong>Local Data Protection Authorities:</strong> If you are in a jurisdiction with a data protection or privacy authority (for example, the Information Commissioner’s Office in the UK, a Data Protection Authority in the EU, or the Privacy Commissioner in certain other countries), you have the right to contact them regarding any concerns. You can lodge a complaint with the supervisory authority in the country where you live or work, or where you believe a violation may have occurred. We will cooperate fully with any official inquiries and follow the directives of regulatory authorities.</li>
                            <li><strong>Legal Dispute Resolution:</strong> Any disputes that cannot be resolved amicably may be subject to the dispute resolution procedures outlined in our Terms of Service. This could include arbitration or a specific venue/jurisdiction for legal claims, to the extent such requirements are enforceable and do not contradict applicable law granting you rights. We will abide by all lawful processes in resolving disputes and will not retaliate against anyone for exercising their rights.</li>
                        </ul>
                        <p>
                            Your trust is of utmost importance to us. We will do our best to resolve any privacy-related issues in a fair and transparent manner.
                        </p>

                        <h2 id="technology-hosting">23. Technology & Hosting Statement</h2>
                        <p>
                            We use an exclusive technology platform for hosting MediMan’s applications and data. This means all your personal data and all operational data of our service reside on secure servers. It is a leading cloud provider with robust security certifications and compliance with international standards, which helps us maintain a high level of security and reliability.
                        </p>
                        <p>
                            For data storage, we specifically utilize Simple Storage Service for storing files and backups, and all data stored and encrypted at rest. We also employ managed databases and other services to ensure uptime and scalability. By leveraging infrastructure, we inherit strong physical security and network protections.
                        </p>
                        <p>
                            We intentionally do not list every server component or service we use in this Policy, to keep it concise. However, know that no external hosting providers are used outside. We continuously monitor and manage our cloud environment to promptly apply security patches and follow best practices in cloud security architecture.
                        </p>
                        <p>
                            By using our Services, you benefit from a secure environment as well as our own security measures described above. If you have specific questions about our technology stack or hosting, feel free to contact us.
                        </p>

                        <h2 id="acknowledgment" className="border-t border-slate-200 pt-8 mt-12 pb-4 mb-4">Acknowledgment</h2>
                        <p className="font-medium text-slate-800 italic">
                            By using the MediMan Services, Patient Application or the MediMan Doctor Application, you confirm that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with any part of this Policy, please refrain from using our Services or contact us to discuss any concerns.
                        </p>

                        <p className="text-sm text-slate-400 mt-12 text-center">
                            © 2026 Mediman Life (PVT) Ltd. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
