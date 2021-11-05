import React from 'react';
import './Header.css';
import { FiSearch, FiHome } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { RiGroupLine, RiGroupFill, RiNotification3Fill } from 'react-icons/ri';
import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi';
import { CgProfile, CgMenuGridO } from 'react-icons/cg';
import { BsMessenger } from 'react-icons/bs';
import { MdPlayArrow } from 'react-icons/md';



function Header() {
    const location = useLocation();
    return (
        <div className="header">
            <div className="header__container">
               <div className="header__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="logo" />
            </div>
          </div>
              <div className="mainheader__options">
                  <div className="searchbar">
                        <FiSearch className="sor"/>
                        <input type="text" placeholder="Search on Facebook" className="searchbar__input" />
                  </div>
              
              <ul className="header__collection">
                  <li className="header__item">
                  <NavLink to="/">
                            {
                               location.pathname === "/" ? <AiFillHome/> : <FiHome/>
                            }
                  </NavLink>
                  </li>

                  <li className="header__item">
                         <NavLink to="/friend">
                            {
                               location.pathname === "/friend" ? <RiGroupFill/> : <RiGroupLine/>
                            }
                         </NavLink>
                    </li>

                    <li className="header__item">
                         <NavLink to="/groups">
                             {
                                 location.pathname === "/groups" ?  <HiUserGroup/> :   <HiOutlineUserGroup /> 
                             } 
                         </NavLink>
                    </li>         
                 
                    <li className="header__item">
                         <NavLink to="/friend">
                            <button className="nayti">Найти друзей</button>
                         </NavLink>
                    </li>

                    <li className="header__item">
                         <NavLink to="/profill">
                            <button className="profil"><CgProfile/> <h4>Saidakbar</h4></button>
                         </NavLink>
                    </li>


                    <li className="header__ite">
                         <NavLink to="/profill">
                            <button className="header_rightt"><CgMenuGridO/></button>
                         </NavLink>
                    </li>
                    <li className="header__ite">
                         <NavLink to="/messenger">
                            <button className="header_right"><BsMessenger/></button>
                         </NavLink>
                    </li>
                    <li className="header__ite">
                         <NavLink to="/profill">
                            <button className="header_right"><RiNotification3Fill/></button>
                         </NavLink>
                    </li>
                    <li className="header__ite">
                         <NavLink to="/profill">
                            <button className="header_right"><MdPlayArrow/></button>
                         </NavLink>
                    </li>
                   
                    

                  
              </ul>

             </div>
        </div>
    )
}

export default Header
