import React from "react";
import ClipboardJS from "clipboard";

new ClipboardJS(".button");

const Popupmodel = () =>{
  const blogurl = window.location.href

  const mail = `mailto:example@example.com?subject=My subject&body="${blogurl}"`;
  const twitter = `https://twitter.com/intent/tweet?text="${blogurl}"`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?linkurl="${blogurl}"`;
    return(
    <div className="popshare">
        <div class="input-group">
            <input type="text" id="input" class="form-control" value={blogurl}/>
            <div class="input-group-append">
                <button className="btn copy button" type="button"  data-clipboard-action="copy" data-clipboard-target="#input">
                copy link
                </button>
            </div>
        </div>
        <div>
        <a class="btn-floating btn btn-tw" type="button" role="button" title="Share on facebook"
        href={facebook} target="_blank"
        rel="noreferrer noopener">
        <i class="fab fa-2x fa-facebook-square"></i>
        
        </a>
        <a class="btn-floating btn btn-tw" type="button" role="button" title="Share on twitter"
        href={twitter} target="_blank"
        rel="noreferrer noopener">
        <i class="fab fa-2x fa-twitter-square"></i>
        
        
        
        </a>
        <a class="btn-floating btn btn-tw" type="button" role="button" title="Share on mail"
        href={mail} target="_blank"
        rel="noreferrer noopener">
        <i class="fa fa-2x fa-envelope-square" aria-hidden="true"></i>
        
        
        </a>
        </div>
    
    </div>
  );
};
export default Popupmodel;
