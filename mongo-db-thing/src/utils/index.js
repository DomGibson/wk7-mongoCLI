exports.addMovie = async (movieObj, collection) => {
    const response = await collection.insertOne({ title: movieObj.title });
    if (response.acknowledged) {
      console.log("Succesffully added movie");
    } else {
      console.log("Something went wrong");
    }
  };
  
  exports.listMovies = async (collection) => {
    const movies = await collection.find().toArray();
    console.log(movies);
  };