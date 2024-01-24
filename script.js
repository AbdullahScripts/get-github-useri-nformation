let button=document.getElementById("btn"); //getting button
let img=document.querySelector("img")
let namee=document.querySelector(".name")
let followers=document.querySelector(".followers")
let following=document.querySelector(".following")
let view=document.querySelector(".view")
let reops=document.querySelector(".repos")
let about=document.querySelector(".about")


window.onload =async function() {
    
    

    let responsee=await fetch("https://api.github.com/users/AbdullahScripts");
    
    let dataa=await responsee.json();
    
    img.src=`${dataa.avatar_url}`
    about.innerHTML=`${dataa.bio}`
    followers.innerHTML=`Followers: ${dataa.followers}`
    following.innerHTML=`Following: ${dataa.following}`
    namee.innerHTML=`Name: ${dataa.name}`
    view.href=`${dataa.html_url}`
    reops.innerHTML=`Public Repositories: ${dataa.public_repos}`
    

  };
  



button.addEventListener("click",generate)


async function generate(){
    let value=document.querySelector("input").value;
let api=`https://api.github.com/users/${value}`

let response=await fetch(api);

let data=await response.json();

img.src=`${data.avatar_url}`
about.innerHTML=`${data.bio}`
followers.innerHTML=`Followers: ${data.followers}`
following.innerHTML=`Following: ${data.following}`
namee.innerHTML=`Name: ${data.name}`
view.href=`${data.url}`
reops.innerHTML=`Public Repositories: ${data.public_repos}`





}
