class Movie {
    constructor(Title, Studio, Rating = "PG" ){
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating;
    }
    getPG(){
        return Movie.Rating === "PG";
    }
}
var  m1 = new Movie("Casino Royale","Eon Productions", "PG13")

console.log(m1.getPG());
