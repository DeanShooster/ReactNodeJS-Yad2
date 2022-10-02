

export default function IfExistRemoveOtherwisePush(target: string, checkboxArr: string[])
{
    if(checkboxArr.includes(target)) checkboxArr.splice(checkboxArr.indexOf(target),1);
    else checkboxArr.push(target);
    return checkboxArr;
}