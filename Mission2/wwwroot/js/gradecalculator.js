$("#btnSend").click(function () {
    // calculate grade
    let iAssignment = $("#assignments").val() * .55;
    let iGroupProject = $("#groupproject").val() * .05;
    let iQuizzes = $("#quizzes").val() * .10;
    let iExams = $("#exams").val() * .20;
    let iIntex = $("#INTEX").val() * .10;

    let iTotal = iAssignment + iGroupProject + iQuizzes + iExams + iIntex
    iTotal = iTotal.toFixed(2)

    // assign grade
    if (iTotal >= 94) {
        sGrade = "A";
    }
    else if (iTotal >= 90) {
        sGrade = "A-";
    }
    else if (iTotal >= 87) {
        sGrade = "B+";
    }
    else if (iTotal >= 84) {
        sGrade = "B";
    }
    else if (iTotal >= 80) {
        sGrade = "B-";
    }
    else if (iTotal >= 77) {
        sGrade = "C+";
    }
    else if (iTotal >= 74) {
        sGrade = "C";
    }
    else if (iTotal >= 70) {
        sGrade = "C-";
    }
    else if (iTotal >= 67) {
        sGrade = "D+";
    }
    else if (iTotal >= 64) {
        sGrade = "D";
    }
    else if (iTotal >= 60) {
        sGrade = "D-";
    }
    else {
        sGrade = "E";
    }

    // display grade percentage and letter grade
    alert("Final Grade Percentage: " + iTotal + "%. Final Letter Grade: " + sGrade)
});