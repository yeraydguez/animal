Ext.define('PFC.view.Acceso', {
	extend : 'Ext.window.Window',
	xtype : 'acceso',

	autoShow : true,
	width : 320,
	title : 'Gestor de tareas',
	closable : false,
	closeAction : 'hide',
	draggable : false,
	defaultFocus : 'usuario',
	resizable : false,
	glyph : 'xf084@FontAwesome',
	modal: true,
		
	items : [{
		xtype : 'form',
		frame : false,
		bodyPadding : 10,
		border: false,
		defaults : {
			xtype : 'textfield',
			anchor : '100%',
			allowBlank : false,
			maskRe: /[a-z0-9_]/,
			blankText : 'campo obligatorio',
			msgTarget : 'side',
		},
		items : [{
			fieldLabel : 'Usuario',
			name : 'usuario',
			itemId : 'usuario',
			emptyText : 'nombre usuario',
			maxLength : 15,
			enforceMaxLength: true, 
			//maxLengthText : 'm\u00e1ximo 15 caracteres',

		}, {
			fieldLabel : 'Contrase\u00f1a',
			name : 'password',
			emptyText : 'contrase\u00f1a',
			inputType : 'password',
			maxLength : 15,
			enforceMaxLength: true, 
			//maxLengthText : 'm\u00e1ximo 15 caracteres',
		},
		{
			margin: '5 0 0 0',
			name: 'compania',
			valueField: 'idcom',
			displayField: 'compania',
			fieldLabel: 'Compañ\xEDa',
			xtype: 'combobox',
            store: 'Companias',            
            emptyText : 'compañ\xEDa',
            editable: false,
            queryMode: 'local',
            allowBlank: true,
		}
		],
		buttons : [{
			text : 'Entrar',
			glyph : 'xf090@FontAwesome',
			iconAlign: 'right',
		}]
	}],

}); 