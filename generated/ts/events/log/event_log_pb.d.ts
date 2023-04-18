// package: log
// file: log/event_log.proto

import * as jspb from "google-protobuf";

export class OperationLog extends jspb.Message {
  getOperationName(): string;
  setOperationName(value: string): void;

  getOperationType(): string;
  setOperationType(value: string): void;

  getOperationLabelsMap(): jspb.Map<string, string>;
  clearOperationLabelsMap(): void;
  getServiceName(): string;
  setServiceName(value: string): void;

  getServiceMethod(): string;
  setServiceMethod(value: string): void;

  getServiceNamespace(): string;
  setServiceNamespace(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  getResourceType(): string;
  setResourceType(value: string): void;

  getAuthorId(): string;
  setAuthorId(value: string): void;

  getSubjectId(): string;
  setSubjectId(value: string): void;

  getCallerIpAddress(): string;
  setCallerIpAddress(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): void;
  addPermissions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationLog.AsObject;
  static toObject(includeInstance: boolean, msg: OperationLog): OperationLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationLog;
  static deserializeBinaryFromReader(message: OperationLog, reader: jspb.BinaryReader): OperationLog;
}

export namespace OperationLog {
  export type AsObject = {
    operationName: string,
    operationType: string,
    operationLabelsMap: Array<[string, string]>,
    serviceName: string,
    serviceMethod: string,
    serviceNamespace: string,
    resourceId: string,
    resourceType: string,
    authorId: string,
    subjectId: string,
    callerIpAddress: string,
    permissionsList: Array<string>,
  }
}

