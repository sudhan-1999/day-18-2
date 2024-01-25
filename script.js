
document.getElementById("btn").addEventListener("click",get_data);
async function get_data(){
  try{
var re = await fetch("https://dev.to/api/articles");
var res = await re.json();
console.log(res);
for(var i = 0; i <res.length; i++){
  var title = res[i].title;
  var date = res[i].readable_publish_date;
  var des = res[i].description;
  document.getElementById("result").textContent += ` The Title of the Article is ${title}`;
  document.getElementById("result").textContent += `The Published Date of the Article is ${date}`;
  document.getElementById("result").textContent += `${des}`;
}
}
catch{
console.log("erroe fetchig data..!");
}
}
