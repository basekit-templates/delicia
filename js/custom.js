 // Nav
$( ".navigation-toggle" ).click(function() {
    $( ".bk-extendednavigation" ).toggleClass( "open" ); // Toggles class open to display/hide the whole navigation
    $( "body" ).toggleClass( "noscroll" ); // Toggles class open to add noscroll to body
});

// Blog Search
$( ".header-search-icon" ).click(function() {
    $( "body" ).toggleClass( "noscroll blogsearch-open" ); // Add noscroll and blogsearch-open to body
});
