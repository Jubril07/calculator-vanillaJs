var input = document.querySelector("#input");
// if (value==undefined) {
//     value=0;
// }else {
//     value+=value;
// }
let value = input.value;

function display(val) {
  value += val;
  console.log(value);
  // input.innerHTML='<b>'+ value + '</b>';
  input.value = value;
}
const equalTo = () => {
  // value=parseInt(value)
  input.value =
    eval(value) == isFinite(eval(value)) ? eval(value).toFixed() : eval(value);

  input.value = eval(value) == undefined ? "" : eval(value);
  value = "";
};
const clearInput = () => {
  input.value = "";
  value = "";
  console.log("cleared");
};
const del = () => {
  input.value = value.substr(0, value.length - 1);
  value = input.value;
};

// const percent=()=>{
//     let p=input.value/sd
// }
