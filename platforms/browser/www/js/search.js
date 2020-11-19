
$(document).ready(function () {
    $('#txtSearch').change(function () {
        search();
    });
})

function search() {
    document.getElementById("viewSearch").innerHTML ="";
    var search = document.getElementById("txtSearch").value;
    var typeSearch = document.getElementById("typeSearch").value;
    if (search!="")
    {
        var objectStore = db.transaction('RestaurantDB').objectStore('RestaurantDB');
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                var dataSearch = cursor.value[typeSearch]
                if(dataSearch.includes(search)){
                    var pItem = document.createElement('p');
                    pItem.innerHTML = `<p>Restaurant:${cursor.value.name}</p>`;
                    $(".viewSearch").append(pItem);
                }
                else {
                    console.log("error");
                }
                cursor.continue();
            }
        }
    }
}
