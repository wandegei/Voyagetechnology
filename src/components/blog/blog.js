import React from "react";
import "../../css/blog.css";
import Header from "../header/header";
import Scrollheader from "../header/secondHeader";
import BlogHome from "./blogHome";
// import TwoSection from "./twoSection";
import BlogBanner from "./blogBanner";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
import Sidemedia from "./Sidemedialinks";


const Blog = () => {
    const { pathname } = useLocation();
    const search = useLocation().search;
    const message=new URLSearchParams(search).get("message");
    
  
    return (
        <>
        {pathname === "/blog" ?
             <Header />
            :
            <div className="fixed-top bg-white">
            <Scrollheader />
            </div>
        }

            {pathname === "/blog" ?
                <div className="blog-banner">
                    <BlogBanner />
                </div>
                :
                ""
            }
            <div className="container mb-5">

                <div className="navi-path">
                    {pathname === "/blog" ?
                        <div> <Link to="/blog" className="my-link">Blog Home</Link></div>
                        :
                        <div> <Link to="/blog" className="my-link">Blog Home</Link> <i className="fa-sharp fa-solid fa-angle-right" /> <span className="text-orange">{message}</span></div>
                    }
                </div>
                <div className="mobile-search">
                    <div className="search-container mb-5">
                        <form action="">
                            <button type="submit"><i className="fa fa-search"></i></button>
                            <input type="text" placeholder="Type a keyword and hit enter" name="search" />
                        </form>
                    </div>
                </div>
                <div className="row resize">
                    {pathname === "/blog" ?                
                    ""               
                        :
                    <div className="side-media-links">
                        <Sidemedia />
                    </div>
                    }
                    
                    <Routes>
                        <Route path="/" element={<BlogHome />} />
                        <Route path="/1" element={<Content1 />} />
                        <Route path="/2" element={<Content2 />} />
                        <Route path="/3" element={<Content3 />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Blog;