function deleteItem(event) {
    var dataDelete = event.target.getAttribute('data-delete');
    var transaction = db.transaction(["RestaurantDB"], "readwrite");
    var request = transaction.objectStore("RestaurantDB").delete(dataDelete);
    transaction.oncomplete = function() {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    };
};
