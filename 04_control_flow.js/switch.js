// switch hai aur uskai andar multiple cases ap check kartai ho
//switch mai key wo value hai jo mujhe har var check karni hai

// switch (key) {...........syntax of switch
//     case value:
        
//         break;

//     default:
//         break;
// }


//................................................................
/* aisai samjheyai kie aap kai pass bhut sarai lock hai and ek key hai
and ab wo key jis bhi lock mai lag kai khul jayai uss samyai wo execute hojayiaga
*/


const month = "march"

switch (month) { 
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // ek var jaha pai bhi case match hogaya waha sai sara code execute ho jata hai expect default 
    case "april":
        console.log("april");
        break;

    default: //jaisai else if mai rehta hai kie agar koe true nhi hua toh else toh print hoga kie wasai he ismai default hota hai
        console.log("default case match");
        break;
}

/*switch (key) { // shift + alt + down arrow it duplicates the whole thing in line
    case 1: 
        console.log("january")        
        break;

    default:
        break;
} */
