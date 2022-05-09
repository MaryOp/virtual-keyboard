
    let buttons_array = document.querySelectorAll(".key_button");

    function key_down_listen(event) {
        // document.addEventListener('keydown', function(event) {
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
    }
    

function key_up_listen(event) {
    // document.addEventListener('keyup', function(event) {
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
}

export { key_down_listen, key_up_listen }
// export function key_down_listen(event);
// export function key_up_listen(event);
       // document.addEventListener('keydown', key_down_listen(event));
        // document.addEventListener('keyup', key_up_listen(event));