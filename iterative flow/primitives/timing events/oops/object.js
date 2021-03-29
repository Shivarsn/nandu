//let bioData ={
    //myName:" rohit",
   // gender:"Male",
    //age:34,
   // teammates:["Dhoni","Raina","Ambati rayudu","deepak chahar"],
   // getData(){
        //console.log(`my age is ${bioData.age}`);
   // }
//}

//nbioData.getData();

//initilizing the object inside the object
let bioData={
 myName: {
  realName:"sky",
  channelName:"thapatechnical"
  } ,
  myage:34,
  teammates:["Dhoni","Raina","Ambati rayudu","deepak chahar"],
 getData(){
    console.log(`my age is ${bioData.age}`);
   }
}
console.log(bioData.myName.channelName);


