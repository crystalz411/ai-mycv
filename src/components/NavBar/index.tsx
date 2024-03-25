import { Link } from 'react-router-dom'
// import { useRouter } from 'next/router';
// import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React from 'react'
import { menu, menuKeys } from './menulinks'

// import { useUser } from '@/utils/useUser';

import s from './Navbar.module.css';

const Navbar = () => {

//   const router = useRouter();
  // const supabaseClient = useSupabaseClient();
  // const { user } = useUser();

  const [mobileMenuState, setMobileMenuState] = React.useState("hidden")

  return (
    <nav className={s.root}>
      
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between py-4 md:py-6">
					<div className="flex space-x-7">
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={() => {
                  if (mobileMenuState == "hidden")
                    setMobileMenuState("");
                  else 
                    setMobileMenuState("hidden")
                }}>
						<svg className={`w-6 h-6 text-sky-900`}
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
						<div>							
              <Link to="/" className={s.logo} aria-label="Logo">
                Career Genie
              </Link>
						</div>
						
						<div className="hidden md:flex items-center space-x-1">
            
           {menuKeys.map(((key: any) => { 
            return  <Link to={menu[key].url} className={s.link} key={key}>
            <img src={ menu[key].icon } width={16} className={`${s.icon1} mr-1`}/>
               { menu[key].text }
              </Link>
            }) )}
  					</div>
					</div>
					
          <div className="flex flex-1 justify-end space-x-8">
            {/* {user ? (
              <span
                className={s.link}
                onClick={async () => {
                  await supabaseClient.auth.signOut();
                  router.push('/signin');
                }}
              >
                Sign out
              </span>
            ) : (
              <Link href="/signin" className={s.mainlink} >
                Sign in
              </Link>
            )} */}
          </div>
					
				</div>
			</div>
			<div className={`${mobileMenuState} mobile-menu`}>
        <ul>
          
      {menuKeys.map(((key: any) => { 
            return  <li key={`li${key}`}><Link to={menu[key].url} className={s.link} key={key} >
            <img src={ menu[key].icon } width={16} className={`${s.icon1} mr-1`}/>
               { menu[key].text }
              </Link></li>
            }) )}
        </ul>
			</div>

    </nav>
  );
};

export default Navbar;
