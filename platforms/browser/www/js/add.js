request.onerror = function (event) {
    console.log('error: ');
};
request.onsuccess = function (event) {
    db = request.result;
};



//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_value_formval

    // request.onsuccess = function (event) {
    //     db = request.result;
    //     var urlParams = new URLSearchParams(window.location.search);
    //     var logID = urlParams.get('id');
    //     var requester = db.transaction(["RestaurantDB"], "readonly").objectStore("RestaurantDB").get(logID);
    //     requester.onsuccess = function (event) {
    //         var r = requester.result;
    //         if (r != null) {
    //             $('#submit').val('edit');
    //             $('#r-id').val(r.id);
    //             $('#r-name').val(r.name);
    //             $('#r-type').val(r.type);
    //             $('#r-picture').val(r.picture);
    //             $('#food-r').val(r.food);
    //             $('#service-r').val(r.service);
    //             $('#clean-r').val(r.clean);
    //             $('#r-date').val(r.date);
    //             $('#r-time').val(r.time);
    //             $('#note').val(r.note);
    //             $('#reporter').val(r.reporter);
    //         } else {
    //             alert('Record Does not exist');
    //         }
    //     };
    // };


$(document).ready(function () {
    $('.add-row').click(function () {
        var id = $('#r-id').val();
        var name = $('#r-name').val();
        var picture =  $('#r-picture')[0].files[0];
        // console.log(picture);
        var type = $('#r-type').val();
        var date = $('#r-date').val();
        var time = $('#r-time').val();
        var price = $('#r-price').val();
        var service = $('#service-r').val();
        var clean = $('#clean-r').val();
        var food = $('#food-r').val();
        var note = $('#note').val();
        var reporter = $('#reporter').val();
        add(id, name, picture, type, date, time, price, service, clean, food, note, reporter);

    });
});


//var preview = document.querySelector('img');
// function previewFile() {
//    const preview = document.querySelector('img');
//     const file = document.querySelector('input[type=file]').files[0];
//     const reader = new FileReader();
//
//     reader.addEventListener("load", function () {
//         // convert image file to base64 string
//         preview.src = reader.result;
//     }, false);
//
//     if (file) {
//         reader.readAsDataURL(file);
//     }
// }

function add(idRestaurant, nameRestaurant, pictureRestaurant, typeRestaurant, dateVisit, timeVisit, pricePerOne,
             serviceRating, cleanRating, foodRating, Note, Reporter) {

    console.log("add", pictureRestaurant);
    //let file = pictureRestaurant;
    var reader = new FileReader();
    reader.readAsBinaryString(pictureRestaurant);
    var bits;
    reader.onload = function (e){
        bits = e.target.result;

        var request = db
            .transaction(['RestaurantDB'], 'readwrite')
            .objectStore('RestaurantDB')
            .add({
                id: idRestaurant, name: nameRestaurant, picture: bits, type: typeRestaurant, date: dateVisit, time: timeVisit, price: pricePerOne,
                service: serviceRating, clean: cleanRating, food: foodRating, note: Note, reporter: Reporter
            });

        request.onsuccess = function (event) {
            alert(`${nameRestaurant}  has been added to your database.`);
          //  window.location.href='view.html';
            reload();
        };
        request.onerror = function (event) {
            alert(
                `Unable to add data\r\n ${idRestaurant} is already exist in your database! `
            );
        };

    }
}




