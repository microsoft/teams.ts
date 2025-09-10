export * as allMembers from './allMembers';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/primaryChannel': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/primaryChannel': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/archive': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/archive',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/completeMigration',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/provisionEmail',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/removeEmail',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/primaryChannel/unarchive': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/unarchive',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/primaryChannel`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel']['response']> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/primaryChannel',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel`
 *
 * The general channel for the team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/primaryChannel`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel']['response']> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/primaryChannel',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const archive = {
  /**
   * `POST /me/joinedTeams/{team-id}/primaryChannel/archive`
   *
   * Archive a channel in a team. When a channel is archived, users can&#x27;t send new messages or react to existing messages in the channel, edit the channel settings, or make other changes to the channel. You can delete an archived channel or add and remove members from it. If you archive a team, its channels are also archived. Archiving is an asynchronous operation; a channel is archived after the asynchronous archiving operation completes successfully, which might occur after the response returns. A channel without an owner or that belongs to a group that has no owner, can&#x27;t be archived. To restore a channel from its archived state, use the channel: unarchive method. A channel can’t be archived or unarchived if its team is archived.
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/archive']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/archive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/archive']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/archive',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const completeMigration = {
  /**
   * `POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration`
   *
   * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/completeMigration',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};

export const provisionEmail = {
  /**
   * `POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail`
   *
   * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a channel, use the removeEmail method.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/provisionEmail']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/provisionEmail',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};

export const removeEmail = {
  /**
   * `POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail`
   *
   * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/removeEmail']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/removeEmail',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};

export const unarchive = {
  /**
   * `POST /me/joinedTeams/{team-id}/primaryChannel/unarchive`
   *
   * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/unarchive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/unarchive']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/primaryChannel/unarchive',
      paramDefs: {
        path: ['team-id'],
      },
      params,
    };
  },
};
