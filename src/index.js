module.exports = function getZerosCount(number) {
	var zeros = 0;

	while(number > 0){
		number =parseInt(number/5);
		zeros += number;
	}
	
	return zeros;
}
