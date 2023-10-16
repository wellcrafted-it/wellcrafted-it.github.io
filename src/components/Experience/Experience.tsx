import { Timeline } from "flowbite-react";
import { HiOfficeBuilding } from "react-icons/hi";
import React from "react";
import H2 from "../UI/H2";

const Experience: React.FC = () => {
  return (
    <div className="container m-4 mx-auto px-6 lg:p-0">
      <H2 id="experience">Experience</H2>
      <Timeline className="mx-6">
        <Timeline.Item>
          <Timeline.Point icon={HiOfficeBuilding} />
          <Timeline.Content>
            <Timeline.Time>January 2022 &mdash; September 2023</Timeline.Time>
            <Timeline.Title>CTO Product @ OneWelcome</Timeline.Title>
            <Timeline.Body>
              <p>
                My journey at OneWelcome was continuation of an exciting journey
                in the world of secure identity solutions. It was a period of
                substantial growth and transformation, where innovation met
                integration head-on.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiOfficeBuilding} />
          <Timeline.Content>
            <Timeline.Time>Jun 2013 &mdash; Jul 2021</Timeline.Time>
            <Timeline.Title>CTO @ Onegini</Timeline.Title>
            <Timeline.Body>
              <p>
                My journey at Onegini was a thrilling ride through the realm of
                Customer Identity and Access Management (CIAM). We were
                pioneers, the first CIAM vendor in the Netherlands, making waves
                in the insurance market.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiOfficeBuilding} />
          <Timeline.Content>
            <Timeline.Time>Jan 2012 &mdash; Jun 2013</Timeline.Time>
            <Timeline.Title>CTO @ Innovation District</Timeline.Title>
            <Timeline.Body>
              <p>
                At Innovation District, I led a tech adventure that reshaped how
                we approach online business security. Back in the day, CIAM
                (Customer Identity and Access Management) wasn't even a buzzword
                yet.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Experience;
