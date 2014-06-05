//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 in JDK 6 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2013.12.03 at 11:47:34
//


package com.deppon.crm.module.interfaces.uums.jms;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for AdminOrgInfo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AdminOrgInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="orgChangeId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="orgId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="orgCode" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="parentOrgCode" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="orgName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="orgAttribute" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgBenchmarkCode" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="orgManager" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="orgPhone" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgFax" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="parentOrgId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="parentOrgBenchmarkCode" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="subCompName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="subCompCode" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="costCenterCode" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="costCenterName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgProvince" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgCity" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgCountry" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgZipCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgEmail" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgAddress" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgStatus" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="validDate" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="invalidDate" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="isCareerDept" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="isBigArea" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="isSmallArea" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="orgLevel" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgDesc" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orgSeq" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="isLeaf" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="changeType" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="changeDate" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="displayOrder" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="deptShortName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="deptAttribute" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="areaCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="canceledSystems" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ehrDeptCode" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AdminOrgInfo", propOrder = {
    "orgChangeId",
    "orgId",
    "orgCode",
    "parentOrgCode",
    "orgName",
    "orgAttribute",
    "orgBenchmarkCode",
    "orgManager",
    "orgPhone",
    "orgFax",
    "parentOrgId",
    "parentOrgBenchmarkCode",
    "subCompName",
    "subCompCode",
    "costCenterCode",
    "costCenterName",
    "orgProvince",
    "orgCity",
    "orgCountry",
    "orgZipCode",
    "orgEmail",
    "orgAddress",
    "orgStatus",
    "validDate",
    "invalidDate",
    "isCareerDept",
    "isBigArea",
    "isSmallArea",
    "orgLevel",
    "orgDesc",
    "orgSeq",
    "isLeaf",
    "changeType",
    "changeDate",
    "displayOrder",
    "deptShortName",
    "deptAttribute",
    "areaCode",
    "canceledSystems",
    "ehrDeptCode"
})
public class AdminOrgInfo {

    @XmlElement(required = true)
    protected String orgChangeId;
    @XmlElement(required = true)
    protected String orgId;
    @XmlElement(required = true)
    protected String orgCode;
    @XmlElement(required = true)
    protected String parentOrgCode;
    @XmlElement(required = true)
    protected String orgName;
    protected String orgAttribute;
    @XmlElement(required = true)
    protected String orgBenchmarkCode;
    @XmlElement(required = true)
    protected String orgManager;
    protected String orgPhone;
    protected String orgFax;
    protected String parentOrgId;
    @XmlElement(required = true)
    protected String parentOrgBenchmarkCode;
    protected String subCompName;
    @XmlElement(required = true)
    protected String subCompCode;
    @XmlElement(required = true)
    protected String costCenterCode;
    protected String costCenterName;
    protected String orgProvince;
    protected String orgCity;
    protected String orgCountry;
    protected String orgZipCode;
    protected String orgEmail;
    protected String orgAddress;
    @XmlElement(required = true)
    protected String orgStatus;
    @XmlElement(required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar validDate;
    @XmlElement(required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar invalidDate;
    protected boolean isCareerDept;
    protected boolean isBigArea;
    protected boolean isSmallArea;
    protected String orgLevel;
    protected String orgDesc;
    protected String orgSeq;
    protected boolean isLeaf;
    @XmlElement(required = true)
    protected String changeType;
    @XmlElement(required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar changeDate;
    protected String displayOrder;
    protected String deptShortName;
    protected String deptAttribute;
    protected String areaCode;
    protected String canceledSystems;
    protected String ehrDeptCode;

    /**
     * Gets the value of the orgChangeId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgChangeId() {
        return orgChangeId;
    }

    /**
     * Sets the value of the orgChangeId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgChangeId(String value) {
        this.orgChangeId = value;
    }

    /**
     * Gets the value of the orgId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgId() {
        return orgId;
    }

    /**
     * Sets the value of the orgId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgId(String value) {
        this.orgId = value;
    }

    /**
     * Gets the value of the orgCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgCode() {
        return orgCode;
    }

    /**
     * Sets the value of the orgCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgCode(String value) {
        this.orgCode = value;
    }

    /**
     * Gets the value of the parentOrgCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getParentOrgCode() {
        return parentOrgCode;
    }

    /**
     * Sets the value of the parentOrgCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setParentOrgCode(String value) {
        this.parentOrgCode = value;
    }

    /**
     * Gets the value of the orgName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgName() {
        return orgName;
    }

    /**
     * Sets the value of the orgName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgName(String value) {
        this.orgName = value;
    }

    /**
     * Gets the value of the orgAttribute property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgAttribute() {
        return orgAttribute;
    }

    /**
     * Sets the value of the orgAttribute property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgAttribute(String value) {
        this.orgAttribute = value;
    }

    /**
     * Gets the value of the orgBenchmarkCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgBenchmarkCode() {
        return orgBenchmarkCode;
    }

    /**
     * Sets the value of the orgBenchmarkCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgBenchmarkCode(String value) {
        this.orgBenchmarkCode = value;
    }

    /**
     * Gets the value of the orgManager property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgManager() {
        return orgManager;
    }

    /**
     * Sets the value of the orgManager property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgManager(String value) {
        this.orgManager = value;
    }

    /**
     * Gets the value of the orgPhone property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgPhone() {
        return orgPhone;
    }

    /**
     * Sets the value of the orgPhone property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgPhone(String value) {
        this.orgPhone = value;
    }

    /**
     * Gets the value of the orgFax property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgFax() {
        return orgFax;
    }

    /**
     * Sets the value of the orgFax property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgFax(String value) {
        this.orgFax = value;
    }

    /**
     * Gets the value of the parentOrgId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getParentOrgId() {
        return parentOrgId;
    }

    /**
     * Sets the value of the parentOrgId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setParentOrgId(String value) {
        this.parentOrgId = value;
    }

    /**
     * Gets the value of the parentOrgBenchmarkCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getParentOrgBenchmarkCode() {
        return parentOrgBenchmarkCode;
    }

    /**
     * Sets the value of the parentOrgBenchmarkCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setParentOrgBenchmarkCode(String value) {
        this.parentOrgBenchmarkCode = value;
    }

    /**
     * Gets the value of the subCompName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSubCompName() {
        return subCompName;
    }

    /**
     * Sets the value of the subCompName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSubCompName(String value) {
        this.subCompName = value;
    }

    /**
     * Gets the value of the subCompCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSubCompCode() {
        return subCompCode;
    }

    /**
     * Sets the value of the subCompCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSubCompCode(String value) {
        this.subCompCode = value;
    }

    /**
     * Gets the value of the costCenterCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCostCenterCode() {
        return costCenterCode;
    }

    /**
     * Sets the value of the costCenterCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCostCenterCode(String value) {
        this.costCenterCode = value;
    }

    /**
     * Gets the value of the costCenterName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCostCenterName() {
        return costCenterName;
    }

    /**
     * Sets the value of the costCenterName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCostCenterName(String value) {
        this.costCenterName = value;
    }

    /**
     * Gets the value of the orgProvince property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgProvince() {
        return orgProvince;
    }

    /**
     * Sets the value of the orgProvince property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgProvince(String value) {
        this.orgProvince = value;
    }

    /**
     * Gets the value of the orgCity property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgCity() {
        return orgCity;
    }

    /**
     * Sets the value of the orgCity property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgCity(String value) {
        this.orgCity = value;
    }

    /**
     * Gets the value of the orgCountry property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgCountry() {
        return orgCountry;
    }

    /**
     * Sets the value of the orgCountry property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgCountry(String value) {
        this.orgCountry = value;
    }

    /**
     * Gets the value of the orgZipCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgZipCode() {
        return orgZipCode;
    }

    /**
     * Sets the value of the orgZipCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgZipCode(String value) {
        this.orgZipCode = value;
    }

    /**
     * Gets the value of the orgEmail property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgEmail() {
        return orgEmail;
    }

    /**
     * Sets the value of the orgEmail property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgEmail(String value) {
        this.orgEmail = value;
    }

    /**
     * Gets the value of the orgAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgAddress() {
        return orgAddress;
    }

    /**
     * Sets the value of the orgAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgAddress(String value) {
        this.orgAddress = value;
    }

    /**
     * Gets the value of the orgStatus property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgStatus() {
        return orgStatus;
    }

    /**
     * Sets the value of the orgStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgStatus(String value) {
        this.orgStatus = value;
    }

    /**
     * Gets the value of the validDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getValidDate() {
        return validDate;
    }

    /**
     * Sets the value of the validDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setValidDate(XMLGregorianCalendar value) {
        this.validDate = value;
    }

    /**
     * Gets the value of the invalidDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getInvalidDate() {
        return invalidDate;
    }

    /**
     * Sets the value of the invalidDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setInvalidDate(XMLGregorianCalendar value) {
        this.invalidDate = value;
    }

    /**
     * Gets the value of the isCareerDept property.
     * 
     */
    public boolean isIsCareerDept() {
        return isCareerDept;
    }

    /**
     * Sets the value of the isCareerDept property.
     * 
     */
    public void setIsCareerDept(boolean value) {
        this.isCareerDept = value;
    }

    /**
     * Gets the value of the isBigArea property.
     * 
     */
    public boolean isIsBigArea() {
        return isBigArea;
    }

    /**
     * Sets the value of the isBigArea property.
     * 
     */
    public void setIsBigArea(boolean value) {
        this.isBigArea = value;
    }

    /**
     * Gets the value of the isSmallArea property.
     * 
     */
    public boolean isIsSmallArea() {
        return isSmallArea;
    }

    /**
     * Sets the value of the isSmallArea property.
     * 
     */
    public void setIsSmallArea(boolean value) {
        this.isSmallArea = value;
    }

    /**
     * Gets the value of the orgLevel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgLevel() {
        return orgLevel;
    }

    /**
     * Sets the value of the orgLevel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgLevel(String value) {
        this.orgLevel = value;
    }

    /**
     * Gets the value of the orgDesc property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgDesc() {
        return orgDesc;
    }

    /**
     * Sets the value of the orgDesc property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgDesc(String value) {
        this.orgDesc = value;
    }

    /**
     * Gets the value of the orgSeq property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrgSeq() {
        return orgSeq;
    }

    /**
     * Sets the value of the orgSeq property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrgSeq(String value) {
        this.orgSeq = value;
    }

    /**
     * Gets the value of the isLeaf property.
     * 
     */
    public boolean isIsLeaf() {
        return isLeaf;
    }

    /**
     * Sets the value of the isLeaf property.
     * 
     */
    public void setIsLeaf(boolean value) {
        this.isLeaf = value;
    }

    /**
     * Gets the value of the changeType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getChangeType() {
        return changeType;
    }

    /**
     * Sets the value of the changeType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setChangeType(String value) {
        this.changeType = value;
    }

    /**
     * Gets the value of the changeDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getChangeDate() {
        return changeDate;
    }

    /**
     * Sets the value of the changeDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setChangeDate(XMLGregorianCalendar value) {
        this.changeDate = value;
    }

    /**
     * Gets the value of the displayOrder property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDisplayOrder() {
        return displayOrder;
    }

    /**
     * Sets the value of the displayOrder property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDisplayOrder(String value) {
        this.displayOrder = value;
    }

    /**
     * Gets the value of the deptShortName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDeptShortName() {
        return deptShortName;
    }

    /**
     * Sets the value of the deptShortName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDeptShortName(String value) {
        this.deptShortName = value;
    }

    /**
     * Gets the value of the deptAttribute property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDeptAttribute() {
        return deptAttribute;
    }

    /**
     * Sets the value of the deptAttribute property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDeptAttribute(String value) {
        this.deptAttribute = value;
    }

    /**
     * Gets the value of the areaCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAreaCode() {
        return areaCode;
    }

    /**
     * Sets the value of the areaCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAreaCode(String value) {
        this.areaCode = value;
    }

    /**
     * Gets the value of the canceledSystems property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCanceledSystems() {
        return canceledSystems;
    }

    /**
     * Sets the value of the canceledSystems property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCanceledSystems(String value) {
        this.canceledSystems = value;
    }

    /**
     * Gets the value of the ehrDeptCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEhrDeptCode() {
        return ehrDeptCode;
    }

    /**
     * Sets the value of the ehrDeptCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEhrDeptCode(String value) {
        this.ehrDeptCode = value;
    }

}
