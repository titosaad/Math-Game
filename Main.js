var QuestionNum = 0;
var GameStarted = false;
const MathQuestions = [
    "3 + 4 = ?", // 0
    "5 + 7 = ?", // 1
    "8 + 2 = ?", // 2
    "10 + 6 = ?", // 3
    "9 + 5 = ?", // 4
    "7 + 3 = ?", // 5
    "2 + 9 = ?", // 6
    "6 + 8 = ?", // 7
    "4 + 5 = ?", // 8
    "1 + 1 = ?", // 9
    "11 + 4 = ?", // 10
    "12 + 3 = ?", // 11
    "13 + 2 = ?", // 12
    "14 + 1 = ?", // 13
    "15 + 5 = ?", // 14
    "16 + 6 = ?", // 15
    "17 + 3 = ?", // 16
    "18 + 2 = ?", // 17
    "19 + 1 = ?", // 18
    "20 + 10 = ?", // 19
    "21 + 7 = ?", // 20
    "22 + 8 = ?", // 21
    "23 + 5 = ?", // 22
    "24 + 4 = ?", // 23
    "25 + 3 = ?", // 24
    "26 + 2 = ?", // 25
    "27 + 1 = ?", // 26
    "28 + 6 = ?", // 27
    "29 + 5 = ?", // 28
    "30 + 10 = ?" // 29
  ];

function ChangeFontStyle(ID ,FontName) {
    document.getElementById(ID).style.fontFamily = FontName;
}

function EN() {
    document.getElementById("SwitchLanguageH1").innerHTML = "Math Game!";
    document.getElementById("SwitchLanguageStartButton").innerHTML = "Start";
    document.getElementById("TranslateReturnButton").innerHTML = '<img src="arrow-return-left.svg"> Return';
    if (GameStarted == false) {
    document.getElementById("GameH1").innerHTML = "Click Ready 👇👇👇";        
    }
    document.getElementById("ReadyButton").innerHTML = "Ready!";
    ChangeFontStyle("SwitchLanguageH1", "MyFont");
    ChangeFontStyle("SwitchLanguageStartButton", "MyFont");
    ChangeFontStyle("TranslateReturnButton", "MyFont");
    ChangeFontStyle("GameH1", "MyFont");
    ChangeFontStyle("ReadyButton", "MyFont");
}

function AR() {
    document.getElementById("SwitchLanguageH1").innerHTML = "لعبة الرياضيات!";
    document.getElementById("SwitchLanguageStartButton").innerHTML = "بدء";
    document.getElementById("TranslateReturnButton").innerHTML = '<img src="arrow-return-left.svg"> عودة';
    if (GameStarted == false) {
    document.getElementById("GameH1").innerHTML = "انقر مستعد 👇👇👇";        
    }

    document.getElementById("ReadyButton").innerHTML = "!مستعد";
    ChangeFontStyle("SwitchLanguageH1", "MyArabicFont");
    ChangeFontStyle("SwitchLanguageStartButton", "MyArabicFont");
    ChangeFontStyle("TranslateReturnButton", "MyArabicFont");
    ChangeFontStyle("GameH1", "MyArabicFont");
    ChangeFontStyle("ReadyButton", "MyArabicFont");
}
function start() {
    GameStarted = true;
    document.getElementById("body").style.filter = "blur(100px)";
    window.scrollTo(0 ,1000);
    document.getElementById("body").style.filter = "blur(0px)";
}
function StartGame() {
      document.getElementById("ReadyButton").style.filter = "blur(100px)";

      setTimeout(function() {
        document.getElementById("ReadyButton").style.display = "none";
    } , 500);

    setTimeout(function() {
        document.getElementById("twobuttons").style.display = "flex";
    }, 1500);


    QuestionNum = Math.floor(Math.random() * MathQuestions.length);
    document.getElementById("GameH1").innerHTML = MathQuestions[QuestionNum];

    if (QuestionNum == 0) {
        document.getElementById("choice1").innerHTML = "7";
        document.getElementById("choice2").innerHTML = "8";
    } else if (QuestionNum == 1) {
        document.getElementById("choice1").innerHTML = "12";
        document.getElementById("choice2").innerHTML = "13";
    } else if (QuestionNum == 2) {
        document.getElementById("choice1").innerHTML = "10";
        document.getElementById("choice2").innerHTML = "11";
    } else if (QuestionNum == 3) {
        document.getElementById("choice1").innerHTML = "15";
        document.getElementById("choice2").innerHTML = "16";
    } else if (QuestionNum == 4) {
        document.getElementById("choice1").innerHTML = "14";
        document.getElementById("choice2").innerHTML = "15";
    } else if (QuestionNum == 5) {
        document.getElementById("choice1").innerHTML = "9";
        document.getElementById("choice2").innerHTML = "10";
    } else if (QuestionNum == 6) {
        document.getElementById("choice1").innerHTML = "10";
        document.getElementById("choice2").innerHTML = "11";
    } else if (QuestionNum == 7) {
        document.getElementById("choice1").innerHTML = "14";
        document.getElementById("choice2").innerHTML = "15";
    } else if (QuestionNum == 8) {
        document.getElementById("choice1").innerHTML = "9";
        document.getElementById("choice2").innerHTML = "10";
    } else if (QuestionNum == 9) {
        document.getElementById("choice1").innerHTML = "1";
        document.getElementById("choice2").innerHTML = "2";
    } else if (QuestionNum == 10) {
        document.getElementById("choice1").innerHTML = "15";
        document.getElementById("choice2").innerHTML = "16";
    } else if (QuestionNum == 11) {
        document.getElementById("choice1").innerHTML = "16";
        document.getElementById("choice2").innerHTML = "15";
    } else if (QuestionNum == 12) {
        document.getElementById("choice1").innerHTML = "15";
        document.getElementById("choice2").innerHTML = "14";
    } else if (QuestionNum == 13) {
        document.getElementById("choice1").innerHTML = "14";
        document.getElementById("choice2").innerHTML = "15";
    } else if (QuestionNum == 14) {
        document.getElementById("choice1").innerHTML = "20";
        document.getElementById("choice2").innerHTML = "21";
    } else if (QuestionNum == 15) {
        document.getElementById("choice1").innerHTML = "22";
        document.getElementById("choice2").innerHTML = "24";
    } else if (QuestionNum == 16) {
        document.getElementById("choice1").innerHTML = "18";
        document.getElementById("choice2").innerHTML = "20";
    } else if (QuestionNum == 17) {
        document.getElementById("choice1").innerHTML = "20";
        document.getElementById("choice2").innerHTML = "22";
    } else if (QuestionNum == 18) {
        document.getElementById("choice1").innerHTML = "20";
        document.getElementById("choice2").innerHTML = "23";
    } else if (QuestionNum == 19) {
        document.getElementById("choice1").innerHTML = "30";
        document.getElementById("choice2").innerHTML = "33";
    } else if (QuestionNum == 20) {
        document.getElementById("choice1").innerHTML = "28";
        document.getElementById("choice2").innerHTML = "30";
    } else if (QuestionNum == 21) {
        document.getElementById("choice1").innerHTML = "30";
        document.getElementById("choice2").innerHTML = "28";
    } else if (QuestionNum == 22) {
        document.getElementById("choice1").innerHTML = "28";
        document.getElementById("choice2").innerHTML = "29";
    } else if (QuestionNum == 23) {
        document.getElementById("choice1").innerHTML = "26";
        document.getElementById("choice2").innerHTML = "28";
    } else if (QuestionNum == 24) {
        document.getElementById("choice1").innerHTML = "28";
        document.getElementById("choice2").innerHTML = "30";
    } else if (QuestionNum == 25) {
        document.getElementById("choice1").innerHTML = "27";
        document.getElementById("choice2").innerHTML = "28";
    } else if (QuestionNum == 26) {
        document.getElementById("choice1").innerHTML = "26";
        document.getElementById("choice2").innerHTML = "28";
    } else if (QuestionNum == 27) {
        document.getElementById("choice1").innerHTML = "34";
        document.getElementById("choice2").innerHTML = "32";
    } else if (QuestionNum == 28) {
        document.getElementById("choice1").innerHTML = "34";
        document.getElementById("choice2").innerHTML = "36";
    } else if (QuestionNum == 29) {
        document.getElementById("choice1").innerHTML = "40";
        document.getElementById("choice2").innerHTML = "43";
    }
}

function NextQuestion() {
    QuestionNum = Math.floor(Math.random() * MathQuestions.length);
    document.getElementById("GameH1").innerHTML = MathQuestions[QuestionNum];

    if (QuestionNum == 0) {
        document.getElementById("choice1").innerHTML = "7";
        document.getElementById("choice2").innerHTML = "8";
    } else if (QuestionNum == 1) {
        document.getElementById("choice1").innerHTML = "12";
        document.getElementById("choice2").innerHTML = "13";
    } else if (QuestionNum == 2) {
        document.getElementById("choice1").innerHTML = "10";
        document.getElementById("choice2").innerHTML = "11";
    } else if (QuestionNum == 3) {
        document.getElementById("choice1").innerHTML = "15";
        document.getElementById("choice2").innerHTML = "16";
    } else if (QuestionNum == 4) {
        document.getElementById("choice1").innerHTML = "14";
        document.getElementById("choice2").innerHTML = "15";
    } else if (QuestionNum == 5) {
        document.getElementById("choice1").innerHTML = "9";
        document.getElementById("choice2").innerHTML = "10";
    } else if (QuestionNum == 6) {
        document.getElementById("choice1").innerHTML = "10";
        document.getElementById("choice2").innerHTML = "11";
    } else if (QuestionNum == 7) {
        document.getElementById("choice1").innerHTML = "14";
        document.getElementById("choice2").innerHTML = "15";
    } else if (QuestionNum == 8) {
        document.getElementById("choice1").innerHTML = "9";
        document.getElementById("choice2").innerHTML = "10";
    } else if (QuestionNum == 9) {
        document.getElementById("choice1").innerHTML = "1";
        document.getElementById("choice2").innerHTML = "2";
    } else if (QuestionNum == 10) {
        document.getElementById("choice1").innerHTML = "15";
        document.getElementById("choice2").innerHTML = "16";
    } else if (QuestionNum == 11) {
        document.getElementById("choice1").innerHTML = "16";
        document.getElementById("choice2").innerHTML = "15";
    } else if (QuestionNum == 12) {
        document.getElementById("choice1").innerHTML = "15";
        document.getElementById("choice2").innerHTML = "14";
    } else if (QuestionNum == 13) {
        document.getElementById("choice1").innerHTML = "14";
        document.getElementById("choice2").innerHTML = "15";
    } else if (QuestionNum == 14) {
        document.getElementById("choice1").innerHTML = "20";
        document.getElementById("choice2").innerHTML = "21";
    } else if (QuestionNum == 15) {
        document.getElementById("choice1").innerHTML = "22";
        document.getElementById("choice2").innerHTML = "24";
    } else if (QuestionNum == 16) {
        document.getElementById("choice1").innerHTML = "18";
        document.getElementById("choice2").innerHTML = "20";
    } else if (QuestionNum == 17) {
        document.getElementById("choice1").innerHTML = "20";
        document.getElementById("choice2").innerHTML = "22";
    } else if (QuestionNum == 18) {
        document.getElementById("choice1").innerHTML = "20";
        document.getElementById("choice2").innerHTML = "23";
    } else if (QuestionNum == 19) {
        document.getElementById("choice1").innerHTML = "30";
        document.getElementById("choice2").innerHTML = "33";
    } else if (QuestionNum == 20) {
        document.getElementById("choice1").innerHTML = "28";
        document.getElementById("choice2").innerHTML = "30";
    } else if (QuestionNum == 21) {
        document.getElementById("choice1").innerHTML = "30";
        document.getElementById("choice2").innerHTML = "28";
    } else if (QuestionNum == 22) {
        document.getElementById("choice1").innerHTML = "28";
        document.getElementById("choice2").innerHTML = "29";
    } else if (QuestionNum == 23) {
        document.getElementById("choice1").innerHTML = "26";
        document.getElementById("choice2").innerHTML = "28";
    } else if (QuestionNum == 24) {
        document.getElementById("choice1").innerHTML = "28";
        document.getElementById("choice2").innerHTML = "30";
    } else if (QuestionNum == 25) {
        document.getElementById("choice1").innerHTML = "27";
        document.getElementById("choice2").innerHTML = "28";
    } else if (QuestionNum == 26) {
        document.getElementById("choice1").innerHTML = "26";
        document.getElementById("choice2").innerHTML = "28";
    } else if (QuestionNum == 27) {
        document.getElementById("choice1").innerHTML = "34";
        document.getElementById("choice2").innerHTML = "32";
    } else if (QuestionNum == 28) {
        document.getElementById("choice1").innerHTML = "34";
        document.getElementById("choice2").innerHTML = "36";
    } else if (QuestionNum == 29) {
        document.getElementById("choice1").innerHTML = "40";
        document.getElementById("choice2").innerHTML = "43";
    }
}

var Score = 0;
var ChoiceButton = null;
function Choice1 () {
    if (QuestionNum == 0) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 1) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 2) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 3) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 4) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 5) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 6) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 7) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 8) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 9) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 10) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 11) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 12) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 13) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 14) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 15) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 16) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 17) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 18) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 19) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 20) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 21) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 22) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 23) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 24) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 25) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 26) {
        ChoiceButton = 1;
        SayFalse();
    } else if (QuestionNum == 27) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 28) {
        ChoiceButton = 1;
        SayTrue();
    } else if (QuestionNum == 29) { 
        ChoiceButton = 1;
        SayTrue();
    }
}


function Choice2() {
    if (QuestionNum == 0) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 1) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 2) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 3) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 4) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 5) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 6) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 7) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 8) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 9) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 10) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 11) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 12) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 13) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 14) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 15) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 16) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 17) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 18) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 19) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 20) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 21) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 22) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 23) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 24) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 25) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 26) {
        ChoiceButton = 2;
        SayTrue();
    } else if (QuestionNum == 27) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 28) {
        ChoiceButton = 2;
        SayFalse();
    } else if (QuestionNum == 29) {
        ChoiceButton = 2;
        SayFalse();
    }
    
}
function SayTrue() {
    Score++;
    document.getElementById("Correct").play();
    NextQuestion();
}
function SayFalse() {
    if (ChoiceButton == 1) {
        document.getElementById("InCorrect").play();
    document.getElementById("choice1").style.color = "red";
    document.getElementById("choice1").style.backgroundColor = "rgb(255, 128, 128)";
    setTimeout(function () {
        Score = -1;
        NextQuestion();
        document.getElementById("choice1").style.color = "rgb(0, 227, 151)";
        document.getElementById("choice1").style.backgroundColor = "rgb(0, 165, 110)";
    }, 1000);
    }
    else if (ChoiceButton == 2) {
    document.getElementById("InCorrect").play();
    document.getElementById("choice2").style.color = "red";
    document.getElementById("choice2").style.backgroundColor = "rgb(255, 128, 128)";
    setTimeout(function () {
        Score = -1;
        NextQuestion();
        document.getElementById("choice2").style.color = "rgb(0, 227, 151)";
        document.getElementById("choice2").style.backgroundColor = "rgb(0, 165, 110)";
    }, 1000);
    }
}
/*
"3 + 4 = ?", 0
"5 + 7 = ?", 1
"8 + 2 = ?", 2
"10 + 6 = ?", 3
"9 + 5 = ?", 4
"7 + 3 = ?", 5
"2 + 9 = ?", 6
"6 + 8 = ?", 7
"4 + 5 = ?", 8
"1 + 1 = ?", 9
"11 + 4 = ?", 10
"12 + 3 = ?", 11
"13 + 2 = ?", 12
"14 + 1 = ?", 13
"15 + 5 = ?", 14
"16 + 6 = ?", 15
"17 + 3 = ?", 16
"18 + 2 = ?", 17
"19 + 1 = ?", 18
"20 + 10 = ?" 19
"21 + 7 = ?", 20
"22 + 8 = ?", 21
"23 + 5 = ?", 22
"24 + 4 = ?", 23
"25 + 3 = ?", 24
"26 + 2 = ?", 25
"27 + 1 = ?", 26
"28 + 6 = ?", 27
"29 + 5 = ?", 28
"30 + 10 = ?" 29
*/