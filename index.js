let box = $('#box');

let entry = (value) => {
    box.val(box.val() + value);
}

let reset = () => {
    box.val("");
}

let del = () => {
    let index = box.val().length;
    box.val(box.val().slice(0,index-1));
}

let evalFn = () => {
    try {
        box.val(eval(box.val()).toFixed(2));
    } catch(err) {
        alert('Please enter correct input!!');
    }
}

$(document).keypress( (e) => {
    if(e.keyCode == 61 || e.keyCode == 13) 
        evalFn();
});