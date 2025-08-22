import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryObjects/{directoryObject-id}/restore': Operation<
    '/directoryObjects/{directoryObject-id}/restore',
    'post'
  >;
}

/**
  * `POST /directoryObjects/{directoryObject-id}/restore`
  *
  * Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items.  Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- group
- servicePrincipal
  */
export function create(
  body: IEndpoints['POST /directoryObjects/{directoryObject-id}/restore']['body'],
  params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /directoryObjects/{directoryObject-id}/restore']['response']> {
  return {
    method: 'post',
    path: '/directoryObjects/{directoryObject-id}/restore',
    paramDefs: [{ name: 'directoryObject-id', in: 'path' }],
    params,
    body,
  };
}
