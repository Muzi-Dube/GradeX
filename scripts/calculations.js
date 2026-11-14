// Calculate average grade from an array of grade numbers
export function calculateAverage(grades) {
    if (!grades.length) return 0;
    const sum = grades.reduce((acc, val) => acc + Number(val), 0);
    return sum / grades.length;
}

// Calculate GPA (4.0 scale) from an array of grade numbers
export function calculateGPA(grades) {
    if (!grades.length) return 0;
    // Simple conversion: 90+ = 4.0, 80-89 = 3.0, 70-79 = 2.0, 60-69 = 1.0, <60 = 0
    const gpaPoints = grades.map(g => {
        g = Number(g);
        if (g >= 90) return 4.0;
        if (g >= 80) return 3.0;
        if (g >= 70) return 2.0;
        if (g >= 60) return 1.0;
        return 0.0;
    });
    const sum = gpaPoints.reduce((acc, val) => acc + val, 0);
    return (sum / grades.length).toFixed(2);
}

// Calculate APS score (South African method: 7 for 80-100, 6 for 70-79, etc.)
export function calculateAPS(grades) {
    if (!grades.length) return 0;
    const apsPoints = grades.map(g => {
        g = Number(g);
        if (g >= 80) return 7;
        if (g >= 70) return 6;
        if (g >= 60) return 5;
        if (g >= 50) return 4;
        if (g >= 40) return 3;
        if (g >= 30) return 2;
        if (g >= 0) return 1;
        return 0;
    });
    return apsPoints.reduce((acc, val) => acc + val, 0);
}