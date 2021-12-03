import React, { useState } from "react";

const cohort = '2108-USD-RM-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;

const SendMessage = (props) => {
    const { post } = props;
    const [content, setContent] = useState('')
    const submitMessage = async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${post_id}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("account-token")}`
                },
                body: JSON.stringify({
                    message: {
                        content: content
                    }
                })
            });
            const data = response.json();

            setContent('')
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <form>
            <textarea type="text" value={content} placeholder="Message" onChange={(event) => setContent(event.target.value)}>

            </textarea>
            <button onClick={submitMessage}>Submit Message</button>
        </form>
        )
}