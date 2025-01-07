import React from 'react';

const WireTransferStatus = ({ transfers }: { transfers: any }) => {
  return (
    <div>
      <h2>Wire Transfer Status</h2>
      <ul>
        {transfers.map((transfer: any, index: number) => (
          <li key={index}>{transfer.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default WireTransferStatus;
