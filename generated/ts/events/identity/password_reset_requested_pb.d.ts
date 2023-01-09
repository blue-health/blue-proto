// package: identity
// file: identity/password_reset_requested.proto

import * as jspb from "google-protobuf";

export class PasswordResetRequested extends jspb.Message {
  getSubjectId(): string;
  setSubjectId(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordResetRequested.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordResetRequested): PasswordResetRequested.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PasswordResetRequested, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordResetRequested;
  static deserializeBinaryFromReader(message: PasswordResetRequested, reader: jspb.BinaryReader): PasswordResetRequested;
}

export namespace PasswordResetRequested {
  export type AsObject = {
    subjectId: string,
    url: string,
  }
}

