import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding:'utf-8'
}).split('\n')
.map((row:string): string[]=>{
    return row.split(',');
}); 

enum MatchResult{
    HomeWin='H',
    ArrayWin='A',
    Draw='D',
}

let manUnitedWins = 0;

for(let match of matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }
    else if(match[2]=='ManUnited'&&match[5]===MatchResult.ArrayWin){
        manUnitedWins++;
    }
}