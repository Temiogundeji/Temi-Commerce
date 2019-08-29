const products = [
    {
        "image":"img/images-shirt13.png",
        "name":"Men Knitwears Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
    {
        "image":"img/images-shirt13.png",
        "name":"Men Knitwears Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
    {
        "image":"img/images-shirt13.png",
        "name":"Men Knitwears Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
    {
        "image":"img/images-shirt13.png",
        "name":"Men Knitwears Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
    {
        "image":"img/images-shirt13.png",
        "name":"Men Knitwears Offers",
        "price":'$45',
        "details":"Our shoes are durable and great"
    },
];
const cart =[
    //Containing products added by user
]

//Function to list products
let prodBtn = document.querySelector('div.prod-row > div.card > button');
const listProduct = (products) =>{
    let template = ``;
    products.forEach(product => {
        let src = product.image;
        let name = product.name;
        let details = product.details;
        template = `<div class="card">
                        <img src="${src}">
                        <h3>${name}</h3>
                        <div>${details}</div>
                        <button>Buy Now</button>
                    </div>`;
    });
}
//Search product
const searchProduct = (product, searchKey) =>{
    
}
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

