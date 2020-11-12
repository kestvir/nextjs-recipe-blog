import Footer from "./Footer"
import Navbar from "./Navbar"


export interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;