exports.addMovie = async (movieObj, collection) => {
    const response = await collection.insertOne({ title: movieObj.title });
    if (response.acknowledged) {
      console.log("Succesfully added movie");
    } else {
      console.log("Something went wrong");
    }
  };
  
  exports.listMovies = async (collection) => {
    const movies = await collection.find().toArray();
    console.log(movies);
  };

  exports.findMovie = async (filter, collection) => {
    const result = await collection.findOne(filter);
    console.log(result);
  };

  exports.updateMovie = async (filter, updateObj, collection) => {
    const updateRes = await collection.updateOne(filter, {$set: updateObj});
    if (updateRes.modifiedCount > 0) {
    } else {
    console.log("Nothing Updated");
    }
  };

  exports.deleteMovie = async (movieObj, collection) => {
    console.log("Succesfully deleted movie")
    const response = await collection.deleteOne({
        title: movieObj.title
    });
    console.log("Succesfully deleted movie")
    if (response.deletedCount > 0) {
        console.log("Succesfully deleted movie")
        console.log(response);
    } else {
        console.log(error)
    }
};
