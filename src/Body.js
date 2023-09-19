import React from "react";
import Header from "./Header";
import "./Body.css";

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
               <img 
                src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/39MO4rpxkctRc574LExDwQ==/ZGlkaWRpZGlkaWRpZGlkaQ==" 
                alt=""/>
               <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>description...</p>
               </div>
            </div>
        </div>
    );
}

export default Body;