<?php
// PHP Proxy example for Yahoo! Web services. 
// Responds to both HTTP GET and POST requests
//
// Author: Jason Levitt
// December 7th, 2005
//

// Allowed hostname (api.local and api.travel are also possible here)
//define ('HOSTNAME', 'http://search.yahooapis.com/');

// Get the REST call path from the AJAX application
// Is it a POST or a GET?
$url = ($_POST['proxy']) ? $_POST['proxy'] : $_GET['proxy'];
//$url = HOSTNAME.$path;

// Open the Curl session
$session = curl_init($url);

// If it's a POST, put the POST data in the body
if ($_POST['proxy']) {
	$postvars = '';
	while ($element = current($_POST)) {
		$postvars .= urlencode(key($_POST)).'='.urlencode($element).'&';
		next($_POST);
	}
	curl_setopt ($session, CURLOPT_POST, true);
	curl_setopt ($session, CURLOPT_POSTFIELDS, $postvars);
}

// Don't return HTTP headers. Do return the contents of the call
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// Make the call
$xml = curl_exec($session);

// The web service returns XML. Set the Content-Type appropriately
header("Content-Type: text/html");

echo $xml;
curl_close($session);

?>
