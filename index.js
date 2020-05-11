function myFunction() {
      var x, age,cguess;
      x = document.getElementById("age").value;
        if (x >= 17 ) {
            age = "You can watch R rated movies"
        } else if(x >= 13) {
            age = "You can watch PG-13 rated movies"
        } else if(x >= 5) {
            age = "You can watch E rated movies"
        } else {
            age ="You are to young to watch most movies"
        }
    document.getElementById("demo").innerHTML = age;
}