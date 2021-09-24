$(document).ready(function () {
    $('input[type=checkbox]').on('change', function() {
        if ($(this).is(':checked') ) {
            console.log("Checkbox " + $(this).prop("id") +  " (" + $(this).val() + ") => Seleccionado" );
        } else {
            console.log("Checkbox " + $(this).prop("id") +  " (" + $(this).val() + ") => Deseleccionado");
        }
    });
});
