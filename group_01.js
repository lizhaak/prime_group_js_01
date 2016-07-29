var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];

var employees = [atticus, jem, boo, scout];

var objEmployees = [];
var processedEmployees = [];

function Person(name, empNumber, currentSalary, rating) {
  this.name = name;
  this.empNumber = empNumber;
  this.currentSalary = currentSalary;
  this.rating = rating;
}

for (var i = 0; i < employees.length; i++) {
  var name = employees[i][0];
  var empNumber = employees[i][1];
  var currentSalary = employees[i][2];
  var rating = employees[i][3];
  var employee = new Person(name, empNumber, currentSalary, rating);
  objEmployees.push(employee);
}

function calculateSTI(employeeObj) {
  var name = employeeObj.name;
  var empNumber = employeeObj.empNumber;
  var currentSalary = Math.round(parseInt(employeeObj.currentSalary));
  var rating = employeeObj.rating;

  var bonusPercent = 0;
  var bonusMoney = 0;
  var totalSalary = 0;

  switch (rating){
    case 0:
    case 1:
    case 2:
      bonusPercent += 0;
      break;
    case 3:
      bonusPercent += 0.04;
      break;
    case 4:
      bonusPercent += 0.06;
      break;
    case 5:
      bonusPercent += 0.1;
      break;
    default:
      bonusPercent += 0;
  }

  if (empNumber.length == 4) {
    bonusPercent += 0.05;
  }

  if (currentSalary > 65000) {
    bonusPercent -= 0.01;
  }

  if (bonusPercent > 0.13) {
    bonusPercent = 0.13;
  }

  employeeObj.bonusPercent = bonusPercent;

  bonusMoney = Math.round(bonusPercent * currentSalary);
  totalSalary = (bonusMoney + currentSalary);

  employeeObj.totalSalary = totalSalary;
  employeeObj.bonusMoney = bonusMoney;

  processedEmployees.push(employeeObj);
}

objEmployees.forEach(calculateSTI);

console.log('processedEmployees: ', processedEmployees);
