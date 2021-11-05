import React from 'react';
import Header from '../../components/header/Header';
import './Home.css';
import { FaAngleDown, FaFacebookMessenger, FaFontAwesomeFlag, FaMedrt, FaSearch, FaUserFriends } from 'react-icons/fa';
import { MdMoreHoriz, MdVideoCall } from 'react-icons/md';

function Home() {
    return (
     
        <div className="home">
           <Header/>
          
          <div className="Main">
            <div className="Rside">
               <div className="Profile">
                   <img src="https://media.gettyimages.com/photos/blue-computer-hack-picture-id843466180?s=612x612" alt="dp" style={{ height:"35px",padding:"1rem" }}/>
                   Saidakbar Jamoliddinov
               </div>
               <div className="Pro">
                   <FaMedrt color="red"font-Size="2rem"/>
                   <div>COVID-19 Information Center</div>
               </div>
               <br />
               <div className="Pro">
                   <FaFontAwesomeFlag color="green"fontSize="1.7rem"/>
                   <div>Page</div>
               </div>
               <br />
               <div className="Pro">
                   <FaUserFriends color="blue"fontSize="1.7rem"/>
                   <div>Friends</div>
               </div>
               <br />
               <div className="Pro">
                   <FaFacebookMessenger color="blue"fontSize="1.7rem"/>
                   <div>Messenger</div>
               </div>
               <br />
               <div className="Pro">
                   <FaAngleDown color="blue"fontSize="1.7rem"/>
                   <div>Yet</div>
               </div>
               <br />
               <div className="Profiles">
                   <img src="https://m.economictimes.com/thumb/msid-76304095,width-1200,height-900,resizemode-4,imgsize-124491/many-belltroxes-delhi-is-now-indias-hacker-hub.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                   React Developer
               </div>

               <div className="Profiles">
                   <img src="https://m.economictimes.com/thumb/msid-76304095,width-1200,height-900,resizemode-4,imgsize-124491/many-belltroxes-delhi-is-now-indias-hacker-hub.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                   ReactJs Export Community
               </div>

               <div className="Profiles">
                   <img src="https://m.economictimes.com/thumb/msid-76304095,width-1200,height-900,resizemode-4,imgsize-124491/many-belltroxes-delhi-is-now-indias-hacker-hub.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                   Css Current Affaids & General Knowledge
               </div>

               <div className="Profiles">
                   <img src="https://m.economictimes.com/thumb/msid-76304095,width-1200,height-900,resizemode-4,imgsize-124491/many-belltroxes-delhi-is-now-indias-hacker-hub.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                   Javascript, Node.Js, React.Js, Vue.Js Developer
               </div>

               <div className="Profiles">
                   <img src="https://m.economictimes.com/thumb/msid-76304095,width-1200,height-900,resizemode-4,imgsize-124491/many-belltroxes-delhi-is-now-indias-hacker-hub.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                   Programming Jokes
               </div>
               <div className="Pross">
                  <FaAngleDown color="blue" fontSize="1.7rem" /> See More
               </div>
            </div>

            <div className="MainArea">
              Main Area
            </div>

            <div className="Lside">
                 <div className="Contact">
                     <div className="Contacts">
                         Contacts
                     </div>
                 
                 <div className="chaticon">
                     <div className="icons">
                         <MdVideoCall fontSize="1.6rem"/>
                     </div>
                     <div className="icons">
                         <FaSearch fontSize="1.6rem"/>
                     </div>
                     <div className="icons">
                         <MdMoreHoriz fontSize="1.6rem"/>
                     </div>
                 </div>
               </div>
               <div className="concise">
                   <div className="Profilee">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvSaGjTdxDJp-9PDLePGZIqxFTcKuew4pZA&usqp=CAU" alt="logo" style={{height:"35px", padding:"1rem"}} />
                       Xakker
                   </div>
                   <div className="Profilee">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvSaGjTdxDJp-9PDLePGZIqxFTcKuew4pZA&usqp=CAU" alt="logo" style={{height:"35px", padding:"1rem"}} />
                       Xakkerr
                   </div>
                   <div className="Profilee">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvSaGjTdxDJp-9PDLePGZIqxFTcKuew4pZA&usqp=CAU" alt="logo" style={{height:"35px", padding:"1rem"}} />
                       Xakkerr
                   </div>
                   <div className="Profilee">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvSaGjTdxDJp-9PDLePGZIqxFTcKuew4pZA&usqp=CAU" alt="logo" style={{height:"35px", padding:"1rem"}} />
                       Xakkerr
                   </div>
               </div>
            </div>
          </div>
        </div>
    )
}

export default Home
