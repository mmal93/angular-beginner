interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const getPriceTotal = (products: Product[]) => products.reduce((total, product) => total + product.price * product.id, 0)
const getProductByPriceGT100 = (products: Product[]) => products.filter((product) => product.price > 100)
const getProductInfo = (products: Product[]): string[] =>
    products.map(product => `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`)

const getProductByPriceLT100 = (products: Product[]) => products.reduce((total, product) => product.price < 100 ? total + product.price : total, 0)

const getDiscountedProducts = (products: Product[], discountPercent: number) => products.map(product => {
    product.price = product.price - product.price * discountPercent / 100;
    return product;
});

export default function runApp9() {
    const productsList : Product[] = [
        {
            id: 1,
            name: 'Trà đá',
            price: 200,
            quantity: 50
        },
        {
            id: 2,
            name: 'Cafe',
            price: 2000,
            quantity: 25
        },
        {
            id: 3,
            name: 'Nước dừa tươi',
            price: 150,
            quantity: 100
        },
        {
            id: 4,
            name: 'Nước dừa lon',
            price: 90,
            quantity: 210
        },
        {
            id: 5,
            name: 'Nước ép hoa quả',
            price: 350,
            quantity: 10
        },
        {
            id: 6,
            name: 'Nước lọc',
            price: 50,
            quantity: 1000
        }
    ]
    document.writeln("<br /><br />Product info: <br />")
    document.writeln(getProductInfo(productsList).join('<br />'));
    document.writeln('<br />Total Quantity: ' + getPriceTotal(productsList))
    document.writeln('<br /><br />Total product (price > 100): ' + getProductInfo(getProductByPriceGT100(productsList)).join('<br />'))
    document.writeln('<br />Total product (price < 100): ' + getProductByPriceLT100(productsList))
    document.writeln('<br /><br />Discound product info: ' + getProductInfo(getDiscountedProducts(productsList, 50)).join('<br />'))
}

