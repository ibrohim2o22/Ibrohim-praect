import cardgrayimg from '../img/cardgrayimg1.png'
import { FaCheck } from "react-icons/fa6";
import cardgray from '../img/cardgray-2.png'
import cardgrayyyimg from '../img/cardgray-3.png'
import bluelineimg1 from '../img/bluelineimg-1.png'
import bluelineimg2 from '../img/bluelineimg-2.png'
import bluelineimg3 from  '../img/bluelineimg-3.png'
import Figmaimgg from "../img/Figma.png";
import Psimg from "../img/Ps.png";
import Aiimg from "../img/Ai.png";
import bluelineimg4 from '../img/bluelineimg-4.png'
import Blenderimg from "../img/Blender.png";
import fulllllllimg from '../img/fullllllllllllllllimg.png'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import smallcardimg1 from '../img/smallcardimg-1.png'
import smallcardimg2 from '../img/smallcardimg-2.png'
import smallcardimg3 from '../img/smallcardimg-3.png'
import smallcardimg4 from '../img/smallcardimg-4.png'
import smallcardimg5 from '../img/smallcardimg-5.png'
import { RiRectangleLine } from "react-icons/ri";

function Card() {
  return (
    <div>
      <div>
        <h2 className="h2-29 text-3xl ml-[350px] mt-[100px] font-semibold">
          Кому подойдёт курс
        </h2>
        <h2 className="h2-30 ml-[350px] mt-[30px]">
          Мы создали курс «Профессия графический дизайнер» для тех, кто хочет:
        </h2>
        <div className="cardgray-1 w-80 bg-gray-200 ml-[150px]  mt-[50px] rounded-2xl">
          <img className="img-8 ml-[30px]" src={cardgrayimg} alt="" />
          <h2 className="h2-31 ml-[40px] mt-[30px] font-semibold">
            Освоить профессию с нуля
          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-32 ml-[75px] mt-[-22px]'>
          Для старта не нужны <br /> специальные знания: <br /> учим от простого к сложному
          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-33 ml-[75px] mt-[-22px]'>
          Вы получите практические <br /> навыки работы
          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-34 ml-[75px] mt-[-22px]'>
          Соберёте привлекательное <br /> портфолио, которое поможет <br /> брать заказы на фрилансе или <br /> устроиться на постоянную <br /> работу
          </h2>
        </div>
        <div className="cardgray-1 w-80 bg-gray-200 ml-[600px] mt-[-500px] rounded-2xl">
          <img className="img-8 ml-[30px]" src={cardgray} alt="" />
          <h2 className="h2-31 ml-[40px] mt-[30px] font-semibold">
          Систематизировать знания <br /> и сделать графический <br /> дизайн своей профессией
          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-32 ml-[75px] mt-[-22px]'>
          Углубите знания основных <br /> программ для графического <br /> дизайна          
          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-33 ml-[75px] mt-[-22px]'>
          Отточите навыки композиции, <br /> типографики и графического <br /> дизайна          
          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-34 ml-[75px] mt-[-22px]'>
          Изучите все этапы создания <br /> айдентики для бренда          
         </h2>
        </div>
        <div className="cardgray-1 w-80 bg-gray-200 ml-[1045px] mt-[-500px] rounded-2xl">
          <img className="img-8 ml-[30px]" src={cardgrayyyimg} alt="" />
          <h2 className="h2-31 ml-[40px] mt-[30px] font-semibold">
          Получить дополнительный <br /> навык к профессии <br /> маркетолога, редактора <br /> и любой другой творческой <br />профессии          
          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-32 ml-[75px] mt-[-22px]'>
          Сможете решать новые <br /> бизнес‑задачи          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-33 ml-[75px] mt-[-22px]'>
          Будете зарабатывать больше          
          </h2>
          <FaCheck  className='checkicon-1 ml-[40px] mt-[20px]' />
          <h2 className='h2-34 ml-[75px] mt-[-22px]'>
          Получите дополнительное <br /> преимущество перед другими <br /> кандидатами на рынке труда         
          </h2>
        </div>
      </div>



      <div>
        <h2 className='h2-35 ml-[200px] text-4xl font-semibold mt-[150px]'>
          Дорожная карта курса
        </h2>
        <h2 className='h2-36 ml-[200px] mt-[40px]'>
        Эта дорожная карта — то, каким мы видим идеальный путь для того, чтобы стать востребованным <br /> графическим дизайнером. Мы разработали её вместе с экспертами индустрии. Вы получите навыки, <br /> которые действительно пригодятся в профессии графического дизайнера.
        </h2>
        <h2 className='h2-37 ml-[200px] mt-[20px]'>
        Вы можете пройти всю программу целиком или изучить только определённые модули. Это удобно, если <br /> вам нужно подтянуть отдельные темы или у вас уже есть бэкграунд в графическом-дизайне.
        </h2>
        <h2 className='h2-38 text-2xl text-blue-500 ml-[200px] mt-[50px]'>
        Этап 1.
        </h2>
        <h2 className='h2-39 ml-[300px] mt-[-32px] text-2xl'>
        Введение в профессию графический дизайнер
        </h2>
        <img className='img-8 ml-[202px]' src={bluelineimg1} alt="" />
        <h2 className='h2-38 text-2xl text-blue-500 ml-[200px] mt-[50px]'>
        Этап 2.
        </h2>
        <h2 className='h2-39 ml-[300px] mt-[-32px] text-2xl'>
        Основы композиции, цвета, типографики и граф. дизайна        
        </h2>
        <img className='img-9 ml-[202px] mt-[50px]' src={bluelineimg2} alt="" />
        <img className='img-10 ml-[200px] mt-[-22px]' src={bluelineimg1} alt="" />
        <img className='img-11 ml-[500px] mt-[-40px]' src={bluelineimg3} alt="" />
        <img className='img-11 ml-[800px] mt-[-37px]' src={bluelineimg3} alt="" />
        <img className='img-11 ml-[1075px] mt-[-37px]' src={bluelineimg3} alt="" />
        <h2 className='h2-40 mt-[20px] ml-[190px] text-base'>Lorem ipsum dolor <br /> sit amet.</h2>
        <h2 className='h2-40 mt-[-50px] ml-[500px] text-base'>Lorem ipsum dolor <br /> sit amet.</h2>
        <h2 className='h2-40 mt-[-50px] ml-[1070px] text-base'>Lorem ipsum dolor <br /> sit amet.</h2>
        <h2 className='h2-40 mt-[-50px] ml-[800px] text-base'>Lorem ipsum dolor <br /> sit amet.</h2>
        <img className='img-8 ml-[202px] mt-[10px]' src={bluelineimg1} alt="" />
        <h2 className='h2-38 text-2xl text-blue-500 ml-[200px] mt-[50px]'>
        Этап 3.
        </h2>
        <h2 className='h2-39 ml-[300px] mt-[-32px] text-2xl'>
        Основные программы для граф. дизайна        
        </h2>
        <img className='img-9 ml-[202px] mt-[50px]' src={bluelineimg2} alt="" />
        <img className='img-10 ml-[200px] mt-[-22px]' src={bluelineimg1} alt="" />
        <img className='img-11 ml-[600px] mt-[-40px]' src={bluelineimg3} alt="" />
        <img className='img-11 ml-[1075px] mt-[-37px]' src={bluelineimg3} alt="" />
        <img className='img-12 ml-[190px] mt-[20px]' src={Figmaimgg} alt="" />
        <h2 className='h2-41 ml-[250px] mt-[-45px]'>
          Lorem ipsum dolor <br /> sit amet.
        </h2>
        <img className='img-12 ml-[600px] mt-[-50px]' src={Psimg} alt="" />
        <h2 className='h2-41 ml-[660px] mt-[-45px]'>
          Lorem ipsum dolor <br /> sit amet.
        </h2>
        <img className='img-12 ml-[1075px] mt-[-50px]' src={Aiimg} alt="" />
        <h2 className='h2-41 ml-[1135px] mt-[-45px]'>
          Lorem ipsum dolor <br /> sit amet.
        </h2>
        <img className='img-8 ml-[202px] mt-[20px]' src={bluelineimg1} alt="" />
        <h2 className='h2-38 text-2xl text-blue-500 ml-[200px] mt-[50px]'>
        Этап 4.
        </h2>
        <h2 className='h2-39 ml-[300px] mt-[-32px] text-2xl'>
        Дополнительные навыки        
        </h2>
        <img className='h2-42 ml-[200px] mt-[70px]' src={bluelineimg4} alt="" />
        <img className='img-10 ml-[200px] mt-[-32px]' src={bluelineimg1} alt="" />
        <img className='img-13 ml-[200px] mt-[10px]' src={Blenderimg} alt="" />
        <h2 className='h2-41 ml-[260px] mt-[-45px]'>
          Lorem ipsum dolor <br /> sit amet.
        </h2>
        <img className='img-10 ml-[200px] mt-[32px]' src={bluelineimg1} alt="" />
        <h2 className='h2-38 text-2xl text-blue-500 ml-[200px] mt-[30px]'>
        Этап 5.
        </h2>
        <h2 className='h2-39 ml-[300px] mt-[-32px] text-2xl'>
        Курсовая работа        
        </h2>
        <h2 className='h2-43 ml-[200px] mt-[20px]'>
        Дизайн айдентики. Разработка и оформление бренда с нуля
        </h2>
        <img className='img-14 ml-[170px] mt-[40px]' src={fulllllllimg} alt="" />
        <img className='img-10 ml-[200px] mt-[32px]' src={bluelineimg1} alt="" />
        <h2 className='h2-38 text-2xl text-blue-500 ml-[200px] mt-[30px]'>
        Этап 6.
        </h2>
        <h2 className='h2-39 ml-[300px] mt-[-32px] text-2xl'>
        Старт карьеры в графическом-дизайне        
        </h2>
      </div>

      {/* <h2 className='h2-45 text-4xl ml-[170px] mt-[50px] font-semibold'>Содержание курса</h2> */}

      <div className='iconplusss px-40 py-28 w-3/4 h-auto bg-gray-200 ml-[190px] mt-[50px]'>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon className='text-blue-600' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          О профессии «графический дизайнер»
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='iconadditionnn-1 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-1 text-blue-600' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Основы композиции
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='iconadditionnn-2 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-2 text-blue-600' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >   
          Типографика и работа с текстом
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
      
      <Accordion className='iconadditionnn-3 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-3 text-blue-600' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Цвет
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='iconadditionnn-4 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-4 text-blue-600' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Насмотренность и работа с референсами
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='iconadditionnn-5 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-5 text-blue-600' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >   
          Веб и UI/UX-дизайн в Figma
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
      <Accordion className='iconadditionnn-6 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-6 text-blue-600' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Работа в Photoshop
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='iconadditionnn-7 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-7 text-blue-600' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Векторная графика в Adobe Illustrator
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion  className='iconadditionnn-8 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-8 text-blue-600' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >   
          3D-графика в Blender
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>

      <Accordion className='iconadditionnn-9 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-9 text-blue-600' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Дизайн айдентики. Разработка и оформление бренда с нуля
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='iconadditionnn-10 mt-[30px]'>
        <AccordionSummary
          expandIcon={<AddIcon className='addicon-10 text-blue-600' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Софт-скилы для дизайнера
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>

        

    <div>
      <h2 className='h2-46 ml-[250px] mt-[100px] text-4xl font-semibold'>Особенности курса</h2>
      <h2 className='h2-47 text-blue-600 ml-[200px] font-semibold mt-[50px]'>1</h2>
      <h2 className='h2-48 ml-[230px] mt-[-25px]'>Помощь с установкой <br /> необходимых программ</h2>
      <h2 className='h2-47 text-blue-600 ml-[500px] font-semibold mt-[-50px]'>2</h2>
      <h2 className='h2-48 ml-[530px] mt-[-25px]'>Общение с авторами курса <br /> в закрытом Telegram‑сообществе</h2>
      <h2 className='h2-47 text-blue-600 ml-[900px] font-semibold mt-[-50px]'>3</h2>
      <h2 className='h2-48 ml-[930px] mt-[-25px]'>Кейс по разработке айдентики <br /> для бренда в портфолио</h2>
      <h2 className='h2-47 text-blue-600 ml-[200px] font-semibold mt-[70px]'>4</h2>
      <h2 className='h2-48 ml-[230px] mt-[-25px]'>Обратная связь и кураторство</h2>
      <h2 className='h2-47 text-blue-600 ml-[500px] font-semibold mt-[-22px]'>5</h2>
      <h2 className='h2-48 ml-[530px] mt-[-25px]'>Сертификат о прохождении</h2>
      <h2 className='h2-47 text-blue-600 ml-[900px] font-semibold mt-[-25px]'>6</h2>
      <h2 className='h2-48 ml-[930px] mt-[-25px]'>Подготовка к трудоустройству</h2>
    </div>




    <div className='allcardfather w-3/4 ml-[200px] bg-gray-300 mt-[150px]'>
      <h2 className='h2-49 text-center font-semibold text-4xl'>Вы будете учиться у практикующих экспертов</h2>
      <div className='flex gap-12 ml-[95px]'>
        <div className='smallcard-1 w-64 h-44 mt-[200px] bg-white ml-[20px]'>
          <img className='smallcardimg-1' src={smallcardimg1} alt="" />
          <h2 className='h2-50 ml-[60px] font-semibold  mt-[-60px]'>Анастасия Галеева</h2>
          <h2 className='h2-51 ml-[40px] text-gray-500'>Дизайнер и арт-директор, портфолио:</h2>
        </div>
  
  
        <div className='smallcard-1 w-64 h-44 mt-[200px] bg-white ml-[20px]'>
         <img className='smallcardimg-1' src={smallcardimg2} alt="" />
         <h2 className='h2-50 ml-[60px] font-semibold  mt-[-60px]'>Максим Кузнецов</h2>
          <h2 className='h2-51 ml-[40px] text-gray-500'>UI/UX-дизайнер с большим опытом</h2>
        </div>
  
  
        <div className='smallcard-1 w-64 h-44 mt-[200px] bg-white ml-[20px]'>
         <img className='smallcardimg-1' src={smallcardimg3} alt="" />
         <h2 className='h2-50 ml-[60px] font-semibold  mt-[-60px]'>Александра Нова</h2>
          <h2 className='h2-51 ml-[40px] text-gray-500'>CEO «Ярость Фибоначчи», преподаватель,</h2>
        </div>
      </div>

      <div className='smallcard-2 w-64 h-44 mt-[200px] bg-white ml-[20px]'>
        <img className='smallcardimg-1' src={smallcardimg4} alt="" />
        <h2 className='h2-50 ml-[60px] font-semibold  mt-[-60px]'>Михаил Бычков</h2>
        <h2 className='h2-51 ml-[40px] text-gray-500'>Работал на проектах YouTube, Adidas</h2>
      </div>

      <div className='smallcard-3 w-64 h-44 mt-[200px] bg-white ml-[20px]'>
       <img className='smallcardimg-1' src={smallcardimg5} alt="" />
       <h2 className='h2-50 ml-[60px] font-semibold  mt-[-60px]'>Дмитрий Кузнецов</h2>
        <h2 className='h2-51 ml-[40px] text-gray-500'>Окончил кафедру дизайна и полиграфических</h2>
      </div>
  
    </div>


    <div className='thepraectend w-full bg-blue-200 mt-[200px]'>
      <h2 className='h2-52 text-white text-2xl font-semibold ml-[300px]'>Стоимость курса:</h2>
      <h2 className='h2-53 text-white text-2xl font-bold ml-[350px] mt-[210px]'>99000 ₽</h2>
      <h2 className='h2-54 text-white ml-[330px] mt-[10px]'>Показать цены в: </h2>
      <div className='w-96 h-96 bg-white ml-[800px] mt-[-250px] rounded-2xl'>
        <h2 className='h2-55 text-4xl font-semibold ml-[50px]'>Оставьте заявку</h2>
        <form action="#">
         <input className='input-1 text-black ml-[50px] mt-[30px]' type="text" placeholder='Имя' required />
        </form>
        <form action="#">
         <input className='input-1 text-black ml-[50px] mt-[30px]' type="text" placeholder='Email' required />
        </form>
        <form action="#">
         <input className='input-1 text-black ml-[50px] mt-[30px]' type="text" placeholder='Телефон' required />
        </form>
        <RiRectangleLine className='iconrectengle mt-[20px] ml-[50px]' />
        <h2 className='h2-57 ml-[80px] mt-[-20px]'>Я соглашаюсь с условиями публичной оферты  и политики конфиденциальности</h2>
        <button className='butttttton w-44 h-8 bg-gray-400 text-white rounded-2xl ml-[90px] mt-[30px]'>Хочу учиться</button>
      </div>
    </div>



    </div>
  )
}

export default Card