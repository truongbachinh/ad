request.onerror = function (event) {
    console.log('error: ');
};
request.onsuccess = function (event) {
    db = request.result;
};



    //
    // console.log("request", request);
    // request.onsuccess = function (event) {
    //     db = request.result;
    //
    //     var urlParams = new URLSearchParams(window.location.search);
    //     var logID = urlParams.get('id');
    //
    //
    //     alert(logID);
    //
    //     var requester = db.transaction(["RestaurantDB"], "readonly").objectStore("RestaurantDB").get(logID);
    //
    //     requester.onsuccess = function (event) {
    //         var r = requester.result;
    //         if (r != null) {
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

// document.querySelector('#r-picture').addEventListener('change', doFile);
// function doFile(e) {
//     console.log('change event fired for input field');
//     let file = e.target.files[0];
//     var reader = new FileReader();
//     //              reader.readAsDataURL(file);
//     reader.readAsBinaryString(file);
//
//     reader.onload = function (e) {
//         alert(e.target.result);
//         let bits = e.target.result;
//         let trans = db.transaction(['RestaurantDB'], 'readwrite');
//         let addReq = trans.objectStore('RestaurantDB').add({picture: bits});
//         addReq.onerror = function (e) {
//             console.log('error storing data');
//             console.error(e);
//         }
//         trans.oncomplete = function (e) {
//             console.log('data stored');
//         }
//     }
// }

$(document).ready(function () {
    $('.add-row').click(function () {
        var id = $('#r-id').val();
        var name = $('#r-name').val();
        var picture = $('#r-name').val();
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





function add(idRestaurant, nameRestaurant, pictureRestaurant, typeRestaurant, dateVisit, timeVisit, pricePerOne,
             serviceRating, cleanRating, foodRating, Note, Reporter) {

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
    location.reload();

}




