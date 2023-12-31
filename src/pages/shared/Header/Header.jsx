import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <Link to="/">
                <img className='mx-auto mt-[50px] mb-[20px]' src={logo} alt="" />
            </Link>

            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-[#706F6F]'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;