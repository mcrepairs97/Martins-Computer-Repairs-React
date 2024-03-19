import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Martin's Computer Repairs</title>
        <meta property="og:title" content="Martin's Computer Repairs" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img alt="logo" src="/weblogo-1500h.png" className="home-image" />
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links">
            <span className="home-text">About</span>
            <span className="home-text01">Features</span>
            <span className="home-text02">Pricing</span>
            <span className="home-text03">Team</span>
            <span className="home-text04">Blog</span>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img alt="image" src="/weblogo-1500h.png" className="home-logo" />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-text05">About</span>
              <span className="home-text06">Features</span>
              <span className="home-text07">Pricing</span>
              <span className="home-text08">Team</span>
              <span className="home-text09">Blog</span>
            </nav>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container01">
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04">
              <div className="home-container05">
                <span className="home-text10">
                  <span className="home-text11">Need a fix or upgrade?</span>
                  <br className="home-text12"></br>
                  <span className="home-text13">
                    Maybe you due for a service!
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container06">
                <button type="button" className="home-button button">
                  Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container07">
        <div className="home-container08">
          <div className="home-container09">
            <span className="home-text15">WHAT WE DO</span>
          </div>
        </div>
      </div>
      <div className="home-container10">
        <div className="home-container11">
          <div className="home-container12">
            <div className="home-container13">
              <img
                src="/Assets/laptop-200h.png"
                alt="image"
                className="home-image1"
              />
            </div>
            <div className="home-container14">
              <div className="home-container15">
                <h1 className="home-text16">SYSTEM UPGRADES</h1>
                <div className="home-container16">
                  <span className="home-text17">
                    <span>
                      IS IT THAT TIME
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      TO UPGRADE YOUR
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>SYSTEM AGAIN</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container17">
          <div className="home-container18">
            <img
              src="/Assets/customnpc-200h.png"
              alt="image"
              className="home-image2"
            />
          </div>
          <div className="home-container19">
            <div className="home-container20">
              <h1 className="home-text24">CUSTOM BUILDS</h1>
              <div className="home-container21">
                <span className="home-text25">
                  <span>SELECT PARTS TO</span>
                  <br></br>
                  <span>SPEC &amp; DESIGN</span>
                  <br></br>
                  <span>YOUR OWN SYSTEM</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container22">
          <div className="home-container23">
            <img
              src="/Assets/abtt2-200h.png"
              alt="image"
              className="home-image3"
            />
          </div>
          <div className="home-container24">
            <div className="home-container25">
              <h1 className="home-text32">LAPTOP MODULES</h1>
              <div className="home-container26">
                <span className="home-text33">
                  <span>WE ALSO REPLACE</span>
                  <br></br>
                  <span>LCD, KEYBOARDS &amp;</span>
                  <br></br>
                  <span>BATTERIES.</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container27"></div>
      <footer className="home-footer">
        <div className="home-container28">
          <div className="home-links-container">
            <div className="home-container29">
              <div className="home-contact">
                <span className="home-text40">CONTACT US</span>
                <span className="home-text41">
                  m.computerrepairs.kzn@gmail.com
                </span>
                <span className="home-text42">+27 63 024 1370</span>
              </div>
              <div className="home-socials">
                <span className="home-text43">Follow Us</span>
                <div className="home-icon-group1">
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="home-container30">
              <div className="home-product-container">
                <span className="home-text44">BUSINESS HOURS</span>
                <span className="home-text45">
                  <span>Monday</span>
                  <br></br>
                </span>
                <span className="home-text48">Tuesday</span>
                <span className="home-text49">Wednesday</span>
                <span className="home-text50">Thursday</span>
                <span className="home-text51">Friday</span>
                <span className="home-text52">
                  <span>Saturday</span>
                  <br></br>
                </span>
                <span className="home-text55">Sunday</span>
              </div>
              <div className="home-product-container1">
                <span className="home-text56">BUSINESS HOURS</span>
                <span className="home-text57">
                  <span>8:00 am - 5:00 pm</span>
                  <br></br>
                </span>
                <span className="home-text60">
                  <span>8:00 am - 5:00 pm</span>
                  <br></br>
                </span>
                <span className="home-text63">
                  <span>8:00 am - 5:00 pm</span>
                  <br></br>
                </span>
                <span className="home-text66">
                  <span>8:00 am - 5:00 pm</span>
                  <br></br>
                </span>
                <span className="home-text69">
                  <span>8:00 am - 5:00 pm</span>
                  <br></br>
                </span>
                <span className="home-text72">
                  <span>9:00 am - 3:00 pm</span>
                  <br></br>
                </span>
                <span className="home-text75">
                  <span>Closed</span>
                  <br></br>
                </span>
              </div>
              <div className="home-company-container">
                <span className="home-text78">LOCATION</span>
                <div className="home-container31">
                  <div className="home-container32">
                    <Script
                      html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.8966170574054!2d31.027639575548086!3d-29.89607937499874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8895273770221aa7%3A0x26bd2e1d25aaec31!2sMartin&#39;s%20Computer%20Repairs!5e0!3m2!1sen!2sza!4v1710856115688!5m2!1sen!2sza" width="1920" height="1080" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
                    ></Script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <div className="home-container33">
          <div className="home-container34">
            <span className="home-text79">
              Copyright © 2024 Martin&apos;s Computer Repairs
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="home-container35">
          <div className="home-container36">
            <div className="home-container37"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
