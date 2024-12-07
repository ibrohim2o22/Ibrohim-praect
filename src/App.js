import "./App.css";
import Figmaimg from "./img/Figma.png";
import Aiimg from "./img/Ai.png";
import Psimg from "./img/Ps.png";
import Blenderimg from "./img/Blender.png";
import { HiOutlineCheck } from "react-icons/hi";
import Fullimg from "./img/Fullimg.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Gifimg from "./img/gifimg.png";
import { SiAdobeindesign } from "react-icons/si";
import realprojectimg from "./img/realimgimportantproject.jpg";
import hhimg from "./img/hh.png";
import cheksizimg from "./img/cheksiz.png";
import cardgray1 from "./img/cardgrayimg1.png";
import Card from "./components/Card";
import Image from "./img/pppppppppppppppp.jpg"

function App() {
  return (
    <div className="App">
      <div className="navbar flex items-center justify-end py-8 px-24 gap-20 bg-[#F2F3F6]">
        <ul className="ul-1 flex gap-10 justify-center">
          <li className="li-1">Содержание</li>
          <li className="li-2">Особенности курса</li>
          <li className="li-3">Авторы</li>
          <li className="li-4">Отзывы</li>
        </ul>
        <button className="button-1 w-48 h-10 bg-red-500 rounded-xl  text-white">
          Оставить заявку
        </button>
      </div>
      <hr />
      <div className="navbar-body flex bg-[#F2F3F6]">
       <div>
       <button className="button-2 w-40 h-8 bg-white text-black border-black border-2 font-semibold ml-[250px] mt-[50px] rounded-md">
          Курс-профессия
        </button>
        <h2 className="h2-1 font-semibold text-5xl ml-[250px]  mt-[20px]">
          Grafik dizayner <br /> kasbi
        </h2>
        <h2 className="h2-2 ml-[250px] mt-[20px]">
          Noldan grafik dizaynerga aylaning. Chiroyli grafikalar, logotiplar,
          reklama <br /> kreativlari va bannerlari hamda brend aydentikasi
          yaratishni o'rganing.
        </h2>
        <h2 className="h2-3 ml-[250px] mt-[20px]">
          Kurs sizga tezda kasbga kirishga yordam beradi: siz dizayn
          studiyasida, <br /> reklama agentligida ishga joylashish yoki
          frilanser sifatida buyurtmalarini <br /> qabul qilish uchun zarur
          ko'nikma va bilimlarga ega bo'lasiz.
        </h2>

        <img
          className="img-1 h-5 ml-[250px] mt-[100px]"
          src={Figmaimg}
          alt=""
        />
        <h2 className="h2-4 ml-[290px] mt-[-23px]">Figma</h2>
        <img className="img-2 h-5 ml-[390px] mt-[-19px]" src={Aiimg} alt="" />
        <h2 className="h2-5 ml-[430px] mt-[-23px]">Illustrator</h2>
        <img className="img-3 h-5 ml-[540px] mt-[-20px]" src={Psimg} alt="" />
        <h2 className="h2-6 ml-[580px] mt-[-23px]">Photoshop</h2>
        <img
          className="img-4 h-5 ml-[700px]  mt-[-20px]"
          src={Blenderimg}
          alt=""
        />
        <h2 className="h2-6 ml-[740px]  mt-[-23px]">Blender</h2>
        <HiOutlineCheck className="icon-1 text-orange-500 h-6 w-6 ml-[250px] mt-[50px]" />
        <span className="span-1 ml-[290px]">Ishga tayyorlash</span>
        <HiOutlineCheck className="icon-1 text-orange-500 h-6 w-6 ml-[250px]" />
        <span className="span-1 ml-[290px]">Shaxsiy mentor yordami</span>
        <HiOutlineCheck className="icon-1 text-orange-500 h-6 w-6 ml-[250px]" />
        <span className="span-1 ml-[290px]">
          Yopiq Telegram kanalida kurs kuratorlari bilan muloqot
        </span>
        <HiOutlineCheck className="icon-1 text-orange-500 h-6 w-6 ml-[250px]" />
        <span className="span-1 ml-[290px]">
          Tayyor portfolio loyihasi: brend aydentikasini noldan ishlab chiqish
        </span>
        <HiOutlineCheck className="icon-1 text-orange-500 h-6 w-6 ml-[250px]" />
        <span className="span-1 ml-[290px]">
          Planshetsiz bajarilishi mumkin, chizish ko'nikmalari talab qilinmaydi
        </span>
        <HiOutlineCheck className="icon-1 text-orange-500 h-6 w-6 ml-[250px]" />
        <span className="span-1 ml-[290px]">Kurs yakunida sertifikat</span>
       </div>
       <div>
        <img src={Image} alt="image" />
       </div>
      </div>

      <div>
        <h2 className="h2-7 ml-[250px] mt-[150px] text-4xl font-semibold">
          Grafik dizayner nima qiladi?
        </h2>
        <h2 className="h2-8 ml-[250px] mt-[30px]">
          Grafik dizayn tom ma'noda bizning atrofimizda.
        </h2>
        <h2 className="h2-9 ml-[250px] mt-[30px]">
          Mahsulotlar qadoqlari, xaritalar va diagrammalar, tovar, ochilish
          sahifalari, ilovalar, reklama, bannerlar va boshqa <br /> ko'p
          narsalar - bularning barchasi grafik dizaynerlar tomonidan ishlab
          chiqilgan.
        </h2>
        <img className="img-5 ml-[250px] mt-[50px]" src={Fullimg} alt="" />
        <h2 className="h2-10 text-4xl font-semibold ml-[250px] mt-[150px]">
          Kasbda boshlash uchun kerak bo'lgan hamma <br /> narsani o'rgatamiz
        </h2>
        <div className="twocard">
          <IoMdCheckmarkCircle className="icon-2 text-orange-500 h-6 w-6 ml-[250px] mt-[30px]" />
          <span className="span-2 ml-[300px] font-bold">
            Kompozitsiya, rang, tipografiya asoslari
          </span>
          <h2 className="h2-11 ml-[300px]">
            Biz mashg'ulotimizni vizual idrok etish qonunlari, <br />{" "}
            kompozitsiya qoidalari va tipografiyadan boshlaymiz. <br /> Biz
            sizning kuzatish qobiliyatingiz va badiiy didingizni <br />{" "}
            yaxshilashga yordam beramiz.
          </h2>{" "}
          <h2 className="h2-12 ml-[300px] mt-[10px]">
            Avval biz "nima" yaratishni o'rganamiz. <br /> Keyin biz uni amalga
            oshirish uchun "qanday" <br /> yaratishga o'tamiz.
          </h2>
          <IoMdCheckmarkCircle className="icon-2 text-orange-500 h-6 w-6 ml-[250px] mt-[30px]" />
          <span className="span-2 ml-[300px] font-bold">
            Amaliy ko'nikmalar
          </span>
          <h2 className="h2-13 ml-[300px]">
            Amalda biz brend uchun identifikatsiyani yaratishning <br /> barcha
            bosqichlarini noldan tahlil qilamiz.
          </h2>
          <h2 className="h2-11 ml-[300px] mt-[10px]">
            Siz mijoz bilan intervyu olishingiz, qisqacha ma'lumot olishingiz,{" "}
            <br />
            dizaynni ishlab chiqishingiz, dizaynni ommaviy axborot <br />
            vositalariga topshirishingiz va tayyor natijani mijozga <br />
            taqdim etishingiz kerak.
          </h2>
          <h2 className="h2-12 ml-[300px] mt-[10px]">
            Kursning amaliy topshiriqlaridan siz o'zingizning portfelingizga{" "}
            <br />
            qo'yishingiz mumkin bo'lgan birinchi to'liq ishingizni to'playsiz.
          </h2>
        </div>
        <div className="carddssdsdsdssd-1 ml-[650px] mt-[-550px]">
          <IoMdCheckmarkCircle className="icon-2 text-orange-500 h-6 w-6 ml-[250px] mt-[30px]" />
          <span className="span-2 ml-[300px] font-bold">
            Grafik dizayn dasturiy ta'minot
          </span>
          <h2 className="h2-13 ml-[300px]">
            Biz grafik dizayn uchun asosiy dasturlarni o'rganamiz: <br />
            Illustrator, Photoshop, CorolDraw, InDesign, After effects. <br />{" "}
            Biz interfeys, vositalar va imkoniyatlar bilan batafsil tanishamiz.
          </h2>
        </div>
        <div className="cardsssffddfqge-2 ml-[650px]">
          <IoMdCheckmarkCircle className="icon-2 text-orange-500 h-6 w-6 ml-[250px] mt-[150px]" />
          <span className="span-2 ml-[300px] font-bold">
            Yumshoq ko'nikmalar va o'zini o'zi taqdim etish
          </span>
          <h2 className="h2-13 ml-[300px]">
            Kasbda muvaffaqiyat qozonish uchun dizayner mijozlar bilan <br />
            muzo aralar olib borishi, tuzatishlar va tanqidlar bilan ishlay{" "}
            <br />
            olishi va yakuniy natijani taqdim eta olishi muhimdir.
          </h2>
          <h2 className="h2-11 ml-[300px]  mt-[10px]">
            Biz yumshoq ko'nikmalarga alohida o'quv blokini bag'ishladik: <br />
            teng texnik ko'nikmalarga ega bo'lgan holda, o'zini qanday qilib{" "}
            <br />
            malakali ko'rsatishni biladigan va ular bilan ishlash yoqimli
            bo'lganlar <br />
            ko'proq pul topishadi.
          </h2>
        </div>
      </div>

      <div className="grafikadzayner ml-[200px] bg-gray-200 w-3/4  mt-[150px]">
        <h2 className="h2-14 text-5xl font-semibold ml-[100px]">
          Biz sizga grafik dizaynerning <br /> asosiy ko'nikmalarini <br />{" "}
          o'rgatamiz
        </h2>
        <div className="w-80 h-2/4 bg-white ml-[100px] mt-[250px] rounded-2xl">
          <img className=" girl w-48 h-48 ml-[65px]" src={Gifimg} alt="" />
          <h2 className="h2-15 ml-[130px] mt-[50px] ">Lavozim</h2>
          <h2 className="h2-16 text-3xl font-semibold ml-[110px] mt-[10px]">
            Grafika <br /> dizayner
          </h2>
        </div>
        <div className="w-1/2 h-2/4 bg-white ml-[500px] mt-[-500px] rounded-2xl">
          <h2 className="h2-17 text-gray-400">Konikmalar</h2>
          <IoMdCheckmarkCircle className="text-green-600 w-6 h-6 mt-[40px] ml-[20px]" />
          <h2 className="h2-18 ml-[60px] mt-[-26px]">
            Illustratorda grafik va dizayn <br /> matnlarini yarataman
          </h2>
          <IoMdCheckmarkCircle className="text-green-600 w-6 h-6 mt-[40px] ml-[20px]" />
          <h2 className="h2-18 ml-[60px] mt-[-26px]">
            Men murakkab vektor <br /> rasmlarini yarataman
          </h2>
          <IoMdCheckmarkCircle className="text-green-600 w-6 h-6 mt-[40px] ml-[20px]" />
          <h2 className="h2-18 ml-[60px] mt-[-26px]">
            Men plakatlar, bannerlar, tashrif <br /> qog'ozlari, taqdimotlar va{" "}
            <br /> POS-materiallar dizaynini ishlab <br /> chiqaman
          </h2>
          <h2 className="h2-19 text-gray-400 ml-[50px] mt-[30px]">Dasturlar</h2>
          <img
            className="imghhh-1 w-7 h-7 mt-[30px] ml-[30px]"
            src={Aiimg}
            alt=""
          />
          <button className="buttonwww-1 w-40 h-8 bg-gray-200 ml-[60px] font-semibold">
            Adobe Illustrator
          </button>
          <img
            className="imghhh-2 w-7 h-7 ml-[240px] mt-[-60px]"
            src={Psimg}
            alt=""
          />
          <button className="buttonwww-2 w-40 h-8 bg-gray-200 ml-[270px] font-semibold">
            Adobe Photoshop
          </button>
          <SiAdobeindesign className="iconid bg-red-600 w-7 h-7 ml-[30px] mt-[-12px] rounded-md" />
          <button className="buttonwww-1 w-40 h-8 bg-gray-200 ml-[60px] font-semibold">
            Adobe InDesign
          </button>
          <img
            className="imghhh-2 w-7 h-7 ml-[240px] mt-[-60px]"
            src={Figmaimg}
            alt=""
          />
          <button className="buttonwww-2 w-24 h-8 bg-gray-200 ml-[270px] font-semibold">
            Figma
          </button>
        </div>
      </div>

      <div className="reyting body">
        <h2 className="h2-20 text-4xl font-semibold mt-[100px] ml-[400px]">
          Tajriba bilan daromad oshadi
        </h2>
        <img
          className="img-6 w-8 h-8 mt-[50px] ml-[400px]"
          src={hhimg}
          alt=""
        />
        <h2 className="h2-21 ml-[450px] mt-[-35px]">
          hh.uz ma'lumotlariga ko'ra, grafik dizaynerning <br /> o'rtacha ish
          haqi 9 500 000 tashkil qiladi
        </h2>
        <div className="w-52 h-24 bg-gray-200 rounded-2xl ml-[400px] mt-[100px]">
          <h2 className="text-2xl text-center font-semibold">3 500 000</h2>
          <div className="flex gap-3 ml-[45px] mt-[20px]">
            <button className="buttonwww-3 w-10 h-8 bg-white text-xs font-semibold rounded-xl mt-[0px]">
              Junior
            </button>
            <h2 className="h2-22">1yilgacha</h2>
          </div>
        </div>
        <div className="w-52 h-40 bg-gray-200 rounded-2xl ml-[700px] mt-[-160px]">
          <h2 className="h2-23 text-2xl text-center font-semibold">
            7 000 000
          </h2>
          <div className="flex gap-3 ml-[45px] mt-[80px]">
            <button className="buttonwww-3 w-10 h-8 bg-white text-xs font-semibold rounded-xl mt-[0px]">
              Midle
            </button>
            <h2 className="h2-22">1yilgacha</h2>
          </div>
        </div>
        <div className="w-52 h-52 bg-gray-200 rounded-2xl ml-[1000px] mt-[-210px]">
          <h2 className="h2-24 text-2xl text-center font-semibold">
            18 000 000
          </h2>
          <img
            className="img-7 w-42 h-16 ml-[45px] mt-[30px]"
            src={cheksizimg}
            alt=""
          />
          <div className="flex gap-3 ml-[45px] mt-[35px]">
            <button className="buttonwww-3 w-10 h-8 bg-white text-xs font-semibold rounded-xl mt-[0px]">
              Senior
            </button>
            <h2 className="h2-22">1yilgacha</h2>
          </div>
        </div>
      </div>

      <div className="grafikadzayner-1 ml-[200px] bg-gray-200 w-3/4  mt-[150px]">
        <h2 className="h2-25 text-4xl font-semibold ml-[150px]">
          Grafik dizayner - <br />
          talab qilinadigan kasb
        </h2>
        <h2 className="h2-26 ml-[150px] mt-[100px]">
          Grafik dizayner biznesga kompaniyaning ma'nolari va qadriyatlarini
          vizual materiallar orqali yetkazishga yordam beradi. <br />
          Bu yaxshiroq eslab qolish, potentsial mijozlarni jalb qilish, ular
          bilan hissiy aloqa o'rnatish va natijada kompaniyaning <br />
          daromadini oshirish uchun kerak.
        </h2>
        <h2 className="h2-27 ml-[150px] mt-[30px] text-blue-600 font-bold text-2xl">
          2000+ bo'sh ish o'rinlari
        </h2>
        <h2 className="ml-[150px]">
        hh.uz ma'lumotlariga ko'ra O’zbekistonda
        </h2>
      </div>
      <Card />
    </div>
  );
}

export default App;
