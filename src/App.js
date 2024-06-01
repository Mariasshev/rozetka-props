
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Category } from './Components/Category';


const category = 
[
  { 'name': 'Ноутбуки', 'description': false, 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/noutbuki.png'},
  { 'name': "Комп'ютери, неттопи, моноблоки", 'description': false, 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyutery.png'},
  { 'name': "Монітори", 'description': false, 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/monitory.png'},
  { 'name': "Gaming", 'description': false, 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/tovary-dlya-gejmerov.png'},
  { 'name': 'Планшети', 'description': false, 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/planshety.png'},
  { 'name': "Кабелі та перехідники", 'description': false, 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kabeli-i-perekhodniki.png'},
  { 'name': "Комп'ютерні комплектуючі", 'description': ['SSD', 'Системи охолодження', 'Відеокарти', "Оперативна пам'ять", 'Процесори', 'Материнські плати', 'Жорсткі диски', 'Блоки живлення'], 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyuternye-komplektuyushchie.png'},
  { 'name': "Мережеве обладнання", 'description': ['Маршрутизатори', 'Комутатори', 'Мережеві адаптери', "Пасивне мережеве обладнання", 'Точки доступу Wi-Fi', 'Ретранслятори Wi-Fi сигналу', 'Патч-корди'], 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/setevoe-oborudovanie.png'},
  { 'name': "Навушники та аксесуари", 'description': ['Навушники', 'TWS', 'Ігрові гарнітури', "Вакуумні навушники", 'Навушники вкладиші', 'Накладні навушники', 'Повнорозмірні навушники', 'Підсилювачі для навушників', 'Аксесуари для навушників'], 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/naushniki-i-aksessuary.png'},
  { 'name': "Клавіатури та миші", 'description': ["Комп'ютерні миші", 'Килимки для миші', 'Клавіатури', "Комплекти клавіатури та миші", 'Аксесуари для клавіатур та мишок'], 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/klaviatury-i-myshi.png'},
  { 'name': "Аксесуари для електроніки", 'description': ['USB флешки', 'Хаби і кардридери', 'Аксесуари для ПК і ноутбуків', "Комплектуючі для ноутбуків", 'Мережеві фільтри', 'Чохли та клавіатури для планшетів', 'Сумки, рюкзаки та чохли для ноутбуків', 'Очисні засоби'], 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/aksessuari-dlia-elektronyky.png'},
  { 'name': "Офісна техніка", 'description': ['Принтери і БФП', 'Сканери', 'Відеокарти', "Витратні матеріали для принтерів", 'Дошки, фліпчарти'], 'image': 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/ofisnaya-tekhnika.png'}

]

function App() {
  return (
    <div className="container-fluid px-5">
      <div className="row gx-2 gy-2">
        {category.map( item => 
        <Category 
        name={item.name}
        description={item.description}
        image={item.image}
        />
    )}
      </div>

    

    </div>

      

  );
}

export default App;
