// import classFeatures from "./classFeatures";

const races = {
    "Player\'s Handbook": ['Dragonborn','Dwarf','Elf','Gnome','Half-Elf','Halfling','Half-Orc','Human','Tiefling'],
    "Explorer\'s Guide to Wildemount": ['Orc of Exandria'],
    "Mythic Odysseys of Theros": ['Leonin','Satyr'],
    "Van Richten\'s Guide to Ravenloft": ['Lineages'],
    "The Wild Beyond the Witchlight": ['Fairy','Harengon'],
    "Strixhaven: A Curriculum of Chaos": ['Owlin'],
    "Elemental Evil Player\'s Companion": ['Aarkocra','Genasi','Goliath'],
    "Volo\'s Guide to Monsters": ['Aasimar','Bugbear','Firblog','Goblin','Hobgoblin','Kenku','Kobold','Lizardfolk','Orc','Tabaxi','Triton','Yuan-ti Pureblood'],
    "Sword Coast Adventurer's Guide": ['Feral Tiefling'],
    "The Tortle Package": ['Tortle'],
    "Eberron: Rising from the Last War": ['Changeling','Kalashtar','Orc of Eberron','Shifter','Warforged'],
    "Mordenkainen\’s Tome of Foes": ['Gith'],
    "Guildmasters\' Guide to Ravnica": ['Centaur','Loxodon','Minotaur','Simic Hybrid','Vedalken'],
    "Acquisitions Incorporated": ['Verdan'],
    "Locathah Rising": ['Locathah'],
    "One Grung Above": ['Grung']
}
const armor = {
    'Light Armor': ['Padded','Leather','Studded Leather'],
    'Medium Armor': ['Hide','Chain Shirt','Scale Mail','Breastplate','Half Plate'],
    'Heavy Armor': ['Ring Mail','Chain Mail','Splint','Plate']
}
const shield = ["","+2"]
const classOptions = ["","Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rouge","Sorcerer","Warlock","Wizard"]
let classTracked = {
    // INFO Each class has an array to keep track of which level they select
    "Artificer": [...Array(20).fill(0)],
    "Barbarian": [...Array(20).fill(0)],
    "Bard": [...Array(20).fill(0)],
    "Cleric": [...Array(20).fill(0)],
    "Druid": [...Array(20).fill(0)],
    "Fighter": [...Array(20).fill(0)],
    "Monk": [...Array(20).fill(0)],
    "Paladin": [...Array(20).fill(0)],
    "Ranger": [...Array(20).fill(0)],
    "Rouge": [...Array(20).fill(0)],
    "Sorcerer": [...Array(20).fill(0)],
    "Warlock": [...Array(20).fill(0)],
    "Wizard": [...Array(20).fill(0)],
    sumClasses() {
      //  Returns an object array of classes with sum number of classes each
      return classOptions.slice(1).reduce((ac,a) => (ac[a] = this[a].reduce((total, i) => i + total), ac),{})
    },
    toString() {
        let str = ""
        const arr = this.sumClasses()
        for(let li of classOptions.slice(1)) {
            if(arr[li] > 0) {
                if(str.length > 0) {
                    str = str.concat(", ")
                }
                str = str.concat(`${li} ${arr[li]}`)
            }
        }
        return str
    }
}

function updateFirstClass(classType, level) {
    let info = document.getElementById(`classFeature${level}`)
    classOptions.slice(1).filter(item => item !== classType.value).forEach(item => classTracked[`${item}`][level-1] = 0)
    classTracked[`${classType.value}`][level-1] = classTracked[`${classType.value}`][level-1] === 0 ? (classTracked[`${classType.value}`][level-1]+1) || 1 : 0
    if(level === 1) {
        info.innerHTML = `As a ${classType.value}, you gain the following class features:`
//         info.innerHTML = classFeatures(classType.value,level)
        for (let i = 2; i <= 20;i++) {
            document.getElementById(`class${i}`).value = classType.value
            updateFirstClass(classType,i)
        }
    }
    else
        info.innerHTML = classType.value
        // info.innerHTML = classFeatures(classType.value,level)
    document.getElementById('buildSummary').innerHTML = classTracked.toString()
    updateHP()
}

function updateClass(classType, level) {
    let newInfo = document.getElementById(`classFeature${level}`)
    if(checkReq(classType,level)) {
        classOptions.slice(1).filter(item => item !== classType.value).forEach(item => classTracked[`${item}`][level-1] = 0)
        classTracked[`${classType.value}`][level-1] = classTracked[`${classType.value}`][level-1] === 0 ? (classTracked[`${classType.value}`][level-1]+1) || 1 : 0
        newInfo.innerHTML = classTracked.sumClasses()[classType.value] === 1
            ? `As a ${classType.value}, you gain the following class features:`
            : classType.value
        // newInfo.innerHTML = classType.value
        newInfo.style.color = 'black'
    }
    else {
        newInfo.innerHTML = "Doesn't meet abilities requirement"
        newInfo.style.color = 'red'
    }
    document.getElementById('buildSummary').innerHTML = classTracked.toString()
    updateHP()
}

function checkReq(classType,level) {
    // "STR": 0,"DEX": 1,"CON": 2,"INT": 3,"WIS": 4,"CHA": 5
    // let stats = [... Array(6)].map((item,count) => parseInt(document.getElementById(`ability${level}-${count}`).innerHTML.split('<br>')[0]))
    let [str,dex,con,int,wis,cha] = [... Array(6)].map((item,count) => parseInt(document.getElementById(`ability${level}-${count}`).innerHTML.split('<br>')[0]))
    // TODO check multiclass prerequisites & output prerequisites if not meet in selection menu
    switch (classType.value) {
        // Artificer: INT 13
        case "Artificer": return int >= 13
        // Barbarian: STR 13
        case "Barbarian": return str >= 13
        // Bard: CHA 13
        case "Bard": return cha >= 13
        // Cleric & Druid: WIS 13
        case "Cleric":
        case "Druid": return wis >= 13
        // Fighter: STR 13 or DEX 13
        case "Fighter": return str >= 13 || dex >= 13
        // Monk: DEX 13 and WIS 13
        case "Monk": return dex >= 13 && wis >= 13
        // Paladin: STR 13 and CHA 13
        case "Paladin": return str >= 13 && cha >= 13
        // Ranger: DEX 13 and WIS 13
        case "Ranger": return dex >= 13 && wis >= 13
        // Rouge: DEX 13
        case "Rouge": return dex >= 13
        // Sorcerer & Warlock: CHA 13
        case "Sorcerer":
        case "Warlock": return cha >= 13
        // Wizard: INT 13
        case "Wizard": return int >= 13
        default: console.error(`${classType.value}:${level}: Incorrect class in checkReq()`)
            return null
    }
}

function updateRace(race) {
    // TODO update related abilities for selected race
    /*
    Dragonborn: +2 STR, +1 CHA
    Dwarf: +2 CON
    Elf: +2 DEX
    Gnome: +2 INT
    Half-Elf: +2 CHA, +1 to two other ability scores
    Halfing: +2 DEX
    Half-Orc: +2 STR, +1 CON
    Human: +1 to all ability scores
    Tiefling: +2 CHA, +1 INT
    Orc of Exandria: +2 STR, +1 CON
    Leonin: +2 CON, +1 STR
    Satyr: +2 CHA, +1 DEX
    Lineages: +2 to an ability score and +1 to one other ability score or +1 three different ability scores
    Fairy:
    Harengon:
    Owlin:
    Aarakocra: +2 DEX, +1 WIS
    Genasi: +2 CON
    Goliath: +2 STR, +1 CON
    Aasimar: +2 CHA
    Bugbear: +2 STR, +1 DEX
    Firblog: +2 WIS, +1 STR
    Goblin: +2 DEX, +1 CON
    Hobgoblin: +2 CON, +1 INT
    Kenku: +2 DEX, +1 WIS
    Kobold: +2 DEX
    Lizardfolk: +2 CON, +1 WIS
    Orc: +2 STR, +1 CON
    Tabaxi: +2 DEX, +1 CHA
    Triton: +1 STR, +1 CON, +1 CHA
    Yuan-it Pureblood: +2 CHA, +1 INT
    Feral Tiefling: +2 DEX, +1 INT
    Tortle: +2 STR, +1 WIS
    Changeling: +2 CHA, +1 to one other ability score
    Kalashtar: +2 WIS, +1 CHA
    Orc of Eberron: +2 STR, +1 CON
    Shifter:
    Warforged: +2 CON< +1 to one other ability score
    Gith: +1 INT
    Centaur: +2 STR, +1 WIS
    Loxobon: +2 CON, +1 WIS
    Minotaur: +2 STR, +1 CON
    Simic Hybric: +2 CON, +1 one other ability score
    Vedalken: +2 INT, +1 WIS
    Verdan: +1 CON, +2 CHA
    Locathah: +2 STR, +1 DEX
    Grung: +2 DEX, +1 CON
     */
    // TODO prompt when selected race has a selection option: Half-Elf, Changeling, Warforged, Simic Hybrid
}

// Con div
function updateHP() {
    /*
    d12: Barbarian
    d10: Fighter, Paladin, Ranger, Blood Hunter
    d8: Bard, Cleric, Druid, Monk, Rouge, Warlock, Artificer
    d6: Sorcerer, Wizard
     */
    let hp = 0
    for(let level = 0; level < 20; level++) {
        // WARNING classSelected via ID: class# may not be valid
        let classSelected = document.getElementById(`class${level+1}`).value
        let conScore = parseInt(document.getElementById(`ability${level}-2`).innerHTML.split('<br>')[0])
        let con = Math.floor((conScore - 10) / 2)
        switch (classSelected) {
            case "Barbarian": hp += 12 + con
                break
            case "Fighter":
            case "Paladin":
            case "Ranger":
            case "Blood Hunter": hp += 10 + con
                break
            case "Bard":
            case "Cleric":
            case "Druid":
            case "Monk":
            case "Rouge":
            case "Warlock":
            case "Artificer": hp += 8 + con
                break
            case "Sorcerer":
            case "Wizard": hp += 6 + con
                break
            default:
        }
        document.getElementById(`HP${level}`).innerHTML = hp
    }
}

function updateAC() {
    // TODO add race benefits: Tortle, etc.
    // TODO add barbarian benefits
    let armorSelected = document.getElementById(`armor`).value
    let ac = 0
    /*
    Light Armor:
        Padded: 11 + DEX
        Leather: 11 + DEX
        Studded Leather: 12 + DEX
    Medium Armor:
        Hide: 12 + DEX (max 2)
        Chain shirt: 13 + DEX (max 2)
        Scale mail: 14 + DEX (max 2)
        Breastplate: 14 + DEX (max 2)
        Half plate: 15 + DEX (max 2)
    Heavy Armor:
        Ring mail: 14
        Chain mail: 16 (STR 13)
        Splint: 17 (STR 15)
        Plate: 18 (STR 15)
     */
    let shield = document.getElementById('shield').value === "+2" ? 2 : 0
    for(let i = 0; i < 20; i++) {
        let dexScore = parseInt(document.getElementById(`ability${i}-1`).innerHTML.split('<br>')[0])
        let dex = Math.floor((dexScore - 10) / 2)
        switch (armorSelected) {
            case "Padded":
            case "Leather": ac = 11 + dex
                break
            case "Studded Leather": ac = 12 + dex
                break
            case "Hide": ac = 12 + (dex > 2 ? 2 : dex)
                break
            case "Chain Shirt": ac = 13 + (dex > 2 ? 2 : dex)
                break
            case "Scale Mail":
            case "Breastplate": ac = 14 + (dex > 2 ? 2 : dex)
                break
            case "Half Plate": ac = 15 + (dex > 2 ? 2 : dex)
                break
            case "Ring Mail": ac = 14
                break
            case "Chain Mail": ac = 16 // TODO display error if not met STR 13 requirement
                break
            case "Splint": ac = 17 // TODO display error if not met STR 15 requirement
                break
            case "Plate": ac = 18 // TODO display error if not met STR 15 requirement
                break
            case  " ": ac = 8 + dex
                break
            default: ac = 8 + dex; console.error(`${armorSelected}: Error in updateAC()`)
        }
        document.getElementById(`AC${i}`).innerHTML = ac + shield
    }
}

const getScoreMod = (score) => {
    let mod = Math.floor((score - 10) / 2)
    return (score >= 10) ? `+${mod}` : `${mod}`
};


// Character Settings
// Race
let startSelect = `<div class="clearfix"><div class="box" style="background-color:#bbb"><strong>Race </strong></div><div class="box" style="background-color:#ddd"><select name="race" id="race" onchange="updateRace(this)">`;
Object.entries(races).forEach(item => {
    startSelect += `<optgroup label="${item[0]}">`
    item[1].forEach(x => startSelect += `<option value="${x}">${x}</option>`)
    startSelect += `</optgroup>`
})
startSelect += `</select></div>`;
// Equipment
startSelect += `<div class="box" style="background-color:#bbb"><strong> Equipment </strong></div>`;
// Armor
startSelect += `<div class="box" style="background-color:#ddd"><label> Armor </label><select name="armor" id="armor" onchange="updateAC()">`;
startSelect += `<option value=" "></option>`
Object.entries(armor).forEach(item => {
    startSelect += `<optgroup label="${item[0]}">`
    item[1].forEach(x => startSelect += `<option value="${x}">${x}</option>`)
    startSelect += `</optgroup>`
})
startSelect += `</select></div>`;
// Shield
startSelect += `<div class="box" style="background-color:#ddd"><label> Shield </label><select name="shield" id="shield" onchange="updateAC()">`;
shield.forEach((item) => startSelect += `<option value="${item}">${item}</option>`);
startSelect += `</select></div></div>`;
document.getElementById("con").innerHTML = startSelect;

// const header = ["Level", "Class", "Features", "HP", "AC", "STR","DEX","CON","INT","WIS","CHA","Proficiency<br />Bonus","# of Spells","# of Cantrips","Max Spell Level","1st","2nd","3rd","4th","5th","6th","7th","8th","9th"];
const header = ["Level", "Class", "Features", "HP", "AC", "STR","DEX","CON","INT","WIS","CHA","Proficiency<br />Bonus"];

const levels = [...Array(20).keys()].map(x => ++x);

let abilityScores = Array(levels.length).fill(10).map(() => [15,15,15,15,15,15])
// let abilityScores = Array(levels.length).fill(10).fill(15)

function updateAbilities(level,ability,stat) {
    // abilityScores = Array(levels.length).fill(10).map(x => [...Array(6).keys()].forEach(n => document.getElementById(`stat${n}`).value))
    document.getElementById(`ability${level}-${ability}`).innerHTML = `${stat}<br />(${getScoreMod(stat)})`
    // var abilityScores = Array(levels.length).fill(10).map(x => [10,8,14,15,10,16]);
}

function updateAllAbilities(ability,stat) {
    for (let i = 0; i < 20; i++) {
        updateAbilities(i,ability,stat)
    }
    updateAC()
    updateHP()
}

// Start table
let myTable = "<table><tr>";
// Starting ability scores
// [...Array(5).keys()].forEach(() => myTable +=`</td><td>`);
myTable += `</td><td></td><td></td><td id="buildSummary">${classTracked.toString()}</td><td></td><td>`;
[...Array(6).keys()].forEach(n => {
    myTable += `</td><th><div><input type="number" id="stat${n}" value="15" min="1" max="30" style="max-width:40px" onchange="updateAllAbilities(${n},this.value)"></div></th></td>`;
});


let hp = Array(levels.length).fill(10);
let ac = Array(levels.length).fill(8);
let proficiency = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];

myTable += "</tr><tr>";
// Header of table
header.forEach((value,i) => {
        myTable += `<td style="text-align: center; vertical-align: middle;background-color:#bbb"><strong>${value}</strong></td>`;
});

myTable += "</tr><tr>";

levels.forEach((value,level) => {
    // Level
    myTable += `<td style="text-align: center; vertical-align: middle;">${value}</td>`;
    // Class at Level
    myTable += level === 0
        ? `<td><select name="class" id="class${value}" onchange="updateFirstClass(this,${level+1})">`
        : `<td><select name="class" id="class${value}" onchange="updateClass(this,${level+1})">`
    classOptions.forEach(c => myTable += `<option value="${c}">${c}</option>`);
    myTable += "</select></td>";

    // Features at Class Level
    myTable += `</td><td id="classFeature${level+1}" class="classFeatures">`;

    // HP:
    myTable += `</td><th><div id="HP${level}">${hp[level]}</div></th></td>`;
    // AC: 8 + DEX + armor + shield
    // let acBonus = document.getElementById(`ability${level}-1`) || 8
    // myTable += `</td><th><div id="AC${level}">${ac[level] + Math.floor((acBonus - 10)/2)}</div></th></td>`;
    myTable += `</td><th><div id="AC${level}">8</div></th></td>`;
    // Ability Scores
    abilityScores[level].forEach((element,index) => myTable += `</td><th><div id="ability${level}-${index}">${element}<br />(${getScoreMod(abilityScores[level][index])})</div></th></td>`);

    //Proficiency Bonus
    myTable += `</td><th><div>+${proficiency[level]}</div></th></td>`;

    // TODO add other columns and functionality
    // [...Array(12).keys()].forEach(() => myTable += `</td><td>`);

    // BREAK INTO NEXT ROW
    let next = level + 1;
    if (next!==levels.length) { myTable += "</tr><tr>"; }
});


// CLOSE THE TABLE STRING
myTable += "</tr></table>";

// ATTACH HTML TO CONTAINER
document.getElementById("container").innerHTML = myTable;