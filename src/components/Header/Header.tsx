import { FiLogOut } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      alert('로그아웃 되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center p-3 border-b border-gray-300">
      <h1 className="text-2xl font-medium">한 달 소비</h1>
      <button type="button" className="absolute right-3 p-1" onClick={handleLogout}>
        <FiLogOut className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Header;
