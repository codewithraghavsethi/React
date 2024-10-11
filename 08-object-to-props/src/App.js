import "./App.css";
import { Container } from "react-bootstrap";
import CardItem from "./CardItem";

function App() {
  return (
    <div className="App">
      <Container style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap:"wrap" }}>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
      </Container>
    </div>
  );
}

export default App;
