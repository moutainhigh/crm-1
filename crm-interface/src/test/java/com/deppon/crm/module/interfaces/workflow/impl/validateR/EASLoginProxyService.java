/**
 * EASLoginProxyService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.deppon.crm.module.interfaces.workflow.impl.validateR;

public interface EASLoginProxyService extends javax.xml.rpc.Service {
    public java.lang.String getEASLoginAddress();

    public com.deppon.fin.login.EASLoginProxy getEASLogin() throws javax.xml.rpc.ServiceException;

    public com.deppon.fin.login.EASLoginProxy getEASLogin(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}
