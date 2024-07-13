document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('grid');
    const numbers = [];
    

    for (let i = 1; i <= 8; i++) {
        numbers.push(i);
        numbers.push(i);
    }

    numbers.sort(() => Math.random() - 0.5);

    numbers.forEach(number => {
        const card = document.createElement('div');
        card.classList.add('card', 'hidden');
        card.textContent = number;
        card.dataset.number = number;
        grid.appendChild(card);
    });

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;



    grid.addEventListener('click', function(event) {
        const clickedCard = event.target;
        
        if (!clickedCard.classList.contains('card') , clickedCard.classList.contains('show') , lockBoard) {
            return;
        }
        
        clickedCard.classList.remove('hidden');
        clickedCard.classList.add('show');

        if (!firstCard) {
            firstCard = clickedCard;
        } else {
            secondCard = clickedCard;
            lockBoard = true;

            if (firstCard.dataset.number === secondCard.dataset.number) {
                firstCard = null;
                secondCard = null;
                lockBoard = false;
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('show');
                    firstCard.classList.add('hidden');
                    secondCard.classList.remove('show');
                    secondCard.classList.add('hidden');
                    firstCard = null;
                    secondCard = null;
                    lockBoard = false;
                }, 1000);
            }
        }
    });
});

