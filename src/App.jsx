import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Terms from "./components/terms/Terms";
import { ThemeContext } from "./context";
import { useContext } from "react";
import DocumentMeta from "react-document-meta";

const meta = {
	title: "It's KEI",
	description: "Hi! I'm KEI and I'm a Digital Artist",
	canonical: "",
	meta: {
		charset: "utf-8",
		name: {
			keywords: "art,digital art, kei, freelance",
		},
	},
};

const App = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div
			style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode && "white",
			}}
		>
			<DocumentMeta {...meta} />
			<Toggle />
			<Intro />
			<About />
			<Terms />
			<ProductList />
			<Contact />
		</div>
	);
};

export default App;
