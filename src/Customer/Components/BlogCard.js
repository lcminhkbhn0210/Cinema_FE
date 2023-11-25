import "./blogcard.css";

function BlogCard(props) {
  return (
    <div className="blog mb-4 col-span-1 sm:col-span-2 md:col-span-1 xl:col-span-1 lg:col-span-1">
      <article>
        <div className="post-img">
          <img src={props.blog.thumbnail} alt="" className="img-fluid" />
        </div>

        <p className="post-category">{props.blog.category}</p>

        <h2 className="title">
          <button>{props.blog.title}</button>
        </h2>

        <div className="flex align-items-center ">
          <img
            src={props.blog.author.image}
            alt=""
            className="img-fluid post-author-img flex-shirnk-0"
          />
          <div className="post-meta">
            <p className="post-author-list">{props.blog.author.name}</p>
            <p className="post-date">
              <time dateTime="2022-01-01">{props.blog.date}</time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
