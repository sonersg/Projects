// show task
const ul = document.querySelector(".ul") as HTMLUListElement;

function showTask() {
  let localArray = JSON.parse(localStorage.getItem("todos") || "[]");
  if (localArray.length === 0) {
    ul.innerHTML = "";
    return;
  }

  let li = "";
  let textDecoration = "";
  localArray.forEach((obj, index) => {
    if (obj.done === "checked") {
      textDecoration = "line-through";
    } else {
      textDecoration = "none";
    }
    li += `
      <li style="text-decoration: ${textDecoration}">
        <input type="checkbox" ${obj.done} onchange="handleChange(${index})"/>
        <span>${obj.text}</span>
        <small>${obj.date}</small>
        <button onclick="deleteItem(${index})">X</button>
      </li>
    `;
  });
  ul.innerHTML = li;
}
showTask();

// new task
const input = document.querySelector(".input") as HTMLInputElement;
input.onkeypress = function newTask(e) {
  let localArray = JSON.parse(localStorage.getItem("todos") || "[]");
  if (e.keyCode === 13) {
    const newItem = {
      id: 0,
      text: input.value,
      done: "",
      date: getDate(),
    };
    if (localArray.length === 0) {
      localArray = [newItem];
    } else {
      localArray.push(newItem);
    }
    localArray.forEach((obj, index) => {
      obj.id = index;
    });
    localStorage.setItem("todos", JSON.stringify(localArray));
    showTask();
    input.value = "";
  }
};

// delete task
function deleteItem(index) {
  let localArray = JSON.parse(localStorage.getItem("todos") || "[]");
  localArray.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(localArray));
  showTask();
}

// clear all
const clearButton = document.querySelector(".clearButton") as HTMLButtonElement;
clearButton.onclick = () => {
  let localArray = JSON.parse(localStorage.getItem("todos") || "[]");
  localArray.length = 0;
  localStorage.setItem("todos", JSON.stringify(localArray));
  showTask();
};

// handle change checkbox
function handleChange(index) {
  let localArray = JSON.parse(localStorage.getItem("todos") || "[]");
  if (localArray[index].done === "checked") {
    localArray[index].done = "";
  } else if (localArray[index].done === "") {
    localArray[index].done = "checked";
  }
  localStorage.setItem("todos", JSON.stringify(localArray));
  showTask();
}

// get date
function getDate() {
  const months = [
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
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let month = months[date.getMonth()];
  let day = date.getDate();
  // console.log(hours + ":" + minutes + ":" + month + ":" + day);

  function formatZeroes(time: number) {
    let ftime: string = time.toString();
    return ftime.length < 2 ? "0" + ftime : ftime;
  }
  return (
    formatZeroes(hours) + ":" + formatZeroes(minutes) + "/" + month + "." + day
  );
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
