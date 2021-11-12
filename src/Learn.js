import './App.css';
import vegtable from './img/body/vegtable.png';
import meat from './img/body/meat.png';
import wall from './img/body/Basically-Pizza.png';
import pitza from './img/body/pitza.png';
import vector from './img/body/vector.png';
import {Route , Link , BrowserRouter as Router} from 'react-router-dom';

function Learn() {
    return (
      
      <div className="Learnbody">
      <p id="site">/آشپزشو</p>
      <p id="url1">/ پیتزا</p>
      <p id="pname">پیتزا پپرونی</p>
      
      <div className="wallpaper">
        <img src={wall} />
      </div>

      <div className="pepperoni">
      <img src={pitza} id="pinklogo" />
      <h2 id="pepname">پیتزا پپرونی</h2>
      <br /> <br /> <br /> <br />

      <p id="summery">پیتزا پپرونی یکی از انواع پیتزاهای معروف و بسیار پرطرفدار در جهان است که در کشور عزیزمان ایران هم طرفداران بسیاری دارد. این پیتزا با یک نوع سوسیس مخصوص تهیه <br /> می
شود که پپرونی نام دارد و به همین دلیل با نام پیتزا پپرونی شناخته می شود
      </p>

      <span className="dot"> </span>
      <h2 id="require">مواد لازم</h2>
        
        <br /><br /><br /><br />
      <img src={vector} id="vector1"/>
      <p className="req">پنیر پیتزا ۱۵۰ گرم</p>

        <br /><br /><br />
      <img src={vector} id="vector1"/>
      <p className="req">گوجه فرنگی ۱ عدد</p>

        <br /><br /><br />
      <img src={vector} id="vector1"/>
      <p className="req">آویشن به اندازه کافی</p>

      <br /><br /><br />
      <img src={vector} id="vector1"/>
      <p className="req">فلفل دلمه ای قرمز ۱ عدد</p>

      <br /><br /><br />
      <img src={vector} id="vector1"/>
      <p className="req">سوسیس پپرونی ۲۵۰ گرم</p>

      <br /><br /><br />
      <img src={vector} id="vector1"/>
      <p className="req">سس کچاپ ۲ قاشق غذاخوری</p>
      <br /> <br/>

      <span className="dot"> </span>
      <h2 id="require">طرز تهیه پیتزا پپرونی</h2>
      <br /> <br /> <br />

        <p id="how">
        ابتدا سوسیس پپرونی را روی تخته با چاقو ورقه ورقه برش می دهیم و فلفل دلمه ای را می شووسط آن را خالی می کنیم و روی تخته آشپزخانه برش های عمودی می دهیم<br /> و سپس افقی خرد می کنیم تا به صورت مربع های ریز در بیایند <br/>
        
        <br />
        و بعد گوجه فرنگی را آبکش می کنیم و داخل آن را با دقت خالی می کنیم چون در پیتزا باعث می شود خمیر خیس شود،پس فقط قسمت گوشت دار آن را خرد می کنیم به صورت
مربع های کوچک و مواد خرد شده<br/> را در بشقابی می ریزیم
        
        <br/> <br/>
        و فر را روشن می کنیم و روی ۱۸۰ درجه سانتیگراد قرار می دهیم تا گرم شود،سپس خمیر پیتزا را در کف قالب می گذاریم بطوریکه تمام قسمت های خمیر به صورت یکسان حجم
داشته باشد و روی آن صاف باشد.<br/> روی سطح خمیر سس کچاب می ریزیم
و با کف قاشق آن را روی خمیر کاملا می کشیم تا تمام نقاط خمیر از سس پوشیده شود و بعد نصف پنیر را روی خمیر می ریزیم دقیقا پنیر را نیز مانند سس سعی می کنیم<br/> به همه جای
خمیر بریزیم و مواد خرد شده را لایه لایه روی پنیر می ریزیم

        <br/><br/>
        به این شکل که سوسیس خرد شده را روی پنیر پخش می کنیم و سپس فلفل دلمه ای را روی سوسیس می ریزیم و در آخر گوجه فرنگی ها را روی کل سطح مواد می ریزیم و به هر
میزان که تمایل دارید آویشن<br/> روی مواد می پاشیم و باقی پنیر پیتزا را روی سطح مواد می ریزیم
        
        <br/><br/>
        تا کاملا مواد پیتزا را پوشش دهد.پیتزا را در فر قرار می دهیم تا پنیر آب آب شود و به رنگ طلایی در بیاید و پیتزا دارای حجم شود و اصطلاحا پف کند که ۱۵ الی ۲۰ دقیقه برای طی
شدن این فرآیند زمان لازم است.<br/> پیتزای آماده شده را از فر خارج کنید و با سس کچاب سرو کنید.نوش جان

        </p>

      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h3 id="similar">دستورهای پخت مشابه</h3>
      <br/><br/><br/><br/>
      
      <div className="recommend">

        <div className="rec1">

          <img src={meat} id="picR"/>
          <img src={pitza} id="PL"/>
          <p id="similarname">پیتزا گوشت و مرغ</p>
          <br/><br/><br/><br/><br/>
          <p id="similardet">
          پیتزا از تایپ تمام و فعلی که راهکارها و مورد
شناخت<br/> اصلی موجود افزارها و مورد وزمان و
افزارها درصد<br/> می دنیای رایانه گیرد وزمان را
... صورت طراحی مورد است
          </p>

          <a href="#"><input type="button" value="دستور پخت" id="similarbtn"/></a>

        </div>

        <div className="rec2" >

          <img src={vegtable} id="picR"/>
          <img src={pitza} id="PL"/>
          <p id="similarname">پیتزا سبزیجات</p>
          <br/><br/><br/><br/><br/>
          <p id="similardet">
          پیتزا از تایپ تمام و فعلی که راهکارها و مورد
شناخت<br/> اصلی موجود افزارها و مورد وزمان و
افزارها درصد<br/> می دنیای رایانه گیرد وزمان را
... صورت طراحی مورد است
          </p>

          <a href="#"><input type="button" value="دستور پخت" id="similarbtn"/></a>

        </div>

      </div>
      
  </div>

    );
}

export default Learn;