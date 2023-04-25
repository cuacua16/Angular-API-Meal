import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText',
})
export class LimitTextPipe implements PipeTransform {
  transform(value?: string, limit?: number): unknown {
    if (!value) return null;
    let len = limit || 160;
    if (value.length < len) return value;
    return value.substring(0, len) + '...';
  }
}
