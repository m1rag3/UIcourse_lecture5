var boxList = document.getElementById('box-example');
var ul = document.createElement('ul');
// ----------------------
function otherMassive(count){
    var array = [];
    for(var i = 1; i <=count; i++){
        array.push('Example-'+i);
    }
    return array;
}

// -----------------
var arr = [
    set0 =  otherMassive(100)
];
function example_1(array){
    var ul = document.createElement('ul');
    for(var i = 0; i < array.length; i++ ){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        ul.appendChild(item);
    }

    return ul;
}

// ---------------------
function example_2(count){
    for (var i = 1; i <= count; i++){
        var newLi = document.createElement('li');
        newLi.innerHTML = 'Example-'+i;
        ul.appendChild(newLi);
        boxList.appendChild(ul);
    }
}

// ---------------------
function example_3(textli, count){
    for (var i = 1; i <= count; i++){
        var item = document.createElement('li');
        var textnode = document.createTextNode(textli+i);
        item.appendChild(textnode);
        ul.appendChild(item);
        boxList.appendChild(ul);
    }
}

// ----------------------
function example_4(){
    var fragment = document.createDocumentFragment();
    for(var x = 1; x <= 100; x++) {
        var li = document.createElement("li");
        li.innerHTML = "Example-" + x;
        li.appendChild(fragment);
        ul.appendChild(li);
        boxList.appendChild(ul);
    }
}

// ----------------------
function removeElements()
{
    while (boxList.hasChildNodes()) {
        boxList.removeChild(boxList.firstChild);
    }
}