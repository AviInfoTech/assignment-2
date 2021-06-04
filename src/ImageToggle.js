
import React, { useState } from 'react';
import logo from './logo.svg';


function ImageToggle() {
    const [toggled, setToggled] = useState(false);
    const toggleImage = () => setToggled(!toggled);
    return (
        <div>
            <button onClick={toggleImage}>Toggle Image</button>
            {toggled && <img src={logo} alt="logo" />}
        </div>
    )
}

export default ImageToggle
