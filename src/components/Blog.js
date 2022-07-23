import { Card, Col, Button } from "react-bootstrap";

const Blog = ({ title, content, like }) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <Button variant="primary">{like}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Blog;
