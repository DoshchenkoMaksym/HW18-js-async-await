/* Напишите функцию timeout(data, ms), которая возвращает новый промис, переходящий в состояние "resolved" через ms миллисекунд и передает 
в резолв данные которые принимает через аргумент data. В реализации данной функции используем явные промисы.
Пример использования:
delay({name: "user"}, 1000).then((data) => console.log("Hello!", data))

 */

async function timeout(data, ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), ms)
    })
};
/* timeout({name: "user"}, 1000).then((data) => console.log("Hello!", data)) */
/* Используйте async / await. Необходимо организовать цепочку промисов внутри асинхронной функции getResult.
Функции getUserInfo, getUserAvatar, getUserAdditionalInfo необходимо переписать в стиле async. 
Вместо setTimeout нужно использовать функцию delay которую написали в предыдущем задании (вызываеть ее нужно через async await).

*/

async function getResult() {
    let userInfo = await getUserInfo();
    let userAvatar = await getUserAvatar(userInfo);
    let userAdditInfo = await getUserAdditionalInfo(userAvatar);
    console.log(userAdditInfo)
};
getResult()

async function getUserInfo() {
    return timeout({ name: 'Vic', age: 21, id: 1 }, 1000);
};
async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return timeout(userInfo, 1000);
};
async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return  timeout(userInfo, 1000);
};

/* Используйте async / await. Необходимо добавить обработку ошибок. Ошибка должна быть выведена в консоль.
 */
async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
    try {
        let user = await getUser();
        throw new Error('error');
    } catch (err) {
        console.log('Это ошибка:', err)
    }  
    
}

getInfo();
