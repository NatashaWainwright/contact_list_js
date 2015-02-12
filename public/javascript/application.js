$(document).ready(function() {

  $('form').on('submit', function(e) {
      e.preventDefault();
      var contact_name = $('.name').val();
      var contact_city = $('.city').val();
      $('#contacts').append(contact_name);
      $('#contacts').append(contact_city);

      $.ajax({
          url: '/',
          method: 'post',
          dataType: 'json',
          contentType: 'json',
          data: JSON.stringify({
              name: contact_name,
              city: contact_city
          }),
          success: function(response) {
              console.log(response);
              console.log(JSON.stringify(response));
          },
      });

  });

});
