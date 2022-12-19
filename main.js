const buttons = document.getElementsByClassName("rates")

var rating = 6

for (let i = 0; i < buttons.length; i++) {

    var active = document.getElementsByClassName("active")
    
    buttons[i].addEventListener("click", function(){
        
        for (let n = 0; n < active.length; n++) {
            active[n].classList.remove("active")
        }

        buttons[i].classList.add("active")

        rating = i

        console.log(rating)
    })
}

const submit = document.getElementsByClassName("submit")

submit[0].addEventListener("click", function(){

    console.log(rating)

    if (rating > 4) {
        alert("Please, select a rating")
    } else {
        const submitRateWindow = document.getElementsByClassName("submitRate")
        const thanksWindow = document.getElementsByClassName("thanks")

        console.log(rating += 1)

        submitRateWindow[0].classList.add("hide")
        thanksWindow[0].classList.remove("hide")
        document.getElementById("selectedRating").innerHTML = "You selected" + " " + rating + " " + "out of 5"
    }
})