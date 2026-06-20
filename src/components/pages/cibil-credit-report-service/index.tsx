import dynamic from "next/dynamic";
import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Banner from "@src/components/banner";

const ContactForm = dynamic(() => import("@src/components/Forms/contactForm"));

export interface ICibilCreditReportServiceData {
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
    title: "Credit Report Details",
    text: "Provide your credit report or reference details if available, to support dispute or correction requests.",
  },
  {
    title: "Identity Proof",
    text: "Submit PAN, Aadhar, or passport with accurate personal details to verify your identity.",
  },
  {
    title: "Address Proof",
    text: "Upload a recent utility bill or other address proof to match against your credit bureau records.",
  },
  {
    title: "Supporting Documents",
    text: "Provide bank statements, loan letters, or documentary evidence required for dispute resolution or correction.",
  },
  {
    title: "Communication Records",
    text: "If available, include emails or letters exchanged with banks, lenders, or credit bureaus about the issue.",
  },
];

const defaultRelatedServices = [
  {
    title: "Credit Repair",
    image: "/images/orange-bg-tools-1.png",
  },
  {
    title: "Loan Advisory",
    image: "/images/orange-bg-tools-3.png",
  },
  {
    title: "Dispute Support",
    image: "/images/orange-bg-tools-4.webp",
  },
  {
    title: "Legal Assistance",
    image: "/images/orange-bg-tools-5.png",
  },
  {
    title: "Financial Planning",
    image: "/images/white-bg-tool-1.png",
  },
];

const defaultBenefits = [
  "Fast dispute filing and bureau communication.",
  "Specialised support for credit report corrections and updates.",
  "Assistance with lender coordination and settlement record updates.",
  "Personalised guidance to restore your creditworthiness effectively.",
];

const defaultEligibility = [
  "Valid identity proof such as PAN or Aadhar.",
  "Accurate address proof matching your credit file.",
  "Any available credit report or lender communication details.",
  "Documentation for repayment history or dispute evidence.",
];

const defaultProcessSteps = [
  {
    title: "Report Review",
    text: "We analyse your credit report to identify errors, duplicates, mismatches, or negative entries.",
  },
  {
    title: "Dispute Preparation",
    text: "Our team prepares the necessary dispute and correction documentation for submission to the bureau.",
  },
  {
    title: "Bureau Follow-up",
    text: "We liaise with credit bureaus and lenders to ensure your request is processed and verified quickly.",
  },
  {
    title: "Confirmation & Monitoring",
    text: "We confirm the correction and monitor your updated credit profile until the issue is resolved.",
  },
];

const defaultFaqs = [
  {
    question: "How long does a credit report correction take?",
    answer: "Correction timelines vary by bureau and issue type, but we stay engaged until your dispute is resolved and the report is updated.",
  },
  {
    question: "Can all negative remarks be removed?",
    answer: "We review each remark individually and pursue corrections for inaccurate or unverifiable entries based on evidence.",
  },
  {
    question: "Do you handle PAN or identity mismatches?",
    answer: "Yes, we manage mismatches by verifying documents with lenders and credit bureaus to correct the record.",
  },
];

const buildCibilService = (title: string, options: Partial<ICibilCreditReportServiceData> = {}) => {
  return {
    title,
    category: "CIBIL & Credit Report Services",
    headline: `Expert help for ${title}`,
    description: options.description || `Vaishnavi Associates supports ${title.toLowerCase()} with documentation, credit bureau communication, and dispute management.`,
    sectionOneTitle: `What is ${title}?`,
    sectionOneText: options.sectionOneText || `${title} helps correct or manage your credit report and improve your credit profile with the bureaus.`,
    sectionTwoTitle: `Why choose Vaishnavi Associates for ${title}?`,
    sectionTwoText: options.sectionTwoText || `Our team liaises with credit bureaus, lenders, and reporting agencies to resolve issues quickly and accurately.`,
    documents: options.documents ?? defaultDocuments,
    relatedServices: options.relatedServices ?? defaultRelatedServices,
    benefits: options.benefits ?? defaultBenefits,
    eligibility: options.eligibility ?? defaultEligibility,
    processSteps: options.processSteps ?? defaultProcessSteps,
    faqs: options.faqs ?? defaultFaqs,
    ...options,
  } as ICibilCreditReportServiceData;
};

export const cibilCreditReportServices: Record<string, ICibilCreditReportServiceData> = {
  "correction-wrong-duplicate-entries": buildCibilService("Correction of Wrong / Duplicate Entries", {
    description: "We help correct wrong or duplicate records in your credit report so your score reflects accurate credit history.",
    sectionOneText: "Wrong or duplicate entries can lower your credit score and affect loan eligibility. We identify and dispute incorrect records with the bureaus.",
    sectionTwoText: "Our experts prepare dispute letters, gather evidence, and follow up with credit bureaus until the records are corrected.",
  }),
  "removing-disputes-negative-remarks-repayments": buildCibilService("Removing Disputes, Negative Remarks & Repayments", {
    description: "We work to remove dispute flags, negative remarks, and repayment errors from your credit report.",
    sectionOneText: "Negative remarks and disputes can affect your creditworthiness. We help review the report and coordinate corrections with lenders and credit bureaus.",
    sectionTwoText: "Our team tracks the dispute process and communicates with credit bureaus to ensure timely updates and resolution.",
  }),
  "incorrect-dpd-removal-repayments-update": buildCibilService("Incorrect DPD Removal & Repayments Update", {
    description: "We help remove incorrect delinquency details and update repayment history accurately on your credit report.",
    sectionOneText: "Incorrect DPD (days past due) or repayment records can hurt your credit score. We identify errors and request corrections from the bureau.",
    sectionTwoText: "Our process includes document review, dispute filing, and follow-up until your credit file is updated correctly.",
  }),
  "identity-pan-mismatch-settlement-status-correction": buildCibilService("Identity / PAN Mismatch Settlement Status Correction", {
    description: "We resolve identity, PAN mismatches and incorrect settlement status details that appear on your credit report.",
    sectionOneText: "Mismatches or incorrect settlement status can cause wrong reporting. We verify details and correct the records with credit agencies.",
    sectionTwoText: "Our experts liaise with lenders and bureaus to clear mismatches and ensure your credit file is accurate.",
  }),
  "guidance-npa-overdue-negotiation": buildCibilService("Guidance for NPA / Overdue Negotiation", {
    description: "We provide guidance on negotiating overdue loans and NPA resolution to protect your credit score and business reputation.",
    sectionOneText: "NPA and overdue accounts require careful negotiation and documentation to avoid long-term credit damage.",
    sectionTwoText: "We help you prepare a settlement plan, communicate with lenders, and work on corrective credit reporting.",
  }),
  "full-credit-score-repair-support": buildCibilService("Full Credit Score Repair Support", {
    description: "Complete credit repair support to improve your score through corrections, disputes, and compliance advice.",
    sectionOneText: "Credit score repair involves fixing errors, updating repayments, and ensuring accurate financial reporting.",
    sectionTwoText: "Our team manages the repair process and helps you restore a stronger credit profile with lenders and bureaus.",
  }),
};

const CibilCreditReportServicePage = ({ service }: { service: ICibilCreditReportServiceData }) => {
  return (
    <div>
      <Banner route="/cibil-credit-report-services" name="CIBIL & Credit Report Services" title={service.title} />

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
                We resolve credit report issues and support your restoration process end to end.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] md:rounded-[32px] border border-[#e6e8ed] bg-[--white] p-6 md:p-8 shadow-[0_20px_60px_rgba(247,148,29,0.12)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[--secondary-theme-color] mb-4 md:mb-5">
              Vaishnavi Associates - {service.title}
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
              To complete the process, gather the items listed below. We help you submit the correct documents and follow up with credit bureaus.
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
                  These services support your credit repair, financial health, and loan readiness.
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
{/* 
          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
                <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">Need Help with your Credit Report?</h2>
                <p className="text-[--gray] leading-7 mb-6">
                  Share your credit concern and our team will reach out with the right dispute support, correction guidance, and bureau follow-up.
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

export default CibilCreditReportServicePage;
