export interface Message {
    text: string;
    type: MessageType;
}

export enum MessageType {
    Success = 'bg-success',
    Error = 'bg-error'
}