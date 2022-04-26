const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']

const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling']

const things = ['Dresses in drag at every opportunity', 'Has a terrible gambling problem', 'Can never remember names', 'Believes they are a teenager from the Earth year 2022 trapped in their Dungeons & Dragoons game', 'is constantly hungry', "Has a hard time pronuncing locations correctly", 'is terrified of magic', 'tries to befriend every horse they encounter', 'Is always offering terrible financial advice', 'Loves to sleep in', 'Loves to cook but is terrible at it']

const character = {
    classes : classes,
    races : races,
    things : things,
}

let generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}



let runGenerator = () => {

}

let choosing = (object) => {
    let currentIdea = [];
    for(let property in object){
        let chooser = generateRandomNumber(object[property].length)
        switch (property) {
            case 'classes': 
                currentIdea.push('Class: ' + object[property][chooser]);
                break;
            case 'races': 
                currentIdea.push('Race: ' + object[property][chooser]);
                break;
            case 'things':
                currentIdea.push('Their thing: ' + object[property][chooser]);
        }
    } return currentIdea;
}

console.log(choosing(character));