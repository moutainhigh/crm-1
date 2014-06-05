package com.deppon.map.baidu;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;
import javax.xml.ws.Service;

/**
 * This class was generated by Apache CXF 2.4.2
 * 2012-07-23T20:06:16.500+08:00
 * Generated source version: 2.4.2
 * 
 */
@WebServiceClient(name = "Map2CrmServiceImplService", 
                  wsdlLocation = "http://192.168.17.104:8888/dpmap/crmService?wsdl",
                  targetNamespace = "http://impl.service.crm/") 
public class Map2CrmServiceImplService extends Service {

    public final static URL WSDL_LOCATION;

    public final static QName SERVICE = new QName("http://impl.service.crm/", "Map2CrmServiceImplService");
    public final static QName Map2CrmServiceImplPort = new QName("http://impl.service.crm/", "Map2CrmServiceImplPort");
    static {
        URL url = null;
        try {
            url = new URL("http://192.168.17.104:8888/dpmap/crmService?wsdl");
        } catch (MalformedURLException e) {
            java.util.logging.Logger.getLogger(Map2CrmServiceImplService.class.getName())
                .log(java.util.logging.Level.INFO, 
                     "Can not initialize the default wsdl from {0}", "http://192.168.17.104:8888/dpmap/crmService?wsdl");
        }
        WSDL_LOCATION = url;
    }

    public Map2CrmServiceImplService(URL wsdlLocation) {
        super(wsdlLocation, SERVICE);
    }

    public Map2CrmServiceImplService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public Map2CrmServiceImplService() {
        super(WSDL_LOCATION, SERVICE);
    }
    

    /**
     *
     * @return
     *     returns IMap2CrmService
     */
    @WebEndpoint(name = "Map2CrmServiceImplPort")
    public IMap2CrmService getMap2CrmServiceImplPort() {
        return super.getPort(Map2CrmServiceImplPort, IMap2CrmService.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns IMap2CrmService
     */
    @WebEndpoint(name = "Map2CrmServiceImplPort")
    public IMap2CrmService getMap2CrmServiceImplPort(WebServiceFeature... features) {
        return super.getPort(Map2CrmServiceImplPort, IMap2CrmService.class, features);
    }

}
