CREATE TABLE T_CUST_FEEDATTACH(
FID NUMBER,
FFEEDID NUMBER,
FATTACHPATH VARCHAR2(500),
FATTACHNAME VARCHAR2(200),
FDESCRIBE VARCHAR2(1024)
);
ALTER TABLE T_CUST_FEEDATTACH ADD CONSTRAINT PK_T_CUST_FEEDATTACH primary key (FID);
CREATE SEQUENCE SEQ_ID_CUST_FEEDATTACH start with 1 increment by 1;
COMMENT ON TABLE T_CUST_FEEDATTACH is '反馈附件列表';
COMMENT ON COLUMN T_CUST_FEEDATTACH.FID is '附件ID';
COMMENT ON COLUMN T_CUST_FEEDATTACH.FFEEDID is '责任反馈ID';
COMMENT ON COLUMN T_CUST_FEEDATTACH.FATTACHPATH is '附件路径';
COMMENT ON COLUMN T_CUST_FEEDATTACH.FATTACHNAME is '附件名称';
COMMENT ON COLUMN T_CUST_FEEDATTACH.FDESCRIBE is '附件描述';
