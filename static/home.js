// First Api
const cars = [
    {
        imageUrl: './h1.jpeg',
        model: 'Honda',
        type: 'Car',
        price: '3000$',
        id:1,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './h2.jpg',
        model: 'Honda',
        type: 'Truck',
        price: '5000$',
        id:2,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './s2.jpg',
        model: 'Suzuki',
        type: 'Car',
        price: '5000$',
        id:3,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './s1.jpg',
        model: 'Suzuki',
        type: 'Jeep',
        price: '3000$',
        id:4,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './h3.jpg',
        model: 'Honda',
        type: 'Car2',
        price: '3000$',
        id:5,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './c1.jpg',
        model: 'Corolla',
        type: 'Car',
        price: '4000$',
        id:6,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './h1.jpeg',
        model: 'Honda',
        type: 'Car3',
        price: '3000$',
        id:7,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './t2.jpg',
        model: 'Corolla',
        type: 'Jeep',
        price: '5000$',
        id:8,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './a1.jpg',
        model: 'Audi',
        type: 'Car',
        price: '7000$',
        id:9,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './t1.jpg',
        model: 'Audi',
        type: 'Jeep',
        price: '3000$',
        id:10,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './hb1.jpg',
        model: 'Honda',
        type: 'Bike',
        price: '3000$',
        id:11,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './hb2.jpg',
        model: 'Honda',
        type: 'Bike',
        price: '3000$',
        id:12,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './kawa1.png',
        model: 'Kawasaki',
        type: 'Bike',
        price: '3000$',
        id:13,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './kawa2.png',
        model: 'Kawasaki',
        type: 'Bike',
        price: '4000$',
        id:14,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './kawa3.jpg',
        model: 'Kawasaki',
        type: 'Bike',
        price: '3500$',
        id:15,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './by1.jpg',
        model: 'Phonix',
        type: 'Bicycle',
        price: '1500$',
        id:16,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './by2.png',
        model: 'Phonix',
        type: 'Bicycle',
        price: '2000$',
        id:17,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    },
    {
        imageUrl: './by3.jpg',
        model: 'Phonix',
        type: 'Bicycle',
        price: '3000$',
        id:18,
        discription: `"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."`
    }
]
// module.exports =cars;
function allCars() {
    let everyCar = cars.map((car) => {
        return `
        <div id="main">
        <div id="imgbox">
        <img src="${car.imageUrl}">
        </div>
        <div id="detailbox">
        <h2>${car.model}</h2>
        <h2>${car.price}</h2>
        <h2>${car.type}</h2>
        <p>${car.discription}</p>
        </div>
     </div>
        `
    })
    document.querySelector('#card1').innerHTML = everyCar
}
allCars();

function hondaCars() {
    let hondaCar = cars.filter((car)=>car.model=== 'Honda');
    let filterHonda = "";
    hondaCar.map((car)=>{
        const cars = `
        <div id="main">
        <div id="imgbox">
        <img src="${car.imageUrl}">
        </div>
        <div id="detailbox">
        <h2>${car.model}</h2>
        <h2>${car.price}</h2>
        <h2>${car.type}</h2>
        <p>${car.discription}</p>
        </div>
     </div>
        `
        filterHonda += cars
    })
    document.querySelector('#card1').innerHTML = filterHonda;
}

function corollaCars() {
    let corollaCar = cars.filter((car)=>car.model=== 'Corolla');
    let filterCorolla = "";
    corollaCar.map((car)=>{
        const cars = `
        <div id="main">
        <div id="imgbox">
        <img src="${car.imageUrl}">
        </div>
        <div id="detailbox">
        <h2>${car.model}</h2>
        <h2>${car.price}</h2>
        <h2>${car.type}</h2>
        <p>${car.discription}</p>
        </div>
     </div>
        `
        filterCorolla += cars
    })
    document.querySelector('#card1').innerHTML = filterCorolla;
}
function suzukiCars() {
    let suzukiCar = cars.filter((car)=>car.model=== 'Suzuki');
    let filterSuzuki = "";
    suzukiCar.map((car)=>{
        const cars = `
        <div id="main">
        <div id="imgbox">
        <img src="${car.imageUrl}">
        </div>
        <div id="detailbox">
        <h2>${car.model}</h2>
        <h2>${car.price}</h2>
        <h2>${car.type}</h2>
        <p>${car.discription}</p>
        </div>
     </div>
        `
        filterSuzuki += cars
    })
    document.querySelector('#card1').innerHTML = filterSuzuki;
}
function audiCars() {
    let audiCar = cars.filter((car)=>car.model=== 'Audi');
    let filterAudi = "";
    audiCar.map((car)=>{
        const cars = `
            <div id="main">
                <div id="imgbox">
                    <img src="${car.imageUrl}">
                </div>
                <div id="detailbox">
                    <h2>${car.model}</h2>
                    <h2>${car.price}</h2>
                    <h2>${car.type}</h2>
                    <p>${car.discription}</p>
                </div>
            </div>
        `
        filterAudi += cars
    })
    document.querySelector('#card1').innerHTML = filterAudi;
}
function Bike() {
    let bikes = cars.filter((product)=>product.type=== 'Bike');
    let filterbikes = "";
    bikes.map((car)=>{
        const cars = `
            <div id="main">
                <div id="imgbox">
                    <img src="${car.imageUrl}">
                </div>
                <div id="detailbox">
                    <h2>${car.model}</h2>
                    <h2>${car.price}</h2>
                    <h2>${car.type}</h2>
                    <p>${car.discription}</p>
                </div>
            </div>
        `
        filterbikes += cars
    })
    document.querySelector('#card1').innerHTML = filterbikes;
}
function Bicycle() {
    let Bicycles= cars.filter((product)=>product.type=== 'Bicycle');
    let filterbicycle = "";
    Bicycles.map((car)=>{
        const cars = `
            <div id="main">
                <div id="imgbox">
                    <img src="${car.imageUrl}">
                </div>
                <div id="detailbox">
                    <h2>${car.model}</h2>
                    <h2>${car.price}</h2>
                    <h2>${car.type}</h2>
                    <p>${car.discription}</p>
                </div>
            </div>
        `
        filterbicycle += cars
    })
    document.querySelector('#card1').innerHTML = filterbicycle;
}
 function searchBox() 
 {
     const cards=document.getElementById('card1');
     let inputBox=document.getElementById('searchCar').value.toLowerCase();
     let apiData=cars.filter((product)=>{
        return product.model.toLowerCase().includes(inputBox);
     })
     let dataSet="";
    //  allCars(apiData);
    // apiData.allCars();
     apiData.map((car)=>
     {
        let Model = `
        <div id="main">
        <div id="imgbox">
        <img src="${car.imageUrl}">
        </div>
        <div id="detailbox">
        <h2>${car.model}</h2>
        <h2>${car.price}</h2>
        <h2>${car.type}</h2>
        <p>${car.discription}</p>
        </div>
        </div>
        `
        dataSet+=Model
     })
     cards.innerHTML=dataSet
}
