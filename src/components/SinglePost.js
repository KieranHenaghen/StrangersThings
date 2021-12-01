import React from 'react';


const SinglePost = (props) => {
    const { post } = props;
    const deletePost = async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${post._id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("account-token")}`
                }

            })
            const data = await response.json();
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="single-post">
            <div>
                {post.title}
            </div>
            <div>
                {post.description}
            </div>
            <div>
                {post.price}
            </div>
            {
                post.isAuthor ? <button onClick={deletePost}>Delete Post</button> 
                : <button>Send Message</button>
            }
        </div>
    )
}

export default SinglePost;