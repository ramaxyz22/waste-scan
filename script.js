const form = document.getElementById("loginForm");
const errorBox = document.getElementById("errorMsg");
const loadingBox = document.getElementById("loadingBox");
const btnLogin = document.getElementById("btnLogin");

// daftar user contoh
const users = [
    { username: "admin", password: "123" },
    { username: "ramaa", password: "123" }
];

form.addEventListener("submit", function(e){
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    // reset error
    errorBox.innerText = "";

    // validasi
    if(user.length < 3 || pass.length < 3){
        showError("Username & password minimal 3 karakter");
        return;
    }

    // tampil loading
    loadingBox.classList.remove("hidden");
    btnLogin.disabled = true;

    setTimeout(() => {

        const found = users.find(u => u.username === user && u.password === pass);

        if(found){
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("username", user);
            window.location.href = "dashboard.html";
        } else {
            showError("Username atau password salah");
            loadingBox.classList.add("hidden");
            btnLogin.disabled = false;
        }

    }, 1200);
});


function showError(msg){
    errorBox.innerText = msg;
}





