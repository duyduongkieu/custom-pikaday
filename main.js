$(document).ready(function() {
  var pickerS = new Pikaday({
    field: document.getElementById('startDate'),
    minDate: new Date(),
    format: 'DD/MM/YYYY'
  });

  var pickerED = new Pikaday({
    field: document.getElementById('endDate'),
    // minDate  : new Date(array[2], array[1] - 1 , array[0] + 1),
    format: 'DD/MM/YYYY'
  });
  $(document).on('focus', '#endDate', function(e) {
    var dateIp = $('#startDate').val();
    console.log(dateIp);
    var arraySt = dateIp.split('/');

    var array = arraySt.map(x => +x);
    console.log(array);
    var n = new Date(array[2], array[1] - 1, array[0] + 1);
    console.log(n);
    if (n != 'Invalid Date') {
      pickerED.setMinDate(n);
    }

    //  }
  });
  // ...............................fix pikaday smart................................
  // ...
  var Ip = $('.datepicker');

  //tab vs blur
  Ip.on('keypress', function(e) {
    if (Ip.val().length + 1 == 8 || Ip.val().length + 1 == 7) {
      Ip.on('blur', function() {
        var valueIp = Ip.val();
        // var date = new Date();
        var str = valueIp.substring(4, 8);
        var numb = parseInt(str);
        if (numb < 1930) {
          Ip.val('');
        }
      });
    }

    // enter
    if (e.which == 13) {
      if (Ip.val().length == 7) {
        Ip.val('');
      } else if (Ip.val().length == 8) {
        console.log(Ip.val().length);
        var valueIp = Ip.val();
        var date = new Date();
        var str = valueIp.substring(4, 8);
        var numb = parseInt(str);
        if (numb < 1930) {
          // Ip.val(date.getDate());
          Ip.val('');
        }
      }
    }
  });
});
