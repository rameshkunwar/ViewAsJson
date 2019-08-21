//function getData() {
//    var myData = {
//        id:1
//    };
//    $.ajax({
//        url: "Home/GetData",
//        type: 'POST',
//        dataType: 'json',
//        data: myData,
//        success: function (data) {
//            if (data.isValid && data.ItemsCount > 0) {
//                $("#showResults").html(data.view);
//         }
//         else {
//            $("#showResults").html(data.view);
//        }
//     },
//error: function (xhr, status, error) {
//    alert('Ajax error!');
//}
// });
//}

function getData() {
    var myData = {
        id: 1
    };

    getViewFromServer(myData).then(response => response.json()).then((message) => {
        console.log({message});
    })
        .catch((error) => {
            console.log({ error });
        });

    console.log("this log is after getViewFromServer method, that means, this should be executed after getting view");
    lastFunction();
}

const getViewFromServer = async (dataObj) => {
    const url = "Home/GetData";
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    });
    return response;
};

const lastFunction = () => {
    console.warn('this is the last function');
}