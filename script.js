
document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', () => {
        const infoDesc = button.nextElementSibling;
        infoDesc.style.display = infoDesc.style.display === 'block' ? 'none' : 'block';
    });
});


document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search').value.toLowerCase();
    const dramas = document.querySelectorAll('.drama-item');
    let found = false;

    dramas.forEach(drama => {
        const title = drama.querySelector('strong').textContent.toLowerCase();
        if (title.includes(query)) {
            drama.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('Drama not found!');
    }
});






