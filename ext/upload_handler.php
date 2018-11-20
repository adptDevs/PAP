<?php

/*
mode=conf request
max filesize
*/

/*

Removal of underscores

In order to fix the DHX auto-gen id assignment
within the tree component, underscores are not
allowed 

*/

function removeCharacters($fileName) {
	$currentName = $filename;
	echo $currentName;
	$characters = array("_");
	foreach($characters as $c) {
		if (strpos($fileName, $c) !== false) {
			$currentName = str_replace($c, "", $currentName);
		}
	}
	return $currentName;
}

function getServerPath($isDev) {
	if (!$isDev) return "\\\\adptwebdev\\portalFiles\\policyAndPro\\".str_replace("/", "\\", $_GET["filePath"]);

	//echo getcwd();
		$devSite = explode("\\", getcwd())[3];

		//return "\\\\adptwebdev\\".$devSite."\\_apps\\policyAndPro\\data\\papApi\\portalFiles\\policyAndPro\\".str_replace("/", "\\", $_GET["filePath"]);
		
		return "\\\\adpt-web\\portalFiles\\policyAndPro" . str_replace("/", "\\", $_GET["filePath"]);
}

function hasError($err, $fileName) {
	$errMsg = "";

	switch($err) {
		case 1:
			$errMsg = "UPLOAD_ERR_INI_SIZE";
			break;
		
		case 2:
			$errMsg = "UPLOAD_ERR_FORM_SIZE";
			break;

		case 3:
			$errMsg = "UPLOAD_ERR_PARTIAL";
			break;

		case 6:
			$errMsg = "UPLOAD_ERR_NO_TMP_DIR";
			break;
		
		case 7:
			$errMsg = "UPLOAD_ERR_CANT_WRITE";
			break;

		case 8:
			$errMsg = "UPLOAD_ERR_EXTENSION";
			break;

		default:
			return false;
			break;
	}

	header("Content-Type: text/json");
	print_r(json_encode(array(
		"state" => false,
		"name"  => $filename,
		"extra" => array(
				"info"  => $errMsg,
				"param" => "null"
		)
	)));	

	die();
}

$destination = getServerPath(true);

if (@$_REQUEST["mode"] == "conf") {
	function parse_num($k) {
		$p = 0;
		preg_match("/(\d{1,})([kmg]?)/i", trim($k), $r);
		if (isset($r) && isset($r[1])) {
			$p = $r[1];
			if (isset($r[2])) {
				switch(strtolower($r[2])) {
					case "g": $p *= 1024;
					case "m": $p *= 1024;
					case "k": $p *= 1024;
				}
			}
		}
		return $p;
	}

	header("Content-Type: text/json");
	print_r(json_encode(array(
		"maxFileSize" => min(parse_num(ini_get("upload_max_filesize")), parse_num(ini_get("post_max_size")))
	)));

	die();
}

/*

HTML5/FLASH MODE -- DEFAULT

(MODE will detected on client side automaticaly. Working mode will passed to server as GET param "mode")

response format

if upload was good, you need to specify state=true and name - will passed in form.send() as serverName param
{state: 'true', name: 'filename'}

*/

if (@$_REQUEST["mode"] == "html5" || @$_REQUEST["mode"] == "flash") {
	if (@$_REQUEST["zero_size"] == "1") {
		$filename = @$_REQUEST["file_name"];
		//$filename = removeCharacters($filename);
		file_put_contents($destination.$filename, ""); // IE10,IE11 zero file fix
	} else {
		//$filename = removeCharacters($_FILES["file"]["name"]);
		$error = $_FILES["file"]["error"];
		$filename = $_FILES["file"]["name"];
		if (!hasError($error, $fileName)) {
			$fileType = pathinfo($destination.$filename)["extension"];
			//mail("aaron.pillert@arkansas.gov", "test", $_FILES["file"]["tmp_name"]."----------</br>".json_encode($fileType));
			if ($fileType == "pdf") {
				if (move_uploaded_file($_FILES["file"]["tmp_name"],$destination.$filename) && is_writable($destination)) {
					header("Content-Type: text/json");
					print_r(json_encode(array(
						"state" => true,
						"name"  => $filename,
						"extra" => array(
								"info"  => "just a way to send some extra data",
								"param" => "some value here"
						)
					)));
					die();
				} else {
					header("Content-Type: text/json");
					print_r(json_encode(array(
						"state" => false,
						"name"  => $filename,
						"extra" => array(
								"info"  => "Unable to save to " . $destination,
								"param" => "null"
						)
					)));
					die();
				}
			} else {
				header("Content-Type: text/json");
				print_r(json_encode(array(
					"state" => false,
					"name"  => $filename,
					"extra" => array(
							"info"  => "That filetype is unsuppoerted. The document must be a PDF",
							"param" => "null"
					)
				)));
				die();
			}
			
		}
	}
	//
	

}

/*

HTML4 MODE

response format:

to cancel uploading
{state: 'cancelled'}

if upload was good, you need to specify state=true, name - will passed in form.send() as serverName param, size - filesize to update in list
{state: 'true', name: 'filename', size: 1234}

*/

if (@$_REQUEST["mode"] == "html4") {
	header("Content-Type: text/html");
	if (@$_REQUEST["action"] == "cancel") {
		print_r(json_encode(array("state"=>"cancelled")));
	} else {
		$filename = $_FILES["file"]["name"];
		 move_uploaded_file($_FILES["file"]["tmp_name"], $destination.$filename);
		print_r(json_encode(array(
			"state" => true,
			"name"  => $filename,
			"size"  => $_FILES["file"]["size"],
			"extra" => array(
					"info"  => "just a way to send some extra data",
					"param" => "some value here"
			)
		)));
	}
	die();
}

/* SILVERLIGHT MODE */
/*
{state: true, name: 'filename', size: 1234}
*/

if (@$_REQUEST["mode"] == "sl" && isset($_REQUEST["fileSize"]) && isset($_REQUEST["fileName"]) && isset($_REQUEST["fileKey"])) {

	// available params
	// $_REQUEST["fileName"], $_REQUEST["fileSize"], $_REQUEST["fileKey"] are available here

	// each file got temporary 12-chars length key
	// due some inner silverlight limitations, there will another request to check if file transferred and saved corrrectly
	// key matched to regex below

	preg_match("/^[a-z0-9]{12}$/", $_REQUEST["fileKey"], $p);

	if (@$p[0] === $_REQUEST["fileKey"]) {

		// generate temp name for saving
		$temp_name = $destination.md5($p[0]);

		// if action=="getUploadStatus" - that means file transfer was done and silverlight is wondering if php/orhet_server_side
		// got and saved file correctly or not, filekey same for both requests

		if (@$_REQUEST["action"] != "getUploadStatus") {
			// file is coming, save under temp name
			/*
			$postData = file_get_contents("php://input");
			if (strlen($postData) == $_REQUEST["fileSize"]) {
				file_put_contents($temp_name, $postData);
			}
			*/

			// no needs to output something
		} else {
			// second "check" request is coming
			/*
			$state = "false";
			if (file_exists($temp_name)) {
				rename($temp_name, $destination.$_REQUEST["fileName"]);
				$state = "true";
			}
			*/

			$state = "true"; // just for tests

			// print upload state
			// state: true/false (w/o any quotes)
			// name: server name/id
			header("Content-Type: text/json");
			print_r('{state: '.$state.', name: "'.str_replace('"','\\"',$_REQUEST["fileName"]).'",extra:{info:"uploaded successfully",param:"some value"}}');
		}
	}
}


/*

CUSTOM FILE RECORD, added in 2.3

response: {state: true, name: 'filename', size: 1234}

state	true/false
name	server file name
size	optional, will update size in list of specified

*/

if (@$_REQUEST["mode"] == "custom") {
	sleep(1);
	echo "{state: true, name: '".str_replace("'", "\\'", $_REQUEST["name"])."', extra: {param: 'value'}}";
}

?>
