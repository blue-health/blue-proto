// package: identity
// file: identity/registration_email_verification_requested.proto

import * as jspb from "google-protobuf";

export class RegistrationEmailVerificationRequested extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationEmailVerificationRequested.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationEmailVerificationRequested): RegistrationEmailVerificationRequested.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationEmailVerificationRequested, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationEmailVerificationRequested;
  static deserializeBinaryFromReader(message: RegistrationEmailVerificationRequested, reader: jspb.BinaryReader): RegistrationEmailVerificationRequested;
}

export namespace RegistrationEmailVerificationRequested {
  export type AsObject = {
    url: string,
    email: string,
  }
}

