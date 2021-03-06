package com.deppon.bi.leave;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;
import javax.xml.ws.Service;

/**
 * This class was generated by Apache CXF 2.4.2
 * 2012-05-08T15:22:57.178+08:00
 * Generated source version: 2.4.2
 * 
 */
@WebServiceClient(name = "CRM_CusStaByNumService", 
                  wsdlLocation = "http://192.168.14.19:8080/eos-default/CRM_CusStaByNumService?wsdl",
                  targetNamespace = "http://www.example.org/CRM_CusStaByNumService") 
public class CRMCusStaByNumService extends Service {

    public final static URL WSDL_LOCATION;

    public final static QName SERVICE = new QName("http://www.example.org/CRM_CusStaByNumService", "CRM_CusStaByNumService");
    public final static QName CRMCusStaByNumPort = new QName("http://www.example.org/CRM_CusStaByNumService", "CRM_CusStaByNumPort");
    static {
        URL url = null;
        try {
            url = new URL("http://192.168.14.19:8080/eos-default/CRM_CusStaByNumService?wsdl");
        } catch (MalformedURLException e) {
            java.util.logging.Logger.getLogger(CRMCusStaByNumService.class.getName())
                .log(java.util.logging.Level.INFO, 
                     "Can not initialize the default wsdl from {0}", "http://192.168.14.19:8080/eos-default/CRM_CusStaByNumService?wsdl");
        }
        WSDL_LOCATION = url;
    }

    public CRMCusStaByNumService(URL wsdlLocation) {
        super(wsdlLocation, SERVICE);
    }

    public CRMCusStaByNumService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public CRMCusStaByNumService() {
        super(WSDL_LOCATION, SERVICE);
    }
    

    /**
     *
     * @return
     *     returns CRMCusStaByNum
     */
    @WebEndpoint(name = "CRM_CusStaByNumPort")
    public CRMCusStaByNum getCRMCusStaByNumPort() {
        return super.getPort(CRMCusStaByNumPort, CRMCusStaByNum.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns CRMCusStaByNum
     */
    @WebEndpoint(name = "CRM_CusStaByNumPort")
    public CRMCusStaByNum getCRMCusStaByNumPort(WebServiceFeature... features) {
        return super.getPort(CRMCusStaByNumPort, CRMCusStaByNum.class, features);
    }

}
