import { useState } from 'react';
import heart from '../imgs/heart.svg';
const AnimalDisplay = ({ type }) => {
    const [likes, setLikes] = useState(0);
    const handleClick = () => {
        setLikes(likes + 1);
    };
    return (
        <div onClick={handleClick}>
            <img src={`../src/imgs/${type}.svg`} alt={type} />
            <img src={heart} alt='heart icon' style={{ width: 10 + 10 * likes + 'px' }} />
        </div>
    );
};

export default AnimalDisplay;
