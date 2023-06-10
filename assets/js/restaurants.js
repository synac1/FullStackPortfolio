class Restaurant {
    constructor(name,rating, numEmployees, menu){
        this.name = name;
        this.rating = rating;
        this.numEmployees = numEmployees;
        this.menu = menu;
    }


    hireWaitress(){
        this.numEmployees++;
    }

    fireEmployee(){
        this.numEmployees--;
    }
}