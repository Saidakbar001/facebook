import React, { useState } from 'react';
import './Messenger.css';
import Header from '../../components/header/Header'; 

function Messenger() {
    const [input, setInput] = useState ('');
    const [messages, setMessages] = useState (['Whats up', 'Hello', 'Hi']); 

    console.log(input); 
    console.log(messages);

    const sendMessage = (event) => {
          setMessages([...messages, input]);
          setInput('');
    }
    return (
        <div className="messenger">
        <Header/>
           
            {/* <div className="chat">
                <ul>
                    <h1>Chat rooms</h1>
                    <li className="second"><CgMenuGridO/></li>
                    <li className="second"><RiVideoAddFill/></li>
                    <li className="second"><BsPencilSquare/></li>
                    <div className="searchbarr">
                        <FiSearch className="serch"/>
                        <input type="text" placeholder="Search on Facebook" className="searchbar__input" />
                  </div>
                  <div className="name">
                      <p>Saidakbar Jamoliddinov</p>
                  </div>
                </ul> */}
            <h2>Chat</h2>
           <h1 className="helo">Saidakbar Jamoliddinov</h1>
              <input placeholder="Aa" className="fff" value={input} onChange={event => setInput(event.target.value)} />
              <button className="btn" onClick={sendMessage}>Send Message</button>
             
               {
                messages.map(message =>  (
                    <p className="source">{message}</p>
                ))
           } 
           
        </div>
    )
}

export default Messenger

