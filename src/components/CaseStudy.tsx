import React from "react";
import {
  TbReportSearch,
  TbFaceIdError,
  TbBulb,
  TbTools,
  TbAward,
} from "react-icons/tb";
import { MdOutlineAutoFixHigh } from "react-icons/md";

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
    <section className="pb-16">
      <div className="container mx-auto">
        <h4 className="sticky top-10 z-30 px-5 py-1 rounded-full inline-flex items-center justify-center gap-3 outline outline-1 backdrop-blur-lg text-dark bg-dark/10 outline-dark/30 mb-12">
          <TbReportSearch />
          Case Study
        </h4>

        <div className="mb-16">
          <h4 className="text-xl mb-4 text-gray-700 flex items-center gap-2">
            <TbFaceIdError />
            Problem Statement
          </h4>
          <p className="text-base leading-relaxed text-gray-600 border-l-4 pl-4">
            {problemStatement}
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-xl mb-4 text-gray-700 flex items-center gap-2">
            <TbBulb />
            Solution Overview
          </h4>
          <p className="text-base leading-relaxed text-gray-600 border-l-4 pl-4">
            {solutionOverview}
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-xl mb-8 text-gray-700 flex items-center gap-2">
            <MdOutlineAutoFixHigh />
            Project Journey
          </h4>
          <p className="text-base leading-relaxed text-gray-600 border-l-4 pl-4">
            {journeyOverview}
          </p>

          <div className="relative">
            <img
              src={projectJourney}
              alt="Project Journey"
              className="w-full h-96 object-contain object-left"
            />
          </div>
        </div>

        {toolsUsed && toolsUsed.length > 0 && (
          <div className="mb-16">
            <h4 className="text-xl mb-4 text-gray-700 flex items-center gap-2">
              <TbTools /> Tools Used
            </h4>
            <div className="flex items-center gap-8 mt-8 border-l-4 pl-4">
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
          <h4 className="text-xl mb-4 text-gray-700 flex items-center gap-2">
            <TbAward /> Project Outcome
          </h4>
          <p className="text-base leading-relaxed text-gray-600 border-l-4 pl-4">
            {projectOutcome}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
