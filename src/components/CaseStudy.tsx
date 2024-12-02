import React from 'react';
import {
  TbReportSearch,
  TbFaceIdError,
  TbBulb,
  TbTools,
  TbAward,
} from 'react-icons/tb';
import { MdOutlineAutoFixHigh } from 'react-icons/md';

interface CaseStudyProps {
  problemStatement: string;
  solutionOverview: string;
  projectJourney: string;
  journeyOverview: string;
  toolsUsed?: { src: string; title: string }[];
  projectOutcome: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  problemStatement,
  solutionOverview,
  toolsUsed,
  // projectJourney,
  journeyOverview,
  projectOutcome,
}) => {
  return (
    <section className="pt-0">
      <div className="container">
        <h4 className="sticky top-7 z-30 mb-8 inline-flex items-center justify-center gap-3 rounded-full bg-dark/10 px-4 py-1 text-xs text-dark outline outline-1 outline-dark/30 backdrop-blur-lg sm:text-sm md:top-8 md:mb-12 md:text-base">
          <TbReportSearch />
          Case Study
        </h4>

        <ul className="max-w-4xl space-y-8 md:space-y-12">
          <li className="space-y-2 md:space-y-3">
            <h4 className="flex items-center gap-2 text-base text-gray-600 md:text-xl">
              <TbFaceIdError />
              Problem Statement
            </h4>
            <p className="border-l-4 pl-4 text-sm leading-relaxed text-gray-600 md:text-base">
              {problemStatement}
            </p>
          </li>

          <li className="space-y-2 md:space-y-3">
            <h4 className="flex items-center gap-2 text-base text-gray-600 md:text-xl">
              <TbBulb />
              Solution Overview
            </h4>
            <p className="border-l-4 pl-4 text-sm leading-relaxed text-gray-600 md:text-base">
              {solutionOverview}
            </p>
          </li>

          <li className="space-y-2 md:space-y-3">
            <h4 className="flex items-center gap-2 text-base text-gray-600 md:text-xl">
              <MdOutlineAutoFixHigh />
              Project Journey
            </h4>
            <p className="border-l-4 pl-4 text-sm leading-relaxed text-gray-600 md:text-base">
              {journeyOverview}
            </p>
            <div className="relative">
              <img
                src="#"
                // src={projectJourney}
                alt="Project Journey"
                className="h-96 w-full object-contain object-left"
              />
            </div>
          </li>

          {toolsUsed && toolsUsed.length > 0 && (
            <li className="space-y-2 md:space-y-3">
              <h4 className="flex items-center gap-2 text-base text-gray-600 md:text-xl">
                <TbTools /> Tools Used
              </h4>
              <div className="mt-8 flex items-center gap-8 border-l-4 pl-4">
                {toolsUsed.map((tool, index) => (
                  <img
                    key={index}
                    src={tool.src}
                    alt={tool.title}
                    title={tool.title}
                    className="size-8 object-contain p-1"
                  />
                ))}
              </div>
            </li>
          )}

          <li className="space-y-2 md:space-y-3">
            <h4 className="flex items-center gap-2 text-base text-gray-600 md:text-xl">
              <TbAward /> Project Outcome
            </h4>
            <p className="border-l-4 pl-4 text-sm leading-relaxed text-gray-600 md:text-base">
              {projectOutcome}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CaseStudy;
