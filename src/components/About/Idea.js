import React from 'react';
import { Container } from 'react-bootstrap';
import ideaToLife from '../../images/idea-to-life.png'
const IdeaToLife = () => {
    return ( 
        <div>
            <div className='container'>
                <div className='percent-container'>
                <img src={ideaToLife} alt='Idea to life' className='idea-img'/>
                </div>
            </div>
        </div>
     );
}
 
export default IdeaToLife;