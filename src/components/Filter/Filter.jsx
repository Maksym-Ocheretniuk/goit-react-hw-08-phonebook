import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from 'redux/filterSlice';
// import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.filterWrapper}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          value={filter}
          onChange={handleChangeFilter}
          type="text"
          name="filter"
        />
      </label>
    </div>
  );
};

// export default Filter;
