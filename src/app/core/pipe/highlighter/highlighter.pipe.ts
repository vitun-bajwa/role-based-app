import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter',
})
export class HighlighterPipe implements PipeTransform {
  transform(value: string, args: string): unknown {
    if (!args) return value;
    const re = new RegExp(args, 'igm');
    const match: any = value.match(re);

    value = value.replace(
      re,
      `<span class="highlighted-text">${match?.[0]}</span>`
    );
    return value;
  }
}
