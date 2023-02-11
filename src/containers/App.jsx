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
        <div className='prose'>
            <button className='btn btn-primary btn-wide text-primary-content' onClick={handleButtonClick}>
                Add Animal
            </button>
            <div>{displayedAnimals}</div>
        </div>
    );
};

export default App;
