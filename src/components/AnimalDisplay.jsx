import { useState } from 'react';
import heart from '../imgs/heart.svg';
const AnimalDisplay = ({ type }) => {
    const [likes, setLikes] = useState(0);
    const handleClick = () => {
        setLikes(likes + 1);
    };
    return (
        <div
            className='relative bg-base-300 p-2.5 m-2.5 rounded border border-accent shadow-accent shadow-md
            '
            onClick={handleClick}
        >
            <img className='h-52' src={`../src/imgs/${type}.svg`} alt={type} />
            <img
                className='absolute bottom-1 right-1'
                src={heart}
                alt='heart icon'
                style={{ width: 10 + 10 * likes + 'px' }}
            />
        </div>
    );
};

export default AnimalDisplay;
