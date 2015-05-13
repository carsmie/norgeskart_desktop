/**
 * Created by miecar on 15.01.14.
 */
"use strict";

var NK = NK || {};

NK.functions = NK.functions || {};

NK.functions.getMetadata = function (id) {

    var url;

    url = "http://www.geonorge.no/geonetwork/srv/en/xml.metadata.get";

    if (id !== null) {
        $.get(url,{uuid: id}).done(function( data ) {
            alert( "Data Loaded: " + data );
        });
    }
};

$(document).ready(function(){
//windo.location.pathname will give you path, after http://
    var path = window.location.pathname;
    alert("window.location.pathname : " + path);

    var href = window.location.href;
    alert("window.location.href : " + href);

    var hash = window.location.hash;
    alert("window.location.hash : " + hash);

    var URL = $(location).attr('href');
    alert("Current URL Using JQuery : " + URL);
});


$.(function(){
    alert("test");
    NK.functions.getMetadata();
});


