import Marquee from "./Components/Marquee";
import Tabs from "./Components/Tabs";
import UpperAppLogo from "./Components/UpperAppLogo";
import WhyLowerSlider from "./Components/WhyLowerSlider";
import WhyUpperSlider from "./Components/WhyUpperSlider";


function Home() {
    const BASE = import.meta.env.BASE_URL;
    const DASHBOARD = `${BASE}assets/dashboard.png`;
    const SOLO = `${BASE}/assets/soloImg.png`;
    const ICON = `${BASE}/assets/Icon.svg`;
    const video_img = `${BASE}/assets/video-img.png`;
    const btn_arrow = `${BASE}/assets/arrow-up-right.png`;
    const activelisticon = `${BASE}assets/activelisticon.png`;
    const deadicon = `${BASE}assets/deadicon.png`;
    const bottomarrow = `${BASE}assets/bottomarrow.png`;
    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="banner-top-heading">AI-Powered Task Management</div>
                        <h1>Connect. Pull. Plan.</h1>
                        <div className="banner-subheading">Start Ready, Not Reactive.</div>
                        <p>Turns scattered emails, calendars, and insights from tools into one calm daily plan. </p>

                        <form action="" className="form-group flex gap-x-4 text-center justify-center">
                            <input
                                type="text"
                                placeholder="Enter your work email"
                                class="pt-4 pr-10 pb-4 pl-10 border-2 border-solid border-[#4A66D6] rounded-4xl max-w-[267px] w-full"
                            />
                            <div className="inline-block btn-group">
                                <a href="#">
                                    <div className="flex gap-2 pt-3.5 pb-3.5 pl-11 pr-11 primary-btn bg-[#FFCC86] text-center text-black shadow-[0px_10px_15px_-3px_#0000001A]">
                                        <span>Start Seizing</span>
                                        <img src={btn_arrow} alt="arrow" className="transition-transform duration-300 group-hover:rotate-45" />
                                    </div>
                                </a>
                            </div>
                        </form>
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
                            <div className="inline-block btn-group">
                                <a href="#">
                                    <div className="flex gap-2 pt-3 pb-3 pl-9 pr-9 primary-btn">
                                        <span>Get Started</span>
                                        <img src={btn_arrow} alt="arrow" className="transition-transform duration-300 group-hover:rotate-45" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src={SOLO} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="works-section">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-15 text-center text-white">How Taskory Works</h2>
                    <div className="works-conatainer grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-[997px] mx-auto">
                        <div className="work-wrapper">
                            <div className="relative w-[124px] h-[124px] rounded-[50%] border-white/10 bg-white/10  flex items-center justify-center top-circle">
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
                <div className="mx-auto max-w-7xl px-4 grid grid-cols-12 items-center mb-10">

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
                            <WhyUpperSlider />
                        </div>
                    </div>

                </div>
                <div className="mx-auto max-w-7xl px-4 grid grid-cols-12 items-center">
                    {/* col-8 (right) */}
                    <div className="col-span-12 md:col-span-12 min-w-0">
                        {/* bleed to viewport edge, but clip inside the section so no x-scroll */}
                        <div className="md:mr-[calc(50%-50vw)] md:pr-[calc(50%-50vw)] overflow-hidden">
                            <WhyLowerSlider />
                        </div>
                    </div>

                </div>
            </section>

            <section className="tabs-section">
                <div className="max-w-7xl mx-auto">
                    <Tabs />
                </div>
            </section>
            <section className="price-section">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="text-black">
                            <span>Start free</span> <br />Add more when you need it.
                        </h2>
                    </div>
                    <div className="max-w-5xl w-full mx-auto flex gap-x-10 align-middle justify-between">
                        <div className="bg-white border border-[#387FF5] rounded-xl p-10 shadow-[0px_62px_17px_0px_#387FF50D] w-full">
                            <div className="badge pt-1.5 pb-1.5 pr-4 pl-4 bg-black text-white rounded-4xl inline-block text-center mb-8">Free Plan</div>
                            <h3 className="block text-[#0A0A0A] mb-8">Free Plan Includes</h3>
                            <ul className="mb-8">
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={activelisticon} alt="" />
                                    <p className="text-[#0A0A0A]">Connect up to 2 email accounts</p>
                                </li>
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={activelisticon} alt="" />
                                    <p className="text-[#0A0A0A]">Calendar sync</p>
                                </li>
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={activelisticon} alt="" />
                                    <p className="text-[#0A0A0A]">Daily task view & reminders</p>
                                </li>
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={activelisticon} alt="" />
                                    <p className="text-[#0A0A0A]">Invite up to 2 teammates</p>
                                </li>
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={activelisticon} alt="" />
                                    <p className="text-[#0A0A0A]">Community resources</p>
                                </li>
                            </ul>
                            <div className="second-btn-group">
                                <a className="pt-3.5 pb-3.5 bg-[#FFCC86] rounded-4xl block text-center text-black shadow-[0px_10px_15px_-3px_#0000001A]" href="">Start Seizing - Free</a>
                            </div>
                        </div>
                        <div className="bg-[#F9FAFB] w-full border border-solid border-[#E5E7EB] rounded-3xl p-10">
                            <div className="badge pt-1.5 pb-1.5 pr-4 pl-4 bg-[#E5E7EB] text-[#364153] rounded-4xl inline-block text-center mb-8">Free Plan</div>
                            <h3 className="block text-[#0A0A0A] mb-8">Free Plan Includes</h3>
                            <ul className="mb-8">
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={deadicon} alt="" />
                                    <p className="text-[#0A0A0A]">Connect up to 2 email accounts</p>
                                </li>
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={deadicon} alt="" />
                                    <p className="text-[#0A0A0A]">Calendar sync</p>
                                </li>
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={deadicon} alt="" />
                                    <p className="text-[#0A0A0A]">Daily task view & reminders</p>
                                </li>
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={deadicon} alt="" />
                                    <p className="text-[#0A0A0A]">Invite up to 2 teammates</p>
                                </li>
                                <li className="flex gap-x-4 items-center mb-6">
                                    <img className="h-6" src={deadicon} alt="" />
                                    <p className="text-[#0A0A0A]">Community resources</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bottom-section bg-[#4A66D6]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-white mb-4">Take Your Business to the Next Level</h2>
                        <p className="text-white mb-10">Dive into the advantages of our CRM platform and witness the impact on your business.</p>
                        <div className="flex gap-x-7.5 w-full max-w-[437px] items-center justify-between mx-auto mb-10">
                            <div className="inline-block btn-group">
                                <a href="#">
                                    <div className="flex gap-2 pt-3 pb-3 pl-9 pr-9 primary-btn bg-white shadow-[0px_20px_25px_-5px_#0000001A]">
                                        <span>Join Waitlist Now</span>
                                        <img
                                            src={btn_arrow}
                                            alt="arrow"
                                            className="transition-transform duration-300 group-hover:rotate-45"
                                        />
                                    </div>
                                </a>
                            </div>
                            <a className="text-[#F3F5F9] underline underline-offset-4" href="#">Request a Demo</a>
                        </div>
                        <div className="flex gap-x-10 w-full max-w-[622px] items-center justify-between mx-auto bottom-list">
                            <div className="flex items-center gap-x-2">
                                <img src={bottomarrow} alt="" />
                                <p className="text-white">14-day free trial</p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img src={bottomarrow} alt="" />
                                <p className="text-white">No credit card required</p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <img src={bottomarrow} alt="" />
                                <p className="text-white">Cancel anytime</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </>
    );
}
export default Home;