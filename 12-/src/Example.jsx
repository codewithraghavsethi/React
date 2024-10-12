import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function Example() {
  let data = () => {
    alert("Hello Raghav Sethi.");
  };

  let sum = (a, b)=>{
    console.log(a + b)
  }

  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
      <div>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </div>
      <div>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: purple;
      color: white;
      }
      
      .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        }
        `}
        </style>
        <Button variant="flat" size="xxl">
          flat button
        </Button>
      </div>

      <div>
        <Button as="a" variant="success" onClick={data}>
          ALERT RAGHAV SETHI BUTTON
        </Button>
      </div>
      <div>
        <Button as="a" variant="danger" onClick={()=>sum(10, 20)}>
            SUM FUNCTION BUTTON
        </Button>
      </div>
    </div>
  );
}

export default Example;
