import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a
          href="https://www.instagram.com/_escobar_19_/"
          rel="noopener noreferrer"
          target="_blank"
        >
          @_escober_19_
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
