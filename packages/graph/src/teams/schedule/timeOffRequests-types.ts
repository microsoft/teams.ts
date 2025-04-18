// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Delete a timeOffRequest object.
   */
  'DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  /**
   * Retrieve a list of timeOffRequest objects in the team.
   */
  'GET /teams/{team-id}/schedule/timeOffRequests': Operation<
    '/teams/{team-id}/schedule/timeOffRequests',
    'get'
  >;
  /**
   * Retrieve the properties and relationships of a timeoffrequest object.
   */
  'GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  /**
   */
  'PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  /**
   */
  'POST /teams/{team-id}/schedule/timeOffRequests': Operation<
    '/teams/{team-id}/schedule/timeOffRequests',
    'post'
  >;
}
