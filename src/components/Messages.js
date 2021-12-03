import React, { useState, useEffect } from "react";
import { SingleMessage } from './index.js';

const cohort = '2108-USD-RM-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;


const Messages = () => {
    const [allMessages, setAllMessages] = useState([]);
    useEffect(() => {
        const fetchAllMessages = async () => {
            try {const response = await fetch(`${BASE_URL}/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("account-token")}`
                }
            })
            const data = await response.json();
            setAllMessages(data.data.posts.messages);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchAllMessages();
    }, []);
    let messageList = null;

    if (allMessages && allMessages.length) {
        messageList = <div>
            {
                allMessages.map((post, message) => {
                    <SingleMessage key={post._id} post={post} message={message} />
                })
            }
        </div>
    }

    return (
        <div className="message-section">
            <h1>
                Messages
            </h1>
            <div>
                {messageList}
            </div>
        </div>
    )
}

export default Messages;