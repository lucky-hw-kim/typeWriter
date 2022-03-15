const sentence = "hello there from lighthouse labs";
let time = 60;


for (let i = 0; i < sentence.length; i++) {
  if(i === sentence.length - 1) {
    setTimeout(() => {
    console.log(sentence[i])
  }, time)     
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i])
     },time)
     time += 60;
  }
}




