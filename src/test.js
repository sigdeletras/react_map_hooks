const helloYou = (name) => {
  name = 'you' || name;
  console.log(`hello${name}!`);
};

// I am using the variable helloYou
console.log(helloYou);
