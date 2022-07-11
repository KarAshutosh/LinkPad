// let myFolders = ["myLinks", "asefd"]
let myFolders = []

const headingEl = document.getElementById("heading-el")
const backBtn = document.getElementById("back-btn")
const ulEl = document.getElementById("ul-el")
let foldersFromLocalStorage = JSON.parse( localStorage.getItem("myFolders") )

console.log(foldersFromLocalStorage)
myFolders = foldersFromLocalStorage

headingEl.textContent = "Select folder:-"

backBtn.addEventListener("click", function() {
    window.location.href = 'index.html'
})

function render(myFolders) {
    let listItems = ""
    for (let i = 0; i < myFolders.length; i++) {
        listItems += `
            <li>
                <button id="${myFolders[i]}" onclick = changeCurrentFolder(${i})>
                    ${myFolders[i]}
                </button>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

function changeCurrentFolder(num)
{
    clickedFolder = myFolders[num]
    localStorage.setItem("currentFolder", clickedFolder )
    localStorage.setItem("currentFolderIndex", num )
    console.log("Clicked " + num +" which was " + clickedFolder)
    console.log("======================")
    window.location.href = 'index.html'
    console.log("suygrvbusryjcbsujkngy")

}

render(myFolders)