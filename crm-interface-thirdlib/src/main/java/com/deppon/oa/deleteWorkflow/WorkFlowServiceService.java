package com.deppon.oa.deleteWorkflow;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;
import javax.xml.ws.Service;

/**
 * This class was generated by Apache CXF 2.4.2
 * 2013-01-30T18:53:47.312+08:00
 * Generated source version: 2.4.2
 * 
 */
@WebServiceClient(name = "WorkFlowServiceService", 
                  wsdlLocation = "http://192.168.17.120:8080/dipApp/WorkFlowService?wsdl",
                  targetNamespace = "http://www.primeton.com/WorkFlowService") 
public class WorkFlowServiceService extends Service {

    public final static URL WSDL_LOCATION;

    public final static QName SERVICE = new QName("http://www.primeton.com/WorkFlowService", "WorkFlowServiceService");
    public final static QName WorkFlowServicePort = new QName("http://www.primeton.com/WorkFlowService", "WorkFlowServicePort");
    static {
        URL url = null;
        try {
            url = new URL("http://192.168.17.120:8080/dipApp/WorkFlowService?wsdl");
        } catch (MalformedURLException e) {
            java.util.logging.Logger.getLogger(WorkFlowServiceService.class.getName())
                .log(java.util.logging.Level.INFO, 
                     "Can not initialize the default wsdl from {0}", "http://192.168.17.120:8080/dipApp/WorkFlowService?wsdl");
        }
        WSDL_LOCATION = url;
    }

    public WorkFlowServiceService(URL wsdlLocation) {
        super(wsdlLocation, SERVICE);
    }

    public WorkFlowServiceService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public WorkFlowServiceService() {
        super(WSDL_LOCATION, SERVICE);
    }
    

    /**
     *
     * @return
     *     returns WorkFlowService
     */
    @WebEndpoint(name = "WorkFlowServicePort")
    public WorkFlowService getWorkFlowServicePort() {
        return super.getPort(WorkFlowServicePort, WorkFlowService.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns WorkFlowService
     */
    @WebEndpoint(name = "WorkFlowServicePort")
    public WorkFlowService getWorkFlowServicePort(WebServiceFeature... features) {
        return super.getPort(WorkFlowServicePort, WorkFlowService.class, features);
    }

}
