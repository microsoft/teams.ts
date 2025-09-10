import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/triggers/retentionEvents/{retentionEvent-id}': Operation<
    '/security/triggers/retentionEvents/{retentionEvent-id}',
    'delete'
  >;
  'GET /security/triggers/retentionEvents': Operation<'/security/triggers/retentionEvents', 'get'>;
  'GET /security/triggers/retentionEvents/{retentionEvent-id}': Operation<
    '/security/triggers/retentionEvents/{retentionEvent-id}',
    'get'
  >;
  'PATCH /security/triggers/retentionEvents/{retentionEvent-id}': Operation<
    '/security/triggers/retentionEvents/{retentionEvent-id}',
    'patch'
  >;
  'POST /security/triggers/retentionEvents': Operation<
    '/security/triggers/retentionEvents',
    'post'
  >;
  'GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType': Operation<
    '/security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType',
    'get'
  >;
}

/**
 * `DELETE /security/triggers/retentionEvents/{retentionEvent-id}`
 *
 * Delete a retentionEvent object.
 */
export function del(
  params?: IEndpoints['DELETE /security/triggers/retentionEvents/{retentionEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/triggers/retentionEvents/{retentionEvent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/triggers/retentionEvents/{retentionEvent-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['retentionEvent-id'],
    },
    params,
  };
}

/**
 * `GET /security/triggers/retentionEvents`
 *
 * Get a list of the retentionEvent objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/triggers/retentionEvents']['parameters']
): EndpointRequest<IEndpoints['GET /security/triggers/retentionEvents']['response']> {
  return {
    method: 'get',
    path: '/security/triggers/retentionEvents',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/triggers/retentionEvents/{retentionEvent-id}`
 *
 * Read the properties and relationships of a retentionEvent object.
 */
export function get(
  params?: IEndpoints['GET /security/triggers/retentionEvents/{retentionEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/triggers/retentionEvents/{retentionEvent-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/triggers/retentionEvents/{retentionEvent-id}',
    paramDefs: {
      path: ['retentionEvent-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/triggers/retentionEvents/{retentionEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/triggers/retentionEvents/{retentionEvent-id}']['body'],
  params?: IEndpoints['PATCH /security/triggers/retentionEvents/{retentionEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/triggers/retentionEvents/{retentionEvent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/triggers/retentionEvents/{retentionEvent-id}',
    paramDefs: {
      path: ['retentionEvent-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/triggers/retentionEvents`
 *
 * Create a new retentionEvent object.
 */
export function create(
  body: IEndpoints['POST /security/triggers/retentionEvents']['body']
): EndpointRequest<IEndpoints['POST /security/triggers/retentionEvents']['response']> {
  return {
    method: 'post',
    path: '/security/triggers/retentionEvents',
    body,
  };
}

export const retentionEventType = {
  /**
   * `GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType`
   *
   * Specifies the event that will start the retention period for labels that use this event type when an event is created.
   */
  get: function get(
    params?: IEndpoints['GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType']['response']
  > {
    return {
      method: 'get',
      path: '/security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionEvent-id'],
      },
      params,
    };
  },
};
