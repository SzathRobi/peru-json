//function to create Header
const createHeader = (title_value) => {
  const container = document.createElement("div");
  container.classList.add("header");
  const title = document.createElement("h1");
  title.textContent = title_value;
  container.appendChild(title);
  document.body.appendChild(container);
};

// Reusable functions to create cards with infos
const createSingleInfo = (title_value, data, elem_type) => {
  const box = document.createElement("div");
  box.classList.add("box");
  const title = document.createElement("h2");
  title.textContent = title_value;
  box.appendChild(title);
  let info = document.createElement(elem_type);
  if (elem_type === "img") {
    info.src = data;
  }
  info.textContent = data;
  box.appendChild(info);
  document.body.appendChild(box);
};

const createListInfo = (title, data) => {
  const box = document.createElement("div");
  box.classList.add("box");
  const listTitle = document.createElement("h2");
  listTitle.textContent = title;
  box.appendChild(listTitle);
  const list = document.createElement("ul");
  for (const elem in data) {
    if (Object.hasOwnProperty.call(data, elem)) {
      const element = data[elem];
      const listItem = document.createElement("li");
      listItem.innerText = element;
      list.appendChild(listItem);
    }
  }
  box.appendChild(list);
  document.body.appendChild(box);
};

// all functions called in one place
function displayInfo() {
  createHeader(peru.name.official);
  createSingleInfo("Flag", peru.flags.svg, "img");
  createSingleInfo("Capital", peru.capital, "p");
  createSingleInfo("Population", peru.population, "p");
  createListInfo("Languages", peru.languages);
  createSingleInfo("TimeZone", peru.timezones, "p");
  createSingleInfo("Continents", peru.continents, "p");
}

//render the whole stuff
window.addEventListener("load", displayInfo);
