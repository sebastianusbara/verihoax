import {
    Button, Input, Jumbotron, InputGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    Navbar, Nav, NavItem, Container
} from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const navItem = {
    padding: '12px',
    display: 'flex',
    fontWeight: 500
};

function News(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const contentPadding = isMobile ? '0' : '32px 128px';

    return (
        <Card style={{
            marginBottom: '12px'
        }}>
            <CardImg src={props.logo} alt="Card image cap" style={{
                width: '160px',
                margin: '0 auto',
                paddingTop: '24px',
                maxHeight: '80px',
                objectFit: 'contain'
            }}/>
            <CardBody>
                <div>
                    {props.media}
                </div>
                <a href="https://www.liputan6.com/cek-fakta/read/4501145/cek-fakta-waspada-pesan-berantai-palsu-catut-bank-cimb-niaga-janjikan-hadiah-rp-50-juta">
                    {props.title}
                </a>
            </CardBody>
        </Card>
    );
}

export default News;
