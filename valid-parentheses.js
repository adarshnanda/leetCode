/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

*/

function pop(out, sym){
    if(out[out.length-1] === sym){
        out.pop();
    }else{
        return true;
    }
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const out = [];
    for(let i=0; i<s.length;i++){
        const currentChar = s[i];
        let ifTrue = false;
        switch(currentChar) {
            case '(':
                out.push('(');
                break;
            case ')':
                ifTrue = pop(out, '(');
                if(ifTrue){
                    return false;
                }
                break;
            case '{':
                out.push('{');
                break;
            case '}':
                ifTrue = pop(out, '{');
                if(ifTrue){
                    return false;
                }
                break;
            case '[':
                out.push('[');
                break;
            case ']':
                ifTrue = pop(out, '[');
                if(ifTrue){
                    return false;
                }
                break;
            default:break;
        }
    }
    return out.length===0;
};
