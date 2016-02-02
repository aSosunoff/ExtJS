/**
 * Created by Пользователь on 29.01.2016.
 */

////ПРОСТОЕ ОКНО С КОНТЕНТОМ
//Ext.onReady(function(){// Инициализирует компоненты ExtJS
//    Ext.create('Ext.container.Viewport',{//Создаёт объект контейнер. Который будет растянут во всю страницу (Viewport)
//        layout: 'fit',//Правило расположения компонентов в самом контейнере
//        items:[{
//            title: 'Титульник приложения',
//            html: 'Контент'
//        }]
//    })
//});
////

////Инициализация новых классов
////Ext.define(className, members, onClassCreate);
//Ext.define('NameSpaceClass.Person',{//Определяем новый класс в пространстве имён NameSpaceClass
//    name: 'firstName',//задаём поля
//    surname: 'secondName',//задаём поля
//    getInfoPerson: function () {//описываем медод в классе
//        alert('name--> ' + this.name + ' surname--> ' + this.surname);
//    }
//});
//
//var perem = new NameSpaceClass.Person();//Создаём экземпляр класса
//perem.getInfoPerson();//Вызываем метод класса
//
//var param2 = Ext.create('NameSpaceClass.Person');//ТО ЖЕ ЧТО И ВЫШЕ. создаём экземпляр класса
//param2.getInfoPerson();//Вызываем метод
//param2.name = 'newName';//Задаём новое значение подя
//param2.surname = 'newSurname';

////Конструкторы
//Ext.define('Class.WithConstructor',{
//    Name: '',
//    Surname: '',
//    constructor: function(n, s){//Объявляем конструктор в классе
//        if(n && s){
//            this.Name = n;
//            this.Surname = s;
//        }
//    },
//    GetInfo: function(){
//        alert(this.Name + ' ' + this.Surname);
//    }
//});
//
//var t = new Class.WithConstructor();
//t.GetInfo();
//
//var w = new Class.WithConstructor('Александр', 'Сосунов');
//w.GetInfo();

//Ext.define('Class.Person', {//Объявление класса
//    config: {//Секция которая автоматически создаёт свойства для поллей находящихся в этом блоке
//        name: '',
//        surName: ''
//    },
//    constructor: function(n, s){//Не именованная функция которая вызывается при создании нового экземпляра класса
//        this.initConfig();//Инициализация свойств
//        if(n){
//            this.setName(n);
//        }
//        if(s){
//            this.setSurName(s);
//        }
//    },
//    getInfo: function(){//метод
//        alert('Полное имя: ' + this.name + ' ' + this.surName);
//    }
//});
//
//Ext.define('Class.Student',{
//    alias: 'student',
//    extend: 'Class.Person',//наследование
//    config: {
//        course: 0
//    },
//    constructor: function(n, s, c){
//        this.initConfig();
//        if(c){
//            this.setCourse(c);
//        }
//        this.callParent([n, s]);
//    },
//    getInfo: function(){
//        this.callParent();//переопределения метода
//        alert('Course: ' + this.course);
//    }
//});
//
//var w = new Class.Person('Alexandr', 'Sosunov');
//w.getInfo();
//
//var r = Ext.create('student', 'a', 's', 1);//Обращение к класу по псевдониму
//r.getInfo();
//
//var w2 = new Class.Student('Alexandr', 'Sosunov', 5);
//w2.getInfo();

//РАБОТА С ЭЛЕМЕНТАМИ DOM http://metanit.com/web/extjs/3.php
Ext.onReady(function(){
    var element = Ext.get('mainDiv');
    alert('Найденный элмент: ' + element.id);
});

