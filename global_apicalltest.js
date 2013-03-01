(function () {
	"use strict";

	window.onload = function () {
		var apiURLBar = document.getElementById("apiURLBar");
		var apiRequest = document.getElementById("apiRequest");
		var apiRequestSubmit = document.getElementById("apiRequestSubmit");
		var container = document.getElementById("container");
		var outputXML = document.getElementById("outputXML");
		var apiURLBar_defVal = "Enter API Request URL";
		
		container.style.visibility = "visible";

		apiRequest.onsubmit = function () {
			apiCall(apiURLBar.value, "GET", true);
			apiRequestSubmit.focus();
			return false;
		};

		apiRequest.onreset = function () {
			outputXML.style.visibility = "hidden";
			container.style.cursor = "wait";
			container.style.position = "absolute";
			container.style.marginLeft = "-200px";
			container.style.marginTop = "-50px";
			container.style.top = "50%";
			container.style.left = "50%";
		};

		apiURLBar.onfocus = function () {
			apiURLBar.focus();
			if (apiURLBar.value === apiURLBar_defVal) {
				apiURLBar.value = "";
			}
		};

		container.ondrag = function () {
			apiURLBar.focus();
			apiURLBar.value = "";
		};

		apiURLBar.onblur = function () {
			if (apiURLBar.value === "") {
				apiURLBar.value = apiURLBar_defVal;
			}
		};

		apiURLBar.focus();
	};
}());
