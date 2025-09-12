import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/solutions/workingTimeSchedule': Operation<
    '/me/solutions/workingTimeSchedule',
    'delete'
  >;
  'GET /me/solutions/workingTimeSchedule': Operation<'/me/solutions/workingTimeSchedule', 'get'>;
  'PATCH /me/solutions/workingTimeSchedule': Operation<
    '/me/solutions/workingTimeSchedule',
    'patch'
  >;
  'POST /me/solutions/workingTimeSchedule/endWorkingTime': Operation<
    '/me/solutions/workingTimeSchedule/endWorkingTime',
    'post'
  >;
  'POST /me/solutions/workingTimeSchedule/startWorkingTime': Operation<
    '/me/solutions/workingTimeSchedule/startWorkingTime',
    'post'
  >;
}

/**
 * `DELETE /me/solutions/workingTimeSchedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/solutions/workingTimeSchedule']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/solutions/workingTimeSchedule',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/solutions/workingTimeSchedule`
 *
 * The working time schedule entity associated with the solution.
 */
export function get(
  params?: IEndpoints['GET /me/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['GET /me/solutions/workingTimeSchedule']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/solutions/workingTimeSchedule',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/solutions/workingTimeSchedule`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/solutions/workingTimeSchedule']['body']
): EndpointRequest<IEndpoints['PATCH /me/solutions/workingTimeSchedule']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/solutions/workingTimeSchedule',
    body,
  };
}

export const endWorkingTime = {
  /**
   * `POST /me/solutions/workingTimeSchedule/endWorkingTime`
   *
   * Trigger the policies associated with the end of working hours for a specific user.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/solutions/workingTimeSchedule/endWorkingTime']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/solutions/workingTimeSchedule/endWorkingTime',
    };
  },
};

export const startWorkingTime = {
  /**
   * `POST /me/solutions/workingTimeSchedule/startWorkingTime`
   *
   * Trigger the policies associated with the start of working hours for a specific user.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/solutions/workingTimeSchedule/startWorkingTime']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/solutions/workingTimeSchedule/startWorkingTime',
    };
  },
};
