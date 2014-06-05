Ext.JSON.encodeDate=function(d){return d.getTime();};String.prototype.replaceAll=function(AFindText,ARepText){raRegExp=new RegExp(AFindText,"g");return this.replace(raRegExp,ARepText);};DpUtil=function(){};DpUtil.isEmpty=function(str){return Ext.isEmpty(str);};DpUtil.requestJsonAjax=function(url,params,successFn,failFn,timeout)
{Ext.Ajax.request({url:url,jsonData:params,timeout:(Ext.isEmpty(timeout))?600000:timeout,success:function(response){var result=Ext.decode(response.responseText);if(result.success){successFn(result);}else{failFn(result);}},failure:function(response){var result=Ext.decode(response.responseText);failFn(result);}});};DpUtil.requestJsonAjaxSync=function(url,params,successFn,failFn,timeout)
{Ext.Ajax.request({url:url,async:false,jsonData:params,timeout:(Ext.isEmpty(timeout))?600000:timeout,success:function(response){var result=Ext.decode(response.responseText);if(result.success){successFn(result);}else{failFn(result);}},failure:function(response){var result=Ext.decode(response.responseText);failFn(result);}});};DpUtil.requestFileUploadAjax=function(url,form,successFn,failFn)
{Ext.Ajax.request({url:url,form:form,isUpload:true,success:function(form,action){var result=action.result;if(result.success){successFn(result);}else{failFn(result);}},failure:function(form,action){var result=action.result;failFn(result);}});};DpUtil.requestAjax=function(url,params,successFn,failFn)
{Ext.Ajax.request({url:url,params:params,success:function(response){var result=Ext.decode(response.responseText);if(result.success){successFn(result);}else{failFn(result);}},failure:function(response){var result=Ext.decode(response.responseText);failFn(result);}});};DpUtil.changeLongToDate=function(value){if(value!=null){var date=new Date(value);return date;}else{return null;}};DpUtil.renderDate=function(value){if(value!=null){return Ext.Date.format(new Date(value),'Y-m-d');}else{return null;}};DpUtil.changeDictionaryDescipToCode=function(store,descrip){var record=store.findRecord('codeDesc',descrip);if(!DpUtil.isEmpty(record)){return record.get('code');}else{return"";}};DpUtil.changeDictionaryCodeToDescrip=function(value,dataDictionary){if(value!=null&&dataDictionary!=null){for(var i=0;i<dataDictionary.length;i++){if(value==dataDictionary[i].code){return dataDictionary[i].codeDesc;}}}else{return null;}};DpUtil.changeBooleanToDescrip=function(value){if(value==false){return i18n('i18n.ChangeContactAffiliatedRelationView.no');}else if(value==true){return i18n('i18n.ChangeContactAffiliatedRelationView.yes');}
return null;};DpUtil.changeIntToDescrip=function(value){if(value==0){return i18n('i18n.ChangeContactAffiliatedRelationView.no');}else if(value==1){return i18n('i18n.ChangeContactAffiliatedRelationView.yes');}
return null;};DpUtil.changeNullToEmptyString=function(value){if(value==null){return'';}else{return value}};DpUtil.compareRecordFieldIsChange=function(oldValue,newValue){if(oldValue==newValue){return false;}else if(DpUtil.changeNullToEmptyString(oldValue)==DpUtil.changeNullToEmptyString(newValue)){return false;}else{return true;}};DpUtil.keyPress=function(e,getData,param,limit,successFn){var paramValue=e.target.value;if(Ext.isEmpty(paramValue)){return;}
if(paramValue.length<limit){return;}
if(e.getKey()==Ext.EventObject.ENTER&&paramValue!=""&&paramValue.length>=limit)
{var failureFn=function(json){DpUtil.showMessage(json.message);};getData(param,successFn,failureFn);}};DpUtil.showMessage=function(meaage){top.Ext.MessageBox.alert(i18n('i18n.PotentialCustManagerView.message'),meaage);};DpUtil.showConfimMessageBox=function(msg,message,yesFn,noFn){Ext.MessageBox.confirm(msg,message,function(e){if(e=='yes'){yesFn;}else{noFn;}});};DpUtil.createStore=function(storeId,model,fields,data){var store=Ext.data.StoreManager.lookup(storeId);if(Ext.isEmpty(data)){data=[];}
if(!Ext.isEmpty(model)){if(store===undefined){store=Ext.create('Ext.data.Store',{storeId:storeId,model:model,data:data});}}
if(!Ext.isEmpty(fields)){if(store===undefined){store=Ext.create('Ext.data.Store',{storeId:storeId,fields:fields,data:data});}}
return store;};DpUtil.changeLongToDate=function(value){if(value!=null){var date=new Date(value);return date;}else{return null;}};DpUtil.trimString=function(value){if(!Ext.isEmpty(value)){return value.trim();}
return value;};DpUtil.createDateCombo=function(fieldLabel,name,store,allowBlank,readOnly,labelWidth,width,blankText,changEvent){var fn=function(){};var chang=function(field,newValue){if(Ext.isEmpty(newValue)){field.setValue(null);}};var combo=Ext.create('Ext.form.ComboBox',{fieldLabel:fieldLabel,xtype:'combobox',queryMode:'local',forceSelection:true,displayField:'codeDesc',valueField:'code',allowBlank:allowBlank,readOnly:readOnly,name:name,labelWidth:labelWidth,width:width,store:store,blankText:blankText,listeners:{change:(changEvent==null)?fn:((changEvent==true)?chang:changEvent)}});return combo;};Ext.define('DpComboBox',{extend:'Ext.form.ComboBox',alias:['widget.dpcombobox','widget.dpcombo'],setReadOnly:function(readOnly){this.callParent(arguments);if(readOnly){this.addCls('readonly');}else{this.removeCls('readonly');}}});Ext.define('DpNumberField',{extend:'Ext.form.Number',alias:['widget.dpnumberfield','widget.dpnumber'],setReadOnly:function(readOnly){this.callParent(arguments);if(readOnly){this.addCls('readonly');}else{this.removeCls('readonly');}}});Ext.define('DpDateField',{extend:'Ext.form.Date',alias:['widget.dpdatefield','widget.dpdate'],setReadOnly:function(readOnly){this.callParent(arguments);if(readOnly){this.addCls('readonly');}else{this.removeCls('readonly');}}});Ext.define('DpTimeField',{extend:'Ext.form.Time',alias:'widget.dpdtimefield',setReadOnly:function(readOnly){this.callParent(arguments);if(readOnly){this.addCls('readonly');}else{this.removeCls('readonly');}}});DpUtil.getCurrentMonthDays=function(month){var currentMonth=month+1;switch(currentMonth){case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;break;case 2:return 28;break;default:return 30;break;　　}}
DpUtil.keyPress=function(e,getData,param,limit,successFn){var paramValue=e.target.value;if(Ext.isEmpty(paramValue)){return;}
if(paramValue.length<limit){return;}
if(e.getKey()==Ext.EventObject.ENTER&&paramValue!=""&&paramValue.length>=limit)
{var failureFn=function(json){DpUtil.showMessage(json.message);};getData(param,successFn,failureFn);}};DpUtil.checkDataInOneYear=function(objPre,objNext){var success=true;var message='';if((DpUtil.isEmpty(objPre.getValue())||DpUtil.isEmpty(objNext.getValue()))){var success=false;var message=i18n('i18n.DpUtil.d_notAllDateNull');}else if(!DpUtil.isEmpty(objPre.getValue())&&!DpUtil.isEmpty(objNext.getValue())){if(objPre.getValue()>objNext.getValue()){var success=false;var message=i18n('i18n.DpUtil.d_startNotBigger');}else{if(objNext.getValue().getFullYear()-objPre.getValue().getFullYear()<=1){if(objNext.getValue().getFullYear()-objPre.getValue().getFullYear()==1){var monthsNext=objNext.getValue().getMonth()-objPre.getValue().getMonth()+12;if(monthsNext<=12){if(monthsNext==12){if(objNext.getValue().getDate()>objPre.getValue().getDate()){var success=false;var message=i18n('i18n.DpUtil.d_intervalBigger');}}}else{var success=false;var message=i18n('i18n.DpUtil.d_intervalBigger');}}}else{var success=false;var message=i18n('i18n.DpUtil.d_intervalBigger');}}}
return{success:success,message:message};}
DpUtil.checkDataInOneYear1=function(year,month,day){var data=new Date();data.setYear(new Date().getYear()+year);data.setYear(new Date().getMonth()+month);data.setYear(new Date().getDay()+day);if((DpUtil.isEmpty(objPre.getValue())||DpUtil.isEmpty(objNext.getValue()))){var success=false;var message=i18n('i18n.DpUtil.d_notAllDateNull');}else if(!DpUtil.isEmpty(objPre.getValue())&&!DpUtil.isEmpty(objNext.getValue())){if(objPre.getValue()>objNext.getValue()){var success=false;var message=i18n('i18n.DpUtil.d_startNotBigger');}else{if(objNext.getValue().getFullYear()-objPre.getValue().getFullYear()<=1){var monthsNext=objNext.getValue().getMonth()-objPre.getValue().getMonth()+12;if(monthsNext>=0&&monthsNext<=12){if(monthsNext==12){if(objNext.getValue().getDate()>objPre.getValue().getDate()){var success=false;var message=i18n('i18n.DpUtil.d_intervalBigger');}}}}}}}
DpUtil.linkWayLimit=function(regText){var mobil=/^1\d{10}$/;var tel=/^\d{3}[\d\*-/]{4,17}$/;var idCard=/^([\d]{15}|[\d]{18}|[\d]{17}X)$/;var defaultValue=/^\d{11}$/;switch(regText){case'M':return mobil;break;case'T':return tel;break;case'I':return tel;break;default:return defaultValue;break;　　}}
DpUtil.defaultDept=function(form,fieldName){var dept=form.getForm().findField(fieldName);dept.store.add(Ext.create('CurrentUserDeptListModel',{'deptId':top.User.deptId,'deptName':top.User.deptName}));dept.setValue(top.User.deptId);}
Ext.define('DataDictionaryModel',{extend:'Ext.data.Model',fields:['code','codeDesc']});var DataDictionary={};DataDictionary.LINKMANTYPE=[{'code':'0','codeDesc':'财务联系人'},{'code':'1','codeDesc':'业务联系人'},{'code':'2','codeDesc':'发货联系人'},{'code':'3','codeDesc':'收货联系人'},{'code':'4','codeDesc':'协议联系人'}];Ext.define('CurrentUserDeptListModel',{extend:'Ext.data.Model',fields:['deptId','deptName']});var currentUserDeptList=[];Ext.define('CurrentUserDeptListStore',{extend:'Ext.data.Store',model:'CurrentUserDeptListModel',data:null});Ext.define('ChangeMemberDeptModel',{extend:'Ext.data.Model',fields:[{name:'memberId',type:'string'},{name:'memberNumber',type:'string'},{name:'fromDeptId',type:'string'},{name:'fromDeptName',type:'string'},{name:'toDeptId',type:'string'},{name:'toDeptName',type:'string'},{name:'reason',type:'string'},{name:'workFlowId',type:'number',defaultValue:-1}]});Ext.define('UpgradeConditionModel',{extend:'Ext.data.Model',fields:[{name:'dept'},{name:'statisticsTime'},{name:'custName'},{name:'contactName'},{name:'phone'},{name:'tel'},{name:'nowLevel'},{name:'targetLevel'}]});Ext.define('UpGradeListModel',{extend:'Ext.data.Model',fields:[{name:'id'},{name:'status'},{name:'belongDeptId'},{name:'belongdeptName'},{name:'custName'},{name:'contactName'},{name:'contactPhone'},{name:'contactTel'},{name:'currentlevel'},{name:'targetLevel'},{name:'remark'}]});Ext.define('PreferenceAddressModel',{extend:'Ext.data.Model',fields:[{name:'id',type:'string'},{name:'shuttleAddress',type:'string'},{name:'addressType',type:'string'},{name:'address',type:'string'},{name:'startTime',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'endTime',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'billRequest',type:'string'},{name:'hasStopCost',type:'boolean'},{name:'payType',type:'string'},{name:'isSendToFloor',type:'boolean'},{name:'otherNeed',type:'string'},{name:'createUser',type:'string'},{name:'createDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyUser',type:'string'},{name:'isMainAddress',type:'boolean'},{name:'',type:'string'}],validations:[{type:'presence',field:'addressType'},{type:'presence',field:'address'}]});Ext.define('AccountModel',{extend:'Ext.data.Model',fields:[{name:'id',type:'string'},{name:'bankId',type:'string'},{name:'bank',type:'string'},{name:'subBanknameId',type:'string'},{name:'subBankname',type:'string'},{name:'isdefaultaccount',type:'boolean'},{name:'bankAccount',type:'string'},{name:'countName',type:'string'},{name:'relation',type:'string'},{name:'bankProvinceId',type:'string'},{name:'bankProvinceName',type:'string'},{name:'bankCityId',type:'string'},{name:'bankCityName',type:'string'},{name:'accountNature',type:'string'},{name:'accountUse',type:'string'},{name:'linkManMobile',type:'string'},{name:'linkManPhone',type:'string'},{name:'financeLinkmanId',type:'string'},{name:'financeLinkman',type:'string'},{name:'createUser',type:'string'},{name:'createDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyUser',type:'string'}]});Ext.define('ShuttleAddressModel',{extend:'Ext.data.Model',fields:[{name:'id',type:'string'},{name:'addressType',type:'string'},{name:'address',type:'string'},{name:'province',type:'string'},{name:'provinceName',type:'string'},{name:'city',type:'string'},{name:'cityName',type:'string'},{name:'area',type:'string'},{name:'areaName',type:'string'},{name:'createUser',type:'string'},{name:'createDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyUser',type:'string'}],validations:[{type:'presence',field:'addressType'},{type:'presence',field:'address'},{type:'presence',field:'province'},{type:'presence',field:'city'},{type:'presence',field:'area'}]});Ext.define('ContactModel',{extend:'Ext.data.Model',fields:[{name:'id',type:'string'},{name:'number',type:'string'},{name:'name',type:'string'},{name:'idCard',type:'string'},{name:'linkmanType',type:'string'},{name:'isMainLinkMan',type:'boolean'},{name:'sex',type:'string'},{name:'telPhone',type:'string'},{name:'mobilePhone',type:'string'},{name:'duty',type:'string'},{name:'dutyDept',type:'string'},{name:'bornDate',type:'date',convert:DpUtil.changeLongToDate},{name:'gainave',type:'string'},{name:'decisionRight',type:'string'},{name:'nativePlace',type:'string'},{name:'personLove',type:'string'},{name:'folk',type:'string'},{name:'email',type:'string'},{name:'qqNumber',type:'string'},{name:'msn',type:'string'},{name:'ww',type:'string'},{name:'alid',type:'string'},{name:'onlineBusinessId',type:'string'},{name:'taobId',type:'string'},{name:'youshangId',type:'string'},{name:'linkManId',type:'string'},{name:'createUser',type:'string'},{name:'createDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyUser',type:'string'},{name:'createSource',type:'int',defaultValue:0}],validations:[{type:'presence',field:'number'},{type:'presence',field:'name'},{type:'presence',field:'linkmanType'},{type:'presence',field:'sex'}]});Ext.define('MemberCustomerModel',{extend:'Ext.data.Model',fields:[{name:'id',type:'string'},{name:'custId',type:'string'},{name:'contactId',type:'string'},{name:'custNumber',type:'string'},{name:'deptId',type:'string'},{name:'deptName',type:'string'},{name:'degree',type:'string'},{name:'custName',type:'string'},{name:'tradeId',type:'string'},{name:'custType',type:'string'},{name:'taxregNumber',type:'string'},{name:'companyProperty',type:'string'},{name:'custNature',type:'string'},{name:'provinceId',type:'string'},{name:'province',type:'string'},{name:'cityId',type:'string'},{name:'city',type:'string'},{name:'registAddress',type:'string'},{name:'isSpecial',type:'boolean'},{name:'isRedeempoints',type:'boolean'},{name:'isImportCustor',type:'boolean'},{name:'custPotentialType',type:'string'},{name:'isAcceptMarket',type:'boolean'},{name:'brandWorth',type:'string'},{name:'channelSource',type:'string'},{name:'channel',type:'string'},{name:'preferenceService',type:'string'},{name:'companyScop',type:'string'},{name:'lastYearProfit',type:'number'},{name:'lastYearIncome',type:'number'},{name:'isFocusPay',type:'boolean'},{name:'focusDeptId',type:'string'},{name:'focusDeptName',type:'string'},{name:'billTitle',type:'string'},{name:'isParentCompany',type:'boolean'},{name:'parentCompanyId',type:'string'},{name:'parentNumber',type:'string'},{name:'registerFund',type:'number'},{name:'procRedit',type:'number'},{name:'recommendCust',type:'string'},{name:'remark',type:'string'},{name:'createUser',type:'string'},{name:'createDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyDate',type:'date',convert:DpUtil.changeLongToDate,defaultValue:new Date()},{name:'modifyUser',type:'string'},{name:'surplusMonthlyStatementMoney',type:'number'}]});Ext.define('WayBillInfoModel',{extend:'Ext.data.Model',fields:[{name:'id'},{name:'wayBillNumber'},{name:'money',type:'number'},{name:'ratio',type:'number'}]});Ext.define('ApproveDataModel',{extend:'Ext.data.Model',fields:[{name:'id',type:'string'},{name:'className',type:'string'},{name:'classId',type:'string'},{name:'fieldName',type:'string'},{name:'newValue',type:'string'},{name:'oldValue',type:'string'},{name:'workFlowId',type:'string'},{name:'handleType',type:'int'}]});Ext.define('QualificationViewModel',{extend:'Ext.data.Model',fields:[{name:'id'},{name:'wayBillList'},{name:'totalMoney',type:'number'},{name:'qualified',type:'boolean'},{name:'custLevel'}]});Ext.define('ImplementMemberViewModel',{extend:'Ext.data.Model',fields:[{name:'id'},{name:'qualificationView'},{name:'member'}]});Ext.define('BankModel',{extend:'Ext.data.Model',fields:['id','name','ID','NAME']});Ext.define('BankProvinceStore',{extend:'Ext.data.Store',model:'BankModel',autoLoad:true,proxy:{type:'ajax',url:'searchBankProvince.action',actionMethods:'POST',reader:{type:'json',root:'list'}}});Ext.define('BankCityStore',{extend:'Ext.data.Store',model:'BankModel',proxy:{type:'ajax',url:'searchBankCityByProvinceId.action',actionMethods:'POST',reader:{type:'json',root:'list'}}});Ext.define('BankNameStore',{extend:'Ext.data.Store',model:'BankModel',proxy:{type:'ajax',url:'searchBankName.action',actionMethods:'POST',reader:{type:'json',root:'list'}}});Ext.define('ImplementMemberViewStore',{extend:'Ext.data.Store',model:'ImplementMemberViewModel',proxy:{type:'ajax',api:{read:''},actionMethods:'POST',reader:{type:'json',root:'implementMemberView'}}});Ext.define('MemberCustomerStore',{extend:'Ext.data.Store',model:'MemberCustomerModel',pageSize:20,proxy:{type:'ajax',api:{read:''},actionMethods:'POST',reader:{type:'json',root:'',totalProperty:'totalCount'}}});Ext.define('WayBillInfoStore',{extend:'Ext.data.Store',model:'WayBillInfoModel',data:[]});Ext.define('FocusDeptStoreModel',{extend:'Ext.data.Model',fields:['id','deptName']});Ext.define('FocusDeptStore',{extend:'Ext.data.Store',model:'FocusDeptStoreModel',data:[]});Ext.define('SpecialDeptStore',{extend:'Ext.data.Store',model:'FocusDeptStoreModel',data:[]});Ext.define('MemberCustBasicData',{memberGradeStore:null,tradeStore:null,customerNatureStore:null,compNatureStore:null,customerTypeStore:null,cargoPotentialStore:null,custPotentialStore:null,firmSizeStore:null,creditGradeStore:null,addressTypeStore:null,logistDeciStore:null,payWayStore:null,preferenceChannelStore:null,preferenceServiceStore:null,billRequireStore:null,accountNatureStore:null,accountUseStore:null,genderStore:null,linkmanTypeData:DataDictionary.LINKMANTYPE,linkWayStore:null,currentUserDeptListStore:null,specialDeptStore:null,focusDeptStore:null,wayBillInfoStore:null,targetGradDownStore:null,targetGradUpStore:null,nowGradUpStore:null,marketInfoStore:null,getMemberGradeStore:function(){if(this.memberGradeStore==null){this.memberGradeStore=getDataDictionaryByName(DataDictionary,'MEMBER_GRADE');}
return this.memberGradeStore;},getTradeStore:function(){if(this.tradeStore==null){this.tradeStore=getDataDictionaryByName(DataDictionary,'TRADE');}
return this.tradeStore;},getCustomerNatureStore:function(){if(this.customerNatureStore==null){this.customerNatureStore=getDataDictionaryByName(DataDictionary,'CUSTOMER_NATURE');}
return this.customerNatureStore;},getCompNatureStore:function(){if(this.compNatureStore==null){this.compNatureStore=getDataDictionaryByName(DataDictionary,'COMP_NATURE');}
return this.compNatureStore;},getCustomerTypeStore:function(){if(this.customerTypeStore==null){this.customerTypeStore=getDataDictionaryByName(DataDictionary,'CUSTOMER_TYPE');}
return this.customerTypeStore;},getCargoPotentialStore:function(){if(this.cargoPotentialStore==null){this.cargoPotentialStore=getDataDictionaryByName(DataDictionary,'CARGO_POTENTIAL');}
return this.cargoPotentialStore;},getCustPotentialStore:function(){if(this.custPotentialStore==null){this.custPotentialStore=getDataDictionaryByName(DataDictionary,'CUST_POTENTIAL');}
return this.custPotentialStore;},getFirmSizeStore:function(){if(this.firmSizeStore==null){this.firmSizeStore=getDataDictionaryByName(DataDictionary,'FIRM_SIZE');}
return this.firmSizeStore;},getCreditGradeStore:function(){if(this.creditGradeStore==null){this.creditGradeStore=getDataDictionaryByName(DataDictionary,'CREDIT_GRADE');}
return this.creditGradeStore;},getAddressTypeStore:function(){if(this.addressTypeStore==null){this.addressTypeStore=getDataDictionaryByName(DataDictionary,'ADDRESS_TYPE');}
return this.addressTypeStore;},getLogistDeciStore:function(){if(this.logistDeciStore==null){this.logistDeciStore=getDataDictionaryByName(DataDictionary,'LOGIST_DECI');}
return this.logistDeciStore;},getPayWayStore:function(){if(this.payWayStore==null){this.payWayStore=getDataDictionaryByName(DataDictionary,'PAY_WAY');}
return this.payWayStore;},getPreferenceChannelStore:function(){if(this.preferenceChannelStore==null){this.preferenceChannelStore=getDataDictionaryByName(DataDictionary,'PREFERENCE_CHANNEL');}
return this.preferenceChannelStore;},getPreferenceServiceStore:function(){if(this.preferenceServiceStore==null){this.preferenceServiceStore=getDataDictionaryByName(DataDictionary,'PREFERENCE_SERVICE');}
return this.preferenceServiceStore;},getBillRequireStore:function(){if(this.billRequireStore==null){this.billRequireStore=getDataDictionaryByName(DataDictionary,'BILL_REQUIRE');}
return this.billRequireStore;},getAccountNatureStore:function(){if(this.accountNatureStore==null){this.accountNatureStore=getDataDictionaryByName(DataDictionary,'ACCOUNT_NATURE');}
return this.accountNatureStore;},getAccountUseStore:function(){if(this.accountUseStore==null){this.accountUseStore=getDataDictionaryByName(DataDictionary,'ACCOUNT_USE');}
return this.accountUseStore;},getGenderStore:function(){if(this.genderStore==null){this.genderStore=getDataDictionaryByName(DataDictionary,'GENDER');}
return this.genderStore;},initSelfDefineLinkmanType:function(dictionary){if(dictionary!=null){dictionary.LINKMANTYPE=this.linkmanTypeData;}},getLinkWayStore:function(){if(this.linkWayStore==null){this.linkWayStore=Ext.create('Ext.data.Store',{fields:['linkValue','linkDesc'],data:[{linkValue:'mobile',linkDesc:'手机号码'},{linkValue:'tel',linkDesc:'固定电话'}]});}
return this.linkWayStore;},getCurrentUserDeptListStore:function(){if(this.currentUserDeptListStore==null){this.currentUserDeptListStore=Ext.create('CurrentUserDeptListStore',{data:currentUserDeptList});}
return this.currentUserDeptListStore;},getWayBillInfoStore:function(){if(this.wayBillInfoStore==null){this.wayBillInfoStore=Ext.create('WayBillInfoStore');}
return this.wayBillInfoStore;},getDictionary:function(params,successFn,failFn){var dictionaryUrl='../common/queryAllDataDictionaryByKeys.action';DpUtil.requestJsonAjax(dictionaryUrl,params,successFn,failFn);},getDeptList:function(params,successFn,failFn){var deptListUrl='../common/acquireCurrentUserDeptList.action';DpUtil.requestJsonAjax(deptListUrl,params,successFn,failFn);},getNowGradUpStore:function(){if(this.nowGradUpStore==null){this.nowGradUpStore=getDataDictionaryByName(DataDictionary,'NOW_GRAD_UP');}
return this.nowGradUpStore;},getTargetGradUpStore:function(){if(this.targetGradUpStore==null){this.targetGradUpStore=getDataDictionaryByName(DataDictionary,'TARGET_GRAD_UP');}
return this.targetGradUpStore;},getTargetGradDownStore:function(){if(this.targetGradDownStore==null){this.targetGradDownStore=getDataDictionaryByName(DataDictionary,'TARGET_GRAD_DOWN');}
return this.targetGradDownStore;},getMarketInfoStore:function(){if(this.marketInfoStore==null){this.marketInfoStore=getDataDictionaryByName(DataDictionary,'MARKETINFO');}
return this.marketInfoStore;},getFocusDeptStore:function(){if(this.focusDeptStore==null){this.focusDeptStore=Ext.create('FocusDeptStore');}
return this.focusDeptStore;},getSpecialDeptStore:function(){if(this.specialDeptStore==null){this.specialDeptStore=Ext.create('SpecialDeptStore');}
return this.specialDeptStore;},getDeptByName:function(params,successFn,failFn){DpUtil.requestJsonAjax('../organization/acquireDeptByName.action',params,successFn,failFn);},bankProvinceStore:null,getBankProvinceStore:function(){if(this.bankProvinceStore==null){this.bankProvinceStore=Ext.create('BankProvinceStore');}
return this.bankProvinceStore;},bankCityStore:null,getBankCityStore:function(){if(this.bankCityStore==null){this.bankCityStore=Ext.create('BankCityStore');}
return this.bankCityStore;},bankNameStore:null,getBankNameStore:function(params,successFn,failFn){if(this.bankNameStore==null){this.bankNameStore=Ext.create('BankNameStore');}
return this.bankNameStore;}});
Ext.define('MemberIntegralModel',{extend:'Ext.data.Model',fields:[{name:'member',defaultValue:null},{name:'currentUsableScore',type:'number'},{name:'currentToUsesScore',type:'number'},{name:'currentTotalScore',type:'number'},{name:'totalScore',type:'number'},{name:'totalToUsesScore',type:'number'},{name:'lastDateScore',type:'date'}]});Ext.define('FileInfoModel',{extend:'Ext.data.Model',fields:[{name:'sourceId',type:'string'},{name:'sourceType',type:'string'},{name:'fileName',type:'string'},{name:'fileType',type:'string'},{name:'savePath',type:'string'},{name:'fileSize',type:'number'}]});Ext.define('ContactStore',{extend:'Ext.data.Store',model:'ContactModel',proxy:{type:'memory'}});Ext.define('FileInfoStore',{extend:'Ext.data.Store',model:'FileInfoModel',proxy:{type:'memory'}});Ext.define('ChangeContactAffiliatedRelationData',{extend:'MemberCustBasicData',contactLinkStore:null,contactCustStore:null,fileInfoStore:null,getContactLinkStore:function(){if(this.contactLinkStore==null){this.contactLinkStore=Ext.create('ContactStore');}
return this.contactLinkStore;},getContactCustStore:function(){if(this.contactCustStore==null){this.contactCustStore=Ext.create('ContactStore');}
return this.contactCustStore;},getFileInfoStore:function(){if(this.fileInfoStore==null){this.fileInfoStore=Ext.create('FileInfoStore');}
return this.fileInfoStore;},searchMember:function(params,successFn,failFn){DpUtil.requestJsonAjax('searchMember.action',params,successFn,failFn);},mergeContact:function(params,successFn,failFn){DpUtil.requestJsonAjax('mergeContact.action',params,successFn,failFn);},downLoadAttachment:function(params,successFn,failFn){DpUtil.requestJsonAjax('../common/downLoad.action',params,successFn,failFn);}});
var recordExchangeRuleManagerDataControl=new ChangeContactAffiliatedRelationData();Ext.onReady(function(){var params=['TRADE','CUSTOMER_NATURE','CUSTOMER_TYPE','MEMBER_GRADE'];initDataDictionary(params);Ext.create('Ext.container.Viewport',{layout:'fit',items:[Ext.create('ChangeContactAffiliatedRelation',{'recordExchangeRuleManagerData':recordExchangeRuleManagerDataControl})]});});var FromMemberIntegral={};var ToMemberIntegral={};Ext.define('ChangeContactAffiliatedRelation',{extend:'BasicPanel',layout:{type:'vbox',align:'stretch'},nowAffiliatedCust:null,nowRecord:null,targetAffiliatedCust:null,targetRecord:null,fileInfo:null,fileInfoList:null,recordExchangeRuleManagerData:null,initComponent:function(){var me=this;if(me.nowRecord==null){me.nowRecord=Ext.create('MemberIntegralModel')}else{me.nowRecord=Ext.create('MemberIntegralModel',me.nowRecord)}
if(me.targetRecord==null){me.targetRecord=Ext.create('MemberIntegralModel')}else{me.targetRecord=Ext.create('MemberIntegralModel',me.targetRecord)}
me.nowAffiliatedCust=Ext.create('ContactAffiliatedCustPanel',{'title':i18n('i18n.ChangeContactAffiliatedRelationView.nowAffiliatedCust'),'record':me.nowRecord,'recordExchangeRuleManagerData':me.recordExchangeRuleManagerData,'numType':'CONTACT'});me.targetAffiliatedCust=Ext.create('ContactAffiliatedCustPanel',{'title':i18n('i18n.ChangeContactAffiliatedRelationView.targetAffiliatedCust'),'record':me.targetRecord,'recordExchangeRuleManagerData':me.recordExchangeRuleManagerData,'numType':'CUSTOMER'});me.fileInfo=Ext.create('ContractAttachment',{'width':800,'operateType':'DELAY','recordExchangeRuleManagerData':me.recordExchangeRuleManagerData,'attachData':me.getAttachData()});me.items=me.getItems();this.callParent();},getItems:function(){var me=this;return[{xtype:'basicpanel',height:300,layout:{type:'hbox',align:'stretch'},defaultType:'titleformpanel',items:[me.nowAffiliatedCust,{xtype:'basicpanel',width:10},me.targetAffiliatedCust]},{height:10,border:false},{xtype:'basicpanel',layout:null,items:[me.fileInfo]},{xtype:'fieldcontainer',layout:'column',items:[{xtype:'displayfield',value:'<span style="color:red;">'+i18n('i18n.ChangeContactAffiliatedRelationView.fileSize')+'</span>',width:300}]},{xtype:'fieldcontainer',layout:'column',items:[{xtype:'button',text:i18n('i18n.ChangeContactAffiliatedRelationView.merge'),id:'merge_contact_id',disabled:false,width:80,margin:'0 0 0 708',scope:me,handler:me.mergeEvent}]}]},getAttachData:function(){var me=this;var attachData=[];if(me.contractView!=null){attachData=me.fileInfoList;}
return attachData;},mergeEvent:function(button){var me=this;var params={};params=me.collectMergeDate(params);if(me.checkIsMainContact(params.contactVary)){MessageUtil.showMessage(i18n('i18n.ChangeContactAffiliatedRelationView.m_isMainContact'));return;}
if(Ext.isEmpty(FromMemberIntegral)||Ext.isEmpty(ToMemberIntegral)){MessageUtil.showMessage(i18n('i18n.ChangeContactAffiliatedRelationView.reSearch'));return;}
if(Ext.isEmpty(params.fileInfoList)){MessageUtil.showMessage(i18n('i18n.ChangeContactAffiliatedRelationView.m_uploadFile'));return;}
button.setDisabled(true);var mergeFail=function(result){button.setDisabled(false);MessageUtil.showMessage(i18n('i18n.ChangeContactAffiliatedRelationView.mergeFail')+result.message);}
var mergeSuccess=function(result){MessageUtil.showMessage(i18n('i18n.ChangeContactAffiliatedRelationView.operateSuccess')+result.workFlowNum);FromMemberIntegral={};ToMemberIntegral={};}
me.recordExchangeRuleManagerData.mergeContact(params,mergeSuccess,mergeFail);},collectMergeDate:function(params){var me=this;var fileInfoList=new Array();me.fileInfo.collectAlterAttachData(fileInfoList);var contactVary={};contactVary.contactNumber=me.nowAffiliatedCust.down('textfield').getValue();contactVary.custNum=me.targetAffiliatedCust.down('textfield').getValue();contactVary.fromMemberIntegral=FromMemberIntegral;contactVary.toMemberIntegral=ToMemberIntegral;params.fileInfoList=fileInfoList;params.contactVary=contactVary;return params;},checkIsMainContact:function(contactVary){var me=this;var mainContact=contactVary.fromMemberIntegral.member.mainContact;if(contactVary.contactNumber==mainContact.number){return true;}else{return false;}}});Ext.define('ContactAffiliatedCustPanel',{extend:'Ext.panel.Panel',cls:'normalpanel',bodyStyle:'padding:5px',recordExchangeRuleManagerData:null,numType:'CONTACT',record:null,layout:{type:'vbox',align:'stretch'},height:250,width:395,initComponent:function(){var me=this;me.items=me.getItems();this.callParent();me.loadContactAffiliatedCustData(me.record);},getItems:function(){var me=this;var numTextfield={};var store=Ext.create('ContactStore');if('CONTACT'==me.numType){numTextfield={xtype:'textfield',fieldLabel:i18n('i18n.Integral.contactNumber'),labelWidth:75,maxLength:40,maxLengthText:i18n('i18n.ManualRewardIntegralEditView.m_maxLength',40),name:'contactNum',width:200};store=me.recordExchangeRuleManagerData.getContactLinkStore();}else if('CUSTOMER'==me.numType){numTextfield={xtype:'textfield',fieldLabel:i18n('i18n.MemberCustEditView.custNo'),labelWidth:75,maxLength:40,maxLengthText:i18n('i18n.ManualRewardIntegralEditView.m_maxLength',40),name:'custNum',width:200};store=me.recordExchangeRuleManagerData.getContactCustStore();}
return[{xtype:'notitlebgroundformpanel',layout:'column',items:[numTextfield,{xtype:'button',text:i18n('i18n.PotentialCustManagerView.search'),width:60,margin:'0 0 0 10',scope:me,handler:me.searchMember}]},{xtype:'basicformpanel',margin:'5 0 5 0',layout:{type:'table',columns:2},defaultType:'textfield',defaults:{labelAlign:'right',labelWidth:75,width:195,readOnly:true},items:[{fieldLabel:i18n('i18n.MemberCustEditView.custNo'),name:'custNumber',labelWidth:55,width:183},{fieldLabel:i18n('i18n.PotentialCustManagerView.customerName'),name:'custName'},{fieldLabel:i18n('i18n.ScatterCustManagerView.custAttribute'),xtype:'dpcombo',name:'custNature',queryMode:'local',forceSelection:true,displayField:'codeDesc',valueField:'code',labelWidth:55,width:183,store:me.recordExchangeRuleManagerData.getCustomerNatureStore()},{fieldLabel:i18n('i18n.ScatterCustManagerView.taxId'),name:'taxregNumber'},{fieldLabel:i18n('i18n.MemberCustEditView.custLevel'),labelWidth:55,width:183,xtype:'dpcombo',name:'degree',queryMode:'local',forceSelection:true,displayField:'codeDesc',valueField:'code',store:me.recordExchangeRuleManagerData.getMemberGradeStore()},{fieldLabel:i18n('i18n.AffiliatedRel.custTotalInteg'),name:'totalScore'},{fieldLabel:i18n('i18n.MemberCustEditView.custType'),labelWidth:55,width:183,xtype:'dpcombo',name:'custType',queryMode:'local',forceSelection:true,displayField:'codeDesc',valueField:'code',store:me.recordExchangeRuleManagerData.getCustomerTypeStore()},{fieldLabel:i18n('i18n.MemberCustEditView.custIndustry'),xtype:'dpcombo',queryMode:'local',forceSelection:true,displayField:'codeDesc',valueField:'code',name:'tradeId',blankText:i18n('i18n.ChangeContactAffiliatedRelationView.regex_tradeId'),store:me.recordExchangeRuleManagerData.getTradeStore()},{xtype:'hiddenfield',fieldLabel:i18n('i18n.ChangeContactAffiliatedRelationView.custId'),name:'custId',hidden:true}]},{xtype:'popupgridpanel',height:100,store:store,columns:[{header:i18n('i18n.Integral.contatct'),flex:1,dataIndex:'name'},{header:i18n('i18n.MemberCustEditView.mobileNo'),flex:1,dataIndex:'mobilePhone'},{header:i18n('i18n.MemberCustEditView.telephoneNo'),flex:1,dataIndex:'telPhone'},{header:i18n('i18n.MemberCustEditView.isMainContact'),flex:1,dataIndex:'isMainLinkMan',renderer:function(value){if(value){return i18n('i18n.ChangeContactAffiliatedRelationView.yes');}else{return i18n('i18n.ChangeContactAffiliatedRelationView.no');}}}]}];},searchMember:function(){var me=this;if(!me.down('textfield').isValid()){MessageUtil.showMessage(i18n('i18n.ChangeContactAffiliatedRelationView.m_fillRightCondition'));return;}
var params={};if('CONTACT'==me.numType){params.contactNum=me.down('textfield').getValue();}else if('CUSTOMER'==me.numType){params.custNum=me.down('textfield').getValue();}
var seachFail=function(result){MessageUtil.showMessage(i18n('i18n.PotentialCustManagerView.searchFailed')+result.message)
me.unLoadContactAffiliatedCustData();}
var seachSuccess=function(result){var memberIntegral=result.memberIntegral;if('CONTACT'==me.numType){if(Ext.isEmpty(memberIntegral.member)){MessageUtil.showMessage(i18n('i18n.ChangeContactAffiliatedRelationView.m_reSearch'));return;}
if(top.User.deptId!=memberIntegral.member.deptId){MessageUtil.showMessage(i18n('i18n.ChangeContactAffiliatedRelationView.m_notMainDept'));return;}else{Ext.getCmp('merge_contact_id').setDisabled(false);}
FromMemberIntegral=memberIntegral;}else if('CUSTOMER'==me.numType){ToMemberIntegral=memberIntegral;}
me.loadContactAffiliatedCustData(Ext.create('MemberIntegralModel',memberIntegral));}
me.recordExchangeRuleManagerData.searchMember(params,seachSuccess,seachFail);},loadContactAffiliatedCustData:function(memberIntegralRecord){var me=this;if(memberIntegralRecord!=null){var member=memberIntegralRecord.get('member');var form=me.down('form');form.loadRecord(Ext.create('MemberCustomerModel',member));form.getForm().findField('totalScore').setValue(memberIntegralRecord.get('totalScore'));if(member!=null){var contactList=member.contactList;me.down('grid').store.loadData(contactList);}}},unLoadContactAffiliatedCustData:function(){var me=this;var form=me.down('form');form.getForm().reset();me.down('grid').store.removeAll();if('CONTACT'==me.numType){FromMemberIntegral={};}else if('CUSTOMER'==me.numType){ToMemberIntegral={};}}});Ext.define('ContractAttachment',{extend:'Ext.panel.Panel',border:false,recordExchangeRuleManagerData:null,attachData:null,operateType:'DELAY',initComponent:function(){var me=this;me.items=me.getItems();this.callParent();},getItems:function(){var me=this;return[{xtype:'toppanel',items:[{xtype:'titlepanel',flex:1,items:[{xtype:'displayfield',value:i18n('i18n.ChangeContactAffiliatedRelationView.changeContact')}]},{xtype:'btnpanel',items:[{xtype:'button',id:'fileUpLoadButton',text:i18n('i18n.ChangeContactAffiliatedRelationView.uploadFile'),scope:me,handler:me.showUploadAttachWin},{xtype:'button',text:'删除',scope:me,handler:function(){var grid=me.down('grid');var store=grid.store;selection=grid.getSelectionModel().getSelection();for(var i=0;i<selection.length;i++){if(!Ext.isEmpty(selection[i].get('id'))){MessageUtil.showMessage(i18n('i18n.contractEditView.cannotDel',selection[i].get('fileName')));return;}
store.remove(selection[i]);}}}]}]},{xtype:'popupgridpanel',flex:1,store:me.recordExchangeRuleManagerData.getFileInfoStore(),columns:[new Ext.grid.RowNumberer(),{header:i18n('i18n.ChangeContactAffiliatedRelationView.fileName'),flex:1,dataIndex:'fileName'},{header:i18n('i18n.ChangeContactAffiliatedRelationView.savePath'),dataIndex:'savePath',hidden:true}]}];},showUploadAttachWin:function(){var me=this;Ext.create('UploadAttachmentWin',{'operateType':me.operateType,'parent':me,'contractData':me.contractData}).show();},addAttachData:function(attachData){var me=this;me.down('grid').store.add(attachData);},loadAttachData:function(attachData){var me=this;me.down('grid').store.loadData(attachData);},collectAlterAttachData:function(alterAddAttachList){var me=this;var addAttachRecords=me.recordExchangeRuleManagerData.getFileInfoStore().getNewRecords();for(var i=0;i<addAttachRecords.length;i++){alterAddAttachList.push(addAttachRecords[i].data);}}});Ext.define('UploadAttachmentWin',{extend:'PopWindow',title:i18n('i18n.PotentialCustManagerView.messageTip'),layout:{type:'vbox',align:'stretch'},operateType:null,recordExchangeRuleManagerData:null,width:395,height:150,parent:null,attachmentForm:null,initComponent:function(){var me=this;me.items=[{xtype:'titlepanel',items:[{xtype:'displayfield',value:i18n('i18n.ChangeContactAffiliatedRelationView.title_uploadFile'),width:100}]},{xtype:'basicformpanel',flex:1,layout:{type:'hbox'},defaults:{margins:'0 5 0 0'},items:[{xtype:'filefield',name:'file',fieldLabel:i18n('i18n.ChangeContactAffiliatedRelationView.title_uploadFile'),labelWidth:60,allowBlank:false,buttonText:i18n('i18n.ChangeContactAffiliatedRelationView.view'),flex:3},{text:i18n('i18n.ChangeContactAffiliatedRelationView.sourceType'),name:'type',xtype:'hiddenfield',value:'CHANGECONTACT'}]}];me.fbar=me.getFbar();this.callParent();},getFbar:function(){var me=this;return[{text:i18n('i18n.ChangeContactAffiliatedRelationView.button_upload'),xtype:'button',scope:me,handler:me.uploadFile},{text:i18n('i18n.PotentialCustEditView.cancel'),xtype:'button',handler:function(){me.close();}}];},uploadFile:function(){var me=this;var form=me.down('form');if(!form.getForm().isValid()){MessageUtil.showMessage(i18n('i18n.ContractEditView.m_uploadFile'));return;}
form.submit({url:'../common/fileUpload.action',waitMsg:i18n('i18n.ChangeContactAffiliatedRelationView.uploading'),success:function(form,response){var result=response.result;if(result.success){var fileInfo=result.fileInfoList[0];MessageUtil.showInfoMes(i18n('i18n.ChangeContactAffiliatedRelationView.file')+fileInfo.fileName+i18n('i18n.ChangeContactAffiliatedRelationView.uploadSeccess'));me.parent.addAttachData(fileInfo);me.close();}else{MessageUtil.showErrorMes(result.message);}},failure:function(form,response){var result=response.result;if(!result.success){MessageUtil.showErrorMes(result.message);}}});}});