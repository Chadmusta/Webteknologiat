$(':checkbox').change(function() {
    var total = 0;
    $(':checkbox:checked').each(function() {
        total = total + parseInt( $(this).val(2) );
    });
    console.log(total);
});