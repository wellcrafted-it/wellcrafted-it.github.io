import React from "react";
import SkillComponent from "./SkillComponent";
import Skill from "../models/skill";
import H2 from "../UI/H2";

const SkillsComponent: React.FC = () => {
  const skills: Skill[] = [
    {
      id: Math.random().toString(),
      icon: "🤓",
      name: "Back-end Development",
      description:
        "An expert in back-end development, my philosophy revolves around creating pragmatic and elegant solutions. I pride myself on developing lean infrastructures that maximize performance without the bloat. Always advocating for the 'right tool for the job', I ensure that every technological choice is purposeful and optimized for the task at hand.",
      languages: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "GoLang",
        "Lua",
      ],
      tools: ["IntelliJ", "PyCharm", "Git", "GitHub", "GitLab", "BitBucket"],
      frameworks: ["Spring", "Spring Boot", "Hibernate", "NextJS"],
    },
    // {
    //   id: Math.random().toString(),
    //   icon: "️📺",
    //   name: "Front-End Development",
    //   description: "FE description",
    //   frameworks: ["React", "Bootstrap", "Tailwind CSS"],
    //   languages: ["Html", "CSS", "JavaScript", "TypeScript"],
    // },
    {
      id: Math.random().toString(),
      icon: "🏛",
      name: "Architecture",
      description:
        "Specializing in crafting modern software architectures, I bring a proven track record of designing systems that are scalable, resilient, and extensible. Leveraging the best practices and cutting-edge technologies, I strive to build robust backbones for applications, ensuring they thrive in the most demanding environments. Your vision, powered by my architectural expertise, will drive innovation and excellence.",
      tools: ["Miro", "UML", "Sequence Diagrams", "Flow Diagrams"],
      frameworks: ["Domain Driven Design", "Design Patterns", "C4"],
    },
    {
      id: Math.random().toString(),
      icon: "🤖",
      name: "CI/CD",
      description:
        "In the realm of CI/CD, my focus is on creating the most efficient and developer-friendly pipelines. I harness the power of automation to ensure rapid, reliable deployments, minimizing the gap between code commits and production releases. By creating environments that resonate with developers, I streamline the integration and delivery processes, allowing teams to focus on innovation rather than operational hurdles.",
      tools: ["CircleCI", "GitHub Actions", "GitLab CI"],
    },
    {
      id: Math.random().toString(),
      icon: "☁️",
      name: "DevOps / Cloud",
      description:
        "Over the course of my career I have built a few Developer Platforms from scratch. These platforms enable developers to build, test, and deploy and maintain their software in a self-service manner. Kubernetes is a central part of these platforms. Hence, the Kubernetes ecosystem is something I am very familiar with. I have mostly worked with AWS, but also have experience with fully self-hosted platforms. Furthermore, I have experience with setting up and managing cloud infrastructure, CI/CD pipelines, and monitoring solutions. The platforms I have worked on were all certified with certifications like SOC2 (Type 1 and 2) or ISO27001.",
      tools: [
        "AWS",
        "Kubernetes",
        "Terraform",
        "Docker",
        "CloudFlare",
        "FluxCD",
        "Backstage",
        "Grafana",
        "Prometheus",
        "Loki",
        "Tempo",
        "MinIO",
        "Cert-Manager",
        "ExternalDNS",
        "Postgres",
        "OpenSearch",
        "Open Policy Agent",
      ],
    },
    {
      id: Math.random().toString(),
      icon: "🔐",
      name: "(Customer) Identity & Access Management",
      description:
        "Having built a Customer Identity and Access management solution from the ground up, I am adept at implementing and managing protocols like OIDC and OAuth. My expertise ensures seamless Single Sign-On (SSO) experiences, paired with secure Single Log-Out (SLO) processes. Navigating the intricate landscape of identity authentication and authorization, I focus on creating robust and user-friendly solutions that prioritize both security and convenience.",
      standards: ["OAuth 2.x", "OpenID Connect", "SAML 2.0", "WS-Federation"],
    },
  ];
  return (
    <div className="container m-4 mx-auto px-6 lg:p-0">
      <H2 id="skills">Skills</H2>
      <p className="ml-2 dark:text-gray-400">
        Below, you'll find a collection of skills I've picked up and polished
        over time.
      </p>
      <div className="lg:grid lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillComponent key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
