(function () {
	"use strict";

	window.onload = function () {
		var apiURLBar = document.getElementById("apiURLBar");
		var apiRequest = document.getElementById("apiRequest");
		var apiRequestSubmit = document.getElementById("apiRequestSubmit");
		var container = document.getElementById("container");
		var apiURLBar_defVal = "Enter API Request URL";

		apiRequest.onsubmit = function () {
			apiCall(apiURLBar.value, "GET", true);
			apiRequestSubmit.focus();
			return false;
		};

		apiURLBar.onfocus = container.ondrag = function () {
			apiURLBar.focus();
			if (apiURLBar.value === apiURLBar_defVal) {
				apiURLBar.value = "";
			}
		};
		apiURLBar.onblur = function () {
			if (apiURLBar.value === "") {
				apiURLBar.value = apiURLBar_defVal;
			}
		};
		apiURLBar.focus();
	};
}());
