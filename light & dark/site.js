document.querySelector("#switch")
        .addEventListener("click", changeTheme)

var theme = localStorage.getItem("theme")
setTheme(theme)

function setTheme(theme){
    let css = document.querySelector("#darkcss")
    css.disabled = theme == "light" ? true : false

    // let symbol = css.disabled ? "&#9789;" : "&#9788;"
    // document.querySelector("#switch").innerHTML = symbol

    localStorage.setItem("theme", theme)
}

function changeTheme(){
    theme = theme == "light" ? "dark" : "light"
    setTheme(theme)
}