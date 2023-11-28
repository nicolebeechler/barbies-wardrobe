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

let data = ["Change Careers", "Influencer", "Lawyer", "Doctor", "Software Engineer"]
let list = document.getElementById('dropdown');
for (i = 0; i < data.length; ++i) {
    let li = document.createElement('option');
    li.innerText = data[i];
    list.appendChild(li);
}

// listBarbie.addEventListener('change', function(event) {

//     const selectedCareerBarbie = event.target.value;

//     const selectedCareerObjectBarbie = careers.find(career => career.name === selectedCareerBarbie);

//     if (selectedCareerObjectBarbie) {
//         barbie.career = selectedCareerObjectBarbie;
//         barbie.render();
//     }
// }); // Ken's function works

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
        bk.render();
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
    bk.render();
})

const rbButton = document.getElementById('red-bottoms')

rbButton.addEventListener('click', () => {
    if (barbie.wallet >= redBottoms.price) {
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render();
        bk.render();
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
        bk.render();
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
        bk.render();
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
        bk.render();
    } else {
        alert('Stop trippin you know you aint got it like that')
    }
})

// Goal : Use Sell Assets to sell both cars and rental properties. 

const sellAssetsBtn = document.getElementById('sell-assets')

sellAssetsBtn.addEventListener('click', () => {
    if (barbie.rental.length > 0){
        const randomIndex = randomization(barbie.rental.length)
        const itemToSell = barbie.rental[randomIndex]
        barbie.rental.splice(randomIndex, 1)
        const sellingPrice = (Math.floor(Math.random()*((200-70)+1)+70))*0.01
        barbie.wallet += Math.floor(sellingPrice * itemToSell.price)
        barbie.render();
        bk.render();
    } else {
        alert('You have nothing to sell!')
    }
})

const transferFundsBtn = document.getElementById('bk-barbie')

// prompt user for amount

transferFundsBtn.addEventListener('click', () => {
    if (barbie.wallet > 0){
    let barbieTransferAmount = parseInt(prompt('Enter the amount '))
        barbie.career.income -= barbieTransferAmount
        ken.wallet += barbieTransferAmount
        barbie.render();
        ken.render();
        bk.render();
    }
}
)

// // // // // // // // // // // // // // // // // // // 

// Ken

const ken = {
    name: 'Ken',
    wardrobe: [],
    wallet: 0,
    rental: [],
    garage: [], 
}

class CareerKen {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptionsKen = [
    {
        name: 'Dentist',
        description: ''
    },
    {
        name: 'Web Developer',
        description: ''
    },
    {
        name: 'Finance Manager',
        description: ''
    },
    {
        name: 'Executive Chef',
        description: ''
    }
]

const careerIncomesKen = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];

const careersKen = [];

// used randomization from global space

for (let i = 10 ; i > 0; i--){
 const jobKen = careerDescriptionsKen[randomization(careerDescriptionsKen.length)]
 const incomeKen = careerIncomesKen[randomization(careerIncomesKen.length)];
 careersKen.push(new CareerKen(jobKen.name, jobKen.description, incomeKen, `${jobKen.name}-${incomeKen}` ))
}

ken.career = careersKen[randomization(careersKen.length)]

let dataKen = ["Change Careers", "Dentist", "Web Developer", "Finance Manager", "Executive Chef"]
let listKen = document.getElementById('dropdown-ken');
for (i = 0; i < dataKen.length; ++i) {
    let li = document.createElement('option');
    li.innerText = dataKen[i];
    listKen.appendChild(li);
}

listKen.addEventListener('change', function(event) {

    const selectedCareer = event.target.value;

    const selectedCareerObject = careersKen.find(career => career.name === selectedCareer);

    if (selectedCareerObject) {
        ken.career = selectedCareerObject;
        ken.render();
    }
});

const raybans = new Clothing('Sunglasses', 'Rayban', 'gold', 'headwear', 'OS', 270 )
const linenSuit = new Clothing('Linen Suit', 'Todd Snyder', 'beige', 'clothing', '36 x 32', 899)

ken.el = document.getElementById('ken');

ken.render = () => {
    ken.el.innerHTML = `
    <h1>${ken.name} Status</h1>
    <h3>${ken.name} works as a ${ken.career.name} </h3>
    <h3> Each week ${ken.name} takes home $${ken.career.income}</h3>
    <h3> Currently ${ken.name} has $${ken.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        ken.wardrobe.map((item => {
            return `<li>
            ${ken.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth $${item.price} in size 
            ${item.size} 
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Rental Property Contains: </h2>
    <ul>${
        ken.rental.map((item => {
            return `<li>
            ${ken.name} bought a ${item.name} 
            in ${item.location} that costs $${item.price} 
            and adds $${item.income} to his recurring income.
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Garage Contains: </h2> 
    <ul>${
        ken.garage.map((item => {
            return `<li>
            ${ken.name} bought a ${item.color} ${item.name} 
            that is worth $${item.price} and deducts $${item.income} from his recurring income.
            </li>`
        })).join('')
    }</ul>
    </div>
`;
}

ken.render()

// // // // // // // // // // // // // // // // // // // // // // // 

const raybanBtn = document.getElementById('raybans');

raybanBtn.addEventListener('click', ()=>{
    if(ken.wallet >= raybans.price){
        ken.wardrobe.push(raybans);
        ken.wallet -= raybans.price;
        ken.render();
        bk.render();
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const linenBtn = document.getElementById('linen-suit')

linenBtn.addEventListener('click', () => {
    if (ken.wallet >= linenSuit.price) {
        ken.wardrobe.push(linenSuit);
        ken.wallet -= linenSuit.price;
        ken.render();
        bk.render();
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const workButtonKen = document.getElementById('work-ken');

workButtonKen.addEventListener('click', ()=>{
    ken.wallet += ken.career.income; 
    ken.render();
    bk.render();
})

const condoBtnKen = document.getElementById('condo-ken')

condoBtnKen.addEventListener('click', () => {
    if (ken.wallet >= condo.price) {
        ken.rental.push(condo);
        ken.wallet -= condo.price;
        ken.wallet += condo.income;
        ken.render();
        bk.render();
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const carBtnKen = document.getElementById('car-ken')

carBtnKen.addEventListener('click', () => {
    if(ken.wallet >= tesla.price) {
        ken.garage.push(tesla);
        ken.wallet -= tesla.price;
        ken.career.income += tesla.income
        ken.render()
        bk.render();
    } else {
        alert('Stop trippin you know you aint got it like that')
    }
})

// Goal: Use drop down in HTML to select between assets pushed to div. 

const sellBtnKen = document.getElementById('sell-ken')

sellBtnKen.addEventListener('click', () => {
    if (ken.wardrobe.length > 0){
        const randomIndex = randomization(ken.wardrobe.length)
        const itemToSell = ken.wardrobe[randomIndex]
        ken.wardrobe.splice(randomIndex, 1)
        const sellingPrice = (Math.floor(Math.random()*((200-70)+1)+70))*0.01
        ken.wallet += Math.floor(sellingPrice * itemToSell.price)
        ken.render();
        bk.render();
    } else {
        alert('You have nothing to sell!')
    }
})

const sellAssetsBtnKen = document.getElementById('sell-assets-ken')

sellAssetsBtnKen.addEventListener('click', () => {
    if (ken.rental.length > 0){
        const randomIndex = randomization(ken.rental.length)
        const itemToSell = ken.rental[randomIndex]
        ken.rental.splice(randomIndex, 1)
        const sellingPrice = (Math.floor(Math.random()*((200-70)+1)+70))*0.01
        ken.wallet += Math.floor(sellingPrice * itemToSell.price)
        ken.render();
        bk.render();
    } else {
        alert('You have nothing to sell!')
    }
})

const transferFundsBtnKen = document.getElementById('bk-ken')

// prompt user for amount

transferFundsBtnKen.addEventListener('click', () => {
    if (ken.wallet > 0){
    let kenTransferAmount = parseInt(prompt('Enter the amount '))
        ken.career.income -= kenTransferAmount
        barbie.wallet += kenTransferAmount
        ken.render();
        barbie.render();
        bk.render();
    }
}
)

// // // // // // // 

// Barbie & Ken

const bk = {
    name: 'Barbie & Ken',
    wardrobe: [],
    wallet: 0,
    rental: [],
    garage: [], 
}

bk.el = document.getElementById('bk');

bk.render = () => {
    bk.el.innerHTML = `
    <h1>${barbie.name} & ${ken.name} Status</h1>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <h3> Currently ${ken.name} has $${ken.wallet} in their bank account</h3>
    <h3> They have $${bk.wallet} combined</h3>

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
    <ul>${
        ken.wardrobe.map((item => {
            return `<li>
            ${ken.name} has a ${item.color} 
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
    <ul>${
        ken.rental.map((item => {
            return `<li>
            ${ken.name} bought a ${item.name} 
            in ${item.location} that costs $${item.price} 
            and adds $${item.income} to his recurring income.
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
    <ul>${
        ken.garage.map((item => {
            return `<li>
            ${ken.name} bought a ${item.color} ${item.name} 
            that is worth $${item.price} and deducts $${item.income} from his recurring income.
            </li>`
        })).join('')
    }</ul>
    </div>
`;
}

bk.render()

bk.wallet = barbie.career.income + ken.career.income;
bk.render(); // output: adds their initial incomes before "Get Paid" Button is clicked

const jointGarageSale = () => {
    const itemsForSale = [...barbie.wardrobe, ...ken.wardrobe]; 
    const salePrices = itemsForSale.map(item => Math.floor(Math.random() * (200 - 70 + 1) + 70) * 0.01); 
    const totalItems = itemsForSale.length;

    for (let i = 0; i < totalItems; i++) {
        const item = itemsForSale[i];
        const sellingPrice = salePrices[i];

        if (barbie.wardrobe.includes(item)) {
            barbie.wardrobe.splice(barbie.wardrobe.indexOf(item), 1);
        } else if (ken.wardrobe.includes(item)) {
            ken.wardrobe.splice(ken.wardrobe.indexOf(item), 1);
        }
        bk.wallet += Math.floor(sellingPrice * item.price);
    }

    barbie.render();
    ken.render();
    bk.render();
};

const sellJointBtn = document.getElementById('sell-bk');

sellJointBtn.addEventListener('click', () => {
    if (barbie.wardrobe.length > 0 || ken.wardrobe.length > 0) {
        jointGarageSale(); 
    } else {
        alert("There's nothing to sell!");
    }
});

// 1.2 (Ken's code block works, but Barbie's does not.) Update Barbie's careerproperty when a new option is selected and reflect the change in income.
// 4.3 Add functionality to transfer items between Barbie and Ken.
// 5.1 Allow Barbie to change outfits based on her career choice.
// 5.2 (Sells all items, not one at a time.)
// 5.3 Enable interactive shopping experiences where users can drag and drop items to and from the wardrobe.
