/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const unitMap = [{
        num: 1000,
        rom: 'M'
    },{
        num: 900,
        rom: 'CM'
    },{
        num: 500,
        rom: 'D'
    },{
        num: 400,
        rom: 'CD'
    },{
        num: 100,
        rom: 'C'
    },{
        num: 90,
        rom: 'XC'
    },{
        num: 50,
        rom: 'L'
    },{
        num: 40,
        rom: 'XL'
    },{
        num: 10,
        rom: 'X'
    },{
        num: 9,
        rom: 'IX'
    },{
        num: 5,
        rom: 'V'
    },{
        num: 4,
        rom: 'IV'
    },{
        num: 1,
        rom: 'I'
    }];
    let out= '';
    let i = 0;
    while(num>0){
        const largest = unitMap[i].num;
        if(num-largest>=0){
            out+=unitMap[i].rom;
            num -= largest;
        }else{
            i++;
        }
    }
    return out;
};
