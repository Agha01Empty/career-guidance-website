function showDetails(career) {
    const details = {
        engineering: '<h3>Engineering</h3><p>Step-by-step guide on pursuing a career in engineering.</p>',
        medicine: '<h3>Medicine</h3><p>Step-by-step guide on pursuing a career in medicine.</p>',
        // Add more career details here
    };

    document.getElementById('career-details').innerHTML = details[career] || 'Please select a career option.';
}
