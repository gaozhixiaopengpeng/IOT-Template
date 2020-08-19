/*
 * @Author: hua
 * @Date: 2020-04-22 16:23:36
 * @description:支付接口
 * @LastEditors: hua
 * @LastEditTime: 2020-04-26 13:45:38
 */

import request from "../utils/request";
import Config from "settings";

/**
 * 分页查询支付配置信息
 *
 * @param Number pageNumber
 * @param Number pageSize
 * @param String orderBy
 * @param String sortBy
 */
export const adyenConfigurationList = (
  pageNumber,
  pageSize,
  orderBy,
  sortBy
) => {
  return request({
    url: `/payment/adyenConfiguration/list/${Config.projectCode}`,
    method: "post",
    data: { body: { pageNumber, pageSize, orderBy, sortBy } }
  });
};

/**
 * 保存或更新菜单
 *
 * @param Number id
 * @param String xApiKey
 * @param String merchantAccount
 * @param String cardPublicKey
 * @param String apiUrlLive
 * @param Number environment 0 test 1 live
 * @param Number isActive
 */
export function adyenConfigurationSaveOrUpdate(
  id,
  xxApiKey,
  merchantAccount,
  cardPublicKey,
  apiUrlLive,
  environment,
  isActive
) {
  return request({
    url: `/payment/adyenConfiguration/saveOrUpdate/${Config.projectCode}`,
    method: "post",
    data: {
      body:
        id == 0
          ? {
              xxApiKey,
              merchantAccount,
              cardPublicKey,
              apiUrlLive,
              environment,
              isActive
            }
          : {
              id,
              xxApiKey,
              merchantAccount,
              cardPublicKey,
              apiUrlLive,
              environment,
              isActive
            }
    }
  });
}
