// package: order
// file: order/order_placed.proto

import * as jspb from "google-protobuf";

export class OrderPlaced extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIdentityId(): string;
  setIdentityId(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getNote(): string;
  setNote(value: string): void;

  getState(): string;
  setState(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  hasSubtotalPrice(): boolean;
  clearSubtotalPrice(): void;
  getSubtotalPrice(): OrderPlaced.Amount | undefined;
  setSubtotalPrice(value?: OrderPlaced.Amount): void;

  hasShippingPrice(): boolean;
  clearShippingPrice(): void;
  getShippingPrice(): OrderPlaced.Amount | undefined;
  setShippingPrice(value?: OrderPlaced.Amount): void;

  hasTotalPrice(): boolean;
  clearTotalPrice(): void;
  getTotalPrice(): OrderPlaced.Amount | undefined;
  setTotalPrice(value?: OrderPlaced.Amount): void;

  hasTaxPrice(): boolean;
  clearTaxPrice(): void;
  getTaxPrice(): OrderPlaced.Amount | undefined;
  setTaxPrice(value?: OrderPlaced.Amount): void;

  clearLineItemsList(): void;
  getLineItemsList(): Array<OrderPlaced.LineItem>;
  setLineItemsList(value: Array<OrderPlaced.LineItem>): void;
  addLineItems(value?: OrderPlaced.LineItem, index?: number): OrderPlaced.LineItem;

  clearFulfillmentsList(): void;
  getFulfillmentsList(): Array<OrderPlaced.Fulfillment>;
  setFulfillmentsList(value: Array<OrderPlaced.Fulfillment>): void;
  addFulfillments(value?: OrderPlaced.Fulfillment, index?: number): OrderPlaced.Fulfillment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderPlaced.AsObject;
  static toObject(includeInstance: boolean, msg: OrderPlaced): OrderPlaced.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderPlaced, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderPlaced;
  static deserializeBinaryFromReader(message: OrderPlaced, reader: jspb.BinaryReader): OrderPlaced;
}

export namespace OrderPlaced {
  export type AsObject = {
    id: string,
    identityId: string,
    tagsList: Array<string>,
    note: string,
    state: string,
    number: number,
    subtotalPrice?: OrderPlaced.Amount.AsObject,
    shippingPrice?: OrderPlaced.Amount.AsObject,
    totalPrice?: OrderPlaced.Amount.AsObject,
    taxPrice?: OrderPlaced.Amount.AsObject,
    lineItemsList: Array<OrderPlaced.LineItem.AsObject>,
    fulfillmentsList: Array<OrderPlaced.Fulfillment.AsObject>,
  }

  export class Amount extends jspb.Message {
    getValue(): number;
    setValue(value: number): void;

    getCurrency(): string;
    setCurrency(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Amount.AsObject;
    static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Amount;
    static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
  }

  export namespace Amount {
    export type AsObject = {
      value: number,
      currency: string,
    }
  }

  export class TaxRate extends jspb.Message {
    getRate(): number;
    setRate(value: number): void;

    getKind(): string;
    setKind(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaxRate.AsObject;
    static toObject(includeInstance: boolean, msg: TaxRate): TaxRate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaxRate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaxRate;
    static deserializeBinaryFromReader(message: TaxRate, reader: jspb.BinaryReader): TaxRate;
  }

  export namespace TaxRate {
    export type AsObject = {
      rate: number,
      kind: string,
    }
  }

  export class ProductInfo extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getSku(): string;
    setSku(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCategory(): string;
    setCategory(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): void;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ProductInfo): ProductInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductInfo;
    static deserializeBinaryFromReader(message: ProductInfo, reader: jspb.BinaryReader): ProductInfo;
  }

  export namespace ProductInfo {
    export type AsObject = {
      id: string,
      sku: string,
      name: string,
      category: string,
      description: string,
      tagsList: Array<string>,
    }
  }

  export class LineItem extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getProductId(): string;
    setProductId(value: string): void;

    getFulfillmentId(): string;
    setFulfillmentId(value: string): void;

    getNumber(): number;
    setNumber(value: number): void;

    hasTaxRate(): boolean;
    clearTaxRate(): void;
    getTaxRate(): OrderPlaced.TaxRate | undefined;
    setTaxRate(value?: OrderPlaced.TaxRate): void;

    getQuantity(): number;
    setQuantity(value: number): void;

    getMultiplicity(): number;
    setMultiplicity(value: number): void;

    hasOriginalPrice(): boolean;
    clearOriginalPrice(): void;
    getOriginalPrice(): OrderPlaced.Amount | undefined;
    setOriginalPrice(value?: OrderPlaced.Amount): void;

    hasOriginalLinePrice(): boolean;
    clearOriginalLinePrice(): void;
    getOriginalLinePrice(): OrderPlaced.Amount | undefined;
    setOriginalLinePrice(value?: OrderPlaced.Amount): void;

    hasFinalPrice(): boolean;
    clearFinalPrice(): void;
    getFinalPrice(): OrderPlaced.Amount | undefined;
    setFinalPrice(value?: OrderPlaced.Amount): void;

    hasFinalLinePrice(): boolean;
    clearFinalLinePrice(): void;
    getFinalLinePrice(): OrderPlaced.Amount | undefined;
    setFinalLinePrice(value?: OrderPlaced.Amount): void;

    hasProductInfo(): boolean;
    clearProductInfo(): void;
    getProductInfo(): OrderPlaced.ProductInfo | undefined;
    setProductInfo(value?: OrderPlaced.ProductInfo): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineItem.AsObject;
    static toObject(includeInstance: boolean, msg: LineItem): LineItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineItem;
    static deserializeBinaryFromReader(message: LineItem, reader: jspb.BinaryReader): LineItem;
  }

  export namespace LineItem {
    export type AsObject = {
      id: string,
      productId: string,
      fulfillmentId: string,
      number: number,
      taxRate?: OrderPlaced.TaxRate.AsObject,
      quantity: number,
      multiplicity: number,
      originalPrice?: OrderPlaced.Amount.AsObject,
      originalLinePrice?: OrderPlaced.Amount.AsObject,
      finalPrice?: OrderPlaced.Amount.AsObject,
      finalLinePrice?: OrderPlaced.Amount.AsObject,
      productInfo?: OrderPlaced.ProductInfo.AsObject,
    }
  }

  export class Address extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getDebtorId(): number;
    setDebtorId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getStreet(): string;
    setStreet(value: string): void;

    getStreetNumber(): string;
    setStreetNumber(value: string): void;

    getPostCode(): string;
    setPostCode(value: string): void;

    getCity(): string;
    setCity(value: string): void;

    getCountry(): string;
    setCountry(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getPhone(): string;
    setPhone(value: string): void;

    getContactPerson(): string;
    setContactPerson(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
  }

  export namespace Address {
    export type AsObject = {
      id: string,
      debtorId: number,
      name: string,
      street: string,
      streetNumber: string,
      postCode: string,
      city: string,
      country: string,
      email: string,
      phone: string,
      contactPerson: string,
    }
  }

  export class Fulfillment extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    clearLineItemIdsList(): void;
    getLineItemIdsList(): Array<string>;
    setLineItemIdsList(value: Array<string>): void;
    addLineItemIds(value: string, index?: number): string;

    getState(): string;
    setState(value: string): void;

    getNumber(): number;
    setNumber(value: number): void;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): OrderPlaced.Address | undefined;
    setAddress(value?: OrderPlaced.Address): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fulfillment.AsObject;
    static toObject(includeInstance: boolean, msg: Fulfillment): Fulfillment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fulfillment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fulfillment;
    static deserializeBinaryFromReader(message: Fulfillment, reader: jspb.BinaryReader): Fulfillment;
  }

  export namespace Fulfillment {
    export type AsObject = {
      id: string,
      lineItemIdsList: Array<string>,
      state: string,
      number: number,
      address?: OrderPlaced.Address.AsObject,
    }
  }
}

