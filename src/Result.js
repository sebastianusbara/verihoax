import {
    Button, Input, Jumbotron, InputGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    Navbar, Nav, NavItem, Container
} from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './Components/News';
import NewsData from './Fixtures/news.json';

const navItem = {
    padding: '12px',
    display: 'flex',
    fontWeight: 500
};

function Result() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const contentPadding = isMobile ? '0' : '32px 128px';

    return (
        <Container>
            <h1 style={{
                marginTop: '64px',
                paddingBottom: '24px',
                marginBottom: '21px',
                textAlign: 'center'
            }}>
                Berita ini
                <span style={{
                    background: '#e74c3c',
                    color: 'white',
                    padding: '7px 15px',
                    marginLeft: '12px'
                }}>
                    HOAX
                </span>
            </h1>
            <h4 style={{
                color: 'grey',
                borderBottom: '1px solid gainsboro',
                paddingBottom: '12px',
                marginBottom: '15px'
            }}>
                5 Berita Terkait
            </h4>
            {
                NewsData.data.map((item) =>
                    <News
                        media={item.media}
                        title={item.title}
                        logo={item.logo}
                        link={item.link}
                    />
                )
            }
        </Container>
    );
}

export default Result;
