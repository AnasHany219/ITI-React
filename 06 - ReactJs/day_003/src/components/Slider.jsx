import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Slider() {
  const images = [
    "assets/img-1.jpg",
    "assets/img-2.jpg",
    "assets/img-3.jpg",
    "assets/img-4.jpg",
    "assets/img-5.jpg",
    "assets/img-6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const toggleAutoPlay = () => {
    if (isAutoPlay) {
      clearInterval(intervalId);
      setIsAutoPlay(false);
      setIntervalId(null);
    } else {
      const id = setInterval(nextImage, 1000);
      setIntervalId(id);
      setIsAutoPlay(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col>
          <div className="slider">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="img-fluid rounded-5"
              style={{ height: "40rem", width: "80rem", objectFit: "cover" }}
            />
          </div>
          <div className="mt-3 d-flex justify-content-evenly">
            <Button
              size="lg"
              variant="primary"
              onClick={prevImage}
              className="mx-2 w-25"
            >
              Previous
            </Button>
            <Button
              size="lg"
              variant={isAutoPlay ? "danger" : "success"}
              onClick={toggleAutoPlay}
              className="mx-2 w-25"
            >
              {isAutoPlay ? "Stop" : "Start"}
            </Button>
            <Button
              size="lg"
              variant="primary"
              onClick={nextImage}
              className="mx-2 w-25"
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Slider;
