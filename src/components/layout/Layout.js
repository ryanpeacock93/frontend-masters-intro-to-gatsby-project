import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from './Seo';

const GET_SITE_DATA = graphql`
  {
    site {
      siteMetadata {
        description
        image
        siteUrl
        title
      }
    }
  }
`;

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  const data = useStaticQuery(GET_SITE_DATA);
  const meta = data?.site?.siteMetadata ?? {};
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
