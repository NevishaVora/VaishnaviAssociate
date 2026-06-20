import Link from "next/link";
import Banner from "@src/components/banner";

export const metadata = {
  title: "Registrations | Vaishnavi Associates",
  description: "Explore all business registration services offered by Vaishnavi Associates.",
};

const services = [
  { name: "Trade License", path: "/registrations/trade-license" },
  { name: "Labour License", path: "/registrations/labour-license" },
  { name: "Food License", path: "/registrations/food-license" },
  { name: "GST Registration", path: "/registrations/gst-registration" },
  { name: "Udyam Registration", path: "/registrations/udyam-registration" },
  { name: "Company Registration", path: "/registrations/company-registration" },
  { name: "LLP Incorporation", path: "/registrations/llp-incorporation" },
  { name: "Partnership Firm Registration", path: "/registrations/partnership-firm-registration" },
  { name: "Trademark Registration", path: "/registrations/trademark-registration" },
  { name: "ESI/PF Registration", path: "/registrations/esi-pf-registration" },
  { name: "Professional Tax Registration", path: "/registrations/professional-tax-registration" },
  { name: "Society Registration", path: "/registrations/society-registration" },
  { name: "TG Rera Registration", path: "/registrations/tg-rera-registration" },
  { name: "Trust Registration", path: "/registrations/trust-registration" },
  { name: "APEDA Registration", path: "/registrations/apeda-registration" },
  { name: "Import Export Code", path: "/registrations/import-export-code" },
  { name: "Digital Signature Certificate", path: "/registrations/digital-signature-certificate" },
  { name: "Drug License", path: "/registrations/drug-license" },
  { name: "FCRA Registration", path: "/registrations/fcra-registration" },
  { name: "Halal License & Registration", path: "/registrations/halal-license-registration" },
  { name: "ISO Registration", path: "/registrations/iso-registration" },
  { name: "ICEGATE Registration", path: "/registrations/icegate-registration" },
  { name: "RCMC Registration", path: "/registrations/rcmc-registration" },
  { name: "LEI Code", path: "/registrations/lei-code" },
  { name: "Bar Code Registration", path: "/registrations/bar-code-registration" },
  { name: "BIS Registration", path: "/registrations/bis-registration" },
  { name: "Design Registration", path: "/registrations/design-registration" },
  { name: "Copyright Registration", path: "/registrations/copyright-registration" },
  { name: "Patent Registration", path: "/registrations/patent-registration" },
  { name: "12A & 80G Registration", path: "/registrations/12a-80g-registration" },
  { name: "Project Report", path: "/registrations/project-report" },
];

const RegistrationsPage = () => {
  return (
    <div>
      <Banner route="/registrations" name="Registrations" title="Registrations" />
      <section className="mainContainer py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-[--secondary-theme-color] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Registration Services
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Choose the right registration service for your business
          </h1>
          <p className="text-[--gray] mt-4 max-w-3xl mx-auto leading-7">
            Vaishnavi Associates provides expert support for licenses, registrations and compliance so your business can start quickly and stay protected.
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
                Registration
              </p>
              <h2 className="text-xl font-semibold text-[--secondary-theme-color] mb-4 group-hover:text-[--primary-theme-color]">
                {service.name}
              </h2>
              <p className="text-[--gray] text-sm leading-6">
                Click to view detailed guidance, document requirements, and next steps for {service.name.toLowerCase()}.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RegistrationsPage;
