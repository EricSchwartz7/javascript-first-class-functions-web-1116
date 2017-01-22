function receivesAFunction(callback){
  callback()
}

function named_function(){
  console.log('hey')
}

function returnsANamedFunction(){
  return named_function
}

function returnsAnAnonymousFunction(){
  return function (){
    console.log('hey')
  }
}
