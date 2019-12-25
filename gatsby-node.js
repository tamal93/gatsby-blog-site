const path = require("path");

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNode, createNodeField } = actions;

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md");

//     createNodeField({
//       node,
//       value: slug,
//       name: "slug",
//     });
//   }
// };

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("./src/templates/blog.js");

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
