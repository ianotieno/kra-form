export class ItemData   {

    public constructor(init?: Partial<ItemData  >) {
        Object.assign(this, init);
    }

itemSeq: number | undefined;
  itemCd: string| undefined;
  itemClsCd: string| undefined;
  itemNm: string| undefined;
  bcd: string| undefined;
  pkgUnitCd: string| undefined;
  pkg: number| undefined;
  qtyUnitCd: string| undefined;
  qty: number| undefined;
  prc: number| undefined;
  splyAmt: number| undefined;
  dcRt: number| undefined;
  dcAmt: number| undefined;
  isrccCd: string| undefined;
  isrccNm: string| undefined;
  isrcRt: string| undefined;
  isrcAmt: string| undefined;
  taxTyCd: string| undefined;
  taxblAmt: number| undefined;
  taxAmt: number| undefined;
  totAmt: number| undefined;
  itemExprDt: string| undefined;

}