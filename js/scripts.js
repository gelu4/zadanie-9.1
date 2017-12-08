var triangleArea1 = getTriangleArea(3, 6);
var triangleArea2 = getTriangleArea(-4, -9);
var triangleArea3 = getTriangleArea(2, 8);
function getTriangleArea(a, h) {
	if(a<=0 || h <= 0){
		return"Nieprawidłowe dane";
	}
	return(a*h/2)
}

console.log(getTriangleArea(10, 6));
console.log(triangleArea1);
console.log(triangleArea2);
console.log(triangleArea3);
