const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 45000, brand: 'iphone', color: 'golden'},
    {name: 'sungallass', price:36000, brand: 'lenovo', color: 'black'},
    {name: 'watch', price: 2000, brand: 'apu', color: 'green'},
    {name: 'camera', price: 150000, brand: 'cannon', color: 'yellow'},
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
];


const brands = products.map( product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);