/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { RollupLib } from '../RollupLib'

export class RollupLib__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<RollupLib> {
    return super.deploy(overrides || {}) as Promise<RollupLib>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): RollupLib {
    return super.attach(address) as RollupLib
  }
  connect(signer: Signer): RollupLib__factory {
    return super.connect(signer) as RollupLib__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupLib {
    return new Contract(address, _abi, signerOrProvider) as RollupLib
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'messageData',
        type: 'bytes',
      },
      {
        internalType: 'uint256[]',
        name: 'messageLengths',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes32',
        name: 'beforeAcc',
        type: 'bytes32',
      },
    ],
    name: 'feedAccumulator',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
]

const _bytecode =
  '0x6102ab610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063735029a31461003a575b600080fd5b6101626004803603606081101561005057600080fd5b810190602081018135600160201b81111561006a57600080fd5b82018360208201111561007c57600080fd5b803590602001918460018302840111600160201b8311171561009d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156100ef57600080fd5b82018360208201111561010157600080fd5b803590602001918460208302840111600160201b8311171561012257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505091359250610174915050565b60408051918252519081900360200190f35b81518351600091829184835b8381101561022757600088828151811061019657fe5b602002602001015190508381870111156101e6576040805162461bcd60e51b815260206004820152600c60248201526b2220aa20afa7ab22a9292aa760a11b604482015290519081900360640190fd5b6020868b0181018290206040805180840196909652858101919091528051808603820181526060909501905283519301929092209190940193600101610180565b5081841461026a576040805162461bcd60e51b815260206004820152600b60248201526a08882a882be988a9c8ea8960ab1b604482015290519081900360640190fd5b97965050505050505056fea2646970667358221220030f2dbf07a11d9e732fa1f0461a871def0b6b92b40f2131a8d0da6acc78970264736f6c634300060b0033'
