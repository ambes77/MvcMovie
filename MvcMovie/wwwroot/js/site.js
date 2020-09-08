// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$('.nav-item').on('click', function (e) {
    $('.nav-item').removeClass('active');
    console.log(e);
    $(e.currentTarget).addClass('active')
});
