// import {createContext, useReducer} from "react";
//
// const INITIAL_STATE = {
//     city: '',
//     dates: [],
//     options: {
//         adult: '',
//         children: '',
//         room: 0,
//     },
// };
//
// const SearchContext = createContext(INITIAL_STATE);
//
// type CounterState = {
//     city: '',
//     dates: [],
//     options: {
//         adult: '',
//         children: '',
//         room: 0,
//     },
// }
//
// type CounterAction = {
//     type: string;
//     payload: number;
// }
//
// const SearchReducer = (state: CounterState, action: CounterAction) => {
//     switch (action.type) {
//         case "NEW_SEARCH":
//             return action.payload;
//         case "RESET_SEARCH":
//             return INITIAL_STATE;
//         default:
//             return state;
//     }
// }
//
// export const SearchContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
//
//     return (
//         <SearchContext.Provider
//             value={{
//                 city: state.city,
//                 dates: state.dates,
//                 options: state.options,
//                 dispatch,
//             }}
//         >
//             {children}
//         </SearchContext.Provider>
//     );
// }
export {}