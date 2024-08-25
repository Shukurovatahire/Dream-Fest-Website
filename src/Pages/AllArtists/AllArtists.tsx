import ArtistCard from "../../Components/ArtistCards/ArtistCard";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import Haeder from "../../Components/Header/Header";
import "./AllArtists.css";

const AllArtists = () => {
  return (
    <>
      <section className="allStars">
        <Haeder />
        <div className="wrapperBox">
          <div className="cardContainer">
            <h1 className="cardTitle">All artists</h1>
          <div className="breadCrumb">
            <BreadCrumb/>
          </div>
            <div className="cards">
              <ArtistCard
                musicLink="https://music.apple.com/us/artist/jason-derulo/259118085"
                text="JASON DERULO"
                image="https://optim.tildacdn.one/tild3564-6361-4538-a533-383761376164/-/cover/520x520/center/center/-/format/webp/23.png"
              />
              <ArtistCard
                text="imany"
                image="https://optim.tildacdn.one/tild3037-3732-4533-b438-623066323234/-/cover/520x520/center/center/-/format/webp/3.png"
                musicLink="https://music.apple.com/us/artist/imany/400911859"
              />
              <ArtistCard
                text="emin"
                image="https://optim.tildacdn.one/tild3662-3663-4139-a630-313066303637/-/cover/520x520/center/center/-/format/webp/1.png"
                musicLink="https://music.apple.com/us/artist/emin/275351904"
              />
              <ArtistCard
                text="outlandish"
                image="https://optim.tildacdn.one/tild3063-6461-4263-a166-393563303562/-/cover/520x520/center/center/-/format/webp/25.png"
                musicLink="https://music.apple.com/us/artist/outlandish/27417667"
              />
              <ArtistCard
                text="luisa chebotina"
                image="https://optim.tildacdn.one/tild3436-6237-4164-a337-363033653034/-/cover/520x520/center/center/-/format/webp/lusia.png"
                musicLink="https://music.apple.com/us/artist/%D0%BB%D1%8E%D1%81%D1%8F-%D1%87%D0%B5%D0%B1%D0%BE%D1%82%D0%B8%D0%BD%D0%B0/1133504399"
              />
              <ArtistCard
                text="muboriz usmonov"
                image="https://optim.tildacdn.one/tild3464-6234-4538-b864-343536643132/-/cover/520x520/center/center/-/format/webp/24.png"
                musicLink="https://music.apple.com/us/artist/muboriz-usmonov/1089978529"
              />
              <ArtistCard
                text="sevanna"
                image="https://optim.tildacdn.one/tild3639-3464-4239-b437-386661343364/-/cover/520x520/center/center/-/format/webp/30.png"
                musicLink="https://music.apple.com/ru/artist/sevanna/1745944734"
              />
              <ArtistCard
                text="aisel"
                image="https://optim.tildacdn.one/tild3933-3661-4363-b336-346461303632/-/cover/520x520/center/center/-/format/webp/31.png"
                musicLink="https://music.apple.com/us/artist/aisel/1174908600"
              />
              <ArtistCard
                text="samra"
                image="https://optim.tildacdn.one/tild6134-3730-4334-b831-653530386135/-/cover/520x520/center/center/-/format/webp/Samra2.png"
                musicLink="https://music.apple.com/us/artist/samra/1462109770"
              />
              <ArtistCard
                text="brabdon stone"
                image="https://optim.tildacdn.one/tild6339-3861-4839-b335-396437646637/-/cover/520x520/center/center/-/format/webp/33.png"
                musicLink="https://music.apple.com/us/artist/brandon-stone/27537918"
              />
              <ArtistCard
                text="alonestar"
                image="https://optim.tildacdn.one/tild3932-3163-4433-a536-663537386135/-/cover/520x520/center/center/-/format/webp/alone.png"
                musicLink="https://music.apple.com/us/artist/alonestar/373053251"
              />
              <ArtistCard
                text="thomas andres"
                image="https://optim.tildacdn.one/tild3539-3439-4339-b330-343864636338/-/cover/520x520/center/center/-/format/webp/artist2.png"
                musicLink="https://music.apple.com/us/artist/thomas-anders/19516583"
              />
              <ArtistCard
                text="haddway"
                image="https://optim.tildacdn.one/tild6637-3636-4361-a234-356635336334/-/cover/520x520/center/center/-/format/webp/12.png"
                musicLink="https://music.apple.com/us/artist/haddaway/1251593"
              />
              <ArtistCard
                text="dr.alban"
                image="https://optim.tildacdn.one/tild6535-3965-4534-b262-643038393233/-/cover/520x520/center/center/-/format/webp/11.png"
                musicLink="https://music.apple.com/us/artist/dr-alban/14749297"
              />
              <ArtistCard
                text="burak yeter"
                image="https://optim.tildacdn.one/tild3439-3865-4234-b962-306439656235/-/cover/520x520/center/center/-/format/webp/10.png"
                musicLink="https://music.apple.com/us/artist/burak-yeter/254710145"
              />
              <ArtistCard
                text="imagination feat.leee john"
                image="https://optim.tildacdn.one/tild3934-3532-4336-a364-366335623965/-/cover/520x520/center/center/-/format/webp/1.png"
                musicLink="https://music.apple.com/us/artist/leee-john/11712194"
              />
              <ArtistCard
                text="roya"
                image="https://optim.tildacdn.one/tild3233-3630-4666-b262-623731386665/-/cover/520x520/center/center/-/format/webp/8.png"
                musicLink="https://music.apple.com/us/artist/r%C3%B6ya/1200154"
              />
              <ArtistCard
                text="jah khalib"
                image="https://optim.tildacdn.one/tild3330-3932-4530-b561-393837643937/-/cover/520x520/center/center/-/format/webp/3.png"
                musicLink="https://music.apple.com/us/artist/jah-khalib/948029024"
              />
              <ArtistCard
                text="gluk'oza"
                image="https://optim.tildacdn.one/tild3562-6462-4836-b762-306663656461/-/cover/520x520/center/center/-/format/webp/artist2.png"
                musicLink="https://music.apple.com/us/artist/glukoza/598930271"
              />
              <ArtistCard
                text="zvonkiy"
                image="https://optim.tildacdn.one/tild6539-6235-4431-b866-313764393063/-/cover/520x520/center/center/-/format/webp/13.png"
                musicLink="https://music.apple.com/us/artist/zvonkiy/661577579"
              />
              <ArtistCard
                text="mot"
                image="https://optim.tildacdn.one/tild3032-3935-4233-b065-643966643234/-/cover/520x520/center/center/-/format/webp/19.png"
                musicLink="https://music.apple.com/us/artist/%D0%BC%D0%BE%D1%82/166747511"
              />
              <ArtistCard
                text="hanna"
                image=" https://optim.tildacdn.one/tild6163-6334-4361-b337-633364633339/-/cover/520x520/center/center/-/format/webp/8.png"
                musicLink="https://dreammusicfest.com/artists#!/tab/735123687-1"
              />

              <ArtistCard
                text="ani lorak"
                image="https://optim.tildacdn.one/tild3433-3835-4263-a265-636238663462/-/cover/520x520/center/center/-/format/webp/2.png"
                musicLink="https://music.apple.com/us/artist/ani-lorak/252966938"
              />
              <ArtistCard
                text="yulianna karraulova"
                image="https://optim.tildacdn.one/tild3533-3061-4232-a166-633535393061/-/cover/520x520/center/center/-/format/webp/32.png"
                musicLink="https://music.apple.com/us/artist/yulianna-karaulova/994262697"
              />
              <ArtistCard
                text="aiya"
                image="https://optim.tildacdn.one/tild6533-3831-4664-b161-336336313038/-/cover/520x520/center/center/-/format/webp/Asiya2.png"
                musicLink="https://music.apple.com/us/artist/%D0%B0%D1%81%D0%B8%D1%8F/1375507079"
              />
              <ArtistCard
                text="k-maro"
                image="https://optim.tildacdn.one/tild3361-6438-4561-b938-353936376239/-/cover/520x520/center/center/-/format/webp/asdasd.png"
                musicLink="https://music.apple.com/ru/artist/k-maro/23423517"
              />
              <ArtistCard
                text="jony"
                image="https://optim.tildacdn.one/tild3361-6438-4561-b938-353936376239/-/cover/520x520/center/center/-/format/webp/asdasd.png"
                musicLink="https://music.apple.com/us/artist/jony/1444702518"
              />
              <ArtistCard
                text="vladimir presinyakov"
                image="https://optim.tildacdn.one/tild3462-3038-4265-a663-323262363261/-/cover/520x520/center/center/-/format/webp/9.png"
                musicLink="https://music.apple.com/us/artist/ceza/127389488"
              />
              <ArtistCard
                text="ceza"
                image="https://optim.tildacdn.one/tild3833-3139-4332-a566-613431626335/-/cover/520x520/center/center/-/format/webp/2.png"
                musicLink="https://music.apple.com/us/artist/ceza/127389488"
              />
              <ArtistCard
                text="artik&asti"
                image="https://optim.tildacdn.one/tild3337-6132-4330-b730-393034356135/-/cover/520x520/center/center/-/format/webp/344.png"
                musicLink="https://music.apple.com/ru/artist/artik-asti/1073575628"
              />
              <ArtistCard
                text="zomb"
                image="https://optim.tildacdn.one/tild3562-6263-4735-a539-336336356136/-/cover/520x520/center/center/-/format/webp/zomb.png"
                musicLink="https://music.apple.com/us/artist/z%C3%B8mb/1484555438"
              />
              <ArtistCard
                text="asammuell"
                image="https://optim.tildacdn.one/tild3539-6132-4430-b239-316362336239/-/cover/520x520/center/center/-/format/webp/ASAMMUELL2.png"
                musicLink="https://music.apple.com/us/artist/asammuell/1429919101"
              />
              <ArtistCard
                text="elman"
                image="https://optim.tildacdn.one/tild3066-3530-4230-b831-313366343363/-/cover/520x520/center/center/-/format/webp/36.png"
                musicLink="https://music.apple.com/us/artist/elman/1253064201"
              />
              <ArtistCard
                text="aygun kazimova"
                image="https://optim.tildacdn.one/tild6431-3061-4364-b239-656536613433/-/cover/520x520/center/center/-/format/webp/4.png"
                musicLink="https://music.apple.com/us/artist/ayg%C3%BCn-kaz%C4%B1mova/581244241"
              />
              <ArtistCard
                text="alessandro safina"
                image="https://optim.tildacdn.one/tild6665-3335-4231-b137-363837373738/-/cover/520x520/center/center/-/format/webp/ale.png"
                musicLink="https://music.apple.com/us/artist/alessandro-safina/3577961"
              />
              <ArtistCard
                text="jack savaretti"
                image="https://optim.tildacdn.one/tild3635-6161-4561-a133-616264323439/-/cover/520x520/center/center/-/format/webp/20.png"
                musicLink="https://music.apple.com/us/artist/jack-savoretti/79356304"
              />
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default AllArtists;
