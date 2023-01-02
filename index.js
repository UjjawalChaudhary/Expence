const experiment =document.getElementById('exp');
const descrption =document.getElementById('desc');
const category =document.getElementById('cat');
const ul=document.getElementById('list');
const apiul=document.getElementById("get_result");

const btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    
    //console.log("singh is king");
   // readdata(ele);
    const data=getvalue();
    //console.log(data);
   var ele= settolocalstorage(data);
    //console.log(ele);
    //readdata(ele);
    readdata(ele);
});
//readdata();
let data=axios.get("https://crudcrud.com/api/8a6982bf1591484a9f037e8d99a16e13/student")
    .then((response)=>
          {console.log(response)
            for(let i=0;i<=response.length;i++)
               {
          document.getElementById("get_result").innerHTML=document.getElementById("get_result").innerHTML+response[i]._id+` &nbsp`+response[i].exp+` &nbsp`+response[i].des+` &nbsp`+response[i].cat+` &nbsp &nbsp &nbsp<input type="button"  onclick="editvalueofapi('${response[i].exp}','${response[i].des}','${response[i].cat}','${response[i]._id}',this)" value="edit expense" id="edit" class="btn btn-primary"/><input type="button" value="delete expense"  onclick="deletelistfromapi('${response[i]._id}',this)"  id="del" class="btn btn-danger"/> <br>`;
               }
          
          })
    .catch((err)=>console.log(err));
    
    console.log(data);




function getvalue()
{
    var exp=experiment.value;
    var des=descrption.value;
    var cat=category.value;
    
  const arr=[exp,des,cat];
    const obj={
        exp,des,cat
    };
    axios.post("https://crudcrud.com/api/8a6982bf1591484a9f037e8d99a16e13/student",obj)
    .then((response)=>{
        console.log(response);
        console.log("post ho gaya");
    })
    .catch((err)=>console.log(err));
    return arr;
    
    
    
}
function settolocalstorage(data)
{
    var a=localStorage.setItem('exp',data[0]);
    var b=localStorage.setItem('des',data[1]);
    var c=localStorage.setItem('cat',data[2]);
    
    var n1=localStorage.getItem('exp',a);
    var n2=localStorage.getItem('des',b);
    var n3=localStorage.getItem('cat',c);
    
    var ele_arr=[n1,n2,n3];
    return ele_arr;
    
}
function readdata(ele)
{
    const list=document.createElement('li');
    
    
//    list.innerHTML=`${ele[0]}  ${ele[1]} &nbsp ${ele[2]} &nbsp  <input type="button"  onclick="editvalue(${ele[0]},${ele[1]},${ele[2]}',this)" value="edit expense" id="edit"/><input type="button" value="delete expense"  onclick="deletelist(this)"  id="del"/> `;
//    ul.append(list);
    
    axios.get("https://crudcrud.com/api/8a6982bf1591484a9f037e8d99a16e13/student")
    .then((response)=>
          {console.log(response)
          
                      for(let i=0;i<response.length;i++)
                          {
//                   list.innerHTML=`${response[i].exp} &nbsp${response[i].des} &nbsp${response[i].cat} &nbsp &nbsp &nbsp  
                 list.innerHTML=`${ele[0]}  ${ele[1]} &nbsp ${ele[2]} &nbsp  
<input type="button"  onclick="editvalueofapi('${response[i].exp}','${response[i].des}','${response[i].cat}','${response[i]._id}',this)" value="edit expense" id="edit" class="btn btn-primary"/>
                <input type="button" value="delete expense"  onclick="deletelist(this),deletelistfromapi('${response[i]._id}')"  id="del"/> `;
    ul.append(list);
                   console.log("get ho gaya");
                   }
////         <input type="button"  onclick="editvalueofapi('${response[i].exp}','${response[i].des}','${response[i].cat}','${response[i]._id}',this)" value="edit expense" id="edit" class="btn btn-primary"/><input type="button" value="delete expense"  onclick="deletelistfromapi('${response[i]._id}',this)"  id="del" class="btn btn-danger"/> <br>`;
              
          
          
                    })
    .catch((err)=>console.log(err));
    
}
function editvalue(e1,e2,e3,ele)
{
   // var val=e.parentElement;
    //console.log(e1,e2,e3);
    experiment.value=e1;
    descrption.value=e2;
    category.value=e3;
    
    deletelist(ele);
    
    
}
function deletelistfromapi(ele)
{
    axios.delete(`https://crudcrud.com/api/8a6982bf1591484a9f037e8d99a16e13/student/${ele}`)
    .then((response)=>{
     console.log("delte ho gaya")})
    .catch((err)=>{console.log(err);console.log("error aa raha h")});

}
function editvalueofapi(e1,e2,e3,id,e)
{

    experiment.value=e1;
    descrption.value=e2;
    category.value=e3;
    deletelistfromapi(id);
    deletelist(e)
//    axios.patch("https://crudcrud.com/api/462577cc550640988ab8bc74e2ca6367/student/${}")
//     .then((response)=>console.log(response))
//        .catch((err)=>console.log(err));
}
function deletelist(e)
{
        var del_list=e.parentElement;
        //console.log(del_list);
      del_list.style.display='none';
}




   

