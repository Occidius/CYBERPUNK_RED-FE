MasterKey = [
    "7H7T3qhVtsu7HtKzoWtZLzadZdaFTusWkPfVwpHg6aGzaoG8k3pPRqHEZbGuNVroLg",
    "AML44N7KckGTHLjtQCWsWu9XwV98jZzmwdRxHeJQHEkFpCEaxzksCXLJvwthodYRJ7"
];

UserNames = [
    'Unrecoverables',
    'BlueGlass',
    'Boogaloo',
    'DeepDelve'
];


function loginCheck(userName, userPass)
{
    for (loop = 1; loop < 5; loop++)
    {
        UNKey = 12 - ((loop-1) * 4) + 7  - (loop-1) * 3;
        UPKey = (loop-1) * (loop-1) + ((loop-1) * 3);

        if (UserNames[loop-1] === userName && userPass === MasterKey[(loop) % 2].substring(UPKey, UPKey+8)){
            return (loop-1);
        }
    }
    return 493278;
}