

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

    getAllCharacters = async () => { //создаем функцию по получению всех персонажей   
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        //вызываем нашу функцию отправки запроса и возвращаем данные с нее по указаному адресу
        return res.data.results.map(this._transformCharacter);
        //формируем новый массив с объектами-персонажами
    }

    getCharacter = async (id) => { //сначала наша функция ждет ответ async
        //а потом записывает полученные данные в результат await
        const res = await this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]); //возвращаем наш объект для трансформации
    }
    //char это наш новый объект  res.data.results[0]
    _transformCharacter = (char) => { //функция по получению данных о персонаже и формирование нового объекта
        return {
            name: char.name, //обращаемся к полученным данным его свойству дата и его свойству резалтс 
            //бере 0 индекс массива(первый объект) так как персонаж всего 1, и обращаемся к его свойству нейм
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            //складываем стрки так как путь к картинке состоит из двух полей path и extension
            homepage: char.urls[0].url,
            //urls содержит массив из двух объектов, в перовм в свойстве url лежиьт ссылка на дом страницу, во втором на вики
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService;