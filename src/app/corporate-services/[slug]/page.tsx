import { notFound } from "next/navigation";
import CorporateServicePage, {
  corporateServices,
} from "@src/components/pages/corporate-service";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CorporateServiceSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  if (!slug || !corporateServices[slug]) {
    notFound();
  }

  return (
    <CorporateServicePage
      service={corporateServices[slug]}
    />
  );
}