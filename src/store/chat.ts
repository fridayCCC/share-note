import { Subject } from "rxjs";

const subject = new Subject();

interface IMessage {
  person: string;
  text: string;
}

interface IStore {
  data: IMessage[];
  newDataCount: number;
}

const initialState: IStore = {
  data: [],
  newDataCount: 0,
};

let state = initialState;

export const chatStore = {
  init: () => {
    state = { ...state, newDataCount: 0 };
    subject.next(state);
  },
  subscribe: (setState: any) => subject.subscribe(setState),
  sendMessage: (message: IMessage) => {
    state = {
      ...state,
      data: [...state.data, message],
      newDataCount: state.newDataCount + 1,
    };
    subject.next(state);
  },
  clearChat: () => {
    state = initialState;
    subject.next(state);
  },
  initialState,
};
