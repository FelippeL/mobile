=========== GET =========== 
let url = 'https://api.sheety.co/e6fb458ed3292df330f6fe924f0caad5/apiCooking/sheet1';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.sheet1S);
});
=========== POST =========== 
  let url = 'https://api.sheety.co/e6fb458ed3292df330f6fe924f0caad5/apiCooking/sheet1';
  let body = {
    sheet1: {
      ...
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.sheet1);
  });

=========== PUT =========== 
let url = 'https://api.sheety.co/e6fb458ed3292df330f6fe924f0caad5/apiCooking/sheet1/2';
let body = {
  sheet1: {
    ...
  }
}
fetch(url, {
  method: 'PUT',
  body: JSON.stringify(body)
})
.then((response) => response.json())
.then(json => {
  // Do something with object
  console.log(json.sheet1);
});
=========== DELETE =========== 
let url = 'https://api.sheety.co/e6fb458ed3292df330f6fe924f0caad5/apiCooking/sheet1/2';
fetch(url, {
  method: 'DELETE',
})
.then((response) => response.json())
.then(() => {
  console.log('Object deleted');
});