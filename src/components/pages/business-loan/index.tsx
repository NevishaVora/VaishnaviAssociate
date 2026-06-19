"use client";

import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Banner from "@src/components/banner";

const documents = [
  {
    title: "Applicant's Name",
    text: "Provide the full name of the individual, company, or entity applying for the loan.",
  },
  {
    title: "Business Type",
    text: "Specify the type of business entity, such as sole proprietorship, partnership, or private limited company.",
  },
  {
    title: "Business Objectives",
    text: "Provide a brief description of your business goals and the purpose of the loan.",
  },
  {
    title: "Brand/Logo/Slogan Name",
    text: "Clearly mention the name, logo, or slogan associated with your business or brand.",
  },
  {
    title: "Registration Address",
    text: "Furnish the official address of the entity applying for the loan or business registration.",
  },
  {
    title: "Income Proof",
    text: "Submit financial statements, bank statements or other documents showing business income.",
  },
  {
    title: "Loan Purpose",
    text: "Explain how the loan proceeds will be used for business expansion, operations, or working capital.",
  },
  {
    title: "Collateral Details",
    text: "Provide information about assets or property being offered as security for the loan, if required.",
  },
];

const relatedServices = [
  {
    title: "Accounting",
    image: "/images/orange-bg-tools-1.png",
  },
  {
    title: "Real Estate",
    image: "/images/orange-bg-tools-4.webp",
  },
  {
    title: "Banking Sector",
    image: "/images/orange-bg-tools-5.png",
  },
  {
    title: "Personal Loans",
    image: "/images/white-bg-tool-1.png",
  },
  {
    title: "Business Registration",
    image: "/images/orange-bg-tools-3.png",
  },
];

const BusinessLoan = () => {
  return (
    <div>
      <Banner route="/loans" name="Business Loans" title="New Business Loans" />

      <section className="mainContainer py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-[#fff4e1] px-4 py-2 text-sm font-semibold tracking-[0.18em] text-[#d97706]">
              Loans Service
            </span>

            <h1 className="text-4xl lg:text-5xl font-semibold text-[--secondary-theme-color] leading-tight">
              Get Business Loans for Growth and Expansion
            </h1>

            <p className="text-[--gray] max-w-xl leading-8 text-lg">
              Businesses registered under GST can access a variety of loan options to support financial needs, expansion, and operating expenses. Vaishnavi Associates helps you choose the right loan and complete the application process.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-full bg-[--primary-theme-color] px-8 py-4 text-white font-semibold shadow-[0_20px_50px_rgba(247,148,29,0.18)] transition duration-300 hover:-translate-y-1">
                Apply Now
              </Link>
              <p className="text-[--gray] max-w-xl">
                Need expert support? Our loan advisors can help you prepare the documentation and connect you with lenders.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_20px_60px_rgba(247,148,29,0.12)]">
            <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-5">
              Vaishnavi Associates - Easy way to apply Business Loans
            </h2>
            <p className="text-[--gray] leading-8 mb-6">
              We simplify business loan applications by reviewing your financials, preparing required documents, and guiding you through lender requirements so you can access the capital your business needs.
            </p>

            <div className="rounded-[28px] bg-[#fff3e0] p-6">
              <h3 className="text-xl font-semibold text-[--secondary-theme-color] mb-3">
                Why choose our loan support?
              </h3>
              <ul className="space-y-3 text-[--gray]">
                <li>Loan options for working capital, expansion, and asset purchase.</li>
                <li>Assistance with lender documentation and eligibility review.</li>
                <li>Fast application submission and follow-up support.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
                What is a Business Loan?
              </h2>
              <p className="text-[--gray] leading-8">
                A business loan provides capital to help businesses manage cash flow, buy inventory, invest in marketing, or expand operations. GST-registered companies can access tailored lending options with better terms.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
                Why should you apply for Business Loans?
              </h2>
              <p className="text-[--gray] leading-8">
                Business loans protect your ability to grow by providing funds for operations and expansion. They empower you to strengthen your market position while preserving ownership and managing cash flows.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
              Required Documents & Details to Apply Business Loans
            </h2>
            <p className="text-[--gray] leading-8 mb-8">
              To apply for a business loan, gather the following details and documents. Vaishnavi Associates will review them and help you submit a complete application.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {documents.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-3xl border border-[#f1f2f5] bg-[#fff8ef] p-5">
                  <CheckCircleOutlinedIcon className="text-[--primary-theme-color] mt-1" sx={{ fontSize: 28 }} />
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
                  A business may need additional services beyond loans, including accounting, legal compliance, and banking support. Talk to an advisor to find the right mix for your business.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {relatedServices.map((service) => (
                <div key={service.title} className="rounded-[28px] overflow-hidden border border-[#e6e8ed] bg-[--white] shadow-[0_18px_55px_rgba(247,148,29,0.12)] transition duration-300 hover:-translate-y-1">
                  <div className="h-36 overflow-hidden bg-[#fff3e0]">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[--secondary-theme-color]">{service.title}</h3>
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

export default BusinessLoan;
