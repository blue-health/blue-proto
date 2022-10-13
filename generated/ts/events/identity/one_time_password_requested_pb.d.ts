// package: identity
// file: identity/one_time_password_requested.proto

import * as jspb from "google-protobuf";

export class OneTimePasswordRequested extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getOneTimePassword(): string;
  setOneTimePassword(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneTimePasswordRequested.AsObject;
  static toObject(includeInstance: boolean, msg: OneTimePasswordRequested): OneTimePasswordRequested.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneTimePasswordRequested, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneTimePasswordRequested;
  static deserializeBinaryFromReader(message: OneTimePasswordRequested, reader: jspb.BinaryReader): OneTimePasswordRequested;
}

export namespace OneTimePasswordRequested {
  export type AsObject = {
    authorId: string,
    oneTimePassword: string,
    email: string,
  }
}

