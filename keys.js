
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

    export function create_keyboard_keys(input_array) {
            for (let i = 0; i < input_array.length; i++) {
                let key = new key_button("input", "key_button", "button", input_array[i]);
                key.create_button();
                // var key_button_inner = document.querySelectorAll(".key_button");
                }
        }
      