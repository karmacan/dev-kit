/* eslint-disable */
import React from 'react';
import {styles} from './index.styles';
import {Button} from '~src/uikit/buttons/Button';
import {useAppStore} from '~src/stores/app-store/AppStore';
import {parseOptions} from '~src/utils/helpers/parsers';
import {IconAngle} from '~src/uikit/assets/svg/IconAngle';
import {IconPlus} from '~src/uikit/assets/svg/IconPlus';
import {IconFilter} from '~src/uikit/assets/svg/IconFilter';
import {Input} from '~src/uikit/inputs/Input';
import {Dropdown} from '~src/uikit/inputs/Dropdown';
import {Search} from '~src/uikit/inputs/Search';
import {Tabs} from '~src/uikit/buttons/Tabs';
import {Tag} from '~src/uikit/buttons/Tag';
import {Ellipsis} from '~src/uikit/buttons/Ellipsis';
import {Check} from '~src/uikit/inputs/Check';
import {
  useComponentMount,
  useComponentDidMount,
  useValueDidUpdate,
} from '~src/utils/hooks/lifecycle';
import {Table} from '~src/uikit/Table';
import db from './table.json';
import {Preloader} from '~src/uikit/Preloader';

export const Playground = ({test = []}) => {
  const [value, setValue] = React.useState('');
  const [optionValue, setOptionValue] = React.useState('');
  const [search, setSearch] = React.useState('');

  const [options, setOptions] = React.useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [searchOptions, setSearchOptions] = React.useState([
    'Test',
    'tEst',
    'Test 1',
    'Atest',
    'Item 1',
    'Aitem',
    'Test 2',
    'Item 2',
  ]);
  const tabs = ['Tab 1', 'Tab 2222', 'Tab', 'Tab 333'];
  const [isChecked, setIsChecked] = React.useState(true);

  const [inc, setInc] = React.useState(0);

  // useValueDidUpdate(prev => console.log(prev), inc);

  const [list, setList] = React.useState(null);
  const [count, setCount] = React.useState('');

  useComponentDidMount(() => {
    setList(db);
  });

  const filterCount = content => {
    if (!count) return content;
    return content?.filter(item => item.count == count);
  };

  return (
    <>
      <div className='Playground'>
        <div style={{margin: '10px 0'}}>
          <Input
            label={'Количество'}
            placeholder={'Введите количество'}
            value={count}
            onChange={setCount}
          />
          <Table
            style={{marginTop: '10px'}}
            content={filterCount(list)}
            headers={[
              {text: 'Дата'},
              {text: 'Название', sortKey: 'name'},
              {text: 'Количество', sortKey: 'count'},
              {text: 'Расстояние', sortKey: 'length'},
            ]}
            rowTemplate={li => [<>{li.date}</>, <>{li.name}</>, <>{li.count}</>, <>{li.length}</>]}
          />
        </div>

        <div style={{margin: '40px 0'}}>
          <Tabs options={parseOptions(tabs)} />

          <div className=''>
            <Tag amount={123}>Tag</Tag>
            <Tag color='primary' amount={123}>
              Tag
            </Tag>
            <Button type='text'>
              <Tag type='text' color='primary' curvature='round' amount={1}>
                Tag
              </Tag>
            </Button>
          </div>

          <Ellipsis
            orientation='left'
            options={parseOptions(['Удалить', 'Добавить', 'Редактировать'])}
          />

          <Check checked={isChecked} onCheck={setIsChecked} />

          <div className=''>
            <Tag status='success'>Success</Tag>
            <Tag status='warning'>Warning</Tag>
            <Tag status='error'>Error</Tag>
          </div>

          <Input
            style={{display: 'block', margin: '10px 0'}}
            label='test'
            value={value}
            onChange={setValue}
          />
          <Dropdown
            style={{display: 'block', margin: '10px 0'}}
            value={optionValue}
            onSelect={option => setOptionValue(option.text)}
            options={parseOptions(options)}
          />
          <Search
            style={{display: 'block', margin: '10px 0'}}
            placeholder={'Search'}
            value={search}
            onChange={setSearch}
            onSelect={option => setSearch(option.text)}
            options={parseOptions(searchOptions)}
          />

          <Button
            className='push-right'
            style={{display: 'flex', margin: '10px 0'}}
            onClick={() => setInc(inc + 1)}
          >
            <IconPlus />
            Test
          </Button>

          <Button style={{display: 'flex', margin: '10px 0'}} type='bordered' selectable>
            <IconFilter />
            Test
            <IconAngle color={'var(--primary-color)'} />
          </Button>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
