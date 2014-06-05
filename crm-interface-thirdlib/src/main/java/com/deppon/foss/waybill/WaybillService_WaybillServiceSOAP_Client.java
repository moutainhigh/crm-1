
package com.deppon.foss.waybill;

/**
 * Please modify this class to meet your needs
 * This class is not complete
 */

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;

/**
 * This class was generated by Apache CXF 2.6.2
 * 2013-03-25T14:05:53.328+08:00
 * Generated source version: 2.6.2
 * 
 */
public final class WaybillService_WaybillServiceSOAP_Client {

    private static final QName SERVICE_NAME = new QName("http://www.deppon.com/foss/waybillService", "CustomerService");

    private WaybillService_WaybillServiceSOAP_Client() {
    }

    public static void main(String args[]) throws java.lang.Exception {
        URL wsdlURL = CustomerService.WSDL_LOCATION;
        if (args.length > 0 && args[0] != null && !"".equals(args[0])) { 
            File wsdlFile = new File(args[0]);
            try {
                if (wsdlFile.exists()) {
                    wsdlURL = wsdlFile.toURI().toURL();
                } else {
                    wsdlURL = new URL(args[0]);
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
      
        CustomerService ss = new CustomerService(wsdlURL, SERVICE_NAME);
        WaybillService port = ss.getWaybillServiceSOAP();  
        
        {
        System.out.println("Invoking queryDetail...");
        com.deppon.foss.waybill.ESBHeader _queryDetail_esbHeaderVal = null;
        javax.xml.ws.Holder<com.deppon.foss.waybill.ESBHeader> _queryDetail_esbHeader = new javax.xml.ws.Holder<com.deppon.foss.waybill.ESBHeader>(_queryDetail_esbHeaderVal);
        com.deppon.foss.waybill.QueryDetailRequest _queryDetail_payload = null;
        try {
            com.deppon.foss.waybill.QueryDetailResponse _queryDetail__return = port.queryDetail(_queryDetail_esbHeader, _queryDetail_payload);
            System.out.println("queryDetail.result=" + _queryDetail__return);

            System.out.println("queryDetail._queryDetail_esbHeader=" + _queryDetail_esbHeader.value);
        } catch (CommonException e) { 
            System.out.println("Expected exception: CommonException has occurred.");
            System.out.println(e.toString());
        }
            }

        System.exit(0);
    }

}
