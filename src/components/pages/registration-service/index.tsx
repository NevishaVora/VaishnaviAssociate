import dynamic from "next/dynamic";
import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Banner from "@src/components/banner";

const ContactForm = dynamic(() => import("@src/components/Forms/contactForm"));

export interface IRegistrationServiceData {
  title: string;
  category: string;
  headline: string;
  description: string;
  sectionOneTitle: string;
  sectionOneText: string;
  sectionTwoTitle: string;
  sectionTwoText: string;
  documents: { title: string; text: string }[];
  relatedServices: { title: string; image: string }[];
  benefits?: string[];
  eligibility?: string[];
  processSteps?: { title: string; text: string }[];
  faqs?: { question: string; answer: string }[];
}

const defaultDocuments = [
  {
    title: "Identity Proof",
    text: "Provide PAN, Aadhar, or passport copies for the business owner or authorized representative.",
  },
  {
    title: "Address Proof",
    text: "Submit valid address proof such as rental agreement, utility bill, or registered office document.",
  },
  {
    title: "Business Details",
    text: "Share the business name, activity description, and registration details for the service application.",
  },
  {
    title: "Owner Details",
    text: "Provide contact information, owner name, and role details for the registered entity.",
  },
  {
    title: "Supporting Documents",
    text: "Upload any specialised documents required by the authority for this specific registration or licence.",
  },
];

const defaultRelatedServices = [
  {
    title: "Business Loans",
    image: "/images/orange-bg-tools-3.png",
  },
  {
    title: "Accounting",
    image: "/images/orange-bg-tools-1.png",
  },
  {
    title: "Legal Support",
    image: "/images/orange-bg-tools-4.webp",
  },
  {
    title: "Company Registration",
    image: "/images/orange-bg-tools-5.png",
  },
  {
    title: "GST Filing",
    image: "/images/white-bg-tool-1.png",
  },
];

const defaultBenefits = [
  "Faster approvals with complete document support.",
  "Guidance for compliance and authority coordination.",
  "Expert review of application forms and attachments.",
  "Dedicated support for follow-up and status tracking.",
];

const defaultEligibility = [
  "Valid identity and address proof for the applicant.",
  "Business or entity proof where required by the licence.",
  "Accurate activity description and scope of operations.",
  "Any specific certificates or clearances needed for the service.",
];

const defaultProcessSteps = [
  {
    title: "Initial Consultation",
    text: "We assess your requirements and identify the exact registration or licence needed for your business.",
  },
  {
    title: "Document Collection",
    text: "Our team helps gather and verify the paperwork required by the authority.",
  },
  {
    title: "Application Filing",
    text: "We prepare and submit the application with all supporting documents on your behalf.",
  },
  {
    title: "Approval Support",
    text: "We follow up with the authority and keep you updated until the registration is complete.",
  },
];

const defaultFaqs = [
  {
    question: "How long does the registration process take?",
    answer: "Timelines vary by service and authority, but we work to ensure timely submission and follow-up for the fastest possible result.",
  },
  {
    question: "What documents are mandatory?",
    answer: "Most services require identity, address, and business details; we will share a specific checklist for the selected service.",
  },
  {
    question: "Can Vaishnavi Associates handle renewals as well?",
    answer: "Yes, we support initial registration, renewals, and ongoing compliance for most licence and registration services.",
  },
];

const buildService = (title: string, options: Partial<IRegistrationServiceData> = {}) => {
  const lowerTitle = title.toLowerCase();
  return {
    title,
    category: "Registration Service",
    headline: `Apply for ${title} easily with Vaishnavi Associates`,
    description: `Vaishnavi Associates provides expert support for ${lowerTitle}. We help you complete the application, prepare documents, and coordinate with the right authority so you can start smoothly.
`,
    sectionOneTitle: `What is ${title}?`,
    sectionOneText: `${title} is a government registration or licence that permits specified business activity under applicable regulations. We help you understand the process, gather documents, and file the application correctly.`,
    sectionTwoTitle: `Why choose Vaishnavi Associates for ${title}?`,
    sectionTwoText: `Our team guides you through the required forms, supporting documents, and follow-up with authorities, reducing delays and keeping the process compliant.`,
    documents: defaultDocuments,
    relatedServices: defaultRelatedServices,
    benefits: options.benefits ?? defaultBenefits,
    eligibility: options.eligibility ?? defaultEligibility,
    processSteps: options.processSteps ?? defaultProcessSteps,
    faqs: options.faqs ?? defaultFaqs,
    ...options,
  } as IRegistrationServiceData;
};

export const registrationServices: Record<string, IRegistrationServiceData> = {
  "trade-license": buildService("Trade License", {
    description: "A Trade License is an official permission issued by the local municipal authority that enables businesses to operate safely and legally within the city. Vaishnavi Associates simplifies the submission and approval process.",
    sectionOneText: "Trade licenses are issued by local municipal corporations after verifying that businesses meet safety, health, and zoning regulations. We support the entire application process.",
    sectionTwoText: "We help you prepare and review all trade license documents, ensuring the municipal authority receives a complete application for faster processing.",
  }),
  "labour-license": buildService("Labour License", {
    description: "A Labour License ensures your establishment is compliant with labour laws and safety standards for employee welfare. We help you apply with the correct documentation and approvals.",
  }),
  "food-license": buildService("Food License", {
    description: "A Food License permits food business operations and ensures compliance with FSSAI standards. We assist with registration, application, and renewal for food businesses.",
  }),
  "gst-registration": buildService("GST Registration", {
    description: "GST Registration allows your business to collect and remit GST legally. We guide you through the registration process and document submission for timely approval.",
  }),
  "udyam-registration": buildService("Udyam Registration", {
    description: "Udyam Registration helps you register as a MSME to access government benefits, schemes, and credit support. We prepare your application and help secure your registration quickly.",
  }),
  "company-registration": buildService("Company Registration", {
    description: "Company Registration establishes your business as a legal entity and protects it under company law. We help you incorporate as Private Limited, OPC, or other company types.",
  }),
  "llp-incorporation": buildService("LLP Incorporation", {
    description: "LLP Incorporation creates a limited liability partnership with the benefits of both partnerships and corporate structure. We support the registration, agreement drafting, and filing.",
  }),
  "partnership-firm-registration": buildService("Partnership Firm Registration", {
    description: "Partnership Firm Registration documents the partnership arrangement and makes your business legally recognised. We prepare the partnership deed and file the registration application.",
  }),
  "trademark-registration": buildService("Trademark Registration", {
    description: "Trademark Registration protects your brand name, logo, or slogan from unauthorised use. We manage filing, objections, and follow-up with the trademark registry.",
  }),
  "esi-pf-registration": buildService("ESI/PF Registration", {
    description: "ESI/PF Registration ensures employee contributions and benefits under social security and provident fund laws. We help you register your workforce and stay compliant.",
  }),
  "professional-tax-registration": buildService("Professional Tax Registration", {
    description: "Professional Tax Registration is required for businesses employing professionals in jurisdictions that levy professional tax. We support your registration and compliance process.",
  }),
  "society-registration": buildService("Society Registration", {
    description: "Society Registration legally establishes charitable, cultural, or cooperative societies under the Societies Act. We help with documentation and the registration application.",
  }),
  "tg-rera-registration": buildService("TG Rera Registration", {
    description: "TG Rera Registration registers real estate projects under the Telangana RERA authority. We assist developers with the documentation and approval process.",
  }),
  "trust-registration": buildService("Trust Registration", {
    description: "Trust Registration establishes a public or private trust under the relevant state Trust Act. We support the registration and preparation of trust deeds.",
  }),
  "apeda-registration": buildService("APEDA Registration", {
    description: "APEDA Registration authorises exporters of agricultural products to operate under the Agricultural Export Promotion Development Authority. We guide you through eligibility and filing.",
  }),
  "import-export-code": buildService("Import Export Code", {
    description: "Import Export Code registration enables your business to import and export goods and services legally. We help you complete the IEC application and document submission.",
  }),
  "digital-signature-certificate": buildService("Digital Signature Certificate", {
    description: "A Digital Signature Certificate is required for many government filings and electronic submissions. We help you obtain the correct DSC for your business or authorised signatory.",
  }),
  "drug-license": buildService("Drug License", {
    description: "Drug License registration allows pharmaceutical and retail medical businesses to manufacture, distribute, or sell drugs legally. We assist with licence application and approvals.",
  }),
  "fcra-registration": buildService("FCRA Registration", {
    description: "FCRA Registration enables organisations to receive foreign contributions legally. We support the application process and ensure compliance with the FCRA framework.",
  }),
  "halal-license-registration": buildService("Halal License & Registration", {
    description: "Halal License & Registration certifies your food products or services for Muslim consumers. We guide you through the halal certification and approval process.",
  }),
  "iso-registration": buildService("ISO Registration", {
    description: "ISO Registration helps your business comply with international quality and management standards. We support ISO certification preparation and application.",
  }),
  "icegate-registration": buildService("ICEGATE Registration", {
    description: "ICEGATE Registration gives your business access to electronic customs and trade filing systems. We help you register and start using the ICEGATE portal.",
  }),
  "rcmc-registration": buildService("RCMC Registration", {
    description: "RCMC Registration is required for exporters to receive regulatory approvals from commodity boards. We assist you in filing the application and documentation.",
  }),
  "lei-code": buildService("LEI Code", {
    description: "LEI Code registration provides a unique identifier for entities engaged in global financial transactions. We help you obtain an LEI quickly and accurately.",
  }),
  "bar-code-registration": buildService("Bar Code Registration", {
    description: "Bar Code Registration assigns global product codes to your goods for retail and supply chain operations. We support registration and label compliance.",
  }),
  "bis-registration": buildService("BIS Registration", {
    description: "BIS Registration certifies your products under Indian safety and quality standards. We help you secure BIS registration for eligible products.",
  }),
  "design-registration": buildService("Design Registration", {
    description: "Design Registration protects the visual appearance of your product or packaging. We guide you through the design filing and registration process.",
  }),
  "copyright-registration": buildService("Copyright Registration", {
    description: "Copyright Registration protects your original creative work, such as literary, artistic, or software content. We help you file and secure copyright protection.",
  }),
  "patent-registration": buildService("Patent Registration", {
    description: "Patent Registration safeguards your invention or innovation by granting exclusive rights. We support patent drafting, filing, and prosecution.",
  }),
  "12a-80g-registration": buildService("12A & 80G Registration", {
    description: "12A & 80G Registration enables non-profit organisations to receive tax exemptions and donor tax benefits. We help you secure registration under the Income Tax Act.",
  }),
  "project-report": buildService("Project Report", {
    description: "A Project Report presents your business plan and financial projections for lenders and authorities. We prepare detailed reports tailored to your loan or registration needs.",
  }),
};

const RegistrationServicePage = ({ service }: { service: IRegistrationServiceData }) => {
  return (
    <div>
      <Banner route="/registrations" name="Registrations" title={service.title} />

      <section className="mainContainer py-8 sm:py-10 md:py-20">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-[#fff4e1] px-3 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.12em] text-[#d97706]">
              {service.category}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[--secondary-theme-color] leading-tight">
              {service.headline}
            </h1>
            <p className="text-[--gray] max-w-full md:max-w-xl leading-6 md:leading-8 text-base md:text-lg">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-full bg-[--primary-theme-color] px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base text-white font-semibold shadow-[0_20px_50px_rgba(247,148,29,0.18)] transition duration-300 hover:-translate-y-1">
                Apply Now
              </Link>
              <p className="text-[--gray] max-w-full md:max-w-xl text-sm sm:text-base">
                Need support with documents or filing? Our team is ready to assist you through every step.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] md:rounded-[32px] border border-[#e6e8ed] bg-[--white] p-6 md:p-8 shadow-[0_20px_60px_rgba(247,148,29,0.12)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[--secondary-theme-color] mb-4 md:mb-5">
              Vaishnavi Associates - Easy way for {service.title}
            </h2>
            <p className="text-[--gray] leading-6 md:leading-8 mb-4 md:mb-6 text-sm md:text-base">
              {service.sectionOneText}
            </p>
            <div className="rounded-[16px] md:rounded-[28px] bg-[#fff3e0] p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-[--secondary-theme-color] mb-2 md:mb-3">
                {service.sectionTwoTitle}
              </h3>
              <ul className="space-y-2 md:space-y-3 text-[--gray] text-sm">
                <li>{service.sectionTwoText}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[--secondary-theme-color] mb-4">
                {service.sectionOneTitle}
              </h2>
              <p className="text-[--gray] leading-8">
                {service.sectionOneText}
              </p>
            </div>

            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[--secondary-theme-color] mb-4">
                {service.sectionTwoTitle}
              </h2>
              <p className="text-[--gray] leading-8">
                {service.sectionTwoText}
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[--secondary-theme-color] mb-4">
              Required Documents & Details to Apply {service.title}
            </h2>
            <p className="text-[--gray] leading-8 mb-8">
              To start the application, provide the documents listed below. Vaishnavi Associates will help you organise everything and submit the application correctly.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.documents.map((item) => (
                <div key={item.title} className="flex gap-3 sm:gap-4 rounded-xl sm:rounded-3xl border border-[#f1f2f5] bg-[#fff8ef] p-4 sm:p-5">
                  <CheckCircleOutlinedIcon className="text-[--primary-theme-color] mt-1" sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
                  <div>
                    <h3 className="font-semibold text-[--secondary-theme-color]">{item.title}</h3>
                    <p className="text-[--gray] text-sm leading-6 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-8">
              <div>
                <h2 className="text-3xl font-semibold text-[--secondary-theme-color]">
                  Related Services
                </h2>
                <p className="text-[--gray] leading-8 mt-3 max-w-2xl">
                  In addition to this registration service, we offer related business and compliance solutions.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {service.relatedServices.map((serviceItem) => (
                <div key={serviceItem.title} className="rounded-[28px] overflow-hidden border border-[#e6e8ed] bg-[--white] shadow-[0_18px_55px_rgba(247,148,29,0.12)] transition duration-300 hover:-translate-y-1">
                  <div className="h-28 md:h-36 overflow-hidden bg-[#fff3e0]">
                    <img src={serviceItem.image} alt={serviceItem.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[--secondary-theme-color]">{serviceItem.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[--secondary-theme-color] mb-4">Key Benefits of this Service</h2>
              <div className="grid gap-4">
                {service.benefits?.map((item) => (
                  <div key={item} className="flex gap-3 items-start rounded-3xl border border-[#f1f2f5] bg-[#fff8ef] p-4">
                    <CheckCircleOutlinedIcon className="text-[--primary-theme-color] mt-1" sx={{ fontSize: 24 }} />
                    <p className="text-[--gray] leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[--secondary-theme-color] mb-4">Eligibility Requirements</h2>
              <ul className="space-y-3 text-[--gray] leading-7">
                {service.eligibility?.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircleOutlinedIcon className="text-[--primary-theme-color] mt-1" sx={{ fontSize: 20 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-8">Our Process</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {service.processSteps?.map((step) => (
                <div key={step.title} className="rounded-[24px] border border-[#f1f2f5] bg-[#fff8ef] p-6">
                  <h3 className="text-xl font-semibold text-[--secondary-theme-color] mb-3">{step.title}</h3>
                  <p className="text-[--gray] leading-7">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs?.map((faq) => (
                <div key={faq.question} className="rounded-[20px] border border-[#f1f2f5] bg-[#fff8ef] p-6">
                  <h3 className="text-xl font-semibold text-[--secondary-theme-color] mb-3">{faq.question}</h3>
                  <p className="text-[--gray] leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[--secondary-theme-color] mb-4">Need Help with this Service?</h2>
                <p className="text-[--gray] leading-7 mb-6">
                  Share your requirements and our team will contact you to help complete the application, resolve queries, and manage follow-up with the authority.
                </p>
              </div>
              <div className="rounded-[24px] bg-[#fff4e1] p-6">
                <ContactForm />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default RegistrationServicePage;
