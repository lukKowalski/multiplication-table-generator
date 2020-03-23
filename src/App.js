import React, { useState } from 'react';
import './App.css';
import { PrintTables } from "./PrintTables";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Form, Alert, Button } from 'react-bootstrap';



function App() {
  const [type, setType] = useState("default");
  const [max, setMax] = useState(50);
  const [amount, setAmount] = useState(40);
  const [perPage, setPerPage] = useState(4);

  return (
    <div className="App">
      <Container className="controls-section mt-3 p-4">
        <Row>
          <Col>
            <h4>Generator tabliczki mnozenia</h4>
            <small>repo: <a href="https://github.com/lukKowalski/multiplication-table-generator">
            https://github.com/lukKowalski/multiplication-table-generator</a> </small>
          </Col>
        </Row>
        <Form className="mt-3">
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Col>
              <Form.Control 
                as="select"
                value={type}
                onChange={e => setType(e.target.value)}
              >
                <option value="mulOnly">Mnozenie</option>
                <option value="divOnly">Dzielenie</option>
                <option value="default">Mnozenie i dzielenie</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control 
                as="select"
                value={max}
                onChange={e => setMax(e.target.value)} 
              >
                <option value={20}>Działania do 20</option>
                <option value={30}>Działania do 30</option>
                <option value={40}>Działania do 40</option>
                <option value={50}>Działania do 50</option>
                <option value={100}>Działania do 100</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control 
                as="select"
                value={amount}
                onChange={e => setAmount(e.target.value)} 
              >
                <option value={10}>10 Przykładów</option>
                <option value={20}>20 Przykładów</option>
                <option value={30}>30 Przykładów</option>
                <option value={40}>40 Przykładów</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control 
                as="select"
                value={perPage}
                onChange={e => setPerPage(e.target.value)}
              >
                <option value={1}>1 Zestaw na stronę</option>
                <option value={2}>2 Zestawy na stronę</option>
                <option value={3}>3 Zestawy na stronę</option>
                <option value={4}>4 Zestawy na stronę</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
        <Row>
          <Col>
            <Alert variant="info">Wciśnij Ctrl + P aby uzyskać wersję do druku, lub wciśnij ten przycisk: <Button size="sm" onClick={window.print} variant="secondary">Drukuj</Button></Alert>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <PrintTables 
          type={type} 
          max={max} 
          amount={amount} 
          perPage={perPage} 
        />
      </Container>
    </div>
  );
}

export default App;
