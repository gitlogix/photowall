import React from 'react';
import PropTypes from "prop-types";

          
export default function Photo(props) {
        
       return (
        <div>
            <figure className = "figure">
                <img className = "photo" src={require("../assets/image/" + props.post.imageUrl + ".jpg")} alt={props.post.description} />
                <figcaption className="figure-caption">
                    <p>{props.post.title}</p>
                </figcaption>
                <div className = "btnWrapper">
                   <button className="removeBtn" onClick = {() => {
                       props.onRemovePhoto(props.post);
                   }}>Remove</button>
                </div>
                
            </figure>
        </div>
       )
}

Photo.propTypes = {
    onRemovePhoto : PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}