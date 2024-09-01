import React from 'react';
import { FaPencilAlt, FaCode, FaToolbox, FaTrophy } from 'react-icons/fa';

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
        <h2 className="text-6xl mb-12 text-center font-bold text-gray-800">
          {projectTitle} - Case Study
        </h2>

        <div className="mb-16">
          <h4 className="text-2xl mb-4 text-gray-700">
            Problem Statement
          </h4>
          <p className="text-lg leading-relaxed text-gray-600 border-l-4 pl-4">
            {problemStatement}
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-2xl mb-4 text-gray-700">
            Solution Overview
          </h4>
          <p className="text-lg leading-relaxed text-gray-600 border-l-4 pl-4">
            {solutionOverview}
          </p>
        </div>

        {/* Roles & Responsibilities with Timeline */}
        <div className="mb-16">
          <h4 className="text-3xl mb-8 text-gray-700">
            Roles & Responsibilities
          </h4>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 left-4 w-1 bg-gray-300 h-full"></div>

            {/* Designer Responsibilities */}
            <div className="mb-8 pl-12">
              <h5 className="text-xl mb-4 text-gray-800 flex items-center gap-2">
                <FaPencilAlt className="text-gold" /> {designerName} - UI/UX Designer
              </h5>
              {designerResponsibilities.map((responsibility, index) => (
                <div key={index} className="relative mb-6">
                  <div className="absolute left-0 top-1 w-4 h-4 bg-gold rounded-full"></div>
                  <ul className="pl-6">
                    <li className="text-lg text-gray-700">
                      {responsibility}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* Developer Responsibilities */}
            <div className="mb-8 pl-12">
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <FaCode className="text-gold" /> {developerName} - Developer
              </h4>
              {developerResponsibilities.map((responsibility, index) => (
                <div key={index} className="relative mb-6">
                  <div className="absolute left-0 top-1 w-4 h-4 bg-gold rounded-full"></div>
                  <ul className="pl-6">
                    <li className="text-lg text-gray-700">
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
            <FaToolbox className="text-gold" /> Tools Used
          </h4>
          <ul className="list-none space-y-3">
            {toolsUsed.map((tool, index) => (
              <li
                key={index}
                className="text-lg text-gray-600 flex items-start gap-2"
              >
                <span className="text-gold">•</span> {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Outcome */}
        <div className="mb-16">
          <h4 className="text-2xl mb-4 text-gray-700 flex items-center gap-2">
            <FaTrophy className="text-gold" /> Project Outcome
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