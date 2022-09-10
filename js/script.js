const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("select")

async function getData(numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`)
    const data = await usersRequest.json()
    const userResults = data.results
    //console.log(userResults)
    displayUsers(userResults)
}

getData()

const displayUsers = (userResults) => {
    randomFolks.innerHTML = " "
    userResults.forEach(user => {
        const country = user.location.country
        const name = user.name.first
        const imageURL = user.picture.medium
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageURL} alt="User avatar" />`
        randomFolks.append(userDiv)
    })
}

selectUserNumber.addEventListener("change", event => {
    const numUsers = event.target.value
    getData(numUsers)
})

