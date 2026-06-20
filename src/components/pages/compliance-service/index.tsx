import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Banner from "@src/components/banner";

export interface IComplianceServiceData {
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
}

const defaultDocuments = [
  {
    title: "Identity Proof",
    text: "Provide PAN, Aadhar, or passport copies for the primary applicant and authorised representative.",
  },
  {
    title: "Business Details",
    text: "Share your business structure, registration number, GST details, and authorised signatory information.",
  },
  {
    title: "Financial Records",
    text: "Upload bank statements, income statements, invoices, or other financial records relevant to the compliance filing.",
  },
  {
    title: "Supporting Documents",
    text: "Provide any additional documents required by the specific compliance service, such as notices, approvals, or contracts.",
  },
  {
    title: "Authority Filings",
    text: "Submit the application forms, declarations, and supporting attachments required by the relevant government authority.",
  },
];

const defaultRelatedServices = [
  {
    title: "GST Filing",
    image: "/images/orange-bg-tools-1.png",
  },
  {
    title: "Legal Consultation",
    image: "/images/orange-bg-tools-4.webp",
  },
  {
    title: "Company Registration",
    image: "/images/orange-bg-tools-3.png",
  },
  {
    title: "Tax Notice Support",
    image: "/images/orange-bg-tools-5.png",
  },
  {
    title: "Project Report",
    image: "/images/white-bg-tool-1.png",
  },
];

const buildCompliance = (title: string, options: Partial<IComplianceServiceData> = {}) => {
  return {
    title,
    category: "Compliance Service",
    headline: `File ${title} with confidence through Vaishnavi Associates`,
    description: options.description || `Vaishnavi Associates helps you complete ${title.toLowerCase()} accurately and on time, with full support for documents, filings, and compliance review.`,
    sectionOneTitle: `What is ${title}?`,
    sectionOneText: options.sectionOneText || `${title} is a compliance requirement for businesses and individuals that helps keep operations aligned with applicable laws and regulations. We help you prepare the correct submission.`,
    sectionTwoTitle: `Why choose Vaishnavi Associates for ${title}?`,
    sectionTwoText: options.sectionTwoText || `Our team ensures your ${title.toLowerCase()} is complete, correct, and submitted promptly so you reduce risk and avoid penalties.`,
    documents: options.documents ?? defaultDocuments,
    relatedServices: options.relatedServices ?? defaultRelatedServices,
    ...options,
  } as IComplianceServiceData;
};

export const complianceServices: Record<string, IComplianceServiceData> = {
  "itr-filing": buildCompliance("ITR Filing", {
    description: "Income tax return filing for individuals and businesses with expert review, documentation support, and submission assistance.",
    sectionOneText: "ITR filing reports your income, deductions, and taxes to the Income Tax Department. It is essential for compliance, refunds, and loan eligibility.",
    sectionTwoText: "We prepare your return, reconcile your financial documents, and file the ITR accurately to avoid notices and penalties.",
    documents: [
      {
        title: "PAN Card",
        text: "Provide your PAN card for identification and tax record matching.",
      },
      {
        title: "Aadhar Card",
        text: "Submit Aadhar for identity verification and linking to your ITR filing.",
      },
      {
        title: "Income Proof",
        text: "Share salary slips, Form 16, bank statements, or business income records.",
      },
      {
        title: "Investment Proof",
        text: "Upload documents for deductions such as insurance, PF, home loan interest, and donations.",
      },
      {
        title: "Business Records",
        text: "Provide sales invoices, expense bills, and GST records if you run a business.",
      },
    ],
  }),
  "gst-filings": buildCompliance("GST Filings", {
    description: "GST filing services for monthly and quarterly returns, reconciliation, and compliance support for registered businesses.",
    sectionOneText: "GST filings ensure your tax output and input records are reported correctly to the GST authority, including return forms such as GSTR-1 and GSTR-3B.",
    sectionTwoText: "We help you reconcile invoices, claim input tax credits, and file returns on time to maintain smooth GST compliance.",
  }),
  "tds-filings": buildCompliance("TDS Filings", {
    description: "TDS filing services for employers and businesses to report tax deducted at source accurately and on schedule.",
    sectionOneText: "TDS filings record taxes deducted from payments such as salaries, contractor fees, rent, or professional services.",
    sectionTwoText: "We help you calculate deductions, prepare return forms, and file on time to avoid penalties and interest.",
  }),
  "esi-pf-return-filings": buildCompliance("ESI PF Return Filings", {
    description: "ESI and PF return filing services to keep employee social security and provident fund compliance on track.",
    sectionOneText: "ESI and PF returns report employee contributions, salaries, and employee details to the respective authorities.",
    sectionTwoText: "We manage contribution calculations, return preparation, and timely filing so your employee compliance stays current.",
  }),
  "roc-filings": buildCompliance("ROC Filings", {
    description: "ROC filing services for companies and LLPs to submit statutory documents to the Registrar of Companies.",
    sectionOneText: "ROC filings include annual returns, financial statements, and event-based filings required under company law.",
    sectionTwoText: "Our team prepares ROC documents accurately and files them within deadlines to maintain good corporate standing.",
  }),
  "15ca-15cb-filing": buildCompliance("15CA & 15CB Filing", {
    description: "15CA and 15CB filing support for cross-border remittances and foreign payment compliance.",
    sectionOneText: "These filings certify the tax status of payments to non-residents and are required for bank approval of international remittances.",
    sectionTwoText: "We coordinate with chartered accountants and prepare the necessary certificates for smooth processing by banks.",
  }),
  "fdi-filing-with-rbi": buildCompliance("FDI Filing With RBI", {
    description: "RBI FDI filing services for foreign direct investment registration and compliance under RBI regulations.",
    sectionOneText: "FDI filings record foreign investment into Indian businesses and ensure adherence to sectoral and approval requirements.",
    sectionTwoText: "We guide you through the RBI filing process and submit required documents to keep your FDI compliant.",
  }),
  "payroll": buildCompliance("Payroll", {
    description: "Payroll compliance services for salary processing, tax deductions, and statutory filings.",
    sectionOneText: "Payroll ensures employees are paid accurately and statutory deductions such as TDS, PF, and ESI are processed correctly.",
    sectionTwoText: "We support payroll calculations, payslip generation, and compliance filings to minimise risks for your business.",
  }),
  "income-tax-notice": buildCompliance("Income Tax Notice", {
    description: "Income tax notice response services to help you resolve notices and communicate with the tax department.",
    sectionOneText: "An income tax notice may arise from discrepancies or missing information in your tax filings.",
    sectionTwoText: "We review the notice, prepare a response, and help you resolve the issue with the tax authorities.",
  }),
  "gst-notice": buildCompliance("GST Notice", {
    description: "GST notice response services for business notices related to GST assessments, audits, or mismatches.",
    sectionOneText: "GST notices require careful review and a documented response to avoid penalties and compliance issues.",
    sectionTwoText: "We help you understand the notice, gather evidence, and prepare a proper reply to the GST department.",
  }),
  "appeals": buildCompliance("Appeals", {
    description: "Appeals services for tax, GST, or corporate compliance orders where you need formal reconsideration.",
    sectionOneText: "Appeals allow you to request review of an adverse order by the relevant authority.",
    sectionTwoText: "We assist with drafting appeal documents, filing submissions, and tracking the appeal process.",
  }),
  "director-change": buildCompliance("Director Change", {
    description: "Director change services for companies needing board updates and filings with the Registrar of Companies.",
    sectionOneText: "Director change filings record additions, resignations, or replacements of company directors.",
    sectionTwoText: "Our team prepares board resolutions, director consent forms, and ROC filings for a smooth transition.",
  }),
  "moa-aoa-amendments": buildCompliance("MOA/AOA Amendments", {
    description: "MOA/AOA amendment services for companies updating their memorandum and articles of association.",
    sectionOneText: "Amendments to the MOA/AOA are required when a company changes its objectives, capital structure, or membership details.",
    sectionTwoText: "We assist with drafting amended clauses, board approvals, and statutory filings with the ROC.",
  }),
  "winding-up-company": buildCompliance("Winding Up Company", {
    description: "Company winding-up support for voluntary or compulsory closure under company law.",
    sectionOneText: "Winding up a company involves settling liabilities, distributing assets, and filing the necessary closure documents.",
    sectionTwoText: "We guide you through the winding-up procedure, compliance requirements, and final ROC filings.",
  }),
  "winding-up-llp": buildCompliance("Winding Up LLP", {
    description: "LLP winding up services for closing a limited liability partnership in compliance with applicable regulations.",
    sectionOneText: "Winding up an LLP includes settling partner obligations, closing accounts, and filing the closure application.",
    sectionTwoText: "We help you manage the LLP closure process and ensure the final filings are completed accurately.",
  }),
};

const ComplianceServicePage = ({ service }: { service: IComplianceServiceData }) => {
  return (
    <div>
      <Banner route="/compliance" name="Compliance" title={service.title} />

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
                Our compliance experts assist you with documents, filings, and regulator submissions.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] md:rounded-[32px] border border-[#e6e8ed] bg-[--white] p-6 md:p-8 shadow-[0_20px_60px_rgba(247,148,29,0.12)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[--secondary-theme-color] mb-4 md:mb-5">
              Vaishnavi Associates - Accurate {service.title}
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
              To complete the filing, gather the documents listed below. We help you prepare and submit everything accurately.
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
                  These services complement your compliance needs and help maintain end-to-end business support.
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
        </div>
      </section>
    </div>
  );
};

export default ComplianceServicePage;
