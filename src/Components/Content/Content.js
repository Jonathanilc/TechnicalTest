import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Tee from '../../img/classic-tee.jpg';

import ContentBox from './ContentBox/ContentBox'
import "./Content.css";

const content = () => (
  <Grid className="content">
    <Row className="show-grid">
      <Col md={6}>
        <img src={Tee} alt="Tee" width="75%"/>
      </Col>
      <Col md={6}>
        <ContentBox></ContentBox>
      </Col>
    </Row>
  </Grid>
);

export default content;
