let myFolders = []
let currentFolder

// on first run do this:
// 1) uncomment lines 10,11,12,13
// 2) run the program
// 3) refresh the page 
// 4) comment the program

let setupComplete = false
const setupMsg = document.getElementById("setup-notification")

console.log("SetUpVal1: " + setupComplete)

let currentFolderIndexStr = localStorage.getItem("currentFolderIndex")

if(currentFolderIndexStr)
{
    setupMsg.innerHTML = '<h1>LinkPad</h1>'
}
else
{
    setupMsg.innerHTML = '<button id = "setup-btn" onclick = "setupLocalStorage()">SETUP</button>'
    setupBtn = document.getElementById("setup-btn")    
}

function setupLocalStorage()
{
    if(currentFolderIndexStr)
    {
        setupMsg.textContent = "You have already completed setup"        
    }

    else
    {
        localStorage.setItem("currentFolder","myLinks")
        localStorage.setItem("myFolders", JSON.stringify(["myLinks"]))
        localStorage.setItem("currentFolderIndex", "0" )
        localStorage.setItem("myLinks", JSON.stringify([]) )
        setupMsg.textContent = "Successfully completed setup"
        setupBtn.textContent = "LinkPad"
        setupComplete = true
        window.location.href = 'index.html'
    }
}


let myLinks = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const headingEl = document.getElementById("folder-name")

let currentFolderIndex = parseInt(currentFolderIndexStr)
console.log(typeof currentFolderIndex)


currentFolder = localStorage.getItem("currentFolder")
console.log(localStorage.getItem("currentFolder"))
console.log(currentFolder)

let folderFromLocalStorage = localStorage.getItem("myFolders")
let myFolder = folderFromLocalStorage
console.log(myFolder)

myFolders = JSON.parse(myFolder)
console.log(typeof myFolders)
console.log(myFolders)

abc = myFolders[currentFolderIndex]
console.log(abc)
let linksFromLocalStorage = JSON.parse(localStorage.getItem(abc))
console.log(localStorage.getItem(abc))
console.log(linksFromLocalStorage)

let currentFolderFromLocalStorage = localStorage.getItem("currentFolder")
console.log(currentFolderFromLocalStorage)

headingEl.textContent = "Current folder: " + currentFolderFromLocalStorage

if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage
    render(myLinks)
}

function render(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setItem(myFolders[currentFolderIndex], JSON.stringify(myLinks) )
        render(myLinks)
    })
})

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem(myFolders[currentFolderIndex], JSON.stringify(myLinks) )
    render(myLinks)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLinks = []
    localStorage.setItem("currentFolder","myLinks")
    localStorage.setItem("myFolders", JSON.stringify(["myLinks"]))
    localStorage.setItem("currentFolderIndex", "0" )
    localStorage.setItem("myLinks", JSON.stringify([]) )
    render(myLinks)
})

const newFolderBtn = document.getElementById("new-folder-btn")
const openFolderBtn = document.getElementById("open-folder-btn")

newFolderBtn.addEventListener("click", function() {
    window.location.href = 'newFolder.html'
})

openFolderBtn.addEventListener("click", function() {
    window.location.href = 'openFolder.html'
})
