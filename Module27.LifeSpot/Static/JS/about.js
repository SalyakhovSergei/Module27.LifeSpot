function getReview() {

    let review = {}

    review["userName"] = prompt("Как вас зовут ?")
    if(review["userName"] == null){
        return
    }

    review["comment"] = prompt("Напишите свой отзыв")
    if(review["comment"] == null){
        return
    }

    review["date"] = new Date().toLocaleString()

    writeReview(review)
}

const writeReview = review => {
    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {

        
        let commentId = Math.random();
        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }
    
    document.getElementsByClassName('reviews')[0].innerHTML += ' <div class="review-text">\n' 
        + `<p> <i> <b>${review['author']}</b> ${review['date']}${likeCounter}</i></p>` 
        + `<p>${review['text']}</p>` + '</div>';

}

function getComment(){

    let comment = new Comment()
    
    if(comment.empty){
        return;
    }
    
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if(enableLikes){
        let review = Object.create(comment)
        review.rate = 0;
        
        writeReview(review)
    } else{
        writeReview(comment)
    }

}

function Comment(){
    this.author = prompt("Как вас зовут ?")
    if(this.author== null) {
        this.empty = true
        return
    }
    this.text = prompt("Оставьте отзыв")
    if(this.text == null){
        this.empty = true
        return
    }
    this.date = new Date().toLocaleString()
    
}

function addLike(id) {
    let element = document.getElementById(id);
    
    let array = element.innerText.split(' ')
    
    let resultNum = parseInt(array[array.length - 1], 10);
    
    resultNum += 1
    
    array[array.length - 1] =  `${resultNum}`
    
    element.innerText = array.join(' ')
}

//var slides = document.querySelectorAll('#slides .slide')
//var currentSlide = 0;
//
//function nextSlide() {
//    goToSlide(currentSlide+1);
//}
//
//function previousSlide() {
//    goToSlide(currentSlide-1);
//}
//
//function goToSlide(n) {
//    slides[currentSlide].className = 'slide';
//    currentSlide = (n+slides.length)%slides.length;
//    slides[currentSlide].className = 'slide showing';
//}
//
//
//var next = document.getElementById('next');
//var previous = document.getElementById('previous');
//
//next.onclick = function() {
//    pauseSlideshow();
//    nextSlide();
//};
//previous.onclick = function() {
//    pauseSlideshow();
//    previousSlide();
//};
//
//var next = document.getElementById('next');
//var previous = document.getElementById('previous');
//
//next.onclick = function() {
//    pauseSlideshow();
//    nextSlide();
//};
//previous.onclick = function() {
//    pauseSlideshow();
//    previousSlide();
//};

