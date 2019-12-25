import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Tamal, a full-stack developer living in Pune, India. </h2>
      <p>
        Need A developer? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
