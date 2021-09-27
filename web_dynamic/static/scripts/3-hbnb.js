$(document).ready(function () {
    const url = "http://localhost:5001/api/v1/status/"
    const url2 = 'http://localhost:5001/api/v1/places_search/';
    let i = 0;
    let a_list = [];

    $.get(url, function (data) {
      if (data.status === 'OK') {
        $("#api_status").addClass("available");
      } else {
        $("#api_status").removeClass("available");
      }
    });

   $.ajax({
       type: 'POST',
       url: url2,
       data: '{}',
       dataType: 'json',
       contentType: 'application/json',
       success: function (data) {
        for (let i = 0; i < data.length; i++) {
            let place = data[i];
            $('.places').append('<article><div class="title_box"><h2>\
            ' + place.name + '</h2><div class="price_by_night">$\
            '+ place.price_by_night + '</div></div><div class="information">\
            <div class="max_guest">' + place.max_guest + '</div>\
            <div class="number_rooms">' + place.number_rooms + '</div>\
            <div class="number_bathrooms">' + place.number_bathrooms + ' </div>\
            </div><div class="user"><b>Owner:</b>' + place.user + '</div>\
            <div class="description">' + place.description + '</div></article>');
        }
        }

    });

    $('input[type=checkbox]').on('change', function() {
        if ($(this).is(':checked') ) {
            i++;
            a_list.push({key:$(this).prop("id"), value:$(this).prop("name")});
        } else {
            for (let j = 0; j < a_list.length; j++) {
                if (a_list[j].key === $(this).prop("id")) {
                    a_list.splice(j, 1)
                }
            }
            i--;
        }
        if (i === 0) {
            $('.amenities_text').html("&nbsp;");
        }
        else {
            let a_string = "";
            for (let j = 0; j < a_list.length; j++)
            {
                if (j > 0) {
                    a_string += ", "
                }
                a_string += a_list[j].value;
            }
            $('.amenities_text').text(a_string);
        }
    });
});
