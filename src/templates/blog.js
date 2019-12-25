import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/head";

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      },
    },
  };
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <div>
        <Link to="/blog">Go Back</Link>
        <div>
          <h3>{data.contentfulBlogPost.title}</h3>
          <p>{data.contentfulBlogPost.publishedDate}</p>
        </div>
        {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
        {/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> */}
      </div>
    </Layout>
  );
};

export default Blog;
