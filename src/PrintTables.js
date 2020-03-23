import React from "react";
import { generateList } from "./utils";
import { Row, Col, Container } from "react-bootstrap";

const DivRow = ({ pair }) => {
    const result = pair[0] * pair[1];

    return <tr>
        <td>{result}</td>
        <td>/</td>
        <td>{pair[0]}</td>
        <td>=</td>
        <td className="result-box"></td>
    </tr>
}

const MulRow = ({ pair }) => <tr>
    <td>{pair[0]}</td>
    <td>⋅</td>
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
    <Col md={5}>
        <ItemsTable pairs={list.slice(0, list.length/2)} type={type === "divOnly" ? "div" : "mul"} />
    </Col>
    <Col md={5}>
        <ItemsTable pairs={list.slice(list.length/2)} type={type === "mulOnly" ? "mul" : "div"} />
    </Col>
</Row>

export const PrintTables = ({ type, max, amount, perPage }) => {
    return <Container>
        <Row>
            <Col md={5}>
                <Row>
                    <Col><h5 className="set-name">Zestaw 1</h5></Col>
                </Row>
                <Set list={generateList(max, amount)} type={type}/>
            </Col>
            {
                perPage > 1 ?
                <Col md={5}>
                    <Row>
                        <Col><h5 className="set-name">Zestaw 2</h5></Col>
                    </Row>
                    {perPage > 1 ? <Set list={generateList(max, amount)} type={type}/> : null}
                </Col> :
                null
            }
        </Row>
        <Row className="mt-5">
            {
                perPage > 2 ?
                <Col md={5}>
                    <Row>
                        <Col><h5 className="set-name">Zestaw 3</h5></Col>
                    </Row>
                    {perPage > 1 ? <Set list={generateList(max, amount)} type={type}/> : null}
                </Col> :
                null
            }
            {
                perPage > 3 ?
                <Col md={5}>
                    <Row>
                        <Col><h5 className="set-name">Zestaw 4</h5></Col>
                    </Row>
                    {perPage > 1 ? <Set list={generateList(max, amount)} type={type}/> : null}
                </Col> :
                null
            }
        </Row>
    </Container>
}