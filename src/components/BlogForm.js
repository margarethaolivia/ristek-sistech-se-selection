import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const BlogForm = ({ authAxios, apiUrl, setAlert, setText }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleContent = (e) => {
    const content = e.target.value;
    setContent(content);
  };

  const submitBlog = async (e) => {
    e.preventDefault();
    e.target.reset();

    const data = { title: title, content: content };

    await authAxios
      .post(`${apiUrl}`, data)
      .then((result) => {
        setAlert(true);
        setText("posted");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Form onSubmit={submitBlog}>
      <Form.Control
        required
        className="shadow mb-2 text-light bg-dark border-opacity-25 border-light"
        placeholder="Enter title"
        onChange={(e) => handleTitle(e)}
      />

      <Form.Control
        required
        className="shadow mb-2 text-light bg-dark border-opacity-25 border-light"
        as="textarea"
        placeholder="Enter content"
        rows={4}
        onChange={(e) => handleContent(e)}
      />
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
};

export default BlogForm;
