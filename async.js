// console.log(10);
// console.log(20);
// setTimeout(()=>{console.lOg(30)},6000);
//  setInterval(()=>{
//     document.writeln("mru");
//      console.l0g(30);
//  },1500)
// console.log(40);
// console.log(50);

//!promise


//! API fetching

function fetchUsers(){
    let response =fetch("https://jsonplaceholder.typicode.com/users");
    response.then(result=>{
        // console.log(result.json());
        return result.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            console.log(store);
            data.map(user=>
            {
                store.innerHTML += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>
                `
            }
            )
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();