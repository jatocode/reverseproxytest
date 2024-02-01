fetch('assets/data.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('data').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
