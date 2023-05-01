import { selectIsLoading } from 'Redax/Cards/selector';
import { setFilter } from 'Redax/Filter/slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const FilterSelect = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const selectFilter = value => dispatch(setFilter(value));

  useEffect(() => {
    return () => {
      dispatch(setFilter('all'));
    };
  }, [dispatch]);
    return (
      <>
        {!isLoading && (
          <div>
            <select
              id="filter"
              name="filterForm"
              onChange={e => selectFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="follow">follow</option>
              <option value="followings">Following</option>
            </select>
          </div>
        )}
      </>
    );
};

export default FilterSelect;
