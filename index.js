/* Your Code Here */

// TASK ONE
// let testEmployee;
// testEmployee = ["Gray", "Worm", "Security", 1];
// let result;
// result = createEmployeeRecord(testEmployee);
// console.log(result);

function createEmployeeRecord(fourElementArray) {
  let [firstName, familyName, title, payPerHour] = fourElementArray;
  let objectBuilt = {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return objectBuilt;
}

// TASK TWO
// let employeeRecords;
// let twoRows = [
//   ["moe", "sizlak", "barkeep", 2],
//   ["bartholomew", "simpson", "scamp", 3],
// ];
// let answer;
// answer = createEmployeeRecords(twoRows);
// console.log(answer);

function createEmployeeRecords(arrayOfArrays) {
  let result = [];
  for (let array of arrayOfArrays) result.push(createEmployeeRecord(array));
  return result;
}

// TASK THREE
// let answer;
// answer = createTimeInEvent(
//   {
//     firstName: "Gray",
//     familyName: "Worm",
//     title: "Security",
//     payPerHour: 1,
//     timeInEvents: [],
//     timeOutEvents: [],
//   },
//   "2014-02-28 1400"
// );
// console.log(answer);

function createTimeInEvent(dateStamp) {
  let employeeRecord = {
    firstName: "Simba",
    familyName: "King",
    title: "",
    timeInEvents: [],
    timeOutEvents: [],
  };

  employeeRecord.timeInEvents[0] = {
    type: "TimeIn",
    date: dateStamp.split(" ")[0],
    hour: +dateStamp.split(" ")[1],
  };
  return employeeRecord;
}

// TASK FOUR
// copy and tweak the code for createTimeInEvent() function

function createTimeOutEvent(dateStamp) {
  let employeeRecord = {
    firstName: "Simba",
    familyName: "King",
    title: "",
    timeInEvents: [],
    timeOutEvents: [],
  };

  employeeRecord.timeOutEvents[0] = {
    type: "TimeOut",
    date: dateStamp.split(" ")[0],
    hour: +dateStamp.split(" ")[1],
  };
  return employeeRecord;
}

// TASK FIVE
// let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000]);
// let timeIn = createTimeInEvent(cRecord, "0044-03-15 0900");
// let timeOut = createTimeOutEvent(cRecord, "0044-03-15 1100");
// hoursWorkedOnDate(cRecord, "0044-03-15");

function hoursWorkedOnDate(employeeRecord, dateForm = "") {
  let timeInHour = createTimeInEvent(employeeRecord, "0044-03-15 0900");
  let timeOutHour = createTimeOutEvent(employeeRecord, "0044-03-15 1100");
  let timeDifference =
    (timeInHour.timeInEvents[0].hour - timeOutHour.timeOutEvents[0].hour) / 100;
  return Math.abs(timeDifference);
}

// TASK SIX
// draw inspiration from TASK FIVE

function wagesEarnedOnDate(employeeRecord, dateForm = "") {
  let timeInHour = createTimeInEvent(employeeRecord, "0044-03-15 0900");
  let timeOutHour = createTimeOutEvent(employeeRecord, "0044-03-15 1100");
  let timeDifference =
    (timeOutHour.timeOutEvents[0].hour - timeInHour.timeInEvents[0].hour) / 100;
  let payOwed = employeeRecord.payPerHour * timeDifference;
  return payOwed;
}

// TASK SEVEN

// function allWagesFor() {
//   let employeeRecord = [
//     {
//       firstName: "Julius",
//       familyName: "Caesar",
//       title: "General",
//       payPerHour: 27,
//       timeInEvents: [{ type: "TimeIn", date: "0044-03-14", hour: 900 }],
//       timeOutEvents: [{ type: "TimeOut", date: "0044-03-14", hour: 2100 }],
//     },
//     {
//       firstName: "Julius",
//       familyName: "Caesar",
//       title: "General",
//       payPerHour: 27,
//       timeInEvents: [{ type: "TimeIn", date: "0044-03-15", hour: 900 }],
//       timeOutEvents: [{ type: "TimeOut", date: "0044-03-15", hour: 1100 }],
//     },
//   ];

//   let total = 0;
//   employeeRecord.forEach((eachRecord) => {
//     total +=
//       (eachRecord.payPerHour *
//         (eachRecord.timeOutEvents[0].hour - eachRecord.timeInEvents[0].hour)) /
//       100;
//   });
//   return total;
// }

// TASK EIGHT

// function calculatePayroll() {
//   let employeeRecords = [
//     {
//       firstName: "Rafiki",
//       familyName: "Aide",
//       title: "",
//       payPerHour: 10,
//       timeInEvents: [
//         {
//           type: "TimeIn",
//           date: "2019-01-11",
//           hour: 900,
//         },
//         {
//           type: "TimeIn",
//           date: "2019-01-12",
//           hour: 1000,
//         },
//       ],
//       timeOutEvents: [
//         {
//           type: "TimeOut",
//           date: "2019-01-11",
//           hour: 1300,
//         },
//         {
//           type: "TimeOut",
//           date: "2019-01-12",
//           hour: 1300,
//         },
//       ],
//     },
//     {
//       firstName: "Simba",
//       familyName: "King",
//       title: "",
//       payPerHour: 100,
//       timeInEvents: [
//         {
//           type: "TimeIn",
//           date: "2019-01-01",
//           hour: 900,
//         },
//         {
//           type: "TimeIn",
//           date: "2019-01-02",
//           hour: 1000,
//         },
//       ],
//       timeOutEvents: [
//         {
//           type: "TimeOut",
//           date: "2019-01-01",
//           hour: 1300,
//         },
//         {
//           type: "TimeOut",
//           date: "2019-01-02",
//           hour: 1300,
//         },
//       ],
//     },
//   ];
//   let total = 0;
//   employeeRecords.map((eachEmployee) => {
//     total +=
//       (eachEmployee.timeOutEvents[0].hour - eachEmployee.timeInEvents[0].hour) *
//         eachEmployee.payPerHour +
//       (eachEmployee.timeOutEvents[1].hour - eachEmployee.timeInEvents[1].hour) *
//         eachEmployee.payPerHour;
//   });
//   total = total / 100;
//   return total;
// }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
