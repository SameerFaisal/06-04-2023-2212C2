let ultimate={
    monthly:9.99,
    diskspace:"2000GB",
    dataTransfer:"20000Gb/MO",
    sitePages:[500,1000,1500]
}

let professional={
    monthly:5.99,
    diskspace:"500GB",
    dataTransfer:"5000Gb/MO",
    sitePages:[50,40,30]
}

let basic={
monthly:3.99,
diskspace:"100GB",
dataTransfer:"1000Gb/MO",
sitePages:[10,20],
calcAnnual:function(){
    let annual=basic.monthly*12
   return annual
}
}
// console.log(basic["monthly"]+basic["sitePages"])
// console.log(basic)
// document.write(basic.sitePages-professional.sitePages+ultimate.sitePages)
// console.log(basic.sitePages[2])
// basic.cost=2000

// function calcAnnual(){
//     let annual=basic.monthly*12
//     console.log(annual)

// }

// calcAnnual()

// basic.calcAnnual()

// let amount=basic.calcAnnual()
// console.log(amount)

// console.log("calcAnnual" in ultimate)


// for(let keys in basic){
//     console.log(keys+": "+basic[keys])
// }

// let math=Math.PI
// // console.log(math.toFixed(3))
// let math=Math.abs(-6)
// console.log(math)
// let math=Math.ceil(6.4)
// console.log(math.toFixed(2))

// let math=Math.floor(6.9)
// console.log(math.toFixed(2))

// let math=Math.round(6.6)
// console.log(math.toFixed(2))

// let math=Math.random()
// console.log(math.toFixed(2))

// let math=Math.floor(Math.random()*1000)
// document.write(math)

// let math=Math.sqrt(1024)
// console.log(math.toFixed(2))

// let math=Math.pow(2,150)
// console.log(math)

// let math=Math.min(2,150,100,200,300)
// console.log(math)

// let math=Math.max(2,150,100,200,300)
// console.log(math)

// let math=Math.sin(90)
// console.log(math)

// let math=Math.sign(-2)
// console.log(math)

// let today=new Date()
// console.log(today.getDate())
// console.log(today.getDay())
// console.log(today.getFullYear())
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getMonth())
// console.log(today.getSeconds())
// document.write(today.getTime())
// document.write(today.getMilliseconds())

// function getName(){
//     let fname=document.getElementById("firstName").value
//     let lname=document.getElementById("lastName").value
// alert("Welcome to my website! "+fname+" "+lname)
// }

// function getName(){
//     let fname=document.querySelector("#firstName").value
//     let lname=document.getElementById("lastName").value
// alert("Welcome to my website! "+fname+" "+lname)
// }

// function getContent(){
//     let head=document.querySelector("#h").innerHTML
//     alert(head)
// }

function change(){
    document.getElementById("ig").src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg"
}

function revert(){
    document.getElementById("ig").src="./what_is_image_Processing.avif"
}