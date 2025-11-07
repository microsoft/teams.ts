import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /places/{place-id}': Operation<'/places/{place-id}', 'delete'>;
  'PATCH /places/{place-id}': Operation<'/places/{place-id}', 'patch'>;
  'POST /places': Operation<'/places', 'post'>;
  'GET /places/{place-id}/checkIns': Operation<'/places/{place-id}/checkIns', 'get'>;
  'POST /places/{place-id}/checkIns': Operation<'/places/{place-id}/checkIns', 'post'>;
  'GET /places/{place-id}/checkIns/{checkInClaim-calendarEventId}': Operation<
    '/places/{place-id}/checkIns/{checkInClaim-calendarEventId}',
    'get'
  >;
  'PATCH /places/{place-id}/checkIns/{checkInClaim-calendarEventId}': Operation<
    '/places/{place-id}/checkIns/{checkInClaim-calendarEventId}',
    'patch'
  >;
  'DELETE /places/{place-id}/checkIns/{checkInClaim-calendarEventId}': Operation<
    '/places/{place-id}/checkIns/{checkInClaim-calendarEventId}',
    'delete'
  >;
}

/**
 * `DELETE /places/{place-id}`
 *
 * Delete a place object. You can also use this method to delete the following child object types: building, floor, section, or desk.
 */
export function del(
  params?: IEndpoints['DELETE /places/{place-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /places/{place-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/places/{place-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['place-id'],
    },
    params,
  };
}

/**
 * `PATCH /places/{place-id}`
 *
 * Update the properties of place object that can be a building, floor, section, desk, room, workspace, or roomList. You can identify the place by specifying the id property.
 */
export function update(
  body: IEndpoints['PATCH /places/{place-id}']['body'],
  params?: IEndpoints['PATCH /places/{place-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /places/{place-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/places/{place-id}',
    paramDefs: {
      path: ['place-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /places`
 *
 * Create a new place object. You can also use this method to create the following child object types: building, floor, section, room, workspace, or desk.
 */
export function create(
  body: IEndpoints['POST /places']['body']
): EndpointRequest<IEndpoints['POST /places']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/places',
    body,
  };
}

export const checkIns = {
  /**
   * `GET /places/{place-id}/checkIns`
   *
   * Read the properties and relationships of a checkInClaim object. This API provides the check-in status for a specific place, such as a desk, room, or workspace, associated with a particular reservation.
   */
  list: function list(
    params?: IEndpoints['GET /places/{place-id}/checkIns']['parameters']
  ): EndpointRequest<IEndpoints['GET /places/{place-id}/checkIns']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/places/{place-id}/checkIns',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['place-id'],
      },
      params,
    };
  },
  /**
   * `POST /places/{place-id}/checkIns`
   *
   * Create a new checkInClaim object to record the check-in status for a specific place, such as a desk, room, or workspace, associated with a specific calendar reservation. This check-in confirms that the reserved space is in use and prevents automatic release if auto-release policies are configured for that place.
   */
  create: function create(
    body: IEndpoints['POST /places/{place-id}/checkIns']['body'],
    params?: IEndpoints['POST /places/{place-id}/checkIns']['parameters']
  ): EndpointRequest<IEndpoints['POST /places/{place-id}/checkIns']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/places/{place-id}/checkIns',
      paramDefs: {
        path: ['place-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /places/{place-id}/checkIns/{checkInClaim-calendarEventId}`
   *
   * Read the properties and relationships of a checkInClaim object. This API provides the check-in status for a specific place, such as a desk, room, or workspace, associated with a particular reservation.
   */
  get: function get(
    params?: IEndpoints['GET /places/{place-id}/checkIns/{checkInClaim-calendarEventId}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /places/{place-id}/checkIns/{checkInClaim-calendarEventId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/places/{place-id}/checkIns/{checkInClaim-calendarEventId}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['place-id', 'checkInClaim-calendarEventId'],
      },
      params,
    };
  },
  /**
   * `PATCH /places/{place-id}/checkIns/{checkInClaim-calendarEventId}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /places/{place-id}/checkIns/{checkInClaim-calendarEventId}']['body'],
    params?: IEndpoints['PATCH /places/{place-id}/checkIns/{checkInClaim-calendarEventId}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /places/{place-id}/checkIns/{checkInClaim-calendarEventId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/places/{place-id}/checkIns/{checkInClaim-calendarEventId}',
      paramDefs: {
        path: ['place-id', 'checkInClaim-calendarEventId'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /places/{place-id}/checkIns/{checkInClaim-calendarEventId}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /places/{place-id}/checkIns/{checkInClaim-calendarEventId}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /places/{place-id}/checkIns/{checkInClaim-calendarEventId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/places/{place-id}/checkIns/{checkInClaim-calendarEventId}',
      paramDefs: {
        header: ['If-Match'],
        path: ['place-id', 'checkInClaim-calendarEventId'],
      },
      params,
    };
  },
};
