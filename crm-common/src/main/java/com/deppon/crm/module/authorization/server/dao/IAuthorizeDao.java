package com.deppon.crm.module.authorization.server.dao;

import java.util.List;
import java.util.Map;

import com.deppon.crm.module.authorization.shared.domain.Role;
import com.deppon.crm.module.organization.shared.domain.Department;

/**
 * 授权用户角色与部门数据访问层
 * @author Administrator
 *
 */
public interface IAuthorizeDao {
	
	/**
	 * 通过用户ID查询得到待授权的角色信息集合
	 * @param userId
	 * @return
	 */
	List<Role> getAllChooesRoleByUserId(String currentUserId,String userId);

	/**
	 * 通过用户ID查询得到已授权的角色信息集合
	 * @param userId
	 * @return
	 */
	List<Role> getAllAuthorizedRoleByUserId(String currentUserId,String userId);

	/**
	 * 通过用户ID查询得到已授权的部门ID集合
	 * @param userId
	 * @return
	 */
	List<String> getAllDepartmentIdByUserId(String currentUserId,String userId);
	/**
	 * 
	 * <p>
	 * 通过用户ID查询得到已授权的部门集合<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-5-15
	 * @param userId
	 * @return
	 * List<Department>
	 */
	@Deprecated
	List<Department> getAllDepartmentByUserId(String userId);
	/**
	 * 
	 * <p>
	 * 分页查询该用户所拥有的数据权限<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-7-10
	 * @param userId
	 * @param start
	 * @param limit
	 * @return
	 * List<Department>
	 */
	List<Department> getAllDepartmentByUserId(String userId,int start,int limit);
	/**
	 * 
	 * <p>
	 * 统计该用户所拥有的数据权限的数据总数<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-7-10
	 * @param userId
	 * @return
	 * int
	 */
	int countAllDepartmentByUserId(String userId);
	/**
	 * 
	 * <p>
	 * 分页查询--该用户所拥有的数据权限的部门名称模糊匹配的数据<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-7-10
	 * @param userId
	 * @param start
	 * @param limit
	 * @return
	 * List<Department>
	 */
	List<Department> getAllDepartmentByUserIdAndLikeDeptName(String userId,String deptName,int start,int limit);
	/**
	 * 
	 * <p>
	 * 统计数据--统计该用户所拥有的数据权限的部门名称模糊匹配的数据总数<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-7-10
	 * @param userId
	 * @return
	 * int
	 */
	int countAllDepartmentByUserIdAndLikeDeptName(String userId,String deptName);

	/**
	 * 保存用户部门数据权限
	 * @param userId
	 * @param deptId
	 */
	void insertUserDeptAuth(String userId, String deptId);

	/**
	 * 保存用户授权角色
	 * @param userId
	 * @param roleId
	 */
	void insertUserRoleAuth(String userId, String roleId);

	/**
	 * 通过用户ID删除用户部门数据授权数据
	 * @param userId
	 */
	void deleteUserDeptAuthByUserId(String userId);

	/**
	 * 通过用户ID删除用户角色授权数据
	 * @param userId
	 */
	void deleteUserRoleAuthByUserId(String userId);
	/**
	 * 查询当前登录用户与授权用户差集，父部门为parentDeptId的可授权部门
	 * @param currentUserId  当前登录用户
	 * @param userId   授权用户
	 * @param parentDeptId  父部门ID
	 */
	List<String> getChildDepartmentIdByUserId(String currentUserId,
			String userId, String parentDeptId);
	/**
	 * 
	 * <p>
	 * 根据父部门id查询该部门下全部叶子节点的部门数据<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-7-10
	 * @param deptId
	 * @param limit 
	 * @param start 
	 * @return
	 * List<Department>
	 */
	List<Department> getAllleafByParentId(List<String> deptIds, int start, int limit);
	/**
	 * 
	 * <p>
	 * 统计根据父部门id查询该部门下全部叶子节点的部门数据的总条数<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-7-10
	 * @param deptId
	 * @return
	 * List<Department>
	 */
	public int countAllleafByParentId(List<String> deptIds);
	/**
	 * 
	 * <p>
	 * 分页查询--根据父部门id查询该部门下全部叶子节点的部门名称模糊匹配数据<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-7-10
	 * @param deptId
	 * @return
	 * List<Department>
	 */
	List<Department> getAllleafByParentIdAndLikeDeptName(List<String> deptIds,String deptName,int start,int limit);
	/**
	 * 
	 * <p>
	 * 统计条数--根据父部门id查询该部门下全部叶子节点的部门名称模糊匹配数据的<br />
	 * </p>
	 * @author bxj
	 * @version 0.2 2012-7-10
	 * @param deptId
	 * @return
	 * List<Department>
	 */
	int countAllleafByParentIdAndLikeDeptName(List<String> deptIds,String deptName);
	/**
	 * 
	 * <p>
	 * 根据ids查询部门信息<br />
	 * </p>
	 * @author zhangbin
	 * @version 0.2 2012-8-07
	 * @param deptIds
	 * @return
	 * List<Department>
	 */
	List<Department> getAllDepartmentsByIds(List<String> deptIds);
	/**
	 * <p>
	 * Description:通过部门的ID查询部门的权限，此方法用于散客新增的开单组权限<br />
	 * </p>
	 * @author 李国文
	 * @version 0.1 2012-11-13
	 * @param standardCode
	 * @param start
	 * @param limit
	 * @return
	 * List<Department>
	 */
	List<Department> getWaybillRightsDepartmentsByDeptId(String deptId, int start,int limit);
	/**
	 * <p>
	 * Description:统计 部门Id查询出部门的权限 的总数，提供给散客管理开单组<br />
	 * </p>
	 * @author 李国文
	 * @version 0.1 2012-11-13
	 * @param deptId
	 * @return
	 * int
	 */
	int countAllDepartmentsByDeptId(String deptId);
	/**
	 * <p>
	 * Description:通过部门的名字查询部门的权限，此方法用于散客新增的开单组权限<br />
	 * </p>
	 * @author 李国文
	 * @version 0.1 2012-11-13
	 * @param deptName
	 * @param start
	 * @param limit
	 * @return
	 * List<Department>
	 */
	List<Department> getWaybillRightsDepartmentsByDeptName(String deptId, String deptName, int start, int limit);
	/**
	 * <p>
	 * Description:统计 部门名字查询出部门的权限 的总数，提供给散客管理开单组<br />
	 * </p>
	 * @author 李国文
	 * @version 0.1 2012-11-13
	 * @param deptName
	 * @param deptId
	 * @return
	 * int
	 */
	int countAllDepartmentsByDeptName(String deptId, String deptName);
	
	/**
	 * Description:查询公司所有部门<br />
	 * @version 0.1 2013-5-9
	 * @param start
	 * @param limit
	 * @return List<Department>
	 */
	List<Department> getAllDepartments(String deptName,int start,int limit);
	/**
	 * 
	 * @Title: getAllSignCompanys
	 *  <p>
	 * @Description: 查询所有合同签署公司（合同子公司）<br />
	 * </p>
	 * @author 唐亮
	 * @version 0.1 2013-11-16
	 * @return List<Department>
	 * @throws
	 */
	List<String> getAllSignCompanys(String companyName,int start,int limit);
	
	/**
	 * Description:查询公司所有部门<br />
	 * @version 0.1 2013-5-9
	 * @param start
	 * @param limit
	 * @return List<Department>
	 */
	int countAllDepartments(String deptName);
	/**
	 * Description:查询所有公司<br />
	 * @version 0.1 2013-5-9
	 * @param start
	 * @param limit
	 * @return List<Department>
	 */
	int countAllSignCompanys(String companyName);

	/**
	 * Description:增加校验是否有其子节点的<br />
	 * @version 0.1 2013-7-3 9:00
	 * @param deptId 当前校验部门ID
	 * @param deptIds 所有有权限部门ID
	 * @return Integer
	 */
	Integer checkIsHaveChildNode(String deptId, List<String> deptIds);
	
	/**
	 * Description:得到当前登录用户可分配，选择用户已拥有父节点是展开节点的部门的ID<br />
	 * @version 0.1 2013-7-3 10:00
	 * @param currentUserId 登录用户
	 * @param userId 选择用户
	 * @param parentDeptId 展开节点
	 * @return List<String>
	 */
	List<String> getHavedDepartmentId(String currentUserId, String userId,
			String parentDeptId);
	
	/**
	 * Description:根据条件删除<br />
	 * @version 0.1 2013-7-3 10:00
	 * @param userId 用户ID
	 * @param deptId 部门ID
	 */
	void deleteUserDeptAuth(String userId, String deptId);

	/**
	 * Description:根据条件批量删除<br />
	 * @version 0.1 2013-7-18 10:00
	 * @param userId 用户ID
	 * @param deptId 部门ID集合
	 */
	void deleteUserDeptAuthAll(String userId, List<String> deptIds);

	/**
	 * 
	 * <p>
	 * 查询快递组织映射的营业部<br />
	 * </p>
	 * @author 043260
	 * @version 0.1 2014-1-11
	 * @param userId
	 * @param deptName
	 * @param position
	 * @param start
	 * @param limit
	 * @return
	 * List<Department>
	 */
	List<Department> getAllDeptMappedExpress(String userId, String deptName,
			String deptStandardCode, int start, int limit);

	/**
	 * 
	 * <p>
	 * 查询快递组织映射的营业部 计数<br />
	 * </p>
	 * @author 043260
	 * @version 0.1 2014-1-11
	 * @param userId
	 * @param deptName
	 * @param position
	 * @return
	 * int
	 */
	int countAllDeptMappedExpress(String userId, String deptName,
			String deptStandardCode);

	List<Department> getAllDeptMappedExpressForMonitor(String userId,String deptName,
			int start, int limit);

	int countAllDeptMappedExpressForMonitor(String userId,String deptName);

	/**
	 * 
	 * <p>
	 * 针对快递市场营销组，查询所有的快递分部和快递大区
	 * </p>
	 * @author 043260
	 * @version 0.1 2014-1-15
	 * @param deptName
	 * @param start
	 * @param limit
	 * @return
	 * List<Department>
	 */
	List<Department> getAllRegionAndDivision(String deptName, int start,
			int limit);
	/**
	 * 
	 * <p>
	 * 针对快递市场营销组，查询所有的快递分部和快递大区
	 * </p>
	 * @author 043260
	 * @version 0.1 2014-1-15
	 * @param deptName
	 * @return
	 * int
	 */
	int countAllRegionAndDivision(String deptName);
	/**
	 * 
	 * <p>
	 * Description:根据下拉列表选择的部门，查找子部门及下级部门Id<br />
	 * </p>
	 * @author 043260
	 * @version 0.1 2014-1-15
	 * @param dep
	 * @param userId
	 * @return
	 * List<String>
	 */
	List<String> getChildDeptIds(String dep, String userId,String deptCode);
}
