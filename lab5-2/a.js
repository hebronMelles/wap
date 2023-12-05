let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
    ];


// Question 1A.

function addBook(title,author,id){
    const book ={ 
        'title' :title,
    'author' : author,
    'id' : id
    };
    libraryBooks[4] = book;
    return book;
}

// Question 1B.
 function getTitles(){
   let arr = [];
   for (let i = 0; i < libraryBooks.length; i++) {
     arr[i] = libraryBooks[i].title;
   }
   arr.sort((x,y) => x.localeCompare(y));
   return arr;
 }


 // Question 1C
 function findBooks(str){
    let arr = libraryBooks.filter(x => x.title.includes(str))
    .map(x => x.author).sort((x,y) => x.localeCompare(y));
    return arr;
 }


 // Question 2
 function myMap(arr ,fun){
    let array = [];
    for (let i = 0; i < arr.length; i++) {
       array[i] = fun(arr[i]);
    }
    return array;
 }