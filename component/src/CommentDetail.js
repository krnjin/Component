import React from 'react';
import faker from 'faker';


const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avater" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author} by {props.userName}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.content}</div>
                    
                </div>
            </div>
    );
};

export default CommentDetail;