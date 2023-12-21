// JavaScript-Code, um die Klasse "smaller-header" hinzuzufügen/entfernen
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('smaller-header');
    } else {
        header.classList.remove('smaller-header');
    }
});

