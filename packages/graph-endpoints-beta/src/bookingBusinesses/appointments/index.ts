import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/appointments': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments',
    'get'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'patch'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/appointments': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments',
    'post'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel',
    'post'
  >;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
    },
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/appointments`
 *
 * All the appointments of this business. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/appointments']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/appointments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments',
    paramDefs: {
      path: ['bookingBusiness-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 * All the appointments of this business. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: {
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: {
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/appointments`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments',
    paramDefs: {
      path: ['bookingBusiness-id'],
    },
    params,
    body,
  };
}

export const cancel = {
  /**
   * `POST /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel`
   *
   * Cancel the specified bookingAppointment in the specified bookingBusiness, and send a message to the involved customer and staff members.
   */
  create: function create(
    body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel']['body'],
    params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingAppointment-id'],
      },
      params,
      body,
    };
  },
};
