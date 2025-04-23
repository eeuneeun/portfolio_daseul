import React, { useState } from 'react';
import '../App.css';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


  const Main = () => {
  const [상태,상태변경]=useState("사과") 
  function toggle_fruit() {
    if(상태=="딸기"){
      상태변경("사과")
    }
    else if(상태=="사과")
    {
      상태변경("딸기")
    }
  }
  return (

    <> 
     <h3 className='hello'>hello,world</h3>
     <h4><a href="/myinfo">내정보</a></h4>
      <h5><button onClick={toggle_fruit}>변경버튼</button></h5>
      <h2>{상태}</h2> 
          
      <div id="main">
        
							<section id="one">
								<div className="inner">
									<header className="major">
										<h2>Sed amet aliquam</h2>
									</header>
									<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
								</div>
							</section>
          
          <section id="two" className="spotlights">
            <section>
              <a href="generic.html" className="image">
                <img src="images/pic08.jpg" alt="" data-position="center center" />
              </a>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Orci maecenas</h3>
                  </header>
                  <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                  <ul className="actions">
                    <li><a href="generic.html" className="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a href="generic.html" className="image">
                <img src="images/pic09.jpg" alt="" data-position="top center" />
              </a>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Rhoncus magna</h3>
                  </header>
                  <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                  <ul className="actions">
                    <li><a href="generic.html" className="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a href="generic.html" className="image">
                <img src="images/pic10.jpg" alt="" data-position="25% 25%" />
              </a>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Sed nunc ligula</h3>
                  </header>
                  <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                  <ul className="actions">
                    <li><a href="generic.html" className="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </section>

        
          <section id="three">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
              <ul className="actions">
                <li><a href="generic.html" className="button next">Get Started</a></li>
              </ul>
            </div>
          </section>

      </div>

      <Contact />
        <Footer />
    </>
    );
  }

  
export default Main
