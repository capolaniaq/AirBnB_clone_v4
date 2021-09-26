$(document).ready(function () {
    const url = "http://localhost:5001/api/v1/status/"
    let i = 0;
    let a_list = [];

    $.get(url, function (data) {
      if (data.status === 'OK') {
        $("#api_status").addClass("available");
      } else {
        $("#api_status").removeClass("available");
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
