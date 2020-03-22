import React from "react";
import { generateList } from "./utils";
import { Row, Col } from "react-bootstrap";

const MultiplyElement = ({ pair }) => <Col>
    <Row>
        <Col>{pair[0]}</Col>
        <Col>*</Col>
        <Col>{pair[1]}</Col>
        <Col>=</Col>
        <Col>___</Col>
    </Row>
</Col>

export const PrintTables = ({ type, max, amount, perPage }) => {
    const list = generateList(max, amount);
    return <Row>
        <Col md={2}>
            {
                list.map((pair, idx) => <MultiplyElement pair={pair} key={idx} />)
            }
        </Col>
    </Row>
}