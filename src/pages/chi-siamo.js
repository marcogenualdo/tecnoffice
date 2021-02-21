import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/chi-siamo.scss";

const ChiSiamo = ({ data }) => {
  const {
    businessData: {
      childMarkdownRemark: {
        frontmatter: businessData,
        html: businessDescription,
      },
    },
    officeBg,
  } = data;

  return (
    <>
      <div className="bg">
        <Img fluid={officeBg.childImageSharp.fluid} />
      </div>
      <Layout pageInfo={{ pageName: "contattaci" }}>
        <SEO title="Chi Siamo" />

        <div className="floating-box contatti">
          <div className="inner-box">
            <h1>Contatti</h1>
            <ul>
              <li>Email: {businessData.email}</li>
              <li>Telefono: {businessData.phone}</li>
              <li>
                <a href={businessData.addressLink} target="blank">
                  Indirizzo: {businessData.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="floating-box main-text">
          <div className="inner-box">
            <h1>Chi Siamo</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: businessDescription,
              }}
            />
          </div>
        </div>
        <div style={{ clear: "both" }} />
      </Layout>
    </>
  );
};

export default ChiSiamo;

export const query = graphql`
  query {
    businessData: file(relativePath: { eq: "business-info.md" }) {
      childMarkdownRemark {
        frontmatter {
          email
          phone
          address
          addressLink
        }
        html
      }
    }
    officeBg: file(relativePath: { eq: "chi-siamo-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 20000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
