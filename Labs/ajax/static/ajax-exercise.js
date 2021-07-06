"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', replaceFortune);
};

$('#get-fortune-button').on('click', showFortune);


function replaceFortune(results) {
    $('#fortune-text').html(results);
}




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, replacingTheForecast)
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);

function replacingTheForecast(results){
    $('#weather-info').html(results.forecast);

}



// PART 3: ORDER MELONS

function updateAllMelons(results) {
    if (results.code === "OK") {
        $('#order-status').html("<p>" + results.msg + "<"/p>"");
    }
    else {
        $('#order-status').addClass("order-error");
        $('#order-status').html("<p><b>" + results.msg + "</b></p>");
    }
}

function orderMelons(evt) {
    evt.preventDefault();

    let formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $('#qty-field').val()
    };
 
    $.post("/order-melons.json", formInputss, updateAllMelons);
}

$("#order-form").on('submit', orderMelons);
 




