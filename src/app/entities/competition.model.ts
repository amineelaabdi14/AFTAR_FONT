export class Competition {
  constructor(
    public code?: string,
    public date?: string,
    public startTime?: string,
    public endTime?: string,
    public numberOfParticipants?: number,
    public location?: string
  ) {
    this.code = code;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.numberOfParticipants = numberOfParticipants;
    this.location = location;
  }
}
