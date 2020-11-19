request.onerror = function (event) {
    console.log('error: ');
};
request.onsuccess = function (event) {
    db = request.result;
};
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_value_formval
$(document).ready(function () {

    $('#r-picture').change(function (){
        previewFile();
    });
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



function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function add(idRestaurant, nameRestaurant, pictureRestaurant, typeRestaurant, dateVisit, timeVisit, pricePerOne,
             serviceRating, cleanRating, foodRating, Note, Reporter) {

    // console.log("add", pictureRestaurant);
    // var reader = new FileReader();
    // reader.readAsBinaryString(pictureRestaurant);
    // reader.onload = function (e){
    //   bits = e.target.result;
    //
    // }
    var request = db
        .transaction(['RestaurantDB'], 'readwrite')
        .objectStore('RestaurantDB')
        .add({
            id: idRestaurant, name: nameRestaurant, picture: pictureRestaurant, type: typeRestaurant, date: dateVisit, time: timeVisit, price: pricePerOne,
            service: serviceRating, clean: cleanRating, food: foodRating, note: Note, reporter: Reporter
        });
    request.onsuccess = function (event) {
        alert(`${nameRestaurant}  has been added to your database.`);
        reload();
    };
    request.onerror = function (event) {
        alert(
            `Unable to add data\r\n ${idRestaurant} is already exist in your database! `
        );
    };
}




