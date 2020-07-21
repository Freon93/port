<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bounding</title>
    <script src="../../scripts/jquery-3.5.1.js"></script>
    <script src="scripts/properties.js"></script>
    <script src="scripts/Animal.js"></script>
    <script src="scripts/Results.js"></script>
    <script src="scripts/index.js"></script>
    <link rel="stylesheet" href="styles/index.css">
    <link rel="stylesheet" href="../../bootstrap/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js"
            integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <!--    <script src="../../bootstrap/jquery-3.5.1.slim.min.js"></script>-->
    <script src="../../bootstrap/popper.min.js"></script>
    <script src="../../bootstrap/bootstrap.min.js"></script>
</head>
<body onselectstart="return false;">
<div id="control" class="bg-dark d-flex align-content-start flex-wrap p-2">
    <button type="button" class="btn btn-light btn-sm mr-5" id="new_work">Get new work</button>
    Labels:
    <img src="images/dog.png" alt="Dog" class="label ml-5" data-toggle="tooltip"
         data-placement="bottom"
         title="Dog">
    <img src="images/cat.png" alt="Cat" class="label ml-5" data-toggle="tooltip"
         data-placement="bottom"
         title="Cat">
    <img src="images/other.png" alt="Other" class="label ml-5" data-toggle="tooltip"
         data-placement="bottom"
         title="Other">
    <button type="button" class="btn btn-light btn-sm ml-5" id="deleteBox">Delete box</button>
    <button type="button" class="btn btn-light btn-sm ml-auto" id="save">Save</button>
</div>
<svg id="redactor" class="bg-light">

</svg>
<div id="instruction" class="bg-secondary text-center pt-5">
    <h3>Instruction</h3>

    <h4>Control:</h4>

    <ol class="text-justify">
        <li>Press "Get new work" button</li>
        <li>Drug mouse with pressed <b>rmb</b> to move picture</li>
        <li>Drug mouse with pressed <b>lmb</b> to draw box</li>
        <li>Use wheel for zoom</li>
        <li>To activate box just click on it</li>
        <li>You can correct active box using top-left and bottom-right points</li>
        <li>You can delete active box. Press "Delete box" button for it</li>
        <li>You can change labels of active boxes clicking on icons on the top of the screen.</li>
        <li>To save your work press button "Save"</li>
    </ol>

    <h4>Goal:</h4>
    <span class="text-justify">Mark all animals on the picture, select labels for them: "Cat" for cats, "Dog" for dogs and "Other" for all other
    pets.</span>
</div>
<script>
    let datasetPicturelLinks = [
        <?php
        $picturesLinks = array_diff(scandir('./dataset'), [".", '..']);
        foreach ($picturesLinks as $link) {
            echo "'" . $link . "'" . ',';
        }
        ?>
    ];
</script>
</body>
</html>