function saveData()
{
let article_name,author_name,description;
article_name=document.getElementById("article_name").value;
author_name=document.getElementById("author_name").value;

description=document.getElementById("description").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  user_records.push
  ({
                "article_name":article_name,
                "author_name":author_name,
                "description":description
})
localStorage.setItem("users",JSON.stringify(user_records));
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px;">'+user_records[i].article_name+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].author_name+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].description+'</div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
}