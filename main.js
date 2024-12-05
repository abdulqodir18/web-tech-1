const bestSellingList = document.querySelector('#best-selling-list');
const orderListContainer = document.querySelector('.order-list');
const orderListCloser = document.querySelector('.order-list-closer');
const orderListOpener = document.querySelector('.order-list-opener');
const orderListWrapper = document.querySelector('#order-list');

const bestSellings = [
  {
    link: "https://safiabakery.uz/en/product/vishenka-tart",
    title: "Сherry tart",
    text: "Shortcrust pastry with classic ganache and fresh cherries. The cake is designed for 6 - 8 persons. It is recommended to defrost this cake for 2 hours before eating.",
    src: "assets/img/top-1.jpg",
    alt: "Сherry tart",
    price: "$9.99",
    id: "best-selling-1"
  },
  {
    link: "https://safiabakery.uz/en/product/dari-tort",
    title: "Gift Cake",
    text: "Thin layers of classic biscuit combined with curd cream and fresh raspberries. The cake is topped with whipped cream and seasonal fresh berries.",
    src: "assets/img/top-2.jpg",
    alt: "Gift Cake",
    price: "$3.29", 
    id: "best-selling-2"
  },
  {
    link: "#",
    title: "Kiev decorated cake",
    text: "Two layers of colored meringue and two layers of colored biscuits, combined with “Ice cream” with berries and fruits.",
    src: "assets/img/top-3.jpg",
    alt: "Kiev decorated cake",
    price: "$3.12",
    id: "best-selling-5"
  },
  {
    link: "#",
    title: "Black prince round cake",
    text: "Thin shortbread chocolate cakes with butter chocolate cream on condensed milk and cherry confit filling.",
    src: "assets/img/top-3.jpg",
    alt: "Black prince round cake",
    price: "$2.59", 
    id: "best-selling-4"
  }
];

const orderList = []
function renderBestSellings(items) {
  const bestSellingTemplate = document.getElementById("best-selling-item-template");
  
  if (bestSellingTemplate) {
    items.forEach(item => {
      const clone = bestSellingTemplate.content.cloneNode(true);
      
      const link = clone.querySelector(".best-selling__item-link");
      const title = clone.querySelector(".best-selling__item-title");
      const text = clone.querySelector(".best-selling__item-text");
      const img = clone.querySelector("img");
      const price = clone.querySelector(".best-selling__item-price");
      const button = clone.querySelector(".best-selling__item-button");
      
      link.href = item.link;
      title.textContent = item.title;
      text.textContent = item.text;
      img.src = item.src;
      img.alt = item.alt;
      price.textContent = item.price;
      button.id = item.id;
      
      
      bestSellingList.appendChild(clone);
    });
    
  }
}

function renderOrderList(items) {
  const orderListTemplate = document.getElementById("order-list-item-template");
  if (orderListTemplate) {
    items.forEach(item => {
      const clone = orderListTemplate.content.cloneNode(true);    
      const title = clone.querySelector(".order-list__item-title");
      const text = clone.querySelector(".order-list__item-text");
      const img = clone.querySelector("img");
      const price = clone.querySelector(".order-list__item-price");
      const button = clone.querySelector(".order-list__item-button");
      const id = item.id;
      title.textContent = item.title;
      text.textContent = item.text;
      img.src = item.src;
      img.alt = item.alt;
      price.textContent = item.price;
      button.id = item.id;
      
      orderListWrapper.appendChild(clone);
    });
  }
}

renderBestSellings(bestSellings);
renderOrderList(orderList);

bestSellingList.addEventListener('click', (event) => {
  if (event.target.classList.contains('best-selling__item-button')) {
    const id = event.target.id;
    const item = bestSellings.find(item => item.id === id);
    const orderItem = orderList.find(item => item.id === id);
    if (!orderItem && item) {
      orderListWrapper.innerHTML = "";
      orderList.push(item);
      renderOrderList(orderList);
    }
  }
})

orderListWrapper.addEventListener('click', (event) => {
  const id = event.target.id;
  
  if(id) {
    const item = orderList.find(item => item.id === id);
    const index = orderList.indexOf(item);
    orderList.splice(index, 1);
    orderListWrapper.innerHTML = "";
    renderOrderList(orderList);
    
  }
  
})

orderListOpener.addEventListener('click', () => {
  orderListContainer.classList.add('order-list-open');
})

orderListCloser.addEventListener('click', () => {
  orderListContainer.classList.remove('order-list-open');
})