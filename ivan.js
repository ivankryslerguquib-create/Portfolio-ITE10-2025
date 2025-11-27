function showRegister() {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("register-box").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("register-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
}

function register() {
    let user = document.getElementById("reg-user").value;
    let pass = document.getElementById("reg-pass").value;

    if (user === "" || pass === "") {
        alert("Please fill all fields!");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registration successful!");
    showLogin();
}

function login() {
    let user = document.getElementById("login-user").value;
    let pass = document.getElementById("login-pass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "portfolio.html";
    } else {
        alert("Incorrect username or password.");
    }
}

// Prevent viewing portfolio without login
if (window.location.pathname.includes("portfolio.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}
