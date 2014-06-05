//---------------------------------增加部门查询功能--------------------
/**
 * 修改人：张斌
 * 修改时间：2013-7-2-15：00
 * 修改内容：封装部门树和部门查询列表
 */
Ext.define('CRM.Authorize.DepartmentChooesTree',{
	extend:'Ext.panel.Panel',
	layout: 'hbox',
	//部门查询panel
	departmentSearchPanel:null,
	getDepartmentSearchPanel:function(){
		if(Ext.isEmpty(this.departmentSearchPanel)){
    		this.departmentSearchPanel = Ext.create('CRM.Authorize.DepartmentSearchPanel');
    	}
    	return this.departmentSearchPanel;
	},
	initComponent : function() {
		var me= this;
		me.items =[DepartmentChooesTree,me.getDepartmentSearchPanel()];
		this.callParent();
	}
});
/**
 * 修改人：张斌
 * 修改时间：2013-7-2-15：00
 * 修改内容：查询条件form，只有部门名称
 */
Ext.define('CRM.Authorize.DepartmentSearchForm',{
	extend:'Ext.form.FormPanel',
	region: 'north',  
	height:30,
	 layout: {
     	type: 'table',
     	columns: 3
     },
	initComponent : function() {
		var me= this;
		me.items =[{
			name: 'deptName',
			margin:'1 10 0 0',
			allowBlank:false,
		    fieldLabel: i18n('i18n.organization.organization.deptName'),
		    colspan: 2,
		    xtype : 'textfield',
		    listeners: {
                specialkey: function(field, e){
                    if (e.getKey() == e.ENTER) {
                    	if(me.getForm().isValid()){//校验名称不为空，则查询
        					me.up('panel').getDepartmentSearchGrid().getStore().loadPage(1);
        				}
                    }
                }
            }
		},{
			xtype : 'button', 
			width:70,
			colspan: 1,
			text : i18n('i18n.authorization.find'),
			handler : function() {
				if(me.getForm().isValid()){//校验名称不为空，则查询
					me.up('panel').getDepartmentSearchGrid().getStore().loadPage(1);
				}
			}
		}];
		this.callParent();
	}
});
/**
 * 修改人：张斌
 * 修改时间：2013-7-2-15：00
 * 修改内容：部门列表的store
 */
Ext.define('CRM.Authorize.DepartmentGridStore', {
	extend:'Ext.data.Store',
	pageSize : 10,
	model : 'DepartmentModel',
	proxy : {
		type : 'ajax',
		actionMethods : 'POST',
		url : '../organization/searchDeptByDeptName.action',
		reader : {
			type : 'json',
			root : 'depts',
			totalProperty : 'totalCount'
		}
	}
});

/**
 * 修改人：张斌
 * 修改时间：2013-7-2-15：00
 * 修改内容：部门查询别列表JS代码
 */
Ext.define('CRM.Authorize.DepartmentSearchGrid',{
	extend:'Ext.grid.GridPanel',
	title : i18n('i18n.authorization.deptSearchGrid'),//部门查询列表
    sortableColumns:false,
    enableColumnHide:false,
    enableColumnMove:false,
    //autoScroll : true,
    flex : 1,
    region: 'center',  
	stripeRows : true, // 交替行效果
	selType : "rowmodel", // 选择类型设置为：行选择
	listeners:{
		itemclick:function(view,record,item,index){//双击事件，按照deptSeq展开树
			var deptSeq = record.get('deptSeq');
			deptSeq = deptSeq.substring(0,deptSeq.length-1);//需要去掉最后一个点，才能用select
			DepartmentChooesTree.selectPath(deptSeq,'id','.');
		}
	},
	columns : [{
			hidden : true,
			dataIndex : 'id'
		},{
			text : i18n('i18n.authorization.deptCode'),//部门编码
			renderer : function(value){
				if(value==null){
					return '';
				}
				return value;
			},
			dataIndex : 'deptCode'
		},{
			text : i18n('i18n.organization.organization.deptName'),//部门名称
			width:170,
			dataIndex : 'deptName',
			renderer : function(value){
				if(value==null){
					return '';
				}
				return value;
			}
		},{
			text : i18n('i18n.organization.organization.principal'),//负责人
			width:50,
			renderer : function(value){
				if(value==null){
					return '';
				}
				return value;
			},
			dataIndex : 'principalName'
		},{
			text : i18n('i18n.organization.organization.companyName'),//公司名称
			width:150,
			renderer : function(value){
				if(value==null){
					return '';
				}
				return value;
			},
			dataIndex : 'companyName'
		}],
	initComponent : function() {
		var me= this;
		var store = Ext.create('CRM.Authorize.DepartmentGridStore');
		store.on('beforeload',function(store, operation, eOpts){//将deptName传给后台
			var deptName = me.up('panel').getDepartmentSearchForm().getForm().findField('deptName').getValue();
			Ext.apply(operation,{
				params : {
						'deptName' : deptName
					}
				}
			);
		});
		me.store = store;
		me.bbar = Ext.create('Ext.toolbar.Paging', {//分页工具
			store : store,
			displayMsg : i18n('i18n.authorization.roleGrid.displayMsgNew'),
			displayInfo : true
		});
		this.callParent();
	}
});
/**
 * 修改人：张斌
 * 修改时间：2013-7-2-15：00
 * 修改内容：封装部门和查询条件
 */
Ext.define('CRM.Authorize.DepartmentSearchPanel',{
	extend:'Ext.panel.Panel',
	flex:1,
	height:373,
	layout:'border',
	//查询form
	 departmentSearchForm:null,
	 getDepartmentSearchForm:function(){
		 if(Ext.isEmpty(this.departmentSearchForm)){
	    		this.departmentSearchForm = Ext.create('CRM.Authorize.DepartmentSearchForm');
	    	}
	    	return this.departmentSearchForm;
	 },
	 //部门列表
	 departmentSearchGrid:null,
	 getDepartmentSearchGrid:function(){
		 if(Ext.isEmpty(this.departmentSearchGrid)){
	    		this.departmentSearchGrid = Ext.create('CRM.Authorize.DepartmentSearchGrid');
	    	}
	    	return this.departmentSearchGrid;
	 },
	initComponent : function() {
		var me= this;
		me.items =[me.getDepartmentSearchForm(),me.getDepartmentSearchGrid()];
		this.callParent();
	}
});

//--------------------------------------------------------------------------


/**
 * 选中待选角色列表中的一行多行移动至已选角色列表中
 * 
 * @name singelSelect
 */
function singelSelect() {
	select(RoleChooesGrid,AuthorizeRoleGridStore,RoleChooesGridStore);
};

/**
 * 选中已选角色列表中的一行多行移动至待选角色列表中
 * 
 * @name cancelSelect
 */
function cancelSelect() {
	select(AuthorizeRoleGrid,RoleChooesGridStore,AuthorizeRoleGridStore);
};

/**
 * 选中待选角色列表中所有至已选角色列表中
 */
function selectAll() {
	allSelect(RoleChooesGrid,AuthorizeRoleGridStore,RoleChooesGridStore);
}

/**
 * 选中已选角色列表中所有至待选角色列表中
 */
function cancelAll() {
	allSelect(AuthorizeRoleGrid,RoleChooesGridStore,AuthorizeRoleGridStore);
}

//角色选择store
var RoleChooesGridStore = Ext.create('Ext.data.Store', {
	model : 'RoleModel',
	remoteSort : true,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		actionMethods : 'POST',
		url : 'findAllChooesRole.action',
		reader : {
			type : 'json',
			root : 'roleList'
		}
	},
	listeners: {
		beforeload: function(store, operation, eOpts){
			if(AuthorizeForm==null||AuthorizeForm.getForm()==null||null==AuthorizeForm.getForm().getRecord()){
				return;
			}
			var user = AuthorizeForm.getForm().getRecord();
			if(user==null){
				return;
			}
			var userId = user.get('id');
			if(userId==null){
				return;
			}
			Ext.apply(operation,{
				params : {
						'userId' : userId
					}
				}
			);
		}
    }
});
/**
 * 角色选择列表
 */
var RoleChooesGrid = Ext.create('Ext.grid.GridPanel',{
	title : i18n('i18n.authorization.authChooseRole'),
    sortableColumns:false,
    enableColumnHide:false,
    enableColumnMove:false,
    height :390,
    width : 365,    
	autoScroll : true,
	stripeRows : true, // 交替行效果
	selType : "rowmodel", // 选择类型设置为：行选择
	store : RoleChooesGridStore,
	selModel :  Ext.create("Ext.selection.CheckboxModel"),
	// 列模板
	columns : [ {
			text : i18n('i18n.authorization.role.roleName'),
			width:150,
			dataIndex : 'roleName'
		},{
			text : i18n('i18n.authorization.role.roleDesc'),
			width:200,
			dataIndex : 'roleDesc'
		}],
	listeners: {
		scrollershow: function(scroller) {
	    	if (scroller && scroller.scrollEl) {
				scroller.clearManagedListeners(); 
				scroller.mon(scroller.scrollEl, 'scroll', scroller.onElScroll, scroller); 
			}
		}
	}
});

//已授权角色store
var AuthorizeRoleGridStore = Ext.create('Ext.data.Store', {
	model : 'RoleModel',
	remoteSort : true,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		actionMethods : 'POST',
		url : 'findAllAuthorizeRole.action',
		reader : {
			type : 'json',
			root : 'roleList'
		}
	},
	listeners: {
		beforeload: function(store, operation, eOpts){
			if(AuthorizeForm==null||AuthorizeForm.getForm()==null||null==AuthorizeForm.getForm().getRecord()){
				return;
			}
			var user = AuthorizeForm.getForm().getRecord();
			if(user==null){
				return;
			}
			var userId = user.get('id');
			if(userId==null){
				return;
			}
			Ext.apply(operation,{
				params : {
						'userId' : userId
					}
				}
			);
		},
		load:function(store){
			store.each(function(record){
				AuthorizeRoleGridInitStore.add({'id':record.get('id')});
			});
		}
    }
});

//已授权角色初始化store
var AuthorizeRoleGridInitStore = Ext.create('Ext.data.Store', {
	fields:['id']
});

/**
 * 已授权角色列表
 */
var AuthorizeRoleGrid =Ext.create('Ext.grid.GridPanel',{
	title : i18n('i18n.authorization.authRole'),
    sortableColumns:false,
    enableColumnHide:false,
    enableColumnMove:false,
    height :390,
    width : 365,
    autoScroll : true,
	stripeRows : true, // 交替行效果
	selType : "rowmodel", // 选择类型设置为：行选择
	store : AuthorizeRoleGridStore,
	selModel :  Ext.create("Ext.selection.CheckboxModel"),
	// 列模板
	columns : [{
			text : i18n('i18n.authorization.role.roleName'),
			width:150,
			dataIndex : 'roleName'
		},{
			text : i18n('i18n.authorization.role.roleDesc'),
			width:200,
			dataIndex : 'roleDesc'
		}],
	listeners: {
		scrollershow: function(scroller) {
	    	if (scroller && scroller.scrollEl) {
				scroller.clearManagedListeners(); 
				scroller.mon(scroller.scrollEl, 'scroll', scroller.onElScroll, scroller); 
			}
		}
	}
});
/**
 * 移动按钮
 */
var buttonPanel = Ext.create('Ext.panel.Panel', {
	id : 'handover_buttonPanel',
	height :390,
	width :50,
	buttonAlign : 'center',
	layout : 'column',
	items : [ {
		columnWidth : 1,
		height : 0,
		xtype : 'container',
		style : 'padding-top:60px;border:none',
		border : false,
		width : '100%',
		hide:true
	},{
		columnWidth : 1,
		xtype: 'container',
		style : 'padding-top:60px;border:none',
		border : false,
		width : '100%',
		items : [ {
			xtype : 'button',
			text : '&gt;&gt;',
			id : 'allSelect',
			width : '80%',
			handler : selectAll
		} ]
	}, {
		columnWidth : 1,
		border : false,
		width : '100%',
		xtype: 'container',
		style : 'padding-top:20px;border:none',
		items : [ {
			xtype : 'button',
			text : '&nbsp;&gt;&nbsp;',
			id : 'singelSelect',
			width : '80%',
			handler : singelSelect
		} ]
	}, {
		columnWidth : 1,
		border : false,
		width : '100%',
		xtype: 'container',
		style : 'padding-top:20px;border:none',
		items : [ {
			xtype : 'button',
			text : '&nbsp;&lt;&nbsp;',
			id : 'cancelSelect',
			width : '80%',
			handler : cancelSelect
		} ]
	}, {
		columnWidth : 1,
		border : false,
		width : '100%',
		xtype: 'container',
		style : 'padding-top:20px;border:none',
		items : [ {
			xtype : 'button',
			text : '&lt;&lt;',
			id : 'cancelall',
			width : '80%',
			handler : cancelAll
		} ]
	}]
});

/*
 * 定义组织架构选择树的store
 */
var DepartmentTreeStore = Ext.create('Ext.data.TreeStore',{
	model : 'TreeNodeModel',
	proxy : {
		type : 'ajax',
		actionMethods : 'POST',
		url : 'loadDepartmentChooesTree.action'
	},
	root : {
		//把id为0改成103  得到OA组织架构树
		id : '103',
		text : i18n('i18n.authorization.organization.root'),
		childChecked:true,
		//expanded : true,
		checked : null
	},
	sorters : [ {
		property : 'leaf',
		direction : 'ASC'
	} ],
	listeners : {
		'beforeload': function(store, operation, eOpts){
			var user = AuthorizeForm.getForm().getRecord();
			if(user == null){
				return;
			}
			if(undefined === user.raw){
				return;
			}
			if(operation.params==null){
				operation.params = {};
			}
			var node = DepartmentTreeStore.getNodeById(operation.params.node); 
			Ext.apply(operation.params,{
				'userId' : user.raw.id,
				'childChecked':node.get('childChecked')
			});
		}
	}
});

// /////////////////////////树的右键菜单/////////////////////////////////////
var DepartmentChooesTreeRightMenu = new Ext.menu.Menu({
	frame : true,
	id : 'DepartmentChooesTreeRightMenu',
	width : 100,
	items : [{
		text : i18n('i18n.authorization.refresh'),
		width :40,
		iconCls : 'deppon_menu_refresh',
		handler : function() {
			var record = DepartmentChooesTree.getSelectionModel().getSelection()[0];
			if(record.raw.entity != null){
				var id = record.raw.entity.id;
				onRefreshTreeNodes(DepartmentTreeStore,id);
			}
		}
	}]
});

/**
 * 树节点的右键点击事件
 * 
 * @param node
 * @param record
 * @param item
 * @param index
 * @param e
 */
function treeRightKeyAction(node, record, item, index, e) {
	e.preventDefault();// 阻止浏览器默认行为处理事件
	DepartmentChooesTreeRightMenu.showAt(e.getXY());
}
/**
 * 修改人：张斌
 * 修改时间：2013-7-2 8:58
 * 修改内容：1、去掉“负责人”和“公司名称”这两列2、调整部门树的大小
 */
var DepartmentChooesTree = Ext.create('Ext.tree.Panel', {
	title : i18n('i18n.organization.organization.list'),
    height :380,
    width:270,
    useArrows: true,
    store: DepartmentTreeStore,
    multiSelect: true,
    sortableColumns:false,
    enableColumnHide:false,
    enableColumnMove:false,  
	border : false,
	autoScroll:true,
    columns: [{
        xtype: 'treecolumn',
        text: i18n('i18n.organization.organization.deptName'),
		width : 435,
		dataIndex : 'text',
		renderer:function(value,node,record){
			if(!Ext.isEmpty(record.get('childChecked'))&&record.get('childChecked')){
				return '<span style="color:red;">'+value+'</span>';
			}else{
				return value;
			}
			
		}
    }
    /*,{
		text : i18n('i18n.organization.organization.principal'),
		width : 130,
		dataIndex : 'entity',
		renderer : function(value){
			if(value==null){
				return '';
			}
			return value.principal;
		}
	},{
		text : i18n('i18n.organization.organization.companyName'),
		width :  200,
		dataIndex : 'entity',
		renderer : function(value){
			if(value==null){
				return '';
			}
			return value.companyName;
		}
	}*/],
	// 监听事件
    listeners: {
    	itemcontextmenu : treeRightKeyAction,
		checkchange : function(node, checked) {
			if (checked == true) {
				selectChildFunction(node, true);
				selectParentFunction(node);
				//修改：ztjie 修改时间：2012-06-11修改内容：增加当前节点选中的时候，
				//那么其所有子节点是选中的
				node.allChildrenNodeChecked = true;
			} else {
				selectChildFunction(node, false);
				selectParentFunction(node);
				// 判断父节点下是否还有子节点是选中状态
				//deSelectParentFunction(node);
			}
		},
		//修改：ztjie 修改时间：2012-06-11 修改内容：增加收缩的时候，判断判断当前节点下的子节点是
		//否全部选中的设置
		itemcollapse : function(node, state) {
			var flag = true;//默认全部选中
			for (var i = 0; i < node.childNodes.length; i++) {
				var childNode = node.childNodes[i];
				if(!childNode.get("checked")){
					flag = false;
				}
			}
			node.allChildrenNodeChecked = flag;		
		},
		itemexpand : function(node, state) {
			if(node.modified.checked==null){
				return;
			}
			if((typeof node.allChildrenNodeChecked)!='undefined'&&!node.allChildrenNodeChecked){
				return;
			}
			//得到更改后的选中判断值
			var checked = !node.modified.checked;

			/* ***** 选中时将子节点全部选中****** */
			var parentNode = node;
			if (parentNode.hasChildNodes()) {
				for (var i = 0; i < parentNode.childNodes.length; i++) {
					var childNode = parentNode.childNodes[i];
					childNode.set("checked", checked);
					selectChildFunction(childNode, checked);
				}
			}
		},
		scrollershow: function(scroller) {
	    	if (scroller && scroller.scrollEl) {
				scroller.clearManagedListeners(); 
				scroller.mon(scroller.scrollEl, 'scroll', scroller.onElScroll, scroller); 
			}
		}
	}
});

/**
 * 当所有子节点没有选中时候，取消选择父节点
 */
var deSelectParentFunction = function(node) {
	if (node.data.id == DepartmentChooesTree.store.tree.root.data.id)
		return;
	var parentNode = node.parentNode;
	if (parentNode.hasChildNodes()) {
		for (var i = 0; i < parentNode.childNodes.length; i++) {
			var childNode = parentNode.childNodes[i];
			if (childNode.data.checked == true) {
				return;
			}
		}
	}
	if(parentNode.data.id != DepartmentChooesTree.store.tree.root.data.id){
		if(parentNode.data.checked!=null){
			parentNode.set("checked", false);
		}
	}
	deSelectParentFunction(parentNode);
};

/**
 * 父节点选中时，选择所有子节点
 */
var selectChildFunction = function(node, checked) {
	Ext.Array.each(node.childNodes, function(childNode) {
		if(childNode.data.checked!=null){
			childNode.set("checked", checked);
			selectChildFunction(childNode, checked);
		}
	});
};

/**
 * 修改人：张斌
 * 修改时间：2013-7-16 17:27
 * 修改内容：当子节点选择时，判断该子节点的父节点下的所有子节点是否全部被选择。全部被选中，则父节点也呗选中
 */
var selectParentFunction = function(node) {
	var parentNode = node.parentNode;
	var allSelect = true;
	Ext.Array.each(parentNode.childNodes, function(childNode) {
		if(childNode.data.checked!=null){
			allSelect = allSelect&&childNode.data.checked;
		}
	});
	if(parentNode.data.checked!=null&&allSelect){//当子节点全被选中之后，才会设置父节点。如过allSelect = false,那就是子节点没被全选中，父节点也取消选中
		parentNode.set("checked", allSelect);
	}
};

var AuthorizeTab = Ext.create('Ext.tab.Panel', {
	activeTab : 0,
	plain : true,
	//autoScroll : true,
	id:'authorizeTab',
	items : [ {
		title : i18n('i18n.authorization.user.roleauth'),
		layout : 'hbox',
		items : [ RoleChooesGrid, buttonPanel, AuthorizeRoleGrid ]
	}, {
		//autoScroll : true,
		title : i18n('i18n.authorization.user.deptDataAuth'),
		items : Ext.create('CRM.Authorize.DepartmentChooesTree',{'id':'departmentChooesTreePanel'})
	}]
});

/**
 * 角色编辑窗口
 */
var AuthorizeEditWindow = Ext.create('PopWindow', {
	closable : true,
	modal : true,
	closeAction : 'hide',
	resizable:false,
	layout : 'border',
	title : i18n('i18n.authorization.window_title'),
	height:550,
	width:820,
    listeners:{
    	beforehide:function(){
    		AuthorizeTab.setActiveTab(0);
    		Ext.getCmp('departmentChooesTreePanel').getDepartmentSearchPanel().getDepartmentSearchForm().getForm().reset();
    		Ext.getCmp('departmentChooesTreePanel').getDepartmentSearchPanel().getDepartmentSearchGrid().getStore().loadPage(1);
    		AuthorizeRoleGridInitStore.removeAll();
    	},
    	beforeshow:function(){
    		DepartmentChooesTree.collapseAll();
    	}
    },
	items : [ {
		id:'AuthorizeOutForm',
		region : 'north',
		height:100,
		items : [ AuthorizeForm ]
	}, {
		id:'AuthorizeOutTab',
		region : "center", // 中间布局
		items : [ AuthorizeTab ]
	}]
});


