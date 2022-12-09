const instruments = [
  {
    id: 1,
    img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg",
    name: "Молоток",
    price: 150,
  },
  {
    id: 2,
    img: "https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg",
    name: "Перфоратор",
    price: 3000,
  },
  {
    id: 3,
    img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg",
    name: "Рівень",
    price: 500,
  },
  {
    id: 4,
    img: "https://static.dnipro-m.ua/cache/products/992/thumb_182118.jpg",
    name: "Шліфмашинка кутова",
    price: 1530,
  },
  {
    id: 5,
    img: "https://static.dnipro-m.ua/cache/products/1240/thumb_222106.jpg",
    name: "Циркулярна пила",
    price: 2397,
  },
  {
    id: 6,
    img: "https://static.dnipro-m.ua/cache/products/2409/thumb_157273.jpg",
    name: "Акамуляторна батарея",
    price: 1149,
  },
  {
    id: 7,
    img: "https://static.dnipro-m.ua/cache/products/3035/thumb_181582.jpg",
    name: "Маска зварника",
    price: 498,
  },
  {
    id: 8,
    img: "https://static.dnipro-m.ua/cache/products/4879/thumb_222031.jpg",
    name: "Дріль-шуруповерт",
    price: 1497,
  },
  {
    id: 9,
    img: "https://static.dnipro-m.ua/cache/products/5455/thumb_225030.jpg",
    name: "Дріль безударний",
    price: 1395,
  },
  {
    id: 10,
    img: "https://static.dnipro-m.ua/cache/products/6387/thumb_202769.jpg",
    name: "лазерний рівень",
    price: 3819,
  },
];

const list = document.querySelector(".list");
const basket = [];
const favorite = [];
const markup = instruments.reduce(
  (acc, { id, img, name, price }) =>
    acc +
    `<li data-product-id="${id}" class="js-item">
                <img src="${img}" alt="${name}">
                <h2>${name}</h2>
                <p>Ціна: ${price}</p>
                <div>
                    <button type="button" class="js-cart">Add to cart</button>
                    <button type="button" class="js-favorite">Add to favorite</button>
                </div>
            </li>`,
  ""
);

list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", onClick);

// const buttonCart = document.querySelectorAll('.js-cart');

function onClick(evt) {
  if (
    !evt.target.classList.contains("js-cart") &&
    !evt.target.classList.contains("js-favorite")
  ) {
    return;
  }
  console.log("CLICK");
  if (evt.target.classList.contains("js-cart")) {
    // console.log(evt.target);
    // const currentElement = evt.target.closest('.js-item');
    // const productId = Number(currentElement.dataset.productId);
    // const product = instruments.find(({
    //     id
    // }) => id === productId);
    const product = getProduct(evt.target);
    basket.push(product);
    console.log("basket", basket);
    // console.log('Cool it`s cart 😎');
  } else if (evt.target.classList.contains("js-favorite")) {
    // console.log('Cool it`s favorite 😍');
    // const currentElement = evt.target.closest('.js-item');
    // const productId = Number(currentElement.dataset.productId);
    // const product = instruments.find(({
    //     id
    // }) => id === productId);
    const product = {
      ...getProduct(evt.target),
    };
    const haveProduct = favorite.find(({ id }) => id === product.id);

    if (haveProduct) {
      haveProduct.qty += 1;
    } else {
      product.qty = 1;
      favorite.push(product);
    }

    console.log("favorite", favorite);
  }
}

/**
 *
 * @param {*} elem
 * @returns
 */
function getProduct(elem) {
  const currentElement = elem.closest(".js-item");
  const productId = Number(currentElement.dataset.productId);
  const product = instruments.find(({ id }) => id === productId);
  console.log("product", product);
  return product;
}
