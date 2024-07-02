import React, { useEffect, useState } from 'react'
import Head from 'next/head'

export default function MyApp() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPopUp, setIsPopUp] = useState(false)

  const handleScroll = () => {
    const position = document.documentElement.scrollTop
    setScrollPosition(position)
  }

  const cutPopUp = () => {
    console.log(isPopUp)
    setIsPopUp(!isPopUp)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // 组件卸载时移除监听事件
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Head>
        <title>首页</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>

      <header className="fixed top-0 z-10 flex justify-between head">
        <div className="flex items-center top-left">
          <div className="flex items-center logo">
            <a className="mx-1">
              <div className="logo-imgBox">
                <img src="" alt="" />
              </div>
            </a>

            <span>Community</span>
          </div>

          <div className="flex ml-3 tl-box">
            <div className="flex items-center tl-item">
              <div className="px-3 m-1 rounded menu">
                <div>
                  <span>Design resources</span>

                  <span className="px-1 mx-1 top-new">new</span>

                  <span className="ml-2 arrows"></span>
                </div>

                <div className="fixed z-10 flex px-6 pt-6 pb-8 overflow-hidden left-28 top-16 rounded-2xl menu-card">
                  <div className="flex flex-col card rounded-2xl">
                    <div className="px-6 pt-5">
                      <p className="mct-title">UI kits</p>

                      <p className="mct-details">
                        Pre-made essentials like buttons and toasts
                      </p>
                    </div>

                    <div className="relative flex-grow overflow-hidden">
                      <div className="absolute z-10 shadow-md mci-one right-10 top-12 rounded-xl"></div>

                      <div className="absolute shadow-md mci-two right-6 top-8 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex p-3 more-menu" onClick={cutPopUp}>
              <div
                className="mr-3 icon"
                style={{ width: '24px', height: '24px', background: 'pink' }}
              ></div>

              <p>Browse</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pr-3 top-right">
          <div
            className={
              'flex pl-2 top-search roun ' +
              (scrollPosition >= 100 ? 'opacity-100' : 'opacity-0')
            }
          >
            <div className="icon"></div>

            <input type="text" />
          </div>

          <div className="flex items-center gap-4 login">
            <button>Log in</button>

            <button className="px-4 py-2 rounded btn">Sign up</button>
          </div>
        </div>
      </header>

      <div className="flex justify-center px-8 body-box">
        <div className="flex flex-col gap-24 pt-12 body">
          <div className="search">
            <div className="flex pl-2 search roun">
              <div className="icon"></div>

              <input type="text" />
            </div>
          </div>

          <div>
            <div className="pb-4 title-box">
              <h3 className="title">Build beautiful presentations</h3>

              <div className="flex justify-between pt-1">
                <p className="detail">
                  Find decks to help you quickly design out your ideas. Easy to
                  use, whether you're a beginner or an expert.
                </p>

                <div className="more">
                  Browse all
                  <span className="ml-1 arrows"></span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-8 pre-box">
              <div className="py-2 -my-1 pi-box">
                <div className="relative rounded-xl p-img">
                  <img src="" alt="" />

                  <div className="absolute pib-icon left-3 bottom-3"></div>
                </div>

                <div className="flex items-center justify-between p-introduce">
                  <div>
                    <p className="pi-title">Light slides</p>

                    <p>by Figma</p>
                  </div>

                  <div className="flex flux">
                    <p className="flex items-center mr-1">
                      <span className="mr-1 icon"></span>

                      <span>85</span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-1 icon"></span>

                      <span>67.5k</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-2 -my-1 pi-box">
                <div className="relative rounded-xl p-img">
                  <img src="" alt="" />

                  <div className="absolute pib-icon left-3 bottom-3"></div>
                </div>

                <div className="flex items-center justify-between p-introduce">
                  <div>
                    <p className="pi-title">Light slides</p>

                    <p>by Figma</p>
                  </div>

                  <div className="flex flux">
                    <p className="flex items-center mr-1">
                      <span className="mr-1 icon"></span>

                      <span>85</span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-1 icon"></span>

                      <span>67.5k</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-2 -my-1 pi-box">
                <div className="relative rounded-xl p-img">
                  <img src="" alt="" />

                  <div className="absolute pib-icon left-3 bottom-3"></div>
                </div>

                <div className="flex items-center justify-between p-introduce">
                  <div>
                    <p className="pi-title">Light slides</p>

                    <p>by Figma</p>
                  </div>

                  <div className="flex flux">
                    <p className="flex items-center mr-1">
                      <span className="mr-1 icon"></span>

                      <span>85</span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-1 icon"></span>

                      <span>67.5k</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-2 -my-1 pi-box">
                <div className="relative rounded-xl p-img">
                  <img src="" alt="" />

                  <div className="absolute pib-icon left-3 bottom-3"></div>
                </div>

                <div className="flex items-center justify-between p-introduce">
                  <div>
                    <p className="pi-title">Light slides</p>

                    <p>by Figma</p>
                  </div>

                  <div className="flex flux">
                    <p className="flex items-center mr-1">
                      <span className="mr-1 icon"></span>

                      <span>85</span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-1 icon"></span>

                      <span>67.5k</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-2 -my-1 pi-box">
                <div className="relative rounded-xl p-img">
                  <img src="" alt="" />

                  <div className="absolute pib-icon left-3 bottom-3"></div>
                </div>

                <div className="flex items-center justify-between p-introduce">
                  <div>
                    <p className="pi-title">Light slides</p>

                    <p>by Figma</p>
                  </div>

                  <div className="flex flux">
                    <p className="flex items-center mr-1">
                      <span className="mr-1 icon"></span>

                      <span>85</span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-1 icon"></span>

                      <span>67.5k</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-2 -my-1 pi-box">
                <div className="relative rounded-xl p-img">
                  <img src="" alt="" />

                  <div className="absolute pib-icon left-3 bottom-3"></div>
                </div>

                <div className="flex items-center justify-between p-introduce">
                  <div>
                    <p className="pi-title">Light slides</p>

                    <p>by Figma</p>
                  </div>

                  <div className="flex flux">
                    <p className="flex items-center mr-1">
                      <span className="mr-1 icon"></span>

                      <span>85</span>
                    </p>

                    <p className="flex items-center">
                      <span className="mr-1 icon"></span>

                      <span>67.5k</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="pb-4 title-box">
              <h3 className="title">Plugins</h3>

              <div className="flex justify-between pt-1">
                <p className="detail">
                  Tools to speed up and automate your processes.
                </p>

                <div className="more">
                  Browse all
                  <span className="ml-1 arrows"></span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="flex flex-row items-center justify-center plugins-box">
                  <div className="mr-4 plu-cover rounded-2xl"></div>

                  <div className="flex flex-row items-center justify-between flex-grow gap-3 plu-details">
                    <div className="flex flex-col items-start justify-center gap-1 plud-details">
                      <div className="flex plud-title">
                        <p className="mr-2">Remove BG</p>

                        <p className="label">Third-party payment</p>
                      </div>

                      <div>
                        Remove the background of images automatically with just
                        a single click.
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="h-portrait rounded-xl"></div>

                      <div className="flex pl-3 pr-6 flux">
                        <p className="flex items-center mr-1">
                          <span className="mr-1 icon"></span>

                          <span>85</span>
                        </p>

                        <p className="flex items-center">
                          <span className="mr-1 icon"></span>

                          <span>67.5k</span>
                        </p>
                      </div>

                      <button className="px-4 py-2 rounded btn">
                        Try it out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="px-6 pt-6 pb-8">
            <div className="flex gap-8 mb-12 footer-link">
              <div className="pr-4 fl-item">
                <div>Popular searches</div>

                <p>Resume templates</p>

                <p>Mobile apps</p>

                <p>Presentation templates</p>

                <p>UI kits</p>

                <p>Standup templates</p>
              </div>

              <div className="pr-4 fl-item">
                <div>Popular searches</div>

                <p>Resume templates</p>

                <p>Mobile apps</p>

                <p>Presentation templates</p>

                <p>UI kits</p>

                <p>Standup templates</p>
              </div>

              <div className="pr-4 fl-item">
                <div>Popular searches</div>

                <p>Resume templates</p>

                <p>Mobile apps</p>

                <p>Presentation templates</p>

                <p>UI kits</p>

                <p>Standup templates</p>
              </div>

              <div className="pr-4 fl-item">
                <div>Popular searches</div>

                <p>Resume templates</p>

                <p>Mobile apps</p>

                <p>Presentation templates</p>

                <p>UI kits</p>

                <p>Standup templates</p>
              </div>
            </div>

            <div className="register">
              <div className="name">Figma</div>

              <div className="flex items-center mt-4">
                <p>© 2024 Figma, Inc.</p>

                <span>•</span>

                <p>Site map</p>

                <span>•</span>

                <p>Community guidelines</p>

                <span>•</span>

                <p>Terms of service</p>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div
        className={
          'pop-up fixed top-0 left-0 z-20 ' + (isPopUp ? 'block' : 'hidden')
        }
      >
        <div className="p-6 pu-content">
          <div className="flex justify-between pui-box">
            <div className="icon"></div>

            <div className="icon" onClick={cutPopUp}></div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  )
}
