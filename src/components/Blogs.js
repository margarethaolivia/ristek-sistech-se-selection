import { Row, Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Blog from "./Blog";
import Alert from "./Alert";
import BlogForm from "./BlogForm";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState("");
  const [alert, setAlert] = useState(false);
  const [text, setText] = useState("");
  const [likedBlogs, setLikedBlogs] = useState([]);

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
  }, [blogs, blog, likedBlogs]);

  const fetchBlogs = async () => {
    const res = await authAxios.get(`${apiUrl}`);
    return res.data;
  };

  const addLike = async (id) => {
    const data = { id: id };

    await authAxios
      .post(`${apiUrl}/like`, data)
      .then((result) => setLikedBlogs([...likedBlogs, id]))
      .catch((err) => console.log(err.message));
  };

  return (
    <section id="blogs" className="blogs">
      <Container>
        <Alert alert={alert} setAlert={setAlert} text={text} />
        <h2 className="mb-5">Blogs</h2>
        <BlogForm
          authAxios={authAxios}
          apiUrl={apiUrl}
          setAlert={setAlert}
          setText={setText}
        />
        <Row xs={1} md={2} className="g-4 mt-4">
          {blogs.map((blog) => {
            return (
              <Blog
                key={blog.id}
                blog={blog}
                addLike={addLike}
                authAxios={authAxios}
                apiUrl={apiUrl}
                setBlog={setBlog}
                likedBlogs={likedBlogs}
                alert={alert}
                setAlert={setAlert}
                setText={setText}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
