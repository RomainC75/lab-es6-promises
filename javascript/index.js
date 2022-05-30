// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            getInstruction("mashedPotatoes", 4, ()=>{
                document.querySelector("#mashedPotatoes").innerHTML += `<li>smashed potatoes</li>`;
            },(error) => console.log(error) )
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
  

// Iteration 1 - using callbacks
// ...
  

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      obtainInstruction('steak', 2)
      .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
        obtainInstruction('steak', 3)
        .then( (step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
          obtainInstruction('steak', 4)
          .then( (step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
            obtainInstruction('steak', 5)
            .then( (step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
              obtainInstruction('steak', 6)
              .then( (step6) => {
                document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                obtainInstruction('steak', 0)
                .then( (step0) => {
                  document.querySelector("#steak").innerHTML += `<li>Steack is ready !</li>`
                  document.querySelector('#steakImg').removeAttribute('hidden')
                })
              })
            })
          })
        })
      })
    })
  })


// Iteration 3 using async/await
function makeBroccoli() {
    return new Promise( async(resolve, reject)=>{
      try{
        const instru0 = await obtainInstruction('broccoli', 0)
        document.querySelector("#broccoli").innerHTML += `<li>${instru0}</li>`
        const instru1 = await obtainInstruction('broccoli', 1)
        document.querySelector("#broccoli").innerHTML += `<li>${instru1}</li>`
        const instru2 = await obtainInstruction('broccoli', 2)
        document.querySelector("#broccoli").innerHTML += `<li>${instru2}</li>`
        const instru3 = await obtainInstruction('broccoli', 3)
        document.querySelector("#broccoli").innerHTML += `<li>${instru3}</li>`
        const instru4 = await obtainInstruction('broccoli', 4)
        document.querySelector("#broccoli").innerHTML += `<li>${instru4}</li>`
        const instru5 = await obtainInstruction('broccoli', 5)
        document.querySelector("#broccoli").innerHTML += `<li>${instru5}</li>`
        const instru6 = await obtainInstruction('broccoli', 6)
        document.querySelector("#broccoli").innerHTML += `<li>${instru6}</li>`
        document.querySelector("#broccoli").innerHTML += `<li>Broccoli is Ready !</li>`
        resolve('true')
      }catch(e){
        reject(e)
      }
    })
}

// (async()=>{
//   await makeBroccoli()

// })

makeBroccoli()
  .then(exists=>{
    console.log('exists',exists)
    document.querySelector('#broccoliImg').removeAttribute('hidden')
  })
  .catch(error=>console.log(error))





// Bonus 2 - Promise all
// ...
const BrusselSprout = () =>{
  return Promise.all(brusselsSprouts.map( async(step,i) => {
    return  obtainInstruction('brusselsSprouts',i)
  }))
}

BrusselSprout().then(x=>{
  x.forEach(val=>{
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${val}</li>`})
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel Sprout are Ready!</li>`
  }
)