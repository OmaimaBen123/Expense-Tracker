import Transaction from "../components/Transaction";

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      // Corrected to use 'transactions' instead of 'transaction'
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };

    case "ADD_TRANSACTION":
      // Corrected to use 'transactions' instead of 'transaction'
      return {
        ...state,
        transactions: [action.payload, ...state.transactions] // Corrected plural
      };

    default:
      return state;
  }
};
