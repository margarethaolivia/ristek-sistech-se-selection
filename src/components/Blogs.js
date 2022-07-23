import { Row, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const accessToken = "2b2ed488-bec6-40b1-8223-21841e3c40b8";
  const apiUrl = "https://sistech-api.vercel.app/blog";

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  useEffect(() => {
    const getBlogs = async () => {
      const blogsFromServer = await fetchBlogs();
      setBlogs(blogsFromServer);
    };

    getBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await authAxios.get(`${apiUrl}`);
    return res.data;
  };

  const addLike = async (id) => {
    const data = { id: id };

    await authAxios
      .post(`${apiUrl}/like`, data)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <section id="blogs" className="blogs">
      <h2>Blogs</h2>
      <BlogForm authAxios={authAxios} apiUrl={apiUrl} fetchBlogs={fetchBlogs} />
      <Row xs={1} md={2} className="g-4">
        {blogs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              blog={blog}
              addLike={addLike}
              authAxios={authAxios}
              apiUrl={apiUrl}
              fetchBlogs={fetchBlogs}
            />
          );
        })}
      </Row>
    </section>
  );
};

export default Blogs;
