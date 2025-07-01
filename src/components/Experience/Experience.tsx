import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiOfficeBuilding } from "react-icons/hi";
import React from "react";
import H2 from "../UI/H2";

const Experience: React.FC = () => {
  return (
    <div className="container m-4 mx-auto px-6 lg:p-0">
      <H2 id="experience">Experience</H2>
      <Timeline className="mx-6">
        <TimelineItem>
          <TimelinePoint icon={HiOfficeBuilding} />
          <TimelineContent>
            <TimelineTime>March 2024 &mdash; now</TimelineTime>
            <TimelineTitle>Platform engineer @ SURF (Freelance)</TimelineTitle>
            <TimelineBody>
              <p>
                For SURF, I am building an Internal Developer Platform from
                scratch. The platform enables developers to build, test, and
                deploy and maintain their software in a self-service manner. For
                building software, CI/CD components for a range of programming
                languages are available. These components standardize the build
                & deploy pipelines. The platform also comes with a number of
                templates for building applications. The DTAP environments are
                built as separate kubernetes clusters that come with a number of
                services like managed Postgres databases, Object store (MinIO) &
                OpenSearch. Code quality and security are paramount, with
                Backstage used to provide insights into these aspects. The
                platform is fully self-hosted. Technologies used: GitLab,
                Kubernetes, Docker, FluxCD, Backstage, Grafana, Prometheus,
                Loki, Tempo, MinIO, Cert-Manager, ExternalDNS, Postgres,
                OpenSearch, Open Policy Agent, Renovate, and more.
              </p>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint icon={HiOfficeBuilding} />
          <TimelineContent>
            <TimelineTime>October 2023 &mdash; March 2024</TimelineTime>
            <TimelineTitle>
              Fullstack engineer @ Steunpunt Levend Erfgoed (Freelance)
            </TimelineTitle>
            <TimelineBody>
              <p>
                As a fullstack engineer at Steunpunt Levend Erfgoed, I was
                responsible for the development of a new platform for pedigree
                management from front-end to infrastructure. Used technologies:
                Typescript, Python, AWS Lambda, Postgres, AWS CDK.
              </p>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint icon={HiOfficeBuilding} />
          <TimelineContent>
            <TimelineTime>July 2021 &mdash; September 2023</TimelineTime>
            <TimelineTitle>CTO Product @ OneWelcome</TimelineTitle>
            <TimelineBody>
              <p>
                My journey at OneWelcome was continuation of an exciting journey
                in the world of secure identity solutions. It was a period of
                substantial growth and transformation, where innovation met
                integration head-on.
              </p>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint icon={HiOfficeBuilding} />
          <TimelineContent>
            <TimelineTime>Jun 2013 &mdash; July 2021</TimelineTime>
            <TimelineTitle>CTO @ Onegini</TimelineTitle>
            <TimelineBody>
              <p>
                My journey at Onegini was a thrilling ride through the realm of
                Customer Identity and Access Management (CIAM). We were
                pioneers, the first CIAM vendor in the Netherlands, making waves
                in the insurance market.
              </p>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint icon={HiOfficeBuilding} />
          <TimelineContent>
            <TimelineTime>Jan 2012 &mdash; Jun 2013</TimelineTime>
            <TimelineTitle>CTO @ Innovation District</TimelineTitle>
            <TimelineBody>
              <p>
                At Innovation District, I led a tech adventure that reshaped how
                we approach online business security. Back in the day, CIAM
                (Customer Identity and Access Management) wasn't even a buzzword
                yet.
              </p>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
