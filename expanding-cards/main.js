const cards = document.querySelectorAll('.card-item');
const handleClick = (event) => {
    if (event.target.parentElement.classList.contains('opened')) {
        event.target.parentElement.classList.remove('opened');
    } else {
        cards.forEach( card => {
            card.classList.remove('opened');
        })
        event.target.parentElement.classList.toggle('opened');
    }
}

cards.forEach(card => {
    card.addEventListener('click', handleClick);
})