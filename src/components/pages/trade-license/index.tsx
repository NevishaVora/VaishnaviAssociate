"use client";

import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Banner from "@src/components/banner";

const documents = [
  {
    title: "Aadhar Card",
    text: "Provide the Aadhar Card of the individual or authorized representative applying for the trade license.",
  },
  {
    title: "Pan Card",
    text: "Submit the PAN Card of the individual, company, or entity to establish the applicant's legal and tax identity.",
  },
  {
    title: "Trade Name",
    text: "Specify the name, logo, or slogan intended for the business to ensure it is distinguishable for licensing.",
  },
  {
    title: "Business Address",
    text: "Provide the official business address to establish the registered location for the trade license.",
  },
  {
    title: "Rental Agreement/NOC",
    text: "Submit a rental agreement or No Objection Certificate (NOC) from the property owner to confirm lawful use of the premises.",
  },
  {
    title: "Plinth Area",
    text: "Provide details of the property's plinth area, if required, to verify the physical space associated with the business.",
  },
  {
    title: "Electricity Bill",
    text: "Submit a recent electricity bill to serve as proof of the operational address of the applicant.",
  },
  {
    title: "Property Tax Receipt",
    text: "Provide a property tax receipt to further validate the official business address.",
  },
  {
    title: "Incorporation Certificate",
    text: "For companies, submit the Certificate of Incorporation to confirm the legal establishment of the business.",
  },
];

const relatedServices = [
  {
    title: "Business Loans",
    image: "/images/orange-bg-tools-3.png",
  },
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
];

const TradeLicense = () => {
  return (
    <div>
      <Banner route="/registrations" name="Trade License" title="Trade License" />

      <section className="mainContainer py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-[#fff4e1] px-4 py-2 text-sm font-semibold tracking-[0.18em] text-[#d97706]">
              Registration Service
            </span>

            <h1 className="text-4xl lg:text-5xl font-semibold text-[--secondary-theme-color] leading-tight">
              Apply for Trade License Easily with OneHub
            </h1>

            <p className="text-[--gray] max-w-xl leading-8 text-lg">
              A Trade License is an official permission issued by the local municipal authority that enables businesses to operate safely and legally within the city. At OneHub, we simplify the application process so you can focus on running your business.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/login" className="inline-flex items-center justify-center rounded-full bg-[--primary-theme-color] px-4 py-2 text-white font-semibold shadow-[0_20px_50px_rgba(247,148,29,0.18)] transition duration-300 hover:-translate-y-1">
                Apply Now
              </Link>
              <p className="text-[--gray] max-w-xl">
                Need support with documents or filing? Our team is ready to assist you throughout the process.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_20px_60px_rgba(247,148,29,0.12)]">
            <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-5">
              OneHub - Easy way to apply Trade License
            </h2>
            <p className="text-[--gray] leading-8 mb-6">
              OneHub helps you submit your trade license application with confidence. We review your documents, prepare forms, and coordinate with the Municipal Corporation so you get approval faster.
            </p>

            <div className="rounded-[28px] bg-[#fff3e0] p-6">
              <h3 className="text-xl font-semibold text-[--secondary-theme-color] mb-3">
                Why choose OneHub?
              </h3>
              <ul className="space-y-3 text-[--gray]">
                <li>Complete application support from start to finish.</li>
                <li>Local compliance review for safe and approved business operations.</li>
                <li>Quick filing assistance with Municipal authorities.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
                Who can issue a Trade License?
              </h2>
              <p className="text-[--gray] leading-8">
                Trade licenses are issued by the licensing department of the Municipal Corporation, which includes divisions like industry, engineering, and health. These departments grant permission after verifying that business activities comply with local regulations and safety standards.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
                Main Objective of a Trade License Certificate?
              </h2>
              <p className="text-[--gray] leading-8">
                The objective is to regulate business operations within a specific area, protecting public safety, health, and the local environment. Trade licenses ensure that businesses operate responsibly and do not harm the surrounding community.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6e8ed] bg-[--white] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <h2 className="text-3xl font-semibold text-[--secondary-theme-color] mb-4">
              Required Documents & Details to Apply Trade License
            </h2>
            <p className="text-[--gray] leading-8 mb-8">
              To start the trade license application, provide the following documents and details. Our team will review everything and help you submit the application correctly.
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
                  In addition to registration and licensing, your business may need additional services depending on the activity undertaken. Talk to an advisor to learn more.
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

export default TradeLicense;
