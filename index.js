console.log("screen running");
document.querySelector(".bi-bi-bag-x-fill").style.display="none"
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".bi-bi-list").style.display="inline"
        document.querySelector(".bi-bi-bag-x-fill").style.display="none";
    }
    else{
        document.querySelector(".bi-bi-list").style.display ="none"
        document.querySelector(".bi-bi-bag-x-fill").style.display="inline";
    }
})
