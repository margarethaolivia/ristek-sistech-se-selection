import { Row, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import Blog from "./Blog";

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

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const result = await authAxios.get(`${apiUrl}`);
        setBlogs(result.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getBlogs();
  }, []);

  //   const fetchData = useCallback(async () => {
  //     try {
  //       const result = await authAxios.get(`${apiUrl}`);
  //       console.log(result.data);
  //     } catch (err) {
  //       console.log(err.message);\
  //     }
  //   });

  return (
    <section>
      <h2>Blogs</h2>
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
