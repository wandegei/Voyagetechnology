import React from "react";
import Blogger from "../../images/portfolio1.png";

const Comments = () =>{
    
    return (
        <div className="comment mt-5">
            <h2>Comments (2) </h2>
            <div>                        
                <div className="d-flex my-5">
                    <div className="blogger"><img src={Blogger} alt="" /></div>
                    <div className="ms-3">
                        <h5>Dr. Ben Mooya</h5>
                        <div className="date">January 25, 2023</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro. </p>
                        <div className="reply">Reply</div> 
                    </div>            
                </div>
                <div className="d-flex my-5">
                    <div className="blogger"><img src={Blogger} alt="" /></div>
                    <div className="ms-3">
                        <h5>Dr. Ben Mooya</h5>
                        <div className="date">January 25, 2023</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro. </p>
                        <div className="reply">Reply</div> 
                    </div>                          
                </div>                       
            </div>
            <div className="comment-form mb-3">
            <h3>Leave a comment</h3>
            <div className="form">
                <form className="container">
                <div className="form-group my-3">
                    <input
                    type="text"
                        className="form-control" 
                        placeholder="Name"
                        name="name" 
                        
                        />
                </div>
                <div className="form-group my-3">
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    name="email"
                    
                    />
                </div>
                <div className="form-group my-3">
                    <textarea 
                    className="form-control" 
                    placeholder="Comment" 
                    rows="3"
                    name="message"
                    
                    ></textarea>
                </div>
                <div className="form-group my-3">
                    <button className="btn w-100" value="submit" type="submit" >Post Comment</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Comments;