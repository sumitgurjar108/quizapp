import React, { useState } from 'react';

function Img() {
    const [pic, setPic] = useState(0);
    const data = [
        {
            id: 1,
            title: "first",
            src: "https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            title: "second",
            src: "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "third",
            src: "https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:4,
            title:"fourth",
            src:"https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"
        }
    ];

    const image = () => {
        setPic((prevPic) => (prevPic + 1) % data.length);
    }

    // setInterval(()=>{
    //     setPic((prevPic) => (prevPic + 1) % data.length)
    // },4000)

    const img = data[pic];

    return (
        <div>
            <h1>{img.title}</h1>
            <img src={img.src} alt={img.title} style={{ width: '45%', height: '35%' }} />
            <button onClick={image}>Next</button>
        </div>
    );
}

export default Img;
