/* comments for list view */
// $(()=> {



//     $('#alertDiv').hide();

//    /* attach a submit handler to the form */
//    $("#addUserForm").submit(function(event) {
//     console.log(`inside submit`)

//  /* stop form from submitting normally */
//  event.preventDefault();

//  /* get some values from elements on the page: */
//  let $form = $(this)
//  let name = $('#name').val()
//  let email = $('#email').val()
//  let url = $form.attr('action');

//  /* Send the data using post */
//  console.log(name, email, url)
 
//     $.post(url, {
//         name: name,
//         email: email
//     }, (data, status, xhr) => {
//          if (status == "success") {
//             console.log(data);
//             console.log(status);
//             $("#listGroup").prepend('<li class="list-group-item" >Name: <b>' + data.name + '</b> <br> Email: <b>' + data.email + '</b> </li>');
//             // Reset form input after successfull submission
//             $('#addUserForm').each(function () {
//                 this.reset();
//                 $('#alertDiv').show().text('User '+ data.name +' added successfully!').fadeOut(8000)
//             });

//         }

//     });


// });

//   $.get('/allUsers',(users, status, xhr)=>{
//     if(users) {
//         console.log(users);
//         $.each(users, (key,obj)=>{
//           console.log(key);
//           console.log(obj);
//           $("#listGroup").prepend('<li class="list-group-item" >Name : <b>'+ obj.name + '</b> <br> Email : <b>'+ obj.email +'</b> </li>');
//         })
//     }
      
//   })

//   $(document).ready(function()
//     {
//         $(".delete_video").click(function()
//         {
//             var del_id = $(this).attr('id');
//             $.ajax({
//                 type:'POST',
//                 url:'delete.php',
//                 data:'delete_id='+del_id,
//                 success: function(data)
//                 {
//                     //reload page
//                     location.reload();
//                 }
//             });
//         });
//     });

// })

$(()=> {

    $('#alertDiv').hide();

   /* attach a submit handler to the form */
   $("#addUserForm").submit(function(event) {
    console.log(`inside submit`)

 /* stop form from submitting normally */
 event.preventDefault();

 /* get some values from elements on the page: */
 let $form = $(this)
 let name = $('#name').val()
 let email = $('#email').val()
 let url = $form.attr('action');

 /* Send the data using post */
 console.log(name, email, url)
 
    $.post(url, {
        name: name,
        email: email
    }, (data, status, xhr) => {
         if (status == "success") {
            console.log(data);
            console.log(status);
            $("#tableGroup").append('<td class="table-group-item" > ' + data.name + ' </td> <td> ' + data.email + '</td> <td> <button class="btn btn-primary edit"type="button"> Edit </button> </td> <td> <button class="btn btn-danger remove" type="button">Remove</button> </td> ');
            // Reset form input after successfull submission
            $('#addUserForm').each(function () {
                this.reset();
                location.reload('/')
                $('#alertDiv').show().text('User '+ data.name +' added successfully!').fadeOut(8000)
            });

        }

    });


});

  $.get('/allUsers',(users, status, xhr)=>{
    if(users) {
        console.log(users);
        $.each(users, (key,obj)=>{
            
            console.log(key);
            console.log(obj.name); 

            $("#tblOne > tbody").append('<tr> <td>'+obj.name+'</td><td>'+ obj.email+'</td><td> <button class="btn btn-primary edit" id="'+obj._id+' " type="button">Edit</button></td><td><button class="btn btn-danger remove" id="'+obj._id+' "type="button">Remove</button></td></tr>');
        
     
        })
        
    }
      
  })

  // jQuery button click event to edit a row. 
  $('#tblOne').on('click', '.edit', function (e) {
//      alert(e.target.id);
      $.get(`/editUser/${e.target.id}`,(user,status,xhr)=>{
       // console.log(user);
        if(user){
             $('#name').val(user.name)
             $('#email').val(user.email)

             // Change text of button element
            $("#head").html("EDIT USER");
           
            
             // Change text of button element
            $("#addUser").html("UPDATE");
           
        }
      })
  })

  // jQuery button click event to remove a row. 
  $('#tblOne').on('click', '.remove', function (e) {
    console.log(e.target.id);
    console.log(e.target.name);

   alert('Are you sure you want to delete:'+ e.target.name)

    $.get(`/deleteUser/${e.target.id}`,(response,status,xhr)=>{
        console.log(response);
        if(response){
            location.reload('/')
        }
    })
  })
  
})

 
 