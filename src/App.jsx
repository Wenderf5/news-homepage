//Style
import styleApp from './styles/App.module.css';

//Components
import NavBar from './components/NavBar/NavBar';
import New from './components/New/New';
import News1 from './components/News1/News1';

//img
import imghome from './img/image-web-3-desktop.jpg';
import img1 from './img/image-retro-pcs.jpg';
import img2 from './img/image-top-laptops.jpg';
import img3 from './img/image-gaming-growth.jpg';


function App() {
  return (
    <div>
      <header className={styleApp.header}><NavBar /></header>
      <div className={styleApp.container}>
        <div className={styleApp.containerconteudoprincipal}>
          <div className={styleApp.divA}>
            <div className={styleApp.divB}>
              <div className={styleApp.divimghome}><img style={{ width: "100%" }} src={imghome} alt="" /></div>
              <div className={styleApp.divtxthome}>
                <div className={styleApp.txthome}>
                  <h1>
                    The Bright <br /> Future of <br /> Web 3.0?
                  </h1>
                </div>
                <div className={styleApp.div1893}>
                  <div className={styleApp.div1921}>
                    <span>
                      We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </span>
                  </div>
                  <div className={styleApp.divbtn7778643}>
                    <button className={styleApp.btn7778643}>Read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styleApp.divC}>
              <div className={styleApp.div127178}>
                <div className={styleApp.ttl31231}>New</div>
                <New />
                <div><hr /></div>
                <New titulo={"The Downsides of AI Artistry"} txt={"What are the possible adverse effects of on-demand AI image generation?"} />
                <div><hr /></div>
                <New titulo={"Is VC Funding Drying Up?"} txt={"Private funding by VC firms is down 50% YOY. We take a look at what that means."} />
              </div>
            </div>
          </div>
          <div className={styleApp.div8366}>
            <News1 />
            <News1 img={img2} titulo={"Top 10 Laptops of 2022"} txt={"Our best picks for various needs and budgets. "} numero={"02"} />
            <News1 img={img3} titulo={"The Growth of Gaming"} txt={"How the pandemic has sparked fresh opportunities."} numero={"03"} />
          </div>
        </div>
      </div>
      <footer className={styleApp.footer}></footer>
    </div>
  )
}
export default App