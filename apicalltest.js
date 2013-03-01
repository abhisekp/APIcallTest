/*
Author: Abhisek Pattnaik
Desc: Call XML APIs
 */

var api;

/*
@TODO:
 * Fix same origin problem

responseType <string>[optional = GET]: "GET" OR "POST"
url <string>: e.g. "http://thegamesdb.net/api/GetGame.php?name=crysis"
async <boolean>[optional = true]: true OR false
 */
function apiCall(url, responseType, async) {
	"use strict";

	var outputXML = document.getElementById("outputXML");
	var container = document.getElementById("container");
	var apiRequestSubmit = document.getElementById("apiRequestSubmit");

	if (window.XMLHttpRequest) {
		api = new XMLHttpRequest({anon : true});
	} else {
		api = new ActiveXObject("Microsoft.XMLHTTP");
	}

	responseType = (responseType === "POST") ? "POST" : "GET";
	async = (async === false) ? false : true;

	api.onreadystatechange = function () {
		if ((api.readyState === 4 && api.status === 200)) {
			apiRequestSubmit.disabled = false;
			var apiText = api.responseText;
			outputXML.getElementsByTagName("pre")[0].textContent = apiText;
			container.style.cursor = "pointer";
			container.style.position = "fixed";
			container.style.marginLeft = "0";
			container.style.marginTop = "0";
			container.style.top = "20px";
			container.style.left = "20px";
			outputXML.style.visibility = "visible";
			/* DoubleScroll(outputXML); */
		} else if (api.readyState !== 4 || api.status !== 200) {
			apiRequestSubmit.disabled = true;
			outputXML.style.visibility = "hidden";
			container.style.cursor = "wait";
			container.style.position = "absolute";
			container.style.marginLeft = "-200px";
			container.style.marginTop = "-50px";
			container.style.top = "50%";
			container.style.left = "50%";
		}
	};

	api.onerror = function () {
		apiRequestSubmit.disabled = false;
		container.style.cursor = "pointer";
	};

	//	api.setRequestHeader('Content-Type', 'text/html');
	url += ((/\?/).test(url) ? "&" : "?") + "apictest=" + Math.random();
	api.open(responseType, "APIcallTest.php?proxy=" + url, async);
//	api.open(responseType, "proxy.php?url=" + url, async);
	api.send(null);
}
