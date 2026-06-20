import Link from "next/link";
import Banner from "@src/components/banner";

const services = [
  { name: "Home Loan", path: "/corporate-services/loan-home-loan" },
  { name: "Loan Against Property", path: "/corporate-services/loan-against-property" },
   { name: "Personal Loan", path: "/corporate-services/personal-loan" },
  { name: "Working Capital Loans", path: "/corporate-services/working-capital-loans" },
  { name: "Plant & Machinery Loans", path: "/corporate-services/plant-machinery-loans" },
  { name: "Letter of Credit ( LC )", path: "/corporate-services/letter-of-credit" },
  { name: "Bank Guarantee ( BG )", path: "/corporate-services/bank-guarantee" },
  { name: "Corporate Funding - DEBT", path: "/corporate-services/corporate-funding-debt" },
  { name: "Corporate Funding - EQUITY", path: "/corporate-services/corporate-funding-equity" },
  { name: "Distress NPA Funding", path: "/corporate-services/distress-npa-funding" },
  { name: "NCLT IBC cases across India", path: "/corporate-services/nclt-ibc-cases" },
  { name: "DRT Cases all Over India", path: "/corporate-services/drt-cases" },
  { name: "NPA Bank Loan Settlements", path: "/corporate-services/npa-bank-loan-settlements" },
  { name: "ED CBI EOW Police Cases", path: "/corporate-services/ed-cbi-eow-police-cases" },
  { name: "138 NA & All Bail Matters", path: "/corporate-services/138-na-all-bail-matters" },
];

const CorporateServicesPage = () => {
  return (
    <div>
      <Banner route="/corporate-services" name="Corporate Services" title="Corporate Services" />
      <section className="mainContainer py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-[--secondary-theme-color] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Corporate Services
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Choose the corporate service that fits your business need
          </h1>
          <p className="text-[--gray] mt-4 max-w-3xl mx-auto leading-7">
            Each service page has dedicated content and a custom checklist to match the service you select.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.path}
              href={service.path}
              className="group block rounded-[28px] border border-[#e6e8ed] bg-[--white] p-6 shadow-[0_20px_60px_rgba(247,148,29,0.12)] transition duration-300 hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[--primary-theme-color] mb-4">
                Corporate Service
              </p>
              <h2 className="text-xl font-semibold text-[--secondary-theme-color] mb-4 group-hover:text-[--primary-theme-color]">
                {service.name}
              </h2>
              <p className="text-[--gray] text-sm leading-6">
                View details and requirements for {service.name.toLowerCase()}.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CorporateServicesPage;
