// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  'POST /teams/{team-id}/channels/{channel-id}/members/add': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/add',
    'post'
  >;
}
