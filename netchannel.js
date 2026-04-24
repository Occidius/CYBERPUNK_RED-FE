var PCQUEST = 0;
var JOBTASK = 1;
var MAJORMINOR = 2;
var EXOQUEST = 3;

var CAMPAIGN = 0
var NPCQUEST = 1;


function SUBMIT()
{
    const userName = document.getElementById("entryNAME");
    const userPass = document.getElementById("entryPASS");

    userNInput = userName.value;
    userPInput = userPass.value;

    result = loginCheck(userNInput, userPInput);
    

    if (result === 0)
    {
        ACE();
    }
    else if (result === 1)
    {
        HELLA();
    }
    else if (result === 2)
    {
        VALVE();
    }
    else if (result === 3)
    {
        ROOK();
    }
    else{
        alert("INVALID: NO SUCH LOG FOUND");
        CLEARPASS();
    }
    COMMONQM();
}

function CLEAR()
{
    const userName = document.getElementById("entryNAME");
    const userPass = document.getElementById("entryPASS");
    userName.value = "";
    userPass.value = "";
}

function CLEARPASS()
{
     const userPass = document.getElementById("entryPASS");
    userPass.value = "";
}

function ACE()
{
    document.getElementById('login').style.display = 'none';
    document.getElementById('NETh1').textContent = 'Anastasia \'The King\' Tanaka';
    document.getElementById('NETh1').style.fontSize = '350%';
    document.getElementById('netData').style.backgroundColor = 'rgb(255, 160, 231)';
    document.getElementById('netData').style.borderColor = 'black';
    document.getElementById('netData').style.color = 'black';
    document.getElementById('plrImg').src = './images/PLRIMAGES/ACE.jpg';
    POPULATEAQM();
}

function HELLA()
{
    document.getElementById('login').style.display = 'none';
    document.getElementById('NETh1').textContent = 'Hella \'Hellraiser\' Kilatan';
    document.getElementById('NETh1').style.fontSize = '350%';
    document.getElementById('netData').style.backgroundColor = 'rgb(249, 123, 247)';
    document.getElementById('netData').style.borderColor = 'rgb(255, 0, 179)';
    document.getElementById('netData').style.color = 'black';
    document.getElementById('plrImg').src = './images/PLRIMAGES/HELLA.png';
    POPULATEHQM();
}

function VALVE()
{
    document.getElementById('login').style.display = 'none';
    document.getElementById('NETh1').textContent = 'Valve';
    document.getElementById('NETh1').style.fontSize = '350%';
    document.getElementById('netData').style.backgroundColor = 'rgb(148, 148, 148)';
    document.getElementById('netData').style.borderColor = 'rgb(0, 0, 0)';
    document.getElementById('plrImg').src = './images/PLRIMAGES/VALVE.jpg';
    POPULATEVQM();
}

function ROOK()
{
    document.getElementById('login').style.display = 'none';
    document.getElementById('NETh1').textContent = 'Samantha \'Sammie\' Barnes';
    document.getElementById('NETh1').style.fontSize = '350%';
    document.getElementById('netData').style.backgroundColor = 'rgb(255, 255, 0)';
    document.getElementById('netData').style.borderColor = 'rgb(208, 255, 0)';
    document.getElementById('plrImg').src = './images/PLRIMAGES/ROOK.jpg';
    POPULATERQM();
}


function POPULATEAQM()
{
    const QMTARGET = document.getElementsByClassName('QMItem');
    PCQUEST1 = "Vigilante Shit:\n-BIG SIS MICHIKO!\n=> Succesfully infiltrate the Arasaka Datavault Alt pin-pointed and upload her internal gateway\n\n";
    PCQUEST2 = "Anti-Hero:\n-With the Ghoul trapped under the Icarus rubble, we can safely assume most if not EVERYONE we talk to for the next few days to be the real-deal.\n=> Use Alt's help to get out of Arasaka sight-lines\n\n";
    PCQUEST3 = "";
    PCQUEST4 = "UNRECOVERABLES: WATSON ADDRESS\nUNRECOVERABLES: CORPO PLAZA ADDRESS\nUNRECOVERABLES: WESTBROOK ADDRESS\n";
    QMTARGET[PCQUEST].textContent = PCQUEST1 + PCQUEST2 + PCQUEST3 + PCQUEST4;   

    JOBTASK1 = ""; 
    JOBTASK2 = "Calus's Lockbox:\n-[3] Electronic Locks\n-[2] Brass Padlocks\n-[1] Broken Biometric Reader\n";     
    JOBTASKF = "NEPHEW: Payout processing: Estimated for November 6th\nPRIMO:N/A\nSJ:N/A\nALT: N/A\nSiobhan:N/A\n";
    JOBTASK3 = "Date Night: The date with Mito went...kind of well? He's sweet, and a little scatter-brained - Wait for Mito to reach out\n";
    JOBTASK4 = "Tequila Payout: 2250 EB [SET TO CLOSE IN {1} DAY]\n";
    QMTARGET[JOBTASK].textContent = JOBTASK1 + JOBTASK2 + JOBTASK3 + JOBTASK4 + JOBTASKF;
    
    MINMAJ1 = "";
    MINMAJ2 = "";

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2;
}

function POPULATEHQM(){
    const QMTARGET = document.getElementsByClassName('QMItem');
    PCQuest1 = "Sucka Free:\n-Alright, lets play the role of pain-in-Arasakas-Ass\n=> Help Ace and the crew get Alt Cunningham into Arasaka's Datavault\n\n";
    PCQuest2 = "New American Idiot:\n-One and done, now for the rest of them\n=> Converse with Mito about the other buildings on 11th Ave\n\n";
    QMTARGET[PCQUEST].textContent = PCQuest1 + PCQuest2;

    JOBTASK1 = "N.A.I. : 2,000 /16,000 EB\n";
    JOBTASK2 = "";
    JOBTASK3 = ""; 
    QMTARGET[JOBTASK].textContent = JOBTASK1 + JOBTASK2 + JOBTASK3;

    MINMAJ1 = "";
    MINMAJ2 = "";

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2;
}
function POPULATEVQM(){
    const QMTARGET = document.getElementsByClassName('QMItem');
    PCQuest1 = "Dirty Harry:\nDad's name was Teddy, or 'Theodore'.....The video mentioned the Valentinos\n=> Find a way to contact the Valentinos in Heywood\n";
    PCQuestE = "ALTERNATIVE: Help Mallard access the report Michiko gave him\n\n";
    PCQuestX = "Kids With Guns:\nA potential cure for Scrappy has been found\n=>Acquire an active ALAN particle sample";
    PCQuest2 = "BOOGALOO COMPONENTS:\n-WEAPONS TECH: 49\n-HIGH-GRADE MATS: 17\n";
    QMTARGET[PCQUEST].textContent = PCQuest1 + PCQuestE+ PCQuest2;

    JOBTASK1 = "Amalgamated Standard Hand: 0%\n"; 
    JOBTASK2 = "Turtle Kings Mantle: COMPLETED\n"; 
    JOBTASK3 = "Rocket Powered Heely's: COMPLETED\n";
    JOBTASK4 = "Surprise C4: COMPLETED\n";
    JOBTASK5 = "MUNCHIES: 0%\n";
    JOBTASK6 = "ALT F4: COMPLETED\n";
    QMTARGET[JOBTASK].textContent = JOBTASK1 + JOBTASK2 + JOBTASK3 + JOBTASK4 + JOBTASK5 + JOBTASK6;

    MINMAJ1 = "";
    MINMAJ2 = "";

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2;
}
function POPULATERQM(){
    const QMTARGET = document.getElementsByClassName('QMItem');
    PCQuest1 = "I Did and I Don't and I Do:\nWell, somehow Saint managed to escape... But there's only so many places one can hide in this city.\n=> Investigate the locations stored on Kathleens Datachip [ALDECALDO TERRITORY]\n\n";
    PCQuestE = "Anti-Hero [ACE]\n=> Help the crew get Alt Cunningham access to the Arasaka Datavault\n\n";
    PCQuest2 = "But Once A Child:\n-Okay....we're making some progress!\n\n-Netrunner Gear: 0 / 2K\n-Weapons: 0 / 250 EB\n-Armor: 0 / 100 EB\n-Cyberware 0 / 5K\n-Misc Services: 0 / 5K\n-Housing: 8.5K / 40K\n-Find new Housing Option\n";
    QMTARGET[PCQUEST].textContent = PCQuest1 + PCQuestE + PCQuest2;

    JOBTASK1 = "See Nothin\', Say Nothin(2)\'\n-Respond to Nyx's new Ping\n"; 
    JOBTASK2 = ""; 
    JOBTASK3 = "";
    QMTARGET[JOBTASK].textContent = JOBTASK1 + JOBTASK2 + JOBTASK3;

    MINMAJ1 = "";
    MINMAJ2 = "";
    MINMAJ3 = "";

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2 + MINMAJ3;
}

function COMMONQM()
{
    
    const CMTARGET = document.getElementsByClassName('CommonItem');

    CMTARGET[CAMPAIGN].textContent = "[PRIMARY] => Enter Sandman [Rogue] - Meet with the Aldecaldos in the Badlands\n[PRIMARY] => Suspicious Minds [Michiko] - Find Kenshiro Saeba, former NCPD Lieutenant\n";
    NPCQUEST1 = "Never Fade Away - Torch\n-Respond to Torch's Ping regarding Elly\n\n";
    NPCQUEST2 = "Tech Drops - Torch\n-Investigate the safehouse locations Torch sent your crew\n\n";
    NPCQUEST3 = "Ghost In The Shell - Nyx\n-Respond to Nyx's Ping\n\n";
    NPCQUEST4 = "Big Brother - El Capitan\n-Check in with El Capitan to see what he found using Sarah's Network.\n\n";
    CMTARGET[NPCQUEST].textContent = NPCQUEST1 + NPCQUEST2 + NPCQUEST3;
} 
