class User {
    constructor() {
        this.lastVisitDate = new Date(2017, this.getRandomIntInclusive(0,11),this.getRandomIntInclusive(1,32));
        if(this.lastVisitDate-(new Date())>0) {

            this.lastVisitDate = new Date();
        }
        this.globalDiscount = 0.05;
        this.nightDiscount = 0.1;
        this.weekendDiscount = 0.03;
        this.ordersCount = this.getRandomIntInclusive(1,10);
        this.ordersTotalPrice = this.ordersCount * this.getRandomIntInclusive(100, 200);
        this.bonus = this.getRandomIntInclusive(0, 150);

    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

}

function getDiscount() {
    let newUser = new User();
    console.log(newUser);
    let totalDiscount = 0;
    let todayDate = new Date();//0 - sun/нд 6 - sa/сб
    console.log(todayDate.getDay(), newUser.lastVisitDate, newUser.lastVisitDate.getDay());
    function isNight() {

        return (todayDate.getHours() >= 23 && todayDate.get() <=5)
    }
    function isWeekEnd() {
        return (todayDate.getDay() === 0 || todayDate.getDay() === 6);
    }
    if(isNight()) {
        console.log('night');
        if(isWeekEnd()){
            console.log('weekend');
            return totalDiscount = newUser.globalDiscount+ newUser.nightDiscount + newUser.weekendDiscount;
        } else {
            return totalDiscount =  newUser.globalDiscount+ newUser.nightDiscount;
        }
    } else {
        if(isWeekEnd()){
            console.log('weekend');
            return totalDiscount = newUser.globalDiscount + newUser.weekendDiscount;
        } else {
            return totalDiscount = newUser.globalDiscount;
        }
    }

}

function getBonus() {
    let newUser = new User();
    console.log(newUser);
    let todayDate = new Date();
    if(((todayDate-newUser.lastVisitDate)/86400000)<=10){
        console.log(`Cool. User was hear ${Math.ceil((todayDate-newUser.lastVisitDate)/3600000)} hours ago`);
        return Math.ceil((todayDate-newUser.lastVisitDate)/3600000)+newUser.bonus+newUser.ordersCount;
    } else {
        return newUser.bonus+newUser.ordersCount;
    }
}

console.log(getDiscount());
console.log('*****************************************************')
console.log(getBonus());