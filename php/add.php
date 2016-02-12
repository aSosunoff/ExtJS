<?php
include "DBConnect.php";

if(isset($_POST['add'])){
    $arDate = array(
        array(
            'NAME_TABLE'=>'user',
            'INTO'=>array(
                'ID',
                'NAME'
            ),
            'VALUE'=>array(
                strip_tags(trim($_POST['name']))
            )
        )
    );

    $conDB = new DBConnect("admin", "1234", "db_first");

    $conDB->InsertItem($arDate);
}