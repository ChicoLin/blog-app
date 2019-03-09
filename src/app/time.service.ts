import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TimeService {
  display(dateMs: number): string {
    const now = Date.now();
    const diff = now - dateMs;
    return this.convertDiffToString(diff);
  }

  private convertDiffToString(diffMs: number) {
    const diffDate = new Date(diffMs);
    if (diffDate.getUTCFullYear() > 1970) {
      return `${diffDate.getUTCFullYear() - 1970}年前`;
    } else if (diffDate.getUTCMonth() > 0) {
      return `${diffDate.getUTCMonth()}月前`;
    } else if (diffDate.getUTCDate() > 1) {  // Substract by one because date
                                             // starts with 1 instead of 0.
      return `${diffDate.getUTCDate() - 1}天前`;
    } else if (diffDate.getUTCHours() > 0) {
      return `${diffDate.getUTCHours()}小时前`;
    } else if (diffDate.getUTCMinutes() > 0) {
      return `${diffDate.getUTCMinutes()}分钟前`;
    } else if (diffDate.getUTCSeconds() > 0) {
      return `${diffDate.getUTCSeconds()}秒前`;
    } else {
      return '刚刚';
    }
  }

  yearMonthDay(dateMs: number, connection = '-'): string {
    const date = new Date(dateMs);
    return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()].join(
        connection);
  }

  allDetails(dateMs: number, connection = '-'): string {
    const date = new Date(dateMs);
    return [
      date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
      date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(),
      date.getUTCMilliseconds()
    ].join(connection);
  }
}
