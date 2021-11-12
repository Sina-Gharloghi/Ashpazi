import './App.css';
import logo from './img/header/ashpazsho.png';
import picture from './img/header/logo.png';
import insta from './img/footer/instagram.png';
import tweet from './img/footer/twitter.png';
import tele from './img/footer/telegram.png';
import linked from './img/footer/linkedin.png';
import enamad from './img/footer/enamad.png';
import saman from './img/footer/samandehi.png';
import Learn from './Learn';
import {Route , Link , BrowserRouter as Router} from 'react-router-dom';
import Menu from './menu';

function App() {
  return (
    <div className="App">
      
      <div className="header">
          <input type="button" className="btn" value="ثبت نام" id="signup"/>
          <input type="button" className="btn" value="ورود" id="signin"/>

          <a href="#" className="menu" id="bevrages"> <p>نوشیدنی</p> </a>
          <a href="#" className="menu" id="cakes"> <p>کیک</p> </a>
          <a href="#" className="menu" id="deser"> <p>دسر</p> </a>
          <a href="#" className="menu" id="pitza"> <p>پیتزا</p> </a>
          <a href="#" className="menu" id="kebab"> <p>کباب ها</p> </a>
          <a href="#" className="menu" id="other"> <p>خورشت ها</p> </a>

          <div id="logo">
            <a href="#"> <img src={logo} /></a>
            <a href="#"> <img src={picture} id="circle"/></a>
          </div>
      </div>

      <Router>
        <Route exact path="/" component={Menu} />
    </Router>
    

      <div className="footer">

          <div id="footeropt">
              <p className="title" id="social">شبکه های اجتماعی</p>
              <p className="title" id="costomers">خدمات مشتریان</p>
              <p className="title" id="contact">تماس با ما</p>
              <p className="title" id="company">کمپانی ما</p>
              <br /> <br/> 
              
              <hr id="line1"/> 
              <hr id="line2"/> 
              <hr id="line3"/> 
              <hr id="line4"/>

              <br/>

              <div className="footerlinks">
                  <div className="networks">
                    <a href="#"><img src={insta} className="pages" id="insta"/></a>
                    <a href="#"><img src={tweet} className="pages" id="tweet"/></a>
                    <a href="#"><img src={tele} className="pages" id="tele"/></a>
                    <a href="#"><img src={linked} className="pages" id="linked"/></a>
                    
                    <a href="#" id="question" className="service">سوالات متداول</a>
                    <a href="#" id="pv" className="service">حریم خصوصی</a>
                    
                    <div className="adress">
                      <p >آدرس: تهران خیابان تیموری کوچه شالیزار پلاک 4</p>
                      <p id="tel">021-66885544 :تلفن</p>
                      <p id="e-m">example@info :ایمیل</p>
                    </div>

                    <div className="ourcompany">
                      <a href="#" className="comp"><p id="about"></p>درباره ما</a>
                      <a href="#" className="comp"><p id="cnt">تماس با ما</p></a>
                      <a href="#" className="comp"><p id="rule">قوانین و مقررات</p></a>
                      <a href="#" className="comp"><p id="terms">شرایط استفاده</p></a>
                    </div>
                    
                    <br /> <br />
                    <a href="#"><img src={enamad} id="namad"/></a>
                    <a href="#"><img src={saman} id="saman"/></a>
                    
                  </div>

              </div>
            
          </div>
        
          <div>
            <p id="copyright">کلیه حقوق این سایت متعلق به آشپزشو می باشد</p>
          </div>

      </div>
      
    </div>
  );
}

export default App;
