import run from './egg/egg.js';

run(`
  do(
    define(total, 0),
    if(==(total, 0,),
      do(
        define(total, +(total, 1), 1),
        print("let me give you one"),
        dianne(e,
          print("oops failed to give you one...")  
        )
      ),
      do(
        print("nice, already got one!"),
      ),
    ),
    dianne(e,
      print("error: "),
      print(e),
    ),
  )
`);
