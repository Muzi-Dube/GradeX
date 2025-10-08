// Minimal print/export handler — triggers browser print dialog to produce a PDF of the whole window.

document.addEventListener('DOMContentLoaded', () => {
	const downloadControl = document.querySelector('.download-btn');
	if (!downloadControl) return;

	downloadControl.addEventListener('click', (ev) => {
		ev.preventDefault();
		// Optional: give the browser a moment for any last UI updates before printing
		setTimeout(() => {
			try {
				window.print();
			} catch (err) {
				// Fallback: inform user
				console.error('Print failed', err);
				alert('Unable to open print dialog.');
			}
		}, 50);
	});
});
