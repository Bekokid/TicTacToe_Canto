// Function called whenever user tab on any box
function myfunc() {
  // Setting DOM to all boxes or input field
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  // Checking if Player X won or not and after
  // that disabled all the other fields
  if (
    (b1 == "x" || b1 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b3 == "x" || b3 == "X")
  ) {
    document.getElementById("print").innerHTML =
      "小丸子獲勝～！<br><br>To Meitung🍎: <br>雖然唔知妳係使左幾日先贏到<br>但係都要祝妳生日快樂🎂 <br>心想事成🎉 狂食唔肥😋 點曬都唔黑🌚 <br> 🥳🥳🥳";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player X won");
    document.getElementById("b1").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b2").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b3").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b4 == "x" || b4 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("print").innerHTML =
      "小丸子獲勝～！<br><br>To Meitung🍎: <br>雖然唔知妳係使左幾日先贏到<br>但係都要祝妳生日快樂🎂 <br>心想事成🎉 狂食唔肥😋 點曬都唔黑🌚 <br> 🥳🥳🥳";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player X won");
    document.getElementById("b1").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b4").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b7").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  } else if (
    (b7 == "x" || b7 == "X") &&
    (b8 == "x" || b8 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML =
      "小丸子獲勝～！<br><br>To Meitung🍎: <br>雖然唔知妳係使左幾日先贏到<br>但係都要祝妳生日快樂🎂 <br>心想事成🎉 狂食唔肥😋 點曬都唔黑🌚 <br> 🥳🥳🥳";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player X won");
    document.getElementById("b7").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b8").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b9").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b6 == "x" || b6 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML =
      "小丸子獲勝～！<br><br>To Meitung🍎: <br>雖然唔知妳係使左幾日先贏到<br>但係都要祝妳生日快樂🎂 <br>心想事成🎉 狂食唔肥😋 點曬都唔黑🌚 <br> 🥳🥳🥳";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player X won");
    document.getElementById("b3").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b6").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b9").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML =
      "小丸子獲勝～！<br><br>To Meitung🍎: <br>雖然唔知妳係使左幾日先贏到<br>但係都要祝妳生日快樂🎂 <br>心想事成🎉 狂食唔肥😋 點曬都唔黑🌚 <br> 🥳🥳🥳";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player X won");
    document.getElementById("b1").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b5").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b9").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("print").innerHTML =
      "小丸子獲勝～！<br><br>To Meitung🍎: <br>雖然唔知妳係使左幾日先贏到<br>但係都要祝妳生日快樂🎂 <br>心想事成🎉 狂食唔肥😋 點曬都唔黑🌚 <br> 🥳🥳🥳";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player X won");
    document.getElementById("b3").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b5").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b7").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  } else if (
    (b2 == "x" || b2 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b8 == "x" || b8 == "X")
  ) {
    document.getElementById("print").innerHTML =
      "小丸子獲勝～！<br><br>To Meitung🍎: <br>雖然唔知妳係使左幾日先贏到<br>但係都要祝妳生日快樂🎂 <br>心想事成🎉 狂食唔肥😋 點曬都唔黑🌚 <br> 🥳🥳🥳";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player X won");
    document.getElementById("b2").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b5").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b8").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  } else if (
    (b4 == "x" || b4 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b6 == "x" || b6 == "X")
  ) {
    document.getElementById("print").innerHTML =
      "小丸子獲勝～！<br><br>To Meitung🍎: <br>雖然唔知妳係使左幾日先贏到<br>但係都要祝妳生日快樂🎂 <br>心想事成🎉 狂食唔肥😋 點曬都唔黑🌚 <br> 🥳🥳🥳";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player X won");
    document.getElementById("b4").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b5").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
    document.getElementById("b6").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  }

  // Checking of Player X finish
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if (
    (b1 == "0" || b1 == "0") &&
    (b2 == "0" || b2 == "0") &&
    (b3 == "0" || b3 == "0")
  ) {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b1").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b2").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b3").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b4 == "0" || b4 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b1").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b4").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b7").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (
    (b7 == "0" || b7 == "0") &&
    (b8 == "0" || b8 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b7").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b8").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b9").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b6 == "0" || b6 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b3").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b6").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b9").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b1").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b9").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b3").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b7").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (
    (b2 == "0" || b2 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b8 == "0" || b8 == "0")
  ) {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b2").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b8").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (
    (b4 == "0" || b4 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b6 == "0" || b6 == "0")
  ) {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b4").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b6").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  }

  // Checking of Player 0 finish
  // Here, Checking about Tie
  else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "平局";
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Match Tie");
  } else {
    // Here, Printing Result
    if (flag == 1) {
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else {
      document.getElementById("print").innerHTML =
        "輪到花輪同學，<br>請玩家按下“回合結束”掣以切換回合～";
    }
  }
}

// Function to reset game
function myfunc_2() {
  location.reload();
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0

function getRandomIndex() {
  var results = Math.floor(Math.random() * 2);

  document.getElementById("ins").className = "hidden";

  if (results == 1) {
    flag = 1;
    document.getElementById("print").innerHTML =
      "抽籤結果為玩家先行，請先揀選一格～";
  } else {
    flag = 0;
    document.getElementById("print").innerHTML =
      "抽籤結果為花輪同學先行。而加輪到玩家，請揀選一格～";
    var Hanawa = Math.floor(Math.random() * 9) + 1;
    if (Hanawa == 1) {
      document.getElementById("b1").value = "0";
      document.getElementById("b1").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b1").disabled = true;
      flag = 1;
    } else if (Hanawa == 2) {
      document.getElementById("b2").value = "0";
      document.getElementById("b2").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b2").disabled = true;
      flag = 1;
    } else if (Hanawa == 3) {
      document.getElementById("b3").value = "0";
      document.getElementById("b3").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b3").disabled = true;
      flag = 1;
    } else if (Hanawa == 4) {
      document.getElementById("b4").value = "0";
      document.getElementById("b4").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b4").disabled = true;
      flag = 1;
    } else if (Hanawa == 5) {
      document.getElementById("b5").value = "0";
      document.getElementById("b5").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b5").disabled = true;
      flag = 1;
    } else if (Hanawa == 6) {
      document.getElementById("b6").value = "0";
      document.getElementById("b6").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b6").disabled = true;
      flag = 1;
    } else if (Hanawa == 7) {
      document.getElementById("b7").value = "0";
      document.getElementById("b7").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b7").disabled = true;
      flag = 1;
    } else if (Hanawa == 8) {
      document.getElementById("b8").value = "0";
      document.getElementById("b8").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b8").disabled = true;
      flag = 1;
    } else if (Hanawa == 9) {
      document.getElementById("b9").value = "0";
      document.getElementById("b9").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b9").disabled = true;
      flag = 1;
    }
  }
  document.getElementById("draw").className = "hidden";
  document.getElementById("turnEnd").className = "show";
  console.log(Hanawa);
  console.log(results);
  return results;
}

/*
function iconDisplay_1() {
  if (flag == 1) {
    document.getElementById("b1").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0009.gif";
  } else {
    document.getElementById("b1").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
  }

  console.log("b1");
  console.log(b1.value);
}

*/

function myfunc_3() {
  while (flag == 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } /* else {
    document.getElementById("b1").value = "0";
    document.getElementById("b1").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b1").disabled = true;
    flag = 1;
  } */
}

function myfunc_4() {
  while (flag == 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } /*else {
    document.getElementById("b2").value = "0";
    document.getElementById("b2").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b2").disabled = true;
    flag = 1;
  } */
}

function myfunc_5() {
  while (flag == 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } /*  else {
    document.getElementById("b3").value = "0";
    document.getElementById("b3").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }  */
}

function myfunc_6() {
  while (flag == 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } /* else {
    document.getElementById("b4").value = "0";
    document.getElementById("b4").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b4").disabled = true;
    flag = 1;
  } */
}

function myfunc_7() {
  while (flag == 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } /* else {
    document.getElementById("b5").value = "0";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }  */
}

function myfunc_8() {
  while (flag == 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } /*  else {
    document.getElementById("b6").value = "0";
    document.getElementById("b6").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }  */
}

function myfunc_9() {
  while (flag == 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } /*  else {
    document.getElementById("b7").value = "0";
    document.getElementById("b7").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }  */
}

function myfunc_10() {
  while (flag == 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } /*   else {
    document.getElementById("b8").value = "0";
    document.getElementById("b8").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }  */
}

function myfunc_11() {
  while (flag == 1) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").src =
      "http://www.animated-gifs.fr/category_kids/girls-181/girl-0010.gif";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } /*  else {
    document.getElementById("b9").value = "0";
    document.getElementById("b9").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }  */
}

function npcStrategy() {
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  if (flag == 0) {
    if (
      (b2 == "0" && b3 == "0" && b1 == "") ||
      (b5 == "0" && b9 == "0" && b1 == "") ||
      (b4 == "0" && b7 == "0" && b1 == "")
    ) {
      document.getElementById("b1").value = "0";
      document.getElementById("b1").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b1").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b3 == "0" && b2 == "") ||
      (b5 == "0" && b8 == "0" && b2 == "")
    ) {
      document.getElementById("b2").value = "0";
      document.getElementById("b2").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b2").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b2 == "0" && b3 == "") ||
      (b5 == "0" && b7 == "0" && b3 == "") ||
      (b6 == "0" && b9 == "0" && b3 == "")
    ) {
      document.getElementById("b3").value = "0";
      document.getElementById("b3").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b3").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b7 == "0" && b4 == "") ||
      (b5 == "0" && b6 == "0" && b4 == "")
    ) {
      document.getElementById("b4").value = "0";
      document.getElementById("b4").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b4").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (b5 == "") {
      document.getElementById("b5").value = "0";
      document.getElementById("b5").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b5").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b3 == "0" && b9 == "0" && b6 == "") ||
      (b4 == "0" && b5 == "0" && b6 == "")
    ) {
      document.getElementById("b6").value = "0";
      document.getElementById("b6").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b6").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b4 == "0" && b7 == "") ||
      (b3 == "0" && b5 == "0" && b7 == "") ||
      (b8 == "0" && b9 == "0" && b7 == "")
    ) {
      document.getElementById("b7").value = "0";
      document.getElementById("b7").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b7").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b7 == "0" && b9 == "0" && b8 == "") ||
      (b2 == "0" && b5 == "0" && b8 == "")
    ) {
      document.getElementById("b8").value = "0";
      document.getElementById("b8").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b8").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b5 == "0" && b9 == "") ||
      (b3 == "0" && b6 == "0" && b9 == "") ||
      (b7 == "0" && b8 == "0" && b9 == "")
    ) {
      document.getElementById("b9").value = "0";
      document.getElementById("b9").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b9").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
      // above is for winning the game
    } else if (
      (b2 == "X" && b3 == "X" && b1 == "") ||
      (b5 == "" && b9 == "X" && b1 == "") ||
      (b4 == "X" && b7 == "X" && b1 == "") ||
      (b5 == "X" &&
        b1 == "" &&
        b2 == "" &&
        b3 == "" &&
        b4 == "" &&
        b6 == "" &&
        b7 == "" &&
        b8 == "" &&
        b9 == "")
    ) {
      document.getElementById("b1").value = "0";
      document.getElementById("b1").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b1").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "X" && b3 == "X" && b2 == "") ||
      (b5 == "X" && b8 == "X" && b2 == "")
    ) {
      document.getElementById("b2").value = "0";
      document.getElementById("b2").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b2").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "X" && b2 == "X" && b3 == "") ||
      (b5 == "X" && b7 == "X" && b3 == "") ||
      (b6 == "X" && b9 == "X" && b3 == "")
    ) {
      document.getElementById("b3").value = "0";
      document.getElementById("b3").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b3").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "X" && b7 == "X" && b4 == "") ||
      (b5 == "X" && b6 == "X" && b4 == "")
    ) {
      document.getElementById("b4").value = "0";
      document.getElementById("b4").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b4").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
      // below is when b5 is occupied by player
    } else if (
      /*b5 == "X") {
    document.getElementById("b5").value = "0";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b5").disabled = true;
    flag = 1;
  } else if ( */
      (b3 == "X" && b9 == "X" && b6 == "") ||
      (b4 == "X" && b5 == "X" && b6 == "")
    ) {
      document.getElementById("b6").value = "0";
      document.getElementById("b6").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b6").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "X" && b4 == "X" && b7 == "") ||
      (b3 == "X" && b5 == "X" && b7 == "") ||
      (b8 == "X" && b9 == "X" && b7 == "")
    ) {
      document.getElementById("b7").value = "0";
      document.getElementById("b7").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b7").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b7 == "X" && b9 == "X" && b8 == "") ||
      (b2 == "X" && b5 == "X" && b8 == "")
    ) {
      document.getElementById("b8").value = "0";
      document.getElementById("b8").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b8").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "X" && b5 == "X" && b9 == "") ||
      (b3 == "X" && b6 == "X" && b9 == "") ||
      (b7 == "X" && b8 == "X" && b9 == "")
    ) {
      document.getElementById("b9").value = "0";
      document.getElementById("b9").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b9").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";

      // above is to block the opponent from winning the game
    } else if (
      (b2 == "0" && b3 == "" && b1 == "") ||
      (b5 == "0" && b9 == "" && b1 == "") ||
      (b4 == "0" && b7 == "" && b1 == "") ||
      (b2 == "" && b3 == "0" && b1 == "") ||
      (b5 == "" && b9 == "0" && b1 == "") ||
      (b4 == "" && b7 == "0" && b1 == "")
    ) {
      document.getElementById("b1").value = "0";
      document.getElementById("b1").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b1").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b3 == "" && b2 == "") ||
      (b5 == "0" && b8 == "" && b2 == "") ||
      (b1 == "" && b3 == "0" && b2 == "") ||
      (b5 == "" && b8 == "0" && b2 == "")
    ) {
      document.getElementById("b2").value = "0";
      document.getElementById("b2").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b2").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b2 == "" && b3 == "") ||
      (b5 == "0" && b7 == "" && b3 == "") ||
      (b6 == "0" && b9 == "" && b3 == "") ||
      (b1 == "" && b2 == "0" && b3 == "") ||
      (b5 == "" && b7 == "0" && b3 == "") ||
      (b6 == "" && b9 == "0" && b3 == "")
    ) {
      document.getElementById("b3").value = "0";
      document.getElementById("b3").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b3").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b7 == "" && b4 == "") ||
      (b5 == "0" && b6 == "" && b4 == "") ||
      (b1 == "" && b7 == "0" && b4 == "") ||
      (b5 == "" && b6 == "0" && b4 == "")
    ) {
      document.getElementById("b4").value = "0";
      document.getElementById("b4").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b4").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      /* else if (b5 == "") {
    document.getElementById("b5").value = "0";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
    document.getElementById("b5").disabled = true;
    flag = 1;
  } */
      (b3 == "0" && b9 == "" && b6 == "") ||
      (b4 == "0" && b5 == "" && b6 == "") ||
      (b3 == "" && b9 == "0" && b6 == "") ||
      (b4 == "" && b5 == "0" && b6 == "")
    ) {
      document.getElementById("b6").value = "0";
      document.getElementById("b6").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b6").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b4 == "" && b7 == "") ||
      (b3 == "0" && b5 == "" && b7 == "") ||
      (b8 == "0" && b9 == "" && b7 == "") ||
      (b1 == "" && b4 == "0" && b7 == "") ||
      (b3 == "" && b5 == "0" && b7 == "") ||
      (b8 == "" && b9 == "0" && b7 == "")
    ) {
      document.getElementById("b7").value = "0";
      document.getElementById("b7").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b7").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b7 == "0" && b9 == "" && b8 == "") ||
      (b2 == "0" && b5 == "" && b8 == "") ||
      (b7 == "" && b9 == "0" && b8 == "") ||
      (b2 == "" && b5 == "0" && b8 == "")
    ) {
      document.getElementById("b8").value = "0";
      document.getElementById("b8").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b8").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
    } else if (
      (b1 == "0" && b5 == "" && b9 == "") ||
      (b3 == "0" && b6 == "" && b9 == "") ||
      (b7 == "0" && b8 == "" && b9 == "") ||
      (b1 == "" && b5 == "0" && b9 == "") ||
      (b3 == "" && b6 == "0" && b9 == "") ||
      (b7 == "" && b8 == "0" && b9 == "")
    ) {
      document.getElementById("b9").value = "0";
      document.getElementById("b9").src =
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163cf0b85c0Z.gif";
      document.getElementById("b9").disabled = true;
      flag = 1;
      document.getElementById("print").innerHTML = "輪到小丸子～";
      // above is to set the 2nd step
    } else {
      document.getElementById("print").innerHTML = "平局";
      document.getElementById("turnEnd").className = "hidden";
      document.getElementById("but").className = "show";
      flag = "";
      //window.alert("Match Tie");
    }
  } else {
    document.getElementById("print").innerHTML = "請先揀選一格再結束回合～";
  }
}

function checkEnding() {
  while (
    (b1 == "0" || b1 == "X") &&
    (b2 == "0" || b2 == "X") &&
    (b3 == "0" || b3 == "X") &&
    (b4 == "0" || b4 == "X") &&
    (b5 == "0" || b5 == "X") &&
    (b6 == "0" || b6 == "X") &&
    (b7 == "0" || b7 == "X") &&
    (b8 == "0" || b8 == "X") &&
    (b9 == "0" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "平局";
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
  }
}

function checkNpcWinning() {
  if (b1 == "0" && b2 == "0" && b3 == "0") {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b1").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b2").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b3").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (b1 == "0" && b4 == "0" && b7 == "0") {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b1").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b4").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b7").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b7").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b8").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b9").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b3").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b6").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b9").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b1").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b9").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b3").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b7").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b2").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b8").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    document.getElementById("print").innerHTML = "花輪同學獲勝～！";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("turnEnd").className = "hidden";
    document.getElementById("but").className = "show";
    //window.alert("Player 0 won");
    document.getElementById("b4").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b5").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
    document.getElementById("b6").src =
      "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/625b163c7adb9mnN.gif";
  }
}
