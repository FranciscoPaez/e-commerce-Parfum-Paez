const products = [
    {
        id:'01',
        name:'name01',
        price:100,
        description:'decription01',
        stock:10,
        img: 'https://i.postimg.cc/pdwTfMDp/jpg.png',
        category: 'news'
    },
    {
        id:'02',
        name:'name02',
        price:110,
        description:'decription02',
        stock:8,
        img: 'https://i.postimg.cc/pdwTfMDp/jpg.png',
        category: 'offers'
    },
    {
        id:'03',
        name:'name03',
        price:79,
        description:'decription03',
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