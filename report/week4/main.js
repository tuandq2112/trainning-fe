const data = [
    {
       id: 35, 
       first: "Jane",
       last:"Smith",
       email:"js@gmail.com",
       phone:"503-555-5555",
       location:"Porland, Oregon",
       hobby:"Photography"
    },

    {
        id: 36, 
        first: "Tristan",
        last:"Rodriguez",
        email:"tr@gmail.com",
        phone:"201-555-5555",
        location:"New York, New York"
     },

     {
        id: 37, 
        first: "Andrea",
        last:"Jones",
        email:"aj@gmail.com",
        phone:"503-555-5555",
        location:"Porland, Oregon",
        hobby:"Programming"
     },

     {
        id: 38, 
        first: "Elliott",
        last:"Richardson",
        email:"er@gmail.com",
        location:"Boise, Idaho",
       
     },

     {
        id: 39, 
        first: "June",
        last:"Bug",
        email:"jb@gmail.com",
        hobby:"Cooking"
     },

     

]

function deleteRow(r) {
    let i = r.parentNode.parentNode;
    i.parentNode.removeChild(i);
}


function add() {
    let table = document.getElementById("table1");
    let table_len = table.rows.length;
    
    var row = table.insertRow(table_len).outerHTML=
    `<tr>
        <td id='ID_row${table_len}'>${table_len-4}</td>
        <td id='first${table_len}'>${document.getElementById("FIRST").value}</td>
        <td id='last${table_len}'>${document.getElementById("LAST").value}</td>
        <td id='email${table_len}'>${document.getElementById("EMAIL").value}</td>
        <td id='phone${table_len}'>${document.getElementById("PHONE").value}</td>
        <td id='location${table_len}'>${document.getElementById("LOCATION").value}</td>
        <td>
            <input type='button' id='edit${table_len}' value='Edit' class='edit' onclick='edit(${table_len})'> 
            <input type='button' id='save${table_len}' value='Save' class='save' onclick='save(${table_len})'> 
            <input type='button' value='Del' class='delete' onclick='deleteRow(this)'>
        </td>
    </tr>`;



}

// fetch("data.text")
// .then(x => x.text())
// .then(y => udata(y));

function udata(sdata) {
    document.getElementById("table1").innerHTML = sdata
        .map((item, index) => `<tr>
            <td>${index + 1}</td>
            <td id = "first${index}">${item.first}</td>
            <td id = "last${index}">${item.last}</td>
            <td id = "email${index}">${item.email}</td>
            <td id = "phone${index}">${item.phone}</td>
            <td id = "location${index}">${item.location}</td>
            <td class = "but">
                <input type="button" id="edit${index}" value="Edit" class="edit" onclick="edit(${index})">
                <input type="button" id="save${index}" value="Save" class="save" onclick="save(${index})">
                <input type="button" value="Del" class="delete" onclick="deleteRow(this)">
            </td>
        <tr> `

        )
        .join("");

}

udata(data);






function edit(no)
{
    document.getElementById("edit"+no).style.display="none";
    document.getElementById("save"+no).style.display="inline";
	
    let first=document.getElementById("first"+no);
    let last=document.getElementById("last"+no);
    let email=document.getElementById("email"+no);
    let phone = document.getElementById("phone"+no);
    let location = document.getElementById("location"+no);
	
    let first_data=first.innerHTML;
    let  last_data=last.innerHTML;
    let email_data=email.innerHTML;
    let phone_data = phone.innerHTML;
    let location_data= location.innerHTML;
	
    first.innerHTML="<input type='text' id='first_text"+no+"' value='"+first_data+"'>";
    last.innerHTML="<input type='text' id='last_text"+no+"' value='"+last_data+"'>";
    email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
    phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
    location.innerHTML="<input type='text' id='location_text"+no+"' value='"+location_data+"'>";


}

function save(no)
{
    let first_val=document.getElementById("first_text"+no).value;
    let last_val=document.getElementById("last_text"+no).value;
    let email_val=document.getElementById("email_text"+no).value;
    let phone_val=document.getElementById("phone_text"+no).value;
    let location_val=document.getElementById("location_text"+no).value;

    document.getElementById("first"+no).innerHTML=first_val;
    document.getElementById("last"+no).innerHTML=last_val;
    document.getElementById("email"+no).innerHTML=email_val;
    document.getElementById("phone"+no).innerHTML=phone_val;
    document.getElementById("location"+no).innerHTML=location_val;

    document.getElementById("edit"+no).style.display="inline";
    document.getElementById("save"+no).style.display="none";
}

