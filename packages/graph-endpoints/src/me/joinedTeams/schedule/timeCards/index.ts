import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeCards': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeCards': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/clockIn',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'timeCard-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/timeCards`
 *
 * The time cards in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeCards']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * The time cards in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['team-id', 'timeCard-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['team-id', 'timeCard-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timeCards`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const clockIn = {
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn`
   *
   * Clock in to start a timeCard.
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/timeCards/clockIn',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const clockOut = {
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const confirm = {
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm`
   *
   * Confirm a timeCard.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
    };
  },
};

export const endBreak = {
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const startBreak = {
  /**
   * `POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};
