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
  projectJourney,
  journeyOverview,
  projectOutcome,
}) => {
  return (
      <div className="container">
        <h4 className="sticky top-10 z-30 mb-12 inline-flex items-center justify-center gap-3 rounded-full bg-dark/10 px-5 py-1 text-dark outline outline-1 outline-dark/30 backdrop-blur-lg">
          <TbReportSearch />
          Case Study
        </h4>

        <div className="max-w-4xl">
          <div className="mb-16">
            <h4 className="mb-4 flex items-center gap-2 text-xl text-gray-700">
              <TbFaceIdError />
              Problem Statement
            </h4>
            <p className="border-l-4 pl-4 text-base leading-relaxed text-gray-600">
              {problemStatement}
            </p>
          </div>

          <div className="mb-16">
            <h4 className="mb-4 flex items-center gap-2 text-xl text-gray-700">
              <TbBulb />
              Solution Overview
            </h4>
            <p className="border-l-4 pl-4 text-base leading-relaxed text-gray-600">
              {solutionOverview}
            </p>
          </div>

          <div className="mb-16">
            <h4 className="mb-8 flex items-center gap-2 text-xl text-gray-700">
              <MdOutlineAutoFixHigh />
              Project Journey
            </h4>
            <p className="border-l-4 pl-4 text-base leading-relaxed text-gray-600">
              {journeyOverview}
            </p>

            <div className="relative">
              <img
                src={projectJourney}
                alt="Project Journey"
                className="h-96 w-full object-contain object-left"
              />
            </div>
          </div>

          {toolsUsed && toolsUsed.length > 0 && (
            <div className="mb-16">
              <h4 className="mb-4 flex items-center gap-2 text-xl text-gray-700">
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
            </div>
          )}

          <div className="mb-16">
            <h4 className="mb-4 flex items-center gap-2 text-xl text-gray-700">
              <TbAward /> Project Outcome
            </h4>
            <p className="border-l-4 pl-4 text-base leading-relaxed text-gray-600">
              {projectOutcome}
            </p>
          </div>
        </div>
      </div>
  );
};

export default CaseStudy;
