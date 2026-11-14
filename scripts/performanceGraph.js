let chart;

export function initPerformanceGraph() {
    const canvas = document.getElementById('performanceGraph');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Grade Average', 'GPA (scaled)'],
            datasets: [{
                data: [0, 0],
                backgroundColor: ['#3067ff', '#8c00ff'],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, max: 100, grid: { display: false } },
                x: { grid: { display: false } }
            }
        }
    });
}

export function updatePerformanceGraph(average = 0, gpa = 0) {
    if (!chart) return;
    const avg = Number(average) || 0;
    const gpaNum = Number(gpa) || 0;
    const scaledGPA = Math.min(100, (gpaNum / 4) * 100);
    chart.data.datasets[0].data = [avg, scaledGPA];
    chart.data.datasets[0].backgroundColor = [getColorForValue(avg), getColorForValue(scaledGPA)];
    chart.update();
}

function getColorForValue(value) {
    // thresholds: below 60 red, 60-75 yellow, above 75 green
    if (value < 60) return '#e53935';
    if (value <= 75) return '#fbc02d';
    return '#43a047';
}
