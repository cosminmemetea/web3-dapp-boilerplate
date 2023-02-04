import React from 'react'
import { useWeb3Context } from '../context/'

interface ConnectProps {
  connect: (() => Promise<void>) | null
}
const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <button onClick={connect}>
       {/* <span className="md:text-md text-center text-sm font-light text-[#50d71e] lg:text-lg "> */}
            Connect
        {/* </span> */}
      </button>
  ) : (
    <button>
        {/* <span className="md:text-md text-center text-sm font-light text-[#50d71e] lg:text-lg "> */}
            Loading...
        {/* </span> */}
    </button>
  )
}

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
  return disconnect ? (
    <button onClick={disconnect}>
        {/* <span className="md:text-md text-center text-sm font-light text-[#50d71e] lg:text-lg "> */}
            Disconnect
        {/* </span> */}
    </button>
  ) : (
    <button>
        {/* <span className="md:text-md text-center text-sm font-light text-[#50d71e] lg:text-lg "> */}
            Loading...
        {/* </span> */}
    </button>
  )
}

export function Web3Button() {
  const { web3Provider, connect, disconnect } = useWeb3Context()

  return web3Provider ? (
    <DisconnectButton disconnect={disconnect} />
  ) : (
    <ConnectButton connect={connect} />
  )
}
