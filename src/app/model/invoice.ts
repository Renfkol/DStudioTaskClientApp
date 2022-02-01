export class Invoice {
  constructor(
    public id:number,
    public processingStatus:ProcessingStatus,
    public sum:number,
    public paymentMethod:PaymentMethod,
    public createUpdateDateTime?:Date
  ) {}
}

export enum ProcessingStatus
{
  New = 1,
  Paid = 2,
  Canceled = 3
}

export enum PaymentMethod
{
  CreditCard = 1,
  DebitCard = 2,
  ElectronicСheck = 3
}
