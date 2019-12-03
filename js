<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pl" lang="pl">
<head>
<meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
<title>JS</title>

<script language="JavaScript" type="text/javascript">
function zegar(){
    
    now = new Date();
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    
    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    
    document.getElementById('czas').innerHTML = hours + ":" + min + ":" + sec;
        
    setTimeout("zegar()", 1000);
}

</script>

</head>
<body onload="javascript:zegar()">

<span style="text-align:center; padding-top: 100px; color: #ff0000;"><h1 id="czas"></h1></span>

</body>
</html>
