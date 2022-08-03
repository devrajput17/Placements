function multiple(arr1, arr2) {
  let value = 0;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] % arr2[i] == 0) {
        value+=1;
      }
    }
    console.log(arr2[i] + ":" + value);
  }
}
multiple([2, 4, 8, 10, 12, 15, 27, 35, 40], [1, 2, 3, 4, 5, 6, 7, 8, 9])