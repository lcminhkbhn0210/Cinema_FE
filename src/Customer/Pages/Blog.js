import { useEffect, useState } from "react";
import "./blog.css";
import BlogCard from "../Components/BlogCard";
function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/blogData.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section id="blogs" className="blogs">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <h4 className="section-title">Our Blog</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => {
              return <BlogCard key={blog._id} blog={blog} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
