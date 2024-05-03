import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './inbox.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

interface InboxMessage {
  user2: string;
  message: string;
}

function Inbox() {
  const { username } = useParams<{ username: string }>();
  const [imagesURL, setImagesURL] = useState<{ [key: string]: string }>({});
  const [inboxMessages, setInboxMessages] = useState<InboxMessage[]>([]);
  const defaultImageUrl = 'https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg';

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const inboxResponse = await axios.get<InboxMessage[]>(`http://localhost:8082/api/inbox/${username}`);
        setInboxMessages(inboxResponse.data);
        const uniqueUsers = inboxResponse.data.reduce((acc: string[], message) => {
          if (!acc.includes(message.user2)) {
            acc.push(message.user2);
          }
          return acc;
        }, []);
        
        uniqueUsers.forEach(user => {
          fetchImage(user);
        });
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    const fetchImage = async (user: string) => {
      try {
        const response = await axios.get(`http://localhost:8082/api/images/${user}`, {
          responseType: 'blob',
        });
        setImagesURL(prev => ({
          ...prev,
          [user]: response.data ? URL.createObjectURL(response.data) : defaultImageUrl
        }));
      } catch (error) {
        setImagesURL(prev => ({ ...prev, [user]: defaultImageUrl }));
        console.error(`Error fetching image for ${user}:`, error);
      }
    };

    if (username) {
      fetchMessages();
    }
  }, [username]);

  return (
    <div className='inbox'>
      <div>
        <h1 className='people-text'> People</h1>
        <hr/>
      </div>
      <div className='inbox-div'>
        <ul>
          {inboxMessages.map((message, index) => (
            <div key={index} className='one-user-row-inbox'>
              {imagesURL[message.user2] && <img src={imagesURL[message.user2]} alt="Profile" style={{ maxWidth: '100px' }} className='profile-image-inbox'/>}
              <h3 className='inbox-user-name'>@{message.user2}</h3> 
              <p className='latest-msg'>{message.message}</p>
            </div>
          ))}
        </ul>    
      </div> 
    </div>
  );
}

export default Inbox;
