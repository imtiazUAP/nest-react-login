import type { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <div className="layout-header">
      <Link href="/">
        <a>Memory Partner</a>
      </Link>
    </div>
  );
};

export default Header;
