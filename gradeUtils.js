export function computeAverage(prelim, midterm, final) {
    return (prelim + midterm + final)
}

export default function isPassingGrade(average) {
    return average >= 75;
}