// const carouselSlide=document.querySelector('.carousel-slide');
// constt caarouselImages=document.querySelectorAll('.carousel-slide img');

// //buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //counter
// let counter = 1;
// const size =carouselImages[0].clientWidth;

// caarouselSlide.style.transform = 'translateX(' + (size*counter)+ 'px)';

// let p = new Promise((resolve,reject)=>{
//     let a = 1+2
//     if (a==2)
//     {
//         resolve('success')
//     }else{
//         reject('failed')
//     }
// })
 
// p.then((message)=>{
//     console.log('this is in the then ' + message)
// }).catch((message)=>{
//     console.log('this is in the catch ' + message)
// })
 
function makeRequest(location){
    return new promise((resolve,reject)=>
    {

        console.log('making request to ${location}')
        if (location === 'Google')
        {
            resolve('google says hi') 
        }
        else
        {
            reject('We can only talk to Google')
        }
  
    })
}

function processRequest(response)
    {
        return new promise((resolve,reject)=>
        {
            console.log('processing response')
            resolve('extra info  + ${response}')
        })
    }

    makeRequest('google').then(response=>{
        console.log('Response Recieved')
        return processRequest(response)
    }).then(processRequest=>{
        console.log(processedRequest)
    })
