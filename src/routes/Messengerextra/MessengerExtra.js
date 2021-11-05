import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './MessengerExtra.css';

function MessengerExtra() {
    const location = useLocation();

    return (
        <div className="messengerextra">
            <h1>Messenger</h1>
              <NavLink to="/messenger">
                 <button>Open the messenger</button>
              </NavLink>
        </div>
    )
}

export default MessengerExtra
