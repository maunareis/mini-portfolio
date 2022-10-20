const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    
    tab.addEventListener("click", function() {

        if(tab.classList.contains("selected")){
            return;
        }

        selecttab(tab)
        showtabinfo(tab)
    });
});

function selecttab(tab) {
   
    const selectedtab = document.querySelector(".tab.selected");
    selectedtab.classList.remove("selected");

    tab.classList.add("selected");
}

function showtabinfo(tab){
   
    const selectedinformation = document.querySelector(".information.selected");
    selectedinformation.classList.remove("selected");

    const tabinfoelementid = `information-${tab.id}`

    const informationtobeshown = document.getElementById(tabinfoelementid)
    informationtobeshown.classList.add("selected")
}