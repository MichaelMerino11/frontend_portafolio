import React from "react";
import Projects from "../components/Projects";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";

const ProjectsPage = () => {
  return (
    <Layout>
      <BackButton />
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;
