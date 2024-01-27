// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.


let specializations = new Map();
specializations.set("Пицца", "Виктор");
specializations.set("Суши", "Ольга");
specializations.set("Десерты", "Дмитрий");

let chefs = new Map();
specializations.forEach((chef, specialization) => {
    if (!chefs.has(chef)) {
        chefs.set(chef, []);
    }
    chefs.get(chef).push(specialization);
});

console.log("Информация о поварах и их специализациях:");
chefs.forEach((specializations, chef) => {
    console.log(`${chef} готовит: ${specializations.join(", ")}`);
});

let dishes = new Map();
dishes.set('Пицца "Маргарита"', "Виктор");
dishes.set('Пицца "Пепперони"', "Виктор");
dishes.set('Суши "Филадельфия"', "Ольга");
dishes.set('Суши "Калифорния"', "Ольга");
dishes.set('Тирамису', "Дмитрий");
dishes.set('Чизкейк', "Дмитрий");

function Order(name, dishes = []){
    this.name = name;
    this.dishes = new Set(dishes);
    this.addedDishe = function (dish){
        this.dishes.add(dish);
    };
}

const clientAlex = new Order('Алексей', ['Пицца "Пепперони"', 'Тирамису']);
const clientMary = new Order('Мария', ['Суши "Калифорния"', 'Пицца "Маргарита"']);
const clientIra = new Order('Ира', ['Чизкейк']);

let orders = new Map();
orders.set(clientAlex.name, clientAlex.dishes);
orders.set(clientMary.name, clientMary.dishes);
orders.set(clientIra.name, clientIra.dishes);

console.log("\nИнформация о заказах:");
orders.forEach((dishes, client) => {
    console.log(`Клиент ${client} заказал(а): ${[...dishes].join(", ")}`);
});

