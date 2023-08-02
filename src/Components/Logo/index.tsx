import * as Icons from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Logo = () => {
  return <Link to={'/'}>{<Icons.BsApple size={'1.7rem'} />}</Link>;
};

export default Logo;
