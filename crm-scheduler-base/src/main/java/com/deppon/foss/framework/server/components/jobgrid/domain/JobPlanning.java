package com.deppon.foss.framework.server.components.jobgrid.domain;

import java.io.Serializable;

public class JobPlanning implements Serializable {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column quartz..qrtz_access_rules.INSTANCE_ID
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    private String instanceId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column quartz..qrtz_access_rules.SCOPE_TYPE
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    private Integer scopeType;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column quartz..qrtz_access_rules.SCOPE_NAME
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    private String scopeName;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column quartz..qrtz_access_rules.ACCESS_RULE
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    private Integer accessRule;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table quartz..qrtz_access_rules
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    private static final long serialVersionUID = 1L;

	private String id;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column quartz..qrtz_access_rules.INSTANCE_ID
     *
     * @return the value of quartz..qrtz_access_rules.INSTANCE_ID
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    public String getInstanceId() {
        return instanceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column quartz..qrtz_access_rules.INSTANCE_ID
     *
     * @param instanceId the value for quartz..qrtz_access_rules.INSTANCE_ID
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    public void setInstanceId(String instanceId) {
        this.instanceId = instanceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column quartz..qrtz_access_rules.SCOPE_TYPE
     *
     * @return the value of quartz..qrtz_access_rules.SCOPE_TYPE
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    public Integer getScopeType() {
        return scopeType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column quartz..qrtz_access_rules.SCOPE_TYPE
     *
     * @param scopeType the value for quartz..qrtz_access_rules.SCOPE_TYPE
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    public void setScopeType(Integer scopeType) {
        this.scopeType = scopeType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column quartz..qrtz_access_rules.SCOPE_NAME
     *
     * @return the value of quartz..qrtz_access_rules.SCOPE_NAME
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    public String getScopeName() {
        return scopeName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column quartz..qrtz_access_rules.SCOPE_NAME
     *
     * @param scopeName the value for quartz..qrtz_access_rules.SCOPE_NAME
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    public void setScopeName(String scopeName) {
        this.scopeName = scopeName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column quartz..qrtz_access_rules.ACCESS_RULE
     *
     * @return the value of quartz..qrtz_access_rules.ACCESS_RULE
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    public Integer getAccessRule() {
        return accessRule;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column quartz..qrtz_access_rules.ACCESS_RULE
     *
     * @param accessRule the value for quartz..qrtz_access_rules.ACCESS_RULE
     *
     * @mbggenerated Wed Oct 24 13:32:18 CST 2012
     */
    public void setAccessRule(Integer accessRule) {
        this.accessRule = accessRule;
    }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}