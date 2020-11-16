<?php echo $_SERVER['REMOTE_ADDR'] . "\r\n Whitelist this id please. \r\n\r\n"; ?>
<br>
<br>
<br>


<?php if ($_POST) : ?>

    <?php $formToJson = json_encode($_POST); ?>
    <?php file_put_contents('test.json', $formToJson); ?>

    <br>
    <br>

    <b>Opgeslagen!</b>
    <?php
        header('Location: http://www.i416427.hera.fhict.nl/sites/zuid/');
        die(); ?>
<?php endif; ?>

<h1>Wijzigen</h1>

<form method="post" id='form'>
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
        <label>Productiviteit (in percentage)</label>
    </div>
    <div>
        <input type="text" name="csat" id="csat-input" />
        <label>CSAT (1 tot 5)</label>
    </div>
    <div>
        <input type="text" name="pipeline" id="pipeline-input" />
        <label>Pipeline</label>
    </div>
    <div>
        <input type="text" name="offertes[]" id="offertes-input" />
        <label>Offerte 1</label>
    </div>
    <input type="submit">
</form>

