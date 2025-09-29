export function fromInput() {
    const subjectInputEl = document.querySelector('.js-subjectInput');
    const gradeInputEl = document.querySelector('.js-gradeInput');
    const addBtn = document.querySelector('.js-addBtn');
    const listContainer = document.querySelector('.list-container');
    const calculateBtn = document.querySelector('.calculate-btn');
    const statsContainer = document.querySelector('.stats-container');

    let subjectList = [];

    addBtn.addEventListener('click', () => {
        const subject = subjectInputEl.value.trim();
        const grade = gradeInputEl.value.trim();

        if (subject && grade) {
            subjectList.push({ subject, grade });
            renderList();
            subjectInputEl.value = '';
            gradeInputEl.value = '';
        }
    });

    function renderList() {
        if (subjectList.length === 0) {
            listContainer.innerHTML = '<p>Nothing yet!</p>';
            return;
        }

        listContainer.innerHTML = subjectList.map((item, idx) => `
            <div class="subject-container">
                <p class="subject-name">${item.subject}</p>
                <p class="subject-grade">Grade: ${item.grade}%</p>
                <div class="list-btn-container">
                    <button class="edit-btn" data-idx="${idx}">Edit</button>
                    <button class="delete-btn" data-idx="${idx}">Delete</button>
                </div>
            </div>
        `).join('');

    renderList();
    }}