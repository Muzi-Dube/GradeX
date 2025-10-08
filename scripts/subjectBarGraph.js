let chart;

export function initSubjectBarGraph() {
    try {
        const ctx = document.getElementById('subjectBarGraph').getContext('2d');
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: 'Grade (%)',
                    data: [],
                    backgroundColor: '#3067ff',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { grid: { display: false } },
                    y: { 
                        beginAtZero: true, 
                        max: 100,
                        grid: { display: false }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error initializing chart:', error);
    }
}

export function updateSubjectBarGraph(subjectList) {
    if (!chart) return;
    try {
        chart.data.labels = subjectList.map(item => item.subject);
        chart.data.datasets[0].data = subjectList.map(item => item.grade);
        chart.update();
    } catch (error) {
        console.error('Error updating chart:', error);
    }
}
