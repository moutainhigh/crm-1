package com.deppon.crm.module.customer.server.utils;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.deppon.crm.module.customer.server.manager.CustomerValidator;

public class SpringHelper {

	protected ApplicationContext appContext = null;
	private static SpringHelper instance = new SpringHelper();

	private SpringHelper() {
		initContext();
	}

	public static SpringHelper get() {
		return instance;
	}

	protected void initContext() {
		try {
			appContext = new ClassPathXmlApplicationContext(
					"com/deppon/crm/module/customer/server/META-INF/Spring.xml");
		} catch (BeansException e) {
		}
	}

	public <T> T getBean(Class<T> clazz){
		if(appContext != null){
			String className = clazz.getSimpleName();
			String startName = className.substring(0,1);
			String otherName = className.substring(1);
			
			String beanName =StringUtils.lowerCase(startName) + otherName;
			return (T) appContext.getBean(beanName);
		}
		return null;
	}
}
