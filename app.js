// SEARCH FILTER
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".category-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});


// SHOW HOME
function showHome() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("categoriesPage").style.display = "none";
  document.getElementById("bookingsPage").style.display = "none";
  document.getElementById("profilePage").style.display = "none";
}



function showCategories(){
  document.getElementById("homePage").style.display = "none";
  document.getElementById("categoriesPage").style.display = "block";
  document.getElementById("bookingsPage").style.display = "none";
  document.getElementById("profilePage").style.display = "none";
  loadCategories();
}

function showBookings() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("categoriesPage").style.display = "none";
  document.getElementById("bookingsPage").style.display = "block";
  document.getElementById("profilePage").style.display = "none";

  loadBookings();
}


// GLOBAL (IMPORTANT FIX)
let selectedService = "";


// BOOK SERVICE
function bookService() {
  const bookingDate = document.getElementById("bookingDate").value;
  const bookingTime = document.getElementById("bookingTime").value;

  if (!bookingDate || !bookingTime) {
    alert("Please select date and time");
    return;
  }

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  bookings.push({
    service: selectedService,
    date: bookingDate,
    time: bookingTime
  });

  localStorage.setItem("bookings", JSON.stringify(bookings));

  loadBookings();

  showNotification(selectedService + " Booked Successfully ✅");

  closePopup();
}

function clearBookings(){
  localStorage.removeItem("bookings");
  loadBookings();
}




function showProfile(){
  document.getElementById("homePage").style.display = "none";
  document.getElementById("categoriesPage").style.display = "none";
  document.getElementById("bookingsPage").style.display = "none";
  document.getElementById("profilePage").style.display = "block";
}

// LOGIN
function loginUser() {
  const username = document.getElementById("username").value;

  document.getElementById("welcomeText").innerText =
    "Welcome " + username + " 👋";
}


// LOGOUT
function logoutUser() {
  document.getElementById("welcomeText").innerText = "";
  document.getElementById("username").value = "";
}


// FAVORITE
function addFavorite(service) {
  const favoriteList = document.getElementById("favoriteList");

  favoriteList.innerHTML += `
    <div class="favorite-item">
      ❤️ ${service}
    </div>
  `;
}


// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}


// NOTIFICATION
function showNotification(message) {
  const notification = document.getElementById("notification");

  notification.innerText = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}
 

// CATEGORY SEARCH
const categorySearch = document.getElementById("categorySearch");

categorySearch.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".cat-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});


// ADDRESS
function addAddress() {
  const address = prompt("Enter Your Address");

  if (address) {
    document.getElementById("userAddress").innerText = address;
  }
}


// PROFILE PHOTO
function uploadProfilePhoto() {
  const file = document.getElementById("profileUpload").files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("profilePic").src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}


// WHATSAPP
function openWhatsApp() {
  window.open("https://wa.me/919876543210", "_blank");
}


// LOAD BOOKINGS
function loadBookings() {
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const bookingList = document.getElementById("bookingList");

  bookingList.innerHTML = "";

  bookings.forEach(item => {
    bookingList.innerHTML += `
      <div class="service-card booking-card">
        <h3>${item.service}</h3>
        <p>📅 ${item.date}</p>
        <p>⏰ ${item.time}</p>
      </div>
    `;
  });
}


// PAGE LOAD
window.onload = function () {
  loadBookings();
};

function selectService(name){
  selectedService = name;
  console.log("Selected:", selectedService);
}



// OPEN POPUP + SET SERVICE
function openService(name) {
  selectedService = name;

  document.getElementById("serviceTitle").innerText = name;
  document.getElementById("servicePopup").style.display = "flex";
}


// CLOSE POPUP
function closePopup() {
  document.getElementById("servicePopup").style.display = "none";
} 

function clearBookings(){
  localStorage.removeItem("bookings");
  loadBookings();
  alert("Bookings cleared");
}

function clearFavorites(){
  document.getElementById("favoriteList").innerHTML = "";
  alert("Favorites cleared");
}

function openService(service){
  selectedService = service;

  document.getElementById("serviceTitle").innerText = service;

  document.getElementById("servicePopup").style.display = "flex";
}