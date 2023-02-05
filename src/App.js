import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import {
  ArrowRight,
  StarFill,
  GeoAlt,
  Telephone,
  Envelope,
  Clock,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  List,
  ChevronRight,
} from 'react-bootstrap-icons';
import ServerIcon from 'remixicon-react/ServerLineIcon';
import CloudIcon from 'remixicon-react/CloudLineIcon';
import CodeIcon from 'remixicon-react/CodeLineIcon';
import DesignIcon from 'remixicon-react/PenNibLineIcon';
import logo from './img/smie-logo.png';
import heroImage from './img/hero-img.png';
import aboutImage from './img/about.jpg';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const formValues = {};
  const formValues = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    event.preventDefault();
  };
  const formSubmit = (event) => {
    event.preventDefault();
    if (window.Email) {
      window.Email.send({
        SecureToken: '33639696-6acf-464e-a9c8-1ffbe6a3996b',
        To: 'henry.fabe@gmail.com',
        From: 'henry.fabe@gmail.com',
        Subject: formData.subject,
        Body: `New messge from ${formData.user_email}:
        <br/>${formData.message}`,
      }).then((message) => alert(message));
    }
  };
  useEffect(() => {
    AOS.init({ once: true });
    checkScreen();
    fetch('http://10.0.6.10:1337/api/feature-section')
      .then((response) => response.json())
      .then((feature) => {
        setFeatureContent(feature.data.attributes);
      });

    fetch('http://10.0.6.10:1337/api/about-us?populate=deep')
      .then((response) => response.json())
      .then((about) => {
        setaboutContent(about.data.attributes);
      });

    fetch('http://10.0.6.10:1337/api/testimonials?populate=deep')
      .then((response) => response.json())
      .then((testimonials) => {
        setTestimonialsContent(testimonials.data);
      });

    fetch('http://10.0.6.10:1337/api/teams?populate=deep')
      .then((response) => response.json())
      .then((team) => {
        setTeamContent(team.data);
      });

    fetch('http://10.0.6.10:1337/api/services?populate=deep')
      .then((response) => response.json())
      .then((services) => {
        setServicesContent(services.data);
      });

    fetch('http://10.0.6.10:1337/api/address')
      .then((response) => response.json())
      .then((address) => {
        setStreetAddress(address.data.attributes);
      });
    fetch('http://10.0.6.10:1337/api/phone')
      .then((response) => response.json())
      .then((phone) => {
        setPhoneNumper(phone.data.attributes);
      });
    fetch('http://10.0.6.10:1337/api/email')
      .then((response) => response.json())
      .then((email) => {
        setEmailAdress(email.data.attributes);
      });
    fetch('http://10.0.6.10:1337/api/hour')
      .then((response) => response.json())
      .then((hours) => {
        setOpeningHours(hours.data.attributes);
      });
  }, []);

  const [featureContent, setFeatureContent] = useState({
    Title: '',
    Body: '',
  });
  const [navBackground, setNavBackground] = useState(false);
  const [screenWidth, setScreenWidth] = useState(false);
  const [aboutContent, setaboutContent] = useState('');
  const [testimonialsContent, setTestimonialsContent] = useState([]);
  const [servicesContent, setServicesContent] = useState([]);
  const [teamContent, setTeamContent] = useState([]);
  const [streetAddress, setStreetAddress] = useState([]);
  const [phoneNumber, setPhoneNumper] = useState([]);
  const [emailAddress, setEmailAdress] = useState([]);
  const [openingHours, setOpeningHours] = useState([]);
  const [formData, setFormData] = useState({});

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };
  let checkScreen = function () {
    if (window.innerWidth < 990) {
      setScreenWidth(true);
    }
  };
  window.addEventListener('scroll', changeBackground);
  window.onresize = function () {
    if (window.innerWidth < 990) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
    }
  };
  return (
    <div className='App'>
      {/* Header */}
      <header className='App-header'>
        <Navbar
          fixed='top'
          bg={navBackground ? 'light' : 'transparent'}
          expand='lg'
          className='navbar'
        >
          <Container>
            <Navbar.Brand href='/' className={navBackground ? '' : 'nav-item'}>
              <img src={logo} alt='' height={31} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
              <span className={navBackground ? '' : 'nav-item'}>
                <List />
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link
                  href='#hero-section'
                  className={navBackground ? '' : 'nav-item'}
                  id='nav-home'
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href='#about-section'
                  className={navBackground ? '' : 'nav-item'}
                  id='nav-about'
                >
                  About us
                </Nav.Link>
                <Nav.Link
                  href='#team-section'
                  className={navBackground ? '' : 'nav-item'}
                  id='nav-team'
                >
                  Team
                </Nav.Link>
                <Nav.Link
                  href='#services-section'
                  className={navBackground ? '' : 'nav-item'}
                  id='nav-services'
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  href='#contact-section'
                  className={navBackground ? '' : 'nav-item'}
                  id='nav-contact'
                >
                  Contact us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/* End Header */}

      {/* Hero Section */}
      <section className='hero-section' id='hero-section'>
        <Container className='App-hero' id='App-hero'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column justify-content-center'>
              <h1 data-aos='fade-up' data-aos-duration='1000'>
                {featureContent.Title}
              </h1>
              <h2
                data-aos='fade-up'
                data-aos-delay='400'
                data-aos-duration='1000'
              >
                {featureContent.Body.substring(0, 150)}
              </h2>
              <div
                data-aos='fade-up'
                data-aos-delay='600'
                data-aos-duration='1000'
              >
                <Button href='#about-section' className='hero-btn'>
                  LEARN MORE <ArrowRight />
                </Button>
              </div>
            </div>
            <div
              className='col-lg-6 hero-img'
              data-aos='zoom-out'
              data-aos-delay='200'
              data-aos-duration='2000'
            >
              <img src={heroImage} alt='' />
            </div>
          </div>
        </Container>
      </section>
      {/* End Hero */}

      {/* About Section */}
      <section className='about-section' id='about-section'>
        <Container className='App-about' id='App-about'>
          <div className='row'>
            <div className='col-lg-6 content'>
              <h1 data-aos='fade-up' data-aos-duration='1000'>
                {aboutContent.Title}
              </h1>
              <h2
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1000'
              >
                {aboutContent.Subheading}
              </h2>
              <span
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-duration='1000'
              >
                {parse(String(aboutContent.Body))}
              </span>
            </div>
            <div
              className='col-lg-6 d-flex align-items-center'
              data-aos='zoom-out'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              {aboutContent.Image ? (
                <img
                  src={
                    'http://10.0.6.10:1337' +
                    aboutContent.Image.data.attributes.url
                  }
                  alt=''
                  className='img-fluid'
                />
              ) : (
                <img src={aboutImage} alt='' className='img-fluid' />
              )}
            </div>
          </div>
        </Container>
      </section>
      {/* End About */}

      {/* Testimonials Section */}
      <section className='testimonials'>
        <Container>
          <header
            className='section-header'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1>What people are saying about us</h1>
          </header>
          <div
            className='testimonials-slider swiper'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            <Swiper
              spaceBetween={10}
              speed={1000}
              slidesPerView={screenWidth ? 1 : 3}
              className='swiper-wrapper'
              pagination={{
                dynamicBullets: true,
                el: '.swiper-pagination',
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                speed: 2000,
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {testimonialsContent.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className='swiper-slide'>
                  <div className='testimonial-item'>
                    <div className='stars'>
                      <StarFill className='bi bi-star-fill' />
                      <StarFill className='bi bi-star-fill' />
                      <StarFill className='bi bi-star-fill' />
                      <StarFill className='bi bi-star-fill' />
                      <StarFill className='bi bi-star-fill' />
                    </div>
                    <p>{testimonial.attributes.Body}</p>
                    <div className='profile mt-auto'>
                      <img
                        src={
                          'http://10.0.6.10:1337' +
                          testimonial.attributes.Photo.data.attributes.url
                        }
                        className='testimonial-img'
                        alt=''
                      />
                      <h3>{testimonial.attributes.Title}</h3>
                      <h4>{testimonial.attributes.Company}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='swiper-pagination'>
              <p>pagination</p>
            </div>
          </div>
        </Container>
      </section>
      {/* End Testimonials */}

      {/* Team Section */}
      <section className='team-section' id='team-section'>
        <Container className='container App-team'>
          <header
            className='section-header'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1>Our hard working team</h1>
          </header>
          <div className='row'>
            {teamContent.map((member) => (
              <div
                className='col-lg-4 col-md-6 d-flex align-items-stretch'
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1000'
                key={member.id}
              >
                <div className='member'>
                  <div className='member-img'>
                    <img
                      src={
                        'http://10.0.6.10:1337' +
                        member.attributes.Photo.data.attributes.url
                      }
                      className='img-fluid'
                      alt=''
                    />
                    <div className='social'>
                      <a href='/'>
                        <Twitter className='bi bi-twitter' />
                      </a>
                      <a href='/'>
                        <Facebook className='bi bi-facebook' />
                      </a>
                      <a href='/'>
                        <Instagram className='bi bi-instagram' />
                      </a>
                      <a href='/'>
                        <Instagram className='bi bi-instagram' />
                      </a>
                    </div>
                  </div>
                  <div className='member-info'>
                    <h4 className='team-header'>{member.attributes.Name}</h4>
                    <span className='team-position'>
                      {member.attributes.Position}
                    </span>
                    <p className='team-bio'>{member.attributes.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* End Team Section */}

      {/* Services Section */}
      <section className='services-section' id='services-section'>
        <Container
          className='App-services'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <header
            className='section-header'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1>Our services</h1>
          </header>
          <div className='row gy-4'>
            {servicesContent.map((service) => (
              <div
                className='col-lg-3 col-md-12'
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1000'
                key={service.id}
              >
                <div className={`service-box ${service.attributes.Theme}`}>
                  {service === servicesContent[0] ? (
                    <CloudIcon size={46} className='service-icon' />
                  ) : (
                    ''
                  )}
                  {service === servicesContent[1] ? (
                    <ServerIcon size={46} className='service-icon' />
                  ) : (
                    ''
                  )}
                  {service === servicesContent[2] ? (
                    <CodeIcon size={46} className='service-icon' />
                  ) : (
                    ''
                  )}
                  {service === servicesContent[3] ? (
                    <DesignIcon size={46} className='service-icon' />
                  ) : (
                    ''
                  )}
                  <h3>{service.attributes.Title}</h3>
                  <p>{service.attributes.Body}</p>
                  <div href='#' className='read-more'>
                    <span>Read More</span> <i className='bi bi-arrow-right'></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* End Services */}

      {/* Contact Section */}
      <section className='contact-section' id='contact-section'>
        <Container className='App-contact'>
          <header
            className='section-header'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h1>Contact us</h1>
          </header>
          <div className='row gy-4'>
            <div
              className='col-lg-6'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1000'
            >
              <div className='row gy-4'>
                <div className='col-md-6'>
                  <div className='info-box'>
                    <GeoAlt className='icon' />
                    <h3>Address</h3>
                    <p>
                      {streetAddress.addressLine1}
                      <br />
                      {streetAddress.addressLine2}
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box'>
                    <Telephone className='icon' />
                    <h3>Call Us</h3>
                    <p>
                      {phoneNumber.Phone1}
                      <br />
                      {phoneNumber.Phone2}
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box'>
                    <Envelope className='icon' />
                    <h3>Email Us</h3>
                    <p>
                      {emailAddress.Email1}
                      <br />
                      {emailAddress.Email2}
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box'>
                    <Clock className='icon' />
                    <h3>Open Hours</h3>
                    <p>
                      {openingHours.Days}
                      <br />
                      {openingHours.Hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className='col-lg-6'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              <form
                className='php-email-form'
                // action='./contact-form.php'
                // method='post'
                onSubmit={formSubmit}
              >
                <div className='row gy-4'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control'
                      placeholder='Your Name'
                      required
                      onChange={formValues}
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='email'
                      className='form-control'
                      name='user_email'
                      placeholder='Your Email'
                      required
                      onChange={formValues}
                    />
                  </div>

                  <div className='col-md-12'>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      placeholder='Subject'
                      required
                      onChange={formValues}
                    />
                  </div>

                  <div className='col-md-12'>
                    <textarea
                      className='form-control'
                      name='message'
                      rows='6'
                      placeholder='Message'
                      required
                      onChange={formValues}
                    ></textarea>
                  </div>

                  <div className='col-md-12 text-center'>
                    <div className='loading'>Loading</div>
                    <div className='error-message'></div>
                    <div className='sent-message'>
                      Your message has been sent. Thank you!
                    </div>
                    <input type='submit' value={'Send message'} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
      {/* End Contact Section */}

      {/* Footer */}
      <footer className='footer' id='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row gy-4'>
              <div className='col-lg-5 col-md-12 footer-info'>
                <span
                  href='index.html'
                  className='logo d-flex align-items-center'
                >
                  <img src='assets/img/logo.png' alt='' />
                  <span>{aboutContent.Title}</span>
                </span>
                <span>
                  {parse(String(aboutContent.Body).substring(0, 285))}
                </span>
                <span className='footer-read-more'>
                  <a href='#about-section'>Read More</a>
                </span>
                <div className='social-links mt-3'>
                  <span className='twitter'>
                    <Twitter className='icon' />
                  </span>
                  <span className='facebook'>
                    <Facebook className='icon' />
                  </span>
                  <span className='instagram'>
                    <Instagram className='icon' />
                  </span>
                  <span className='linkedin'>
                    <Linkedin className='icon' />
                  </span>
                </div>
                <div className='copyright'>
                  <p>
                    &copy; Copyright {new Date().getFullYear()}{' '}
                    <strong>
                      <span>Small Island Engineer</span>
                    </strong>
                    . All Rights Reserved
                  </p>
                </div>
              </div>

              <div className='col-lg-2 col-6 footer-links'>
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <ChevronRight className='bi bi-chevron-right' />{' '}
                    <a href='#about-section'>
                      <span>About us</span>
                    </a>
                  </li>
                  <li>
                    <ChevronRight className='bi bi-chevron-right' />{' '}
                    <a href='#services-section'>
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <ChevronRight className='bi bi-chevron-right' />{' '}
                    <span>Terms of service</span>
                  </li>
                  <li>
                    <ChevronRight className='bi bi-chevron-right' />{' '}
                    <span>Privacy policy</span>
                  </li>
                </ul>
              </div>

              <div className='col-lg-2 col-6 footer-links'>
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <ChevronRight className='bi bi-chevron-right' />{' '}
                    <span>Cloud Services</span>
                  </li>
                  <li>
                    <ChevronRight className='bi bi-chevron-right' />{' '}
                    <span>Infrastructure</span>
                  </li>
                  <li>
                    <ChevronRight className='bi bi-chevron-right' />{' '}
                    <span>Development</span>
                  </li>
                  <li>
                    <ChevronRight className='bi bi-chevron-right' />{' '}
                    <span>Graphic Design</span>
                  </li>
                </ul>
              </div>

              <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                <h4>Contact Us</h4>
                <p>
                  {streetAddress.addressLine1} <br />
                  {streetAddress.addressLine2} <br />
                  <br />
                  <strong>Phone:</strong> {phoneNumber.Phone1}
                  <br />
                  <strong>Email:</strong> {emailAddress.Email1}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </div>
  );
}

export default App;
