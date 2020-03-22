import React from "react";
import { generateList } from "./utils";
import { Row, Col, Container } from "react-bootstrap";

const DivRow = ({ pair }) => {
    const result = pair[0] * pair[1];
    const divPair = Math.random() > 0.5 ? [
        result,
        pair[0]
    ] : [
        result,
        pair[1]
    ];

    return <tr>
        <td>{divPair[0]}</td>
        <td>/</td>
        <td>{divPair[1]}</td>
        <td>=</td>
        <td className="result-box"></td>
    </tr>
}

const MulRow = ({ pair }) => <tr>
    <td>{pair[0]}</td>
    <td>*</td>
    <td>{pair[1]}</td>
    <td>=</td>
    <td className="result-box"></td>
</tr>
    

const ItemsTable = ({ pairs, type }) => <table className="default-table">
    <tbody>
        {
            pairs.map(
                (pair, idx) => type === "mul" ? <MulRow key={idx} pair={pair} /> : <DivRow key={idx} pair={pair} />
            )
        }
    </tbody>
</table>

const Set = ({ type, list }) => <Row>
    <Col md={4}>
        <ItemsTable pairs={list.slice(0, list.length/2)} type={type === "divOnly" ? "div" : "mul"} />
    </Col>
    <Col md={4}>
        <ItemsTable pairs={list.slice(list.length/2)} type={type === "mulOnly" ? "mul" : "div"} />
    </Col>
</Row>

export const PrintTables = ({ type, max, amount, perPage }) => {
    return <Container>
        <Row>
            <Col md={6}>
                <Set list={generateList(max, amount)} type={type}/>
            </Col>
            <Col md={6}>
                {perPage > 1 ? <Set list={generateList(max, amount)} type={type}/> : null}
            </Col>
        </Row>
        <Row className="mt-5">
            <Col md={6}>
                {perPage > 2 ? <Set list={generateList(max, amount)} type={type}/> : null}
            </Col>
            <Col md={6}>
                {perPage > 3 ? <Set list={generateList(max, amount)} type={type}/> : null}
            </Col>
        </Row>
    </Container>
}