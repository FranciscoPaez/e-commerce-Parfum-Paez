export const products = [
    {
        name:'name02',
        price:110,
        description:'description02',
        stock:80,
        img: 'https://i.postimg.cc/pdwTfMDp/jpg.png',
        category: 'offers'
    },
    {
        name:'name03',
        price:79,
        description:'description03',
        stock:110,
        img: 'https://i.postimg.cc/pdwTfMDp/jpg.png',
        category: 'bestsellers'
    }
]

let err = false

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(!err){
                resolve(products)
            } else {
                reject('Try again later')
            }
        },2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(!err){
                let oneProduct = products.find((item) => item.id === id)
                resolve(oneProduct) 
            } else {
                reject('Try again later')
            }
        },2000)
    })
}