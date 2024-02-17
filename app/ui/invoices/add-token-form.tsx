'use client'

import { CustomerField } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import {
  CurrencyDollarIcon, PlusIcon
} from '@heroicons/react/24/outline';
import Select from 'react-select';

export default function AddTokenForm({ customers }: { customers: CustomerField[] }) {
  const options = [
    { value: 'ADA', label: 'Cardano' },
    { value: 'XRP', label: 'XRP' },
    { value: 'BTC', label: 'Bitcoin' },
    { value: 'ETH', label: 'Ethereum' },
    { value: 'SOL', label: 'Solana' },
    { value: 'CHZ', label: 'Chiliz' }
  ]
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Token Selection */}
        <div className="mb-4">
          <label htmlFor="token" className="mb-2 block text-sm font-medium">
            Search Token
          </label>
          <div className="relative">
            <Select options={options} isSearchable id="token"
                name="token" className="tokenSearch"/>
          </div>
        </div>
        {/* Token Amount */}
        <div className="mb-4">
          <label htmlFor="tokenAmount" className="mb-2 block text-sm font-medium">
            Token amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="tokenAmount"
                name="tokenAmount"
                type="number"
                step="0.01"
                placeholder="Enter token amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Fiat Invested */}
        <div className="mb-4">
          <label htmlFor="fiatAmount" className="mb-2 block text-sm font-medium">
            Fiat Invested
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fiatAmount"
                name="fiatAmount"
                type="number"
                step="0.01"
                placeholder="Enter FIAT amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">

        <Button type="submit" >Add Token</Button>{' '}
      <PlusIcon className="h-5 md:ml-4" />
      </div>
    </form>
  );
}
