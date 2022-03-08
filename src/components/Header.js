import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://images.vexels.com/media/users/3/136558/isolated/preview/43cc80b4c098e43a988c535eaba42c53-icone-de-usuario-pessoal.png" alt="usuario" />
                </a>
            </div>    

        </header>
    )
}