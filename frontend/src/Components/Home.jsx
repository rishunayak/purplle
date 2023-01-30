import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

const data = [
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991841_face-creams.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991839_lipsticks.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991840_foundations.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991842_eyeshadows.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991841_face-serums.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991840_facewashes.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991839_hair-colors.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991842_eyeliners.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991843_conditioners.jpg",
    link: "",
  },
];

const data2 = [
  {
    img: "https://media6.ppl-media.com/tr:w-582,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673531018_wfh-look.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-582,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673531019_weekend-party-look.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-582,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673531020_traditional-look.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-582,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673531020_sleepover-look.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-582,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673531021_date-night-look.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-582,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673531022_festive-look.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-582,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673531023_no-makeup-look.jpg",
    link: "",
  },
];

const data3 = [
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252413_10.-ny-bae-makeup-remover-wipes.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252408_18.-swiss-beauty-ultimate-eyeshadow-palette-kit.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670237328_3.-swiss-beauty-professional-face-eye-brush-set.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252406_20.-mamaearth-vitamin-c-under-eye-cream.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252409_16.-lakme-peach-milk-soft-creme-moisturizer.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252407_19.-cetaphil-gentle-skin-cleanser.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252410_15.-stay-quirky-super-black-kajal-dual-pack.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670237325_7.-lakme-nail-polish-remover.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252412_13.-neutrogena-hydro-boost-water-gel.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252414_11.-alps-goodness-powder-methi.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252401_25.-good-vibes-coffee-brightening-sheet-mask.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252408_17.-loreal-paris-dream-lengths-detangling-conditioner.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670237327_4.-reequil-spf-50-gel-sunscreenpa.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252411_14.-plum-green-tea-pore-cleansing-face-wash.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670237326_6.-purplle-dream-blend-beauty-blender-cream.jpg",
    link: "",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1670252402_24.-fiama-gel-bar-celebration-pack-of-5_.jpg",
    link: "",
  },
]
const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{marginLeft:"9%",marginRight:"9%"}}>
      <div>
        <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} autoPlaySpeed={1000}  customTransition="all .5"
  transitionDuration={500}>
          <div >
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1669887376_final-2.5-lacs-women-wishlisted-web.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673938537_hair-serums-web.gif"
            />
          </div>
        </Carousel>
      </div>


      <div>
        <div style={{marginTop:"50px"}}>
          <img
            width={"100%"}
            src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674476143_1280x272-web.jpg"
          />
        </div>
      </div>

      <div style={{marginTop:"50px"}}>
        <Carousel responsive={responsive2} >
          {data.map((item) => (
            <div>
              <img width={"50%"} src={item.img} />
            </div>
          ))}
        </Carousel>
      </div>
     


      {/* Products */}




      <div>
        <div style={{marginTop:"50px" }}>
          <img
            width={"100%"}
            src="https://media6.ppl-media.com/tr:w-1280,ar-80-17,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674818261_thickstrip_web.jpg"
          />
        </div>
      </div>


      <div style={{marginTop:"50px"}}>
        <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674661780_freegift_thickstrip_mov549_web-1.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674661784_799-web.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674661778_ft-new-strip-web-1280-x-272-1.gif"
            />
          </div>
        </Carousel>
      </div>

      {/* Products */}

      <div style={{marginTop:"50px"}}>
        <div>
          <img
            width={"100%"}
            src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1669989418_what-is-everybody-looking-for_-web.jpg"
          />
        </div>
      </div>

      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673529559_mini-lipstick.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673529554_nude-lipstick.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-427,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673529545_white-kajal.jpg"
            />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-427,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673529550_sanitary-care.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-427,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673529557_moisturizer-for-face.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-427,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673529565_kajal.jpg"
            />
          </div>
        </div>
      </div>


      {/* products */}


      <div style={{marginTop:"50px"}}>
        <div>
          <img src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1669989272_high-rated-products-just-for-you-web.jpg" />
        </div>
        <div>
        <Carousel responsive={responsive2} >
          {data3.map((item) => (
            <div>
              <img width={"70%"} src={item.img} />
            </div>
          ))}
        </Carousel>
      </div>
      </div>
       



      {/* products */}



      <div style={{marginTop:"50px"}}>
        <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674829039_swiss-beauty_-spectacular-2596x836.jpeg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674829518_maybelline_web_hp-1.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674650266_exclusivestamp01_hpweb-2.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674630796_hp-web.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674632117_faces_yami-kajal-copy-1-2596x836.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674106511_pu_webhp-1.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674829415_plum-rashmika-ihb-2596x836.jpeg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674829725_ezgif-2-c62c865092.gif"
            />
          </div>
        </Carousel>
      </div>


      <div style={{marginTop:"50px"}}>
        <Carousel responsive={responsive2} >
          {data2.map((item) => (
            <div>
              <img width={"70%"} src={item.img} />
            </div>
          ))}
        </Carousel>
      </div>




      <div style={{marginTop:"50px"}}>
        <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674830478_lakme_flawless-base-2596x836.jpeg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674830131_mamaearth_face-cream-2596x836.jpeg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674632101_1298x418_.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674888397_carmesi_razor-2596x836.jpeg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674028830_hpweb-1.jpg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674029254_sq_bold-talk-lipstick-ws-2596x836.jpeg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674830228_cetaphil_darkspots-2596x836.jpeg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674905888_k-beauty_brand-banner-1.gif"
            />
          </div>
        </Carousel>
      </div>

    {/* products */}

      <div>
        <img src="https://media6.ppl-media.com/tr:w-1280,ar-128-15,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1666088010_har-hair-concern-ka-solution_web.jpg" />
      </div>




      <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-320,ar-8-5,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735804_untitled-1_01.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-320,ar-8-5,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735807_untitled-1_02.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-320,ar-8-5,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735810_untitled-1_03.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-320,ar-8-5,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735813_untitled-1_04.gif"
            />
          </div>
        </div> 
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-320,ar-8-5,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735816_untitled-1_05.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-320,ar-8-5,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735819_untitled-1_06.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-320,ar-8-5,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735822_untitled-1_07.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-320,ar-8-5,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735823_untitled-1_08.gif"
            />
          </div>
        </div> 
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-427,ar-427-400,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735794_hair-tiles_01.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-427,ar-427-400,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735798_hair-tiles_02.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-427,ar-427-400,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1667735799_hair-tiles_03.gif"
            />
          </div>
        </div>
      </div>



      <div style={{marginTop:"50px"}}>
        <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} autoPlaySpeed={1000}  customTransition="all .5"
  transitionDuration={500}>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674849517_cuffs-n-lashes_hydrating-foundation-2596x836.jpeg"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674831963_rire_web_hp.gif?tr=f-gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674832057_purito_web_hp.gif"
            />
          </div>
          <div>
            <img
              width={"100%"}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674836224_round-lab_web_hp-1.gif"
            />
          </div>
        </Carousel>
      </div>



      <div style={{marginTop:"50px"}}>
        <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1661349188_discover-all-products-on-purplle-web.jpg" />
      </div>


      <div style={{marginTop:"50px"}}>
        <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1639028230_alert-strip-web.jpg" />
      </div>



      <div style={{marginTop:"50px"}}>
        <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1662556480_benefit-icons-strip-web.jpg"></img>
      </div>


    </div>
  );
};

export default Home;
