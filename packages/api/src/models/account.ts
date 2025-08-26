import { MembershipSource } from './membership-source';
import { Role } from './role';

export type Account<P = any> = {
  readonly id: string;
  readonly aadObjectId?: string;
  readonly role: Role;
  readonly name: string;
  readonly properties?: P;
  readonly membershipSources?: MembershipSource[];
};

export type ConversationAccount = {
  readonly id: string;
  readonly tenantId?: string;
  readonly conversationType: 'personal' | 'groupChat' | Omit<string, 'personal' | 'groupChat'>;
  readonly name?: string;
  readonly isGroup?: boolean;
};
