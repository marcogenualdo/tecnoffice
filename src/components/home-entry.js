import React from "react";
import Img from "gatsby-image";
import { Col, Row } from "react-bootstrap";

const leftAlignStyle = {
	margin: "4rem -3rem 4rem -6rem",
	padding: "4rem 3rem 4rem 6rem",
	borderTopRightRadius: "1rem",
	borderBottomRightRadius: "1rem",
	boxShadow: "gray 0px 0px 1rem",
	backgroundImage: "linear-gradient(to left, rgba(244, 244, 244), white)",
}

const rightAlignStyle = {
	margin: "4rem -6rem 4rem -3rem",
	padding: "4rem 6rem 4rem 3rem",
	borderTopLeftRadius: "1rem",
	borderBottomLeftRadius: "1rem",
	boxShadow: "gray 0px 0px 1rem",
	backgroundImage: "linear-gradient(to left, rgba(255, 168, 168, 0.19), white)",
}

const HomeEntry = ({ title, content, imgSrc, alignRight }) => (
  <div fluid className="home-entry" style={alignRight ? rightAlignStyle : leftAlignStyle}>
    <h1>{title}</h1>
    <Row className="home-entry-body">
      <Col md={6} className="entry-text">
        <div
          className="entry-body"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Col>
      <Col md={6} className="entry-img">
        <Img fluid={imgSrc} />
      </Col>
    </Row>
  </div>
);

export default HomeEntry
