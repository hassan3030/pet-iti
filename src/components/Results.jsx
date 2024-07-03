import Pet from './Pet';

const Results = ({ pets }) => { // ({ pets }) => { called is composition component
  return (
    <div className="search">
      {!pets.length && <h1>No Pets Found</h1>}
      {pets &&
        pets.map((pet) => (
          <Pet
            // {...pet} to pass all props 
            key={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))}
    </div>
  );
};

export default Results;
