let myLeads=[]

let inputEl=document.getElementById("input-el")
let buttonClk=document.getElementById("input-btn");
let ulEl=document.getElementById("ul-el")

const lead=JSON.parse(localStorage.getItem("myLeads"))

let tabBtn=document.getElementById("tab-btn")

if(lead){
    myLeads=lead;
    renderlead()
}


tabBtn.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        renderlead();
    })

    
})


buttonClk.addEventListener("click",function(){
    
    // console.log("Button CLicked")
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    // console.log(myLeads)
    renderlead();
    inputEl.value="";

})

const dltAll=document.getElementById("dlt-btn")
dltAll.addEventListener("click",function(){
    localStorage.removeItem("myLeads");
    myLeads=[]
    renderlead()
})

function renderlead(){
    // let listItem="<li><a href='"+inputEl.value+"' target='_blank'>"+inputEl.value+"</a></li>";
    // let listItem=`<li><a href="${inputEl.value}" target="_blank">${inputEl.value}</a></li>`
    // ulEl.innerHTML+=listItem;

    let listItems="";
    for (let i=0;i<myLeads.length;i++){
        listItems+=`
        <li>
            <a href="${myLeads[i]}" target="_blank">
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML=listItems;

}





