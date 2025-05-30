const dataSplit = (newData) => {
  const dirtyRequirements = newData.split(",");
  const cleanRequirments = dirtyRequirements.map((req) => req.trim());
  return cleanRequirments;
};

export default dataSplit;
