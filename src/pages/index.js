import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../components/layout";
import HomeEntry from "../components/home-entry";
import SEO from "../components/seo";
import "../styles/home.scss";

const Services = ({ entries }) => (
  <div className="entries-wrapper">
    {entries.map((entry, index) => (
      <HomeEntry
        title={entry.frontmatter.title}
        imgSrc={entry.frontmatter.featuredImage.childImageSharp.fluid}
        content={entry.html}
        alignRight={!!(index % 2)}
      />
    ))}
  </div>
);

const IndexPage = ({ data }) => {
  const HomeIntro = ({ className }) => (
    <div className={`${className} home-intro`}>
      <h1>{data.intro.childMarkdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.intro.childMarkdownRemark.html,
        }}
      />
    </div>
  );

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" />

      <div className="office-bg">
        <Img fluid={data.officeBg.childImageSharp.fluid} />
      </div>
      <div className="copier-bg">
        <Img
          fluid={
            data.intro.childMarkdownRemark.frontmatter.featuredImage
              .childImageSharp.fluid
          }
        />
      </div>
      <div className="lines-bg">
        <Img fluid={data.linesBg.childImageSharp.fluid} />
      </div>

      <HomeIntro className="home-intro-box" />
      <HomeIntro className="home-intro-out" />

      <div className="ricoh-hero">
        <h2>Rivenditore autorizzato</h2>
        <span className="ricoh-logo">
          <Img fluid={data.logoRicoh.childImageSharp.fluid} />
        </span>
      </div>
      <Services entries={data.services.nodes} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    officeBg: file(relativePath: { eq: "home-bg-office-no-printer.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    linesBg: file(relativePath: { eq: "home-bg-lines.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoRicoh: file(relativePath: { eq: "logo-ricoh.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    intro: file(relativePath: { eq: "home/intro.md" }) {
      childMarkdownRemark {
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
    services: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { fileAbsolutePath: { regex: "home/services/" } }
    ) {
      nodes {
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
`;
