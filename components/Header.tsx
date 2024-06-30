import { Eczar } from 'next/font/google'
import headerStyles from './../styles/aL_header.module.scss'
// import { useRouter } from 'next/navigation';

const eczar = Eczar({ subsets: ["latin"] })

const Header = () => {
	// const router = useRouter(); // to navigate to other pages
	
	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.wrapper}>
				<div className={headerStyles.logo_wrap}>
					<h1 className={eczar.className + " " + headerStyles.logo}>assetLibrary</h1>
				</div>
				<div className={headerStyles.nav_menu}>
					<div>
						{/* nav link items */}
					</div>
					<div className={headerStyles.nav_actions_wrapper}>
						{/* nav action like sign up login */}
						<form action="">
							<input type="search" placeholder='Search for assets...'/>
						</form>
						<button>Login</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
