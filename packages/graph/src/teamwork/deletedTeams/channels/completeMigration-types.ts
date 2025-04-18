// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
   */
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration',
    'post'
  >;
}
