$(document).ready (function(){
    
    console.log ("ready");
    onDeviceReady();
});

var key1 = "Name1";
var value1 = "Harvey";

window.localStorage.setItem( key1, value1 );

var key2 = "Name2";
var value2 = "Oliver";

window.localStorage.setItem( key2, value2 );

var key3 = "Name3";
var value3 = "Thomas";

window.localStorage.setItem( key3, value3 );

var key4 = "Name4";
var value4 = "Amelia";

window.localStorage.setItem( key4, value4 );

var key5 = "Name5";
var value5 = "massie";

window.localStorage.setItem( key5, value5 );


var key1 = "Name1";
var value1 = window.localStorage.getItem(key1);

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
    
    var anythingyoulike = window.localStorage.getItem(key3)
    
	$("#launched").text("I love: " + anythingyoulike);
	/*$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);*/
}


// device APIs are available
//
    function onDeviceReady() {
	
	updateDisplay();
	    

    }

  
