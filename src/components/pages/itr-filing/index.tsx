"use client";

import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Banner from "@src/components/banner";

const documents = [
  {
    title: "PAN Card",
    text: "Submit the PAN card copy of the individual or authorized person applying for the filing.",
  },
  {
    title: "Aadhar Card",
    text: "Provide the Aadhar card for identity verification and residential proof.",
  },
  {
    title: "Bank Statements",
    text: "Share bank statements for the relevant financial year to verify income and expenses.",
  },
  {
    title: "Form 16 / Salary Slips",
    text: "Upload Form 16 or salary slips to document your income from employment.",
  },
  {
    title: "Business Records",
    text: "Provide sales invoices, expense bills, and other business records if you run a business.",
  },
  {
    title: "Investment Details",
    text: "Include information about investments, interest income, and other taxable sources.",
  },
  {
    title: "Property Details",
    text: "Submit property ownership papers or rent receipts if you claim deductions for property expenses.",
  },
  {
    title: "GST / Company Details",
    text: "Provide GST registration details or company incorporation information for business taxpayers.",
  },
];

const relatedServices = [
  {
    title: "GST Filing",
    image: "/images/orange-bg-tools-1.png",
  },
  {
    title: "Business Loans",
    image: "/images/orange-bg-tools-3.png",
  },
  {
    title: "Accounting Support",
    image: "/images/orange-bg-tools-5.png",
  },
  {
    title: "Legal Consultation",
    image: "/images/orange-bg-tools-4.webp",
  },
  {
    title: "Company Registration",
    image: "/images/white-bg-tool-1.png",
  },
];

const ItrFiling = () => {
  return (
    <div>
      <Banner route="/compliance" name="Compliance" title="ITR Filing" />

      <section className="mainContainer py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-[#fff4e1] px-4 py-2 text-sm font-semibold tracking-[0.18em] text-[#d97706]">
              Compliance Service
            </span>

            <h1 className="text-4xl lg:text-5xl font-semibold text-[--secondary-theme-color] leading-tight">
              File Your ITR Quickly and Accurately with OneHub
            </h1>

            <p className="text-[--gray] max-w-xl leading-8 text-lg">
              OneHub helps individuals and businesses complete income tax return filing with full accuracy. We prepare your return, verify documents, and submit it to the Income Tax Department on time.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-full bg-[--primary-theme-color] px-4 py-2 text-white font-semibold shadow-[0_20px_50px_rgba(247,148,29,0.18)] transition duration-300 hover:-translate-y-1">
                Start Filing
              </Link>
              <p className="text-[--gray] max-w-xl">
                Need help with tax planning, revisions, or late filing? Our experts guide you through every step.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_20px_60px_rgba(247,148,29,0.12)]">
            <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-5">
              OneHub - Easy way for ITR Filing
            </h2>
            <p className="text-[--gray] leading-8 mb-6">
              Our team reviews your financial documents, calculates deductions, and prepares the return so you can file confidently. We make sure your ITR is compliant and submitted before the deadline.
            </p>

            <div className="rounded-[28px] bg-[#fff3e0] p-6">
              <h3 className="text-xl font-semibold text-[--secondary-theme-color] mb-3">
                Why choose OneHub for ITR filing?
              </h3>
              <ul className="space-y-3 text-[--gray]">
                <li>Accurate tax return preparation with verified supporting documents.</li>
                <li>Timely filing and follow-up to avoid penalties and notices.</li>
                <li>Expert guidance for salaried professionals, businesses, and freelancers.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
                What is ITR Filing?
              </h2>
              <p className="text-[--gray] leading-8">
                Income Tax Return (ITR) filing is the process of reporting your income, deductions, and taxes paid to the Indian Income Tax Department. It is mandatory for individuals and businesses whose income exceeds the threshold, and it helps maintain your compliance record.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
                Why should you file ITR?
              </h2>
              <p className="text-[--gray] leading-8">
                Filing your ITR protects you from penalties and helps you claim tax refunds. It also strengthens your credibility for loan applications, visa processing, and financial transactions.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
              Required Documents & Details to Apply ITR Filing
            </h2>
            <p className="text-[--gray] leading-8 mb-8">
              To complete your ITR filing, gather the documents listed below. OneHub will help you organize everything and submit the return accurately.
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
                  We offer related compliance and business services that help keep your filings consistent and your operations compliant.
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

export default ItrFiling;
