import RegistrationServicePage, { registrationServices } from "@src/components/pages/registration-service";

const TradeLicensePage = () => {
  return <RegistrationServicePage service={registrationServices["trade-license"]} />;
};

export default TradeLicensePage;
