const cl = console.log;
const userDetails = document.getElementById("userDetails");

// find the object which has similar name
// find the count of that 
// delete the duplicate object
// {name : , count : } 

const duplicateArr = users;
let j = 1;
const newArr = duplicateArr.reduce((obj,currentObj,i) => {
    let index = duplicateArr.findIndex(ele => ele.name === currentObj.name);
    // findIndex return first occurence value
    if(index === i){
        obj.push({
            name : currentObj.name,
            count : j,
        });
    }else{
        for(let a = 0; a < obj.length; a++){
            if(obj[a].name === currentObj.name){
                obj[a].count++;
                break;
            };
        };
    };
    return obj;
},[]);
// cl(newArr);

const templating = (arr) =>{
    let result = ``;
    newArr.forEach((ele,i) => {
        result += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${ele.name}</td>
                    <td>${ele.count}</td>
                </tr>
        `;
    });
    userDetails.innerHTML = result;
};
templating(newArr);

const color = () => {
    const td = [...document.querySelectorAll("#userDetails tr :last-child")];
    td.forEach(ele => {
        if(Number(ele.innerText) <= 3){
            ele.parentElement.style.backgroundColor = `red`;
        }else if(Number(ele.innerText) > 3 && Number(ele.innerText) <= 7){
            ele.parentElement.style.backgroundColor = `orange`;
        }else if(Number(ele.innerText) > 7 && Number(ele.innerText) <= 10){
            ele.parentElement.style.backgroundColor = `green`;
        };
    });
};
color();