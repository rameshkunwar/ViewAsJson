function getData() {
    var myData = {
        id:1
    };
    $.ajax({
        url: "Home/GetData",
        type: 'POST',
        dataType: 'json',
        data: myData,
        success: function (data) {
            if (data.isValid && data.ItemsCount > 0) {
                $("#showResults").html(data.view);
         }
         else {
            $("#showResults").html(data.view);
        }
     },
error: function (xhr, status, error) {
    alert('Ajax error!');
}
 });
}