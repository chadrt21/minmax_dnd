// export function classFeatures(classSelected,level) {
//     switch (classSelected) {
//         case 'Artificer':
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features:<br/>
//                 <ul>
//                     <li><b>Hit Dice:</b></li>
//                     <li><b>Proficiences</b></li>
//                     <ul>
//                         <li>Armor:</li>
//                         <li>Weapons:</li>
//                     </ul>
//                 </ul>
//                 Arfificer College<br/>
//                 Relic Magic
//                 `
//                 case 2: return `Infusions`
//                 case 3: return `Clockwork Creation`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `-`
//                 case 6: return `Artificer College Feature`
//                 case 7: return `-`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `Infusion Improvements`
//                 case 10: return `Artificer College Feature`
//                 case 11: return `Mystic Discovery (6th Level)`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `Mystic Discovery (7th Level)`
//                 case 14: return `Artificer College Feature`
//                 case 15: return `Mystic Discovery (8th Level)`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `Mystic Discovery (9th Level)`
//                 case 18: return `Infusion Improvements`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Master Artificer`
//             }
//             break
//         case "Barbarian":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features:
//                 Rage<br/>
//                 Unarmored Defense`
//                 case 2: return `Reckless Attack, Danger Sense`
//                 case 3: return `Primal Path`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `Extra Attack, Fast Movement`
//                 case 6: return `Path feature`
//                 case 7: return `Feral Instinct`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `Brutal Critical (1 die)`
//                 case 10: return `Path feature`
//                 case 11: return `Relentless Rage`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `Brutal Critical (2 die)`
//                 case 14: return `Path feature`
//                 case 15: return `Persistent Rage`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `Brutal Critical (3 die)`
//                 case 18: return `Indomitable Might`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Primal Champion`
//             }
//             break
//         case "Bard":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features:<br/>
//                  Spellcasting, Bardic Inspiration (d6)`
//                 case 2: return `Jack of All Trades, Song of Rest (d6)`
//                 case 3: return `Bard College, Expertise`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `Bardic Inspiration (d8), Font of Inspiration`
//                 case 6: return `Countercharm, Bard College Feature`
//                 case 7: return `-`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `Song of Rest (d8)`
//                 case 10: return `Bardic Inspiration (d10), Expertise, Magical Secrets`
//                 case 11: return `-`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `Song of Rest (d10)`
//                 case 14: return `Magical Secrets, Bard College Feature`
//                 case 15: return `Bardic Inspiration (d12)`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `Song of Rest (d12)`
//                 case 18: return `Magical Secrets`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Superior Inspiration`
//             }
//             break
//         case "Cleric":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features:<br/>
//                  Spellcasting, Divine Domain`
//                 case 2: return `Channel Divinity (1/rest), Divine Domain Feature`
//                 case 3: return `-`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `Destroy Undead (CR 1/2)`
//                 case 6: return `Channel Divinity (2/rest), Divine Domain Feature`
//                 case 7: return `-`
//                 case 8: return `Ability Score Improvement, Destroy Undead (CR 1), Divine Domain Feature`
//                 case 9: return `-`
//                 case 10: return `Divine Intervention`
//                 case 11: return `Destroy Undead (CR 2)`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `-`
//                 case 14: return `Destroy Undead (CR 3)`
//                 case 15: return `-`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `Destroy Undead (CR 4), Divine Domain Feature`
//                 case 18: return `Channel Divinity (3/rest)`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Divine Intervention Improvement`
//             }
//             break
//         case "Druid":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features:<br/>
//                  Drudic, Spellcasting`
//                 case 2: return `Wild Shape, Druid Circle`
//                 case 3: return `-`
//                 case 4: return `Wild Shape Improvement, Ability Score Improvement`
//                 case 5: return `-`
//                 case 6: return `Druid Circle Feature`
//                 case 7: return `-`
//                 case 8: return `Wild Shape Improvement, Ability Score Improvement`
//                 case 9: return `-`
//                 case 10: return `Druid Circle Feature`
//                 case 11: return `-`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `-`
//                 case 14: return `Druid Circle Feature`
//                 case 15: return `-`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `-`
//                 case 18: return `Timeless Body, Beast Spells`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Archdruid`
//             }
//             break
//         case "Fighter":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features:<br/>
//                 Fighting Style, Second Wind`
//                 case 2: return `Action Surge (one use)`
//                 case 3: return `Martial Archetype`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `Extra Attack`
//                 case 6: return `Ability Score Improvement`
//                 case 7: return `Martial Archetype Feature`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `Indomitable (one use)`
//                 case 10: return `Martial Archetype Feature`
//                 case 11: return `Extra Attack (2)`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `Indomitable (two uses)`
//                 case 14: return `Ability Score Improvement`
//                 case 15: return `Martial Archetype Feature`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `Action Surge (two uses), Indomitable (three uses)`
//                 case 18: return `Martial Archetype Feature`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Extra Attack (3)`
//             }
//             break
//         case "Monk":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features: Unarmored Defense, Martial Arts`
//                 case 2: return `Ki, Unarmored Movement`
//                 case 3: return `Monastic Tradition, Deflect Missiles`
//                 case 4: return `Ability Score Improvement, Slow Fall`
//                 case 5: return `Extra Attack, Stunning Strike`
//                 case 6: return `Ki-Empowered Strikes, Monastic Tradition Feature`
//                 case 7: return `Evasion, Stillness of Mind`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `Unarmored Movement Improvement`
//                 case 10: return `Purity of Body`
//                 case 11: return `Monastic Tradition Feature`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `Tongue of the Sun and Moon`
//                 case 14: return `Diamond Soul`
//                 case 15: return `Timeless Body`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `Monastic Tradition Feature`
//                 case 18: return `Empty Body`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Perfect Self`
//             }
//             break
//         case "Paladin":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features: Divine Sense, Lay on Hands`
//                 case 2: return `Fighting Style, Spellcasting, Divine Smite`
//                 case 3: return `Divine Health, Sacred Oath`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `Extra Attack`
//                 case 6: return `Aura of Protection`
//                 case 7: return `Sacred Oath Feature`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `-`
//                 case 10: return `Aura of Courage`
//                 case 11: return `Improved Divine Smite`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `-`
//                 case 14: return `Cleansing Touch`
//                 case 15: return `Sacred Oath Feature`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `-`
//                 case 18: return `Aura Improvements`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Sacred Oath Feature`
//             }
//             break
//         case "Ranger":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features: Favored Enemy, Natural Explorer`
//                 case 2: return `Fighting Style, Spellcasting`
//                 case 3: return `Ranger Archetype, Primeval Awareness`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `Extra Attack`
//                 case 6: return `Favored Enemy and Natural Explorer Improvements`
//                 case 7: return `Ranger Archetype Feature`
//                 case 8: return `Ability Score Improvement, Land's Stride`
//                 case 9: return `-`
//                 case 10: return `Natural Explorer Improvements, Hide in Plain Slight`
//                 case 11: return `Ranger Archetype Feature`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `-`
//                 case 14: return `Favored Enemy Improvements, Vanish`
//                 case 15: return `Ranger Archetype Feature`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `-`
//                 case 18: return `Feral Senses`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Foe Slayer`
//             }
//             break
//         case "Rouge":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features: Expertise, Sneak Attack, Thieves' Cant`
//                 case 2: return `Cunning Action`
//                 case 3: return `Roguish Archetype`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `Uncanny Dodge`
//                 case 6: return `Expertise`
//                 case 7: return `Evasion`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `Roguish Archetype Feature`
//                 case 10: return `Ability Score Improvement`
//                 case 11: return `Reliable Talent`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `Roguish Archetype Feature`
//                 case 14: return `Blindsense`
//                 case 15: return `Slippery Mind`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `Roguish Archetype Feature`
//                 case 18: return `Elusive`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Stroke of Luck`
//             }
//             break
//         case "Sorcerer":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features: Spellcasting, Sorcerous Origin`
//                 case 2: return `Font of Magic`
//                 case 3: return `Metamagic`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `-`
//                 case 6: return `Sorcerous Origin Feature`
//                 case 7: return `-`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `-`
//                 case 10: return `Metamagic`
//                 case 11: return `-`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `-`
//                 case 14: return `Sorcerous Origin Feature`
//                 case 15: return `-`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `Metamagic`
//                 case 18: return `Sorcerous Origin Feature`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Sorcerous Restoration`
//             }
//             break
//         case "Warlock": switch (level) {
//             case 1: return `As a ${classSelected} you gain the following features: Otherworldly Patron, Pact Magic`
//             case 2: return `Eldritch Invocations`
//             case 3: return `Pact Boon`
//             case 4: return `Ability Score Improvement`
//             case 5: return `-`
//             case 6: return `Otherworldly Patron Feature`
//             case 7: return `-`
//             case 8: return `Ability Score Improvement`
//             case 9: return `-`
//             case 10: return `Otherworldly Patron Feature`
//             case 11: return `Mystic Arcanum (6th level)`
//             case 12: return `Ability Score Improvement`
//             case 13: return `Mystic Arcanum (7th level)`
//             case 14: return `Otherworldly Patron Feature`
//             case 15: return `Mystic Arcanum (8th level)`
//             case 16: return `Ability Score Improvement`
//             case 17: return `Mystic Arcanum (9th level)`
//             case 18: return `-`
//             case 19: return `Ability Score Improvement`
//             case 20: return `Eldritch Master`
//         }
//             break
//         case "Wizard":
//             switch (level) {
//                 case 1: return `As a ${classSelected} you gain the following features: Spellcasting, Arcane Recovery`
//                 case 2: return `Arcane Tradition`
//                 case 3: return `-`
//                 case 4: return `Ability Score Improvement`
//                 case 5: return `-`
//                 case 6: return `Arcane Tradition Feature`
//                 case 7: return `-`
//                 case 8: return `Ability Score Improvement`
//                 case 9: return `-`
//                 case 10: return `Arcane Tradition Feature`
//                 case 11: return `-`
//                 case 12: return `Ability Score Improvement`
//                 case 13: return `-`
//                 case 14: return `Arcane Tradition Feature`
//                 case 15: return `-`
//                 case 16: return `Ability Score Improvement`
//                 case 17: return `-`
//                 case 18: return `Spell Mastery`
//                 case 19: return `Ability Score Improvement`
//                 case 20: return `Signature Spells`
//             }
//             break
//     }
// }