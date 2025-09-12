import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'team-id', 'timeCard-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards`
 *
 * The time cards in the schedule.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards',
    paramDefs: {
      path: ['user-id', 'team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * The time cards in the schedule.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['user-id', 'team-id', 'timeCard-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['user-id', 'team-id', 'timeCard-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards',
    paramDefs: {
      path: ['user-id', 'team-id'],
    },
    params,
    body,
  };
}

export const clockIn = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn`
   *
   * Clock in to start a timeCard.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn',
      paramDefs: {
        path: ['user-id', 'team-id'],
      },
      params,
      body,
    };
  },
};

export const clockOut = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
      paramDefs: {
        path: ['user-id', 'team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const confirm = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm`
   *
   * Confirm a timeCard.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
      paramDefs: {
        path: ['user-id', 'team-id', 'timeCard-id'],
      },
      params,
    };
  },
};

export const endBreak = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
      paramDefs: {
        path: ['user-id', 'team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const startBreak = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
      paramDefs: {
        path: ['user-id', 'team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};
