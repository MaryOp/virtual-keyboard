/* <a href='https://www.freepik.com/photos/rough-paper'>Rough paper photo created by kues1 - www.freepik.com</a> */

// DOMContentLoaded

window.onload = function() {
    class elem {
        constructor (tag, classname) {
            this.tag = tag;
            this.classname = classname;
        }
        create() {
            let w = document.querySelector(".wrapper");
            let r = document.createElement(this.tag);
                r.className = this.classname;
            if ( w == null){
                document.body.appendChild(r);
            }
            else {
                w.appendChild(r);
            }
        }
    }

    let wrapper = new elem("div", "wrapper");
    wrapper.create();
    let h1 = new elem("h1", "title");
    h1.create();
    document.querySelector("h1").innerHTML = "The Virtual Keyboard";
    let textarea = document.createElement("textarea");
    document.querySelector(".wrapper").appendChild(textarea);
    let keyboard = new elem("div", "keyboard");
    keyboard.create();
    let footer = new elem("footer", "footer");
    footer.create();
    document.querySelector(".footer").innerHTML = "This keyboard is created on Linux-based system</br></br><a href='https://www.freepik.com/photos/rough-paper'>Rough paper photo created by kues1 - www.freepik.com</a>";
   
    
    // alert("This keyboard is created on Linux-based system");
}


// textarea.oninput = function() {
//     result.innerHTML = input.value;
// }