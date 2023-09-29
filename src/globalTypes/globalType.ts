// {
//     "Title": "The Catcher in the Rye",
//     "Author": "J.D. Salinger",
//     "Genre": "Fiction",
//     "Publication Date": "July 16, 1951",
//     "img": "catcher_in_the_rye.jpg",
//     "userEmail": "user1@example.com"
//   },

export type IAllBooks = {
  id: number;
  Title: string;
  Author: string;
  Genre: string;
  "Publication Date": string;
  img: string;
  userEmail: string;
};
