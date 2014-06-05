package com.deppon.ows;

import javax.xml.ws.WebFault;

/**
 * This class was generated by the JAX-WS RI. JAX-WS RI 2.1.3-hudson-390-
 * Generated source version: 2.0
 * 
 */
@SuppressWarnings("restriction")
@WebFault(name = "commonExceptionInfo", targetNamespace = "http://www.deppon.com/esb/exception")
public class CommonException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * Java type that goes as soapenv:Fault detail element.
	 * 
	 */
	private CommonExceptionInfo faultInfo;

	/**
	 * 
	 * @param message
	 * @param faultInfo
	 */
	public CommonException(String message, CommonExceptionInfo faultInfo) {
		super(message);
		this.faultInfo = faultInfo;
	}

	/**
	 * 
	 * @param message
	 * @param faultInfo
	 * @param cause
	 */
	public CommonException(String message, CommonExceptionInfo faultInfo,
			Throwable cause) {
		super(message, cause);
		this.faultInfo = faultInfo;
	}

	/**
	 * 
	 * @return returns fault bean: com.deppon.ows.CommonExceptionInfo
	 */
	public CommonExceptionInfo getFaultInfo() {
		return faultInfo;
	}

}
