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
            $("#listGroup").prepend('<li class="list-group-item" >Name: <b>' + data.name + '</b> <br> Email: <b>' + data.email + '</b> </li>');
            // Reset form input after successfull submission
            $('#addUserForm').each(function () {
                this.reset();
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
          console.log(obj);
          $("#listGroup").prepend('<li class="list-group-item" >Name : <b>'+ obj.name + '</b> <br> Email : <b>'+ obj.email +'</b> </li>');
        })
    }
      
  })

  $(document).ready(function()
    {
        $(".delete_video").click(function()
        {
            var del_id = $(this).attr('id');
            $.ajax({
                type:'POST',
                url:'delete.php',
                data:'delete_id='+del_id,
                success: function(data)
                {
                    //reload page
                    location.reload();
                }
            });
        });
    });

})

 