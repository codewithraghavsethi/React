import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import CardItem from "./CardItem";

function App() {
  return (
    <div className="App">
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <CardItem></CardItem>
      </Container>

      <Container>
        <Row>
          <ProductItems></ProductItems>
        </Row>
      </Container>
    </div>
  );
}

export default App;

function ProductItems() {
  return (
    <Col lg="3" md="6">
      Child
    </Col>
  );
}
