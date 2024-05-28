import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <>
      <Link to={`/blog/${blog.id}`} className="blog-card-link">
        <div className="blog-card">
          <div className="blog-card__image">
            <img src={blog.bannerImage} alt={blog.title} />
          </div>
          <div className="blog-card__content">
            <h2 className="blog-card__title">{blog.title}</h2>
            <p className="blog-card__article">{blog.article}</p>
            <p className="blog-card__published">
              <em>Published on: {blog.publishedAt}</em>
            </p>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .blog-card {
          list-style: none;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          margin: 16px auto;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          max-width: 600px; /* Set maximum width */
          display: flex;
          flex-direction: column;
        }

        .blog-card__image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .blog-card__content {
          padding: 16px;
        }

        .blog-card__title {
          font-size: 1.5em;
          margin: 0 0 8px 0;
        }

        .blog-card__article {
          font-size: 1em;
          color: #555;
          margin: 0 0 16px 0;
        }

        .blog-card__published {
          font-size: 0.875em;
          color: #888;
        }

        /* Responsive Styling */
        @media screen and (max-width: 768px) {
          .blog-card {
            margin: 16px;
          }
        }

        /* Style for the Link component */
        .blog-card-link {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </>
  );
};

export default BlogItem;
