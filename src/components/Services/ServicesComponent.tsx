import Service from "../models/service";
import ServiceComponent from "./ServiceComponent";
import H2 from "../UI/H2";

const ServicesComponent: React.FC = () => {
  const services: Service[] = [
    {
      id: Math.random().toString(),
      icon: "👨🏻‍🏫",
      name: "CTO",
      description: (
        <div className="space-y-4">
          <p>
            Is your company in need of a Chief-Technology-Officer? I could help
            you with the following areas.
          </p>

          <ul className="list-outside list-disc pl-4">
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
              <strong>Risk Management:</strong> Identifying and mitigating
              technological risks that could harm your business.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: Math.random().toString(),
      icon: "🏛️",
      name: "Hands-on Architect",
      description: (
        <div className="space-y-4">
          <p className="break-after-column">
            As a hands-on IT architect, I specialize in crafting solutions
            tailored to your unique challenges. Whether you're seeking scalable
            systems or swift market-fit solutions, I prioritize simplicity,
            elegance, pragmatism, and quality to ensure your needs are met. Some
            key areas I could assist with:
          </p>
          <ul className="list-outside list-disc pl-4">
            <li key="1">
              <strong>Identity & Access Management:</strong> Having a very
              strong background in (Customer) Identity & Access Management, I
              can assist with designing / building your customer or employee IAM
              solution.
            </li>
            <li key="2">
              <strong>Event driven architectures:</strong> Any distributed
              system can heavily benefit from a well designed event-driven
              (async) messaging solution. In the past I have built a fully
              serverless event-driven architecture solution that served many
              services and processed billions of events.
            </li>
            <li key="3">
              <strong>Multi-tenant system design:</strong> The efficiency that
              multitenancy can bring you is very high. However, there are many
              challenges that you need to overcome when designing a multi-tenant
              system. Especially, when this system is a distributed system that
              consists of multiple (micro)services.
            </li>
            <li key="4">
              <strong>(Micro)Services architecture design:</strong> Setting the
              right boundaries for your (micro)services is one of the most
              challenging things to do right. With the experience that I bring,
              I can assist in making the right choices from the start and
              prevent a lot of problems further down the line.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: Math.random().toString(),
      icon: "👨‍💻",
      name: "Lead / Principal / Staff engineer",
      description: (
        <div className="space-y-4">
          <p>
            As a lead / principal engineer, I can bring your entire team to the
            next level. There are various areas where my experience can be of
            help
          </p>
          <ul className="list-outside list-disc pl-4">
            <li key={Math.random().toString()}>
              <strong>Secure coding: </strong> Having a strong background in
              building a security product, I have a lot of experience in writing
              secure code.
            </li>
            <li key={Math.random().toString()}>
              <strong>
                Correct implementation of encryption & signing algorithms:
              </strong>
              Choosing and implementing the right encryption / signing
              algorithms is often (unfortunately) not an easy task.
            </li>
            <li key={Math.random().toString()}>
              <strong>Coaching peers: </strong>As an experienced professional, I
              guide and coach peers to enhance their skills and knowledge. This
              collaborative learning process can boost team productivity and
              lead to better software development outcomes.
            </li>
            <li key={Math.random().toString()}>
              <strong>Choosing between generic or specific: </strong> Making the
              right choice between specific or generic is often a challenge.
              Going generic too early can come with a very high price, on the
              other hand doing it too late i also expensive. As I have seen an
              organization from start-up to scale-up, I know the different
              phases of a company and know when to go generic and when a
              specific solution is the better choice.
            </li>
          </ul>
        </div>
      ),
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
