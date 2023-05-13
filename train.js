// //Callback functionlar
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 20
//     "to'gri boshliq tanlang va ko'proq xato qiling",//20-30
//     "uzingizga ishlashni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //50-60
//     "yoshlarga investitsya qiling", //50-60
//     "endi dam oling "//60
// ];

// function maslahatBering(a,callback){
//    if (typeof a !== "number") callback("please input number ",null);
//    else if(a<=20 ) callback(null,list[0]);
//    else if(a<=20 && a<=30) callback(null,list[1]);
//    else if(a<=30 && a<=40) callback(null,list[2]);
//    else if(a<=40 && a<=50) callback(null,list[3]);
//    else if(a<=50 && a<=60) callback(null,list[4]);
//    else {
//        setInterval(function(){
//            callback(null,list[5]);

//        },1000)
//    }
// }
// console.log("passed here 0")
// maslahatBering(105,(err,data)=>{
//     if(err)console.log("Error" ,err);
//     else{
//     console.log('javob:',data)
// }

// });
// console.log("passed here 1")


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 20
//     "to'gri boshliq tanlang va ko'proq xato qiling",//20-30
//     "uzingizga ishlashni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //50-60
//     "yoshlarga investitsya qiling", //50-60
//     "endi dam oling "//60
// ];

// async function maslahatBering(a,callback){
//    if (typeof a !== "number") throw new Error("please input number ",null);
//    else if(a<=20 ) return list[0];
//    else if(a<=20 && a<=30)  return list[1];
//    else if(a<=30 && a<=40)  return list[2];
//    else if(a<=40 && a<=50)  return list[3];
//    else if(a<=50 && a<=60)  return list[4];
//    else {
//        return new Promise((resolve,reject)=>{
//             //   setTimeout(function(){
//             //      resolve(list[5]);
       
//             //   },5000)
            

            
//                 setInterval(function(){
//                   resolve(list[5]);
       
//                   },1000)
            
//        })
 
//    }
// }
// console.log("passed here 0")
// maslahatBering(105)
// .then((data)=>{
//     console.log('javob',data)
// }).catch((err)=>{
//     console.log("ERROR:", err)
// });
// console.log("passed here 1")

// async /await

// async function run(){
//     let answer =await maslahatBering(65);
//     console.log(answer);

// }

// run()
const moment = require("moment");


class Shop {
  constructor(non, lagmon, cola) {
    this.bread = non;
    this.pasta = lagmon;
    this.drink = cola;
  }

  qoldiq() {
    console.log(`${moment().format('HH:mm')}da sizda ${this.bread} ta non, ${this.pasta} ta lag'mon va ${this.drink} ta cola mavjud!`);
  }

  sotish(mahsulot, miqdor) {
    if (mahsulot === 'non') {
      this.bread -= miqdor;
    } else if (mahsulot === 'lagmon') {
      this.pasta -= miqdor;
    } else if (mahsulot === 'cola') {
      this.drink -= miqdor;
    }
    console.log(`${moment().format('HH:mm')}da ${miqdor} ta ${mahsulot} sotildi!`);
  }

  qabul(mahsulot, miqdor) {
    if (mahsulot === 'non') {
      this.bread += miqdor;
    } else if (mahsulot === 'lagmon') {
      this.pasta += miqdor;
    } else if (mahsulot === 'cola') {
      this.drink += miqdor;
    }
    console.log(`${moment().format('HH:mm')}da ${miqdor} ta ${mahsulot} qabul qilindi!`);
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq(); // Output: 20:40da sizda 4 ta non, 5 ta lag'mon va 2 ta cola mavjud!
shop.sotish('non', 3); // Output: 20:50da 3 ta non sotildi!
shop.qabul('cola', 4); // Output: 20:50da 4 ta cola qabul qilindi!
shop.qoldiq(); // Output: 20:50da sizda 1 ta non, 5 ta lag'mon va 6 ta cola mavjud!

const shop1 = new Shop(7, 9, 5);
shop1.qoldiq();
shop1.qabul('lagmon', 4);
shop1.sotish('cola', 3);