document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault()

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    let tableRow = document.createElement("tr")

    tableRow.innerHTML = `<th>${name}</th><th>${email}</th>`
    document.getElementById("registrationTable").appendChild(tableRow)
    document.getElementById("registrationForm").reset()
})