import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import Tee from '../../../img/classic-tee.jpg'

const CartItem = () => (
    <Grid>
        <Row>
            <Col md={4}>
                <img src={Tee} width="100px"/>
            </Col>
            <Col md={8}>hello</Col>
        </Row>
    </Grid>
)

export default CartItem;