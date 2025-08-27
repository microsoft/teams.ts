import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoleTemplates/getByIds': Operation<'/directoryRoleTemplates/getByIds', 'post'>;
}

/**
 * `POST /directoryRoleTemplates/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /directoryRoleTemplates/getByIds']['body'],
  params?: IEndpoints['POST /directoryRoleTemplates/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /directoryRoleTemplates/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoleTemplates/getByIds',
    paramDefs: [],
    params,
    body,
  };
}
