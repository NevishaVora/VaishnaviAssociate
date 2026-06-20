import { notFound } from "next/navigation";
import LoanServicePage, { loanServices } from "@src/components/pages/loan-service";

interface IParams {
  slug?: string;
}

const LoanSlugPage = async ({ params }: { params?: Promise<IParams> }) => {
  const routeParams = await params;
  const slug = routeParams?.slug;

  if (!slug || !loanServices[slug]) {
    return notFound();
  }

  return <LoanServicePage service={loanServices[slug]} />;
};

export default LoanSlugPage;
