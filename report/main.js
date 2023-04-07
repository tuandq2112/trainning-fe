const data = [
    {
       id: "35",
       first: "Jane",
       last: "Smith",
       email: "js@gmail.com",
       phone: "503-555-5555",
       location: "Portland,Oregon",
       hobby: "Photography",
    },
 {
       id:"36",
       first: "Tristan",
       last: "Rodriguez",
       email: "tr@gmail.com",
       phone: "201-555-5555",
       location: "New York, New York",
       hobby: " ",},
 {
       id: "37",
       first: "Andrea",
       last: "Jones",
       email: "aj@gmail.com",
       phone: "503-555-5555",
       location: "Portland,Oregon",
       hobby: "Programming",},
 
 {
       id: "38",
       first: "Ellott",
       last: "Richardson",
       email: "er@gmail.com",
       phone: " ",
       location: "Boise, Idaho",
       hobby:" ",},
    {
       id: "39",
       first: "June",
       last: "Bug",
       email:"jb@gmail.com",
       phone: " ",
       location:" ",
       hobby: "cooking",
    },
 ];
 
    const dataSource= document.getElementById('data-table');
    const jone=data.map(function(item, index){
       (item, index)=>
       `<tr>
       <td>$(index + 1)</td>
       <td>$(item.first)</td>
       <td>$(item.last)</td>
       <td>$(item.email)</td>
       <td>$(item.phone)</td>
       <td>$(item.location)</td>
       <td>$(item.hobby)</td>
       <td><button class="edit">Edit</td>
       <td><button class="del">Edit</td>
       </tr>`
       
 });
 dataSource.innerHTML = jone.join('');
 