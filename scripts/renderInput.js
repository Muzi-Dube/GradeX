import { calculateAverage, calculateGPA, calculateAPS } from './calculations.js';
import { updatePerformanceGraph } from './performanceGraph.js';

export function fromInput() {
    const subjectInputEl = document.querySelector('.js-subjectInput');
    const gradeInputEl = document.querySelector('.js-gradeInput');
    const addBtn = document.querySelector('.js-addBtn');
    const clearBtn = document.querySelector('.js-clearBtn');
    const listContainer = document.querySelector('.subject-list-container');
    const listContainerEmpty = document.querySelector('.js-listContainerEmpty');
    const resultsContainer = document.querySelector('.results-container');
    const statsContainer = document.querySelector('.stats-container');
    const statsBars = statsContainer.querySelectorAll('.stats-bar');

    let subjectList = [];

    function updateResultsAndStats() {
        const grades = subjectList.map(item => Number(item.grade));
        const numSubjects = subjectList.length;
        const avg = calculateAverage(grades);
        const gpa = calculateGPA(grades);
        const aps = calculateAPS(grades);

        // Results section
        const results = resultsContainer.querySelectorAll('.score');
        results[0].textContent = numSubjects;
        results[1].textContent = numSubjects ? `${avg.toFixed(2)}%` : '0%';
        results[2].textContent = numSubjects ? gpa : '0.0';
        results[3].textContent = numSubjects ? aps : '0';

        // Stats section
        const statsSpans = statsContainer.querySelectorAll('span');
        statsSpans[0].innerHTML = `<b>Grade average(%) =</b> ${numSubjects ? avg.toFixed(2) : 0}%`;
        statsSpans[1].innerHTML = `<b>GPA(4.0) =</b> ${numSubjects ? gpa : '0.0'}`;

        // Stats bars
        statsBars[0].style.width = numSubjects ? `${Math.min(avg,100)}%` : '2%';
        statsBars[1].style.width = numSubjects ? `${(gpa/4)*100}%` : '2%';

        // update performance bar graph (scale GPA to percentage inside the graph module)
        updatePerformanceGraph(numSubjects ? Number(avg) : 0, numSubjects ? Number(gpa) : 0);
    }

    function renderList() {
        if (subjectList.length === 0) {
            listContainerEmpty.style.display = 'flex';
            listContainer.querySelectorAll('.subject-list').forEach(el => el.remove());
            updateResultsAndStats();
            return;
        }
        listContainerEmpty.style.display = 'none';
        // Remove old lists
        listContainer.querySelectorAll('.subject-list').forEach(el => el.remove());
        // Add new lists
        subjectList.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = 'subject-list';
            div.dataset.index = idx;
            div.innerHTML = `
                <div class="subjectgrade">
                    <p class="subject-name"><b>Subject:</b> ${item.subject}</p>
                    <p class="subject-grade"><b>Grade:</b> ${item.grade}%</p>
                </div>
                <div class="delete-btn-container">
                    <button class="delete-btn"><b>X</b></button>
                </div>
            `;
            div.querySelector('.delete-btn').addEventListener('click', () => {
                subjectList.splice(idx, 1);
                renderList();
            });
            listContainer.appendChild(div);
        });
        updateResultsAndStats();
    }

    addBtn.addEventListener('click', () => {
        const subject = subjectInputEl.value.trim();
        const grade = gradeInputEl.value.trim();
        if (subject && grade && !isNaN(Number(grade))) {
            subjectList.push({ subject, grade: Number(grade) });
            renderList();
            subjectInputEl.value = '';
            gradeInputEl.value = '';
        }
    });

    clearBtn.addEventListener('click', () => {
        subjectList = [];
        renderList();
    });

    // Initial render
    renderList();
}