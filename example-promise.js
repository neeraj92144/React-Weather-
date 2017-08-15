

function addPromise( a, b){
  return new Promise (function (data, err) {
    if(typeof a != 'number' || typeof b != 'number'  ){
       err('You did not passed number, please check that out.');
    }else{
      data(a+b);
    }
  })
}

addPromise(2,'asdf').then(function (data){
        console.log('Final data after processing all such things', data);
  }, function (err){
        console.log("eror",err)
  }
);
