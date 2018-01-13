//instructions
//write the 4 functions below
//no third party libraries
//try not to use any forEach
//each function should be short and some functions can depend on other functions (hint no function should be more than 10 lines)

//list of products
var products = [{
        id: 1,
        price: 5,
        name: 'foo'
    },
    {
        id: 2,
        price: 3,
        name: 'bar'
    },
    {
        id: 3,
        price: 9,
        name: 'bazz'
    }
];

//list of line items
var lineItems = [{
        productId: 1,
        quantity: 1
    },
    {
        productId: 1,
        quantity: 1
    },
    {
        productId: 2,
        quantity: 1
    },
    {
        productId: 3,
        quantity: 1
    },
];
//returns an object
//keys are the ids of products
//the values are the products themselves
function generateProductsMap(products) {
    var productObj = products.reduce(function(obj, val) {

        acu[val.id] = val;

        return obj
    }, {});
    return productObj;
}
//created this obj because i can use it twice equal to your'e sales by product(noticed it in the end)
var countProductsSold = lineItems.reduce(function(allproducts, product) {

    if (product.productId in allproducts) {
        allproducts[product.productId]++
    } else {
        allproducts[product.productId] = 1;
    }

    return allproducts
}, {});
//returns an object
//keys are the ids of products
//value is the total revenue for that product
function salesByProduct(products, lineItems) {

    var revenueByProduct = products.reduce(function(totalSold, item) {
        if (countProductsSold[item.id]) {
            totalSold[item.id] = item.price * countProductsSold[item.id]
        }
        return totalSold;
    }, {});

    return revenueByProduct;
}

//return the total revenue for all products
function totalSales(products, lineItems) {
    var total = products.reduce(function(tots, item) {
        tots += (countProductsSold[item.id] * item.price)
        return tots;
    }, 0);
    return total;
}

//return the product responsible for the most revenue
function topSellerByRevenue(products, lineItems) {
    let sold = salesByProduct(products, lineItems);
    let highest = 0;
    var bestSeller = products.reduce(function(best, item) {
        if (sold[item.id] > highest) {
            best = item.name
            highest = sold[item.id];
        }
        return best
    }, 0);

    return bestSeller;

}
console.log(`generates product map - should be
{
  1:{
    id: 1,
    name: "foo",
    price: 5
  },
  2:{
    id: 2,
    name: "bar",
    price: 3
  },
  3:{
    id: 3,
    name: "bazz",
    price: 9
  }
}

`, generateProductsMap(products));
console.log(`sales by product - should be
  {
    1: 10,
    2: 3,
    3: 9
}`, salesByProduct(products, lineItems));
console.log('total sales - should be 22', totalSales(products, lineItems));
console.log('top seller by revenue', topSellerByRevenue(products, lineItems));