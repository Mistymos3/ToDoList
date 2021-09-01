function addTask () {
    var input = document.getElementById("input");
    //get current text from input field
    var newTask = input.value;
    //only add new item to list if some text was entered
    if (newTask != "") {
        //create new HTML list item
        var item = document.createElement("li");
        //add HTML for buttons and new task text
        //Note, need to use "because of" in HTML
        item.innerHTML = '<input type = "button" class = "done" onclick = "markDone(this.parentNode)" value = "&#x2713;"/>' + '<input type = "button" class = "remove" onclick = "remove(this.parentNode)" value = "&#x2715;" />' + newTask;

        //add new item as part of existing list
        document.getElementById("tasks").appendChild(item);

        //step 4
        input.value = "";
        input.placeholder = "enter new task ...";
    }
}

//changestyling used for given item
function markDone(item) {
    item.className = 'finished';
}

//step 7
function remove(item) {
    //only remove item if check mark has been clicked first
    if(item.className == 'finished') {
    //remove item completely from document
    item.remove();
    }
}

//step 11
//change the text in the div created in step 8 9 index.html
function doAbout() {
    var doAbout = document.getElementById("divAbout");

    doAbout.className = "aboutColor";
    doAbout.innerHTML = "Author is Iva Marie";
}

//step 14
//function that when called clears doAbout function
function clearAbout() {
    var clear = document.getElementById("divAbout");

    clear.innerHTML = "";
}