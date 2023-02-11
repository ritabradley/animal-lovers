const AnimalDisplay = ({ type }) => {
    return (
        <div>
            <img src={`../imgs/${type}.svg`} alt={type} />
        </div>
    );
};

export default AnimalDisplay;
