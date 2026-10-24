IT313 - Modern JavaScript (ES6+) Essentials in Action
Project: Enrollment Eligibility Checker Course: IT 313 - Mobile Programming Runtime: Node.js (ES modules)
//edit : hehe wla ko naka follow sa name sa folder diri sir


The Problem
The IT313 registrar has a raw list of enrollee records for the semester. Each record has a name and three grades: prelim, midterm, and final.

This program turns that raw data into a formatted eligibility report:
An enrollee is PASSING if the average of their prelim, midterm, and final is 75 or above. if not, they are on PROBATION.
The report also shows the class average and the number of passing enrollees.


Approach
Each requirement is solved with the ES6+ feature that fits it best.

- we separated grade logic from project flow, we make use of import/export, in this way we can make the index.js focused on the flow.
- in the index, we export computeAverage and isPassing, I decdied to make computeAverage a named export because and the isPassing a default, why? its because of the
  set goal in the code, the code was about computing the student's grade and see if they were in probabtion or pass, in this case isPassing was its goal but also for
  the reason computeAverage has multiple exports like add, divide and so forth.
- we simulate registrar API call , by using Promise + setTimeout()
- we use async/wait and try/catch to wait for data and catch error so the flow is seamless, await pauses until the promise settles, so the code reads top to bottom,
  and try/catch reports a failed connection instead of crashing
- applied Destructuring 	({ name, prelim, midterm, final }) is cleaner than repeating enrollee.name, enrollee.prelim, etc.\
- applied map(), reduce(), filter()
- template literals for print report


How to Run
- Install Node.js (check with node -v).
- Clone this repository and open the project folder (make sure to cd to the correct folder
- node index.js

