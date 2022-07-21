var submit = document.querySelector('#submit-button');
var calification = document.querySelector('#calification');
var final_rating = document.querySelector('#final-rating');
var rating_card = document.querySelector('#rating-card');
var thanks_card = document.querySelector('#thanks_card');
calification.addEventListener('click',e=>{
    let rating = e.target.innerText;
    final_rating.innerText = rating;
    if(rating>0&&rating<6)  {
        submit.addEventListener('click',()=>{
            rating_card.style.display = 'none';
            thanks_card.style.display = 'flex';
        });
    }
});


