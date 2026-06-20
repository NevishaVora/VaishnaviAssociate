import Link from "next/link";
import Banner from "@src/components/banner";

const services = [
  { name: "ITR Filings", path: "/compliance/itr-filing" },
  { name: "GST Filings", path: "/compliance/gst-filings" },
  { name: "TDS Filings", path: "/compliance/tds-filings" },
  { name: "ESI PF Return Filings", path: "/compliance/esi-pf-return-filings" },
  { name: "ROC Filings", path: "/compliance/roc-filings" },
  { name: "15CA & 15CB Filing", path: "/compliance/15ca-15cb-filing" },
  { name: "FDI Filing With RBI", path: "/compliance/fdi-filing-with-rbi" },
  { name: "Payroll", path: "/compliance/payroll" },
  { name: "Income Tax Notice", path: "/compliance/income-tax-notice" },
  { name: "GST Notice", path: "/compliance/gst-notice" },
  { name: "Appeals", path: "/compliance/appeals" },
  { name: "Director Change", path: "/compliance/director-change" },
  { name: "MOA/AOA Amendments", path: "/compliance/moa-aoa-amendments" },
  { name: "Winding Up Company", path: "/compliance/winding-up-company" },
  { name: "Winding Up LLP", path: "/compliance/winding-up-llp" },
];

const CompliancePage = () => {
  return (
    <div>
      <Banner route="/compliance" name="Compliance" title="Compliance Services" />
      <section className="mainContainer py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-[--secondary-theme-color] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Compliance Solutions
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Explore compliance services for your business needs
          </h1>
          <p className="text-[--gray] mt-4 max-w-3xl mx-auto leading-7">
            Each compliance service page has a dedicated overview, document checklist, and tailored guidance for your filing.
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
                Compliance
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

export default CompliancePage;
