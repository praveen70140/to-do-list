//adding task to hhtml
array = document.cookie.slice(4).split("k");
array.pop();
todotable = "";
i = 1;
for (const element of array) {
  arr = element.split("%");
  str = arr[2];
  todotable =
    todotable +
    `<tr id="t${i}">
  <td id="T${i}">${arr[0]}</td>
  <td id="D${i}">${arr[1]}</td>
  <td id="d${i}">${str.slice(6, 8)}-${str.slice(4, 6)}-${str.slice(
      0,
      4
    )} ${str.slice(8, 10)}:${str.slice(10, 12)}</td>
  
  <td><button id="c${i}" onclick="deletetask(${i})">completed</button></td>
</tr>`;
  i++;
}
document.getElementById("table").innerHTML =
  "<tr><th>Title</th><th>Description</th><th>Deadline</th><th>Status</th></tr>" +
  todotable +
  '<tr><td><input type="text" placeholder="title" id="title"></td><td><input type="text" placeholder="description" id="discription"></td><td><input type="datetime-local" id="time"></td><td><button onclick="addtask()">add  task</button></td></tr>';

function addtask() {
  // adding task to cookies from input fields

  const title = document.getElementById("title").value;
  const description = document.getElementById("discription").value;
  var time = document.getElementById("time").value;
  newtime = time.replaceAll("-", "");
  newtime = newtime.replaceAll("T", "");
  newtime = newtime.replaceAll(":", "");

  if (document.cookie.indexOf("dah=") !== -1) {
    var str = document.cookie;
  } else {
    var str = "dah=";
  }

  document.cookie = str + `${title}%${description}%${newtime}%U%k`;
  // adding task to html document
  array = document.cookie.slice(4).split("k");
  array.pop();
  todotable = "";
  i = 1;
  for (const element of array) {
    arr = element.split("%");
    str = arr[2];
    todotable =
      todotable +
      `<tr id="t${i}">
    <td id="T${i}">${arr[0]}</td>
    <td id="D${i}">${arr[1]}</td>
    <td id="d${i}">${str.slice(6, 8)}-${str.slice(4, 6)}-${str.slice(
        0,
        4
      )} ${str.slice(8, 10)}:${str.slice(10, 12)}</td>
    
    <td><button id="c${i}" onclick="deletetask(${i})">completed</button></td>
</tr>`;
    i++;
  }
  document.getElementById("table").innerHTML =
    "<tr><th>Title</th><th>Description</th><th>Deadline</th><th>Status</th></tr>" +
    todotable +
    '<tr><td><input type="text" placeholder="title" id="title"></td><td><input type="text" placeholder="description" id="discription"></td><td><input type="datetime-local" id="time"></td><td><button onclick="addtask()">add  task</button></td></tr>';

  // cleaaring the input field
  document.getElementById("time").value = "";
  document.getElementById("title").value = "";
  document.getElementById("discription").value = "";
}
function deletetask(i) {
  // deletign or  html
  document.getElementById("t" + i).style.display = "none";
  // deleting from cookie
  cookie = document.cookie;
  title = document.getElementById(`T${i}`).innerText;
  description = document.getElementById(`D${i}`).innerText;
  time = document.getElementById(`d${i}`).innerText;
  newtime = time.replaceAll("-", "");
  newtime = newtime.replaceAll(" ", "");
  newtime = newtime.replaceAll(":", "");
  newtime =
    newtime.slice(4, 8) +
    newtime.slice(2, 4) +
    newtime.slice(0, 2) +
    newtime.slice(8, 12);
  document.cookie = cookie.replace(`${title}%${description}%${newtime}%U%k`, "");
}
// completign the task
// function completetask(i) {
//   // changing  completion stauts in ccookie
//   cookie = document.cookie;
//   title = document.getElementById(`T${i}`).innerText;
//   description = document.getElementById(`D${i}`).innerText;
//   time = document.getElementById(`d${i}`).innerText;
//   newtime = time.replaceAll("-", "");
//   newtime = newtime.replaceAll(" ", "");
//   newtime = newtime.replaceAll(":", "");
//   newtime =
//     newtime.slice(4, 8) +
//     newtime.slice(2, 4) +
//     newtime.slice(0, 2) +
//     newtime.slice(8, 12);
//   document.cookie = cookie.replace(
//     `${title}%${description}%${newtime}%U%k`,
//     `${title}%${description}%${newtime}%C%k`
//   );
//   console.log(i);
// }/

//



