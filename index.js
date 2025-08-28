// common use function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//   heart section create

const whiteHearts = document.getElementsByClassName("whiteHeart");
const redHearts = document.getElementById("redHeart");

let count = 0;

for (let whiteHeartse of whiteHearts) {
  whiteHeartse.addEventListener("click", function () {
    count++;
    document.getElementById("redHeart").innerText = count;
  });
}

// copy section start from here

// call  button feature -------------
const cardButtons = document.getElementsByClassName("callBtn");
let navCoin = getElement("callCoin").innerText;

let count3 = 20;

for (let cardButton of cardButtons) {
  cardButton.addEventListener("click", function () {
    if (navCoin < 20) {
      alert("❌ You don't have enough coins.");
      return;
    }

    // travarsee for finding card title and number

    const title = cardButton.parentNode.parentNode.children[1].innerText;
    const number = cardButton.parentNode.parentNode.children[3].innerText;
    // time printing feature section
    const Time = new Date();
    const time = Time.toLocaleTimeString();
    // aleart section start
    alert("📞Calling" + title + " " + number + "...");
    let currentCoin = (navCoin -= count3);
    getElement("callCoin").innerText = currentCoin;
    // class history section start
    const callHistory = getElement("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `<div
            class="flex items-center justify-between bg-gray-100 p-3 rounded-[8px] mb-2"
          >
            <div>
              <h1 class="text-[15px] font-bold">${title}</h1>
              <p class="text-[#5c5c5c]">${number}</p>
            </div>
            <div><p></p>${time}</div>
          </div>`;
    callHistory.append(newHistory);
  });
}
// history clear button feature
const clearbtn = document.getElementById("clearButton");
clearbtn.addEventListener("click", function () {
  getElement("history-container").innerHTML = "";
});

// copy button feature
const navcopy = document.getElementById("navCopy").innerText;
const copybtns = document.getElementsByClassName("cardCopyBtn");

let count4 = 0;
for (let copybtn of copybtns) {
  copybtn.addEventListener("click", function () {
    alert("Number is Copied succesfully");
    count4++;
    document.getElementById("navCopy").innerText = count4;
    const hotline = copybtn.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(hotline);
})};
