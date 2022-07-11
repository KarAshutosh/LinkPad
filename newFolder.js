let myFolders = []
// myFolders[0] = "myLinks"

const inputEl = document.getElementById("input-el")
const backBtn = document.getElementById("back-btn")
const inputBtn = document.getElementById("input-btn")
const errorEl = document.getElementById("error-msg")

let foldersFromLocalStorage = JSON.parse( localStorage.getItem("myFolders") )

if (foldersFromLocalStorage) {
    myFolders = foldersFromLocalStorage
}

backBtn.addEventListener("click", function() {
    window.location.href = 'index.html'
})

inputBtn.addEventListener("click", function() {
    if(inputEl.value == "")
    {
        errorEl.textContent = "No input yet"
    }

    else
    {
        checked = true
        for(i = 0; i < myFolders.length; i++)
        {
            if(inputEl.value == myFolders[i])
            {
                errorEl.textContent = "Folder with this name already exists"
                checked = false
            }
        }
        
        if(checked == true)
        {
            myFolders.push(inputEl.value)
            localStorage.setItem(inputEl.value, JSON.stringify([]))
            inputEl.value = ""
            errorEl.textContent = "Added successfully. Press BACK to return"
            localStorage.setItem("myFolders", JSON.stringify(myFolders) )
            window.location.href = 'index.html'
        }

    }
})