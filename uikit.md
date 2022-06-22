# Документация по UiKit

## Руководство пользователю

Компоненты uikit-а разработаны по аналогии с MUI компонентами. Каждый компонент принимает в себя набор параметры, меняющих его состояние и отображение.
Для того чтобы использовать компонент uikit-a в своем приложении, его нужно сначала импортировать (import {Button} from '.../uikit/buttons/button'), а потом обьявить в jsx (<Button />). Изменение компонента uikit-a происходит при передаче значений в его параметры (className, style, ...). Список параметров для каждого компонента можно посмотреть в типе, принемаемом им параметров (ButtonPropsType).

## Руководство разработчику

При создании нового компонента нужно создать папку (с заглавной) по имени компонента в uikit-e. Для соблюдения сегригированности, компонент логически должен быть разделен на файлы. Основканя разметка в index.tsx файле, стили - index.styles.ts, типы - index.types.ts и react-хуки index.hooks.ts. Для соблюдения инкапсулированности, компонент должен быть написан без внешних зависимостей за пределами самого компонента, а для его изменений должны быть предписаны соответствующие параметры.

## Список компонентов

### Button

Кнопка с действием.

Импорт:
import {Button} from '~src/components/uikit/buttons/Button';

Пример:
<Button
  className='push-right'
  style={{display: 'flex', margin: '10px 0'}}
  onClick={() => console.log('Clicked!')}
  >
  Test
</Button>

Параметры:
children?: React.ReactNode; // inner text or content
className?: string;
style?: React.CSSProperties;
type?: 'contained' | 'bordered' | 'text';
color?: 'primary';
selectable?: boolean; // do remain active state after click
hidden?: boolean;
onClick?: (...args: any[]) => void;

### Ellipsis

Кнопка с выпадающем списком.

Импорт:
import {Ellipsis} from '~src/components/uikit/buttons/Ellipsis';

Пример:
<Ellipsis 
  options={parseOptions(['Удалить', 'Добавить', 'Редактировать'])} 
/>

Параметры:
className?: string;
style?: React.CSSProperties;
options?: OptionType[];

### Tabs

Компонент переключения вкладок

Импорт:
import {Tabs} from '~src/components/uikit/buttons/Tabs';

Пример:
<Tabs options={parseOptions(['Ученики', 'Учителя', 'Группы'])} />

Параметры:
className?: string;
style?: React.CSSProperties;
options: OptionType[];
activeOption?: number | string; // idx | key
onSelect?: (option?: OptionType, ...args: any[]) => void;

### Tag

Текст со стилем.

Импорт:
import {Tag} from '~src/components/uikit/buttons/Tag';

Примеры:
Тег со значением
<Tag color='primary' amount={123}>Tag</Tag>
Цветной тег
<Tag status='success'>Tag</Tag>
Тег в кнопке
<Button type='text'>
  <Tag type='text' color='primary' curvature='round' amount={123}>
    Tag
  </Tag>
</Button>

Параметры:
children?: React.ReactNode; // inner text or content
className?: string;
style?: React.CSSProperties;
type?: 'text' | 'contained';
color?: 'bland' | 'primary';
status?: 'success' | 'warning' | 'error';
curvature?: 'squared' | 'soft' | 'rounded' | 'round';
amount?: number; // for label

### Check

Чекбокс.

Импорт:
import {Check} from '~src/components/uikit/inputs/Check';

Пример:
<Check checked={true} onCheck={() => console.log('Checked!')} />

Параметры:
className?: string;
style?: React.CSSProperties;
checked?: boolean;
onCheck?: (...args: any[]) => void;

### Input

Поле ввода текста.

Импорт:
import {Input} from '~src/components/uikit/inputs/Input';

Пример:
const [text, setText] = React.useState('');
<Input
  style={{display: 'block', margin: '10px 0'}}
  label='test'
  value={text}
  onChange={setText}
/>

Параметры:
className?: string;
style?: React.CSSProperties;
label?: string;
placeholder?: string;
Icon?: React.FunctionalComponent<any>;
doFlipIconY?: boolean;
value?: string;
onChange?: (value?: string) => void;

### Dropdown

Ввод с выпадающем списком.

Импорт:
import {Dropdown} from '~src/components/uikit/inputs/Dropdown';

Пример:
const [text, setText] = React.useState('');
<Dropdown
  style={{display: 'block', margin: '10px 0'}}
  value={text}
  onSelect={option => setText(option.text)}
  options={parseOptions(['Тест 1', 'Тест 2', 'Тест 3'])}
/>

Параметры:
className?: string;
style?: React.CSSProperties;
label?: string;
placeholder?: string;
Icon?: React.FunctionComponent<any>;
value?: string;
onChange?: (value?: string) => void; // for search
searchable?: boolean; // for search
options?: OptionType[];
onSelect?: (...args: any[]) => void;

### Search

Поиск с выпадающим списком.

Импорт:
import {Search} from '~src/components/uikit/inputs/Search';

Пример:
const [text, setText] = React.useState('');
<Search
  style={{display: 'block', margin: '10px 0'}}
  placeholder={'Search'}
  value={text}
  onChange={setText}
  onSelect={option => setText(option.text)}
  options={parseOptions(['Тест 1', 'Тест 2', 'Тест 3'])}
/>

Параметры:
className?: string;
style?: React.CSSProperties;
label?: string;
placeholder?: string;
Icon?: React.FunctionComponent<any>;
value?: string;
onChange?: (value?: string) => void;
options?: OptionType[];
onSelect?: (...args: any[]) => void;