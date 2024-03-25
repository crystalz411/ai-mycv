import Ably from 'ably';
// import { handleResponeData } from "./get-response";

const generateId = (len: number) => {
  function dec2hex(dec: number): string {
    return dec.toString(16).padStart(2, '0');
  }

  const arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
};

// const dataArray: string[] = [];

// export const handleResponeData = (data: string) => {
//   dataArray.push(data);
//   console.log("dataArray", dataArray);
// };

// export let dataResponse: any;

export const callAbly = (CV: string, jobSpec: string, handleResponeData: any) => {
  // randomise the channel name:
  const channelName = generateId(12);

  // Step 1 create a realtime channel and subscribe to it
  const realtime = new Ably.Realtime('KqcW3w.lNW4Xw:-OwnG-pyxZQmFxrmg1XAA3Y1gEBLDpZ6CyoDTV3KmI4');
  const channel = realtime.channels.get(channelName);
  channel.subscribe((message) => {
    // console.log('message.data.message', message.data);
    handleResponeData(message.data);
  });

  //Publish messages through the rest channel
  const rest = new Ably.Rest('KqcW3w.PbBDbA:bkk7Ym7Pn1fCUZ5IPbHmdI8Z_GgP8J8N4TOuvdaU8EI');
  const restChannel = rest.channels.get('CVProcessor');
  restChannel.publish(
    'GetCoverLetter',
    JSON.stringify({
      responseChannel: channelName,
      CV,
      JobSpec: jobSpec,
    }),
  );
};

export const callAblyResume = (CV: string, jobSpec: string, handleResponeData: any) => {
  // randomise the channel name:
  const channelName = generateId(12);

  // Step 1 create a realtime channel and subscribe to it
  const realtime = new Ably.Realtime('KqcW3w.lNW4Xw:-OwnG-pyxZQmFxrmg1XAA3Y1gEBLDpZ6CyoDTV3KmI4');
  const channel = realtime.channels.get(channelName);
  channel.subscribe((message) => {
    // console.log('message.data.message', message.data);
    handleResponeData(message.data);
  });

  //Publish messages through the rest channel
  const rest = new Ably.Rest('KqcW3w.PbBDbA:bkk7Ym7Pn1fCUZ5IPbHmdI8Z_GgP8J8N4TOuvdaU8EI');
  const restChannel = rest.channels.get('CVProcessor');
  restChannel.publish(
    'GetCVRewrite',
    JSON.stringify({
      responseChannel: channelName,
      CV,
      JobSpec: jobSpec,
    }),
  );
};

// console.log('dataResponse', dataResponse);
