import dynamic from "next/dynamic";
import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Banner from "@src/components/banner";

const ContactForm = dynamic(() => import("@src/components/Forms/contactForm"));

export interface ILoanServiceData {
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
  processSteps?: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
}

const defaultDocuments = [
  {
    title: "Applicant Details",
    text: "Provide the applicant's full name, business name, and legal structure for the loan application.",
  },
  {
    title: "Business Profile",
    text: "Share a summary of your business activity, registration details, and revenue model.",
  },
  {
    title: "Financial Statements",
    text: "Submit bank statements, income proofs, P&L reports, or balance sheets required by the lender.",
  },
  {
    title: "Purpose of Loan",
    text: "Explain how the loan will be used, such as expansion, working capital, equipment purchase, or project funding.",
  },
  {
    title: "Security Details",
    text: "If collateral is required, provide information on assets, property or guarantees offered for security.",
  },
];

const defaultRelatedServices = [
  {
    title: "Business Registration",
    image: "/images/orange-bg-tools-3.png",
  },
  {
    title: "Accounting",
    image: "/images/orange-bg-tools-1.png",
  },
  {
    title: "GST Filing",
    image: "/images/orange-bg-tools-5.png",
  },
  {
    title: "Legal Compliance",
    image: "/images/orange-bg-tools-4.webp",
  },
  {
    title: "Project Report",
    image: "/images/white-bg-tool-1.png",
  },
];

const defaultBenefits = [
  "Personalised loan guidance and lender matching.",
  "Complete document preparation for faster submission.",
  "Support with eligibility review and credit requirements.",
  "Dedicated follow-up until your loan application is processed.",
];

const defaultEligibility = [
  "Valid business or personal identity documents.",
  "Clear financial records and income proof.",
  "Business registration or company details where required.",
  "Accurate loan purpose and asset information if collateral is used.",
];

const defaultProcessSteps = [
  {
    title: "Consultation",
    description: "We discuss your financing goals and identify the right loan option for your business.",
  },
  {
    title: "Document Preparation",
    description: "Our team helps gather and review all documents needed by the lender.",
  },
  {
    title: "Application Submission",
    description: "We submit the loan application and follow up with the lender on your behalf.",
  },
  {
    title: "Approval Support",
    description: "We support any lender queries and help you close the loan once approved.",
  },
];

const defaultFaqs = [
  {
    question: "How long does the loan approval process take?",
    answer: "Approval timelines vary by lender and loan type, but our team works to expedite your application at every stage.",
  },
  {
    question: "Can I apply with incomplete documents?",
    answer: "We recommend submitting a complete set of documents; we can help you identify and arrange any missing items.",
  },
  {
    question: "What if I do not have collateral?",
    answer: "Unsecured loan options are available for eligible businesses, and we can advise on which products match your profile.",
  },
];

const buildLoan = (title: string, options: Partial<ILoanServiceData> = {}) => {
  return {
    title,
    category: "Loan Service",
    headline: `Apply for ${title} with Vaishnavi Associates`,
    description: `Vaishnavi Associates helps you secure ${title.toLowerCase()} by guiding you through lender requirements, documentation, and application follow-up.`,
    sectionOneTitle: `What is ${title}?`,
    sectionOneText: options.sectionOneText || `${title} gives businesses access to tailored financing solutions designed for growth, operations, or asset acquisition. Our team helps you select the right product and prepare your application.`,
    sectionTwoTitle: `Why choose Vaishnavi Associates for ${title}?`,
    sectionTwoText: options.sectionTwoText || `Our loan advisers review your eligibility, documentation and lender terms so you can apply with confidence and improve your chances of approval.`,
    documents: options.documents ?? defaultDocuments,
    relatedServices: options.relatedServices ?? defaultRelatedServices,
    benefits: options.benefits ?? defaultBenefits,
    eligibility: options.eligibility ?? defaultEligibility,
    processSteps: options.processSteps ?? defaultProcessSteps,
    faqs: options.faqs ?? defaultFaqs,
    ...options,
  } as ILoanServiceData;
};

export const loanServices: Record<string, ILoanServiceData> = {
  "home-loan": buildLoan("Home Loan", {
    description: "Home loans help individuals purchase, construct, or renovate residential properties with affordable interest rates and flexible repayment options.",
    sectionOneText: "A home loan provides financing for buying, building, or renovating a house. Loan eligibility is generally based on income, repayment capacity, credit history, and property value.",
    sectionTwoText: "We help you compare lenders, prepare documentation, verify eligibility, and complete the application process to secure the most suitable home loan.",
  }),
  "business-loan": buildLoan("Business Loan", {
    description: "A business loan provides capital for expansion, working capital, or asset purchase. We help you access competitive loan options and complete the submission process.",
    sectionOneText: "A business loan helps companies purchase inventory, hire staff, invest in marketing, or expand operations. We support both secured and unsecured business loans based on your needs.",
    sectionTwoText: "Our team analyses your financials, matches you with suitable lenders, and prepares a complete loan application for faster decision-making.",
  }),
  "personal-loan": buildLoan("Personal Loan", {
    description: "Personal loans provide quick access to funds for medical emergencies, education, travel, weddings, home improvements, and other personal needs.",
    sectionOneText: "A personal loan is an unsecured loan that does not require collateral. Approval is based on factors such as income, employment stability, and credit profile.",
    sectionTwoText: "Our experts help you identify the right lender, prepare the required documents, and manage the application process for faster approval.",
  }),
  "loan-against-property": buildLoan("Loan Against Property", {
    description: "Loan Against Property lets you leverage owned land or real estate for capital. We help you evaluate property eligibility, organise valuation documents, and secure lender approval.",
    sectionOneText: "A Loan Against Property is a secured facility where your property acts as collateral. It is ideal for large funding needs such as business expansion, debts, or working capital.",
    sectionTwoText: "We support the property valuation, document submission and lender process to help you access higher loan amounts at competitive interest rates.",
  }),
  "business-loan-unsecured": buildLoan("Business Loan - Unsecured", {
    description: "Unsecured business loans offer quick funding without collateral. We help you prepare credit, business, and cash flow documents required by lenders.",
    sectionOneText: "An unsecured business loan does not require property or asset security. It is based on business performance, credit history, and repayment capacity.",
    sectionTwoText: "Our experts help you secure the best unsecured financing by reviewing eligibility and aligning your application with lender requirements.",
  }),
  "working-capital": buildLoan("Working Capital Loan", {
    description: "Working capital loans help businesses cover day-to-day expenses like inventory, salaries, and invoices. We make the application process easier and faster.",
    sectionOneText: "A working capital loan finances routine business needs and helps smooth cash flow during seasonal or operational demand.",
    sectionTwoText: "We analyse your cash flow requirements and help you choose a suitable working capital lender with flexible repayment options.",
  }),
  "education-loans-secured": buildLoan("Education Loan - Secured", {
    description: "Secured education loans provide funding for education with asset security. We help you gather academic, financial, and guarantor documents for lender approval.",
    sectionOneText: "A secured education loan offers lower interest rates by using collateral or a guarantor. It is suitable for long-term educational expenses.",
    sectionTwoText: "We guide you through the application process and help you select the best lender terms for the student’s education plan.",
  }),
  "education-loans-unsecured": buildLoan("Education Loan - Unsecured", {
    description: "Unsecured education loans fund tuition and living expenses without collateral. We help you present your financial profile and eligibility clearly to lenders.",
    sectionOneText: "An unsecured education loan is easier to apply for but may have higher interest rates. It is useful for short-term or urgent education financing.",
    sectionTwoText: "Our advisors help you find the right unsecured lender and complete the application documents for a smoother approval process.",
  }),
  "machinery-loans": buildLoan("Machinery Loan", {
    description: "Machinery loans fund purchase of equipment or plant machinery. We help you provide equipment quotations, business projections, and lender-specific documents.",
    sectionOneText: "A machinery loan supports capital expenditure for production equipment, manufacturing tools, or plant upgrades.",
    sectionTwoText: "We help package your financial and technical documents so lenders can assess the purchase and approve financing quickly.",
  }),
  "project-funding": buildLoan("Project Funding", {
    description: "Project funding supports major business investments and expansion initiatives. We help you prepare project reports, cash flow projections, and lender proposals.",
    sectionOneText: "Project funding provides structured finance for large-scale business plans, including expansions, plant installations, or infrastructure works.",
    sectionTwoText: "Our consultants create a strong project proposal and guide you through lender expectations for fast, confident approval.",
  }),
  "car-loans": buildLoan("Car Loan", {
    description: "A car loan helps businesses purchase commercial or executive vehicles. We support the loan application with vehicle details, business income, and insurance documents.",
    sectionOneText: "A car loan finances vehicles meant for business use, such as delivery vans, sales cars, or transport fleets.",
    sectionTwoText: "We help match you with lenders offering favourable terms for commercial vehicle purchases and help complete the loan documentation.",
  }),
  "commercial-vehicle-loans": buildLoan("Commercial Vehicle Loan", {
    description: "Commercial vehicle loans finance trucks, buses, and goods carriers. We assist with vehicle quotes, fleet details, and lender requirements for approval.",
    sectionOneText: "Commercial vehicle loans support operators and businesses that need vehicles for transport, logistics, or passenger services.",
    sectionTwoText: "Our team helps you present the fleet plan and repayment capability to lenders so your commercial vehicle loan can be processed smoothly.",
  }),
};

const LoanServicePage = ({ service }: { service: ILoanServiceData }) => {
  return (
    <div>
      <Banner route="/loans" name="Loans" title={service.title} />

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
                Apply Now
              </Link>
              <p className="text-[--gray] max-w-full md:max-w-xl text-sm sm:text-base">
                Our loan experts are ready to help you with documents and lender submissions.
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
              To apply for this loan, gather the documents and details listed below. We will help you organise everything and submit a complete application.
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
                  These services support your loan process and help keep your business compliant and financially ready.
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

export default LoanServicePage;
