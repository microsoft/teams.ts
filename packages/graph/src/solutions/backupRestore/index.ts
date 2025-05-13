import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { DriveInclusionRulesClient } from './driveInclusionRules';
import { DriveProtectionUnitsClient } from './driveProtectionUnits';
import { EnableClient } from './enable';
import { ExchangeProtectionPoliciesClient } from './exchangeProtectionPolicies';
import { ExchangeRestoreSessionsClient } from './exchangeRestoreSessions';
import { MailboxInclusionRulesClient } from './mailboxInclusionRules';
import { MailboxProtectionUnitsClient } from './mailboxProtectionUnits';
import { OneDriveForBusinessProtectionPoliciesClient } from './oneDriveForBusinessProtectionPolicies';
import { OneDriveForBusinessRestoreSessionsClient } from './oneDriveForBusinessRestoreSessions';
import { ProtectionPoliciesClient } from './protectionPolicies';
import { ProtectionUnitsClient } from './protectionUnits';
import { RestorePointsClient } from './restorePoints';
import { RestoreSessionsClient } from './restoreSessions';
import { ServiceAppsClient } from './serviceApps';
import { SharePointProtectionPoliciesClient } from './sharePointProtectionPolicies';
import { SharePointRestoreSessionsClient } from './sharePointRestoreSessions';
import { SiteInclusionRulesClient } from './siteInclusionRules';
import { SiteProtectionUnitsClient } from './siteProtectionUnits';

/**
 * /solutions/backupRestore
 * Provides operations to manage the backupRestore property of the microsoft.graph.solutionsRoot entity.
 */
export class BackupRestoreClient {
  protected baseUrl = '/solutions/backupRestore';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/solutions/backupRestore/driveInclusionRules`
   *
   * Provides operations to manage the driveInclusionRules property of the microsoft.graph.backupRestoreRoot entity.
   */
  get driveInclusionRules() {
    return new DriveInclusionRulesClient(this.http);
  }

  /**
   * `/solutions/backupRestore/driveProtectionUnits`
   *
   * Provides operations to manage the driveProtectionUnits property of the microsoft.graph.backupRestoreRoot entity.
   */
  get driveProtectionUnits() {
    return new DriveProtectionUnitsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/enable`
   *
   * Provides operations to call the enable method.
   */
  get enable() {
    return new EnableClient(this.http);
  }

  /**
   * `/solutions/backupRestore/exchangeProtectionPolicies`
   *
   * Provides operations to manage the exchangeProtectionPolicies property of the microsoft.graph.backupRestoreRoot entity.
   */
  get exchangeProtectionPolicies() {
    return new ExchangeProtectionPoliciesClient(this.http);
  }

  /**
   * `/solutions/backupRestore/exchangeRestoreSessions`
   *
   * Provides operations to manage the exchangeRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
   */
  get exchangeRestoreSessions() {
    return new ExchangeRestoreSessionsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/mailboxInclusionRules`
   *
   * Provides operations to manage the mailboxInclusionRules property of the microsoft.graph.backupRestoreRoot entity.
   */
  get mailboxInclusionRules() {
    return new MailboxInclusionRulesClient(this.http);
  }

  /**
   * `/solutions/backupRestore/mailboxProtectionUnits`
   *
   * Provides operations to manage the mailboxProtectionUnits property of the microsoft.graph.backupRestoreRoot entity.
   */
  get mailboxProtectionUnits() {
    return new MailboxProtectionUnitsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/oneDriveForBusinessProtectionPolicies`
   *
   * Provides operations to manage the oneDriveForBusinessProtectionPolicies property of the microsoft.graph.backupRestoreRoot entity.
   */
  get oneDriveForBusinessProtectionPolicies() {
    return new OneDriveForBusinessProtectionPoliciesClient(this.http);
  }

  /**
   * `/solutions/backupRestore/oneDriveForBusinessRestoreSessions`
   *
   * Provides operations to manage the oneDriveForBusinessRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
   */
  get oneDriveForBusinessRestoreSessions() {
    return new OneDriveForBusinessRestoreSessionsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/protectionPolicies`
   *
   * Provides operations to manage the protectionPolicies property of the microsoft.graph.backupRestoreRoot entity.
   */
  get protectionPolicies() {
    return new ProtectionPoliciesClient(this.http);
  }

  /**
   * `/solutions/backupRestore/protectionUnits`
   *
   * Provides operations to manage the protectionUnits property of the microsoft.graph.backupRestoreRoot entity.
   */
  get protectionUnits() {
    return new ProtectionUnitsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/restorePoints`
   *
   * Provides operations to manage the restorePoints property of the microsoft.graph.backupRestoreRoot entity.
   */
  get restorePoints() {
    return new RestorePointsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/restoreSessions`
   *
   * Provides operations to manage the restoreSessions property of the microsoft.graph.backupRestoreRoot entity.
   */
  get restoreSessions() {
    return new RestoreSessionsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/serviceApps`
   *
   * Provides operations to manage the serviceApps property of the microsoft.graph.backupRestoreRoot entity.
   */
  get serviceApps() {
    return new ServiceAppsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/sharePointProtectionPolicies`
   *
   * Provides operations to manage the sharePointProtectionPolicies property of the microsoft.graph.backupRestoreRoot entity.
   */
  get sharePointProtectionPolicies() {
    return new SharePointProtectionPoliciesClient(this.http);
  }

  /**
   * `/solutions/backupRestore/sharePointRestoreSessions`
   *
   * Provides operations to manage the sharePointRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
   */
  get sharePointRestoreSessions() {
    return new SharePointRestoreSessionsClient(this.http);
  }

  /**
   * `/solutions/backupRestore/siteInclusionRules`
   *
   * Provides operations to manage the siteInclusionRules property of the microsoft.graph.backupRestoreRoot entity.
   */
  get siteInclusionRules() {
    return new SiteInclusionRulesClient(this.http);
  }

  /**
   * `/solutions/backupRestore/siteProtectionUnits`
   *
   * Provides operations to manage the siteProtectionUnits property of the microsoft.graph.backupRestoreRoot entity.
   */
  get siteProtectionUnits() {
    return new SiteProtectionUnitsClient(this.http);
  }

  /**
   * `DELETE /solutions/backupRestore`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore', [{ name: 'If-Match', in: 'header' }], {
      ...(params || {}),
    });

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /solutions/backupRestore']['response']);
  }

  /**
   * `GET /solutions/backupRestore`
   *
   * Get the serviceStatus of the Microsoft 365 Backup Storage service in a tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /solutions/backupRestore']['response']);
  }

  /**
   * `PATCH /solutions/backupRestore`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /solutions/backupRestore']['response']);
  }
}
