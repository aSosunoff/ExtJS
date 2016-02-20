<?php


class DBConnect
{
    private $dbTable;
    private $connection;

    function __construct($dbUser, $dbPassword, $dbTable)
    {

        $this->dbTable = $dbTable;
        $this->connection = mysqli_connect("localhost", $dbUser, $dbPassword);
        mysqli_select_db($dbTable);
        mysqli_set_charset("utf8");
    }

    function __destruct()
    {
        mysqli_close($this->connection);
    }

    function DeleteItem($idItem){
        mysqli_query("DELETE FROM `user` WHERE `ID` = $idItem");
    }
    function UpdateItem($idItem){

    }
    function InsertItem($arDate){
        mysqli_query("INSERT INTO `"
            .$arDate[0]['NAME_TABLE'].
            "` (`"
            .$arDate[0]['INTO'][0].
            "`, `"
            .$arDate[0]['INTO'][1].
            "`) VALUES ('', '"
            .$arDate[0]['VALUE'][0].
            "')");
    }
    function ReadItem($idItem){

    }
    function ReadItems(){

    }
}