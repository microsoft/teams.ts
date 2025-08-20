import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/synchronization/jobs/validateCredentials': Operation<
    '/applications/{application-id}/synchronization/jobs/validateCredentials',
    'post'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/synchronization/jobs/validateCredentials`
 *
 */
export function create$1(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs/validateCredentials',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials`
 *
 * Validate that the credentials are valid in the tenant.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
