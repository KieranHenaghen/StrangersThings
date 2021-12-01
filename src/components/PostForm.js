import React, { useState } from 'react';

const cohort = '2108-USD-RM-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;


const PostForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        const locallySourcedToken = localStorage.getItem("account-token");
        
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${locallySourcedToken}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    priceOfItem: price,
                    location: location,
                    willDeliver: willDeliver
                }
            })
        })
        const data = response.json();

    }

    return (
        <div>
            <form id="create-post">
                <input type="text" value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)}>

                </input>
                <textarea type="text" value={description} placeholder="Description" onChange={(event) => setDescription(event.target.value)}>

                </textarea>
                <input type="text" value={price} placeholder="Price" onChange={(event) => setPrice(event.target.value)}>

                </input>
                <input type="text" value={location} placeholder="Location" onChange={(event) => setLocation(event.target.value)}>

                </input>
                <label>Will Deliver?</label>
                <input type="checkbox" value={willDeliver} onChange={() => willDeliver == false ? setWillDeliver(true) : setWillDeliver(false)}>

                </input>
            </form>
        </div>
    )
}

export default PostForm;