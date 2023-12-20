export class Member {
  constructor(
    public num?: number,
    public full_name?: string,
    public accession_date?: string,
    public nationality?: string,
    public identity_document_type?: string,
    public identity_number?: string
  ) {
    this.num = num;
    this.full_name = full_name;
    this.accession_date = accession_date;
    this.nationality = nationality;
    this.identity_document_type = identity_document_type;
    this.identity_number = identity_number;
  }
}
