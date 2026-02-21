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
    document.getElementById('plrImg').src = './images/ACE.jpg';
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
    document.getElementById('plrImg').src = './images/HELLA.png';
    POPULATEHQM();
}

function VALVE()
{
    document.getElementById('login').style.display = 'none';
    document.getElementById('NETh1').textContent = 'Valve';
    document.getElementById('NETh1').style.fontSize = '350%';
    document.getElementById('netData').style.backgroundColor = 'rgb(148, 148, 148)';
    document.getElementById('netData').style.borderColor = 'rgb(0, 0, 0)';
    document.getElementById('plrImg').src = './images/VALVE.jpg';
    POPULATEVQM();
}

function ROOK()
{
    document.getElementById('login').style.display = 'none';
    document.getElementById('NETh1').textContent = 'Samantha \'Sammie\' Barnes';
    document.getElementById('NETh1').style.fontSize = '350%';
    document.getElementById('netData').style.backgroundColor = 'rgb(255, 255, 0)';
    document.getElementById('netData').style.borderColor = 'rgb(208, 255, 0)';
    document.getElementById('plrImg').src = './images/ROOK.jpg';
    POPULATERQM();
}

function POPULATEAQM()
{
    const QMTARGET = document.getElementsByClassName('QMItem');
    PCQuest1 = "Vigilante Shit:\nThe old contact portal does not, in fact, work...fuck.,,Maybe there\'s some other way I can grab Alt\'s attention again, ask for some advice...\n-CONTINUE MAIN CAMPAIGN FOR UPDATES\n\n";
    PCQuest2 = "Anti-Hero: \nArasaka bastards in Japantown and now someone\'s wearing my face, messing with my network? Shits getting deep...hope you got some decent boots...\n-CONTINUE MAIN CAMPAIGN FOR UPDATES\n\n";
    QMTARGET[PCQUEST].textContent = PCQuest1 + PCQuest2;

    JOBTASK1 = "Junkyard Warehouse - Primo: Weekly 7% finders fee(X) \n^^^[Traded for reduced rent (1200 EB)]\n-Sold Tiger Skeleton to Reginald Ketel\nCalus's Lockbox:\n-[3] Electronic Locks\n-[2] Brass Padlocks\n-[1] Broken Biometric Reader\n"; 
    JOBTASK2 = "Wait for a Ping from Viktor\n"; 
    JOBTASK3 = "NEPHEW: Payout processing: 1 weeks\nPRIMO: N/A\nSJ: N/A\nALT: N/A\n";
    QMTARGET[JOBTASK].textContent = JOBTASK1 + JOBTASK2 + JOBTASK3;

    MINMAJ1 = "Slap the TV - Nyx\n"
    MINMAJ2 = "Batteries Not Included - Torch\n"

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2;
}

function POPULATEHQM(){}
function POPULATEVQM(){}
function POPULATERQM(){}

function COMMONQM()
{
    
    const CMTARGET = document.getElementsByClassName('CommonItem');

    CMTARGET[CAMPAIGN].textContent = "Understanding a Ghost - Rogue(Proxy: Torch)\n";

    NPCQUEST1 = "Never Fade Away - Torch\n-Await an update on the situation\n";
    CMTARGET[NPCQUEST].textContent = NPCQUEST1;
}