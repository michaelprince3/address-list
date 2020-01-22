// // Some starter code
// const container = document.querySelector("#addressList")

// document.querySelector("#saveEntry").addEventListener("click", event => {
//     /*
//         Collect the user put by selecting the input fields, one
//         at a time, and accessing the `value` property
//     */
//     const personName = document.querySelector("#fullName").value
//     const personAddress = document.querySelector("#address").value

//     // Once you have collected all the values, update the DOM
//     // with some HTML
//     container.innerHTML += `
//         <section>
//             <h1>${personName}</h1>
//             <div>${personAddress}</div>
//         </section>
//     `

// })

const addressContainer = document.querySelector("#addressList")

const captureUserInput = () => {
    const enteredName = document.getElementById("fullName")
    const enteredAddress = document.getElementById("address")

    addressContainer.innerHTML += `
    <section>
        <h1>${enteredName.value}</h1>
        <div>${enteredAddress.value}</div>
    </section>
    `

    enteredName.value = ""
    enteredAddress.value = ""

}

document.getElementById("saveEntry").addEventListener("click", captureUserInput)