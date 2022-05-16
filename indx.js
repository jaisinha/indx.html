// console.log("Hello");

function Bookinfo(name, Author, type) {
  this.name = name;
  this.Author = Author;
  this.type = type;
}

let a = document.getElementById("libraryform");
a.addEventListener("submit", libsub);
function Display() {}

Display.prototype.add = function (bookinfo) {
  console.log("Adding to UI");
  tableb = document.getElementById("tablebody");
  let uistring = `<tr>
  <td>1</td>
  <td>${bookinfo.name}</td>
  <td>${bookinfo.Author}</td>
  <td>${bookinfo.type}</td>
</tr>`;
  tableb.innerHTML += uistring;
};
Display.prototype.clear = function () {
  let libraryform = document.getElementById("libraryform");
  libraryform.reset();
};

Display.prototype.validate = function (bookinfo) {
  if (bookinfo.name.length < 2 || bookinfo.Author.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, messagedisp) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Messge:</strong> ${messagedisp}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">×</span>
  </button>
</div>`;
};
// let al;
Display.prototype.show = function (type) {
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>Messge:</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>`;
  setTimeout(() => {
    message.innerHTML = "";
  }, 2000);
};
function libsub(e) {
  e.preventDefault();
  let display = new Display();
  // console.log("Submitted");
  let name = document.getElementById("BookName");
  let Author = document.getElementById("Author");
  let Fiction = document.getElementById("Fiction");
  let CP = document.getElementById("CP");
  let Cooking = document.getElementById("Cooking");
  let n = [];
  n.push(name.value);
  localStorage.setItem("lc", JSON.stringify(n));
  // localStorage.setItem("Author", Author);
  // localStorage.setItem("Fiction", Fiction);
  if (Fiction.checked) {
    type = Fiction.value;
  } else if (CP.checked) {
    type = CP.value;
  } else if (Cooking.checked) {
    type = Cooking.value;
  }
  let bookinfo = new Bookinfo(name.value, Author.value, type);
  console.log(bookinfo);
  if (display.validate(bookinfo)) {
    display.add(bookinfo);
    display.clear();
    display.show("success", "Congratulations");
  } else {
    display.show("error", "Try Again");
  }
  display.validate(bookinfo);
}
