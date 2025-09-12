import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/solutions/workingTimeSchedule': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule',
    'delete'
  >;
  'GET /users/{user-id}/solutions/workingTimeSchedule': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule',
    'get'
  >;
  'PATCH /users/{user-id}/solutions/workingTimeSchedule': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule',
    'patch'
  >;
  'POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule/endWorkingTime',
    'post'
  >;
  'POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule/startWorkingTime',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/solutions/workingTimeSchedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/solutions/workingTimeSchedule']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/solutions/workingTimeSchedule',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/solutions/workingTimeSchedule`
 *
 * The working time schedule entity associated with the solution.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/solutions/workingTimeSchedule']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/solutions/workingTimeSchedule',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/solutions/workingTimeSchedule`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/solutions/workingTimeSchedule']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/solutions/workingTimeSchedule']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/solutions/workingTimeSchedule',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const endWorkingTime = {
  /**
   * `POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime`
   *
   * Trigger the policies associated with the end of working hours for a specific user.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/endWorkingTime']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/solutions/workingTimeSchedule/endWorkingTime',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const startWorkingTime = {
  /**
   * `POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime`
   *
   * Trigger the policies associated with the start of working hours for a specific user.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/solutions/workingTimeSchedule/startWorkingTime']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/solutions/workingTimeSchedule/startWorkingTime',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};
