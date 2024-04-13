import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHoursAndMinutes',
  standalone: true
})
export class MinutesToHoursAndMinutesPipe implements PipeTransform {

  transform(duration: number, ...args: unknown[]): string {
    if (!duration) return '';
    const hour = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);
    return `${hour}h ${minutes}m`
  }

}
