import { notFound } from "next/navigation";
import CibilCreditReportServicePage, {
  cibilCreditReportServices,
} from "@src/components/pages/cibil-credit-report-service";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CibilCreditReportSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  if (!slug || !cibilCreditReportServices[slug]) {
    notFound();
  }

  return (
    <CibilCreditReportServicePage
      service={cibilCreditReportServices[slug]}
    />
  );
}