import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <h4>
        I currently work as full-stack developer at BuzzyBrains Software (i)
        Pvt. Ltd. Pune, India.{" "}
      </h4>
      <p>
        Want to work with me? <Link to="/contact">Reach Out</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
