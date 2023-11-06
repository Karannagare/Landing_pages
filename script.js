var toggle_btn;
var big_wrapper;
var humburger_menu;

function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    humburger_menu = document.querySelector(".humburger-menu")
}
const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark){
    clone.classList.remove("light");
    clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light")
    }
    clone.classList.add("copy")
    main.appendChild(clone);



    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });
}

function events(){

    toggle_btn.addEventListener("click", toggleAnimation);
    humburger_menu.addEventListener("click", () =>{
        big_wrapper.classList.toggle("active");
    })
}

events();
