/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

class GameObject {
  constructor(game){
  this.createdAt = game.createdAt;
  this.name = game.name;
  this.dimensions =game.dimensions;
  }
}
/*
function GameObject(grandchildAttributes){
    this.createdAt = grandchildAttributes.createdAt;
    this.dimensions = grandchildAttributes.dimensions;
   
  }
  
  GameObject.prototype.destroy = 
  function(){
      return 'object was removed from the game.';
  };
      
  function CharacterStats (childAttributes){
    GameObject.call(this,childAttributes);
    this.hp = childAttributes.hp;
    this.name = childAttributes.name;
    
    
  }
  CharacterStats.prototype = Object.create (GameObject.prototype);
  
  CharacterStats.prototype.takeDamage =
  function(){
    return '${this.name} took damage.';
  };
  
   
   
  function Humanoid(attributes){
   CharacterStats.call(this,attributes);
     this.faction = attributes.faction;
     this.weapons = attributes.weapons;
     this.language = attributes.language;
    
   }
   
    Humanoid.prototype = Object.create (CharacterStats.prototype);
   
   
   Humanoid.prototype.greet = 
   function(){
       return '${this.name} offers a greeting in ${this.language}.';
   };
*/


// IS TURNED INTO....

// function GameObject(grandchildAttributes) {
//     this.createdAt = grandchildAttributes.createdAt;
//     this.dimensions = grandchildAttributes.dimensions;
// }
// GameObject.prototype.destroy =
//     function () {
//         return 'object was removed from the game.';
//     };
// function CharacterStats(childAttributes) {
//     GameObject.call(this, childAttributes);
//     this.hp = childAttributes.hp;
//     this.name = childAttributes.name;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage =
//     function () {
//         return '${this.name} took damage.';
//     };
// function Humanoid(attributes) {
//     CharacterStats.call(this, attributes);
//     this.faction = attributes.faction;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet =
//     function () {
//         return '${this.name} offers a greeting in ${this.language}.';
//     };

//     const mage = new Humanoid({
//         createdAt: new Date(),
//         dimensions: {
//           length: 2,
//           width: 1,
//           height: 1,
//         },
//         healthPoints: 5,
//         name: 'Bruce',
//         team: 'Mage Guild',
//         weapons: [
//           'Staff of Shamalama',
//         ],
//         language: 'Common Tongue',
//       });
    
//       const swordsman = new Humanoid({
//         createdAt: new Date(),
//         dimensions: {
//           length: 2,
//           width: 2,
//           height: 2,
//         },
//         healthPoints: 15,
//         name: 'Sir Mustachio',
//         team: 'The Round Table',
//         weapons: [
//           'Giant Sword',
//           'Shield',
//         ],
//         language: 'Common Tongue',
//       });
    
//       const archer = new Humanoid({
//         createdAt: new Date(),
//         dimensions: {
//           length: 1,
//           width: 2,
//           height: 4,
//         },
//         healthPoints: 10,
//         name: 'Lilith',
//         team: 'Forest Kingdom',
//         weapons: [
//           'Bow',
//           'Dagger',
//         ],
//         language: 'Elvish',
//       });
    
//       console.log(mage.createdAt); // Today's date
//       console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//       console.log(swordsman.healthPoints); // 15
//       console.log(mage.name); // Bruce
//       console.log(swordsman.team); // The Round Table
//       console.log(mage.weapons); // Staff of Shamalama
//       console.log(archer.language); // Elvish
//       console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//       console.log(mage.takeDamage()); // Bruce took damage.
//       console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.