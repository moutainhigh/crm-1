package com.deppon.interfaces.esb;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;

/**
 * This class was generated by Apache CXF 2.4.2
 * 2012-07-11T15:45:31.750+08:00
 * Generated source version: 2.4.2
 * 
 */
@WebService(targetNamespace = "http://workflow.interfaces.module.crm.deppon.com/", name = "IESBWorkFlowResultService")
@XmlSeeAlso({ObjectFactory.class})
@SOAPBinding(parameterStyle = SOAPBinding.ParameterStyle.BARE)
public interface IESBWorkFlowResultService {

    @WebResult(name = "returnMuchRecompenseResultResponse", targetNamespace = "http://workflow.interfaces.module.crm.deppon.com/", partName = "returnMuchRecompenseResultResponse")
    @WebMethod
    public boolean returnMuchRecompenseResult(
        @WebParam(partName = "muchResultInfo", name = "muchResultInfo", targetNamespace = "http://workflow.interfaces.module.crm.deppon.com/")
        WorkflowApplyResultInfo muchResultInfo
    ) throws CrmBusinessException;

    @WebResult(name = "returnContractApplyResultResponse", targetNamespace = "http://workflow.interfaces.module.crm.deppon.com/", partName = "returnContractApplyResultResponse")
    @WebMethod
    public boolean returnContractApplyResult(
        @WebParam(partName = "ContractResultInfo", name = "ContractResultInfo", targetNamespace = "http://workflow.interfaces.module.crm.deppon.com/")
        WorkflowApplyResultInfo contractResultInfo
    ) throws CrmBusinessException;

    @WebResult(name = "returnNormalRecompenseResultResponse", targetNamespace = "http://workflow.interfaces.module.crm.deppon.com/", partName = "returnNormalRecompenseResultResponse")
    @WebMethod
    public boolean returnNormalRecompenseResult(
        @WebParam(partName = "normalResultInfo", name = "normalResultInfo", targetNamespace = "http://workflow.interfaces.module.crm.deppon.com/")
        WorkflowApplyResultInfo normalResultInfo
    ) throws CrmBusinessException;
}
