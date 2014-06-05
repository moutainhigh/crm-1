/**
 * <p>
 * 部门选择器
 * </p>
 * @author 张斌
 * @date    2014-03-17
 * 默认调用方法为 Ext.create('Ext.lookup.BODeptLookup',{id:'bodeptlookupId',name:'planeName',width:300})
 * 初始化部门信息为Ext.getCmp("bodeptlookupId").initData(User); 其中User为当前登录用户
 * 如果想获取文本框的内容方法：Ext.getCmp("bodeptlookupId").getValue();
 * 获取对应的ID方法：Ext.getCmp("bodeptlookupId").getValueId()
 * 如果有自定义需求可以create BODeptLookUpWindow 来进行弹出框,需要实现select方法
 */

/**
 * 查询部门form
 */
Ext.define('BODeptQueryForm',{
	extend:'Ext.form.Panel',
	layout : {
		type : 'table',
		columns : 3
	},
	defaultType : 'textfield',
	defaults : {
		labelWidth : 40,
		margin:'5px 5px 5px 5px'
	},
	items:[{
		fieldLabel : '名称',
		width:350,
		name:'deptNameName',
		listeners : {   
            specialkey : function(th, e) {   
                if (e.getKey() == Ext.EventObject.ENTER) {   
                	Ext.getCmp("BODeptLookUpGridId").store.loadPage(1);
                }   
            }   
        }
	},{
		xtype:'hiddenfield',
		width:8
	},{
		xtype:'button',
		width:60,
		text:'查询',
		handler : function(){
			Ext.getCmp("BODeptLookUpGridId").store.loadPage(1);
		}
	}]
});

Ext.define('BODeptLookUpMode', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'standardCode'},
        {name: 'deptName'}
    ]
});

/**
 * 声明部门选择器store
 */
Ext.define('BODeptLookUpStore',{
	model: 'BODeptLookUpMode',
	extend : 'Ext.data.Store',
	pageSize : 10,
//	autoLoad: true,
    proxy: {
        type: 'ajax',
        url : '../marketing/searchDeptByDeptName.action',
		actionMethods : 'post',
        reader: {
            type: 'json',
            root: 'deptList',
			totalProperty : 'totalCount'
        }
    }
});

/**
 * 声明grid
 */
Ext.define('BODeptLookUpGrid',{
	extend:'Ext.grid.Panel',
	border: false,
    columns: [
        { header: '名称', dataIndex: 'deptName', flex: 0.7 },
        { header: '标杆编码',  dataIndex: 'standardCode', flex: 0.3 }
    ]
});

/**
 * 声明window
 */
Ext.define('BODeptLookUpWindow',{
	extend:'Ext.window.Window',
//	title: '请选择......',
    height: 350,
    width: 600,
    modal:true,
    layout: 'border',
    initComponent: function(){
    	var me=this;
    	var store=Ext.create('BODeptLookUpStore');
    	store.on('beforeload',function(store,operation,e){
    		var deptQueryForm = Ext.getCmp("BODeptQueryFormId");
    		var searchParams = { 
    			'deptName':deptQueryForm.getForm().findField('deptNameName').getValue()
    		};
    		//判断初始化start
    		if(!Ext.isNumber(operation.start) && !Ext.isEmpty(operation.start)){
    			operation.start=0;
    		};
    		if(!Ext.isNumber(operation.limit) && !Ext.isEmpty(operation.limit)){
    			operation.limit=10;
    		};
    		Ext.apply(operation,{
				params : searchParams
			});
    	});
    	this.items=[
    	    Ext.create('BODeptQueryForm',{id:'BODeptQueryFormId',region:'north'}),
    	    Ext.create('BODeptLookUpGrid',{
    	    	id:'BODeptLookUpGridId',
    	    	store:store,
    	    	region:'center',
    	    	listeners:{
    	        	itemdblclick:function(th,record,item,index,e,eop){
    	            	me.fireEvent('select', me,record);
    	        	}
    	        },
  				dockedItems:[{
  					xtype:'pagingtoolbar',
  					store:store,
  					dock:'bottom',
  					displayInfo : true,
  					autoScroll : true
  				}]
    	    })
    	]
        this.callParent(arguments);
    }
});

/**
 * <p>
 * 部门选择器
 * </p>
 * @author  张登
 * @date    2012-05-11
 * 初始化值时调用initData();
 */
Ext.define('Ext.ux.form.BOSearchField', {
    extend: 'Ext.form.field.Trigger',
    alias: 'widget.bodeptlookup',
    alternateClassName: ['Ext.lookup.BODeptLookup'],
    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
    trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
    valueId:'',
    emptyText:'请输入......',
    initComponent: function(){
        this.callParent(arguments);
        this.on('specialkey', function(f, e){
            if(e.getKey() == e.ENTER){
                this.onTrigger2Click();
            }
        }, this);
    },
    afterRender: function(){
        this.callParent();
        this.triggerEl.item(0).setDisplayed('none');  
    },
    getValueId:function(){
    	var me = this;
    	return me.valueId;
    },
    setValueId:function(val){
    	var me = this;
    	me.valueId=val;
    	return me;
    },
    onTrigger1Click : function(){
        var me = this;
        me.setValue('');
        me.setValueId('');
        me.valueId='';
        me.triggerEl.item(0).setDisplayed('none');
        me.doComponentLayout();
    },
    initData:function(val){
    	var me = this;
    	if(!Ext.isEmpty(val)){
    		if(!Ext.isEmpty(val.deptName)){
    			me.setValue(val.deptName);
    		}
    		if(!Ext.isEmpty(val.deptId)){
    			me.setValueId(val.deptId);
    		}
    	}
    },
    onTrigger2Click : function(){
    	var me = this;
    	me.window = Ext.create('BODeptLookUpWindow',{
    		listeners:{
    			select:function(win,record){
    				me.setValue(record.get("deptName"));
	        		me.setValueId(record.get("id"));
	        		me.fireEvent('select', me,record);
	        		win.close();
    			}
    		}
    	}).show();
    	me.window.down('textfield').setRawValue(me.getRawValue());
        me.triggerEl.item(0).setDisplayed('block');
        me.doComponentLayout();
    }
});
