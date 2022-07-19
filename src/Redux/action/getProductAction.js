import Products from '../../database/Products.json'
export default function getProductAction(){
    let data=Products    
    return{
        type: "PRODUCT-LIST",
        payload:data
    }
}