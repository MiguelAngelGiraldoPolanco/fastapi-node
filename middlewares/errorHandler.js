function logErrors( err, req, res, next){ // este middleware se encarga de mostrar por ocnsola en error
  console.error(err);
  next(err);
}

function errorHandler( err, req, res, next){ // este para la funcion por que no tiene next y muestra el error al usuario en un json
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler( err, req, res, next){
  if (err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else{
    next(err);
  }
}


module.exports = { logErrors , errorHandler, boomErrorHandler };


