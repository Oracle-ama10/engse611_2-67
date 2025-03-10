const library = [
    {
      title: "The hellsing",
      author: "Dante",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "La mancha land",
      author: "Don the great",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "The compass",
      author: "Ismael",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  console.log(library);

  library.forEach((book) => book.status.read = true);

console.log(library);
const { title: firstBook } = library[0];
console.log(firstBook);
const libraryJSON = JSON.stringify(library, null, 2);
console.log(libraryJSON);