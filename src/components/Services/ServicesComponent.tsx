import Service from "../models/service";
import ServiceComponent from "./ServiceComponent";
import H2 from "../UI/H2";

const ServicesComponent: React.FC = () => {
  const services: Service[] = [
    {
      id: "1",
      icon: "👨🏻‍🏫",
      name: "CTO",
      description: (
        <>
          Is your company in need of a Chief-Technology-Officer? I could help
          you with the following topics.
          <br />
          <br />
          <ul className="list-inside list-disc">
            <li key="1">
              <strong>Technology Strategy:</strong> Providing assistance in
              defining and executing a strategy that enables your business to
              grow through technology.
            </li>
            <li key="2">
              <strong>Team Guidance:</strong> Providing guidance and advice to
              optimize your internal technology team or assist in setting up a
              new team.
            </li>
            <li>
              <strong>Innovation and Trends:</strong> Keeping business
              up-to-date with the latest technological trends and ensure you
              always stay ahead of the competition.
            </li>
            <li key="3">
              <strong>Risk Management:</strong>Identifying and mitigating
              technological risks that could harm your business.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "2",
      icon: "🏛️",
      name: "Hands-on Architect",
      description: <></>,
    },
    {
      id: "3",
      icon: "👨‍💻",
      name: "Lead / Principal engineer",
      description: <>engineer description</>,
    },
  ];
  return (
    <div className="container m-4 mx-auto px-6 lg:p-0">
      <H2 id="services">Services</H2>
      <p className="ml-2 dark:text-gray-400">
        Need help with a project that you are doing? Or are stuck with all of
        the technology choices that are out there? Maybe I can help. Below are
        (some) of the services that I offer.
      </p>
      <div className="lg:grid lg:grid-cols-3">
        {services.map((service) => (
          <ServiceComponent key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
