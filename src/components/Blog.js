import { useState } from "react";
import { Card, Col, Button, Form, Modal } from "react-bootstrap";

const Blog = ({ blog, addLike, authAxios, apiUrl, fetchBlogs }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleContent = (e) => {
    const content = e.target.value;
    setContent(content);
  };

  const updateBlog = async (e) => {
    e.preventDefault();

    const data = { title: title, content: content, id: blog.id };

    await authAxios
      .put(`${apiUrl}`, data)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err.message));
  };

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
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Blog</Modal.Title>
              </Modal.Header>
              <Form onSubmit={updateBlog}>
                <Modal.Body>
                  <Form.Control
                    placeholder="Enter title"
                    autoFocus
                    value={title}
                    onChange={(e) => handleTitle(e)}
                  />
                  <Form.Control
                    as="textarea"
                    placeholder="Enter content"
                    rows={3}
                    value={content}
                    onChange={(e) => handleContent(e)}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Blog;
