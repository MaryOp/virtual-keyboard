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

    class key_button extends elem {

        constructor (tag, classname, type, value) {
            super(tag, classname);
            this.type = type;
            this.value = value;
        }

            create_button() {
              
            let k = document.querySelector(".keyboard");
            let r = document.createElement(this.tag);
                r.className = this.classname;
                r.type = this.type
                r.value = this.value;
                k.appendChild(r);
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
   
    keys_array_eng = [
        '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
        'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER',
        'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '\U+1403', 'Shift',
        'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '\U+140A', '\U+1401', '\U+1405']
    
    keys_array_rus = [
        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
        'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
        'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\U1403', 'Shift',
        'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '\U140A', '\U1401', '\U1405']

    keys_array_eng_shift = [
        '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
        'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER',
        'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '\U1403', 'Shift',
        'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '\U140A', '\U1401', '\U1405']

    keys_array_rus_shift = [
        'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
        'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
        'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '\U1403', 'Shift',
        'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '\U140A', '\U1401', '\U1405']
    

        for (let i = 0; i < keys_array_eng.length; i++) {
            let key = new key_button("input", "key_button", "button", keys_array_eng[i]);
            key.create_button();
            // switch (keys_array_eng[i]) {
            //     case "Tab":
            //         this.className = "key_button_plus_half";
            //         break;
            //     case "Ctrl":
            //         this.className = "key_button_plus_half";
            //         break;
            //     case "Space":
            //         this.className = "key_button_extra_wide";
            //         break;
            //     case "Backspace":
            //     case "Caps Lock":
            //     case "Shift":
            //     case "ENTER":
            //         this.className = "key_button_wide";
            //         break;
    
            // }
        }
            
        // document.querySelector(".key_button").onclick() {
        //     console.log("Hurray")
        // }

    }
    

// textarea.oninput = function() {
//     result.innerHTML = input.value;
// }