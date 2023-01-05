// package: identity
// file: identity/identity_created.proto

import * as jspb from "google-protobuf";

export class IdentityCreated extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityCreated.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityCreated): IdentityCreated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityCreated;
  static deserializeBinaryFromReader(message: IdentityCreated, reader: jspb.BinaryReader): IdentityCreated;
}

export namespace IdentityCreated {
  export type AsObject = {
    authorId: string,
    subjectId: string,
    source: string,
  }
}

