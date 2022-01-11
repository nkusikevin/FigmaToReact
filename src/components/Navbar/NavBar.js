// IMPORTING APIS
import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	useMediaQuery,
	Button,
	useScrollTrigger,
	Slide,
	Menu,
	MenuItem,

} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";




// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		boxShadow: "none",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		color: "#ff700b",
		fontFamily: '"Staatliches", cursive',
		letterSpacing: "0.1em",

		[theme.breakpoints.down("sm")]: {
			fontSize: "0.8125rem",
		},
	},
}));

function HideOnScroll(props) {
	const { children } = props;
	const trigger = "useScrollTrigger()";

	return (
		<Slide appear={false} direction={"down"} in={!trigger}>
			{children}
		</Slide>
	);
}

const NavBar = (props) => {
	const classes = useStyles();
	const [anchor, setAnchor] = React.useState(null);
	const [navbar, setNavbar] = React.useState(false);
	const open = Boolean(anchor);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const handleMenu = (event) => {
		setAnchor(event.currentTarget);
	};
	 const changeBackground = () => {
			// console.log(window.scrollY);
			if (window.scrollY >= 66) {
				setNavbar(true);
			} else {
				setNavbar(false);
			}
		}
	React.useEffect(() => {
	  changeBackground();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground);
	});
	console.log(navbar);
	return (
		<div className={classes.root}>
			{/* <HideOnScroll {...props}> */}
				<BrowserRouter>
					<AppBar
						className={navbar ? "navbar active" : "navbar"}
						style={{
							boxShadow: "none",
							backgroundColor: "transparent",
							padding: "17px",
						}}>
						<Toolbar>
							<Typography
								variant='h3'
								component='p'
								color='textSecondary'
								className={classes.title}>
								RITA ANGE KAGAJU
							</Typography>
							{isMobile ? (
								<React.Fragment>
									<IconButton
										color='textPrimary'
										className={classes.menuButton}
										edge='start'
										aria-label='menu'
										onClick={handleMenu}>
										<MenuIcon />
									</IconButton>
									<Menu
										id='menu-appbar'
										anchorEl={anchor}
										anchorOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										KeepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										open={open}>
										<MenuItem
											onClick={() => setAnchor(null)}
											component={Link}
											to='/'>
											<Typography variant='h6'> Home</Typography>
										</MenuItem>
										<MenuItem
											onClick={() => setAnchor(null)}
											component={Link}
											to='/College'>
											<Typography variant='h6'> About </Typography>
										</MenuItem>
										<MenuItem
											onClick={() => setAnchor(null)}
											component={Link}
											to='/About'>
											<Typography variant='h6'> Music</Typography>
										</MenuItem>
										<MenuItem
											onClick={() => setAnchor(null)}
											component={Link}
											to='/Personal'>
											<Typography variant='h6'> Contact </Typography>
										</MenuItem>
									</Menu>
								</React.Fragment>
							) : (
								<div 
									style={{
										marginRight: "2rem",
										boxShadow: "none",
										backgroundColor: "transparent",
									}}>
									<Button
										variant='text'
										component={Link}
										style={{ fontSize: "20px" }}
										to='/'
										color='default'>
										Home
									</Button>
									<Button
										variant='text'
										component={Link}
										style={{ fontSize: "20px" }}
										to='/about'
										color='default'>
										About
									</Button>
									<Button
										variant='text'
										component={Link}
										to='/music'
										style={{ fontSize: "20px" }}
										color='default'>
										Music
									</Button>
									<Button
										variant='text'
										component={Link}
										style={{ fontSize: "20px" }}
										to='/contact'
										color='default'>
										Contact
									</Button>
								</div>
							)}
						</Toolbar>
					</AppBar>
					{/* <Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/College' component={College} />
						<Route exact path='/About' component={About} />
						<Route exact path='/Personal' component={Personal} />
					</Switch> */}
				</BrowserRouter>
			{/* </HideOnScroll> */}
		</div>
	);
};

export default NavBar;
