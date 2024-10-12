import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blog } from "./data/Blog";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          {blog.map((v, i)=>{
            return(
              <ProductItems pitems={v} key={i} />                    
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;

function ProductItems({pitems}) {
  return (
    <Col lg="3" md="6">
      <Card>
      <Card.Body>
        <Card.Title>{pitems.name}</Card.Title>
        <Card.Text>
          {pitems.email}
        </Card.Text>
        <Button variant="primary">Copy</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}
