import './App.css';
import group from './img/body/group.png';
import centere from './img/body/centere.png';
import vegtable from './img/body/vegtable.png';
import pepperoni from './img/body/pepperoni.png';
import meat from './img/body/meat.png';
import rost from './img/body/rost beef.png';
import chilly from './img/body/chilly.png';
import pitza from './img/body/pitza.png';
import {Route , Link , BrowserRouter as Router} from 'react-router-dom';
import Learn from './Learn';

function Menu() {
    return (
<div className="body">
        <img src={centere} id="pitzalogo"/>
        <p id="recepie">دستور پخت پیتزا</p>
        <img src={group} id="group"/>
        <p id="site">/آشپزشو</p>
        <p id="url">پیتزا</p>

        <div className="pitza" id="p1">
          <img src={vegtable} id="pitzapic"/>
          <img src={pitza} id="plogo" />
          <h3> پیتزا سبزیجات</h3>

          <p className="detail">
          پیتزا از تایپ تمام و فعلی که راهکارها و مورد شناخت اصلی موجود افزارها و مورد وزمان و افزارها درصد می دنیای رایانه گیرد<br /> وزمان را صورت
طراحی مورد پیشرو خلاقی و فراوان شصت توان استفاده به زبان می لازم شامل این جامعه تا لورم پیوسته طراحان استفاده ارائه آینده ایجاد و
تکنولوژی<br /> با ساختگی چاپ علی هدف سطرآنچنان ساختگی با طراحان متون کاربردی زیاد
          </p>
      
          <a href="#"><input type="button" value="دستور پخت" id="recepiebtn"/></a>
        </div>

        <div className="pitza" id="p2">
          <img src={pepperoni} id="pitzapic"/>
          <img src={pitza} id="plogo" />
          <h3>پیتزا پپرونی</h3>

          <p className="detail">
          پیتزا از تایپ تمام و فعلی که راهکارها و مورد شناخت اصلی موجود افزارها و مورد وزمان و افزارها درصد می دنیای رایانه گیرد<br /> وزمان را صورت
طراحی مورد پیشرو خلاقی و فراوان شصت توان استفاده به زبان می لازم شامل این جامعه تا لورم پیوسته طراحان استفاده ارائه آینده ایجاد و
تکنولوژی<br /> با ساختگی چاپ علی هدف سطرآنچنان ساختگی با طراحان متون کاربردی زیاد
          </p>

          <Router>
              <Link to="/Learn"><input type="button" value="دستور پخت" id="recepiebtn"/></Link>

              <Route path="/Learn" component={Learn} />
          </Router>
            
        </div>

        <div className="pitza" id="p3">
          <img src={meat} id="pitzapic"/>
          <img src={pitza} id="plogo" />
          <h3>پیتزا مرغ و گوشت</h3>

          <p className="detail">
          پیتزا از تایپ تمام و فعلی که راهکارها و مورد شناخت اصلی موجود افزارها و مورد وزمان و افزارها درصد می دنیای رایانه گیرد<br /> وزمان را صورت
طراحی مورد پیشرو خلاقی و فراوان شصت توان استفاده به زبان می لازم شامل این جامعه تا لورم پیوسته طراحان استفاده ارائه آینده ایجاد و
تکنولوژی<br /> با ساختگی چاپ علی هدف سطرآنچنان ساختگی با طراحان متون کاربردی زیاد
          </p>

          <a href="#"><input type="button" value="دستور پخت" id="recepiebtn"/></a>
        </div>

        <div className="pitza" id="p4">
          <img src={rost} id="pitzapic"/>
          <img src={pitza} id="plogo" />
          <h3>پیتزا رست بیف</h3>

          <p className="detail">
          پیتزا از تایپ تمام و فعلی که راهکارها و مورد شناخت اصلی موجود افزارها و مورد وزمان و افزارها درصد می دنیای رایانه گیرد<br /> وزمان را صورت
طراحی مورد پیشرو خلاقی و فراوان شصت توان استفاده به زبان می لازم شامل این جامعه تا لورم پیوسته طراحان استفاده ارائه آینده ایجاد و
تکنولوژی<br /> با ساختگی چاپ علی هدف سطرآنچنان ساختگی با طراحان متون کاربردی زیاد
          </p>

          <a href="#"><input type="button" value="دستور پخت" id="recepiebtn"/></a>
        </div>

        <div className="pitza" id="p5">
        <img src={chilly} id="pitzapic"/>
        <img src={pitza} id="plogo" />
        <h3>پیتزا چیلی</h3>

        <p className="detail">
          پیتزا از تایپ تمام و فعلی که راهکارها و مورد شناخت اصلی موجود افزارها و مورد وزمان و افزارها درصد می دنیای رایانه گیرد<br /> وزمان را صورت
طراحی مورد پیشرو خلاقی و فراوان شصت توان استفاده به زبان می لازم شامل این جامعه تا لورم پیوسته طراحان استفاده ارائه آینده ایجاد و
تکنولوژی<br /> با ساختگی چاپ علی هدف سطرآنچنان ساختگی با طراحان متون کاربردی زیاد
          </p>

          <a href="#"><input type="button" value="دستور پخت" id="recepiebtn"/></a>
        </div>

      </div>

    );
}

export default Menu;