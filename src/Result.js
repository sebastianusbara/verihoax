import { Container } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './Components/News';
import NewsData from './Fixtures/news.json';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { AiFillCheckCircle } from "react-icons/ai";

const hoaxContent = (
    <div>
        <h5 style={{
            color: 'grey',
            borderBottom: '1px solid gainsboro',
            paddingBottom: '12px',
            marginBottom: '15px'
        }}>
            {NewsData.data.length} Berita Terkait
        </h5>
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
    </div>
);

const safeContent = (
    <div>
        <h5 style={{
            color: '#27ae60', paddingBottom: '12px'
        }}>
            <AiFillCheckCircle /> Tidak Ditemukan Berita HOAX
        </h5>
        <h5 style={{
            color: '#27ae60', paddingBottom: '12px'
        }}>
            <AiFillCheckCircle /> Tidak Mengandung Hate Speech
        </h5>
        <h5 style={{
            color: '#27ae60', paddingBottom: '12px'
        }}>
            <AiFillCheckCircle /> Informasi Tidak Menyesatkan
        </h5>
    </div>
);

function Result(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const contentPadding = isMobile ? '0' : '32px 128px';
    const { search } = useLocation();
    const values = queryString.parse(search);
    const { isSafe } = values;
    const isNotHoax = isSafe === 'true';

    return (
        <Container>
            <div style={{
                marginTop: '12px',
                padding: '12px 21px',
                background: 'whitesmoke',
                marginBottom: '21px',
                borderRadius: '4px',
                border: '1px solid gainsboro'
            }}>
                <div style={{
                    fontWeight: 500,
                    borderBottom: '1px solid gainsboro',
                    paddingBottom: '12px'
                }}>
                    Cek Fakta: Waspada Pesan Berantai Palsu Catut Bank CIMB Niaga Janjikan Hadiah Rp 50 Juta
                </div>
                <h3 style={{
                    marginTop: '21px',
                    textAlign: 'center',
                    color: 'grey'
                }}>
                    Berita ini
                    <span style={{
                        background: isNotHoax ? '#27ae60': '#e74c3c',
                        color: 'white',
                        padding: '7px 21px',
                        marginLeft: '12px',
                        borderRadius: '100px'
                    }}>
                        {isNotHoax ? 'AMAN' : 'HOAX'}
                    </span>
                </h3>
            </div>
            {isNotHoax ? safeContent : hoaxContent}
        </Container>
    );
}

export default Result;
