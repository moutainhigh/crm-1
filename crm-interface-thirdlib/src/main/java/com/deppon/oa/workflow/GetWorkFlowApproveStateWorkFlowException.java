
package com.deppon.oa.workflow;

import javax.xml.ws.WebFault;


/**
 * This class was generated by Apache CXF 2.4.2
 * 2012-08-30T19:43:34.687+08:00
 * Generated source version: 2.4.2
 */

@WebFault(name = "getWorkFlowApproveState_WorkFlowException", targetNamespace = "http://www.primeton.com/QueryWorkFlowStateService")
public class GetWorkFlowApproveStateWorkFlowException extends Exception {
    
    private com.deppon.oa.workflow.WorkFlowException getWorkFlowApproveStateWorkFlowException;

    public GetWorkFlowApproveStateWorkFlowException() {
        super();
    }
    
    public GetWorkFlowApproveStateWorkFlowException(String message) {
        super(message);
    }
    
    public GetWorkFlowApproveStateWorkFlowException(String message, Throwable cause) {
        super(message, cause);
    }

    public GetWorkFlowApproveStateWorkFlowException(String message, com.deppon.oa.workflow.WorkFlowException getWorkFlowApproveStateWorkFlowException) {
        super(message);
        this.getWorkFlowApproveStateWorkFlowException = getWorkFlowApproveStateWorkFlowException;
    }

    public GetWorkFlowApproveStateWorkFlowException(String message, com.deppon.oa.workflow.WorkFlowException getWorkFlowApproveStateWorkFlowException, Throwable cause) {
        super(message, cause);
        this.getWorkFlowApproveStateWorkFlowException = getWorkFlowApproveStateWorkFlowException;
    }

    public com.deppon.oa.workflow.WorkFlowException getFaultInfo() {
        return this.getWorkFlowApproveStateWorkFlowException;
    }
}
