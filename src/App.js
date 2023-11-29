import { RadioGroup } from '@headlessui/react'
// import logo from './logo.svg';
import './App.css';

const plans = [
  { name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5 active job postings' },
  { name: 'Business', priceMonthly: 99, priceYearly: 990, limit: 'Up to 25 active job postings' },
  { name: 'Enterprise', priceMonthly: 249, priceYearly: 2490, limit: 'Unlimited active job postings' },
]

function App() {
  return (
    <div className='min-h-screen min-w-screen bg-[#111022]'>
      <div className='px-10 py-2 w-full flex justify-between'>
        <div>FLYER</div>
        <div>Hello Sunny Vo!</div>
      </div>
      <div className='flex flex-col w-full items-center'>
        <div className='max-w-xl  text-center'>
          <h1 className='text-white text-4xl'>
            Real Estate Flyer Made in Seconds
          </h1>
          <h2 className='text-gray-400 text-sm mt-3'>
            For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.
          </h2>
        </div>

        <div className='max-w-xl mt-8 w-full'>
          <div className='w-full flex'>
            <div className='grow text-sm font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
              Listed
            </div>
            <div className='grow text-sm font-semibold text-center text-white rounded-md bg-gradient-to-r from-[#586FFB] to-[#8D79FB] px-3.5 py-2.5 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
              Not Listed
            </div>
          </div>
          <div className='max-w-xl mt-8 w-full p-6'>
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
