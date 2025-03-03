import { Role } from './role';

export interface Account<P = any> {
  readonly id: string;
  readonly aadObjectId?: string;
  readonly role: Role;
  readonly name: string;
  readonly properties?: P;
}

export interface ConversationAccount {
  readonly id: string;
  readonly tenantId?: string;
  readonly conversationType: 'personal' | 'groupChat' | Omit<string, 'personal' | 'groupChat'>;
  readonly name?: string;
  readonly isGroup?: boolean;
}
