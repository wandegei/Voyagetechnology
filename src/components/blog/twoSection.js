import React from "react";
// import Imgs from "../../images/blog/popular.png";
import blogdata from "./blogs.json";
import { Link } from "react-router-dom";



const TwoSection = () => {

    const blogitems = blogdata.blog.map(blog => (
        <div className="popular">
            <Link to={`/blog/${blog.id}/?message=${blog.description}`} className="my-link">
            <div className="d-flex mt-3">
                <img src={blog.coverimage} class="rounded" alt="" width="80" height="80" />
                <div className="ms-2">
                    <div className="sente">{blog.description}</div>
                    <div className="date">{blog.date}</div>
                </div>
            </div>
            </Link>
        </div>
    ));

    return (
        <div className="sub-blog">
            <div className="blog-conte">
                <div>
                    <h4 className="fw-bolder">SEARCH</h4>
                    <div className="search-container mb-5">
                        <form action="">
                            <button type="submit"><i className="fa fa-search"></i></button>
                            <input type="text" placeholder="Type a keyword and hit enter" name="search" />
                        </form>
                    </div>
                    <h4 className="fw-bolder">POPULAR</h4>
                    
                    {blogitems}
                    
                    {/* end of popular */}
            
                    {/* <div className="categories mt-4">
                        <h4 className="fw-bolder">CATEGORIES</h4>
                        <div className="d-flex">
                            <div>UI/UX</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                        <div className="d-flex">
                            <div>Mobile Apps</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                        <div className="d-flex">
                            <div>Websites</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                        <div className="d-flex">
                            <div>Artifical Inteligence</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                        <div className="d-flex">
                            <div>Cyber Security</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                        <div className="d-flex">
                            <div>Lyfestyle</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                        <div className="d-flex">
                            <div>Internet of things</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                        <div className="d-flex">
                            <div>Cloud Computing</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                        <div className="d-flex">
                            <div>Digital transformation</div>
                            <div className="ms-auto val">(25)</div>
                        </div>
                    </div> */}
                    {/* <div className="tags mt-4">

                        <h5>TAGS</h5>

                        <div>#Busness</div>
                        <div>#Travel</div>
                        <div>#Technology</div>
                        <div>#New life</div>
                        <div>#Facebook</div>
                        <div>#Sports</div>
                        <div>#Music</div>
                        <div>#Food</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default TwoSection;