//vars
const reqAmount = document.getElementById("amount-required");
const needed = document.getElementById("needed");
const progress = document.querySelector(".progress");
const donors = document.querySelector(".donors");
const donation = document.getElementById("donation");
const donateBtn = document.querySelector(".donate-btn");
const arrow = document.querySelector(".arrow-down");
let rest = 1000;
let donatedPercentage = 0;
//functions
const addMoney = function (donatedSum) {
  const updatedAmount = document.getElementById("amount-required");
  if (updatedAmount) {
    if (donatedSum <= 0) alert("Please donate a proper amount!");
    let totalDonors = Number(donors.innerText);
    donors.innerText = `${totalDonors + 1}`;
    if (donatedSum >= rest) {
      needed.innerText = "We reached the desired sum! Thank you!";
      progress.style.width = "100%";
      arrow.style.left = "calc(100% - 12px)";
    }
    reqAmount.innerText = `$${rest - donatedSum}`;
    donatedPercentage += (donatedSum / 1000) * 100;
    donatedPercentage > 100 ? (donatedPercentage = 100) : donatedPercentage;
    progress.style.width = `${donatedPercentage}%`;
    let arrowWidth = Math.floor(donatedPercentage / 2);
    arrow.style.left = `calc(${50 + arrowWidth}% - 12px)`;
    rest -= donatedSum;
  } else alert("We ended the campaign! Thank you for your generosity!");
};
//events
donateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addMoney(Number(donation.value));
  donation.value = "";
});
