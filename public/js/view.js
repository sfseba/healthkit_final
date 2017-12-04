/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */

(function($) {

    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);

        // Iterate over each object in collection
        return this.each( function() {

            // Save a reference to the element
            var $this = $(this);

            // Set up Scroll Handler
            $(document).scroll(function(){

                    var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();

            // Check if above or below viewport
            if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                return;
            }

            var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                 // Apply the Y Background Position to Set the Parallax Effect
                $this.css('background-position', 'center ' + yBgPosition + 'px');

            });
        });
    }
}(jQuery));

$('#itemOne,#itemTwo').parallax({
    speed : 0.15
});

$('#itemThree').parallax({
    speed : 0.25
});

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.navbar-default').addClass("scrolled");
        $('.navbar-header').addClass("scrolled");
        $('.navbar-brand').addClass("scrolled");
        // $('.nav navbar-nav navbar-right').addClass("scrolled");

    }else{
        $('.navbar').removeClass("scrolled");
        $('.navbar-default').removeClass("scrolled");
        $('.navbar-header').removeClass("scrolled");
        $('.navbar-brand').removeClass("scrolled");
// $('.nav navbar-nav navbar-right').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$(function() {

    $('#login-form-link').click(function(e) {

		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
    $('#register-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});

// a5f55347784dc892f4738fc88bc99578195b5b33

// $(document).ready(function(){
//                 var scroll_start = 0;
//                 var startchange = $('#startchange');
//                 var offset = startchange.offset();
//                     if (startchange.length){
//                 $(document).scroll(function() {
//                     scroll_start = $(this).scrollTop();
//                     if(scroll_start > offset.top) {
//                           $(".navbar-default").css('background-color', '#ffffff');
//                        } else {
//                           $('.navbar-default').css('background-color', 'transparent');
//                        }
//                    });
//                     }
//                 });



//************************************
//js for search button 
//************************************

// $("#search-btn").on("click", function(event){
//     event.preventDefault();

//     var foodSearch = $("#food-search").val().trim();

//     $.get("/api" + foodSearch, function(data){
//         renderFood(data);
//     });
// });

// function renderFood(data){
//     if (data.length !==0){
//         $(".table").empty();
//         $(".table").show();

//         for (var i = 0; i < data.length; i++) {
//             var div = $("<div>");

//             div.append("<h2>" + data[i].food + "</h2>");
//             div.append("<h2>" + data[i].calories + "</h2>");

//             $(".table").append(div);
//         }

//         $(".delete").click(function(){
//             var info = {
//                 id:$(this).attr("data-id");
//             };

//             $.post(".api/delete", info)
//             .done(function(delData){
//                 console.log("deleted successfully");
//             });

//             $(this).closest("div").remove();
//         })
//     }
// }

$( document ).ready(function() {
    console.log( "ready!" );

$(document).on("click", "#search-btn", function(event){
    event.preventDefault();
    callApi(this.dataset.searchStringParam)
    console.log("click worked")
});

var authKey = "fbdHn9nhfMCQYtwg1bDsagboAdhOo2lKdaqCg0wy";

function callApi(searchStringParam) {
    console.log("function called")
    //var foodUrl = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=" + authKey + "&nutrients=208&ndbno=01009";
    var foodUrl = "https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=" + authKey;
    console.log(foodUrl);
    $.ajax({
        url: foodUrl,
        method: "GET",
        }).done(function(response){
            console.log(response);

            function addToUsda(response){
                var usdaList = $("#usda-list");
                $.each(response, function(idx, list) {
                  usdaList.append('<ul>' + response.list.item.name + '</ul>');
                });
            };

            addToUsda(response);


            // addToTable(response);
            // function addToTable(response){

            //  var tabl = $("#food-table");

            //  tabl.append(
            //       '<tr>' + 
            //           '<td>' + response.report.foods[0].name + '</td>' + 
            //           '<td>' + response.report.foods[0].nutrients[0].value + '</td>' + 
            //           '<td>' + "" + '</td>' + 
            //           '<td>' + "" + '</td>' +
            //           '<td>' + "added from USDA" + '</td>' +
            //       '</tr>'
            //    );
            // };

        });
    };

});


