import Link from "next/link";
import Banner from "@src/components/banner";

const services = [
  { name: "Correction of Wrong / Duplicate Entries", path: "/cibil-credit-report-services/correction-wrong-duplicate-entries" },
  { name: "Removing Disputes, Negative Remarks & Repayments", path: "/cibil-credit-report-services/removing-disputes-negative-remarks-repayments" },
  { name: "Incorrect DPD Removal & Repayments Update", path: "/cibil-credit-report-services/incorrect-dpd-removal-repayments-update" },
  { name: "Identity / PAN Mismatch Settlement Status Correction", path: "/cibil-credit-report-services/identity-pan-mismatch-settlement-status-correction" },
  { name: "Guidance for NPA / Overdue Negotiation", path: "/cibil-credit-report-services/guidance-npa-overdue-negotiation" },
  { name: "Full Credit Score Repair Support", path: "/cibil-credit-report-services/full-credit-score-repair-support" },
];

const CibilCreditReportPage = () => {
  return (
    <div>
      <Banner route="/cibil-credit-report-services" name="CIBIL & Credit Report Services" title="CIBIL & Credit Report Services" />
      <section className="mainContainer py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-[--secondary-theme-color] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Credit Report Services
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Explore CIBIL and credit report solutions
          </h1>
          <p className="text-[--gray] mt-4 max-w-3xl mx-auto leading-7">
            Choose the right service and see content tailored to each credit report requirement.
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
                Credit Report Service
              </p>
              <h2 className="text-xl font-semibold text-[--secondary-theme-color] mb-4 group-hover:text-[--primary-theme-color]">
                {service.name}
              </h2>
              <p className="text-[--gray] text-sm leading-6">
                Open dedicated content for {service.name.toLowerCase()}.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CibilCreditReportPage;
