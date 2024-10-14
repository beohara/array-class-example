let moviePoster = ["https://posterhouse.org/wp-content/uploads/2021/05/silence_of_the_lambs_0.jpg",
    "https://posterhouse.org/wp-content/uploads/2021/05/jaws_0.jpg",
    "https://posterhouse.org/wp-content/uploads/2021/05/rosemarys_baby_0.jpg",
    "https://posterhouse.org/wp-content/uploads/2021/05/godfather_0.jpg"
];

document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM loaded");

    //length of the array
    let arrayindex = moviePoster.length;

    //generate random number with math function
    function posterindex(randomindex) {
        return Math.floor(Math.random() * randomindex);
    }

    let randomNo = posterindex(arrayindex);
    console.log("random index is", randomNo);

    //linking button
    const button = document.getElementById("randomImg");

    button.addEventListener("click", () => {

        document.getElementById("random").src = moviePoster[randomNo];

    });

});
