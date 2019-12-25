import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import headerLayout from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  let BlogTitle =
    data && data.site && data.site.siteMetadata
      ? data.site.siteMetadata.title
      : "Gatsby Site";
  return (
    <header className={headerLayout.header}>
      <nav className={headerLayout.nav_bar}>
        <Link className={headerLayout.title} to="/">
          {BlogTitle}
        </Link>
        <div>
          <ul className={headerLayout.nav_list}>
            <li>
              <Link
                className={headerLayout.nav_item}
                activeClassName={headerLayout.active_nav_link}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={headerLayout.nav_item}
                activeClassName={headerLayout.active_nav_link}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={headerLayout.nav_item}
                activeClassName={headerLayout.active_nav_link}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
