    request.onerror = function (event) {
        console.log('error: ');
    };
    request.onsuccess = function (event) {
        db = request.result;
        displayData();
    };


    function displayData(idRestaurant, nameRestaurant,pictureRestaurant, typeRestaurant,dateVisit, timeVisit,pricePerOne,serviceRating,
                         cleanRating,foodRating,Note,Reporter) {
        var objectStore = db.transaction('RestaurantDB').objectStore('RestaurantDB');
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;

            if (cursor) {
                var liItem = document.createElement('li');
                idRestaurant = cursor.value.id;
                nameRestaurant = cursor.value.name;
                typeRestaurant = cursor.value.type;
                dateVisit = cursor.value.date;
                timeVisit = cursor.value.time;
                pricePerOne = cursor.value.price;
                serviceRating = parseInt(cursor.value.service);
                cleanRating = parseInt(cursor.value.clean);
                foodRating = parseInt(cursor.value.food);
                Note = cursor.value.note;
                Reporter = cursor.value.reporter;

                pictureRestaurant = "<img width='100px' height='100px' src='"+
                    'data:image/jpeg;base64,' + btoa(cursor.value.picture)+
                    "'/>";
                var totalRating = Math.round((cleanRating + foodRating +serviceRating)/3);

                liItem.innerHTML = `<p>Restaurant: ${nameRestaurant}</p><p class class="fa fa-star checked">Rating: ${totalRating}</p><p>Reporter: ${Reporter}</p></p><p>${pictureRestaurant}</p>`;

                var deleteButton = document.createElement('button');
                var editButton = document.createElement('button')

                deleteButton.innerHTML = `<tr><td>X</td></tr>`;
                editButton.innerHTML = `<tr><td>Edit</td></tr>`

                liItem.appendChild(deleteButton);
                liItem.appendChild(editButton);
                // here we are setting a data attribute on our delete button to say what task we want deleted if it is clicked!
                deleteButton.setAttribute('data-delete', cursor.value.id);
                editButton.setAttribute('data-edit', cursor.value.id);
                deleteButton.onclick = function(event) {
                    deleteItem(event);
                }
                editButton.onclick = function(event){
                    editItem(event);
                }

                ulItem.appendChild(liItem);

                cursor.continue();}

            else {
                console.log("error");

            }


        }

    }

    function editItem(event) {
        var idEdit = event.target.getAttribute('data-edit');
        location.href= ('add.html?id='+idEdit)
        }


    function deleteItem(event) {
        // retrieve the name of the task we want to delete
        var dataDelete = event.target.getAttribute('data-delete');

        // open a database transaction and delete the task, finding it by the name we retrieved above
        var transaction = db.transaction(["RestaurantDB"], "readwrite");
        var request = transaction.objectStore("RestaurantDB").delete(dataDelete);

        // report that the data item has been deleted
        transaction.oncomplete = function() {
            // delete the parent of the button, which is the list item, so it no longer is displayed
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        };
    };

