package com.deppon.oa.task;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 2.4.2
 * 2012-05-21T14:33:14.540+08:00
 * Generated source version: 2.4.2
 * 
 */
@WebService(targetNamespace = "http://www.primeton.com/TaskService", name = "TaskService")
@XmlSeeAlso({ObjectFactory.class})
public interface TaskService {

    @WebResult(name = "out1", targetNamespace = "http://www.primeton.com/TaskService")
    @RequestWrapper(localName = "sendReadTask", targetNamespace = "http://www.primeton.com/TaskService", className = "com.deppon.oa.task.SendReadTask")
    @WebMethod
    @ResponseWrapper(localName = "sendReadTaskResponse", targetNamespace = "http://www.primeton.com/TaskService", className = "com.deppon.oa.task.SendReadTaskResponse")
    public java.lang.String sendReadTask(
        @WebParam(name = "in0", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.String in0,
        @WebParam(name = "in1", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.String in1,
        @WebParam(name = "in2", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.Integer in2,
        @WebParam(name = "in3", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.Integer in3
    );

    @WebResult(name = "out1", targetNamespace = "http://www.primeton.com/TaskService")
    @RequestWrapper(localName = "sendMessageToPortal", targetNamespace = "http://www.primeton.com/TaskService", className = "com.deppon.oa.task.SendMessageToPortal")
    @WebMethod
    @ResponseWrapper(localName = "sendMessageToPortalResponse", targetNamespace = "http://www.primeton.com/TaskService", className = "com.deppon.oa.task.SendMessageToPortalResponse")
    public java.lang.String sendMessageToPortal(
        @WebParam(name = "in0", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.String in0,
        @WebParam(name = "in1", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.String in1
    );

    @WebResult(name = "out1", targetNamespace = "http://www.primeton.com/TaskService")
    @RequestWrapper(localName = "sendUnReadTask", targetNamespace = "http://www.primeton.com/TaskService", className = "com.deppon.oa.task.SendUnReadTask")
    @WebMethod
    @ResponseWrapper(localName = "sendUnReadTaskResponse", targetNamespace = "http://www.primeton.com/TaskService", className = "com.deppon.oa.task.SendUnReadTaskResponse")
    public java.lang.String sendUnReadTask(
        @WebParam(name = "in0", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.String in0,
        @WebParam(name = "in1", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.String in1,
        @WebParam(name = "in2", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.Integer in2,
        @WebParam(name = "in3", targetNamespace = "http://www.primeton.com/TaskService")
        java.lang.Integer in3
    );
}
