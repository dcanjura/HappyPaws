import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";

const Landing = () => {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col>
            <h1>¡Bienvenidos a Happy Paws!</h1>
            <p>Versión alpha -1.0.0</p>
          </Col>
          <Col>
            <Image src="../multimedia/doggos1.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
