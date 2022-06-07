const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, listMovies, findMovie, deleteMovie, updateMovie } = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();
  try {
    if (yargsObj.add) {
      //add movie to mongodb
      await addMovie({ title: yargsObj.title }, collection);
    }
    
    else if (yargsObj.list) {
      //list movies from mongodb
      await listMovies(collection);
    }
    
    else if (yargsObj.find) {
      await findMovie({title: yargsObj.title, actor: yargsObj.actor},collection)
    }

    else if (yargsObj.updateMovie) {
      await updateMovie({title: yargsObj.title, newTitle: yargsObj.newTitle},collection);
    }

    else if (yargsObj.delete) {
      await deleteMovie({title:yargsObj.title}, collection) /* Delete movie function */
    }
    
    else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
  await client.close();
};

app(yargs.argv);

// node src/app.js --add --title "John Wick"
// node src/app.js --list
// node src/app.js --del --title "John Wick"
// node src/app.js --updt --title "John Wick" --newTitle "John Wick 2" Updates Actor
// node src/app.js --find --title "John Wick" --actor "Keanu Reeves"
