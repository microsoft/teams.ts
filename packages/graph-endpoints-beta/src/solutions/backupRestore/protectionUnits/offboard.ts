import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard': Operation<
    '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard',
    'post'
  >;
}

/**
 * `POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard`
 *
 * Offboard a protectionUnitBase.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/offboard',
    paramDefs: [{ name: 'protectionUnitBase-id', in: 'path' }],
    params,
    body,
  };
}
