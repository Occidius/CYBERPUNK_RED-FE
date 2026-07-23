MasterKey = [
    "7H7T3qhVtsu7HtKzoWtZLzadZdaFTusWkPfVwpHg6aGzaoG8k3pPRqHEZbGuNVroLg",
    "AML44N7KckGTHLjtQCWsWu9XwV98jZzmwdRxHeJQHEkFpCEaxzksCXLJvwthodYRJ7"
];

UserNames = [
    'ACE',
    'HELLA',
    'VALVE',
    'SAMMIE'
];


function loginCheck(userName)
{
    // for (loop = 1; loop < 5; loop++)
    // {
    //     UNKey = 12 - ((loop-1) * 4) + 7  - (loop-1) * 3;
    //     UPKey = (loop-1) * (loop-1) + ((loop-1) * 3);

    //     if (UserNames[loop-1] === userName && userPass === MasterKey[(loop) % 2].substring(UPKey, UPKey+8)){
    //         return (loop-1);
    //     }
    // }
    // return 493278;
    if (userName === UserNames[0])
    {
        return 0;
    }
    else if (userName === UserNames[1])
    {
        return 1;
    }
    else if (userName === UserNames[2])
    {
        return 2;
    }
    else if (userName === UserNames[3])
    {
        return 3;
    }
    else
    {
        return 2837492;
    }
}