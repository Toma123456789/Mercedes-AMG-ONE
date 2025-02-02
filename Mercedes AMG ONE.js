document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Hvala, ' + name + '! Vaša poruka je poslata.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Molimo ispunite sva polja!');
    }
});
