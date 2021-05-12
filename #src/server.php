<?php
$_POST = json_decode(file_get_contents("php://input"), true);
// echo var_dump($_POST);


$name = $_POST['First name'];
$phone = $_POST['Last name'];
$token = "1743729393:AAEcks4S0g0yoxUSCimOMLcllGimDU8gF6M";
$chat_id = "-461262642";

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>
