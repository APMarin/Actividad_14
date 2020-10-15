const bHelmet = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Buy helmet")
        },1000)
    })
}

const bGloves = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Buy gloves")
        },2000)
    })
}

const bBike = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("On trip")
        },8000)
    })
}

const myFetchAPI = async () => {
   const data1 = await bHelmet();
   const data2 = await bGloves();
   const data3 = await bBike();
   return [data1,data2,data3]
}


myFetchAPI()
    .then(info => {
        console.log(info)
    })