import React from "react";
import { useParams } from "react-router-dom";

const PortfolioPresentation: React.FC = () => {
  const { website } = useParams();
  return (
    <>
      <h1>{website}</h1>
    </>
  );
};

export default PortfolioPresentation;
