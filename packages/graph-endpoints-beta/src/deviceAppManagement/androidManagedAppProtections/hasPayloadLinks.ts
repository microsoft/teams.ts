import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/androidManagedAppProtections/hasPayloadLinks': Operation<
    '/deviceAppManagement/androidManagedAppProtections/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/androidManagedAppProtections/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/androidManagedAppProtections/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
