import TradeLicense from "@src/components/pages/trade-license";
import { notFound } from "next/navigation";

interface IParams {
  slug?: string;
}

const RegistrationPage = async ({ params }: { params?: Promise<IParams> }) => {
  const routeParams = await params;

  if (routeParams?.slug !== "trade-license") {
    return notFound();
  }

  return <TradeLicense />;
};

export default RegistrationPage;

