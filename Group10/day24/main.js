const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";
const currentPage = document.body.id;
console.log(currentPage);
if (currentPage === "index") {
    const usercontainer = document.getElementById("container");
    fetch(`${API_BASE_URL}`)
        .then((response) => response.json())
        .then((users) => {
            users.forEach((user) => {
                console.log(user);
                const card = document.createElement("div");
                card.innerHTML =
                    `
                <a  href="userid.html?id=${user.id}">
                <span>${user.id}</span>
                   <span>${user.name}</span>
                 </a>
                `
                usercontainer.appendChild(card);

            });

        })
        .catch((error) => {
            usercontainer.textContent = "Error fetching users"
        })

}
if (currentPage === "userDetails") {
    const userIdContainer = document.getElementById("container")
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");

    console.log(userId)
    if (userId) {
        fetch(`${API_BASE_URL}/${userId}`)
            .then((response) => response.json())
            .then((user) => {
                console.log(user)
            })
    } else {
        userIdContainer.textContent = "User not found";
    }

}
