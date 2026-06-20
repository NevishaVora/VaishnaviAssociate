import { notFound } from "next/navigation";
import ComplianceServicePage, { complianceServices } from "@src/components/pages/compliance-service";

interface IParams {
  slug?: string;
}

const ComplianceSlugPage = async ({ params }: { params?: Promise<IParams> }) => {
  const routeParams = await params;
  const slug = routeParams?.slug;

  if (!slug || !complianceServices[slug]) {
    return notFound();
  }

  return <ComplianceServicePage service={complianceServices[slug]} />;
};

export default ComplianceSlugPage;
