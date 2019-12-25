import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <span>Created by {data.site.siteMetadata.author} &copy; 2019</span>
      </div>
    </footer>
  );
};

export default Footer;
