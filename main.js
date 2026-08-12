const user_database = [
    { name: "Shah", password: "shah123" },
    { name: "Nawaz", password: "nawaz2223" },
    { name: "Shahzaib", password: "zaib12443" },
    { name: "Alam", password: "alam321094" },
    { name: "Shaaan", password: "shayn0999" }
];

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const loginUsername = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;

    const login = user_database.some(
        x => x.name === loginUsername && x.password === loginPassword
    );

    if (login) {
        alert("User exists in database");
    } else {
        alert("User does not exists in database");
    }
});