//GET ALL PRODUCTS FROM PRODUCTS.JS

const arrayProdImages = ["prod1","prod2","prod3","prod4","prod5","prod6"];
const prodContainer = document.querySelector('.prodcontainer');
const checkedColors = document.querySelector('.color-container');
const checkedCategories = document.querySelector('.category-container');
const prodDetailsContainer = document.querySelector('.product-detail-container')
const filterContainer = document.querySelector('.filter-container')
const nav = document.querySelector('nav');
const mainSection = document.querySelector('.main-section')
const footer = document.querySelector('footer')

const pagination = document.querySelector('.pagination')
    
const productTitle = document.querySelector('.right-side-details > h4');
const productDesc = document.querySelector('.right-side-details > h5');
const productPrice = document.querySelector('.right-side-details > h6:first-of-type');
const productColors = document.querySelector('.color-bubble-container')
const callToAction = document.querySelector('.cta-buttons');
const productSpecs = callToAction.querySelector('.product-specs')
const displaySpecsBtn = document.querySelector('#details-drop-down')

const addToBasketBtn = document.querySelector('#add-to-basket')
const basketBubble = document.querySelector('.basket')

let minPrice = document.querySelector('#minPrice');
let minPriceDisplayed = document.querySelector('.min-price');

let maxPrice = document.querySelector('#maxPrice');
let maxPriceDisplayed = document.querySelector('.max-price');




// UPDATE BASKET
const basket = localStorage.getItem('basket') != null ? JSON.parse(localStorage.getItem('basket')) : []

const displayBasketSize = () => {
    if(basket.length > 0) {
    basketBubble.style.visibility = 'visible';
    basketBubble.innerText = basket.length;
    } else {
        basketBubble.style.visibility = 'hidden';
    }
}

const addToBasket = (product) => {
    basket.push(product)
    localStorage.setItem('basket', JSON.stringify(basket))
    displayBasketSize();
}

displayBasketSize();




//RENDER PRODUCTS

const renderProduct = (product) => {

const divThumb = document.createElement('div');
divThumb.classList.add('divThumb');

divThumb.innerHTML = 
`<img src="${product.image}" alt="prod-image"  class="prod-img">
<div class="prod-block">
    <div class="prd-name">${product.name}</div>
    <div class="prd-type">${product.type}</div>
  </div>

<div class="price">$${product.price}</div>
<img src="./images/add-to-cart-button.png" class="cart">
`
prodContainer.appendChild(divThumb);

divThumb.addEventListener('click',() => selectProduct(product))

const addToBasketIcon = document.querySelector('.cart')
addToBasketIcon.onclick = () => {addToBasket(product)}


}


const renderProducts = (allProducts) => {
    prodContainer.innerHTML =  "";
    allProducts.forEach(product => {
        renderProduct(product)
    });
}



//SHOW ONLY FIRST 6 PRODUCTS TO FIT IN PAGE 
//ugly hard coded function...can't find a way of doing it dynamically with anonymous params for now

const renderProductsPerPage = (array) => {

const page1 = document.querySelector('.pagination div:first-child')

if(page1.classList.contains("current-page")) {
    renderProducts(array.slice(0,6));
}
page1.addEventListener('click', () => {
    prodContainer.innerHTML = "";
    page1.classList.add('current-page')
    page2.classList.remove('current-page')
    page3.classList.remove('current-page')
    page4.classList.remove('current-page')
    renderProducts(array.slice(0,6));
})

const page2 = document.querySelector('.pagination div:nth-child(2)')
page2.addEventListener('click', () => {
    prodContainer.innerHTML = "";
    page2.classList.add('current-page')
    page1.classList.remove('current-page')
    page3.classList.remove('current-page')
    page4.classList.remove('current-page')
    renderProducts(array.slice(6,12));
})

const page3 = document.querySelector('.pagination div:nth-child(3)')
page3.addEventListener('click', () => {
    prodContainer.innerHTML = "";
    page3.classList.add('current-page')
    page1.classList.remove('current-page')
    page2.classList.remove('current-page')
    page4.classList.remove('current-page')
    renderProducts(array.slice(12,18));
})

const page4 = document.querySelector('.pagination div:nth-child(4)')
page4.addEventListener('click', () => {
    prodContainer.innerHTML = "";
    page4.classList.add('current-page')
    page1.classList.remove('current-page')
    page2.classList.remove('current-page')
    page3.classList.remove('current-page')
     renderProducts(array.slice(18,20));
})
}

renderProductsPerPage(PRODUCTS);
// renderProducts(PRODUCTS)


///LIST OF COLOR OPTIONS TO FILTER BY 


// ==> GET FULL LIST OF COLORS INTO ONE ARRAY
let arrayColors = [];
const colorArray = (array) => {
  for (let i = 0; i < PRODUCTS.length; i++) {
    array.push(PRODUCTS[i].colors);
  }
  return array;
};
colorArray(arrayColors);


// ==> REMOVE DUPLICATES
let uniqueColor = []
const uniqueColorsSorted = (array) => {
    uniqueColor = Array.from(new Set(array.flat()));
    uniqueColor.sort();
    return uniqueColor;
}
uniqueColorsSorted(arrayColors)


// ==> GET SHORTER LIST OF COLORS (**for design layout purposes**)

const lessColors = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "maroon" ||
      array[i] === "sky blue" ||
      array[i] === "turquoise" ||
      array[i] === "lime" ||
      array[i] === "purple"
    ) {
      array.splice(i, 1);
    }
  }
  return array;
};

lessColors(uniqueColor)


// ==> APPEND LIST OF UNIQUE COLORS TO FILTER CONTAINER

const colorContainer = document.querySelector('.color-container');
const renderColors = (colors) => {
    colors.forEach(color => {
     
    const divSelect = document.createElement('div')    

     const input = document.createElement('input');
     input.type = 'checkbox'
     input.id = color
     input.value = color

     const label = document.createElement('label');
     label.innerText = color

    divSelect.append(input, label)
     colorContainer.appendChild(divSelect)
    })
} 

renderColors(uniqueColor)




//EVENT LISTENERS PRICE INPUT

//set min and max price default values 
minPrice.value = 0
maxPrice.value = 1000


minPrice.addEventListener("input", () => {
  minPriceDisplayed.innerText = "$" + minPrice.value;
});

maxPrice.addEventListener("input", () => {
  maxPriceDisplayed.innerText = "$" + maxPrice.value;
});

const sliders = document.querySelectorAll('.sliders input')
let slide1 = parseFloat(sliders[0].value);
let slide2 = parseFloat(sliders[1].value);

if(slide1 > slide2) { 
  let tmp = slide2; 
  slide2=slide1;
  slide1 = tmp;
}




// PRODUCT DESCRIPTION PAGE

const renderProductDetails = (product) => {
  productTitle.innerText = product.name;
  productDesc.innerText = product.description;
  productPrice.innerText = `$${product.price}`;

  fillBubbleColor(product);

  addToBasketBtn.onclick = () => {
    addToBasket(product);
    addToBasketBtn.innerText = "GO TO CHECKOUT";
    addToBasketBtn.style.background = "#00C98D";
  };

  displaySpecs(product);
};


// UPDATE PRODUCT SPECS FOR EACH PRODUCT 
const renderDetailSpecs = (product) => {
  productSpecs.innerHTML = `<ul>
    <li>Dimensions: ${JSON.stringify(product.dimensions).replace(
      /{|}|"/g,
      ""
    )}</li>
    <li>Seat dimensions: ${JSON.stringify(product.seat_dimensions).replace(
      /{|}|"/g,
      ""
    )}</li>
    <li>Weight: ${product.weight} kg</li>
    <li>Materials: ${product.materials.join(", ")}</li>
    <li>Filling Materials: ${product.filling_materials.join(", ")}</li>
    <li>Comfort: ${product.comfort_level}</li>
</ul>`;
};


//EVENT LISTENER TO SHOW PRODUCT DETAILS BOX

const displaySpecs = (product) => {
  displaySpecsBtn.onclick = () => {
    if (productSpecs.style.display === "none") {
      productSpecs.style.display = "flex";
      renderDetailSpecs(product);
    } else {
      productSpecs.style.display = "none";
    }
  };
};


// UPDATE PAGE LAYOUT & CONTENT ON PRODUCT SELECTION
const selectProduct = (product) => {
    nav.style.display = 'none';
    mainSection.style.display = 'none';
    pagination.style.display = 'none'
    prodDetailsContainer.style.display = 'grid';

    footer.style.alignItems = 'end';
    footer.style.height = '0';

    renderProductDetails(product)
    displaySpecs(product)
}


const fillBubbleColor = (product) => {
  for (let j = 0; j < product.colors.length; j++) {
    let bubble = document.createElement("div");
    bubble.style.background = product.colors[j];
    bubble.id = product.colors[j];
    bubble.classList.add('color-preview');
    productColors.appendChild(bubble);
  }
};





//APPLY FILTERS LOGIC


const applyFilters = (fromPrice, toPrice, selectedColors) => {
  const filteredProducts = PRODUCTS.filter((product) => {
    if (product.price >= fromPrice && product.price <= toPrice) {
      return true;
    } else {
      return false;
    }
  }).filter((product) => {
    let productColors = product.colors;
    if (
      selectedColors.length === 0 ||
      productColors.some((color) => selectedColors.includes(color))
    ) {
      return true;
    } else {
      return false;
    }
  });

  renderProducts(filteredProducts);
};


filterContainer.addEventListener("change", () => {
  const priceFrom = parseInt(minPrice.value);
  const priceTo = parseInt(maxPrice.value);

  const selectedColors = [];
  const inputColor = document.querySelectorAll("input:checked");
  for (let i = 0; i < inputColor.length; i++) {
    selectedColors.push(inputColor[i].value);
  }

  applyFilters(priceFrom, priceTo, selectedColors);
});










///-----------------------------------------------///

// const categoryContainer = document.querySelector('.category-container')

// const renderCategories = (categories) => {
//     categories.forEach(category => {
//         const label = document.createElement('label');
//         label.innerText = category;

//         const input = document.createElement('input');
//         input.type = 'checkbox';
//         input.id = 'category'
//         input.value = category;

//         label.append(input);

//         categoryContainer.appendChild(label)

//     })
// }

// const uniqueCategories = [...new Set(PRODUCTS.map(product => product.type))]
// const sortedUniqueCategories = uniqueCategories.sort()

// renderCategories(sortedUniqueCategories);
///--------------------------------------------------------///