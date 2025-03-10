import React from "react";
import About from "../components/About";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <BackButton />
      <About />
    </Layout>
  );
};

export default AboutPage;
