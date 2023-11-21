console.log('App is connected');

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    wallet: 0,
    rental: [],
    garage: [], 
}

class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high-end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talks about stuff on social media and people say wow and i get paid'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];
const careers = [];


const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}


for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// drop down

// const copiedArray = Array.apply(null, careerDescriptions); // [ object, Object, ... ]

// let data = ["Change Careers", copiedArray]; // [ object, Object, ... ] @Line 75

// Goal: push new career name and income from availble populated list (upon page refresh)

let data = ["Change Careers", "Influencer", "Lawyer", "Doctor", "Software Engineer"]
let list = document.getElementById('dropdown');
for (i = 0; i < data.length; ++i) {
    let li = document.createElement('option');
    li.innerText = data[i];
    list.appendChild(li);
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const redBottoms = new Clothing('Red Bottoms', 'Louis Vuitton', 'black', 'shoes', '6', 3000)

class RentalProperty {
    constructor(name, type, location, price, income) {
        this.name = name;
        this.type = type;
        this.location = location; 
        this.price = price;
        this.income = income;
    }
}

const condo = new RentalProperty('Condo', 'Rental', 'Miami', 50000, 500)

class Car {
    constructor(name, color, price, income) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.income = income;
    }
}

const tesla = new Car('Tesla', 'red', 50000, -150)

// Game Screen

barbie.el = document.getElementById('barbie');

barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth $${item.price} in size 
            ${item.size} 
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Rental Property Contains: </h2>
    <ul>${
        barbie.rental.map((item => {
            return `<li>
            ${barbie.name} bought a ${item.name} 
            in ${item.location} that costs $${item.price} 
            and adds $${item.income} to her recurring income.
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Garage Contains: </h2> 
    <ul>${
        barbie.garage.map((item => {
            return `<li>
            ${barbie.name} bought a ${item.color} ${item.name} 
            that is worth $${item.price} and deducts $${item.income} from her recurring income.
            </li>`
        })).join('')
    }</ul>
    </div>
`;
}

barbie.render()



const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    barbie.render();
})

const rbButton = document.getElementById('red-bottoms')

rbButton.addEventListener('click', () => {
    if (barbie.wallet >= redBottoms.price) {
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
        // the object control the information that is visible to us on the screen
        // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const condoBtn = document.getElementById('condo')

condoBtn.addEventListener('click', () => {
    if (barbie.wallet >= condo.price) {
        barbie.rental.push(condo);
        barbie.wallet -= condo.price;
        barbie.wallet += condo.income;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
        // the object control the information that is visible to us on the screen
        // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const sellBtn = document.getElementById('sell')

sellBtn.addEventListener('click', () => {
    if (barbie.wardrobe.length > 0){
        const randomIndex = randomization(barbie.wardrobe.length)
        const itemToSell = barbie.wardrobe[randomIndex]
        barbie.wardrobe.splice(randomIndex, 1)
        const sellingPrice = (Math.floor(Math.random()*((200-70)+1)+70))*0.01
        barbie.wallet += Math.floor(sellingPrice * itemToSell.price)
        barbie.render();
    } else {
        alert('You have nothing to sell!')
    }
})

const carBtn = document.getElementById('car')

carBtn.addEventListener('click', () => {
    if(barbie.wallet >= tesla.price) {
        barbie.garage.push(tesla);
        barbie.wallet -= tesla.price;
        barbie.career.income += tesla.income
        barbie.render()
    } else {
        alert('Stop trippin you know you aint got it like that')
    }
})

// drop down

// const careerBtn = document.getElementById('arrayDropdown');
// let options = barbie.career.name;
// const options = ['influencer', 'lawyer'];
// let options = careerDescriptions[0];

// careerBtn.addEventListener('click', () => {
//     for(let i = 0; i < options.length; i++) {
//         let opt = options[i];
//         let el = document.createElement('option');
//         el.textContent = opt;
//         el.value = opt;
//         barbie.career.name.appendChild(el);
//     }
// }
// )

// for (let key in careerDescriptions.name) {
//     let option = document.createElement("option");
//     option.setAttribute('value', data[key]);
  
//     let optionText = document.createTextNode(key);
//     option.appendChild(optionText);
  
//     arrayDropdown.appendChild(option);
//   }

// // // // // // // // // // // // // // // // // // // 

// Ken

const ken = {
    name: 'Ken',
    wardrobe: [],
    wallet: 0,
    rental: [],
    garage: [], 
}

ken.el = document.getElementById('ken');

ken.render = () => {
    ken.el.innerHTML = `
    <h1>${ken.name} Status</h1>
    <h3>${ken.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${ken.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${ken.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth $${item.price} in size 
            ${item.size} 
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Rental Property Contains: </h2>
    <ul>${
        barbie.rental.map((item => {
            return `<li>
            ${barbie.name} bought a ${item.name} 
            in ${item.location} that costs $${item.price} 
            and adds $${item.income} to her recurring income.
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Garage Contains: </h2> 
    <ul>${
        barbie.garage.map((item => {
            return `<li>
            ${barbie.name} bought a ${item.color} ${item.name} 
            that is worth $${item.price} and deducts $${item.income} from her recurring income.
            </li>`
        })).join('')
    }</ul>
    </div>
`;
}

ken.render()

