class Product{
    constructor(name,price){
        this.Name=name,
        this.Price=price;
    }
}

class Store{
    constructor(){
        this.Products=[],
        this.TotalIncome=0,
        this.AddProduct=function(prod){
            this.Products[this.Products.length]=prod
        }
    }
}
let store=new Store();
let name2=prompt("Product name:");
let price2=prompt("Product price:");
let prod1=new Product(name2,price2);
store.AddProduct(prod1);
console.log(store.Products.filter(x=>x.Price>2000))



