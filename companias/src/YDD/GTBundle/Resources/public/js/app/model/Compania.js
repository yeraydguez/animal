Ext.define('PFC.model.Compania', {
	extend: 'Ext.data.Model',
        
	fields: [
		{ name: 'idcom', type: 'int'}, 
		{ name: 'compania', type: 'string'}
	], 
	
	proxy: {
        type: 'rest',
        url : 'api'
    }
});
