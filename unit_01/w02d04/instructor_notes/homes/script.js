$(function () {

    // Swaps out the 'btn-danger' and 'btn-success' classes on the #addHome button
    $('#addHome').removeClass('btn-danger').addClass('btn-success');

    // Creates a jQuery Object that wraps a brand new link tag
    var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>');

    // Adds the $newLink from above after the header
    var $header = $('#header');
    $newLink.insertAfter($header);

    // Adds the $newLink from above at the end of the body
    var $body = $('body');
    $newLink.appendTo('body');

    // Adds a click event handler to the #addHome button
    $('#addHome').on('click', function ($event) {
        alert($event);
        console.log(this);
    });

    // Pops a message that a row is about to be deleted when ANY of the table rows are clicked
    // Then fades the row out for 50 milliseconds before removing it entirely
    $('#homes tbody').on('click', 'tr', function () {
        alert('You are about to delete this row.');
        $(this).fadeOut(1500, function() {
            $(this).remove();
        });
    });

  var newHomes = [
      {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
      {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
      {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
      {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
    ];

  $('#addHome').on('click', function() {

    newHomes.forEach(function(home) {

      console.log(home.address)
      var homeAddress = "<tr><td>" + home.address + "</td>";
      var homeSf = "<td>" + home.sf + "</td>";
      var homeBedrooms = "<td>" + home.bedrooms + "</td>";
      var homeBaths = "<td>" + home.baths + "</td>";
      var homePrice = "<td>" + home.price + "</td></tr>";
      var button = "<button class="btn btn-xs btn-danger">Remove</button>";
      var homeCompleted = "homeAddress + homeSf + homeBedrooms + homeBaths + homePrice + button";

      $('tbody').append(homeCompleted);

    });
});
