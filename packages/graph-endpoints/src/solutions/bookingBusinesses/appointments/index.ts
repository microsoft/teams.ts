import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments',
    'get'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments',
    'post'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel',
    'post'
  >;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 * Delete a bookingAppointment in the specified bookingBusiness.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments`
 *
 * Get a list of bookingAppointment objects for the specified bookingBusiness.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['response']
> {
  return {
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments',
    paramDefs: {
      path: ['bookingBusiness-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 * Get the properties and relationships of a bookingAppointment object in the specified bookingBusiness. The start and end properties are always returned in UTC.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: {
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 * Update the properties of a bookingAppointment object in the specified bookingBusiness.
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: {
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments`
 *
 * Create a new bookingAppointment for the specified bookingBusiness.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['response']
> {
  return {
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments',
    paramDefs: {
      path: ['bookingBusiness-id'],
    },
    params,
    body,
  };
}

export const cancel = {
  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel`
   *
   * Cancel the specified bookingAppointment in the specified bookingBusiness and send a message to the involved customer and staff members.
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}/cancel',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingAppointment-id'],
      },
      params,
      body,
    };
  },
};
