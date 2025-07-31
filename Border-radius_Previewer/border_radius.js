const input_top_left = document.getElementById("input_top_left");
const input_top_right = document.getElementById("input_top_right");
const input_bottom_left = document.getElementById("input_bottom_left");
const input_bottom_right = document.getElementById("input_bottom_right");
const btnCopyText = document.getElementById("btnCopyText");
const block = document.getElementById("block");
const display = document.getElementById("display")
//Transição para a mudança do border-radius
block.style.transition = "border-radius 0.5s ease";
 display.value = display.textContent



input_top_left.addEventListener('input', () =>{
    //Se não tiver nada no input, border-radius referente = 0
    if (input_top_left.value === "" || input_top_left.value === null) {
        block.style.borderTopLeftRadius = 0;
    } else {
        block.style.borderTopLeftRadius = input_top_left.value + "rem";
    }
    //Se for 0 ou undefined, mostra 0 no display ainda
    display.textContent = "border-radius: "
        + (input_top_left.value === "" || input_top_left.value === null ? 0 : input_top_left.value) + "rem "
        + (input_top_right.value === "" || input_top_right.value === null ? 0 : input_top_right.value) + "rem "
        + (input_bottom_right.value === "" || input_bottom_right.value === null ? 0 : input_bottom_right.value) + "rem "
        + (input_bottom_left.value === "" || input_bottom_left.value === null ? 0 : input_bottom_left.value) + "rem";

    display.value = display.textContent
});

input_top_right.addEventListener('input', () =>{
    if (input_top_right.value === "" || input_top_right.value === null) {
        block.style.borderTopRightRadius = 0;
    } else {
        block.style.borderTopRightRadius = input_top_right.value + "rem";
    }
    display.textContent = "border-radius: "
        + (input_top_left.value === "" || input_top_left.value === null ? 0 : input_top_left.value) + "rem "
        + (input_top_right.value === "" || input_top_right.value === null ? 0 : input_top_right.value) + "rem "
        + (input_bottom_right.value === "" || input_bottom_right.value === null ? 0 : input_bottom_right.value) + "rem "
        + (input_bottom_left.value === "" || input_bottom_left.value === null ? 0 : input_bottom_left.value) + "rem";
    display.value = display.textContent
});

input_bottom_left.addEventListener('input', () =>{
    if (input_bottom_left.value === "" || input_bottom_left.value === null) {
        block.style.borderBottomLeftRadius = 0;
    } else {
        block.style.borderBottomLeftRadius = input_bottom_left.value + "rem";
    }
    display.textContent = "border-radius: "
        + (input_top_left.value === "" || input_top_left.value === null ? 0 : input_top_left.value) + "rem "
        + (input_top_right.value === "" || input_top_right.value === null ? 0 : input_top_right.value) + "rem "
        + (input_bottom_right.value === "" || input_bottom_right.value === null ? 0 : input_bottom_right.value) + "rem "
        + (input_bottom_left.value === "" || input_bottom_left.value === null ? 0 : input_bottom_left.value) + "rem";
    display.value = display.textContent
});

input_bottom_right.addEventListener('input', () =>{
    if (input_bottom_right.value === "" || input_bottom_right.value === null) {
        block.style.borderBottomRightRadius = 0;
    } else {
        block.style.borderBottomRightRadius = input_bottom_right.value + "rem";
    }
    display.textContent = "border-radius: "
        + (input_top_left.value === "" || input_top_left.value === null ? 0 : input_top_left.value) + "rem "
        + (input_top_right.value === "" || input_top_right.value === null ? 0 : input_top_right.value) + "rem "
        + (input_bottom_right.value === "" || input_bottom_right.value === null ? 0 : input_bottom_right.value) + "rem "
        + (input_bottom_left.value === "" || input_bottom_left.value === null ? 0 : input_bottom_left.value) + "rem";
    display.value = display.textContent
});

function copyCode(){
    //Copia o texto de dentro do display
    navigator.clipboard.writeText(display.value);
    const alert = document.getElementById('copy-alert');
    if(alert) {
        alert.style.display = 'block';
        // Força reflow para garantir a transição
        void alert.offsetWidth;
        alert.style.opacity = '1';
        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => {
                alert.style.display = 'none';
            }, 500);
        }, 1800);
    }
}