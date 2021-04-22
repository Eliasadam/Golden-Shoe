

// class InvitoryBookStorage {
//     constructor(title, author, ISBN, numCopies, edition) {
//         this.title = title;
//         this.author = author;
//         this.ISBN = ISBN;
//         this.numCopies = numCopies;
//         this.edition = edition;
//     }

//     get availability() {
//         return this.getAvailability();
//     }
//     getAvailability() {
//         if (this.numCopies == 0) {
//             return "out of stock";
//         } else if (this.numCopies < 10) {
//             return "low stock";
//         } else {
//             return "in stock";
//         }
//     }
//     sell(numCopiesSold = 1) {
//         this.numCopies -= numCopiesSold;
        
//     }
//     restock(numCopiesRestocked = 5) {
//         this.numCopies += numCopiesRestocked;
        
//     }
// }


// const bookOne = new InvitoryBookStorage('five highly effective habit', 'jack rolling', 5032, 8, 1);
// const bookTwo = new InvitoryBookStorage('five highly effective habit', 'jack rolling', 5057, 4, 2);



// bookOne().getAvailability();
// bookOne().sell(8);
// bookOne().restock(15);


// ================movie function ======================
// function Movie(Title, Director, Genre, ReleaseYear, Rating) {
//     this.Title = Title;
//     this.Director = Director;
//     this.Genre = Genre;
//     this.ReleaseYear = ReleaseYear;
//     this.Rating = Rating;
  
// }


// Movie.prototype.getOverView = function () {
//     return `${this.Title} a ${this.Genre} film directed by ${this.Director} was released in ${this.ReleaseYear}. It recieved a rating of ${this.Rating}`;
// };

// const MoviesObj = new Movie('spiderman', 'Rob Green', 'drama', 2020, 9);

// console.log(MoviesObj.getOverView());

// // =============== class function movie ==============================

// class Movies{
//     constructor(Title, Director, Genre, ReleaseYear, Rating) {
//         this.Title = Title;
//         this.Director = Director;
//         this.Genre = Genre;
//         this.ReleaseYear = ReleaseYear;
//         this.Rating = Rating;
//     }
//     overView() {
//         return `${this.Title} a ${this.Genre} film directed by ${this.Director} was released in ${this.ReleaseYear}. It recieved a rating of ${this.Rating}`;

//     }
// }

// const MovieObjects = new Movies('snowman', 'James', 'children', 2009, 10);

// console.log(MovieObjects.overView());



// ===================filter from object ============== need revisiting ****

// const dishes = [
//     {
//         name: "tomato's pasta",
//         vegetarian: true
//     },
//     {
//         name: "chicken tikka masala",
//         vegetarian: false
//     },
//     {
//         name: "cheese burger",
//         vegetarian: false
//     },
//     {
//         name: "magaritta pizza",
//         vegetarian: true
//     },
//     {
//         name: "chicken tikka masala",
//         vegetarian: false
//     },
//     {
//         name: "chicken tikka masala",
//         vegetarian: true
//     },
// ];
// function vegDish(dishes) {
//     const menueDish = document.querySelector('#menu');
//     const vegetarianItem = dishes.filter((dish) => dish.vegetarian == true);
//     vegetarianItem.forEach((menu) => {
//         let dishMen = document.createElement('li');
//          dishMen.textContent = menu.name;
//          menueDish.appendChild(menu);
//     });
// }

// vegDish(dishes);