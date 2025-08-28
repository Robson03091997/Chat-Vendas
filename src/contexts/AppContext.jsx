import { createContext, useContext, useReducer, useEffect } from 'react';
import { plans, coupons } from '../data/plans';

const AppContext = createContext();

const initialState = {
  plans: plans,
  coupons: coupons,
  currentUser: null,
  chatMessages: [],
  isAdmin: false,
  selectedPlan: null,
  appliedCoupon: null
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, currentUser: action.payload };
    case 'SET_ADMIN':
      return { ...state, isAdmin: action.payload };
    case 'ADD_CHAT_MESSAGE':
      return { 
        ...state, 
        chatMessages: [...state.chatMessages, action.payload] 
      };
    case 'SET_SELECTED_PLAN':
      return { ...state, selectedPlan: action.payload };
    case 'APPLY_COUPON':
      return { ...state, appliedCoupon: action.payload };
    case 'REMOVE_COUPON':
      return { ...state, appliedCoupon: null };
    case 'UPDATE_PLANS':
      return { ...state, plans: action.payload };
    case 'ADD_PLAN':
      return { ...state, plans: [...state.plans, action.payload] };
    case 'UPDATE_COUPONS':
      return { ...state, coupons: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addChatMessage = (message) => {
    dispatch({ type: 'ADD_CHAT_MESSAGE', payload: message });
  };

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const setAdmin = (isAdmin) => {
    dispatch({ type: 'SET_ADMIN', payload: isAdmin });
  };

  const selectPlan = (plan) => {
    dispatch({ type: 'SET_SELECTED_PLAN', payload: plan });
  };

  const applyCoupon = (coupon) => {
    dispatch({ type: 'APPLY_COUPON', payload: coupon });
  };

  const removeCoupon = () => {
    dispatch({ type: 'REMOVE_COUPON' });
  };

  const updatePlans = (newPlans) => {
    dispatch({ type: 'UPDATE_PLANS', payload: newPlans });
  };

  const addPlan = (newPlan) => {
    dispatch({ type: 'ADD_PLAN', payload: newPlan });
  };

  const updateCoupons = (newCoupons) => {
    dispatch({ type: 'UPDATE_COUPONS', payload: newCoupons });
  };

  const value = {
    ...state,
    addChatMessage,
    setUser,
    setAdmin,
    selectPlan,
    applyCoupon,
    removeCoupon,
    updatePlans,
    addPlan,
    updateCoupons
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
}
