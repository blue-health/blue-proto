// package: socialmediamanager
// file: socialmediamanager/account_linked.proto

import * as jspb from "google-protobuf";

export class AccountLinked extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLinked.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLinked): AccountLinked.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountLinked, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLinked;
  static deserializeBinaryFromReader(message: AccountLinked, reader: jspb.BinaryReader): AccountLinked;
}

export namespace AccountLinked {
  export type AsObject = {
    authorId: string,
    subjectId: string,
    platform: string,
  }
}

