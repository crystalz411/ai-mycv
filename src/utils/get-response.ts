import React from 'react';
export let responseData = '';

export const handleResponeData = (data: string) => {
  const parsedData = JSON.parse(data);
  const msgValue = parsedData.msg;
  responseData += `${msgValue}`;
  console.log("responseData", responseData);
  return responseData;
};
