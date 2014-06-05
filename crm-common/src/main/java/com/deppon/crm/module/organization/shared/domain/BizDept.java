package com.deppon.crm.module.organization.shared.domain;

public class BizDept {
	// ID
	private String id;
	// 部门编号
	private String deptCode;
	// 部门名称
	private String deptName;
	// 部门标杆编码,用于各系统间交互
	private String standardCode;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDeptCode() {
		return deptCode;
	}

	public void setDeptCode(String deptCode) {
		this.deptCode = deptCode;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public String getStandardCode() {
		return standardCode;
	}

	public void setStandardCode(String standardCode) {
		this.standardCode = standardCode;
	}

}
