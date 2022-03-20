import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <div>
                <h1>{props.heading} This is a blog Component.. </h1>
                <h4>Author: {props.author}</h4>
            </div>
        </div>
    );
};

export default Blog;