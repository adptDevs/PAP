<?php
define('IN_ADPT', true);

// Utility files
require("/beta/policyAndPro/data/papApi/databaseService.php");


require("/beta/policyAndPro/data/papApi/folderService.php");
require("/beta/policyAndPro/data/papApi/fileService.php");
require("/beta/policyAndPro/data/papApi/userService.php");

define ("API", serialize (
    array(
        "folders" => new FolderService_API(),
        "files" => new FileService_API(),
        "users" => new UserService_API()
    )
    ));

function isValidRequest($apiId) {
    $apiArray = unserialize(API);
    return array_key_exists($apiId, $apiArray);
}

// Start Here

$api = null;
$parameters = null;
$response = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // POST Requests
    if (!isValidRequest($_POST["api"])) exit(http_response_code(400));

    $api = $_POST["api"];
    $parameters = json_decode($_POST["params"]);

} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // GET Requests
    if (!isValidRequest($_GET["api"])) exit(http_response_code(400));

    $api = $_GET["api"];
    $parameters = json_decode($_GET["params"]);

} else {
    exit(http_response_code(400));
}

$apiObj = unserialize(API)[$api];
    
$setters = $parameters->setters;
//print_r($setters);
foreach($setters as $key => $value) {
    $apiObj->set($key, $value);
}

$requests = $parameters->requests;
foreach($requests as $key => $request){
    //echo $key; // Request
    $response[$key] = $apiObj->requests($key);
}

//print_r($response);
echo json_encode($response);

?>