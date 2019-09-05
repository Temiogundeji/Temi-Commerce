const products = [
    
    {
        "image":"img/images-shirt11.png",
        "name":"Men Knitwears Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
    {
        "image":"img/images-shirt12.png",
        "name":"Men Knitwears Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
    {
        "image":"img/images-shirt13.png",
        "name":"Men Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
    {
        "image":"img/images-shirt14.png",
        "name":"Knitwears Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
];
const cart =[
    //Containing products added by user
]

const prodBtn = document.querySelector('div.prod-row > div.card > button');
const prodRow = document.querySelector('div.prod-row');
const searchBox = document.querySelector('input[type=search]#prod-search');
const searchVal = searchBox.value;

//Function to list products
prodRow.innerHTML = '';
let template = ``;
const listProduct = (products) =>{
    products.forEach(product => {
        let src = product["image"];
        let name = product["name"];
        // let details = product["details"];
        template += `<div class="card">
                        <img src="${src}">
                        <h3>${name}</h3>
                        <button>Buy Now</button>
                    </div>`;
    });
    prodRow.innerHTML = template;
}
listProduct(products);
//Search product
const searchProduct = (products, searchKey) =>{
    searchBox.addEventListener('focus', (e)=>{
        document.querySelector('div.prod-row').style.display = 'none';
        let result = products.forEach(prod => prod["name"] == searchKey);
        console.log(result);
    });
    searchBox.addEventListener('blur', (e) =>{
        document.querySelector('div.prod-row').style.display = 'flex';
    })
}
searchProduct(products,"Men Knitwears Offers");
//Filter products by using multiple criteria, it takes object as parameter
const filterProduct = (searchCri) =>{

}
//Change site settings 
const updateSettings = (oldSetting) =>{

}
//Add new product
let product = {}
const productAdd= (product) =>{

}
//Delete existing product
const productDelete =(product) =>{

}
//Update existing product
const productUpdate = () =>{

}
//Calculate the cost of the product
const checkout = () =>{

}
//List product in table
const listProductInTable = () =>{

}
//Check if user is online 
const checkUserOnline = () =>{

}
//Make copy
const makePayment = () =>{

}

/**UI
 element
 **/

 //Copy to clipboard
const copyToClipboard = () =>{

}
//Get user location
const getLocation = () =>{
    //Seek permission before getting user location
}
//Notify customers
const notifyCustomer = () =>{

}
//Lazy load content
const lazyLoad = () =>{

}

