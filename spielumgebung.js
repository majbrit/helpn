// JavaScript für die Spielumgebung
// Scores
var punkte = 0;
var audiofalsch = new Audio('G/falsch.mp3');
audiofalsch.volume = "0.1";
var audiorichtig = new Audio('G/richtig.mp3');
audiorichtig.volume = "0.1";


//Klasse für alle Level
class Stage {
    constructor(name, background) {
        this.name = name;
        this.background = background;

    }
    drawStage() {
        var gamearea = document.getElementById('gamearea');
        var stage1 = this.getContent();
        stage1.style.backgroundImage = this.background;
        gamearea.innerHTML = " ";
        gamearea.appendChild(stage1);

    }
}



// Klasse für alle Richtig und Falsch Seiten
class Stagerf {
    constructor(name, background) {
        this.name = name;
        this.background = background;
    }
    drawStage() {
        var gamearea = document.getElementById('gamearea');
        var stage1r = this.getContent();
        stage1r.style.backgroundColor = this.background;
        gamearea.innerHTML = " ";
        gamearea.appendChild(stage1r);

    }
}


// Level 1 Katzen
class Firststage extends Stage {
    constructor() {
        super("Level 1", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage1 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/Katzen.gif";
        stage1.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "Schwarz weiße Katze";
        stage1.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "Getigerte Katze";
        stage1.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "Graue Katze";
        stage1.appendChild(button3);
        button3.id = "b3";

        //Funktionen der Button
        button.onclick = function() {
            audiofalsch.play();
            falsch1.drawStage()
        }
        button2.onclick = function() {
            audiorichtig.play();
            richtig1.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch1.drawStage()
        }

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Nur eine Aussage der Katzen ist wahr und nur eine bekommt regionales Futter. Welche Katze bekommt regionales Futter und verursacht dadurch weniger CO2?";
        stage1.appendChild(text);
        text.id = "text";

        //Geräusche
        var audio = new Audio('G/Katze.mp3');
        audio.play();
        stage1.appendChild(audio);

        return stage1;
    }
}

// Richtig für Level1 Katzen

class Richtig1 extends Stagerf {
    constructor() {
        super("Richtig 1", "green")
  }
    getContent() {
        var stage1r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage1r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage1r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage1r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Die graue Katze sagt die Wahrheit, somit bekommt die getigerte Katze regionales Futter.";
        stage1r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level2.drawStage();
        }
        return stage1r;
    }
}

// Falsch für Level1 Katzen
class Falsch1 extends Stagerf {
    constructor() {
        super("Falsch 1", "red")
    }
    getContent() {
        var stage1f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage1f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage1f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage1f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Die graue Katze sagt die Wahrheit, somit bekommt die getigerte Katze regionales Futter.";
        stage1f.appendChild(loesung);
        loesung.id = "loesung";


        //Funktion des Buttons
        buttona.onclick = function() {
            level2.drawStage();
        }
        return stage1f;
    }
}

// Level 2 Kühe
class Secoundstage extends Stage {
    constructor() {
        super("Level 2", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage2 = document.createElement('div');




        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/kuh.gif";
        stage2.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "angebautes Futtermittel";
        stage2.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "Weizen";
        stage2.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "Soja";
        stage2.appendChild(button3);
        button3.id = "b3";

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Durch die Tierhaltung wird der Schädliche Treibhausgas Methan ausgestoßen. Die Wahl des Futtermittels ist entscheidend für den Grad der Belastung des Kuh-Abgases. Welches der Futtermittel ist weniger belastend für die Umwelt und ist gesünder für die Kuh?";
        stage2.appendChild(text);
        text.id = "text";

        //Funktionen der Button
        button.onclick = function() {
            audiorichtig.play();
            richtig2.drawStage()
        }
        button2.onclick = function() {
            audiofalsch.play();
            falsch2.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch2.drawStage()
        }

        //Geräusche
        var audio = new Audio('G/kuh_muh.mp3');
        audio.play();
        stage2.appendChild(audio);

        return stage2;
    }
}

//Richtig für Level2 Kühe
class Richtig2 extends Stagerf {
    constructor() {
        super("Richtig 2", "green")
    }
    getContent() {
        var stage2r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage2r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage2r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage2r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Das angebaute Futtermittel ist die Umweltfreundlichere Variante. Sie ist auch kostengünstiger und auch gesünder für die Kühe.";
        stage2r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level3.drawStage();
        }
        return stage2r;
    }
}

// Falsch für Level2 Kühe
class Falsch2 extends Stagerf {
    constructor() {
        super("Falsch 2", "red")
    }
    getContent() {
        var stage2f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage2f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage2f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage2f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Das angebaute Futtermittel ist die Umweltfreundlichere Variante. Sie ist auch kostengünstiger und auch gesünder für die Kühe.";
        stage2f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level3.drawStage();
        }
        return stage2f;
    }
}

// Level 3 Frösche
class Thirdstage extends Stage {
    constructor() {
        super("Level 3", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage3 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/frosch.gif";
        stage3.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "Frosch Nr. 6";
        stage3.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "Frosch Nr. 12";
        stage3.appendChild(button2);
        button2.id = "b2";

    //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "Frosch Nr. 2";
        stage3.appendChild(button3);
        button3.id = "b3";

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Der See wurde von den Menschen verseucht. Genau ein Frosch ist heute krank geworden. Jeder orange gefärbte Frosch ist gestern schon krank geworden. Kein Frosch, der auf einem dunkelgrünen Blatt sitzt, ist krank geworden. Alle Frösche, die gestern schon krank geworden sind, sind heute nicht krank geworden. Direkt nebeneinander sitzende Frösche der gleichen Farbe werden immer gleichzeitig krank. Alle gelben Frösche, die auf einem Stein sitzen, sind gestern krank geworden. Welcher Frosch ist heute krank geworden?";
        stage3.appendChild(text);
        text.id = "text";


        //Funktionen der Button
        button.onclick = function() {
            audiorichtig.play();
            richtig3.drawStage()
        }
        button2.onclick = function() {
            audiofalsch.play();
            falsch3.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch3.drawStage()
        }

        //Geräusche
        var audio = new Audio('G/Frosch2.mp3');
        audio.play();
        stage3.appendChild(audio);

        return stage3;
    }
}

//Richtig für Level3 Frösche
class Richtig3 extends Stagerf {
    constructor() {
        super("Richtig 3", "green")
    }
    getContent() {
        var stage3r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage3r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage3r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage3r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Frosch Nr. 6 ist heute krank geworden.";
        stage3r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level4.drawStage();
        }
        return stage3r;
    }
}

// Falsch für Level3 Frösche
class Falsch3 extends Stagerf {
    constructor() {
        super("Falsch 3", "red")
    }
    getContent() {
        var stage3f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage3f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage3f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage3f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Frosch Nr. 6 ist heute krank geworden.";
        stage3f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level4.drawStage();
        }
        return stage3f;
    }
}

// Level 4 Bienen
class Forthstage extends Stage {
    constructor() {
        super("Level 4", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage4 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/Biene.gif";
        stage4.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "Sie ertrinken";
        stage4.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "Es wird zu warm";
        stage4.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "Viren und Krankheitserreger";
        stage4.appendChild(button3);
        button3.id = "b3";

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Was ist einer der Gründe wieso Bienen sterben?";
        stage4.appendChild(text);
        text.id = "text";

        //Funktionen der Button
        button.onclick = function() {
            audiofalsch.play();
            falsch4.drawStage()
        }
        button2.onclick = function() {
            audiofalsch.play();
            falsch4.drawStage()
        }
        button3.onclick = function()
        {
            audiorichtig.play();
            richtig4.drawStage()
        }

        //Geräusche
        var audio = new Audio('G/biene.mp3');
        audio.play();
        stage4.appendChild(audio);

        return stage4;
    }
}

//Richtig für Level4 Bienen
class Richtig4 extends Stagerf {
    constructor() {
        super("Richtig 4", "green")
    }
    getContent() {
        var stage4r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage4r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage4r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage4r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Sie sterben unter anderem an Vieren und Krankheitserreger.";
        stage4r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level5.drawStage();
        }
        return stage4r;
    }
}

// Falsch für Level4 Bienen
class Falsch4 extends Stagerf {
    constructor() {
        super("Falsch 4", "red")
    }
    getContent() {
        var stage4f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage4f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage4f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage4f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Sie sterben unter anderem an Vieren und Krankheitserreger.";
        stage4f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level5.drawStage();
        }
        return stage4f;
    }
}

// Level 5 Wal
class Fifthstage extends Stage {
    constructor() {
        super("Level 5", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage5 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/wal.gif";
        stage5.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "100 kg";
        stage5.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "13 kg";
        stage5.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "40 kg";
        stage5.appendChild(button3);
        button3.id = "b3";

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="In einem Cuvier-Schnabelwal wurden c kg Plastik gefunden. Die höchste Menge, die je in einem Wal gefunden wurde beträgt 250% von diesem Wert. Wieviel ist dies in kg?";
        stage5.appendChild(text);
        text.id = "text";

        //Rechenaufgabe passend zu Fragestellung
             var aufgabe = document.createElement('div');
             aufgabe.innerHTML ="c";
             aufgabe.innerHTML ="c = 8 : 2 + 64 - 2 - 26";
             stage5.appendChild(aufgabe);
             aufgabe.id = "aufgabe";


       //Funktionen der Button
        button.onclick = function() {
            audiorichtig.play();
            richtig5.drawStage()
        }
        button2.onclick = function() {
            audiofalsch.play();
            falsch5.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch5.drawStage()
        }

        //Geräusche
        var audio = new Audio('G/whale3.wav');
        audio.play();
        stage5.appendChild(audio);

        return stage5;
    }
}

//Richtig für Level5 Wal
class Richtig5 extends Stagerf {
    constructor() {
        super("Richtig 5", "green")
    }
    getContent() {
        var stage5r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage5r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage5r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage5r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Im November 2019 wurde ein Pottwal mit 100 kg Plastik im Magen gefunden.";
        stage5r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level6.drawStage();
        }
        return stage5r;
    }
}

// Falsch für Level5 Wal
class Falsch5 extends Stagerf {
    constructor() {
        super("Falsch 5", "red")
    }
    getContent() {
        var stage5f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage5f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage5f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage5f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Im November 2019 wurde ein Pottwal mit 100 kg Plastik im Magen gefunden.";
        stage5f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level6.drawStage();
        }
        return stage5f;
    }
}

// Level 6 Schildkröten
class Sixthstage extends Stage {
    constructor() {
        super("Level 6", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage6 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/Schildkröte2.gif";
        stage6.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "4243";
        stage6.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "8251";
        stage6.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "5341";
        stage6.appendChild(button3);
        button3.id = "b3";

        //Funktionen der Button
        button.onclick = function() {
            audiofalsch.play();
            falsch6.drawStage()
        }
        button2.onclick = function() {
            audiofalsch.play();
            falsch6.drawStage()
        }
        button3.onclick = function()
        {
            audiorichtig.play();
            richtig6.drawStage()
        }

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Plastiktüten: abdekllnuu abehlllu degklnnruü eghllnrü";
        stage6.appendChild(text);
        text.id = "text";

        //Geräusche
        var audio = new Audio('G/Meer.mp3');
        audio.play();
        stage6.appendChild(audio);

        return stage6;
    }
}

// Richtig für Level6 Schildkröten
class Richtig6 extends Stagerf {
    constructor() {
        super("Richtig 6", "green")
    }
    getContent() {
        var stage6r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage6r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage6r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage6r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="5341 ist richtig, da 5 dunkelblaue, 3 hellblaue, 4 dunkelgrüne und eine hellgrüne Plastiktüte im Bild zu finden waren.";
        stage6r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level7.drawStage();
        }
        return stage6r;
    }
}

// Falsch für Level6 Schildkröten
class Falsch6 extends Stagerf {
    constructor() {
        super("Falsch 6", "red")
    }
    getContent() {
        var stage6f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage6f.appendChild(p);
        p.id = "punkte";

        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage6f.appendChild(buttona);
        buttona.id = "ba";

        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage6f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        var loesung = document.createElement('div');
        loesung.innerHTML ="5341 ist richtig, da 5 dunkelblaue, 3 hellblaue, 4 dunkelgrüne und eine hellgrüne Plastiktüte im Bild zu finden waren.";
        stage6f.appendChild(loesung);
        loesung.id = "loesung";



        buttona.onclick = function() {
            level7.drawStage();
        }
        return stage6f;
    }
}

// Level 7 Robbe
class Seventhstage extends Stage {
    constructor() {
        super("Level 7", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage7 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/robbe.gif";
        stage7.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "22.000";
        stage7.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "26.000";
        stage7.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "18.000";
        stage7.appendChild(button3);
        button3.id = "b3";

        //Funktionen der Button
        button.onclick = function() {
            audiofalsch.play();
            falsch7.drawStage()
        }
        button2.onclick = function() {
            audiorichtig.play();
            richtig7.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch7.drawStage()
        }

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Wie viele Robben starben im Jahre 2016 aufgrund Überfischung?";
        stage7.appendChild(text);
        text.id = "text";

        //Geräusche
        var audio = new Audio('G/Schiff.mp3');
        audio.play();
        stage7.appendChild(audio);

        return stage7;
    }
}

// Richtig für Level7 Robbe
class Richtig7 extends Stagerf {
    constructor() {
        super("Richtig 7", "green")
    }
    getContent() {
        var stage7r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage7r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage7r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage7r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Im Jahr 2016 starben 26.000 Robben, da sie aufgrund der Überfischung hungerten.";
        stage7r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level8.drawStage();
        }
        return stage7r;
    }
}

// Falsch für Level7 Robbe
class Falsch7 extends Stagerf {
    constructor() {
        super("Falsch 7", "red")
    }
    getContent() {
        var stage7f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage7f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage7f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage7f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Im Jahr 2016 starben 26.000 Robben, da sie aufgrund der Überfischung hungerten.";
        stage7f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level8.drawStage();
        }
        return stage7f;
    }
}

// Level 8 Boot
class Eighthstage extends Stage {
    constructor() {
        super("Level8", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage8 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/boot.gif";
        stage8.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "8200 Tonnen";
        stage8.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "7200 Tonnen";
        stage8.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "7000 Tonnen";
        stage8.appendChild(button3);
        button3.id = "b3";

        //Funktionen der Button
        button.onclick = function() {
            audiofalsch.play();
            falsch8.drawStage()
        }
        button2.onclick = function() {
            audiorichtig.play();
            richtig8.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch8.drawStage()
        }

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Wenn ein Schiff 2000 Tonnen Öl im Meer verliert und ein weiteres doppelt so viel und ein drittes noch einmal 20% von der Menge der ersten beiden Schiffe, wieviel Tonnen Öl sind dann im Meer?";
        stage8.appendChild(text);
        text.id = "text";

        //Geräusche
        var audio = new Audio('G/Schiff.mp3');
        audio.play();
        stage8.appendChild(audio);

        return stage8;
    }
}

// Richtig für Level8 Boot
class Richtig8 extends Stagerf {
    constructor() {
        super("Richtig 8", "green")
    }
    getContent() {
        var stage8r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage8r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage8r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage8r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Es sind 7200 Tonnen Öl im Meer.";
        stage8r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level9.drawStage();
        }
        return stage8r;
    }
}

// Falsch für Level8 Boot
class Falsch8 extends Stagerf {
    constructor() {
        super("Falsch 8", "red")
    }
    getContent() {
        var stage8f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage8f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage8f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage8f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Es sind 7200 Tonnen Öl im Meer.";
        stage8f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level9.drawStage();
        }
        return stage8f;
    }
}

// Level 9 Brand
class Ninthstage extends Stage {
    constructor() {
        super("Level9", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage9 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/feuer.gif";
        stage9.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "Kohlendioxid Ausstoß";
        stage9.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "Kohlenmonoxid Ausstoß";
        stage9.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "Kohlenstoffdioxid ausstoß";
        stage9.appendChild(button3);
        button3.id = "b3";

        //Funktionen der Button
        button.onclick = function() {
            audiorichtig.play();
            richtig9.drawStage()
        }
        button2.onclick = function() {
            audiofalsch.play();
            falsch9.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch9.drawStage()
        }

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Pro Jahr werden ca. 30 Millionen Hektar des Regenwaldes abgeholzt. Was ist die Folge davon?";
        stage9.appendChild(text);
        text.id = "text";

        //Geräusche
        var audio = new Audio('G/feuer.mp3');
        audio.play();
        stage9.appendChild(audio);

        return stage9;
    }
}

// Richtig für Level9 Brand
class Richtig9 extends Stagerf {
    constructor() {
        super("Richtig 9", "green")
    }
    getContent() {
        var stage9r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage9r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage9r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage9r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Die Abholzung der Wälder macht ungefähr 15% des weltweiten Ausstoßes von Kohlendioxid aus, welches zur globalen Erwärmung beiträgt.";
        stage9r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level10.drawStage();
        }
        return stage9r;
    }
}

// Falsch für Level9 Brand
class Falsch9 extends Stagerf {
    constructor() {
        super("Falsch ", "red")
    }
    getContent() {
        var stage9f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage9f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage9f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage9f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Die Abholzung der Wälder macht ungefähr 15% des weltweiten Ausstoßes von Kohlendioxid aus, welches zur globalen Erwärmung beiträgt";
        stage9f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level10.drawStage();
        }
        return stage9f;
    }
}

// Level 10 Wald
class Tenthstage extends Stage {
    constructor() {
        super("Level10", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage10 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/wald.gif";
        stage10.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "Blitzeinschlag";
        stage10.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "Hitzeperioden";
        stage10.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "Brandstiftung";
        stage10.appendChild(button3);
        button3.id = "b3";

        //Funktionen der Button
        button.onclick = function() {
            audiofalsch.play();
            falsch10.drawStage()
        }
        button2.onclick = function() {
            audiofalsch.play();
            falsch10.drawStage()
        }
        button3.onclick = function()
        {
            audiorichtig.play();
            richtig10.drawStage()
        }

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Was ist die meiste/häufigste Ursache von Waldbränden?";
        stage10.appendChild(text);
        text.id = "text";

        //Geräusche
        var audio = new Audio('G/feuer.mp3');
        audio.play();
        stage10.appendChild(audio);

        return stage10;
    }
}

// Richtig für Level10 Wald
class Richtig10 extends Stagerf {
    constructor() {
        super("Richtig 10", "green")
    }
    getContent() {
        var stage10r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage10r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage10r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage10r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Brandstiftung ist die häufigste Waldbrand Ursache. Ein großer Teil der Waldbrände ist auf Brandstiftung und leichtsinniges Verhalten zurückzuführen";
        stage10r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level11.drawStage();
        }
        return stage10r;
    }
}

// Falsch für Level10 Wald
class Falsch10 extends Stagerf {
    constructor() {
        super("Falsch ", "red")
    }
    getContent() {
        var stage10f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage10f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage10f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage10f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="Brandstiftung ist die häufigste Waldbrand Ursache. Ein großer Teil der Waldbrände ist auf Brandstiftung und leichtsinniges Verhalten zurückzuführen";
        stage10f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level11.drawStage();
        }
        return stage10f;
    }
}

// Level 11 Australien
class Eleventhstage extends Stage {
    constructor() {
        super("Level11", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage11 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/Australien.gif";
        stage11.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "3 Millionen Hektar";
        stage11.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "6 Millionen Hektar";
        stage11.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "8 Millionen Hektar";
        stage11.appendChild(button3);
        button3.id = "b3";

        //Funktionen der Button
        button.onclick = function() {
            audiofalsch.play();
            falsch11.drawStage()
        }
        button2.onclick = function() {
            audiorichtig.play();
            richtig11.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch11.drawStage()
        }

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Wieviel Hektar wurde in Australien schon verbrannt?";
        stage11.appendChild(text);
        text.id = "text";

        //Geräusche
        var audio = new Audio('G/feuer.mp3');
        audio.play();
        stage11.appendChild(audio);

        return stage11;
    }
}

// Richtig für Level11 Australien
class Richtig11 extends Stagerf {
    constructor() {
        super("Richtig 11", "green")
    }
    getContent() {
        var stage11r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage11r.appendChild(p);
        p.id = "punkte";


        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage11r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage11r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="In Australien wüten die stärksten Brände in der Geschichte des Landes. 6 Millionen Hektar wurde in Australien schon verbrannt.";
        stage11r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level12.drawStage();
        }
        return stage11r;
    }
}

// Falsch für Level11 Australien
class Falsch11 extends Stagerf {
    constructor() {
        super("Falsch ", "red")
    }
    getContent() {
        var stage11f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage11f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage11f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage11f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="In Australien wüten die stärksten Brände in der Geschichte des Landes. 6 Millionen Hektar wurde in Australien schon verbrannt.";
        stage11f.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            level12.drawStage();
        }
        return stage11f;
    }
}

// Level 12 Textilbranche
class Twelvestage extends Stage {
    constructor() {
        super("Level 12", "url('Bilder/hintergrund.jpg')")
    }
    getContent() {
        var stage12 = document.createElement('div');

        //Bild
        var image = document.createElement("IMG");
        image.src = "Bilder/Tshirts.gif";
        stage12.appendChild(image);
        image.id="image";

        //erster Button
        var button = document.createElement('button');
        button.innerHTML = "2.7 Milliarden Tonnen CO2 pro Jahr";
        stage12.appendChild(button);
        button.id = "b1";

        //zweiter Button
        var button2 = document.createElement('button');
        button2.innerHTML = "1,2 Milliarden Tonnen CO2 pro Jahr";
        stage12.appendChild(button2);
        button2.id = "b2";

        //dritter Button
        var button3 = document.createElement('button')
        button3.innerHTML = "1,8 Milliarden Tonnen CO2 pro Jahr";
        stage12.appendChild(button3);
        button3.id = "b3";

        //Funktionen der Button
        button.onclick = function() {
            audiofalsch.play();
            falsch12.drawStage()
        }
        button2.onclick = function() {
            audiorichtig.play();
            richtig12.drawStage()
        }
        button3.onclick = function()
        {
            audiofalsch.play();
            falsch12.drawStage()
        }

        //Fragestellung
        var text = document.createElement('div');
        text.innerHTML ="Die Textilbranche ist ein großer Umweltverschmutzer. Wie viel CO2 verbraucht die Textilbranche durchschnittlich im Jahr?";
        stage12.appendChild(text);
        text.id = "text";

        //Geräusche
        var audio = new Audio('G/nähen.mp3');
        audio.play();
        stage12.appendChild(audio);

        return stage12;
    }
}

// Richtig für Level12 Textilbranche
class Richtig12 extends Stagerf {
    constructor() {
        super("Richtig 12", "green")
    }
    getContent() {
        var stage12r = document.createElement('div');

        punkte = punkte + 1;
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage12r.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage12r.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Richtig"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Richtig";
        stage12r.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="1,2 Milliarden Tonnen CO2 pro Jahr, mehr als internationaler Flug- und Schiffsverkehr zusammen.";
        stage12r.appendChild(loesung);
        loesung.id = "loesung";

        //Funktion des Buttons
        buttona.onclick = function() {
            endstage.drawStage();
        }
        return stage12r;
    }
}

// Falsch für Level12 Textilbranche
class Falsch12 extends Stagerf {
    constructor() {
        super("Falsch 12", "red")
    }
    getContent() {
        var stage12f = document.createElement('div');

        //Punkte
        var p = document.createElement('div');
        p.innerHTML = "Punkte: " +punkte;
        stage12f.appendChild(p);
        p.id = "punkte";

        //Button für weiter
        var buttona = document.createElement('button');
        buttona.innerHTML = "weiter";
       stage12f.appendChild(buttona);
        buttona.id = "ba";

        //Überschrift "Falsch"
        var richtigfalsch = document.createElement('div');
        richtigfalsch.innerHTML ="Falsch";
        stage12f.appendChild(richtigfalsch);
        richtigfalsch.id = "richtigfalsch";

        //Lösungstext
        var loesung = document.createElement('div');
        loesung.innerHTML ="1,2 Milliarden Tonnen CO2 pro Jahr, mehr als internationaler Flug- und Schiffsverkehr zusammen.";
        stage12f.appendChild(loesung);
        loesung.id = "loesung";


        //Funktion des Buttons
        buttona.onclick = function() {
            endstage.drawStage();
        }
        return stage12f;
    }
}


//Message

class Endstage extends Stage {
    constructor() {
        super("Ende", "url('Bilder/start.gif')")
    }
    getContent() {
        var endstage = document.createElement('div');

        var text = document.createElement('div');
        text.innerHTML ="Wie viel Umweltschutz steckt in dir?";
        endstage.appendChild(text);
        text.id = "text";

        var pu = document.createElement('div');
        pu.innerHTML = "Punkte: " +punkte;
        endstage.appendChild(pu);
        pu.id = "pu";

        var punktetext = document.createElement('div');
        if (punkte == 0) {
          punktetext.innerHTML = "Wie schade! Leider mangelt es bei dir noch an Wissen über den Klimaschutz und der Umwelt.  Versuche dich auf jeden Fall über dieses Thema zu erkundigen, denn jeder einzelne kann einen großen Beitrag zum Umwelt- und Klimaschutz beitragen.";
          endstage.appendChild(punktetext);
        } else if (punkte == 1) {
          punktetext.innerHTML = "Wie schade! Leider mangelt es bei dir noch an Wissen über den Klimaschutz und der Umwelt. Versuche dich auf jeden Fall über dieses Thema zu erkundigen, denn jeder einzelne kann einen großen Beitrag zum Umwelt- und Klimaschutz beitragen.";
          endstage.appendChild(punktetext);
        } else if (punkte == 2) {
          punktetext.innerHTML = "Wie schade! Leider mangelt es bei dir noch an Wissen über den Klimaschutz und der Umwelt. Versuche dich auf jeden Fall über dieses Thema zu erkundigen, denn jeder einzelne kann einen großen Beitrag zum Umwelt- und Klimaschutz beitragen.";
          endstage.appendChild(punktetext);
        } else if (punkte == 3) {
          punktetext.innerHTML = "Wie schade! Leider mangelt es bei dir noch an Wissen über den Klimaschutz und der Umwelt.  Versuche dich auf jeden Fall über dieses Thema zu erkundigen, denn jeder einzelne kann einen großen Beitrag zum Umwelt- und Klimaschutz beitragen.";
          endstage.appendChild(punktetext);
        } else if (punkte == 4) {
          punktetext.innerHTML = "Gratuliere, du hast die Quiz-Fragen teilweise richtig beantwortet, doch, was zum Vorschein kommt, sind die Wissenslücken, die umbedingt durch weitere Informationen über den Klimaschutz gefüllt werden müssen. Es schadet nicht, sich Wissen anzueignen.";
          endstage.appendChild(punktetext);
        } else if (punkte == 5) {
          punktetext.innerHTML = "Gratuliere, du hast die Quiz-Fragen teilweise richtig beantwortet, doch, was zum Vorschein kommt, sind die Wissenslücken, die umbedingt durch weitere Informationen über den Klimaschutz gefüllt werden müssen. Es schadet nicht, sich Wissen anzueignen.";
          endstage.appendChild(punktetext);
        } else if (punkte == 6) {
          punktetext.innerHTML = "Gratuliere, du hast die Quiz-Fragen teilweise richtig beantwortet, doch, was zum Vorschein kommt, sind die Wissenslücken, die umbedingt durch weitere Informationen über den Klimaschutz gefüllt werden müssen. Es schadet nicht, sich Wissen anzueignen.";
          endstage.appendChild(punktetext);
        } else if (punkte == 7) {
          punktetext.innerHTML = "WOW! Du kennst dich sehr gut mit dem Thema Umweltschutz aus, aber da sind noch einige Lücken, die man mit weiterem Wissen füllen könnte. Weiter so!";
          endstage.appendChild(punktetext);
        } else if (punkte == 8) {
          punktetext.innerHTML = "WOW! Du kennst dich sehr gut mit dem Thema Umweltschutz aus, aber da sind noch einige Lücken, die man mit weiterem Wissen füllen könnte. Weiter so!";
          endstage.appendChild(punktetext);
        } else if (punkte == 9) {
          punktetext.innerHTML = "WOW! Du kennst dich sehr gut mit dem Thema Umweltschutz aus, aber da sind noch einige Lücken, die man mit weiterem Wissen füllen könnte. Weiter so!";
          endstage.appendChild(punktetext);
        } else if (punkte == 10) {
          punktetext.innerHTML = "Power-Aktivist/-in! In Sachen Umweltschutz macht dir niemand etwas vor. Du kennst dich schon super aus und lernst täglich dazu. Tausche dich mit Familie und Freunden aus und überlegt gemeinsam, wie man die Umwelt besser schützen könnte.";
          endstage.appendChild(punktetext);
        } else if (punkte == 11) {
          punktetext.innerHTML = "Power-Aktivist/-in! In Sachen Umweltschutz macht dir niemand etwas vor. Du kennst dich schon super aus und lernst täglich dazu. Tausche dich mit Familie und Freunden aus und überlegt gemeinsam, wie man die Umwelt besser schützen könnte.";
          endstage.appendChild(punktetext);
        } else if (punkte == 12) {
          punktetext.innerHTML = "Power-Aktivist/-in! In Sachen Umweltschutz macht dir niemand etwas vor. Du kennst dich schon super aus und lernst täglich dazu. Tausche dich mit Familie und Freunden aus und überlegt gemeinsam, wie man die Umwelt besser schützen könnte.";
          endstage.appendChild(punktetext);
        } else {
          punktetext.innerHTML = "Fehler";
          endstage.appendChild(punktetext);
        }
        punktetext.id = "punktetext";

        return endstage;
    }
}



var level1 = new Firststage();
var richtig1 = new Richtig1();
var falsch1 = new Falsch1();

var level2 = new Secoundstage();
var richtig2 = new Richtig2();
var falsch2 = new Falsch2();

var level3 = new Thirdstage();
var richtig3 = new Richtig3();
var falsch3 = new Falsch3();

var level4 = new Forthstage();
var richtig4 = new Richtig4();
var falsch4 = new Falsch4();

var level5 = new Fifthstage();
var richtig5 = new Richtig5();
var falsch5 = new Falsch5();

var level6 = new Sixthstage();
var richtig6 = new Richtig6();
var falsch6 = new Falsch6();

var level7 = new Seventhstage();
var richtig7 = new Richtig7();
var falsch7 = new Falsch7();

var level8 = new Eighthstage();
var richtig8 = new Richtig8();
var falsch8 = new Falsch8();

var level9 = new Ninthstage();
var richtig9 = new Richtig9();
var falsch9 = new Falsch9();

var level10 = new Tenthstage();
var richtig10 = new Richtig10();
var falsch10 = new Falsch10();

var level11 = new Eleventhstage();
var richtig11 = new Richtig11();
var falsch11 = new Falsch11();

var level12 = new Twelvestage();
var richtig12 = new Richtig12();
var falsch12 = new Falsch12();

var endstage = new Endstage();


level1.drawStage();
