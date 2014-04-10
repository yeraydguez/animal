Ext.define('PFC.controller.Acceso', {
	extend : 'Ext.app.Controller',
	
	config:{
        views : ['Acceso'],
    },
	
	constructor: function(config) {
        this.initConfig(config);
		this.callParent([config]);
        return this;
   },
	
	init : function() {
		console.log('aqui');
	}, // fin init	
}); //fin ext.define
