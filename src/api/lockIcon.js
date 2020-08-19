import request from "utils/request";

export const lockIconPage = params => {
  return request({
    url: "/lock/lock/icon/page",
    method: "post",
    data: {
      direction: params.direction,
      pageNum: params.pageNum,
      pageSize: params.pageSize,
      sortBy: params.sortBy
    }
  });
};

export const lockIconAdd = params => {
  return request({
    url: "/lock/lock/icon/add",
    method: "put",
    data: {
      name: params.name,
      uri: params.uri,
      isDefault: params.isDefault,
      creationDate: params.creationDate,
      lastModifiedDate: params.creationDate
    }
  });
};

export const lockIconUpdate = params => {
  return request({
    url: "/lock/lock/icon/update",
    method: "put",
    data: {
      id: params.id,
      name: params.name,
      uri: params.uri,
      isDefault: params.isDefault,
      creationDate: params.creationDate,
      lastModifiedDate: params.creationDate
    }
  });
};

export const lockIconDelete = id => {
  return request({
    url: "/lock/lock/icon/delete/" + id,
    method: "delete"
  });
};
