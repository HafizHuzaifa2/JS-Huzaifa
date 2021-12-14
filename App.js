// (Chapter no 21 to 25)

// var First_Name = prompt("First Name");
// var Last_Name = prompt("Last Name");
// var Name = First_Name  +  Last_Name;
// alert("Name : " + Name);

// var Enter_Your_FavouratePhone = prompt("Enter Your Favourate Phone");
// var LengthOfStrings = Enter_Your_FavouratePhone.length ;
// document.write("Length Of Strings : " + LengthOfStrings)



// var text = "Pakistani"
// for (let i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 1) == "n") {
//         console.log("Word Found");
//         console.log("Index of n ; "+i)


//     }

// }

// var hello = "Hello World!";
// console.log(a);
// for (let i = 0; i < hello.length; i++) {
//         if (hello.slice(i, i + 1) == "l") {
//             console.log("Word Found");
//             console.log("Index of l ; "+ i);

//         }

//     }

// var meassages = "Islam is the religion of love";
// var new_message = meassages.replace (/love/,"peace " );
// console.log(new_message);

// var string = "432";
// var num = +string;
// console.log(num);

// var lower_case = "peanut";
// var upper_case = lower_case.toUpperCase();
// console.log(upper_case);

// var Upper_case = "PEANUTS";
// var Lower_case = lower_case.toLowerCase();
// console.log(Lower_case);

// var num = 123.45;
// var nuc = num.toString();
// console.log(nuc);

// var s = prompt("Enter User Name");
// for (var i = 0; i < s.length; i++) {
//     if (s.slice(i) == "!") {
//         alert("Please Enter a valid Name","ASCII code of ! is 33")

//         if (s.slice(i) == ",") {
//             alert("Please Enter a valid Name"+"ASCII code of , is 66")

//         }
//         if (s.slice(i) == ".") {
//             alert("Please Enter a valid Name"+"ASCII code of . is 58")

//         }
//         if (s.slice(i) == "@") {
//             alert("Please Enter a valid Name"+"ASCII code of @ is 64")

//         }
//     }

// }

// (Chapter no 26 to 30)

// var number = +prompt();
// var number1 = Math.round(number);
// var number2 = Math.ceil(number);
// var number3 = Math.floor(number);
// console.log(number1);
// console.log(number2);
// console.log(number3);

// var random = Math.random();
// var number2 = Math.ceil(random * 6);
// var random1 = Math.random(4);
// var random = Math.random();
// var number1 = Math.ceil(random * 4);
// console.log(number2,number1);

// var b = Math.random();
// var c = Math.round(b);
// if (c == 0) {
//     document.write("Head")
    
// }
// else{
//     document.write("Tail")
// }

// var random = Math.random();
// var number3 = Math.round(random * 100);
// console.log(number3)

// (Chapter no 30 to 34)

// var new_date = new Date();
// document.write(new_date)

// var new_date = new Date();
// var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var month = new_date.getMonth(months);
// var months_name = months[month];
// document.write(months_name);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is "+ nameOfToday);

// var a = now.getTime();
// document.write(a);

// var new_date = new Date();
// var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var month = new_date.getMonth(months);
// var months_name = months[month];

// var names = "Ahmed";
// document.write("Customer name: "+names);
// document.write("Month: " +months_name);
// document.write("Unit: " , 400);
// document.write("Unit Price: " , 15);
// var payment = 400*15;
// document.write("Net Amount: "+payment);
// document.write("After due: ",payment+400);

