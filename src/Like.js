import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Like() {
    const [like, setLike] = useState(0);

    const increaseLike = () => {
        setLike(like + 1);
    };
    const[dislike,setDislike]=useState(0);
    const decreaseLike=()=>{
        setDislike(dislike-1);

    };

    return (
        <div>
            <h1>{like}  {dislike}</h1>
            <button onClick={increaseLike}>
                <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <button onClick={decreaseLike}>
                <FontAwesomeIcon icon={faThumbsDown} />
            </button>
        </div>
    );
}

export default Like;
