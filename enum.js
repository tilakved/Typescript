"use strict";
// Enums or enumerations are a new data type
// enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
//  enum ids accessed using square brackets
// There are three types of enums:
// 1.Numeric enum
// 2.String enum
// 3.Heterogeneous enum
// -----------------------------------------------------------Numeric enum -----------------------------------------------------------
// Numeric enums are number-based enums i.e. they store string values as numbers.
// enum PrintMedia {
//     Newspaper = 0,
//     Newsletter = 5,
//     Magazine = 10,
//     Book = 1
// }
// console.log(PrintMedia[10])//returns Magazine
// -----------------------------------------------------------Numeric enum -----------------------------------------------------------
// The enum can be used as a function parameter or return type, as shown below:
// enum PrintMedia {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
// }
// //if you define first value it will define all others with the increment of 1
// function getMedia(mediaName: string): PrintMedia {
//     if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
//         console.log(PrintMedia[3]) //to print magazine
//         return PrintMedia.Magazine; //to print index number of Magazine
//     }
//     else{
//         console.log("null")
//         return 0;
//     }
//  }
// or
// function getMedia(mediaName: string): PrintMedia | void {
//     if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
//         console.log(PrintMedia[3]) //to print magazine
//         return PrintMedia.Magazine; //to print index number of Magazine
//     }
//  }
// let mediaType: PrintMedia = getMedia('forbes'); // to call getmedia function && returns Magazine  
// -----------------------------------------------------------Computed Enums: -----------------------------------------------------------
// When the enum includes computed and constant members, then uninitiated enum members either must come first or must come after other initialized members with numeric constants. 
// The following will give an error.
//*****error*****//code
// enum PrintMedia {
//     Newsletter = getPrintMediaCode('newsletter'),
//     Newspaper, // Error: Enum member must have initializer
//     Book,
//     Magazine = Newsletter * 3,
// }
//correct way
// enum PrintMedia {
//     Newspaper,
//     Book,
//     Newsletter = getPrintMediaCode('newsletter'),
//     Magazine = Newsletter * 3
// }
// // or
// enum PrintMedia {
//     Newsletter = getPrintMediaCode('newsletter'),
//     Magazine = Newsletter * 3,
//     Newspaper = 0,
//     Book,
// }
// ----------------------------------------------------------- string enum -----------------------------------------------------------
// enum PrintMedia {
//     Newspaper = "NEWSPAPER",
//     Newsletter = "NEWSLETTER",
//     Magazine = "MAGAZINE",
//     Book = "BOOK"
// }
// // Access String Enum 
// PrintMedia.Newspaper; //returns NEWSPAPER
// PrintMedia['Magazine'];//returns MAGAZINE
// note: The difference between numeric and string enums is that numeric enum values are auto-incremented, while string enum values need to be individually initialized.
// ----------------------------------------------------------- Heterogeneous Enum -----------------------------------------------------------
// Heterogeneous enums are enums that contain both string and numeric values.
// ----------------------------------------------------------- Reverse Mapping -----------------------------------------------------------
// enum PrintMedia {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
//   }
//   PrintMedia.Magazine;   // returns  3
//   PrintMedia["Magazine"];// returns  3
//   PrintMedia[3];         // returns  Magazine
//   console.log(PrintMedia)
// Result:
// above returns as below
//   {
//     '1': 'Newspaper',
//     '2': 'Newsletter',
//     '3': 'Magazine',
//     '4': 'Book',
//     Newspaper: 1,
//     Newsletter: 2,
//     Magazine: 3,
//     Book: 4 
//   }
// NOTE:- both the following mappings are true to enums: name -> value, and value -> name.
