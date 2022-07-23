import { Row, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const accessToken = "2b2ed488-bec6-40b1-8223-21841e3c40b8";
  const apiUrl = "https://sistech-api.vercel.app/blog/";

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const getBlogs = async () => {
    try {
      const result = await authAxios.get(`${apiUrl}`);
      setBlogs(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  getBlogs();

  return (
    <section id="blogs">
      <h2>Blogs</h2>
      <BlogForm authAxios={authAxios} apiUrl={apiUrl} getBlogs={getBlogs} />
      <Row xs={1} md={2} className="g-4">
        {blogs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              title={blog.title}
              content={blog.content}
              like={blog.like}
            />
          );
        })}
      </Row>
    </section>
  );
};

export default Blogs;
