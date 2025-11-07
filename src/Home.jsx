import Marquee from "./Components/Marquee";
import UpperAppLogo from "./Components/UpperAppLogo";

function Home() {
    const BASE = import.meta.env.BASE_URL;
    const DASHBOARD = `${BASE}assets/dashboard.png`;
    const SOLO = `${BASE}/assets/soloImg.png`;
    const ICON = `${BASE}/assets/Icon.svg`;
    const video_img = `${BASE}/gitassets/video-img.png`;
    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="banner-top-heading">AI-Powered Task Management</div>
                        <h1>Connect. Pull. Plan.</h1>
                        <div className="banner-subheading">Start Ready, Not Reactive.</div>
                        <p>Turns scattered emails, calendars, and insights from tools into one calm daily plan. </p>
                        <div className="btn-group">
                            <a href="#">Enter your wrok email</a>
                            <a href="#">Start Seizing</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-section" style={{ backgroundImage: `url(${video_img})` }}>
                <div className="container">
                    <div className="spacer"></div>
                </div>
            </section>
            <section className="logo-section">
                <div className="w-full overflow-x-hidden">
                    <div className="logo-wrapper">
                        <Marquee />
                    </div>
                </div>
            </section>
            <section className="app-section">
                <div className="container">
                    <div className="app-container">
                        <div className="content mb-6">
                            <h2 className="text-center mb-4">Integrated with <span>Multiple Apps</span></h2>
                            <p className="text-center w-full max-w-[606px] mx-auto mb-6">Embark on a transformative journey with our venture. Powerful tools to make your work more efficient and effective.</p>
                        </div>
                        <div className="app_logo-wrapper overflow-x-hidden mt-10 mb-8">
                            <UpperAppLogo />
                        </div>
                    </div>
                </div>
            </section>
            <section className="dashboard-section">
                <div className="container">
                    <img className="w-full" src={DASHBOARD} alt="" />
                </div>
            </section>
            <section className="solo-section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <h2 className="mb-10">Start solo.<br /> <span>Grow with your team.</span></h2>
                            <p className="mb-10 w-full max-w-[431px]">Taskory began with individuals who needed a clearer day. Now small teams use it to stay aligned with less overhead.</p>
                            <a className="pt-3 pb-3 pl-9 pr-9 primary-btn" href="#">Get Started</a>
                        </div>
                        <div>
                            <img src={SOLO} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="works-section">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="mb-15 text-center text-white">How Taskory Works</h2>
                    <div className="works-conatainer grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-[997px] mx-auto">
                        <div className="work-wrapper">
                            <div class="relative w-[124px] h-[124px] rounded-[50%] border-white/10 bg-white/10  flex items-center justify-center top-circle">
                                <img src={ICON} alt="Connect" className="w-10 h-10" />
                            </div>
                            <div className=" relative w-[199px] h-[199px] bottom-circle rounded-[50%] border-white/10 bg-white/10 items-center flex justify-center text-center" >
                                <h5 className="text-white mb-4">Connect</h5>
                                <p className="text-white">Add your email(s) and tools you already use.</p>
                            </div>
                        </div>
                        <div className="work-wrapper">
                            <div className="relative w-[124px] h-[124px] rounded-[50%] border-white/10 bg-white/10  flex items-center justify-center top-circle">
                                <img src={ICON} alt="Connect" className="w-10 h-10" />
                            </div>
                            <div className=" relative w-[199px] h-[199px] bottom-circle rounded-[50%] border-white/10 bg-white/10 items-center flex justify-center text-center" >
                                <h5 className="text-white mb-4">Pull</h5>
                                <p className="text-white pl-2 pr-2">Taskory gathers tasks and syncs your calendar.</p>
                            </div>
                        </div>
                        <div className="work-wrapper">
                            <div className="relative w-[124px] h-[124px] rounded-[50%] border-white/10 bg-white/10  flex items-center justify-center top-circle">
                                <img src={ICON} alt="Connect" className="w-10 h-10" />
                            </div>
                            <div className=" relative w-[199px] h-[199px] bottom-circle rounded-[50%] border-white/10 bg-white/10 items-center flex justify-center text-center" >
                                <h5 className="text-white mb-4">Plan</h5>
                                <p className="text-white pl-1 pr-1">Get your clean daily list, ready to assign or act.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-section py-12 overflow-x-clip">  {/* prevents page scrollbar */}
                <div className="mx-auto max-w-[1280px] px-4 grid grid-cols-12 items-center">

                    {/* col-4 (left) */}
                    <div className="col-span-12 md:col-span-4">
                        <h2 className="text-black">
                            Why <span>Taskory</span>
                        </h2>
                    </div>

                    {/* col-8 (right) */}
                    <div className="col-span-12 md:col-span-8 min-w-0">
                        {/* bleed to viewport edge, but clip inside the section so no x-scroll */}
                        <div className="md:mr-[calc(50%-50vw)] md:pr-[calc(50%-50vw)] overflow-hidden">
                            <Marquee />
                        </div>
                    </div>

                </div>
            </section>




        </>
    );
}
export default Home;