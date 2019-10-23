import request from './index'

export function GetCategorys() {
  return request({
    url: '/price/list',
    method: 'POST'
  })
}
export function GetTable(id) {
  return request({
    url: '/price/detail',
    method: 'POST',
    data: {
      gplId: id
    }
  })
}