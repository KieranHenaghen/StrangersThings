import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { SinglePost } from './index';

const cohort = '2108-USD-RM-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;


const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);
    
    useEffect(() => {
        const fetchAllPosts = async () => {
            const response = await fetch(`${BASE_URL}/posts`);
            const data = await response.json();

            setAllPosts(data.data.allPosts);
        }
        fetchAllPosts();
    }, []);
    let totalPosts = null;

    if (allPosts && allPosts.length) {
        totalPosts = <div>
            {
                allPosts.map(post => 
                    <section key={post._id}>
                        <h3>
                            {post.title}
                        </h3>
                        <div>
                            {post.description}
                        </div>
                    </section>)
            }
            </div>
    }


    return (
        <div className="app-page-view">
            <h1>
                Posts
            </h1>
            {totalPosts}
        </div>
        )

}


export default Posts;