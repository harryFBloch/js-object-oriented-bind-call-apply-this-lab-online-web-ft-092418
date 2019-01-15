//Your code here
function justInvoke(fn){
  return fn()
}

function setThisWithCall(fn){
  return arguments[0].call(arguments[1],arguments[2])
}

function setThisWithApply(){
  return arguments[0].apply(arguments[1],[arguments[2][0], arguments[2][1]])
}

function returnNewFunctionOf(fn){
  console.log(arguments)
  return arguments[0].bind(arguments[1])
}
