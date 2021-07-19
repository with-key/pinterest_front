import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	${reset};
	:root {
    --primary-red: #E20020;
    --primary-white: #FFFFFF;
    --primary-black: #121212;
    --primary-gray: #767676;
    --primary-lightgray: #EFEFEF;
    --secondary-gray: #888888;
		--secondary-lightgray: #DDDDDD;
		--secondary-blue: #1876F2
  }

	a {
		text-decoration:none;
		color:inherit;
	}
	* {
		box-sizing:border-box;
		
	}
	html {
		font-size:62.5%;
		margin : 0;
		padding: 0;
		
	}
	body{
		font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
	}
`;

export default GlobalStyles;
