import React from "react";
import Contact from "../components/Contact";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <BackButton />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
