import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/home' className='text-xl text-green-600 uppercase font-bold'>
      Beejay Keys
    </Link>
  );
}

export default Logo;
