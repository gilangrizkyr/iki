const movingText = document.getElementById('movingText');
let clickCount = 0;

movingText.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 3) {
        // Gambar ditampilkan setelah tiga kali klik
        const image = document.createElement('img');
        image.src = 'dd.jpg'; // Gantilah dengan URL gambar yang telah Anda download
        image.alt = 'Gambar';
        movingText.textContent = '';
        movingText.classList.add('clicked');
        movingText.appendChild(image);
    }
});
