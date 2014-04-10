Ext.Loader.setConfig({enabled:true});

Ext.application({
    
    name: 'PFC',
    
    controllers: ['Acceso'],
    stores: ['Companias'],

    autoCreateViewport: false,
	launch: function() {		
			Ext.widget('acceso');
	}
});

