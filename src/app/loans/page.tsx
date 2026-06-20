import Link from "next/link";
import Banner from "@src/components/banner";

const services = [
  { name: "Home Loan", path: "/loans/home-loan" },
  { name: "Loan Against Property", path: "/loans/loan-against-property" },
  { name: "Personal Loan", path: "/loans/personal-loan" },
  { name: "Business Loan - Secured", path: "/loans/business-loan" },
  { name: "Business Loan - Unsecured", path: "/loans/business-loan-unsecured" },
  { name: "Working Capital", path: "/loans/working-capital" },
  { name: "Education Loan - Secured", path: "/loans/education-loans-secured" },
  { name: "Education Loan - Unsecured", path: "/loans/education-loans-unsecured" },
  { name: "Machinery Loans", path: "/loans/machinery-loans" },
  { name: "Project Funding", path: "/loans/project-funding" },
  { name: "Car Loans", path: "/loans/car-loans" },
  { name: "Commercial Vehicle Loans", path: "/loans/commercial-vehicle-loans" },
];

const LoansPage = () => {
  return (
    <div>
      <Banner route="/loans" name="Loans" title="Loan Services" />
      <section className="mainContainer py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-[--secondary-theme-color] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Financing Solutions
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Explore loan services designed for your business needs
          </h1>
          <p className="text-[--gray] mt-4 max-w-3xl mx-auto leading-7">
            Choose the right loan product for expansion, working capital, assets, education, or transport. Each service page provides tailored guidance and documents.
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
                Loan Service
              </p>
              <h2 className="text-xl font-semibold text-[--secondary-theme-color] mb-4 group-hover:text-[--primary-theme-color]">
                {service.name}
              </h2>
              <p className="text-[--gray] text-sm leading-6">
                Learn the requirements and application steps for {service.name.toLowerCase()}.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LoansPage;
