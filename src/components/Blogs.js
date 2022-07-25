import { Row, Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState("");
  const [like, setLike] = useState();
  const [alert, setAlert] = useState(false);

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
  }, [blogs, blog, like]);

  const fetchBlogs = async () => {
    const res = await authAxios.get(`${apiUrl}`);
    return res.data;
  };

  const addLike = async (id) => {
    const data = { id: id };

    await authAxios
      .post(`${apiUrl}/like`, data)
      .then((result) => setLike(result.data.like))
      .catch((err) => console.log(err.message));
  };

  return (
    <section id="blogs" className="blogs">
      <Container>
        <div
          class={
            alert
              ? "alert bg-success fade show d-flex justify-content-between"
              : "alert bg-success fade d-flex justify-content-between"
          }
          role="alert"
        >
          Your blog is posted sucessfully
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true" onClick={() => setAlert(false)}>
              &times;
            </span>
          </button>
        </div>

        <h2 className="mb-5">Blogs</h2>
        <BlogForm authAxios={authAxios} apiUrl={apiUrl} setAlert={setAlert} />
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
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
