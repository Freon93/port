<?php


class Db
{
    public $host;
    public $port;
    public $user;
    public $pasw;
    public $con;
    public $finalResults;

    public function __construct($host, $port, $user, $pasw, $db)
    {

        $this->host = $host;
        $this->port = $port;
        $this->user = $user;
        $this->pasw = $pasw;
        $this->db = $db;
    }

    public function count_results($query)
    {
        $this->connect();
        $prom_res = $this->con->query($query);
        $this->con->close();
        $this->finalResults = $prom_res->num_rows;
    }

    public function add_to_db($query)
    {
        $this->connect();
        $this->con->query($query);
        $this->con->close();
    }

    public function connect()
    {
        $this->con = new mysqli($this->host . ':' . $this->port, $this->user, $this->pasw);
        $this->con->select_db($this->db);
    }

    public function query($query)
    {
        $this->connect();

        $prom_res = $this->con->query($query);
        $this->con->close();
        $this->finalResults = [];
        while ($dat = $prom_res->fetch_assoc()) {
            $this->finalResults[] = $dat;
        }
    }

    public function getResults()
    {
        return $this->finalResults;
    }
}

?>