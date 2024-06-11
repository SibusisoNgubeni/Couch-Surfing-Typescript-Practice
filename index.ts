import { showReviewTotal, populateUser } from './utils';
import { Permissions, LoyaltyUser } from './enums';
import { Price, Country } from './types';

const propertyContainer = document.querySelector('.properties') as HTMLDivElement;
const footer = document.querySelector('.footer') as HTMLDivElement;

let isOpen: boolean;

// Reviews
const reviews: ({
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;   
} | {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
})[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021'
    }
];

// User
const you: {
    firstName: string;
    lastName: string;
    permissions: Permissions;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};

// Array of Properties
const properties: {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
    {
        image: 'images/cashan1.jpg',
        title: '2 story',
        price: 45,
        location: {
            firstLine: 'house 37',
            city: 'Rustenburg',
            code: 45632,
            country: Country.South_Africa
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/cashan2.jpg',
        title: 'cashan villa',
        price: 25,
        location: {
            firstLine: 'house 23',
            city: 'ibiza',
            code: 343903,
            country: Country.Spain
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/cashan3.jpg',
        title: 'cashan Flat',
        price: 30,
        location: {
            firstLine: 'flat 15',
            city: 'cairo',
            code: 35433,
            country: Country.Egypt
        },
        contact: [+1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
];

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);

let authorityStatus: boolean | Permissions;
let isLoggedIn: boolean = false;

function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
    showDetails(you.permissions, card, properties[i].price);
}

let currentLocation: [string, string, number] = ['Rustenburg', '12:10', 17];
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;
