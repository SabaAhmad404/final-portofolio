//menu- project
const menuBtn = document.querySelector("#btn");
const closeBtn = document.querySelector(".pop-up-close-btn");
const poUpMenu = document.querySelector(".mobile-menu-list");
poUpMenu.classList.add("disappear");
const menuIcon = document.querySelector(".menu-btn");
const headerSection = document.querySelector("#head-container");
const mainBody = document.querySelector("#header-body");
const mobileMenuList1 = document.querySelector(".for-clik-1");
const mobileMenuList2 = document.querySelector(".for-clik-2");
const mobileMenuList3 = document.querySelector(".for-clik-3");

const openMenu = () => {
  poUpMenu.classList.remove("disappear");
  menuIcon.classList.add("disappear");
  headerSection.classList.add("blur");
  mainBody.classList.add("blur");
};

const closeMenu = () => {
  poUpMenu.classList.add("disappear");
  menuIcon.classList.remove("disappear");
  headerSection.classList.remove("blur");
  mainBody.classList.remove("blur");
};

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
mobileMenuList1.addEventListener("click", closeMenu);
mobileMenuList2.addEventListener("click", closeMenu);
mobileMenuList3.addEventListener("click", closeMenu);

//popup starts from here//

const description = [
  {
    id: 1,
    title: "Todo-List",
    list: ["local-Storage", "Front End Dev", "2022"],
    image: "images/todo.PNG",
    desc: "Minimalist To Do List Project is a website that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. It is inspired by the minimalist website.",
    lang: ["Html", "Css", "Javascript"],
    livelink: "https://sabaahmad404.github.io/Todo-list/dist/",
    sourceLink: "https://github.com/SabaAhmad404/Todo-list",
    category: "card1 works",
  },
  {
    id: 2,
    title: "JavScript Leader-Board",
    list: ["API", "Front End Dev", "2022"],
    image: "./images/leaderboard.PNG",
    desc: " The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved to the external leaderboard-apis.",
    lang: ["Html", "Css", "Javascript"],
    livelink: "https://sabaahmad404.github.io/Leaderboard-Apis/dist",
    sourceLink: "https://github.com/SabaAhmad404/Leaderboard-Apis",
    category: "card2 works",
  },
  {
    id: 3,
    title: "Math Magicians",
    list: ["SPA", "Front End Dev", "2023"],
    image: "/images/calculator.PNG",
    desc: "Math-magician-React Project Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations and Read a random math-related quote.",
    lang: ["Html", "React", "Css", "Javascript"],
    livelink: "https://math-magician-c918.onrender.com",
    sourceLink: "https://github.com/SabaAhmad404/Math-magician-React",
    category: "card3 works",
  },
  {
    id: 4,
    title: "Global-Sumit",
    list: ["Responsiveness", "Front End Dev", "2022"],
    image: "/images/CapSTONE1.PNG",
    desc: "My Capstone project have both Mobile and Desktop versions .I use the HTml and CSS to make the pages responsive and javascript to make the button functionable.",
    lang: ["Html", "Css", "Javascript"],
    livelink: "https://sabaahmad404.github.io/Capstone-1/",
    sourceLink: "https://github.com/SabaAhmad404/Capstone-1",
    category: "card4 works",
  },
  {
    id: 5,
    title: "JavaScript Pokemon-Api",
    list: ["API", "Front End Dev", "2023"],
    image: "/images/javascript-capt.PNG",
    desc: "The pokemon api provides data about mY selected api and I build the webapp around it. The webapp have 3 user interfaces.",
    lang: ["Html", "Css", "Javascript"],
    livelink: "https://sabaahmad404.github.io/javascript-capstone/dist/",
    sourceLink: "https://github.com/SabaAhmad404/javascript-capstone",
    category: "card5 works",
  },
  {
    id: 6,
    title: "Space Travel Hub",
    list: ["API", "Front End Dev", "2023"],
    image: "/images/spaceship.PNG",
    desc: "Space Travelers' Hub Space Travelers' Hub is a website that allows the user to take a fictional tour across the space.",
    lang: ["jsx", "React", "Redux", "Css", "Javascript"],
    livelink: "https://space-travelers-hub-z8qg.onrender.com",
    sourceLink: "https://github.com/Abe1able/Space-Travelers-Hub",
    category: "card6 works",
  },
];
const workSection = document.querySelector(".works-section");
let m = 0;
const popUpCard = (m) => {
  // main container for pop up
  const popUpMainContainer = document.createElement("div");
  popUpMainContainer.classList.add("pop-up-project");
  document.body.prepend(popUpMainContainer);
  // pop up head container
  const headAndClose = document.createElement("div");
  headAndClose.classList.add("header-and-close-btn");
  popUpMainContainer.append(headAndClose);
  const projectHead = document.createElement("h3");
  projectHead.innerText = description[m].title;
  projectHead.classList.add("project-head");
  headAndClose.append(projectHead);
  const closeBtn = document.createElement("img");
  closeBtn.classList.add("dark-close-btn");
  closeBtn.src = "/images/Icon.png";
  headAndClose.append(closeBtn);
  const headInfo = document.createElement("ul");
  headInfo.classList.add("head-info");
  popUpMainContainer.append(headInfo);
  for (let x = 0; x < description[m].list.length; x += 1) {
    const headInfoList = document.createElement("li");
    headInfoList.classList.add("head-info-text");
    headInfoList.innerText = description[m].list[x];
    headInfo.append(headInfoList);
    const dot = document.createElement("img");
    dot.src = "/images/work-section-png/Counter.png";
    dot.classList.add("middle-dot");
    headInfoList.prepend(dot);
  }
  const popUpImg = document.createElement("img");
  popUpImg.classList.add("project-image");
  popUpImg.src = description[m].image;
  popUpMainContainer.append(popUpImg);
  const textToolsContainer = document.createElement("div");
  textToolsContainer.classList.add("txt-tools-container");
  popUpMainContainer.append(textToolsContainer);
  const projectTextSummry = document.createElement("p");
  projectTextSummry.classList.add("project-text-summyr");
  projectTextSummry.innerText = description[m].desc;
  textToolsContainer.append(projectTextSummry);
  const toolsAndBtn = document.createElement("div");
  toolsAndBtn.classList.add("tools-and-btns");
  textToolsContainer.append(toolsAndBtn);
  const tools = document.createElement("ul");
  tools.classList.add("tools");
  toolsAndBtn.append(tools);
  for (let x = 0; x < description[m].lang.length; x += 1) {
    const toolsText = document.createElement("li");
    toolsText.classList.add("tool-text");
    toolsText.innerText = description[m].lang[x];
    tools.append(toolsText);
  }
  const projectSeeBtns = document.createElement("div");
  projectSeeBtns.classList.add("project-see-btns");
  toolsAndBtn.append(projectSeeBtns);
  const seeLive = document.createElement("a");
  seeLive.classList.add("see-live");
  seeLive.classList.add("see-project-btn");
  seeLive.innerText = "See live";
  seeLive.href = description[m].livelink;
  seeLive.target = "_blank";
  const seeLiveImg = document.createElement("img");
  seeLiveImg.classList.add("see-live-image");
  seeLiveImg.src = "/images/btn-1-png.png";
  seeLive.append(seeLiveImg);
  projectSeeBtns.append(seeLive);
  const seeSource = document.createElement("a");
  seeSource.classList.add("see-source");
  seeSource.classList.add("see-project-btn");
  seeSource.innerText = "See source";
  seeSource.href = description[m].sourceLink;
  seeSource.target = "_blank";
  const seeSourceImg = document.createElement("img");
  seeSourceImg.classList.add("see-source-image");
  seeSourceImg.src = "/images/btn-2-png.png";
  seeSource.append(seeSourceImg);
  projectSeeBtns.append(seeSource);

  closeBtn.addEventListener("click", () => {
    const popUpMainContainer = document.querySelector(".pop-up-project");
    document.body.removeChild(popUpMainContainer);
    const removeblur1 = document.querySelector("#head-container");
    const removeblur2 = document.querySelector(".mobile-menu-list");
    const removeblur3 = document.querySelector("#header-body");
    removeblur1.classList.remove("blur");
    removeblur2.classList.remove("blur");
    removeblur3.classList.remove("blur");
  });
};

for (let i = 0; i < description.length; i += 1) {
  const cardContainer = document.createElement("article");
  cardContainer.classList.add("card1");
  cardContainer.classList.add("works");
  workSection.append(cardContainer);
  const projectImage = document.createElement("img");
  projectImage.src = description[i].image;
  projectImage.classList.add("project-card-image");
  cardContainer.append(projectImage);
  const cardContent = document.createElement("div");
  cardContent.id = "portofolio";
  cardContent.classList.add("work-area");
  cardContainer.append(cardContent);
  const cardHeadContainer = document.createElement("div");
  cardHeadContainer.classList.add("work-head");
  cardContent.append(cardHeadContainer);
  const cardHeading = document.createElement("h3");
  cardHeading.innerText = description[i].title;
  cardHeadContainer.append(cardHeading);
  const frameList = document.createElement("ul");
  frameList.classList.add("frame");
  cardHeadContainer.append(frameList);
  for (let x = 0; x < description[i].list.length; x += 1) {
    const frameListItems = document.createElement("li");
    frameListItems.classList.add("dark-text");
    frameListItems.innerText = description[i].list[x];
    frameList.append(frameListItems);
    const dot = document.createElement("img");
    dot.src = "/images/work-section-png/Counter.png";
    dot.classList.add("middle-dot");
    frameListItems.prepend(dot);
  }
  const mainCardText = document.createElement("p");
  mainCardText.classList.add("main-text");
  mainCardText.innerText = description[i].desc;
  cardContent.append(mainCardText);
  const languageContainer = document.createElement("ul");
  languageContainer.classList.add("language");
  cardContent.append(languageContainer);
  for (let x = 0; x < description[i].lang.length; x += 1) {
    const langList = document.createElement("li");
    langList.innerText = description[i].lang[x];
    languageContainer.append(langList);
  }
  const btnHolder = document.createElement("div");
  btnHolder.classList.add("btn-container");
  cardContent.append(btnHolder);
  const btn = document.createElement("button");
  btn.classList.add("see-project-btn");
  btn.type = "button";
  btn.innerText = "See Project";
  btnHolder.append(btn);

  console.log(btn);
  btn.addEventListener("click", () => {
    m = i;
    popUpCard(m);
    const addblur1 = document.querySelector("#head-container");
    const addblur2 = document.querySelector(".mobile-menu-list");
    const addblur3 = document.querySelector("#header-body");
    addblur1.classList.add("blur");
    addblur2.classList.add("blur");
    addblur3.classList.add("blur");
  });
}

// contact form validation
const theForm = document.querySelector(".contact-sec");
const errorMsg = document.createElement("small");
const formCon = document.querySelector("#mainFormControls");
errorMsg.innerText = "Please enter email only in lowercase";
formCon.appendChild(errorMsg);
errorMsg.className = "disappear";

const validateEmail = () => {
  const uIEmail = theForm.querySelector("#email");
  const theValidatorStr = uIEmail.value.toLowerCase();
  const checkValidation = uIEmail.value === theValidatorStr;
  return checkValidation;
};

theForm.addEventListener("submit", (value) => {
  if (validateEmail()) {
    theForm.submit();
    errorMsg.className = "disappear";
  } else {
    value.preventDefault();
    errorMsg.className = "appear";
  }
});
