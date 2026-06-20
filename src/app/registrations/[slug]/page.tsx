import { notFound } from "next/navigation";
import RegistrationServicePage, {
  registrationServices,
} from "@src/components/pages/registration-service";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RegistrationServiceSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  if (!slug || !registrationServices[slug]) {
    notFound();
  }

  return (
    <RegistrationServicePage
      service={registrationServices[slug]}
    />
  );
}