import { useState } from 'react';
import AnimalDisplay from '../components/AnimalDisplay';

const getRandomAnimal = () => {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
    let [animals, setAnimals] = useState([]);

    const handleButtonClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const displayedAnimals = animals.map((animal, index) => <AnimalDisplay key={index} type={animal} />);

    return (
        <div className='prose flex flex-col items-center'>
            <button className='btn btn-primary text-primary-content' onClick={handleButtonClick}>
                Add Animal
            </button>
            <div className='flex flex-wrap flex-row justify-center'>{displayedAnimals}</div>
        </div>
    );
};

export default App;
