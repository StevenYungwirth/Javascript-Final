$(function() {
  $('form').validate({
    errorPlacement: function(err, ele) {
      ele.parent().append("<br>")
      if ($(ele).hasClass('instruments')) {
        err.appendTo(ele.parent().parent().parent());
      }
      else {
        err.appendTo(ele.parent());
      }
    },

    success: function(label) {
      label.parent().removeClass("errorParent");
    },

    highlight: function(ele) {
      $ele = $(ele);
      $ele.parent().addClass("errorParent");
      $ele.parent().find(".error").fadeOut(function() {
        $(this).fadeIn();
      })
    },

    rules: {
      fname: {
        required: true,
        minlength: 2
      },
      lname: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      book: {
        required: true
      },
      dreamoptions: {
        required: true
      },
      pie: {
        required: true
      },
      food: {
        required: true
      },
      'instruments[]': {
        required: true,
        minlength: 2
      },
      life: {
        required: true
      }
    },

    messages: {
      fname: {
        required: 'Please enter your first name',
        minlength: 'Your name needs to be at least two letters long'
      },
      lname: {
        required: 'Please enter your last name',
        minlength: 'Your name needs to be at least two letters long'
      },
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      book: {
        required: 'Please enter the name of your favorite book'
      },
      dreamoptions: {
        required: 'Please select one of the three options'
      },
      pie: {
        required: 'Please select your favorite type of pie'
      },
      food: {
        required: 'Please select your favorite food group'
      },
      'instruments[]': {
        required: 'Please select the instruments you would like to know how to play',
        minlength: 'Please select at least two instruments'
      },
      life: {
        required: 'Please enter your life story. All of it.'
      }
    }
  });
});
