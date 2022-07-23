import { Card, Col, Button } from "react-bootstrap";

const Blog = ({ blog, addLike }) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.content}</Card.Text>
            <Button variant="primary" onClick={() => addLike(blog.id)}>
              {blog.like}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Blog;
