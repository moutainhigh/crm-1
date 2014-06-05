package com.deppon.crm.module.scheduler.server.job;

import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

import com.deppon.crm.module.marketing.server.manager.IBusinessOpportunityManager;
import com.deppon.crm.module.marketing.server.manager.impl.BusinessOpportunityManager;
import com.deppon.foss.framework.server.components.jobgrid.GridJob;

public class BusinessOpportunityToStepDeliverJob extends GridJob {
	private IBusinessOpportunityManager businessOpportunityManager;

	@Override
	protected void doExecute(JobExecutionContext context)
			throws JobExecutionException {
		businessOpportunityManager = getBean("businessOpportunityManager",
				BusinessOpportunityManager.class);
		Log logger = LogFactory
				.getLog(BusinessOpportunityToStepDeliverJob.class);
		logger.info("BusinessOpportunityToStepDeliverJob_开始时间：" + new Date());
		businessOpportunityManager.execBusinessOpportunityToStepDeliver();
		logger.info("BusinessOpportunityToStepDeliverJob_结束时间：" + new Date());
	}
}
