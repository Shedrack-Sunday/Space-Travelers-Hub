const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const TOGGLE_STATUS = 'space-travelers-hub/missions/TOGGLE_STATUS';

const initialState = [
  {
    key: '1',
    mission: 'test',
    description: 'testdescription',
    status: true,
  },
  {
    key: '2',
    mission: 'test2',
    description: 'testdescription2',
    status: false,
  },
];

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MISSIONS: return state;
    case TOGGLE_STATUS: return [...state, action.payload];
    default:
      return state;
  }
}

export const getMissions = () => ({
  type: GET_MISSIONS,
});

export const toggleStatus = () => ({
  type: TOGGLE_STATUS,
  payload: {
    mission: 'test',
    description: 'testdescription',
    status: true,
  },
});
