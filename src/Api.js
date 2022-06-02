export function fetchData(){
    let namePromise = fetchName();
    let addressPromise = fetchAddress();

    return{
        address: wrapPromise(addressPromise),
        name: wrapPromise(namePromise)
    }
}


function fetchName() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve("deep")
       }, 2000)
   })
}

function fetchAddress() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("111 somewhere deep dj, pune, India");
        }, 2000)
    })
 }

 function wrapPromise(promise) {
     let status = "pending";
     let result;
     let suspender = promise.then(
         r => {
             status = "success";
             result = r
         }, e => {
             status = "error";
             result = e
         }
     )
     return {
         read() {
             if(status === "pending"){
                 throw suspender
             }else if(status === "error"){
                 throw result
             }else if(status === "success"){
                 return result
             }
         }
     };
 }