import React from "react";
import { FaPencilAlt, FaCode, FaToolbox, FaTrophy } from "react-icons/fa";

import { TbReportSearch } from "react-icons/tb";
import { TbFaceIdError } from "react-icons/tb";
import { TbBulb } from "react-icons/tb";
import { TbTools } from "react-icons/tb";
import { TbAward } from "react-icons/tb";

import { MdOutlineAutoFixHigh } from "react-icons/md";
interface CaseStudyProps {
  projectTitle: string;
  designerName: string;
  developerName: string;
  problemStatement: string;
  solutionOverview: string;
  designerResponsibilities: string[];
  developerResponsibilities: string[];
  toolsUsed: string[];
  projectOutcome: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  projectTitle,
  designerName,
  developerName,
  problemStatement,
  solutionOverview,
  designerResponsibilities,
  developerResponsibilities,
  toolsUsed,
  projectOutcome,
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* <h3 className="text-6xl mb-12 text-gray-800">
          {projectTitle} - 
          Case Study
        </h3> */}

        <h4 className="sticky top-10 z-30 px-5 py-1 rounded-full inline-flex items-center justify-center gap-3 outline outline-1 backdrop-blur-lg text-dark bg-dark/10 outline-dark/30 mb-12">
          <TbReportSearch />
          Case Study
        </h4>

        <div className="mb-16">
          <h4 className="text-2xl mb-4 text-gray-700 flex items-center gap-2">
            <TbFaceIdError />
            Problem Statement
          </h4>
          <p className="text-lg leading-relaxed text-gray-600 border-l-4 pl-4">
            {problemStatement}
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-2xl mb-4 text-gray-700 flex items-center gap-2">
            <TbBulb />
            Solution Overview
          </h4>
          <p className="text-lg leading-relaxed text-gray-600 border-l-4 pl-4">
            {solutionOverview}
          </p>
        </div>

        {/* Roles & Responsibilities with Timeline */}
        <div className="mb-16">
          <h4 className="text-2xl mb-8 text-gray-700 flex items-center gap-2">
            <MdOutlineAutoFixHigh />
            Roles & Responsibilities
          </h4>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 left-4 w-1 bg-gray-100 h-full"></div>

            {/* Designer Responsibilities */}
            <div className="mb-8 pl-12">
              <h5 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
                <FaPencilAlt /> {designerName} - UI/UX Designer
              </h5>
              {designerResponsibilities.map((responsibility, index) => (
                <div key={index} className="relative pl-4 group">
                  <div className="absolute left-6 top-1/2 size-1 bg-gray-500 rounded-full outline outline-2 outline-gray-200 outline-offset-2 group-hover:outline-offset-0 transition-300"></div>
                  <ul className="pl-6">
                    <li className="text-base text-gray-600 leading-loose">
                      {responsibility}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* Developer Responsibilities */}
            <div className="mb-8 pl-12">
              <h4 className="text-lg mb-4 text-gray-800 flex items-center gap-2">
                <FaCode /> {developerName} - Developer
              </h4>
              {developerResponsibilities.map((responsibility, index) => (
                <div key={index} className="relative pl-4 group">
                  <div className="absolute left-6 top-1/2 size-1 bg-gray-500 rounded-full outline outline-2 outline-gray-200 outline-offset-2 group-hover:outline-offset-0 transition-300"></div>
                  <ul className="pl-6">
                    <li className="text-base text-gray-600 leading-loose">
                      {responsibility}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Used */}
        <div className="mb-16">
          <h4 className="text-2xl mb-4 text-gray-700 flex items-center gap-2">
            <TbTools /> Tools Used
          </h4>
          {/* <ul className="list-none space-y-3">
            {toolsUsed.map((tool, index) => (
              <li
                key={index}
                className="text-lg text-gray-600 flex items-start gap-2"
              >
                <span className="text-gold">•</span> {tool}
              </li>
            ))}
          </ul> */}

          <div className="flex items-center gap-8 mt-8 border-l-4 pl-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt=""
              className="size-8 object-contain p-1"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt=""
              className="size-8 object-contain p-1"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt=""
              className="size-8 object-contain p-1"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg"
              alt=""
              className="size-8 object-contain p-1"
            />
          </div>
        </div>

        {/* Project Outcome */}
        <div className="mb-16">
          <h4 className="text-2xl mb-4 text-gray-700 flex items-center gap-2">
            <TbAward /> Project Outcome
          </h4>
          <p className="text-lg leading-relaxed text-gray-600 border-l-4 border-gold pl-4">
            {projectOutcome}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
