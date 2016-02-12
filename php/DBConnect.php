<?php


class DBConnect
{
    private $dbTable;
    private $connection;

    function __construct($dbUser, $dbPassword, $dbTable)
    {

        $this->dbTable = $dbTable;
        $this->connection = mysql_connect("localhost", $dbUser, $dbPassword);
        mysql_select_db($dbTable);
        mysql_set_charset("utf8");
    }

    function __destruct()
    {
        mysql_close($this->connection);
    }

    function DeleteItem($idItem){
        mysql_query("DELETE FROM `user` WHERE `ID` = $idItem");
    }
    function UpdateItem($idItem){

    }
    function InsertItem($arDate){
        mysql_query("INSERT INTO `"
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