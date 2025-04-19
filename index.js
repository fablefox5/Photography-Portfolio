const albumCards = document.getElementsByClassName("album-label-card");
let currentCard = null;

for(let i = 0; i < albumCards.length; i++) {
    albumCards[i].getElementsByTagName("h3")[0].addEventListener("click", function(e) {
        console.log(currentCard !== null);
        if(currentCard !== null) {
            currentCard.classList.remove("selected-card");
            currentCard.getElementsByClassName("album-content-container")[0].classList.remove("display-content");
            console.log(currentCard === albumCards[i]);
            if(currentCard === albumCards[i]) {
                currentCard = null;
                return;
            }
        }
        console.log(albumCards[i]);
        albumCards[i].classList.add("selected-card");
        albumCards[i].getElementsByClassName("album-content-container")[0].classList.add('display-content');
        console.log(albumCards[i].getElementsByClassName("album-content-container")[0]);
        currentCard = albumCards[i];
});
}