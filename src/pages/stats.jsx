import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react';




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





export default function Example() {
    
        
const totalEarnings =96;
const yourEarnings = (60/100 * totalEarnings).toFixed(2);



const stats = [
    {
        name: 'Personal',
        stat: 98.40,
        previousStat: '0.00',
        changeType: 'increase'
      },
  {
    name: 'Company Total Earnings',
    stat: totalEarnings,
    previousStat: '0.00',
    changeType: 'increase',
    percentage: ((totalEarnings / (totalEarnings + yourEarnings)) * 100 ).toFixed(2) 
  },
  {
    name: 'Your Earnings From Company',
    stat: yourEarnings,
    previousStat: '0.00',
    changeType: 'increase',
    percentage: ((yourEarnings / (totalEarnings + yourEarnings)) * 100).toFixed(2)
  },
  {
    name: 'Your Percentage / Average from Company',
    stat: ((yourEarnings  / totalEarnings ) * 100).toFixed(2),
    previousStat: '0.00',
    changeType: 'increase'
  },
  
];

const number = ( 98.40 + Number(yourEarnings)) * 281 ;
        
      console.log();
    
  return (
    <div className='max-w-7xl mx-auto py-32'>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Hi <span className='px-1 py-0.5 bg-emerald-50 text-emerald-500 rounded-lg'>Kashif Sulehria, </span> Your Earnings This Month</h3>
      <h3 className="text-base my-4 font-semibold leading-6 text-gray-900">Total Company + Personal Freelanceing <span className='px-1 py-0.5 text-lime-700 rounded-lg underline'>{number} PKRs</span></h3>
      <h3 className="text-base my-4 font-semibold leading-6 text-gray-900">Total Monthly From All sides <span className='px-1 py-0.5 text-lime-700 rounded-lg underline'>{number + 75000} PKRs</span></h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0">
      {stats.map((item) => (
  <div key={item.name} className="px-4 py-5 sm:p-6">
    <dt className="text-base font-normal text-gray-900">{item.name}</dt>
    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
      <div className="flex items-baseline text-2xl font-semibold text-lime-600">
        {item.stat} 
      </div>
       
     
    </dd>
  </div>
))}

      </dl>
    </div>
  )
}
