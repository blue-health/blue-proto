// package: socialmediamanager
// file: socialmediamanager/account_unlinked.proto

import * as jspb from "google-protobuf";

export class AccountUnlinked extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountUnlinked.AsObject;
  static toObject(includeInstance: boolean, msg: AccountUnlinked): AccountUnlinked.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountUnlinked, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountUnlinked;
  static deserializeBinaryFromReader(message: AccountUnlinked, reader: jspb.BinaryReader): AccountUnlinked;
}

export namespace AccountUnlinked {
  export type AsObject = {
    authorId: string,
    subjectId: string,
    platform: string,
  }
}

