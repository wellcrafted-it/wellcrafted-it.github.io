import { Card } from "flowbite-react";
import Service from "../models/service";
import React from "react";

const ServiceComponent: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <Card key={service.id} className="flew-row m-6 justify-center text-center">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <span
          className="mb-6 inline-block text-5xl"
          aria-label="emoji"
          role="img"
        >
          {service.icon}
        </span>
        <p>{service.name}</p>
      </h3>
      <div className="text-left font-normal text-gray-700 dark:text-gray-400">
        {service.description}
      </div>
    </Card>
  );
};

export default ServiceComponent;
