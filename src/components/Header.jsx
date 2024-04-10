import React from 'react'; 
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>ARMS</h1>
        <main>
            <HashLink to = {"/#home"}>Home</HashLink>
            <HashLink to = {"https://drive.google.com/drive/folders/1Xf3gCyvY2-VntsKvDV4-FSHdqqjw0PL6?usp=sharing"}>Unauthorised Persons</HashLink>
            <HashLink to = {"/#services"}>Services</HashLink>
            <HashLink to = {"/#about"}>About</HashLink>
            <HashLink to = {"https://play.unity.com/mg/other/vr-meeting-room-1"}>VR Meet Room</HashLink>
        </main>
    </nav>
  )
}

export default Header
