import React from "react";
// import UNI from "../../images/blog/network.jpeg";
// import blogger from "../../images/blog/user.png";
import { Link } from "react-router-dom";
import blogdata from "./blogs.json";
import TwoSection from "./twoSection";



const BlogHome = () => {

    const blogitems = blogdata.blog.map(blog => (
        <div className="card" key={blog.id}>
            <Link to={`/blog/${blog.id}/?message=${blog.description}`} className="my-link">
                <img className="card-img-top" src={blog.coverimage} alt="blog-cover" />
                <div className="card-txt">
                    <div className="nap">{blog.category}</div>
                    <p>{blog.description}</p>
                    <div className="blog-owner">
                        {/* <div><img src={blogger} alt="blogger" /></div> */}
                        <div>
                            {/* <div className="name">{blog.owner}</div> */}
                            <div className="date">{blog.date}</div>
                        </div>
                        {/* <div className="comments">
                            <span><i className="fa fa-comments" aria-hidden="true" /></span>
                            <span className="num">04</span>
                        </div> */}
                    </div>
                </div>
            </Link>
        </div>
    ));

    return (
        <>
            <div className="blog-home">
                <div>
                    <div className="blog-title"></div>
                </div>
                <div className="latest">

                    {blogitems}

                    {/* <div className="card">
                    <Link to="/blog/blog-1" className="my-link">
                        <img className="card-img-top" src={UNI} alt="blog-cover" />
                        <div className="card-txt">
                            <div className="nap">farming</div>
                            <p>How to Create a Winning Digital Transformation Strategy That Works</p>
                            <div className="blog-owner">
                                <div><img src={blogger} alt="blogger" /></div>
                                <div>
                                    <div className="name">Dr. Ben Mooya</div>
                                    <div className="date">January 25, 2023</div>
                                </div>
                                <div className="comments">
                                    <span><i className="fa fa-comments" aria-hidden="true" /></span>
                                    <span className="num">04</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>              
                */}
                </div>
                {/* <div className="lower">
                <div className="card">
                    <div className="card-horizontal">
                        <div className="cover-image">
                            <img className="" src={UNI} alt="Card" />
                        </div>
                        <div className="card-body">
                            <p className="card-nap">Lifestyle</p>
                            <p className="card-text">Creating friendship has both positive and negative effects on your life.</p>
                            <div className="blog-owner">
                                <div><img src={blogger} alt="blogger" /></div>
                                <div>
                                    <div className="name">Munaku Morris</div>
                                    <div className="date">January 25, 2023</div>
                                </div>
                                <div className="comments">
                                    <span><i className="fa fa-comments" aria-hidden="true" /></span>
                                    <span className="num">06</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-horizontal">
                        <div className="cover-image">
                            <img className="" src={UNI} alt="Card" />
                        </div>
                        <div className="card-body">
                            <p className="card-nap">Lifestyle</p>
                            <p className="card-text">Creating friendship has both positive and negative effects on your life.</p>
                            <div className="blog-owner">
                                <div><img src={blogger} alt="blogger" /></div>
                                <div>
                                    <div className="name">Munaku Morris</div>
                                    <div className="date">January 25, 2023</div>
                                </div>
                                <div className="comments">
                                    <span><i className="fa fa-comments" aria-hidden="true" /></span>
                                    <span className="num">06</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                <div className="navig">
                    <div className="">
                        {/* <div className="active"><span>1</span></div> */}
                        {/* <div><span>2</span></div>
                    <div><span>3</span></div>
                    <div><span>10</span></div> */}
                    </div>
                </div>
            </div>
            <TwoSection />
        </>
    );
}
export default BlogHome;