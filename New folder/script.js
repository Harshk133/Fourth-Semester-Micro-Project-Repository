console.log("This is Script.js!");

// Constuctor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype.
Display.prototype.add = function (book) {
    console.log("Adding to GUI!!");
    tableBody = document.getElementById("tableBody");
    let uiString = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
    `;
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if(book.name.length < 2 || book.author.length < 2){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type, displayMessage){
    let message = document.getElementById("message");
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message:</strong> ${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
}


// Add submit event listener to libraryForm.
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("You have submitted library form!");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    // [SEN, programming, EC].forEach(Element=>document.getElementById(Element));
    let type;
    let SEN = document.getElementById("SEN");
    let programming = document.getElementById("programming");
    let EC = document.getElementById("EC");

    if (SEN.checked) {
        type = SEN.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (EC.checked) {
        type = EC.value;
    }


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){       
        // localStorage.setItem("book", display.add(book));
        display.add(book);
        display.clear();
        display.show("success", " Your Books is Succesfully Added!")
    }else{
        display.show("danger", " Sorry, You cannot add this Book!")
    }
}


