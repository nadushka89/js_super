// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musics = [
  { title: 'Музы', artist: 'Звери', year: '2011'},
  { title: 'Голод', artist: 'Звери', year: '2003'},
  { title: 'Meteora', artist: 'Linkin Park', year: '2003'},
  { title: 'Heavy', artist: 'Linkin Park', year: '2017'}
];

const musicCollection = {
    musics: [...musics],
    [Symbol.iterator]: function(){
        let countCollections = 0;
        return {
            next: () => {
                if (countCollections >= this.musics.length) {
                    return {done: true};
                } else {
                    return {
                         value: this.musics[countCollections++],
                         done: false,
                    };
                }
            },
        };
    },
};
for (const music of musicCollection) {
    console.log(music.title, music.artist, music.year);
}
