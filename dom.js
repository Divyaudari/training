// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
 // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// ele[0].style.backgroundColor="tomato"

//! spread operator:- itwill takeout each and every value from the original array
//! and store it inside one more new array(pure array).
//? syntax:- [...variable];

// let x=[...ele];
// x.map(element=>{
//     element.style.backgroundColor="orange"
// })
// console.log(Array.isArray(x));


// let ele = document.getElementsByName("formData");

// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

//! addEventListner("event" ,()=>{})
    // btn.addEventListener("click",()=>{
    //     // console.log("button clicked");
    //     // alert("hi")
    //     document.body.style.backgroundColor="tomato"
    // })

    // let btn = document.querySelector("#btn");
    // btn.addEventListener("dblclick",()=>{
    //     console.log("double clicked");
    // })


    // let divBlock = document.getElementById("divBlock");
    // divBlock.addEventListener("mouseover",()=>{
    //     document.body.style.backgroundColor="yellow"
    //     divBlock.style.backgroundColor="blue"
    // })

    // divBlock.addEventListener("mouseleave",()=>{
    //     document.body.style.backgroundColor="orange"
    //     divBlock.style.backgroundColor="aqua"
    // })


    // let inp =document.getElementById("inp");
    // inp.addEventListener("keydown",()=>{
    //     console.log("keydown");
    // })

    // inp.addEventListener("keyup",()=>{
    //     console.log("keyup");
    // })



// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// // ele.setAttribute("id", "demo");
// ele.id = "demo";
// // ele.removeAttribute("id",);
// console.log(ele);

// let image = document.createElement("img");
// image.src ="./3606208.jpg";
// console.log(image);

// document.body.appendChild(ele);

// document.body.appendChild(image);


let form = document.querySelector("form");
let username =document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.Value;
    let uemail = mail.Value;
    let upass = psw.Value;
    let userDetails = {
        uname, uemail, upass
    }

    
    console.log(userDetails);
     localStorage.setItem("userData", JSON.stringify(userDetails))
})
// localStorage.clear
