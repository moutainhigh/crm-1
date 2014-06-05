package com.deppon.crm.module.duty.shared.domain;

import com.deppon.foss.framework.entity.BaseEntity;

public class DutyBusinessScope extends BaseEntity{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	//业务环节ID
	private String busAspectId;
	//业务范围名称
	private String busScopeName;
	public String getBusAspectId() {
		return busAspectId;
	}
	public void setBusAspectId(String busAspectId) {
		this.busAspectId = busAspectId;
	}
	public String getBusScopeName() {
		return busScopeName;
	}
	public void setBusScopeName(String busScopeName) {
		this.busScopeName = busScopeName;
	}
	
}
