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

    MINMAJ1 = "Slap The TV - Nyx\n"
    MINMAJ2 = "Batteries Not Included - Torch\n"

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2;
}

function POPULATEHQM(){
    const QMTARGET = document.getElementsByClassName('QMItem');
    PCQuest1 = "Sucka Free:\n-Mr. Hands mentioned everyone in the crew playing their role, and if someone else in the crew can play the leader: I can play my part to a sweeter tune...wonder what that means...\nCONTINUE MAIN QUEST FOR UPDATES";
    PCQuest2 = "New American Idiot:\nComplete the interview with Mito at the Pigs Wing\n";
    QMTARGET[PCQUEST].textContent = PCQuest1 + PCQuest2;

    JOBTASK1 = "-You've recieved a prospective show offer from a terribly nervous-sounding choom name \"Mito\" in SD, he asked to meet up at his bar to talk details...\n"; 
    JOBTASK2 = ""; 
    JOBTASK3 = "";
    QMTARGET[JOBTASK].textContent = JOBTASK1 + JOBTASK2 + JOBTASK3;

    MINMAJ1 = "Slap The TV - Nyx\n";
    MINMAJ2 = "Underbelly - Rogue\n";

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2;
}
function POPULATEVQM(){
    const QMTARGET = document.getElementsByClassName('QMItem');
    PCQuest1 = "Dirty Harry: Mallard knows his weapons! We figured out that much about his past after he managed to somehow fix Boogaloo's jamming issue. Man....all these veterans across NC should really buddy-up or somethin...\nCONTINUE MAIN CAMPAIGN FOR UPDATES\n\n";
    PCQuest2 = "BOOGALOO COMPONENTS:\nWEAPONS TECH: 49\nHIGH-GRADE MATS: 17\n";
    QMTARGET[PCQUEST].textContent = PCQuest1 + PCQuest2;

    JOBTASK1 = "Amalgamated Standard Hand: Not Started\n"; 
    JOBTASK2 = "Turtle Kings Mantle: COMPLETED\n"; 
    JOBTASK3 = "Rocket Powered Heely's: COMPLETED\n";
    JOBTASK4 = "Surprise C4: COMPLETED\n";
    JOBTASK5 = "MUNCHIES: 0/48 HRS\n";
    JOBTASK6 = "ALT F4: 0/24 HRS\n";
    QMTARGET[JOBTASK].textContent = JOBTASK1 + JOBTASK2 + JOBTASK3 + JOBTASK4 + JOBTASK5 + JOBTASK6;

    MINMAJ1 = "Slap The TV - Nyx\n";
    MINMAJ2 = "Batteries Not Included - Torch\n";

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2;
}
function POPULATERQM(){
    const QMTARGET = document.getElementsByClassName('QMItem');
    PCQuest1 = "I Did and I Don't and I Do:\nFoster?? Jaida?? Reece is missing??? What the fuck....\n-Follow up with Foster\n\n";
    PCQuest2 = "But Once A Child:\n-Well.....I'm 53K Eddies in the hole.....fuck\n\n-Netrunner Gear: 0 / 2K\n-Weapons: 0 / 250 EB\n-Armor: 0 / 100 EB\n-Cyberware 0 / 5K\n-Misc Services: 0 / 5K\n-Housing: 0 / 40K\n-Find new Housing Option\n";
    QMTARGET[PCQUEST].textContent = PCQuest1 + PCQuest2;

    JOBTASK1 = "See Nothin\', Say Nothin\'\n-Check in with Nyx in his office.\n"; 
    JOBTASK2 = ""; 
    JOBTASK3 = "";
    QMTARGET[JOBTASK].textContent = JOBTASK1 + JOBTASK2 + JOBTASK3;

    MINMAJ1 = "Slap The TV - Nyx\n";
    MINMAJ2 = "Underbelly - Rogue\n";
    MINMAJ3 = "Batteries Not Included - Torch\n"

    QMTARGET[MAJORMINOR].textContent = MINMAJ1 + MINMAJ2 + MINMAJ3;
}

function COMMONQM()
{
    
    const CMTARGET = document.getElementsByClassName('CommonItem');

    CMTARGET[CAMPAIGN].textContent = "Understanding a Ghost - Rogue(Proxy: Torch)\n";

    NPCQUEST1 = "Never Fade Away - Torch\n-Await an update on the situation\n";
    CMTARGET[NPCQUEST].textContent = NPCQUEST1;
}