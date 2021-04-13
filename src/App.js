import logo from './logo.svg';
import {
    Button, Input, Jumbotron, InputGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    Navbar, Nav, NavItem
} from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';

const navItem = {
    padding: '12px',
    display: 'flex',
    fontWeight: 500
};

const Navigation = (
    <div style={{
        display: 'flex',
        justifyContent: 'center'
    }}>
        <a href="" style={navItem}>
            CARA KERJA
        </a>
        <a href="" style={navItem}>
            TENTANG KAMI
        </a>
        <a href="" style={navItem}>
            DUKUNG KAMI
        </a>
        <a href="" style={navItem}>
            CONTACT
        </a>
    </div>
);

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const contentPadding = isMobile ? '0' : '32px 128px';

  return (
      <div>
          <Jumbotron style={{background: 'white', paddingBottom: '0px'}}>
              <div style={{ textAlign: 'center', padding: contentPadding }}>
                  <div style={{
                      position : 'relative'
                  }}>
                    <img src={'/logo-verihoax.png'} style={{width: '140px'}}/>
                    <span style={{
                        position: 'absolute',
                        bottom: '12px',
                        marginLeft: '-5px',
                        background: 'orange',
                        color: 'white',
                        padding: '3px 7px',
                        fontSize: '12px',
                        borderRadius: '7px',
                        fontWeight: 'bold'
                    }}>BETA</span>
                  </div>
                  <div style={{
                      fontSize: isMobile ? '15px' : '21px',
                      padding: '12px 21px',
                      marginBottom: '12px',
                      fontWeight: '500',
                      color: 'grey'
                  }}>
                      Masukkan Link Berita, Pesan Whatsapp, No Telp, atau No Rekening
                  </div>
                  <InputGroup size="md">
                      <Input type="textarea" rows="7" name="text" style={{
                          borderRadius: '21px',
                          padding: '12px'
                      }}/>
                  </InputGroup>
                  <Button color="primary" style={{
                      fontSize: isMobile ? '18px' : '21px',
                      marginTop: '21px',
                      padding: '12px 42px',
                      fontWeight: 500,
                      width: isMobile ? '100%' : 'auto'
                  }}>
                      Verifikasi Sumber Berita
                  </Button>
              </div>
          </Jumbotron>
          {!isMobile && Navigation}
      </div>
  );
}

export default App;
