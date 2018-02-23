import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions';
import ScheduleTab from './ScheduleTab';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const ScheduleFilterTab = connect(mapStateToProps, mapDispatchToProps)(ScheduleTab);

export default ScheduleFilterTab;
