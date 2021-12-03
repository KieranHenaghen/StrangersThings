import React, { useState } from "react";

const SingleMessage = async (props) => {
    const { post, message } = props;

    return (
        <div className="single-post">
            <div>
                {post.title}
            </div>
            <div>
                {message.content}
            </div>
            <div>
                {message.username}
            </div>
        </div>
    )

}

export default SingleMessage;