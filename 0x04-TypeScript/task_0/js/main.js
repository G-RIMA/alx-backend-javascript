var student1 = {
    firstName: "Maria",
    lastName: "Iannotta",
    age: 26,
    location: "Italy"
};
var student2 = {
    firstName: "James",
    lastName: "Bond",
    age: 25,
    location: "Switzerland"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
var thead = document.createElement('thead');
thead.innerHTML = '<tr><th>firstName</th><th>location</th></tr>';
table.appendChild(thead);
var tbody = document.createElement('tbody');
table.appendChild(tbody);
for (var i = 0; i < studentsList.length; i++) {
    var row = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.innerHTML = studentsList[i].firstName;
    th2.innerHTML = studentsList[i].location;
    row.appendChild(th1);
    row.appendChild(th2);
    tbody.appendChild(row);
}
