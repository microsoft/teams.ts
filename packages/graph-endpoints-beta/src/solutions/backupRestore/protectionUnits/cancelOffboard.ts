import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard': Operation<
    '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard',
    'post'
  >;
}

/**
 * `POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard`
 *
 * Cancel offboard for a protectionUnitBase.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}/cancelOffboard',
    paramDefs: [{ name: 'protectionUnitBase-id', in: 'path' }],
    params,
    body,
  };
}
