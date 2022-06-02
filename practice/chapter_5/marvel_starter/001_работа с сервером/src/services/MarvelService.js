

class MarvelService { //создаем класс, он будет на чистом js поэтому не нужно импортировать какие то части из react
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'; //переменная которая содержит повторяющуюся часть апи адреса
    _apiKey = 'apikey=dfdfa6308e7de4e2b505ce5588129bed'; //переменная которая хранит наш ключ

    getResource = async (url) => { //создаем функцию, куда как аргумент передается адрес с которого мы хотим получить данные
        let res = await fetch(url); // создаем переменную с данными, которые придут с сервера

        if (!res.ok) { //Если ошибка, то выдаем следующее предупреждение
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json(); //если ошибок не вохникло то возвращаем наш ответ в виде json

    }

    getAllCharacters = () => { //создаем функцию по получению всех персонажей   
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        //вызываем нашу функцию отправки запроса и возвращаем данные с нее по указаному адресу
    }

    getCharacter = (id) => { //создаем функцию по получению одного персонажа по его id 
        return this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);
    }
}

export default MarvelService;