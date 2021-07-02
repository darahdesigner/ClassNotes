let callback = (num) => {
    if ((typeOf num) !== Number){
      return 'what is this?';
    }
    else if (num%2 ===0){
      return 'the number is even';
    }else{
      return 'the number is odd'
    }

  }
  
  callback(4);