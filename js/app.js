/**
 * Created by SOSUNOV_AI on 28.01.2016.
 */
//Ext.application({
//    name: 'HelloExt',
//    launch: function() {
//        Ext.create('Ext.container.Viewport', {
//            layout: 'fit',
//            items: [
//                {
//                    title: 'Приложение на Ext JS 4',
//                    html : '<h3>Добро пожаловать в мир Ext JS 4!</h3>'
//                }
//            ]
//        });
//    }
//});

//Ext.onReady(function(){
//    Ext.create('Ext.container.Viewport', {
//        layout: 'fit',
//        items: [
//            {
//                title: 'Приложение на Ext JS 4',
//                html : '<h3>Добро пожаловать в мир Ext JS 4!</h3>'
//            },
//        ]
//    });
//});

////ИСПОЛЬЗОВАНИЕ КЛАССА
//Ext.define('ClassNameSpace.Person',
//    {
//        name: 'SetFirstName',
//        surname: 'SetSecondName',
//        getName: function(){
//            alert('Полное имя: ' + this.name + " " + this.surname);
//        }});
//
//var eugene = Ext.create('ClassNameSpace.Person');
//eugene.getName();
//eugene.name = '1';
//eugene.surname = '2';
//eugene.getName();

////ИСПОЛЬЗОВАНИЕ КОНСТРУКТОРА
//Ext.define('Class.Constructor',{
//    name: '1',
//    surname: '2',
//    //конструктор
//    constructor: function(n, s){
//        if(n && s){
//            this.name = n;
//            this.surname = s;
//        }
//    },
//    getInfo: function(){
//        alert('Полное имя ' + this.name + ' ' + this.surname);
//    }
//});
//
//var p = Ext.create('Class.Constructor');
//p.getInfo();
//
//p = Ext.create('Class.Constructor', 'имя', 'фамилия');
//p.getInfo();
//
//p = new Class.Constructor('Новое Имя', 'Новая фамилия');
//p.getInfo();


//Ext.define('Class.Arif',{
//    res: '',
//    constructor: function(a1, a2){
//        if(a1 && a2){
//            this.res = a1 + a2;
//        }
//    },
//    add: function(a1, a2){
//        alert(a1 + a2);
//    },
//    get: function(){
//        if(this.res){
//            alert(this.res);
//        }
//        else{
//            alert('Данных нет');
//        }
//    }
//});
//
//var p = new Class.Arif(2, 3);
//p.add(1, 2);
//p.get();


//Ext.onReady(function(){ //Инициализация компонентов при загрузке DOM(используется когда нет необходимости в полноформатном приложении с шаблоном MVC)
//    Ext.create('Ext.panel.Panel',{ //Создание обьекта
//        renderTo: Ext.getBody(), //Рендеринг(renderTo || applyTo) компонента на место, а именно в элемент body. Можно использовать document.Body либо по id
//        title: 'Основной контейнер',
//        width: 300,
//        height: 230,
//        padding: 10,
//        items:[ //Массив из компонентов внутри Panel
//            {
//                xtype: 'panel',
//                title: 'Внутренняя панель 1',
//                height: 100,
//                width: '100%'
//            },
//            {
//                xtype: 'panel',
//                title: 'Внутренняя панель 2',
//                height: 100,
//                width: '100%'
//            }
//        ]
//    })
//});

Ext.define('User',{
    extend: 'Ext.data.Model',
    idProperty: 'userID',
    fields:[
        {
            name: 'userID',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'surname',
            type: 'string'
        },
        {
            name: 'date',
            type: 'date'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'married',
            type: 'bool'
        }
    ]
});

var store = Ext.create('Ext.data.Store', {
    model: 'User',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'user.json',
        reader: {
            type: 'json',
            root: 'user'
        }
    }
});

Ext.onReady(function(){
    Ext.create('Ext.container.Viewport',{
        layout: 'border',
        items: [
            {
                region: 'center',
                html: 'Центр страницы',
                title: 'Центр',
                xtype: 'grid',
                store: store,
                columns: [{
                    header: 'Имя',
                    dataIndex: 'name'
                }, {
                    header: 'Фамилия',
                    dataIndex: 'surname'
                }, {
                    header: 'Дата рождения',
                    dataIndex: 'date',
                    xtype:'datecolumn',
                    format: 'd/m/Y',
                    flex:1
                }, {
                    header: 'E-mail',
                    dataIndex: 'email',
                    flex:1
                }, {
                    header: 'Женат/Замужем',
                    dataIndex: 'married',
                    flex:1
                }]
                //xtype: 'tabpanel', // TabPanel itself has no title
                //activeTab: 0,      // First tab active by default
                //items: {
                //    title: 'Default Tab',
                //    html: 'Центр страницы'
                //}
            },
            {
                region: 'north',
                html: 'Верх страницы',
                border: false,
                margins: '0 0 5 0'
            },
            {
                region: 'west',
                collapsible: true,
                collapsed: true,
                title: 'Navigation',
                width: 150,
                split: true
            },
            {
                region: 'south',
                title: 'South Panel',
                html: 'Низ страницы',
                collapsible: true,
                collapsed: true,
                split: true,
                height: 100,
                minHeight: 100
            },
            {
                region: 'east',
                title: 'East Panel',
                collapsible: true,
                collapsed: true,
                split: true,
                width: 150
            }]
    })
});