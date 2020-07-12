import React from 'react';
import Photo from './Photo';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default function Photowall(props) {
    const baseUrl = ""; 
    return <React.Fragment>
               <Link to={baseUrl + "/addIcon"} className="addIcon"> + </Link>
                <div className = "photoGrid">
                    {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}     
                </div>
           </React.Fragment>
            
}

Photowall.propTypes = {
    onRemovePhoto : PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}