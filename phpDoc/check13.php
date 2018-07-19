<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/18
 * Time: 10:03
 */

$conn=mysqli_connect("localhost","root" ,"" ,"taxforum" );
mysqli_query($conn,'set names utf8');
$json = '';
$data = array();
class  Question{
    public $title;
    public $date;
    public $class;
    public $view;
    public $answer;
    public $collect;
}
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "连接成功";
$sql_query="select * from questions where class='注销登记'";
$result=$conn ->query($sql_query);
if($result){
    while ($row=$result ->fetch_assoc()){
        $question= new Question();
        $question ->title=$row["title"];
        $question ->date=$row["date"];
        $question ->class=$row["class"];
        $question ->answer=$row["answer"];
        $question ->view=$row["view"];
        $question ->collect=$row["collect"];
        $data[]=$question;
    }
    $json = json_encode($data);//把数据转换为JSON数据.
    echo $json;
    //echo "{".'"question"'.":".$json."}";

}else{
    echo "0";
}
?>