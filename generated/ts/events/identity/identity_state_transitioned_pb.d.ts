// package: identity
// file: identity/identity_state_transitioned.proto

import * as jspb from "google-protobuf";

export class IdentityStateTransitioned extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

  getTransition(): string;
  setTransition(value: string): void;

  getState(): string;
  setState(value: string): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityStateTransitioned.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityStateTransitioned): IdentityStateTransitioned.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityStateTransitioned, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityStateTransitioned;
  static deserializeBinaryFromReader(message: IdentityStateTransitioned, reader: jspb.BinaryReader): IdentityStateTransitioned;
}

export namespace IdentityStateTransitioned {
  export type AsObject = {
    authorId: string,
    subjectId: string,
    transition: string,
    state: string,
    reason: string,
  }
}

