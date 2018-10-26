// $(document).ready(function() {
//   $('#startDate').on('blur', function() {
//     if ($('#startDate').val().length > 0) {
//       var d = new Date('10-31-2018');
//       var nd = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
//       var arraySt = $('#startDate')
//         .val()
//         .split('/');
//       console.log(arraySt);
//       var array = arraySt.map(x => +x); //map  phần tử của mảng là string  thành các phần tử number
//       var n = new Date(array[2], array[1], array[0] + 1);
//       $('#endDate').value =
//         n.getDate() + '/' + n.getMonth() + '/' + n.getFullYear();
//     }
//   });
// });
