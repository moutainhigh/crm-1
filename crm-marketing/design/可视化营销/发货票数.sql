insert into t_code_head (FID, FCODETYPE, FCODETYPEDESC, FCREATETIME, FCREATEUSERID, FLASTUPDATETIME, FLASTMODIFYUSERID)
values (400001301, 'goodsTimes', '发货票数', sysdate, 106138, sysdate, 106138);

insert into t_code_detail (FID, FPARENTID, FCODETYPE, FCODE, FCODEDESC, FSTATUS, FCODESEQ, FLANGUAGE, FCREATETIME, FCREATEUSERID, FLASTUPDATETIME, FLASTMODIFYUSERID)
values (400001301, 0, 'goodsTimes', '-1', '不限', 'A', 1, 'zh_CN', sysdate, 106138, sysdate, 106138);
insert into t_code_detail (FID, FPARENTID, FCODETYPE, FCODE, FCODEDESC, FSTATUS, FCODESEQ, FLANGUAGE, FCREATETIME, FCREATEUSERID, FLASTUPDATETIME, FLASTMODIFYUSERID)
values (400001302, 0, 'goodsTimes', '0-5', '0-5次', 'A', 2, 'zh_CN', sysdate, 106138, sysdate, 106138);
insert into t_code_detail (FID, FPARENTID, FCODETYPE, FCODE, FCODEDESC, FSTATUS, FCODESEQ, FLANGUAGE, FCREATETIME, FCREATEUSERID, FLASTUPDATETIME, FLASTMODIFYUSERID)
values (400001303, 0, 'goodsTimes', '5-10', '5-10次', 'A', 3, 'zh_CN', sysdate, 106138, sysdate, 106138);
insert into t_code_detail (FID, FPARENTID, FCODETYPE, FCODE, FCODEDESC, FSTATUS, FCODESEQ, FLANGUAGE, FCREATETIME, FCREATEUSERID, FLASTUPDATETIME, FLASTMODIFYUSERID)
values (400001304, 0, 'goodsTimes', '10-15', '10-15次', 'A', 4, 'zh_CN', sysdate, 106138, sysdate, 106138);
insert into t_code_detail (FID, FPARENTID, FCODETYPE, FCODE, FCODEDESC, FSTATUS, FCODESEQ, FLANGUAGE, FCREATETIME, FCREATEUSERID, FLASTUPDATETIME, FLASTMODIFYUSERID)
values (400001305, 0, 'goodsTimes', '15-20', '15-20次', 'A', 5, 'zh_CN', sysdate, 106138, sysdate, 106138);
insert into t_code_detail (FID, FPARENTID, FCODETYPE, FCODE, FCODEDESC, FSTATUS, FCODESEQ, FLANGUAGE, FCREATETIME, FCREATEUSERID, FLASTUPDATETIME, FLASTMODIFYUSERID)
values (400001306, 0, 'goodsTimes', '20-', '15-20次以上', 'A', 6, 'zh_CN', sysdate, 106138, sysdate, 106138);



