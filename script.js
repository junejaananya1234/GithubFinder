
 
//  const btn = document.getElementById("box");


//  btn.addEventListener('click', function(){
//     let input = document.getElementById("searching").value;
//     async function datafetching(){
    
//         let response = await fetch(`https://api.github.com/users/${input}`)
//         let data = await response.json();
//         // console.log(data);
//         displaydata(data);
//     }
//     datafetching();
//  })
//     function displaydata(data){
//         let container = document.getElementById("container");
//         container.style.display = "block";
//         let div = document.createElement("div");
//          div.innerHTML = `<div class="displaying"> 
//         <div class="profile"><img src=${data.avatar_url}></div>
//         <div class="name"> ${data.name}</div>
//         <div class="uname">${data.login}</div>
//         <div class="join">${data.created_at}</div>
//         <div class="bio">${data.bio}</div>
//         <div class="content"> <div>Repository ${data.public_repos}</div>
//              <div>Followers ${data.followers}</div>
//              <div>Following ${data.following}</div></div>
//         </div>`
       
//        container.appendChild(div);
        
       
       
       

//     }
async function getApi(){
   const search = document.getElementById("search");
   const res = await fetch(`https://api.github.com/users/${search.value}`);
   const data = await res.json();

   const resultContainer = document.getElementById("resultContainer");
   resultContainer.classList.remove('hidden');
   resultContainer.innerHTML = `
       <div id="image" class="w-20 h-20 p-2">
           <img src="${data.avatar_url}" alt="">
       </div>
       <div class="flex flex-col">
           <p class="text-xl font-semibold">
               ${data.name}
            </p>
           <p class="text-sm">
               ${data.id}
           </p>
       </div>
       <div class="w-[50%] text-sm">
           ${data.bio}
       </div>
       <div class="flex"><div>Followers ${data.followers}</div>
            <div>Following ${data.following}</div></div>
            
   `
   console.log(data);
}    


     

 




 


