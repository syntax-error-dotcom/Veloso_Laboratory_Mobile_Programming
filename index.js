import isPassingGrade, {computeAverage} from "./gradeUtils";

//Starter data (place this in your main script or a separate data file):
const enrollees = [
  { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 },
];

// Write a function getEnrollees() that returns a Promise which resolves with the enrollees array after a short delay 
// (e.g., using setTimeout), simulating a call to a registrar API.
function getEnrollees() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(enrollees);
            
            
        }, 1000);
    });
}


//  Use destructuring to pull name, prelim, midterm, and final out of each enrollee record where you use them.
//  Use .map(), together with your imported computeAverage() and isPassing(), to build a new array of { name, 
// average, status } objects.
// Use .filter() to separate the passing enrollees from those on probation.
// Use .reduce() to compute the class average across all enrollees.

function processEnrollees(data) {
    const withStatus = data.map(({ name, prelim, midterm, final } ) => {
        const average = computeAverage(prelim, midterm, final);
        const status = isPassing(average) ? "PASSING" : "PROBATION";
        return {name, average, status}
    });
}


// Use .reduce() to compute the class average across all enrollees.
function printReportGrade(withStatus, classAverage, passingCount) {
    console.log(`=====Enrollment Eligibility Report ======`);

    withStatus.forEach(({name, average, status}) => {
        console.log(`${name} - Average: ${average.toFixed(2)} - ${status}`);
    });

    console.log(`Class Average: ${classAverage.toFixed(2)}`);
    console.log(`Passing: ${passingCount} / ${withStatus.length}`)
}

//  Write an async function that awaits getEnrollees() inside a try/catch block, so a failed "connection" is caught 
// and reported instead of crashing the program.
async function main() {
    try {
        const data = await getEnrollees();
        processEnrollees(data);
    } catch (err) {
        console.error(`Error. Something went wrong, issue: ${err.message}`);
    }
}


main();
