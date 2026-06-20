import dynamic from "next/dynamic";
import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Banner from "@src/components/banner";

const ContactForm = dynamic(() => import("@src/components/Forms/contactForm"));

export interface ICorporateServiceData {
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
    title: "Company or Entity Details",
    text: "Provide the business name, registration number, and legal structure for the corporate service.",
  },
  {
    title: "Financial Records",
    text: "Share audited statements, income summaries, or bank statements depending on the corporate requirement.",
  },
  {
    title: "Support Documentation",
    text: "Provide contracts, agreements, collateral details, or other documents required for the selected service.",
  },
  {
    title: "Authority Filings",
    text: "Submit forms, declarations, approvals, or notices required by banks, regulators, or tribunals.",
  },
  {
    title: "Management Details",
    text: "Provide director or partner details, authorization letters, and signatory information relevant to the filing.",
  },
];

const defaultRelatedServices = [
  {
    title: "Corporate Funding",
    image: "/images/orange-bg-tools-3.png",
  },
  {
    title: "Loan Documentation",
    image: "/images/orange-bg-tools-1.png",
  },
  {
    title: "Legal Advisory",
    image: "/images/orange-bg-tools-4.webp",
  },
  {
    title: "Debt Resolution",
    image: "/images/orange-bg-tools-5.png",
  },
  {
    title: "Credit Support",
    image: "/images/white-bg-tool-1.png",
  },
];

const defaultBenefits = [
  "Dedicated corporate advisory to reduce approval cycles.",
  "Clear documentation support for regulatory and lender needs.",
  "Customised solutions for funding, guarantees, and trade requirements.",
  "Assistance with compliance and government filings for corporate entities.",
];

const defaultEligibility = [
  "Valid company or business registration proof.",
  "Accurate financial statements and management details.",
  "Relevant contracts, agreements, or filing records.",
  "Any lender-specific documentation requested for the chosen service.",
];

const defaultProcessSteps = [
  {
    title: "Business Assessment",
    text: "We review your corporate structure and service requirements to determine the right filing or funding pathway.",
  },
  {
    title: "Document Preparation",
    text: "Our team prepares the necessary corporate documents, contracts, and declarations for submission.",
  },
  {
    title: "Application Submission",
    text: "We submit your application to the relevant authority or lender with full supporting paperwork.",
  },
  {
    title: "Follow-up & Support",
    text: "We track the process, respond to inquiries, and keep you informed until the service is completed.",
  },
];

const defaultFaqs = [
  {
    question: "How soon can I get corporate approval?",
    answer: "Timelines depend on the service and authority, but we work to streamline document preparation and follow-up for faster results.",
  },
  {
    question: "What documents do I need for corporate services?",
    answer: "Typically we request company registration, director details, financial records, and any service-specific filings or agreements.",
  },
  {
    question: "Can you handle lender and regulator coordination?",
    answer: "Yes, we liaise with lenders, regulators, and authorities on your behalf throughout the process.",
  },
];

const buildCorporate = (title: string, options: Partial<ICorporateServiceData> = {}) => {
  return {
    title,
    category: "Corporate Services",
    headline: `Expert support for ${title}`,
    description: options.description || `Vaishnavi Associates provides specialised support for ${title.toLowerCase()} with documentation, approvals, and advisory services tailored to corporate clients.`,
    sectionOneTitle: `What is ${title}?`,
    sectionOneText: options.sectionOneText || `${title} is a corporate solution designed to manage financial, legal, or regulatory requirements for businesses. We help you comply with lender and authority expectations.`,
    sectionTwoTitle: `Why choose Vaishnavi Associates for ${title}?`,
    sectionTwoText: options.sectionTwoText || `Our corporate advisory team guides you through the service, prepares the required documents, and helps secure approvals efficiently.`,
    documents: options.documents ?? defaultDocuments,
    relatedServices: options.relatedServices ?? defaultRelatedServices,
    benefits: options.benefits ?? defaultBenefits,
    eligibility: options.eligibility ?? defaultEligibility,
    processSteps: options.processSteps ?? defaultProcessSteps,
    faqs: options.faqs ?? defaultFaqs,
    ...options,
  } as ICorporateServiceData;
};

export const corporateServices: Record<string, ICorporateServiceData> = {
  "home-loan": buildCorporate("Home Loan", {
    description: "Home loans help individuals purchase, construct, or renovate residential properties with flexible repayment options and competitive interest rates.",
    sectionOneText: "A home loan provides financing for buying, building, or renovating a residential property. Loan eligibility is generally based on income, repayment capacity, and property value.",
    sectionTwoText: "We help you compare lenders, prepare documents, complete the application process, and secure the most suitable home loan for your needs.",
  }),
  "loan-against-property": buildCorporate("Loan Against Property", {
    description: "Loan Against Property lets you raise capital using owned property as collateral, with support for valuation, lender selection, and documentation.",
    sectionOneText: "A Loan Against Property uses the value of business or personal property as security to provide a larger loan amount for corporate needs.",
    sectionTwoText: "We help evaluate the property, complete lender paperwork, and manage the approval process for a smooth transaction.",
  }),
  "personal-loan": buildCorporate("Personal Loan", {
    description: "Personal loans provide quick access to funds for medical expenses, education, travel, weddings, debt consolidation, or other personal requirements.",
    sectionOneText: "A personal loan is an unsecured loan that does not require collateral. Approval is usually based on income, employment status, and credit profile.",
    sectionTwoText: "Our team assists with eligibility assessment, document preparation, lender selection, and application follow-up to improve approval chances.",
  }),
  "working-capital-loans": buildCorporate("Working Capital Loans", {
    description: "Working capital loans finance everyday business operations such as salaries, inventory, and short-term expenses.",
    sectionOneText: "Working capital loans are designed to support the cash flow needs of a business during operational cycles.",
    sectionTwoText: "We assess your cash flow requirements and assist with lender documentation to secure the right corporate facility.",
  }),
  "plant-machinery-loans": buildCorporate("Plant & Machinery Loans", {
    description: "Plant & Machinery Loans finance the purchase of industrial equipment, machinery, and factory assets.",
    sectionOneText: "This loan supports capital expenditure for manufacturing and production equipment used by corporate businesses.",
    sectionTwoText: "We help prepare equipment quotations, cost projections, and lender submissions to obtain funding quickly.",
  }),
  "letter-of-credit": buildCorporate("Letter of Credit (LC)", {
    description: "Letter of Credit services provide payment assurance in international trade and import-export transactions.",
    sectionOneText: "An LC is a bank guarantee that pays the exporter when shipping conditions are met, protecting both buyers and sellers.",
    sectionTwoText: "We help structure the LC, prepare documents, and coordinate with banks so your trade transactions proceed smoothly.",
  }),
  "bank-guarantee": buildCorporate("Bank Guarantee (BG)", {
    description: "Bank Guarantee services support contractual obligations by providing bank-backed assurance to third parties.",
    sectionOneText: "A bank guarantee helps businesses win contracts and bids by guaranteeing payment or performance to the beneficiary.",
    sectionTwoText: "We assist with guarantee structuring, security requirements, and lender negotiations for corporate guarantees.",
  }),
  "corporate-funding-debt": buildCorporate("Corporate Funding - DEBT", {
    description: "Corporate debt funding provides structured finance for expansion, acquisitions, or working capital under debt instruments.",
    sectionOneText: "Debt funding allows businesses to raise capital through loans, bonds, or term finance while retaining ownership.",
    sectionTwoText: "We help you choose the right debt product, prepare financial projections, and submit lender documents for approval.",
  }),
  "corporate-funding-equity": buildCorporate("Corporate Funding - EQUITY", {
    description: "Equity funding enables businesses to raise capital by selling shares or ownership stakes to investors.",
    sectionOneText: "Equity funding helps businesses access growth capital without repaying fixed debt amounts.",
    sectionTwoText: "Our team helps prepare investor proposals, valuation support, and documentation for corporate equity raising.",
  }),
  "distress-npa-funding": buildCorporate("Distress NPA Funding", {
    description: "Distress NPA funding supports corporate restructuring and recovery for non-performing assets.",
    sectionOneText: "NPA funding provides solutions for stressed assets and distressed businesses needing capital or restructuring.",
    sectionTwoText: "We work with financial advisors and lenders to structure funding and recovery plans for corporate NPAs.",
  }),
  "nclt-ibc-cases": buildCorporate("NCLT IBC Cases across India", {
    description: "NCLT IBC services support insolvency cases under the Insolvency and Bankruptcy Code across India.",
    sectionOneText: "These services help companies and creditors navigate resolution plans and legal requirements in NCLT proceedings.",
    sectionTwoText: "We assist with documentation, representation, and procedural compliance in IBC and NCLT matters.",
  }),
  "drt-cases": buildCorporate("DRT Cases all Over India", {
    description: "DRT case support helps resolve disputed debt recovery cases before the Debt Recovery Tribunal.",
    sectionOneText: "DRT cases involve the enforcement of secured debts and related litigation with recovery tribunals.",
    sectionTwoText: "We prepare applications, respond to tribunals, and support corporate clients through DRT proceedings.",
  }),
  "npa-bank-loan-settlements": buildCorporate("NPA Bank Loan Settlements", {
    description: "NPA bank loan settlement services help corporate borrowers negotiate settlement with banks for stressed loans.",
    sectionOneText: "Loan settlements allow NPAs to be resolved through negotiated repayment or one-time settlement terms with banks.",
    sectionTwoText: "We help prepare settlement proposals, documentation, and negotiations to close NPA exposures efficiently.",
  }),
  "ed-cbi-eow-police-cases": buildCorporate("ED CBI EOW Police Cases", {
    description: "Legal support services for cases involving the Enforcement Directorate, CBI, and Economic Offences Wing.",
    sectionOneText: "These services help businesses and individuals respond to investigations, notices, and enforcement actions.",
    sectionTwoText: "We coordinate with legal counsel and prepare the necessary filings to manage corporate legal risk effectively.",
  }),
  "138-na-all-bail-matters": buildCorporate("138 NA & All Bail Matters", {
    description: "Support for Section 138 cases and related bail matters in corporate and financial disputes.",
    sectionOneText: "Section 138 cases involve dishonoured cheques and require careful legal handling to protect business interests.",
    sectionTwoText: "We provide documentation support, legal assistance, and guidance for bail and case resolution matters.",
  }),
};

const CorporateServicePage = ({ service }: { service: ICorporateServiceData }) => {
  return (
    <div>
      <Banner route="/corporate-services" name="Corporate Services" title={service.title} />

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
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-full bg-[--primary-theme-color] px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-semibold shadow-[0_20px_50px_rgba(247,148,29,0.18)] transition duration-300 hover:-translate-y-1">
                Contact Us
              </Link>
              <p className="text-[--gray] max-w-full md:max-w-xl text-sm sm:text-base">
                We support your corporate filings, funding, and dispute resolution from start to finish.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] md:rounded-[32px] border border-[#e6e8ed] bg-[--white] p-6 md:p-8 shadow-[0_20px_60px_rgba(247,148,29,0.12)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[--secondary-theme-color] mb-4 md:mb-5">
              Vaishnavi Associates - Corporate {service.title}
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
              To complete the application, gather the documents listed below. We help you prepare everything accurately.
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
                  These services support corporate growth, compliance and financial readiness.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {service.relatedServices.map((item) => (
                <div key={item.title} className="rounded-[28px] overflow-hidden border border-[#e6e8ed] bg-[--white] shadow-[0_18px_55px_rgba(247,148,29,0.12)] transition duration-300 hover:-translate-y-1">
                  <div className="h-28 md:h-36 overflow-hidden bg-[#fff3e0]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[--secondary-theme-color]">{item.title}</h3>
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

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div><h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[--secondary-theme-color] mb-4">Need Assistance with Corporate Services?</h2>
                <p className="text-[--gray] leading-7 mb-6">
                  Tell us about your corporate need and our experts will contact you with the right documentation, filing support, and approvals guidance.
                </p>
              </div>
              <div className="rounded-[24px] bg-[#fff4e1] p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateServicePage;
