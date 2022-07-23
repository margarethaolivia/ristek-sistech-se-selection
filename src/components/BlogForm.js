import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const BlogForm = ({ authAxios, apiUrl, fetchBlogs }) => {
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

    const data = { title: title, content: content };

    await authAxios
      .post(`${apiUrl}`, data)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err.message));

    fetchBlogs();
  };

  return (
    <Form onSubmit={submitBlog}>
      <Form.Control
        placeholder="Enter title"
        onChange={(e) => handleTitle(e)}
      />
      <Form.Control
        as="textarea"
        placeholder="Enter content"
        onChange={(e) => handleContent(e)}
      />
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
};

export default BlogForm;
