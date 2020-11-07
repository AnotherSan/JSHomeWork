import Card from './Card.js';
import Game from './Game.js';
import TaskQueue from './TaskQueue.js';
import SpeedRate from './SpeedRate.js';


class Creature extends Card {
    constructor(name, maxPower) {
        super(name, maxPower);
    }

    getDescriptions() {
        return [getCreatureDescription(this), super.getDescriptions()]
    }
}

// Отвечает является ли карта уткой.
function isDuck(card) {
    return card && card.quacks && card.swims;
}

// Отвечает является ли карта собакой.
function isDog(card) {
    return card instanceof Dog;
}

// Дает описание существа по схожести с утками и собаками
function getCreatureDescription(card) {
    if (isDuck(card) && isDog(card)) {
        return 'Утка-Собака';
    }
    if (isDuck(card)) {
        return 'Утка';
    }
    if (isDog(card)) {
        return 'Собака';
    }
    return 'Существо';
}



// Основа для утки.
class Duck extends Creature {
    constructor(name='Мирная утка', maxPower=2) {
        super(name, maxPower);
    }
    quacks = function () { console.log('quack') };
    swims = function () { console.log('float: both;') };
}


// Основа для собаки.
class Dog extends Creature {
    constructor(name='Пес-бандит', maxPower=3) {
        super(name, maxPower);
    }
}

//Основа громила
class Trasher extends Dog {
    constructor(name='Громила', maxPower=5) {
        super(name, maxPower);
    }
    
    modifyTakenDamage(value, fromCard, gameContext, continuation){
        this.view.signalAbility(() => super.modifyTakenDamage(value-1, fromCard, gameContext, continuation))
    }

    getDescriptions() {
        let newDescriptions = super.getDescriptions();
        return [...newDescriptions, 'Получает на 1 меньше урона']
    }
}

const seriffStartDeck = [
    new Duck(),
    new Duck(),
    new Duck(),
    new Duck(),
];
const banditStartDeck = [
    new Trasher(),
];

// Колода Шерифа, нижнего игрока.
/*const seriffStartDeck = [
    new Card('Мирный житель', 2),
    new Card('Мирный житель', 2),
    new Card('Мирный житель', 2),
];

// Колода Бандита, верхнего игрока.
const banditStartDeck = [
    new Card('Бандит', 3),
];
*/

// Создание игры.
const game = new Game(seriffStartDeck, banditStartDeck);

// Глобальный объект, позволяющий управлять скоростью всех анимаций.
SpeedRate.set(1);

// Запуск игры.
game.play(false, (winner) => {
    alert('Победил ' + winner.name);
});
