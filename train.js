//Callback functionlar
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling", // 20
    "to'gri boshliq tanlang va ko'proq xato qiling",//20-30
    "uzingizga ishlashni boshlang", //30-40
    "siz kuchli bo'lgan narsalarni qiling", //50-60
    "yoshlarga investitsya qiling", //50-60
    "endi dam oling "//60
];

function maslahatBering(a,callback){
   if (typeof a !== "number") callback("please input number ",null);
   else if(a<=20 ) callback(null,list[0]);
   else if(a<=20 && a<=30) callback(null,list[1]);
   else if(a<=30 && a<=40) callback(null,list[2]);
   else if(a<=40 && a<=50) callback(null,list[3]);
   else if(a<=50 && a<=60) callback(null,list[4]);
   else {
       setInterval(function(){
           callback(null,list[5]);

       },1000)
   }
}
console.log("passed here 0")
maslahatBering(105,(err,data)=>{
    if(err)console.log("Error" ,err);
    else{
    console.log('javob:',data)
}

});
console.log("passed here 1")


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

//async /await

// async function run(){
//     let answer =await maslahatBering(65);
//     console.log(answer);

// }

// run()