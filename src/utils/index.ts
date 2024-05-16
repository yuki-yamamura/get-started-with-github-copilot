export function calculateDaysBetweenDates(start: Date, end: Date): number {
  const diff: number = end.getTime() - start.getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function sayHello(name: string): string {
  return `Hello, ${name}!`;
}

export function combineFirstAndLastCharacters(arg: string): string {
  if (arg.length < 2) {
    throw new Error('Argument must be at least 2 characters long');
  }

  return arg.charAt(0) + arg.charAt(-1);
}
