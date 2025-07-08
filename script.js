document.getElementById('add-course').addEventListener('click', addCourse);
document.getElementById('calculate-cgpa').addEventListener('click', calculateCGPA);

function addCourse() {
    const coursesContainer = document.getElementById('courses-container');
    const newCourseRow = document.createElement('div');
    newCourseRow.classList.add('course-row');
    newCourseRow.innerHTML = `
        <input type="text" class="course-name" placeholder="Course Name (Optional)">
        <input type="number" class="credits" placeholder="Credits" min="0.5" step="0.5">
        <select class="grade">
            <option value="10">O (Outstanding)</option>
            <option value="9">A+ (Excellent)</option>
            <option value="8">A (Very Good)</option>
            <option value="7">B+ (Good)</option>
            <option value="6">B (Above Average)</option>
            <option value="5">C (Average)</option>
            <option value="4">P (Pass)</option>
            <option value="0">F (Fail)</option>
        </select>
        <button class="remove-course" onclick="removeCourse(this)">Remove</button>
    `;
    coursesContainer.appendChild(newCourseRow);
}

function removeCourse(button) {
    button.parentElement.remove();
}

function calculateCGPA() {
    const courses = document.querySelectorAll('.course-row');
    let totalCredits = 0;
    let weightedSum = 0;

    courses.forEach(course => {
        const credits = parseFloat(course.querySelector('.credits').value);
        const grade = parseFloat(course.querySelector('.grade').value);

        if (!isNaN(credits) && !isNaN(grade)) {
            totalCredits += credits;
            weightedSum += credits * grade;
        }
    });

    const cgpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : '0.00';
    document.getElementById('cgpa-result').textContent = cgpa;
}
