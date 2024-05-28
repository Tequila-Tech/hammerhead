import { fetchFirestoreData } from '../fetchFirebaseData';
import { useEffect, useState } from 'react';
import "./BlogList.css"
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFirestoreData();
            setBlogs(data);
        };
        fetchData();
    }, []);
    return (
        <div className="blog-container">
            <div className="sidebar">
                <ul className="post-list">
                    {blogs.map(blog => (
                        <div className="blog-card" key={blog.id}>
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
                    ))}
                </ul>
            </div >
        </div >
    );
};

export default BlogList;