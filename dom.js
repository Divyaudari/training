<<<<<<< HEAD
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


// let form = document.querySelector("form");
// let username =document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname = username.Value;
//     let uemail = mail.Value;
//     let upass = psw.Value;
//     let userDetails = {
//         uname, uemail, upass
//     }

    
//     console.log(userDetails);
//      localStorage.setItem("userData", JSON.stringify(userDetails))
// })
// // localStorage.clear


// let h1 = document.createElement("h1");
// h1.setAttribute("id","demo");
// h1.innerText="MRU Batch 2 JS SESSION";
// document.body.append(h1);

// let main=document.createElement("div");
// main.setAttribute("id","mainblock");
// console.log(main);

// let topEle=document.createElement("div");
// topEle.setAttribute("class","topblock");

// let image=document.createElement("img");
// image.src ="./car.jpeg"
// topEle.appendChild(image);
// // console.log(topEle);

// let bottomEle=document.createElement("div");
// bottomEle.setAttribute("class","bottomblock");
// // console.log(bottomEle);

// let h1=document.createElement("h1");
// h1.innerText="car";

// let btn=document.createElement("button");
// btn.innerText="View more";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.color="white";
// btn.style.backgroundColor="doggerblue";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// main.appendChild(topEle);
// main.appendChild(bottomEle);

// document.body.appendChild(main);

let form =document.querySelector("form");
let username =document.getElementById("uName");
let pass =document.getElementById("uPass");
let check =document.getElementById("check");
let show = document.getElementById("show")
let gender =document.getElementsByName("Gender");


check.addEventListener("click", event=>{
    if(event.target.checked == true){
        pass.setAttribute("type", "text");
        show.innerText = "hide password";
    }else{
        pass.setAttribute("type", "text");
        show.innerText = "show password";
    }
})
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.value;
    let psw = pass.value;
    let gen ="";
    for (let i=0; i<=gender.length-1;i++){
        // console.log(gender.checked);
        if(gender[i].checked == true){
            gen =  gender[i].value;
        }
    }
   let userDetails={
    username:uname,
    password:psw,
    gender:gen
   }
    console.log(userDetails);
    sessionStorage.setItem("userData", JSON.stringify(userDetails))
     
})
=======
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
>>>>>>> 30bd9c921cf35a5bdd53062f2ecf50c11101d251
