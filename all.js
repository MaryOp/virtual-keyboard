// DOMContentLoaded
import { create_keyboard_keys } from "./keys.js"
// import './style.css'
import styles from './style.css' assert { type: "css" };
document.adoptedStyleSheets = [styles];

let keys_array_eng = [
    '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER',
    'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '\u1403', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u140A', '\u1401', '\u1405']

let keys_array_rus = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
    'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
    'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\u1403', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u140A', '\u1401', '\u1405']

let keys_array_eng_shift = [
    '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER',
    'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '\u1403', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u140A', '\u1401', '\u1405']

let keys_array_rus_shift = [
    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
    'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
    'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '\u1403', 'Shift',
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
            default: 
            key_button_inner[i].addEventListener("click", ()  => {textarea.value+=key_button_inner[i].value});
                    break;
            }

                key_button_inner[i].addEventListener("mousedown", () => key_button_inner[i].classList.add("key_button_active"));
                key_button_inner[i].addEventListener("mouseup", () => key_button_inner[i].classList.remove("key_button_active"));
           
            key_button_inner[i].addEventListener("keydown", function(event) {
                if ((event.code == ShiftRight) && (event.code == ShiftLeft)) {
                    for (let i = 0; i < keys_array_eng.length; i++) {
                        let key = new key_button("input", "key_button", "button", keys_array_eng_shift[i]);
                        key.create_button();
                        var key_button_inner = document.querySelectorAll(".key_button");
                    }}
                key_button_inner[i].classList.add("key_button_active");
                });

            if (key_button_inner[i].value == "Caps Lock") {
                key_button_inner[i].addEventListener("mousedown", () => key_button_inner[i].classList.add("key_button_active"));
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
            //   }
        }
        
        key_button_inner[56].classList.remove("key_button_wide");
    }
    