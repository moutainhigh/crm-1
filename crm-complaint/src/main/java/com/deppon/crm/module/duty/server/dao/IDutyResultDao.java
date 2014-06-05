package com.deppon.crm.module.duty.server.dao;

import java.util.List;

import com.deppon.crm.module.authorization.shared.domain.User;
import com.deppon.crm.module.duty.shared.domain.DutyResult;
import com.deppon.crm.module.duty.shared.domain.SearchDutyResultVO;
 
/**
 * 
 * <p>
 * Description:划分结果 Dao<br />
 * </p>
 * @title IDutyResultDao.java
 * @package com.deppon.crm.module.duty.server.dao 
 * @author zhangbin
 * @version 0.1 2013-3-6
 */
public interface IDutyResultDao {
	/**
	 * <p>
	 * Description:根据条件查询划分结果<br />
	 * </p>
	 * @author ouy
	 * @version 0.1 2013-3-6
	 * @param dutyResult
	 * @return List<DutyResult>
	 */
	public List<DutyResult> searchDutyResult(DutyResult dutyResult);
	
	
	/**
	 * <p>
	 * Description:根据ID查询划分结果<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.1 2013-3-6
	 * @param fid
	 * @return List
	 */
	public DutyResult selectDutyResultByPrimaryKey(String fid);
	
	/**
	 * <p>
	 * Description:修改划分结果<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.1 2013-3-6
	 * @param dutyResult
	 * @return void
	 */
	public void updateDutyResult(DutyResult dutyResult);
	
	/**
	 * <p>
	 * Description:批量删除划分结果<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.1 2013-3-6
	 * @param fids
	 * @return void
	 */
	public void deleteDutyResults(List<String> fids);
	
	/**
	 * <p>
	 * Description:根据责任ID删除划分结果<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.1 2013-3-6
	 * @param dutyId
	 * @return void
	 */
	public void deleteDutyResultsByDutyId(String dutyId);
	
	/**
	 * <p>
	 * Description:插入划分结果<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.1 2013-3-6
	 * @param dutyResult
	 * @return void
	 */
	public void insertDutyResult(DutyResult dutyResult);
	
	/**
	 * <p>
	 * Description:批量删除划分结果（逻辑）<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.1 2013-3-6
	 * @param fids
	 * @return void
	 */
	public void deleteDutyResultsStatus(List<String> fids);
	
	/**
	 * <p>
	 * Description:根据责任ID删除划分结果(逻辑)<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.1 2013-3-6
	 * @param dutyId
	 * @return void
	 */
	public void deleteDutyResultsByDutyIdStatus(String dutyId);
	
	/**
	 * <p>
	 * Description:修改换分结果状态<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.1 2013-3-20
	 * @param dutyId
	 * @return void
	 */
	public void updateDutySatatus(DutyResult dutyResult);
	
	
	/**
	 * 
	 * <p>
	 * Description:责任反馈主查询（当前登录用户被划分的责任）<br />
	 * </p>
	 * @author 张斌
	 * @version 0.1 2013-3-23
	 */
	List<SearchDutyResultVO> searchDutyFeedBackMain(User user,int start,int limit);

	/**
	 * 
	 * <p>
	 * Description:责任反馈主查询（当前登录用户被划分的责任）个数<br />
	 * </p>
	 * @author 张斌
	 * @version 0.1 2013-3-23
	 */
	Integer searchDutyFeedBackMainCount(User user);
	
}
