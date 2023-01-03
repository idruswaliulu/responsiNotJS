import './app.css';
import hero from '../aset/kampus1.jpeg'
import kampus1 from '../aset/kampus3.jpg'
import kampus2 from '../aset/kampus11.jpg'
import fasilitas from '../aset/lb.jfif'
import fasilitas1 from '../aset/lb1.jfif'
import fasilitas3 from '../aset/lb2.jfif'

const Navigation = ()=>{
  return (
    <div>
    <section class="header">
    <nav>
        <a href="index.html"> <img src=''></img></a>
        <div class="nav-links" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="course.html">COURSE</a></li>
                <li><a href="blog.html">BLOG</a></li>
                <li><a href="contact.html">CONTACT </a></li>
            </ul>
        </div>
        <i class="fa fa-bars" onclick="showMenu()" ></i>
    </nav>



        <div class="text-box">
            <h1>SMA NEGRI 5 SERAM BAGIAN BARAT</h1>
            <p>Kami Datang Untuk belajar dan mendapatkan hasil yang bagus  untuk kedepanya di jenjang paling tinggi </p>
            <a href="about.html" class="hero-btn">Red More  </a>
        </div>
</section>

<section class="course">
        <h1>OUR DEPARTMENT</h1>
        <p>Here you can choose a class according to your talent </p>

        <div class="row">
            <div class="course-col">
                <h3>IPA</h3>
                <p>The science department mainly focuses on studying the natural sciences. Includes physics, which studies the symptoms and properties of objects in nature, such as waves, energy, charge, power and so on</p>
            </div>
            <div class="course-col">
                <h3>IPS</h3>
                <p> The subject matter in the Department of Social Sciences (IPS) is related to human behavior and social phenomena that occur in society.</p>
            </div>
            <div class="course-col">
                <h3>TEKNIK</h3>
                <p>Starting from the manufacture of transportation, technology, public facilities, satellites, to resources, everything can be explored more deeply according to the engineering major you choose. If you take an engineering course, you will learn how to solve problems rationally and logically using science and mathematics. </p>
            </div>
            
        </div>

    </section>

    <section class="campus">
        <h1>Our Global</h1>
        <p>Gadjah Mada University is a public university in the Special Region of Yogyakarta, Indonesia. </p>

        <div class="row">
            <div class="campus-col">
            <img
              className="d-block w-100"
              src={hero}
              alt="First slide"
            />
                <div class="layer">
                    <h3>UNIVERSITAS GAJA MADA</h3>
                </div>
            </div>
            <div class="campus-col">
            <img
              className="d-block w-100"
              src={kampus1}
              alt="First slide"
            />
                <div class="layer">
                    <h3>KAMPUS 1</h3>
                </div>
            </div>
            <div class="campus-col">
            <img
              className="d-block w-100"
              src={kampus2}
              alt="First slide"
            />
                <div class="layer">
                    <h3>KAMPUS 2</h3>
                </div>
            </div>
            
        </div>
    </section>


    <section class="fasilitas">
        <h1>FASILITAS SCHOOL</h1>

        <div class="row">
            <div class="fasilitas-col">
            <img
              className="d-block w-100"
              src={fasilitas}
              alt="First slide"
            />
                <h3>Library </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore distinctio consequatur dolorem ipsam, excepturi quis. Aliquam, vitae consequatur</p>
            </div>
            <div class="fasilitas-col">
            <img
              className="d-block w-100"
              src={fasilitas1}
              alt="First slide"
            />
                <h3>Canteen </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore distinctio consequatur dolorem ipsam, excepturi quis. Aliquam, vitae consequatur</p>
            </div>
            <div class="fasilitas-col">
            <img
              className="d-block w-100"
              src={fasilitas3}
              alt="First slide"
            />
                <h3>Study room</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore distinctio consequatur dolorem ipsam, excepturi quis. Aliquam, vitae consequatur</p>
            </div>
        </div>
    </section>







    <section class="cta">
        <h1>Enroll for our Various online courses  Anywhare from The Worls</h1>
        <a href="contact.html" class="hero-btn">Contact US</a>
    </section>

  

    <section class="foother">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi impedit, minima quisquam id libero autem magni eum qui voluptate  nostrum officia dolorem provident necessitatibus illo soluta neque porro debitis.</p>
        <div class="icons">
        <i class="fa fa-facebook"  ></i>
        <i class="fa fa-twitter" ></i>
        <i class="fa fa-instagram" ></i>
        <i class="fa fa-linkedin" ></i>
    </div>
        <p>23-10-2022 &copy; Kelompok 1</p>   
        <p>Made with <i class="fa fa-heart-o" > </i> Muhammad Idrus waliulu</p>  
    </section>



</div>


  );
}

export default Navigation;