<?php echo $_SERVER['REMOTE_ADDR'] . "\r\n Whitelist this id please. \r\n\r\n"; ?>
<br>
<br>
<br>


<?php if ($_POST) : ?>

    in php is het dit:
    <?php var_dump($_POST); ?>
    <br>
    <br>
    <br>

    in json dit:
    <?php $formToJson = json_encode($_POST); ?>
    <?php file_put_contents('test.json', $formToJson); ?>

    <br>
    <br>

    <b>opgeslagen in test.json</b>

<?php endif; ?>

<h1>Wijzigen</h1>

<form method="post">
    <div>
        <input type="text" name="target" id="target-input" />
        <label>Target</label>
    </div>
    <div>
        <input type="text" name="forecast" id="forecast-input" />
        <label>Forecast</label>
    </div>
    <div>
        <input type="text" name="percentage" id="productiviteit-input" />
        <label>Productiviteit</label>
    </div>
    <div>
        <input type="text" name="csat" id="csat-input" />
        <label>CSAT</label>
    </div>
    <div>
        <input type="text" name="pipeline" id="pipeline-input" />
        <label>Pipeline</label>
    </div>
    <input type="submit">
</form>