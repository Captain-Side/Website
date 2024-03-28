import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () =>{
    return(
        <div>
            
            <p style={{textAlign:"center"}} className='text-white'>Hello
              <Link to="/">Go to Home </Link>
            </p>
          </div>
    )
}
export default NotFoundPage;