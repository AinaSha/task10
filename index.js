// // task 1. Продолжите работу с классом ресторана, созданного во время урока. Добавьте классу атрибут served со значением 0. Добавьте метод serve(). Каждый вызов метода serve() должно увеличивать атрибут served на 1 единицу.Также добавьте метод setServed(), позволяющий задавать любое количество обслуженных посетителей. В конце добавьте метод showTotalServed(), позволяющий выводить общее количество обслуженных посетителей.


class Restaraunt {

   constructor(name, typeOfKitchen) {
      this.name = name;
      this.typeOfKitchen = typeOfKitchen;
      this.served = 0;
      
   }

   showInfo() {
      return document.write(`Welcome to ${this.name} - the restaraunt of ${this.typeOfKitchen} cuisine! <br>`);
   }


   isOpen() {
     let currentHour = new Date().getHours();
     let currantDay = new Date().getDay();
   
     if(currantDay == 0){
        return document.write(`${this.name} is closed <br>`);
     } else {
      if(currentHour > 9 && currentHour < 22){
         return document.write(`${this.name} is open <br>`);
      } else {
         return document.write(`${this.name} is closed <br>`);
      }
     }
   }

   serve() {
      return `Количество обслуженных посетителей: ${++this.served}`
   }

   setServed(quantityOfServed) {
     return  `Количество обслуженных в банкете: ${this.served +=quantityOfServed}`;
   }
   
   showTotalServed() {
      return document.write(`Total served per day: ${this.served}`);
   }

}

const jibekJolu = new Restaraunt("Jibek-Jolu", "kyrgyz");
console.log(jibekJolu.showInfo());
console.log(jibekJolu.isOpen());
console.log(jibekJolu.serve());
console.log(jibekJolu.serve());

console.log(jibekJolu.setServed(20));
console.log(jibekJolu.showTotalServed());



//2. Создайте класс Cars. Класс должен содержать атрибуты: марка авто, год выпуска, мощность двигателя, цвет машины.
// Добавьте методы, которые будут выводить атрибуты.   
// Создайте класс ElectroCars, который наследует все свойства от класса Cars. У электромобилей должен быть дополнительный атрибут объем аккумулятора. Также у них должен быть дополнительный метод promote() который должен выводить сообщение с рекламой покупки электромобиля.


// class Cars {
//     constructor(brand,year,power,color){
//         this.brand = brand
//         this.year = year
//         this.power = power
//         this.color = color
//     }

//     describeCars () {
//         document.write(`Марка авто: ${this.brand}, <br> Год выпуска: ${this.year}, <br> Мощность двигателя: ${this.power},<br> Цвет машины: ${this.color}<br> <br>  `);
//     }

  
// }

// const cars = new Cars ('Mazda', '2003', '2.0', "white");
// cars.describeCars();


// class ElectroCars extends Cars {
//     constructor(brand,year,power,color,batteryVolume){
//         super(brand,year,power,color)
//         this.batteryVolume = batteryVolume
//     }
   
//     describeElectroCars (){
//         document.write(`Марка электроавто: ${this.brand}, <br> Год выпуска: ${this.year}, <br> Мощность двигателя: ${this.power},<br> Цвет машины: ${this.color}, <br> Обьем аккумулятора: ${this.batteryVolume} кВт/ч <br>`);
//     }
//     promote() {
//         document.write(`!!! Покупай электромобиль ${this.brand} - это экологично`)
//     }
// }

// const electroCars = new ElectroCars('Honda-NV', '2020', '2.0', "white", "24");
// electroCars.describeElectroCars();
// electroCars.promote();

