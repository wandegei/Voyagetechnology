import React from "react";
import BlogCover from "../../images/blog/cover1.png";

const BlogBanner = () => {
    return (
        <div className="banner-content container">
            <div>
                <div className="image">
                    <img className="blogcover" src={BlogCover} alt="cover" />
                </div>
                <div className="contents">
                    <div>
                        <div>Welcome to</div>
                        <h4>Voyage Blogs</h4>
                        <p>
                        Our experts share insights on software development, digital content creation, Cloud computing, 
                        UI/UX design, Mobile App, websites, Artificial Intelligence, digital transformation and more. 
                        Stay informed and ahead of the competition. Explore our blog for the latest tech trends.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogBanner;