const events = [
  {
    name: "YEET TEENZ GROOVE SCHOOL TOURS",
    image: "images/buss.JPG",
    time: "2025-06-22, 12pm - Till late",
    venue: "Your School",
    price: "UGX 10,000"
  },
  {
    name: "VIBES YEBO",
    image: "images/yebo.JPG",
    time: "2025-08-08",
    venue: "Bubble O'reyes",
    price: "UGX 15000 ordinary"
  },
  {
    name: "TIK TOK",
    image: "images/tik.JPG",
    time: "2025-07-05, 7PM",
    venue: "Kampala Innovation Hub",
    price: "UGX 35000"
  },{
    name: "Piano Tobista",
    image: "images/tob.jpg",
    time: "2025-07-05, 7PM",
    venue: "Kampala Innovation Hub",
    price: "UGX 25000"
  },{
    name: "Gamer's Hub",
    image: "images/GAME.JPG",
    time: "2025-07-05, 7PM",
    venue: "Accica Mall",
    price: "UGX 100000"
  },
  {
    name: "GAME NIGHT",
    image: "images/PLAY.JPG",
    time: "2025-07-05, 7PM",
    venue: "Kingdom Kampala",
    price: "UGX 35000"
  },
  {
    name: "LOVE NIGHT",
    image: "images/love.JPG",
    time: "2025-07-05, 7PM",
    venue: "Arena mall",
    price: "UGX 50000"
  },
  {
    name: "Tresure Hunt",
    image: "images/inte1.JPG",
    time: "2025-07-05, 7PM",
    venue: "Kampala Nile Resort",
    price: "UGX 36000"
  },
  {
    name: "Tresure Hunt2",
    image: "images/inte2.JPG",
    time: "2025-07-05, 7PM",
    venue: "Nambole Stadium",
    price: "UGX 50000"
  },
  {
    name: "Tresure Hunt2",
    image: "images/inte2.JPG",
    time: "2025-07-05, 7PM",
    venue: "Nambole Stadium",
    price: "UGX 50000"
  },
  {
    name: "Paino Fest",
    image: "images/men.JPG",
    time: "2025-08-07, 12pm till late",
    venue: "Kingdom Kampala",
    price: "UGX 40000"

  },
  {
    name: "Meat Greet",
    image: "images/greet.JPG",
    time: "2025-08-25-27, 3PM",
    venue: "Kitende",
    price: "UGX 50000"
  }
];

const container = document.getElementById("events");
const searchBar = document.getElementById("search");

function renderEvents(filtered = events) {
  container.innerHTML = "";
  filtered.forEach(event => {
    container.innerHTML += `
      <div class="card">
        <img src="${event.image}" alt="${event.name}" />
        <div class="card-body">
          <h3>${event.name}</h3>
          <p><strong>Time:</strong> ${event.time}</p>
          <p><strong>Venue:</strong> ${event.venue}</p>
          <p class="price">${event.price}</p>
          <button onclick="openPayment()">Buy Now</button>
        </div>
      </div>
    `;
  });
}

renderEvents();

searchBar.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = events.filter(ev => ev.name.toLowerCase().includes(query));
  renderEvents(filtered);
});

function openPayment() {
  document.getElementById("payment-modal").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("payment-modal").style.display = "none";
});
