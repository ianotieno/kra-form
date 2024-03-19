export class ReceiptData  {

    public constructor(init?: Partial<ReceiptData >) {
        Object.assign(this, init);
    }

  custTin: string| undefined;
  custMblNo: string| undefined;
  rptNo: number| undefined;
  trdeNm: string| undefined;
  adrs: string| undefined;
  topMsg: string| undefined;
  btmMsg: string| undefined;
  prchrAcptcYn: string| undefined;

}