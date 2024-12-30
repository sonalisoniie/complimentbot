const compliments = [
    "You're a work of art!",
    "Your heart is pure gold!",
    "You're a bundle of joy!",
    "Your smile is priceless!",
    "You're a precious treasure!"
];

function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById('compliment').innerText = compliments[randomIndex];
}
