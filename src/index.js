module.exports = function check(str, bracketsConfig) {
  // your solution
     if (str.length % 2 != 0){
		return false;
	}
 	let arr = str.split('');
 	let stack = [];
 	for ( let i = 0; i < arr.length; i++){
 		for ( let j = 0; j < bracketsConfig.length; j++ ){
 			if (arr[i] == bracketsConfig[j][1] && stack[stack.length-1] == bracketsConfig[j][0]){
 				stack.pop();
 			} else if (arr[i] == bracketsConfig[j][0]){
 				stack.push(arr[i]);
 			}
 		}
 	}

 	if (stack.length == 0){
 		return true;
 	}
 	return false;
}
