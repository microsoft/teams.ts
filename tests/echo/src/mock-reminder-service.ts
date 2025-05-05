export class MockReminderService<T> {
  private queue: [T, NodeJS.Timeout][] = [];

  addReminder(notification: T, callback: (arg: T) => Promise<void>, reminderInMs: number) {
    const timeout = setTimeout(() => {
      callback(notification).catch(console.error);
      this.queue = this.queue.filter(([n]) => n !== notification);
    }, reminderInMs);
    this.queue.push([notification, timeout]);
  }

  clearReminders() {
    this.queue = [];
  }
}