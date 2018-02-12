// Create
function bowling(arr){
  if (arr[0] + arr[1] > 10 || arr[0] + arr[1] < 0) {
    return "Cheater";
  } else if (arr[0] === 10){
    return "strike";
  } else if (arr[0] + arr[1] === 10) {
    return "spare";
  } else if (arr[0] + arr[1] === 0){
    return "gutter ball";
  }
  return arr[0] + arr[1];
}

module.exports = bowling;
