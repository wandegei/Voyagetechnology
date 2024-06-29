import React from "react";


const Sidemedialinks = () =>{
    const blogurl = window.location.href

    const mail = `mailto:example@example.com?subject=My subject&body="${blogurl}"`;
    const twitter = `https://twitter.com/intent/tweet?text="${blogurl}"`;
    const facebook = `https://www.facebook.com/sharer/sharer.php?linkurl="${blogurl}"`;
    const linked = `https://www.linkedin.com/sharing/share-offsite/?url="${blogurl}"`;
    return(

        <div class="icon-bar">
            <a href={facebook} target="_blank" rel="noreferrer noopener" className="facebook"><i className="fa fa-facebook"></i></a> 
            <a href={twitter} target="_blank" rel="noreferrer noopener" className="twitter"><i className="fa fa-twitter"></i></a> 
            <a href={mail} target="_blank" rel="noreferrer noopener" className="google"><i className="fa fa-envelope"></i></a> 
            <a href={linked} target="_blank" rel="noreferrer noopener" className="linkedin"><i className="fa fa-linkedin"></i></a>
        </div>
    )
}

export default Sidemedialinks;