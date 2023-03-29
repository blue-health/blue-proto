// package: identity
// file: impfomizer/introduction_requested.proto

import * as jspb from "google-protobuf";

export class IntroductionRequested extends jspb.Message {
  getAuthorId(): string;
  setAuthorId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntroductionRequested.AsObject;
  static toObject(includeInstance: boolean, msg: IntroductionRequested): IntroductionRequested.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntroductionRequested, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntroductionRequested;
  static deserializeBinaryFromReader(message: IntroductionRequested, reader: jspb.BinaryReader): IntroductionRequested;
}

export namespace IntroductionRequested {
  export type AsObject = {
    authorId: string,
  }
}

