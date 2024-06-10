export const useMap = (results) => {
  const dataUpdated = results.map((result)=>{
    return {
      image: result.image,
      name: result.name,
      species: result.species,
      status: result.status
    }
  });
  return dataUpdated;
};
