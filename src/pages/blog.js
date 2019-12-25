import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import blogStyles from "./blog.module.scss";
import Head from "../components/head";

const BlogPage = () => {
  let querypostData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  let posts =
    querypostData &&
    querypostData.allContentfulBlogPost &&
    querypostData.allContentfulBlogPost.edges
      ? querypostData.allContentfulBlogPost.edges
      : [];
  return (
    <Layout>
      <Head title="Blog" />
      <h2>Blogs</h2>
      <hr />
      <div>
        {posts.map((post, key) => {
          return (
            <div key={key} className={blogStyles.post}>
              <h3>
                <Link to={"/blog/" + post.node.slug}>{post.node.title}</Link>
              </h3>
              <p>{post.node.publishedDate}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogPage;
