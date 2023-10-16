let Array1 = [24, 53, 78, 91, 12]
let largestNum = 0;

for (let data of Array1) {
    if (largestNum < data) {
        largestNum = data;
    }
}

document.write("Array Items : "+Array1+"</br> The Largest Number is : "+largestNum);

document.write("</br> </br> </br> </br>");

let Array2 = [242, 532, 782, 912, 122]
let smallestNum = Array2[0];

for (let data of Array2) {
    if (smallestNum > data) {
        smallestNum = data;
    }
}

document.write("Array Items : "+Array2+"</br> The Smallest Number is : "+smallestNum);
