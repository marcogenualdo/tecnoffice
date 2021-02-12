import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../components/layout";
import "../styles/chi-siamo.scss";

const ChiSiamo = ({ data }) => {
  const {
    businessData: {
      childMarkdownRemark: { frontmatter: businessData },
    },
    officeBg,
  } = data;

  return (
    <>
      <div
        className="bg"
        style={{
          height: window.screen.height,
        }}
      >
        <Img fluid={officeBg.childImageSharp.fluid} />
      </div>
      <Layout pageInfo={{ pageName: "contattaci" }}>
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
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur? This starter also includes a navbar that
              sticks to the top of the screen when the user scrolls past it, and
              a footer that stays at the bottom of the screen.
            </p>
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
