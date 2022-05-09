// DOMContentLoaded
import { create_keyboard_keys } from "./keys.js"
import { key_down_listen, key_up_listen } from "./button_listeners.js"
// import './style.css'
import styles from './style.css' assert { type: "css" };
document.adoptedStyleSheets = [styles];

let keys_array_eng = [
    '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER',
    'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '\u1403', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u140A', '\u1401', '\u1405']

window.onload = function() {
    class elem {
        constructor (tag, classname) {
            this.tag = tag;
            this.classname = classname;
        }
        create() {
            let w = document.querySelector(".wrapper");
            let k = document.querySelector(".keyboard");
            let r = document.createElement(this.tag);
                r.className = this.classname;
            
            if (( w == null) && (k == null)) {
                document.body.appendChild(r);
            }
            else if ((w == null) && (k != null)) {
                k.appendChild(r);
            }
            else {
                w.appendChild(r);
            }
        }
    }

    // class key_button extends elem {

    //     constructor (tag, classname, type, value) {
    //         super(tag, classname);
    //         this.type = type;
    //         this.value = value;
    //     }

    //         create_button() {
              
    //         let k = document.querySelector(".keyboard");
    //         let r = document.createElement(this.tag);
    //             r.className = this.classname;
    //             r.type = this.type
    //             r.value = this.value;
    //             k.appendChild(r);
    //     }
    // }

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
    document.querySelector(".footer").innerHTML = "This keyboard is created on Linux-based system</br></br>Use left Alt + Shift to change the language</br></br><a href='https://www.freepik.com/photos/box-texture'>Box texture photo created by kues1 - www.freepik.com</a>";
    // function create_keyboard_keys(input_array) {
    //         for (let i = 0; i < input_array.length; i++) {
    //             let key = new key_button("input", "key_button", "button", keys_array_eng[i]);
    //             key.create_button();
    //             // var key_button_inner = document.querySelectorAll(".key_button");
    //             }
    //     }
      
  
    create_keyboard_keys(keys_array_eng);  
        
    var key_button_inner = document.querySelectorAll(".key_button");

        for (let i = 0; i < keys_array_eng.length; i++) {
        //    console.log(i + " " + key_button_inner[i].value)
        switch (key_button_inner[i].value) {
            case "Tab":
                    key_button_inner[i].classList.add("key_button_plus_half");
                    key_button_inner[i].addEventListener("click", ()  => {textarea.value+= "\t"});
                    break;
            case " ":
                    key_button_inner[i].classList.add("key_button_extra_wide");
                    key_button_inner[i].addEventListener("click", ()  => {textarea.value+=key_button_inner[i].value});
                    break;
            case "Backspace":
                key_button_inner[i].addEventListener("click", ()  => {
                    textarea.focus();
                    let current_text = textarea.value;
                    current_text = textarea.value.slice(0, -1);
                    textarea.value = current_text;
            });
                key_button_inner[i].classList.add("key_button_wide");
                break;
            case "Caps Lock":
                key_button_inner[i].classList.add("key_button_wide");
                // if (key_button_inner[i].classList.contains("key_button_active")) {
                //     key_button_inner[i].addEventListener("mousedown", () => key_button_inner[i].classList.add("key_button_active"));
                // }
                // else {
                //     key_button_inner[i].addEventListener("mousedown", () => key_button_inner[i].classList.remove("key_button_active"));
                // }
                // key_button_inner[i].addEventListener("click", ()  => {key_button_inner[i].classList.toggle("key_button_active")});
                break;
            case "Shift":
                key_button_inner[i].classList.add("key_button_wide");
                break;
            case "ENTER":
                    key_button_inner[i].addEventListener("click", ()  => {textarea.value+= "\r"});
                    key_button_inner[i].classList.add("key_button_wide");
                    break;
            case "DEL":
                key_button_inner[i].addEventListener("click", ()  => {
                    // let current_text = textarea.value;
                    // current_text = textarea.value.slice(0, (textarea.value.length-1));
                    // textarea.value = current_text;
            });
                break;
            case "\u1403":
                key_button_inner[i].addEventListener("click", ()  => {textarea.value+=""});
                break;
            case "\u140A":
                break;
            case "\u1401":
                break;
            case "\u1405":
                break;
            case 'Alt':
            case 'Win':
            case 'Ctrl':
                break;
            default: 
            key_button_inner[i].addEventListener("click", ()  => {textarea.value+=key_button_inner[i].value});
                break;
            }
            if (key_button_inner[i].value !== "Caps Lock") {
            key_button_inner[i].addEventListener("mousedown", () => key_button_inner[i].classList.add("key_button_active"));
            key_button_inner[i].addEventListener("mouseup", () => key_button_inner[i].classList.remove("key_button_active"));
            }
            else {
                // if (key_button_inner[i].classList.contains("key_button_active") == true) {
                //     key_button_inner[i].addEventListener("mousedown", () => key_button_inner[i].classList.add("key_button_active"));
                // }
                // else {
                //     key_button_inner[i].addEventListener("mousedown", () => key_button_inner[i].classList.remove("key_button_active"));
                // }
                key_button_inner[i].addEventListener("mousedown", () => key_button_inner[i].classList.toggle("key_button_active"));
                
            }

        //     function runOnKeys(func, ...codes) {
        //         let pressed = new Set();
        //         document.addEventListener('keydown', function(event) {
        //           pressed.add(event.code);
          
        //           for (let code of codes) { 
        //             if (!pressed.has(code)) {
        //               return;
        //             }
        //         }
        //           pressed.clear();
        //           func();
        //         });
          
        //         document.addEventListener('keyup', function(event) {
        //           pressed.delete(event.code);
        //         });
          
        // runOnKeys(
        //     create_keyboard_keys(keys_array_rus),
        //     ShiftLeft,
        //     AltKey,
        // );
        //       }
        }
        
        key_button_inner[55].classList.remove("key_button_wide");


        let buttons_array = document.querySelectorAll(".key_button");

        // function key_down_listen(event) {
            document.addEventListener('keydown', function(event) {
            for (let i=0; i < buttons_array.length; i++) {
                if (('Key' + (buttons_array[i].value.toUpperCase()) == event.code) || ('Digit' + (buttons_array[i].value) == event.code) || ((buttons_array[i].value) == event.code)) {
                    buttons_array[i].classList.add("key_button_active");
                }
    
                switch (event.key){
                    case ".":
                        buttons_array[51].classList.add("key_button_active");
                        break;
                    case ",":
                        buttons_array[52].classList.add("key_button_active");
                        break;
                    case "-":
                        buttons_array[11].classList.add("key_button_active");
                        break;
                    case "Delete":
                        buttons_array[28].classList.add("key_button_active");
                        break;
                }
                switch (event.code) {
                    case "NumpadDecimal":
                        buttons_array[28].classList.add("key_button_active");
                        break;
                    case "CapsLock":
                        buttons_array[29].classList.toggle("key_button_active");
                        break;
                    case "ShiftLeft":
                        buttons_array[42].classList.add("key_button_active");
                        break;
                    case "ShiftRight":
                        buttons_array[55].classList.add("key_button_active");
                        break;
                    case "AltLeft":
                        buttons_array[58].classList.add("key_button_active");
                        break;
                    case "AltRight":
                        buttons_array[60].classList.add("key_button_active");
                        break;
                    case "MetaLeft":
                        buttons_array[57].classList.add("key_button_active");
                        break;      
                    case "ControlLeft":
                        buttons_array[56].classList.add("key_button_active");
                        break;    
                    case "ControlLeft":
                        buttons_array[61].classList.add("key_button_active");
                        break;
                    case "BracketRight":
                        buttons_array[26].classList.add("key_button_active");
                        break;
                    case "BracketLeft":
                        buttons_array[25].classList.add("key_button_active");
                        break;
                    case "Backslash":
                        buttons_array[27].classList.add("key_button_active");
                        break;
                    case "Slash":
                        buttons_array[53].classList.add("key_button_active");
                        break;
                    case "Semicolon":
                        buttons_array[39].classList.add("key_button_active");
                        break;
                    case "Quote":
                        buttons_array[40].classList.add("key_button_active");
                        break;
                    case "Equal":
                        buttons_array[12].classList.add("key_button_active");
                        break;
                    case "Enter":
                        buttons_array[41].classList.add("key_button_active");
                        break;
                    case "Backquote":
                        buttons_array[0].classList.add("key_button_active");
                        break;
                    case "Space":
                        buttons_array[59].classList.add("key_button_active");
                        break;
                    case "ArrowUp":
                        buttons_array[54].classList.add("key_button_active");
                        break;  
                    case "ArrowDown":
                        buttons_array[63].classList.add("key_button_active");
                        break;
                    case "ArrowLeft":
                        buttons_array[62].classList.add("key_button_active");
                        break;
                    case "ArrowRight":
                        buttons_array[64].classList.add("key_button_active");
                        break;
                }
          }
        });
    
    // function key_up_listen(event) {
        document.addEventListener('keyup', function(event) {
            for (let i=0; i < buttons_array.length; i++) {
                if (('Key' + (buttons_array[i].value.toUpperCase()) == event.code) || ('Digit' + (buttons_array[i].value) == event.code) || ((buttons_array[i].value) == event.code)) {
                    buttons_array[i].classList.remove("key_button_active");
                }
                switch (event.key){
                    case ".":
                        buttons_array[51].classList.remove("key_button_active");
                        break;
                    case ",":
                        buttons_array[52].classList.remove("key_button_active");
                        break;
                    case "-":
                        buttons_array[11].classList.remove("key_button_active");
                        break;
                    case "Delete":
                        buttons_array[28].classList.remove("key_button_active");
                        break;
                }
                switch (event.code) {
                    case "NumpadDecimal":
                        buttons_array[28].classList.remove("key_button_active");
                        break;
                    case "ShiftLeft":
                            buttons_array[42].classList.remove("key_button_active");
                            break;
                    case "ShiftRight":
                            buttons_array[55].classList.remove("key_button_active");
                            break;
                    case "AltLeft":
                            buttons_array[58].classList.remove("key_button_active");
                            break;
                    case "AltRight":
                            buttons_array[60].classList.remove("key_button_active");
                            break;
                    case "MetaLeft":
                            buttons_array[57].classList.remove("key_button_active");
                            break;      
                    case "ControlLeft":
                            buttons_array[56].classList.remove("key_button_active");
                            break;    
                    case "ControlLeft":
                            buttons_array[61].classList.remove("key_button_active");
                            break; 
                    case "BracketRight":
                            buttons_array[26].classList.remove("key_button_active");
                            break;
                    case "BracketLeft":
                            buttons_array[25].classList.remove("key_button_active");
                            break;
                    case "Backslash":
                            buttons_array[27].classList.remove("key_button_active");
                            break;
                    case "Slash":
                            buttons_array[53].classList.remove("key_button_active");
                            break;
                    case "Semicolon":
                                buttons_array[39].classList.remove("key_button_active");
                                break;
                    case "Quote":
                                buttons_array[40].classList.remove("key_button_active");
                                break;
                    case "Equal":
                                buttons_array[12].classList.remove("key_button_active");
                                break;
                    case "Enter":
                                buttons_array[41].classList.remove("key_button_active");
                                break;
                    case "Backquote":
                                buttons_array[0].classList.remove("key_button_active");
                                break;
                    case "Space":
                                buttons_array[59].classList.remove("key_button_active");
                                break;
                    case "ArrowUp":
                                buttons_array[54].classList.remove("key_button_active");
                                break;  
                    case "ArrowDown":
                                buttons_array[63].classList.remove("key_button_active");
                                break;
                    case "ArrowLeft":
                                buttons_array[62].classList.remove("key_button_active");
                                break;
                    case "ArrowRight":
                                buttons_array[64].classList.remove("key_button_active");
                                break;
                }
            
            }      
    })

    // export { key_down_listen, key_up_listen }
    // export function key_down_listen(event);
    // export function key_up_listen(event);
           // document.addEventListener('keydown', key_down_listen(event));
            // document.addEventListener('keyup', key_up_listen(event));



        // document.addEventListener('keydown', key_down_listen(event));
        // document.addEventListener('keyup', key_up_listen(event));

        
    }
    