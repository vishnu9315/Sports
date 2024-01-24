import heart from '../card/love.svg'
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/20/solid';
const Heart = () => {
  return (
    <div>
      <button className='flex justify-center'>
        <HeartIcon height={20} width={20} />
      </button>
    </div>
  )
}

export default Heart