
    function myFunction(label) {
    $('.helper').removeClass("yordamchi"); // Remove 'yordamchi' class from all labels
    $(label).addClass("yordamchi"); // Add 'yordamchi' class to the clicked label
}




    $('.inp').on('change', function(e, a){
    var index = $(this).index()
    $(".all-main-sections .all-content").removeClass("active")
    $(".all-main-sections .all-content").eq(index).addClass("active")
})


