//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 in JDK 6 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2013.09.02 at 02:56:41 下午 CST 
//


package com.deppon.crm.module.client.sync.wdgh;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.deppon.crm.module.client.sync.wdgh package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    public final static QName _SyncCustInfoResponse_QNAME = new QName("http://www.deppon.com/esb/inteface/domain/crm", "SyncCustInfoResponse");
    public final static QName _SyncCustInfoRequest_QNAME = new QName("http://www.deppon.com/esb/inteface/domain/crm", "SyncCustInfoRequest");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.deppon.crm.module.client.sync.wdgh
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link SyncCustInfoRequest }
     * 
     */
    public SyncCustInfoRequest createSyncCustInfoRequest() {
        return new SyncCustInfoRequest();
    }

    /**
     * Create an instance of {@link CustDetalInfo }
     * 
     */
    public CustDetalInfo createCustDetalInfo() {
        return new CustDetalInfo();
    }

    /**
     * Create an instance of {@link SyncCustInfoResponse }
     * 
     */
    public SyncCustInfoResponse createSyncCustInfoResponse() {
        return new SyncCustInfoResponse();
    }

    /**
     * Create an instance of {@link ResultDetal }
     * 
     */
    public ResultDetal createResultDetal() {
        return new ResultDetal();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SyncCustInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.deppon.com/esb/inteface/domain/crm", name = "SyncCustInfoResponse")
    public JAXBElement<SyncCustInfoResponse> createSyncCustInfoResponse(SyncCustInfoResponse value) {
        return new JAXBElement<SyncCustInfoResponse>(_SyncCustInfoResponse_QNAME, SyncCustInfoResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SyncCustInfoRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.deppon.com/esb/inteface/domain/crm", name = "SyncCustInfoRequest")
    public JAXBElement<SyncCustInfoRequest> createSyncCustInfoRequest(SyncCustInfoRequest value) {
        return new JAXBElement<SyncCustInfoRequest>(_SyncCustInfoRequest_QNAME, SyncCustInfoRequest.class, null, value);
    }

}
