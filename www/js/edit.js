request.onsuccess = function (event) {
    db = request.result;
    var urlParams = new URLSearchParams(window.location.search);
   if(urlParams!=null){
    var logID = urlParams.get('id');
    var requester = db.transaction(["RestaurantDB"], "readonly").objectStore("RestaurantDB").get(logID);
    requester.onsuccess = function (event) {
        var r = requester.result;
        if (r != null) {
            $('#submit').val('edit');
            $('#r-id').val(r.id);
            $('#r-name').val(r.name);
            $('#r-type').val(r.type);
            $('#r-picture').val(r.picture);
            $('#food-r').val(r.food);
            $('#service-r').val(r.service);
            $('#clean-r').val(r.clean);
            $('#r-date').val(r.date);
            $('#r-time').val(r.time);
            $('#note').val(r.note);
            $('#reporter').val(r.reporter);
        } else {
            alert('Record Does not exist');
        }
        $('#submit').click(function () {
            // request.result.idRestaurant = id;
            // request.result.nameRestaurant = name;
            // request.result.pictureRestaurant = picture;
            // request.result.typeRestaurant = type;
            // request.result.dateVisit = date;
            // request.result.timeVisit = time;
            // request.result.pricePerOne = price;
            // request.result.serviceRating = service;
            // request.result.cleanRating = clean;
            // request.result.foodRating = food;
            // request.result.Note = note;
            // request.result.Reporter = reporter;
            // objectStore.put(request.result);
            alert('Recored Updated Successfully !!!');
        })
    };
};
}
