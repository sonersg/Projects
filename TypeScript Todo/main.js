// show task
var ul = document.querySelector(".ul");
function showTask() {
    var localArray = JSON.parse(localStorage.getItem("todos") || "[]");
    if (localArray.length === 0) {
        ul.innerHTML = "";
        return;
    }
    var li = "";
    var textDecoration = "";
    localArray.forEach(function (obj, index) {
        if (obj.done === "checked") {
            textDecoration = "line-through";
        }
        else {
            textDecoration = "none";
        }
        li += "\n      <li style=\"text-decoration: ".concat(textDecoration, "\">\n        <input type=\"checkbox\" ").concat(obj.done, " onchange=\"handleChange(").concat(index, ")\"/>\n        <span>").concat(obj.text, "</span>\n        <small>").concat(obj.date, "</small>\n        <button onclick=\"deleteItem(").concat(index, ")\">X</button>\n      </li>\n    ");
    });
    ul.innerHTML = li;
}
showTask();
// new task
var input = document.querySelector(".input");
input.onkeypress = function newTask(e) {
    var localArray = JSON.parse(localStorage.getItem("todos") || "[]");
    if (e.keyCode === 13) {
        var newItem = {
            id: 0,
            text: input.value,
            done: "",
            date: getDate()
        };
        if (localArray.length === 0) {
            localArray = [newItem];
        }
        else {
            localArray.push(newItem);
        }
        localArray.forEach(function (obj, index) {
            obj.id = index;
        });
        localStorage.setItem("todos", JSON.stringify(localArray));
        showTask();
        input.value = "";
    }
};
// delete task
function deleteItem(index) {
    var localArray = JSON.parse(localStorage.getItem("todos") || "[]");
    localArray.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(localArray));
    showTask();
}
// clear all
var clearButton = document.querySelector(".clearButton");
clearButton.onclick = function () {
    var localArray = JSON.parse(localStorage.getItem("todos") || "[]");
    localArray.length = 0;
    localStorage.setItem("todos", JSON.stringify(localArray));
    showTask();
};
// handle change checkbox
function handleChange(index) {
    var localArray = JSON.parse(localStorage.getItem("todos") || "[]");
    if (localArray[index].done === "checked") {
        localArray[index].done = "";
    }
    else if (localArray[index].done === "") {
        localArray[index].done = "checked";
    }
    localStorage.setItem("todos", JSON.stringify(localArray));
    showTask();
}
// get date
function getDate() {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var month = months[date.getMonth()];
    var day = date.getDate();
    // console.log(hours + ":" + minutes + ":" + month + ":" + day);
    function formatZeroes(time) {
        var ftime = time.toString();
        return ftime.length < 2 ? "0" + ftime : ftime;
    }
    return (formatZeroes(hours) + ":" + formatZeroes(minutes) + "/" + month + "." + day);
}
//
//
//
//
//
//
//
//
//
//
//////////////////////////////////////////////
//////////////////////////////////////////////
// SECOND WAY
//////////////////////////////////////////////
//////////////////////////////////////////////
// const clearButton = document.querySelector(".clearButton") as HTMLButtonElement;
// const ul = document.querySelector(".ul") as HTMLUListElement;
// const input = document.querySelector(".input") as HTMLInputElement;
// document.addEventListener("DOMContentLoaded", () => {
//   arr.forEach((obj, index) => {
//     append(obj);
//   });
// });
// interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }
// const append = (obj: Todo) => {
//   const li = document.createElement("li");
//   const checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   checkBox.checked = obj.done;
//   checkBox.addEventListener("change", () => {
//     obj.done = !obj.done;
//     localStorage.setItem("todos", JSON.stringify(arr));
//     // console.log(obj.done);
//     if (obj.done) {
//       (<HTMLInputElement>checkBox.parentElement).style.textDecoration =
//         "line-through";
//     } else {
//       (<HTMLInputElement>checkBox.parentElement).style.textDecoration = "none";
//     }
//   });
//   li.append(checkBox);
//   if (obj.done) {
//     (<HTMLInputElement>checkBox.parentElement).style.textDecoration =
//       "line-through";
//   } else {
//     (<HTMLInputElement>checkBox.parentElement).style.textDecoration = "none";
//   }
//   const text = obj.text;
//   li.append(text);
//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerHTML = obj.id.toString();
//   deleteBtn.onclick = e => {
//     (<HTMLButtonElement>e.target).parentElement?.remove();
//     arr.splice(obj.id, 1);
//     localStorage.setItem("todos", JSON.stringify(arr));
//     console.log(arr);
//   };
//   li.append(deleteBtn);
//   ul.append(li);
//   input.value = "";
// };
// input.onkeypress = e => {
//   if (e.keyCode === 13) {
//     const newTodo: Todo = {
//       id: 0,
//       text: input.value,
//       done: false,
//     };
//     setLocal(newTodo);
//   }
// };
// const arr: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
// const setLocal = (todo: Todo) => {
//   arr.push(todo);
//   arr.forEach((obj, index) => {
//     obj.id = index;
//   });
//   // console.log(arr);
//   localStorage.setItem("todos", JSON.stringify(arr));
//   append(todo);
// };
// clearButton.addEventListener("click", () => {
//   arr.length = 0;
//   localStorage.setItem("todos", JSON.stringify(arr));
//   ul.innerHTML = "";
//   console.log(arr);
// });
