
package com.deppon.oa.workflow;

import javax.xml.ws.WebFault;


/**
 * This class was generated by Apache CXF 2.4.2
 * 2012-05-07T21:07:23.076+08:00
 * Generated source version: 2.4.2
 */

@WebFault(name = "createWorkFlow_WorkFlowException", targetNamespace = "http://www.primeton.com/WorkFlowService")
public class CreateWorkFlowWorkFlowException extends Exception {
    
    private com.deppon.oa.workflow.WorkFlowException createWorkFlowWorkFlowException;

    public CreateWorkFlowWorkFlowException() {
        super();
    }
    
    public CreateWorkFlowWorkFlowException(String message) {
        super(message);
    }
    
    public CreateWorkFlowWorkFlowException(String message, Throwable cause) {
        super(message, cause);
    }

    public CreateWorkFlowWorkFlowException(String message, com.deppon.oa.workflow.WorkFlowException createWorkFlowWorkFlowException) {
        super(message);
        this.createWorkFlowWorkFlowException = createWorkFlowWorkFlowException;
    }

    public CreateWorkFlowWorkFlowException(String message, com.deppon.oa.workflow.WorkFlowException createWorkFlowWorkFlowException, Throwable cause) {
        super(message, cause);
        this.createWorkFlowWorkFlowException = createWorkFlowWorkFlowException;
    }

    public com.deppon.oa.workflow.WorkFlowException getFaultInfo() {
        return this.createWorkFlowWorkFlowException;
    }
}
