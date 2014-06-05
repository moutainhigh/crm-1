CREATE TABLE T_CUST_DUTY(
FID NUMBER,
FCOMPLAINTID NUMBER,
FVOUCHERNUMBER VARCHAR2(300),
FCALLER VARCHAR2(60),
FDEALNUMBER VARCHAR2(50),
FTEL VARCHAR2(120),
FREPORTTYPE VARCHAR2(30),
FCOMPMANID NUMBER,
FCOMPLAINCUST VARCHAR2(500),
FSENDORRECEIVE VARCHAR2(20),
FCUSTLEVEL VARCHAR2(50),
FCUSTTYPE VARCHAR2(30),
FCOMPLAINTSOURCE VARCHAR2(50),
FRELATCUSID NUMBER,
FRELATCUS VARCHAR2(20),
FRELATCUSLEVEL VARCHAR2(30),
FRELATCUSTYPE VARCHAR2(50),
FTIMELIMIT NUMBER,
FTILIMITCYCLE VARCHAR2(30),
FPRIORITY VARCHAR2(30),
FREBINDNO VARCHAR2(60),
FREPORTERID NUMBER,
FREPORTER VARCHAR2(30),
FREPORTTIME TIMESTAMP,
FREPORTCONTENT VARCHAR2(4000),
FCUSTREQUIRE VARCHAR2(600),
FPROSTATUS VARCHAR2(50),
FSTATUS VARCHAR2(30) DEFAULT 'UNRECEIVE',
FCREATEDATE DATE,
FCREATEUSER NUMBER,
FMODIFYDATE DATE,
FMODIFYUSER NUMBER,
FRECEIVEUSERID NUMBER,
FRECEIVEUSER VARCHAR2(60),
FRECEIVETIME TIMESTAMP,
FAPPDUTYUSERID NUMBER,
FAPPDUTYUSER VARCHAR2(60),
FAPPDUTYTIME TIMESTAMP,
FSURVEYRESULT VARCHAR2(30) DEFAULT 'LIBRAMS',
FTREATPROCESS VARCHAR2(600)
);
ALTER TABLE T_CUST_DUTY ADD CONSTRAINT PK_T_CUST_DUTY primary key (FID);
CREATE SEQUENCE SEQ_CRM_DUTY start with 1 increment by 1;
COMMENT ON TABLE T_CUST_DUTY is '工单责任';
COMMENT ON COLUMN T_CUST_DUTY.FID is '编号';
COMMENT ON COLUMN T_CUST_DUTY.FCOMPLAINTID is '工单编号';
COMMENT ON COLUMN T_CUST_DUTY.FVOUCHERNUMBER is '凭证号';
COMMENT ON COLUMN T_CUST_DUTY.FCALLER is '来电人';
COMMENT ON COLUMN T_CUST_DUTY.FDEALNUMBER is '处理编号';
COMMENT ON COLUMN T_CUST_DUTY.FTEL is '联系电话';
COMMENT ON COLUMN T_CUST_DUTY.FREPORTTYPE is '上报类型';
COMMENT ON COLUMN T_CUST_DUTY.FCOMPMANID is '来电客户ID';
COMMENT ON COLUMN T_CUST_DUTY.FCOMPLAINCUST is '来电客户';
COMMENT ON COLUMN T_CUST_DUTY.FSENDORRECEIVE is '来电人类型';
COMMENT ON COLUMN T_CUST_DUTY.FCUSTLEVEL is '客户等级';
COMMENT ON COLUMN T_CUST_DUTY.FCUSTTYPE is '客户类型';
COMMENT ON COLUMN T_CUST_DUTY.FCOMPLAINTSOURCE is '工单来源';
COMMENT ON COLUMN T_CUST_DUTY.FRELATCUSID is '相关客户ID';
COMMENT ON COLUMN T_CUST_DUTY.FRELATCUS is '相关客户';
COMMENT ON COLUMN T_CUST_DUTY.FRELATCUSLEVEL is '相关客户等级';
COMMENT ON COLUMN T_CUST_DUTY.FRELATCUSTYPE is '相关客户类型';
COMMENT ON COLUMN T_CUST_DUTY.FTIMELIMIT is '期望时限';
COMMENT ON COLUMN T_CUST_DUTY.FTILIMITCYCLE is '期望时限周期';
COMMENT ON COLUMN T_CUST_DUTY.FPRIORITY is '优先级别';
COMMENT ON COLUMN T_CUST_DUTY.FREBINDNO is '重复工单码';
COMMENT ON COLUMN T_CUST_DUTY.FREPORTERID is '上报人ID';
COMMENT ON COLUMN T_CUST_DUTY.FREPORTER is '上报人';
COMMENT ON COLUMN T_CUST_DUTY.FREPORTTIME is '上报时间';
COMMENT ON COLUMN T_CUST_DUTY.FREPORTCONTENT is '上报内容';
COMMENT ON COLUMN T_CUST_DUTY.FCUSTREQUIRE is '客户要求';
COMMENT ON COLUMN T_CUST_DUTY.FPROSTATUS is '处理状态';
COMMENT ON COLUMN T_CUST_DUTY.FSTATUS is '处理经过';
COMMENT ON COLUMN T_CUST_DUTY.FCREATEDATE  is '创建时间';
COMMENT ON COLUMN T_CUST_DUTY.FCREATEUSER is '创建人编号';
COMMENT ON COLUMN T_CUST_DUTY.FMODIFYDATE  is '创建时间';
COMMENT ON COLUMN T_CUST_DUTY.FMODIFYUSER is '创建人编号';
COMMENT ON COLUMN T_CUST_DUTY.FRECEIVEUSERID is '接入人ID';
COMMENT ON COLUMN T_CUST_DUTY.FRECEIVEUSER is '接入人';
COMMENT ON COLUMN T_CUST_DUTY.FRECEIVETIME is '接入时间';
COMMENT ON COLUMN T_CUST_DUTY.FAPPDUTYUSERID is '责任划分人ID';
COMMENT ON COLUMN T_CUST_DUTY.FAPPDUTYUSER is '责任划分人';
COMMENT ON COLUMN T_CUST_DUTY.FAPPDUTYTIME is '责任划分时间';
COMMENT ON COLUMN T_CUST_DUTY.FSURVEYRESULT is '调查结果';
COMMENT ON COLUMN T_CUST_DUTY.FTREATPROCESS is '调查结果';


