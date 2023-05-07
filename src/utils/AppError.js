
class AppError {
  message;
  statusCode;


  constructor(message, statusCode = 400){
    this.message = message;
    this.status = statusCode;
  }
}


module.exports = AppError;














