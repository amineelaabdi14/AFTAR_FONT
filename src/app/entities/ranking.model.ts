export class Ranking {
  constructor(
    public member_number?: number,
    public member_fullName?: string,
    public rank?: number,
    public score?: number
  ) {
    this.member_number = member_number;
    this.member_fullName = member_fullName;
    this.rank = rank;
    this.score = score;
  }
}
