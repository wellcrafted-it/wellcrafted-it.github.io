import { Card } from "flowbite-react";
import React from "react";
import Skill from "../models/skill";

const SkillComponent: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Card key={skill.id} className="m-6 flex-row justify-center text-center">
      <span className="inline-block text-5xl" aria-label="emoji" role="img">
        {skill.icon}
      </span>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {skill.name}
      </h3>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <p className="ml-2 dark:text-gray-400">{skill.description}</p>
      </div>
      {skill.languages && (
        <>
          <h4 className="font-bold dark:text-white">Languages:</h4>
          <div className="mx-auto flex max-w-xs flex-row flex-wrap justify-center gap-2">
            {skill.languages.map((lang) => (
              <span
                key={Math.random().toString()}
                className="bg-gray-100 p-1 px-2 text-lg font-normal dark:bg-gray-700 dark:text-white"
              >
                {lang}
              </span>
            ))}
          </div>
        </>
      )}
      {skill.tools && (
        <>
          <h4 className="font-bold dark:text-white">Tools:</h4>
          <div className="mx-auto flex max-w-xs flex-row flex-wrap justify-center gap-2">
            {skill.tools.map((tools) => (
              <span
                key={Math.random().toString()}
                className="bg-gray-100 p-1 px-2 text-lg font-normal dark:bg-gray-700 dark:text-white"
              >
                {tools}
              </span>
            ))}
          </div>
        </>
      )}
      {skill.frameworks && (
        <>
          <h4 className="font-bold dark:text-white">Frameworks:</h4>
          <div className="mx-auto flex max-w-xs flex-row flex-wrap justify-center gap-2">
            {skill.frameworks.map((framework) => (
              <span
                key={Math.random().toString()}
                className="bg-gray-100 p-1 px-2 text-lg font-normal dark:bg-gray-700 dark:text-white"
              >
                {framework}
              </span>
            ))}
          </div>
        </>
      )}
      {skill.standards && (
        <>
          <h4 className="font-bold dark:text-white">Standards: </h4>
          <div className="mx-auto flex max-w-xs flex-row flex-wrap justify-center gap-2">
            {skill.standards.map((standard) => (
              <span
                key={Math.random().toString()}
                className="bg-gray-100 p-1 px-2 text-lg font-normal dark:bg-gray-700 dark:text-white"
              >
                {standard}
              </span>
            ))}
          </div>
        </>
      )}
    </Card>
  );
};

export default SkillComponent;
