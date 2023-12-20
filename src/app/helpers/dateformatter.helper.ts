export class TextFormatter {
  static formatText(myDate:Date): string {
    const day = myDate.getDate().toString().padStart(2, '0');
    const month = (myDate.getMonth() + 1).toString().padStart(2, '0'); // Note: January is 0 in JavaScript Date
    const year = myDate.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }
}