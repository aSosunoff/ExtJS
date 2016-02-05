/**
 * Created by Пользователь on 29.01.2016.
 */







//Ext.define('Class.Person', {//Объявление класса
//    config: {
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

