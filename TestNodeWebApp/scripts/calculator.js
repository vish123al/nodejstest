
$(document).ready(function () {
    $('.pure-button').click(function () {
    //execute calculation
        var clickedButton = $(this)[0];

        var text = clickedButton.innerHTML;

        $('#calculation').val($('#calculation').val() + text);
        executeServerCalculation();
    });

    $('#calculation').change(function () {
        
        executeServerCalculation();
    });


});

function executeServerCalculation() {
    var calculation = $('#calculation').val();
    calculation = calculation.replace('x', '*');
    $.ajax({
        url: 'http://localhost:1337/',
        contentType: 'application/json',
        data: '{"data": "' + calculation + '"}',
        type: 'POST',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function (data) {
            var ret = jQuery.parseJSON(data);

            if (ret.success) {
                $('#result').val(ret.result);
                $('#message').html("Success");
            }
            else $('#message').html("Error: " + ret.result);
            //console.log('Success: ')
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);          
        },
    });
}